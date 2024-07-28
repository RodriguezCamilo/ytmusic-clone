import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import cn from "clsx";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  {
    className?: string;
    trackClassName?: string;
    rangeClassName?: string;
    thumbClassName?: string;
    heightClassName?: string;

  } & React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, trackClassName, rangeClassName, thumbClassName, heightClassName, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center group",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className={cn("relative w-full group grow overflow-hidden rounded-full", trackClassName, heightClassName)}>
      <SliderPrimitive.Range className={cn("absolute h-full", rangeClassName)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn("block group h-3 w-3 active:h-5 active:w-5 duration-200 z-10 rounded-full border shadow transition-all focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50", thumbClassName)} />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };