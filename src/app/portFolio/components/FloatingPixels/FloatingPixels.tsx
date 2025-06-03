import type React from 'react';
import { useEffect, useState } from 'react';
import { FloatingPixel, PixelContainer } from './styles/FloatingPixels.styles';

interface Pixel {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

const FloatingPixels: React.FC = () => {
  const [pixels, setPixels] = useState<Pixel[]>([]);

  useEffect(() => {
    const createPixels = () => {
      const newPixels: Pixel[] = [];
      for (let i = 0; i < 20; i++) {
        newPixels.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.1
        });
      }
      setPixels(newPixels);
    };

    createPixels();
  }, []);

  return (
    <PixelContainer>
      {pixels.map((pixel) => (
        <FloatingPixel
          key={pixel.id}
          $x={pixel.x}
          $y={pixel.y}
          $size={pixel.size}
        />
      ))}
    </PixelContainer>
  );
};

export default FloatingPixels;
