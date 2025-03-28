"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function AuthCarousel({ slides }: { slides: string[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col text-center gap-4">
              <p className="text-white">{slide}</p>
              <p className="text-[0.75rem] text-[#A29999]">Azany</p>
              <div className=" flex items-center gap-2 mx-auto">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "size-[8px] rounded-full bg-white",
                      index === i ? "bg-main" : "bg-[#645D5D]"
                    )}
                  ></div>
                ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
