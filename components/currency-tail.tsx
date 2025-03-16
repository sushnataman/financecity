"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface Particle {
  id: number;
  x: number;
  y: number;
  symbol: string;
  opacity: number;
  scale: number;
  speed: number;
}

const currencies = ['$ ', '€ ', '£ ', '¥ ', '₹ ', '₿ ', '₽ ', '₸ ', '₮ ', '₩ ', '₪ ', '₫ ', '₭ ', '₱ ', '₲ ', '₴ ', '₵ '];

export function CurrencyTail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if we should render the effect
    setShouldRender(!pathname?.startsWith('/blog'));
  }, [pathname]);

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    let animationFrameId: number;
    let lastParticleTime = 0;
    let moveTimeout: NodeJS.Timeout;
    const particleLifetime = 4000; // 4 seconds
    const particleInterval = 100; // Create new particle every 100ms

    const updateParticles = (timestamp: number) => {
      // Only create new particles if the mouse is moving
      if (isMoving && timestamp - lastParticleTime > particleInterval) {
        setParticles(prevParticles => {
          const newParticle: Particle = {
            id: timestamp,
            x: mousePosition.x,
            y: mousePosition.y,
            symbol: currencies[Math.floor(Math.random() * currencies.length)],
            opacity: 0.6,
            scale: 0.8 + Math.random() * 0.4,
            speed: 0.5 + Math.random() * 0.5
          };

          // Remove particles older than lifetime
          const currentParticles = prevParticles.filter(
            p => timestamp - p.id < particleLifetime
          );

          return [...currentParticles, newParticle];
        });

        lastParticleTime = timestamp;
      }

      // Continue updating existing particles
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y + particle.speed,
          opacity: Math.max(0, 0.6 * (1 - (timestamp - particle.id) / particleLifetime))
        }))
      );

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Clear existing timeout
      if (moveTimeout) {
        clearTimeout(moveTimeout);
      }
      
      // Set a new timeout to stop particle creation after mouse stops
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (moveTimeout) {
        clearTimeout(moveTimeout);
      }
    };
  }, [mousePosition, isMoving, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute select-none font-bold"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
            color: 'var(--currency-color)',
            textShadow: '0 0 10px var(--currency-glow)',
            transition: 'opacity 0.2s ease-out',
          }}
        >
          {particle.symbol}
        </div>
      ))}
    </div>
  );
}