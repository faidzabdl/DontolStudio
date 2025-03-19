
// Animasi Logo dan Tagline dengan GSAP
gsap.from(".logo h1", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    onComplete: () => {
        gsap.to(".tagline", {
            duration: 1,
            opacity: 1,
            y: -20,
            ease: "power2.out"
        });
    }
});

gsap.from("#start-btn", {
    duration: 1.5,
    delay: 2,
    y: 50,
    opacity: 0,
    ease: "bounce.out"
});

// Efek hover pada tombol
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("mouseover", () => {
    gsap.to("#start-btn", {
        duration: 0.3,
        scale: 1.1,
        boxShadow: "0 0 20px rgba(255, 111, 97, 0.8)"
    });
});
startBtn.addEventListener("mouseout", () => {
    gsap.to("#start-btn", {
        duration: 0.3,
        scale: 1,
        boxShadow: "none"
    });
});

// Fungsi untuk smooth scroll saat tombol diklik
startBtn.addEventListener("click", () => {
    document.querySelector("#why-choose-us").scrollIntoView({
        behavior: "smooth"
    });
});

// Latar Belakang Three.js (Partikel Dinamis)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("background-canvas").appendChild(renderer.domElement);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 1000;
}

particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
    size: 2,
    color: 0xff6f61,
    transparent: true,
    opacity: 0.8
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 500;

function animate() {
    requestAnimationFrame(animate);
    particlesMesh.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

// Responsivitas
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});
