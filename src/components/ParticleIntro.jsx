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
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    geometry.setAttribute('position', positionAttribute);

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

    // Add second layer - SHARE THE SAME POSITION BUFFER
    const glowGeometry = new THREE.BufferGeometry();
    glowGeometry.setAttribute('position', positionAttribute); // Use same position buffer!
    
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
    let animationPhase = 'rotating'; // 'rotating' -> 'imploding' -> 'ball' -> 'exploding' -> 'whiteFlash'
    let time = 0;
    const rotationDuration = 1.0; // seconds
    const implosionDuration = 0.8;
    const ballPauseDuration = 0.6;
    const explosionDuration = 0.5;
    const flashDuration = 0.4;
    let phaseTime = 0;

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

        // Check if it's time to implode
        if (time >= rotationDuration) {
          animationPhase = 'imploding';
          phaseTime = 0;
        }
      } else if (animationPhase === 'imploding') {
        phaseTime += 0.016;
        const implosionProgress = phaseTime / implosionDuration;
        const easeIn = Math.pow(implosionProgress, 2.5); // Accelerating inward

        // Pull particles toward center
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          // Move from original position to center (0,0,0)
          positions[i3] = originalPositions[i3] * (1 - easeIn);
          positions[i3 + 1] = originalPositions[i3 + 1] * (1 - easeIn);
          positions[i3 + 2] = originalPositions[i3 + 2] * (1 - easeIn);
        }

        geometry.attributes.position.needsUpdate = true;

        // Increase glow as particles converge
        glowMaterial.opacity = 0.4 + implosionProgress * 0.4;

        // Transition to ball phase
        if (implosionProgress >= 1) {
          animationPhase = 'ball';
          phaseTime = 0;
        }
      } else if (animationPhase === 'ball') {
        phaseTime += 0.016;
        
        // Keep particles at center, pulsing
        const pulse = 1 + Math.sin(phaseTime * 10) * 0.3;
        
        // Increase particle size to create solid ball effect
        material.size = 0.4 * pulse;
        glowMaterial.size = 0.8 * pulse;
        
        // Bright pulsing glow
        glowMaterial.opacity = 0.6 + Math.sin(phaseTime * 8) * 0.3;

        // Transition to explosion
        if (phaseTime >= ballPauseDuration) {
          animationPhase = 'exploding';
          phaseTime = 0;
        }
      } else if (animationPhase === 'exploding') {
        phaseTime += 0.016;
        const explosionProgress = phaseTime / explosionDuration;
        const easeOut = 1 - Math.pow(1 - explosionProgress, 2);

        // Explosive outward motion
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          // Accelerating outward from center
          const speed = easeOut * 50;
          positions[i3] = velocities[i3] * speed;
          positions[i3 + 1] = velocities[i3 + 1] * speed;
          positions[i3 + 2] = velocities[i3 + 2] * speed;
        }

        geometry.attributes.position.needsUpdate = true;

        // Increase brightness as explosion progresses
        material.opacity = 1 + explosionProgress * 2;
        glowMaterial.opacity = 0.8 + explosionProgress * 1.5;

        // Transition to white flash
        if (explosionProgress >= 1) {
          animationPhase = 'whiteFlash';
          phaseTime = 0;
        }
      } else if (animationPhase === 'whiteFlash') {
        phaseTime += 0.016;
        const flashProgress = phaseTime / flashDuration;

        // Continue particle motion
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const speed = 50 + flashProgress * 20;
          positions[i3] = velocities[i3] * speed;
          positions[i3 + 1] = velocities[i3 + 1] * speed;
          positions[i3 + 2] = velocities[i3 + 2] * speed;
        }
        geometry.attributes.position.needsUpdate = true;

        // Create white flash overlay effect
        const flashIntensity = flashProgress < 0.2 
          ? flashProgress / 0.2  // Quick flash up
          : 1 - ((flashProgress - 0.2) / 0.8); // Slower fade out

        // Update container background for white flash
        if (containerRef.current) {
          const bgAlpha = flashIntensity * 0.95;
          containerRef.current.style.background = 
            `linear-gradient(135deg, 
              rgba(255, 255, 255, ${bgAlpha}), 
              rgba(255, 255, 255, ${bgAlpha * 0.9}))`;
        }

        // Fade out particles during flash
        material.opacity = Math.max(0, 3 * (1 - flashProgress));
        glowMaterial.opacity = Math.max(0, 2 * (1 - flashProgress));

        // Animation complete
        if (flashProgress >= 1) {
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

