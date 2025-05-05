import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

<Carousel className="text-black max-w-[80%] mx-auto">
  <CarouselContent>
    <CarouselItem>hello world</CarouselItem>
    <CarouselItem>hello world</CarouselItem>
    <CarouselItem>hello world</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>;
export { Carousel };

