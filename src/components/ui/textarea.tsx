import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => (
    <textarea ref={ref} {...props} className={"border rounded p-2 w-full " + (props.className || "")} />
  )
);

Textarea.displayName = "Textarea"; 