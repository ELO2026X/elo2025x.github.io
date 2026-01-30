import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- CONFIGURATION ---
const CONFIG = {
    colors: {
        skyTop: 0x000022,
        skyBottom: 0xff003c, // Cyberpunk red tint
        fog: 0x050510,
        ground: 0x111111,
        grid: 0x00f3ff
    },
    worldSize: 200
};

// --- GLOBAL VARIABLES ---
let scene, camera, renderer, controls;
let clock, delta;
let player, playerVelocity;
const keyState = {};

// --- INITIALIZATION ---
function init() {
    // 1. Scene Setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.colors.fog);
    scene.fog = new THREE.FogExp2(CONFIG.colors.fog, 0.02);

    // 2. Camera Setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    // 3. Renderer Setup
    renderer = new THREE.WebGLRenderer({ antialias: true }); // Clean edges
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(50, 50, 50);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    // Point lights for atmosphere
    const pointLightP = new THREE.PointLight(0x00f3ff, 2, 50);
    pointLightP.position.set(0, 5, 0);
    scene.add(pointLightP);

    // 5. Environment (Skybox & Ground)
    createDetailedEnvironment();

    // 6. Player Setup
    createPlayer();

    // 7. Creatures (Osamu Sato Style)
    createPsychedelicCreatures();

    // 8. Controls & Events
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.1; // Prevent going below ground

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('keydown', (e) => keyState[e.code] = true);
    document.addEventListener('keyup', (e) => keyState[e.code] = false);

    clock = new THREE.Clock();

    // Start Loop
    animate();
}

function createDetailedEnvironment() {
    // 1. SKY & ATMOSPHERE
    // "Galaxy Moon" aesthetic
    const moonGeo = new THREE.SphereGeometry(20, 32, 32);
    const moonMat = new THREE.MeshBasicMaterial({ color: 0xffffcc });
    const moon = new THREE.Mesh(moonGeo, moonMat);
    moon.position.set(0, 50, -100);
    scene.add(moon);

    // Moon Glow
    const moonLight = new THREE.PointLight(0xaaaaff, 0.5, 200);
    moonLight.position.set(0, 50, -80);
    scene.add(moonLight);

    // 2. GROUND (Cobblestone-ish)
    const geometry = new THREE.PlaneGeometry(CONFIG.worldSize, CONFIG.worldSize, 64, 64);
    const material = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.2,
        roughness: 0.8,
        wireframe: false
    });
    const ground = new THREE.Mesh(geometry, material);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // 3. PROCEDURAL GOTHIC BUILDINGS
    const buildingMat = new THREE.MeshStandardMaterial({ color: 0x2a2a35, roughness: 0.9 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x151520, roughness: 0.9 });
    const windowMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xffaa00, emissiveIntensity: 2 });

    for (let i = 0; i < 80; i++) {
        const x = (Math.random() - 0.5) * CONFIG.worldSize * 0.9;
        const z = (Math.random() - 0.5) * CONFIG.worldSize * 0.9;

        // Clear center area for spawn
        if (Math.abs(x) < 15 && Math.abs(z) < 15) continue;

        const width = Math.random() * 4 + 3;
        const depth = Math.random() * 4 + 3;
        const height = Math.random() * 15 + 10;

        const bGroup = new THREE.Group();
        bGroup.position.set(x, 0, z);

        // Main Body
        const bodyGeo = new THREE.BoxGeometry(width, height, depth);
        const body = new THREE.Mesh(bodyGeo, buildingMat);
        body.position.y = height / 2;
        body.castShadow = true;
        body.receiveShadow = true;
        bGroup.add(body);

        // Roof (Pyramid)
        const roofHeight = 5;
        const roofGeo = new THREE.ConeGeometry(Math.max(width, depth) * 0.8, roofHeight, 4);
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.y = height + roofHeight / 2;
        roof.rotation.y = Math.PI / 4;
        bGroup.add(roof);

        // Windows
        for (let w = 0; w < 4; w++) {
            if (Math.random() > 0.5) continue;
            const winGeo = new THREE.PlaneGeometry(1, 2);
            const win = new THREE.Mesh(winGeo, windowMat);

            if (Math.random() > 0.5) {
                win.position.set(0, (Math.random() * height * 0.6) + 2, depth / 2 + 0.1);
            } else {
                win.position.set(width / 2 + 0.1, (Math.random() * height * 0.6) + 2, 0);
                win.rotation.y = Math.PI / 2;
            }
            bGroup.add(win);
        }

        scene.add(bGroup);
    }

    // 4. PIPES & BLOCKS
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x00aa00, roughness: 0.2, metalness: 0.5 });
    for (let i = 0; i < 8; i++) {
        const pipeGroup = new THREE.Group();
        const tube = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 4, 32), pipeMat);
        tube.position.y = 2;
        const rim = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 1, 32), pipeMat);
        rim.position.y = 3.5;

        pipeGroup.add(tube);
        pipeGroup.add(rim);

        pipeGroup.position.set(
            (Math.random() - 0.5) * 60,
            0,
            (Math.random() - 0.5) * 60
        );
        if (pipeGroup.position.length() < 10) pipeGroup.position.x += 20;

        pipeGroup.traverse(c => { if (c.isMesh) c.castShadow = c.receiveShadow = true; });
        scene.add(pipeGroup);
    }

    // Floating Blocks & Coins
    const blockMat = new THREE.MeshStandardMaterial({ color: 0xcc5500, metalness: 0.4 });
    const qBlockMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xaa8800, emissiveIntensity: 2 });
    const coinMat = new THREE.MeshStandardMaterial({ color: 0xffff00, metalness: 1, roughness: 0.2, emissive: 0xaa8800, emissiveIntensity: 1 });

    for (let i = 0; i < 40; i++) {
        const type = Math.random();
        const pos = new THREE.Vector3(
            (Math.random() - 0.5) * 80,
            Math.random() * 10 + 5,
            (Math.random() - 0.5) * 80
        );

        if (type > 0.6) {
            const block = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), blockMat);
            block.position.copy(pos);
            block.castShadow = true;
            scene.add(block);
        } else if (type > 0.3) {
            const qBlock = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), qBlockMat);
            qBlock.position.copy(pos);
            qBlock.castShadow = true;
            const qLight = new THREE.PointLight(0xffaa00, 1, 10);
            qLight.position.copy(pos);
            scene.add(qLight);
            scene.add(qBlock);
        } else {
            const coin = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.2, 16), coinMat);
            coin.rotation.x = Math.PI / 2;
            coin.position.copy(pos);
            coin.userData = { isCoin: true, rotSpeed: Math.random() * 2 + 1 };
            scene.add(coin);
        }
    }

    // 5. PARTICLES (Reduced/Cleaned)
    const particleCount = 500;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 150;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.2,
        color: 0x00f3ff,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);
}

function createPsychedelicCreatures() {
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 15, -40);

    const headGeo = new THREE.SphereGeometry(6, 32, 32);
    const headMat = new THREE.MeshStandardMaterial({
        color: 0xffff00,
        emissive: 0xaa00aa,
        emissiveIntensity: 0.5,
        roughness: 0.2
    });
    const head = new THREE.Mesh(headGeo, headMat);
    headGroup.add(head);

    const eyeGeo = new THREE.SphereGeometry(1.5, 16, 16);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-2.5, 1, 5);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(2.5, 1, 5);
    headGroup.add(rightEye);

    const mouthGeo = new THREE.TorusKnotGeometry(1, 0.3, 64, 8);
    const mouthMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mouth = new THREE.Mesh(mouthGeo, mouthMat);
    mouth.position.set(0, -3, 5);
    headGroup.add(mouth);

    for (let i = 0; i < 12; i++) {
        const wingGeo = new THREE.BoxGeometry(20, 0.5, 4);
        const wingMat = new THREE.MeshStandardMaterial({ color: 0xff003c, emissive: 0xff003c, emissiveIntensity: 0.5 });
        const wing = new THREE.Mesh(wingGeo, wingMat);
        wing.position.set(0, 0, -2);
        wing.rotation.z = (Math.PI / 6) * i;
        wing.userData = { isWing: true, initRot: (Math.PI / 6) * i, index: i };
        headGroup.add(wing);
    }

    headGroup.userData = { isCreature: true, speed: 0.5 };
    scene.add(headGroup);

    const watcherGeo = new THREE.SphereGeometry(1, 16, 16);
    const watcherMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const irisGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const irisMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    for (let i = 0; i < 20; i++) {
        const wrapper = new THREE.Group();
        const eye = new THREE.Mesh(watcherGeo, watcherMat);
        const iris = new THREE.Mesh(irisGeo, irisMat);
        iris.position.set(0, 0, 0.8);
        wrapper.add(eye);
        wrapper.add(iris);

        wrapper.position.set(
            (Math.random() - 0.5) * 100,
            Math.random() * 20 + 5,
            (Math.random() - 0.5) * 100
        );

        wrapper.lookAt(0, 0, 0);
        wrapper.userData = { isWatcher: true, bobOffset: Math.random() * 100 };
        scene.add(wrapper);
    }
}

function createPlayer() {
    // COMPOSITE PLAYER MODEL (CYBER-BOT)
    player = new THREE.Group();
    player.position.y = 0;

    const armorColor = 0xff003c;
    const jointColor = 0x222222;
    const visorColor = 0x00f3ff;

    const armorMat = new THREE.MeshStandardMaterial({ color: armorColor, roughness: 0.3, metalness: 0.8 });
    const jointMat = new THREE.MeshStandardMaterial({ color: jointColor, roughness: 0.8 });
    const visorMat = new THREE.MeshStandardMaterial({ color: visorColor, emissive: visorColor, emissiveIntensity: 2 });

    // 1. TORSO
    const torsoGeo = new THREE.BoxGeometry(1, 1.5, 0.6);
    const torso = new THREE.Mesh(torsoGeo, armorMat);
    torso.position.y = 1.7; // Center of torso
    torso.castShadow = true;
    player.add(torso);

    // 2. HEAD
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 2.7, 0); // On top of torso

    const helmetGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const helmet = new THREE.Mesh(helmetGeo, armorMat);
    helmet.castShadow = true;
    headGroup.add(helmet);

    const visorGeo = new THREE.BoxGeometry(0.6, 0.3, 0.1);
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 0, 0.4); // Front of face
    headGroup.add(visor);
    player.add(headGroup);

    // 3. ARMS
    const createLimb = (x, y, z, w, h, d, mat) => {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        return mesh;
    };

    const leftShoulder = createLimb(-0.7, 2.2, 0, 0.4, 0.4, 0.4, jointMat);
    player.add(leftShoulder);
    const rightShoulder = createLimb(0.7, 2.2, 0, 0.4, 0.4, 0.4, jointMat);
    player.add(rightShoulder);

    // Arms attached to shoulders
    const leftArm = createLimb(-0.7, 1.6, 0, 0.3, 1.0, 0.3, armorMat);
    player.add(leftArm);
    const rightArm = createLimb(0.7, 1.6, 0, 0.3, 1.0, 0.3, armorMat);
    player.add(rightArm);

    // 4. LEGS
    const leftThigh = createLimb(-0.3, 0.8, 0, 0.35, 1.0, 0.35, jointMat);
    player.add(leftThigh);
    const rightThigh = createLimb(0.3, 0.8, 0, 0.35, 1.0, 0.35, jointMat);
    player.add(rightThigh);

    const leftBoot = createLimb(-0.3, 0.15, 0.1, 0.4, 0.3, 0.6, armorMat);
    player.add(leftBoot);
    const rightBoot = createLimb(0.3, 0.15, 0.1, 0.4, 0.3, 0.6, armorMat);
    player.add(rightBoot);

    scene.add(player);
    playerVelocity = new THREE.Vector3();

    // Store references for animation (simple walk cycle later?)
    player.userData = {
        leftArm, rightArm, leftThigh, rightThigh
    };
}

function updatePlayer(dt) {
    if (!player) return;

    const speed = keyState['ShiftLeft'] ? 10 : 5;
    const moveDir = new THREE.Vector3();

    if (keyState['KeyW']) moveDir.z -= 1;
    if (keyState['KeyS']) moveDir.z += 1;
    if (keyState['KeyA']) moveDir.x -= 1;
    if (keyState['KeyD']) moveDir.x += 1;

    moveDir.normalize();

    // Orient input to camera
    const camDir = new THREE.Vector3();
    camera.getWorldDirection(camDir);
    camDir.y = 0;
    camDir.normalize();

    const camRight = new THREE.Vector3();
    camRight.crossVectors(camDir, new THREE.Vector3(0, 1, 0));

    const finalDir = new THREE.Vector3();
    finalDir.addScaledVector(camDir, -moveDir.z);
    finalDir.addScaledVector(camRight, moveDir.x);

    let isMoving = false;

    if (finalDir.lengthSq() > 0) {
        isMoving = true;
        player.position.addScaledVector(finalDir, speed * dt);
        player.lookAt(player.position.clone().add(finalDir));

        // Simple bobbing for walk animation
        const time = Date.now() * 0.01;
        player.userData.leftArm.rotation.x = Math.sin(time) * 0.5;
        player.userData.rightArm.rotation.x = -Math.sin(time) * 0.5;
        player.userData.leftThigh.rotation.x = -Math.sin(time) * 0.5;
        player.userData.rightThigh.rotation.x = Math.sin(time) * 0.5;
    } else {
        // Reset limbs
        player.userData.leftArm.rotation.x = 0;
        player.userData.rightArm.rotation.x = 0;
        player.userData.leftThigh.rotation.x = 0;
        player.userData.rightThigh.rotation.x = 0;
    }

    // Follow camera slightly
    controls.target.copy(player.position);
    // Keep camera at same relative distance
    // (OrbitControls handles this mostly, but target update is key)
}

function updateCreatures(dt, time) {
    scene.traverse((obj) => {
        if (obj.userData.isCreature) {
            obj.rotation.y = Math.sin(time * 0.5) * 0.2;
            obj.position.y = 15 + Math.sin(time) * 2;
            const scale = 1 + Math.sin(time * 5) * 0.05;
            obj.scale.set(scale, scale, scale);
            obj.children.forEach(child => {
                if (child.userData.isWing) {
                    child.rotation.z = child.userData.initRot + Math.sin(time * 2 + child.userData.index) * 0.2;
                }
            });
        }
        if (obj.userData.isWatcher) {
            obj.position.y += Math.sin(time * 2 + obj.userData.bobOffset) * 0.05 * dt;
            obj.lookAt(player.position);
            obj.rotation.z += dt * 0.5;
        }
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function updateCoins(dt) {
    scene.traverse((object) => {
        if (object.userData && object.userData.isCoin) {
            object.rotation.z += dt * object.userData.rotSpeed;
        }
    });
}

function animate() {
    requestAnimationFrame(animate);

    delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    updateCoins(delta);
    updateCreatures(delta, elapsedTime);
    updatePlayer(delta);
    controls.update();

    renderer.render(scene, camera);
}

// Start
init();
