import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn("base-input-class", className)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
