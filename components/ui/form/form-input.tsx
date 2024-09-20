import * as React from "react";

import { Input, InputProps } from "@/components/sui/input";
import { twMerge } from "tailwind-merge";

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    // border-[#7c7c7c]
    return (
      <Input
        className={twMerge("border-theme-brown", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };

