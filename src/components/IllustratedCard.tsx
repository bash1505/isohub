
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LazyImage } from './LazyImage';

interface IllustratedCardProps {
  imageSrc: string;
  alt: string;
  children: React.ReactNode;
  imagePosition?: 'left' | 'right' | 'top';
  className?: string;
  imageClassName?: string;
}

const IllustratedCard: React.FC<IllustratedCardProps> = ({
  imageSrc,
  alt,
  children,
  imagePosition = 'left',
  className = '',
  imageClassName = '',
}) => {
  if (imagePosition === 'top') {
    return (
      <Card className={`overflow-hidden ${className}`}>
        <div className="h-48 overflow-hidden">
          <LazyImage
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-transform hover:scale-105 duration-300 ${imageClassName}`}
          />
        </div>
        <CardContent className="pt-6">
          {children}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
          <LazyImage
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-transform hover:scale-105 duration-300 ${imageClassName}`}
          />
        </div>
        <div className="md:w-3/5">
          <CardContent className="p-6">
            {children}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default IllustratedCard;
