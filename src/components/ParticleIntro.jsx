import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function ParticleIntro({ onComplete }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if intro has been seen this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenParticleIntro');
    
    if (hasSeenIntro) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particle system
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    // Create particles in sphere formation
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 5 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      // Velocities for explosion (will be activated later)
      const explosionSpeed = 0.15 + Math.random() * 0.15;
      velocities[i3] = (x / radius) * explosionSpeed;
      velocities[i3 + 1] = (y / radius) * explosionSpeed;
      velocities[i3 + 2] = (z / radius) * explosionSpeed;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create circular texture for particles (makes them round instead of square)
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    // Draw circular gradient
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    
    const circleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.25,                          // Larger particles
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,    // Creates glow effect
      sizeAttenuation: true,
      depthWrite: false,                   // Better for glowing particles
      map: circleTexture                   // Apply circular texture
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Add second layer of larger, more transparent particles for extra glow
    const glowGeometry = geometry.clone();
    const glowMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,                           // Larger for glow halo
      transparent: true,
      opacity: 0.4,                        // More transparent
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
      map: circleTexture                   // Apply same circular texture
    });

    const glowParticles = new THREE.Points(glowGeometry, glowMaterial);
    scene.add(glowParticles);

    // Animation state
    let animationPhase = 'rotating'; // 'rotating' -> 'exploding' -> 'fading'
    let time = 0;
    const rotationDuration = 1.3; // seconds
    const explosionDuration = 1.5;
    const fadeDuration = 0.5;
    let explosionTime = 0;
    let fadeTime = 0;

    // Animation loop
    function animate() {
      const animationId = requestAnimationFrame(animate);
      time += 0.016; // ~60fps

      if (animationPhase === 'rotating') {
        // Gentle rotation of the sphere
        particles.rotation.y += 0.003;
        particles.rotation.x = Math.sin(time * 0.5) * 0.15;

        // Sync glow layer rotation
        glowParticles.rotation.y = particles.rotation.y;
        glowParticles.rotation.x = particles.rotation.x;

        // Pulsing effect
        const pulse = 1 + Math.sin(time * 2) * 0.05;
        particles.scale.set(pulse, pulse, pulse);
        glowParticles.scale.set(pulse, pulse, pulse);

        // Pulsing glow intensity
        glowMaterial.opacity = 0.3 + Math.sin(time * 3) * 0.15;

        // Check if it's time to explode
        if (time >= rotationDuration) {
          animationPhase = 'exploding';
          explosionTime = 0;
        }
      } else if (animationPhase === 'exploding') {
        explosionTime += 0.016;
        const explosionProgress = explosionTime / explosionDuration;
        const easeOut = 1 - Math.pow(1 - explosionProgress, 3);

        // Update particle positions for both layers
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          // Accelerating outward motion
          const speed = easeOut * 30;
          positions[i3] = originalPositions[i3] + velocities[i3] * speed;
          positions[i3 + 1] = originalPositions[i3 + 1] + velocities[i3 + 1] * speed;
          positions[i3 + 2] = originalPositions[i3 + 2] + velocities[i3 + 2] * speed;
        }

        geometry.attributes.position.needsUpdate = true;
        glowGeometry.attributes.position.needsUpdate = true;

        // Start fading when explosion is 60% complete
        if (explosionProgress >= 0.6 && animationPhase === 'exploding') {
          animationPhase = 'fading';
          fadeTime = 0;
        }
      } else if (animationPhase === 'fading') {
        fadeTime += 0.016;
        explosionTime += 0.016;
        const explosionProgress = explosionTime / explosionDuration;
        const easeOut = 1 - Math.pow(1 - explosionProgress, 3);
        const fadeProgress = fadeTime / fadeDuration;

        // Continue explosion movement for both layers
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const speed = easeOut * 30;
          positions[i3] = originalPositions[i3] + velocities[i3] * speed;
          positions[i3 + 1] = originalPositions[i3 + 1] + velocities[i3 + 1] * speed;
          positions[i3 + 2] = originalPositions[i3 + 2] + velocities[i3 + 2] * speed;
        }
        geometry.attributes.position.needsUpdate = true;
        glowGeometry.attributes.position.needsUpdate = true;

        // Fade out both layers
        material.opacity = Math.max(0, 1 - fadeProgress);
        glowMaterial.opacity = Math.max(0, 0.4 * (1 - fadeProgress));

        // Animation complete
        if (fadeProgress >= 1) {
          cancelAnimationFrame(animationId);
          cleanup();
          return;
        }
      }

      renderer.render(scene, camera);
    }

    // Cleanup function
    function cleanup() {
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      circleTexture.dispose();
      renderer.dispose();
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Mark as seen and hide
      sessionStorage.setItem('hasSeenParticleIntro', 'true');
      setIsVisible(false);
      if (onComplete) onComplete();
    }

    // Handle window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      circleTexture.dispose();
      renderer.dispose();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10000,
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientFlow 20s ease infinite'
      }}
    />
  );
}

export default ParticleIntro;

