import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-22.00.55-6-1.jpeg",
  "https://carlsongracietucson.com/wp-content/uploads/2025/05/WhatsApp-Image-2024-03-13-at-7.05.32-PM-1-1333x1000-1.jpeg",
  "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_461792123_593041016497383_1239949289327373198_n.jpg",
  "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_469342930_17988889769750365_2181443428994732930_n.jpg",
  "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_469428924_17988888659750365_7832726077651409428_n.jpg",
  "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_469323650_17988888605750365_1987882665554527355_n.jpg",
  "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_461808797_521545800608868_572171878860095246_n.jpg",
  "https://carlsongracietucson.com/wp-content/uploads/2025/05/SnapInsta.to_469352919_17988888560750365_2184054165065967926_n.jpg"
];

export function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 4 }
    }
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <section className="bg-zinc-950 pb-12 w-full overflow-hidden">
      <div className="relative w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {images.map((src, index) => (
              <div 
                className="flex-none min-w-0 relative w-[100%] sm:w-[50%] lg:w-[25%]" 
                key={index}
              >
                <div className="relative aspect-square w-full">
                  <img
                    className="absolute block top-0 left-0 w-full h-full object-cover"
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-red-600 transition-colors z-10 disabled:opacity-50"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-red-600 transition-colors z-10 disabled:opacity-50"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex ? 'bg-red-600 w-8' : 'bg-zinc-600 hover:bg-zinc-400'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
