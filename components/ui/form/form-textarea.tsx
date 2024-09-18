import * as React from "react";

import { Textarea, TextareaProps } from "@/components/sui/textarea";
import { twMerge } from "tailwind-merge";

const FormTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <Textarea
        className={twMerge("border-[#7c7c7c]", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

FormTextarea.displayName = "FormTextarea";

export { FormTextarea };
