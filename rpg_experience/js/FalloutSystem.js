import * as THREE from 'three';

export class FalloutSystem {
    constructor(scene) {
        this.scene = scene;
        this.particles = [];
    }

    // Spawn purely visual fire sprites
    spawnFire(position) {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({
            color: 0xff4400,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        // Spawn a burst of 5 particles
        for (let i = 0; i < 5; i++) {
            const mesh = new THREE.Mesh(geometry, material);

            // Random offset
            const offset = new THREE.Vector3(
                (Math.random() - 0.5) * 2,
                Math.random(),
                (Math.random() - 0.5) * 2
            );

            mesh.position.copy(position).add(offset);

            this.scene.add(mesh);

            this.particles.push({
                mesh: mesh,
                type: 'FIRE',
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.1,
                    0.1 + Math.random() * 0.2, // Rise
                    (Math.random() - 0.5) * 0.1
                ),
                life: 1.0 + Math.random() // seconds
            });
        }
    }

    // Spawn static ice crystals
    spawnIce(position) {
        const geometry = new THREE.OctahedronGeometry(0.5, 0); // Geometric look
        const material = new THREE.MeshStandardMaterial({
            color: 0x00ffff,
            emissive: 0x0044aa,
            roughness: 0.1,
            metalness: 0.9,
            transparent: true,
            opacity: 0.9
        });

        // Spawn 3 crystals
        for (let i = 0; i < 3; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            // Random offset
            const offset = new THREE.Vector3(
                (Math.random() - 0.5) * 3,
                0, // On ground
                (Math.random() - 0.5) * 3
            );

            mesh.position.copy(position).add(offset);
            mesh.rotation.y = Math.random() * Math.PI;
            mesh.rotation.z = (Math.random() - 0.5) * 0.5;

            this.scene.add(mesh);

            this.particles.push({
                mesh: mesh,
                type: 'ICE',
                velocity: new THREE.Vector3(0, 0, 0),
                life: 3.0 + Math.random() // Last longer
            });
        }
    }

    update(delta) {
        // Update physics/life
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            p.life -= delta;

            if (p.type === 'FIRE') {
                p.mesh.position.add(p.velocity);
                p.mesh.rotation.x += delta;
                p.mesh.rotation.y += delta;
                p.mesh.scale.multiplyScalar(0.95); // Shrink
                p.mesh.material.opacity = p.life;
            } else if (p.type === 'ICE') {
                // Ice just slowly fades and rotates slightly
                if (p.life < 1.0) {
                    p.mesh.scale.multiplyScalar(0.98);
                    p.mesh.material.opacity = p.life;
                }
            }

            if (p.life <= 0) {
                this.scene.remove(p.mesh);
                if (p.mesh.geometry) p.mesh.geometry.dispose();
                if (p.mesh.material) p.mesh.material.dispose();
                this.particles.splice(i, 1);
            }
        }
    }
}
