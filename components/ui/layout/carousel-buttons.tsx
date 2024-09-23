import { Button } from "@/components/sui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import useCarouselState from "./use-carousel-state";
export function CarouselPrevious({
  state,
  className,
  orientation = "horizontal",
}: {
  state: ReturnType<typeof useCarouselState>;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "absolute h-10 w-10 rounded-full",
        orientation === "horizontal"
          ? "-left-14 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!state.canScrollPrev}
      onClick={state.prev}
    >
      <ChevronLeftIcon className="h-6 w-6" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

export function CarouselNext({
  state,
  className,
  orientation = "horizontal",
}: {
  state: ReturnType<typeof useCarouselState>;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "absolute h-10 w-10 rounded-full",
        orientation === "horizontal"
          ? "-right-14 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!state.canScrollNext}
      onClick={state.next}
    >
      <ChevronRightIcon className="h-6 w-6" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
