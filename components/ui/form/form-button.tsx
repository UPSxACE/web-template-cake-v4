import * as React from "react";

import { ButtonProps } from "@/components/sui/button";
import { twMerge } from "tailwind-merge";
import { Button } from "../layout/button";

const FormButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        className={twMerge("w-full rounded-3xl bg-theme-brown", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

FormButton.displayName = "FormButton";

export { FormButton };
