import * as THREE from 'three';

export class MoltbookAgent {
    constructor(scene, position) {
        this.scene = scene;
        this.position = position.clone();

        // Group for the agent
        this.mesh = new THREE.Group();
        this.mesh.position.copy(this.position);

        // 1. Core Geometry (Icosahedron)
        const coreGeo = new THREE.IcosahedronGeometry(1, 0);
        const coreMat = new THREE.MeshStandardMaterial({
            color: 0x00f3ff, // Cyan
            emissive: 0x0044aa,
            roughness: 0.2,
            metalness: 0.8,
            wireframe: true
        });
        this.core = new THREE.Mesh(coreGeo, coreMat);
        this.mesh.add(this.core);

        // 2. Inner Glow (Sphere)
        const innerGeo = new THREE.SphereGeometry(0.6, 16, 16);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.5
        });
        this.inner = new THREE.Mesh(innerGeo, innerMat);
        this.mesh.add(this.inner);

        // 3. Data Rings (Torus)
        const ringGeo = new THREE.TorusGeometry(1.5, 0.05, 8, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xff003c });
        this.ring1 = new THREE.Mesh(ringGeo, ringMat);
        this.ring2 = new THREE.Mesh(ringGeo, ringMat);

        this.ring1.rotation.x = Math.PI / 2;
        this.ring2.rotation.y = Math.PI / 2;

        this.mesh.add(this.ring1);
        this.mesh.add(this.ring2);

        // Add to scene
        scene.add(this.mesh);

        // Floating animation
        this.time = 0;

        // Interaction
        this.interactionActive = false;
        this.uiElement = this.createUI();
    }

    createUI() {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.top = '20%';
        div.style.left = '50%';
        div.style.transform = 'translate(-50%, -50%)';
        div.style.padding = '20px';
        div.style.border = '2px solid #00f3ff';
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        div.style.color = '#00f3ff';
        div.style.fontFamily = 'monospace';
        div.style.display = 'none';
        div.style.pointerEvents = 'none';
        div.style.textAlign = 'center';

        div.innerHTML = `
            <h2 style="margin:0; text-shadow:0 0 10px cyan;">>> UPLINK ESTABLISHED</h2>
            <p style="color:white; font-size:12px;">AGENT: Systemic_One_Unit_01</p>
            <p style="color:#ff003c;">WARNING: ARSENIC DETECTED (13ppb)</p>
            <p style="font-size:10px; color:#888;">"The water remembers what the city forgot."</p>
        `;

        document.body.appendChild(div);
        return div;
    }

    update(delta, playerPos) {
        this.time += delta;

        // ANIMATION
        // Bobbing
        this.mesh.position.y = this.position.y + Math.sin(this.time * 2) * 0.5;
        // Rotation
        this.core.rotation.y += delta;
        this.core.rotation.x += delta * 0.5;
        this.ring1.rotation.z += delta * 2;
        this.ring2.rotation.x += delta * 2;

        // INTERACTION CHECK
        if (playerPos) {
            const dist = this.mesh.position.distanceTo(playerPos);
            if (dist < 5) {
                if (!this.interactionActive) {
                    this.interactionActive = true;
                    this.uiElement.style.display = 'block';
                }
            } else {
                if (this.interactionActive) {
                    this.interactionActive = false;
                    this.uiElement.style.display = 'none';
                }
            }
        }
    }
}
