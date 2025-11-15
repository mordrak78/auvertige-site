import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

interface DiscoverGalleryProps {
  title: string;
  images: string[];
}

const DiscoverGallery: React.FC<DiscoverGalleryProps> = ({ title, images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <h3 className="text-xl md:text-2xl font-dancing text-sage-700 mb-6 text-center">
        {title}
      </h3>
      <Carousel opts={{ align: 'start' }}>
        <CarouselContent>
          {Array.from({ length: Math.ceil(images.length / 4) }).map((_, slideIdx) => (
            <CarouselItem key={slideIdx}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {images.slice(slideIdx * 4, slideIdx * 4 + 4).map((img, idx) => (
                  <div key={`${img}-${idx}`} className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${title} ${slideIdx * 4 + idx + 1}`} 
                      className="w-full aspect-[9/16] object-cover object-center" 
                      loading="lazy" 
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default DiscoverGallery;

