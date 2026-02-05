import * as THREE from 'three';

export class VillageSystem {
    constructor(scene) {
        this.scene = scene;
        this.npcs = [];
        this.safeZoneRadius = 30; // 30m radius safe zone
    }

    init() {
        console.log("Initializing Hunter Village...");
        this.createWalls();
        this.createQuestBoard();
        this.createNPCs();
        this.createGroundMarker();
    }

    createGroundMarker() {
        // Safe Zone floor indicator
        const geo = new THREE.CircleGeometry(this.safeZoneRadius, 64);
        const mat = new THREE.MeshBasicMaterial({
            color: 0x228822,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide
        });
        const floor = new THREE.Mesh(geo, mat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = 0.05; // Slightly above ground
        this.scene.add(floor);
    }

    createWalls() {
        // Simple "Wooden" Palisade Walls
        const wallGeo = new THREE.CylinderGeometry(0.5, 0.5, 6, 8);
        const wallMat = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 1.0 });

        const count = 40;
        const radius = this.safeZoneRadius;

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            // Leave a gate open
            if (angle > -0.5 && angle < 0.5) continue;

            const mesh = new THREE.Mesh(wallGeo, wallMat);
            mesh.position.set(
                Math.cos(angle) * radius,
                3,
                Math.sin(angle) * radius
            );
            mesh.castShadow = true;
            this.scene.add(mesh);
        }
    }

    createQuestBoard() {
        const group = new THREE.Group();
        group.position.set(0, 0, -10); // Center of village

        // Post
        const post = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 3, 0.5),
            new THREE.MeshStandardMaterial({ color: 0x5c3a21 })
        );
        post.position.y = 1.5;
        group.add(post);

        // Board
        const board = new THREE.Mesh(
            new THREE.BoxGeometry(4, 2.5, 0.2),
            new THREE.MeshStandardMaterial({ color: 0xd2b48c })
        );
        board.position.y = 3;
        group.add(board);

        // "Papers"
        for (let i = 0; i < 3; i++) {
            const paper = new THREE.Mesh(
                new THREE.BoxGeometry(0.8, 1, 0.05),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
            );
            paper.position.set(-1 + i * 1, 3, 0.15);
            group.add(paper);
        }

        this.scene.add(group);
        this.questBoard = group;
    }

    createNPCs() {
        // 1. The Chief (Red)
        this.addNPC(0xff0000, new THREE.Vector3(-5, 0, -5), "Chief");

        // 2. The Smithy (Gray)
        this.addNPC(0x555555, new THREE.Vector3(5, 0, -5), "Smithy");

        // 3. The Handler (Yellow)
        this.addNPC(0xffff00, new THREE.Vector3(-2, 0, -8), "Handler");
    }

    addNPC(color, position, name) {
        const group = new THREE.Group();
        group.position.copy(position);

        // Body
        const body = new THREE.Mesh(
            new THREE.CapsuleGeometry(0.4, 1.0, 4, 8),
            new THREE.MeshStandardMaterial({ color: color })
        );
        body.position.y = 0.9;
        group.add(body);

        // Head
        const head = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xffccaa }) // Skin tone
        );
        head.position.y = 1.6;
        group.add(head);

        // Name Tag (Simple floating Text placeholder logic)
        group.userData = { name: name, isNPC: true };

        this.scene.add(group);
        this.npcs.push(group);
    }

    update(dt, playerPos) {
        // Check for interactions
        if (!playerPos) return;

        // Simple "Look at Player" logic for NPCs
        this.npcs.forEach(npc => {
            npc.lookAt(playerPos.x, npc.position.y, playerPos.z);

            const dist = npc.position.distanceTo(playerPos);
            if (dist < 3.0) {
                // Interactive Range
                // Ideally this would trigger a UI prompt "Press F to Talk"
            }
        });
    }

    isInsideSafeZone(position) {
        return position.length() < this.safeZoneRadius;
    }
}
