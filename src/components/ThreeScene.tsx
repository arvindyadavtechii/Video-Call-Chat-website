import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cubesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create multiple cubes
    const createCube = (position: THREE.Vector3) => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 360}, 70%, 50%)`),
        shininess: 100,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.copy(position);
      scene.add(cube);
      cubesRef.current.push(cube);
      return cube;
    };

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create cubes in a grid
    for (let x = -2; x <= 2; x += 2) {
      for (let y = -2; y <= 2; y += 2) {
        createCube(new THREE.Vector3(x, y, 0));
      }
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      cubesRef.current.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    // GSAP Animations
    cubesRef.current.forEach((cube, index) => {
      gsap.from(cube.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "elastic.out(1, 0.3)",
      });

      gsap.to(cube.position, {
        y: cube.position.y + 0.5,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        delay: index * 0.1,
      });
    });

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-black/30 backdrop-blur-md rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to AviiCoders</h1>
          <p className="text-xl text-gray-300">
            Experience immersive Vedio Call and chat in one place !!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeScene;