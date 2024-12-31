/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Input, InputProps } from "./ui/input";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };
    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={(cn("pe-10"), className)}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          title={showPassword ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"
          onClick={handleShowPassword}
        >
          {showPassword ? (
            <Eye className="size-5" />
          ) : (
            <EyeOff className="size-5" />
          )}
        </button>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
