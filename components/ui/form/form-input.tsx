import * as React from "react";

import { Input, InputProps } from "@/components/sui/input";
import { twMerge } from "tailwind-merge";

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        className={twMerge("border-[#7c7c7c]", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };
