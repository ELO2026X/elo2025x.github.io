import * as THREE from 'three';

export class MonsterSystem {
    constructor(scene) {
        this.scene = scene;
        this.monsters = [];
        this.spawnRadius = 120;
        this.safeZoneRadius = 40;
    }

    init() {
        console.log("Releasing Monsters...");
        // Spawn 5 Velocidromes
        for (let i = 0; i < 5; i++) {
            this.spawnMonster('velocidrome');
        }
    }

    spawnMonster(type) {
        let x, z, r;
        do {
            x = (Math.random() - 0.5) * this.spawnRadius * 2;
            z = (Math.random() - 0.5) * this.spawnRadius * 2;
            r = Math.sqrt(x * x + z * z);
        } while (r < this.safeZoneRadius);

        const group = new THREE.Group();
        group.position.set(x, 1, z);

        // --- VELOCIDROME GEOMETRY ---
        // Body
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 2),
            new THREE.MeshStandardMaterial({ color: 0x2244aa }) // Blue scales
        );
        body.position.y = 1;
        group.add(body);

        // Head
        const head = new THREE.Mesh(
            new THREE.BoxGeometry(0.8, 0.8, 1.2),
            new THREE.MeshStandardMaterial({ color: 0x2244aa })
        );
        head.position.set(0, 1.5, 1.2);
        group.add(head);

        // Crest (Red)
        const crest = new THREE.Mesh(
            new THREE.BoxGeometry(0.2, 0.6, 0.8),
            new THREE.MeshStandardMaterial({ color: 0xff0000 })
        );
        crest.position.set(0, 2.0, 1.2);
        group.add(crest);

        // Tail
        const tail = new THREE.Mesh(
            new THREE.BoxGeometry(0.6, 0.6, 2.5),
            new THREE.MeshStandardMaterial({ color: 0x2244aa })
        );
        tail.position.set(0, 1, -1.5);
        group.add(tail);

        // Legs
        const legGeo = new THREE.BoxGeometry(0.4, 1.5, 0.4);
        const lLeg = new THREE.Mesh(legGeo, new THREE.MeshStandardMaterial({ color: 0x112255 }));
        lLeg.position.set(-0.6, 0.5, 0);
        group.add(lLeg);

        const rLeg = new THREE.Mesh(legGeo, new THREE.MeshStandardMaterial({ color: 0x112255 }));
        rLeg.position.set(0.6, 0.5, 0);
        group.add(rLeg);

        // DATA
        group.userData = {
            isMonster: true,
            type: type,
            hp: 100,
            state: 'PATROL', // PATROL, CHASE, ATTACK, HURT
            speed: 0.1,
            patrolTarget: this.getRandomPoint(),
            cooldown: 0
        };

        this.scene.add(group);
        this.monsters.push(group);
    }

    getRandomPoint() {
        const x = (Math.random() - 0.5) * 100;
        const z = (Math.random() - 0.5) * 100;
        return new THREE.Vector3(x, 1, z);
    }

    update(delta, playerPos, isPlayerAttacking) {
        this.monsters.forEach(mob => {
            if (mob.userData.hp <= 0) {
                if (mob.visible) {
                    mob.visible = false; // Die
                    console.log("Monster Slain!");
                }
                return;
            }

            const dist = mob.position.distanceTo(playerPos);
            const data = mob.userData;

            // --- HIT DETECTION ---
            if (isPlayerAttacking && dist < 5 && data.state !== 'HURT' && data.cooldown <= 0) {
                // Player hit monster
                data.hp -= 34; // 3 hits to kill
                data.state = 'HURT';
                data.cooldown = 1.0; // Stun time

                // Visual Flash
                mob.children.forEach(c => c.material.emissive.setHex(0xffffff));
                setTimeout(() => mob.children.forEach(c => c.material.emissive.setHex(0x000000)), 200);

                console.log(`Hit Monster! HP: ${data.hp}`);
            }

            if (data.cooldown > 0) data.cooldown -= delta;

            // --- STATE MACHINE ---
            if (data.state === 'HURT') {
                // Stunned behavior
                if (data.cooldown <= 0) data.state = 'CHASE'; // Angry
                return;
            }

            if (dist < 25 && dist > 3) {
                data.state = 'CHASE';
            } else if (dist <= 3) {
                data.state = 'ATTACK';
            } else {
                data.state = 'PATROL';
            }

            // --- MOVEMENT ---
            const moveSpeed = data.state === 'CHASE' ? 8 : 4;

            if (data.state === 'CHASE') {
                mob.lookAt(playerPos.x, mob.position.y, playerPos.z);
                mob.translateZ(moveSpeed * delta);
            } else if (data.state === 'PATROL') {
                if (mob.position.distanceTo(data.patrolTarget) < 2) {
                    data.patrolTarget = this.getRandomPoint();
                }
                mob.lookAt(data.patrolTarget.x, mob.position.y, data.patrolTarget.z);
                mob.translateZ(moveSpeed * delta);
            } else if (data.state === 'ATTACK') {
                // Attack logic (jump at player?)
                mob.lookAt(playerPos.x, mob.position.y, playerPos.z);
                if (data.cooldown <= 0) {
                    // Attack animation/logic placeholder
                    console.log("Monster bites you!");
                    // If player takes damage:
                    if (window.entropySys) window.entropySys.addEntropy(10); // Heat up (Pain)
                    data.cooldown = 2.0;
                }
            }

            // --- GRAVITY/GROUND ---
            mob.position.y = 1; // Keep grounded roughly
        });
    }
}
