"use client";

import type { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";
import Icon from "../../components/ui/Icon";

type TextInputProps = {
  id: string;
  label: string;
  icon: string;
  value: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  /** Content shown on the right of the label row (e.g. "Forgot password?") */
  labelAside?: ReactNode;
  /** Element rendered inside the input on the right (e.g. eye toggle) */
  trailing?: ReactNode;
};

export default function TextInput({
  id,
  label,
  icon,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  required,
  labelAside,
  trailing,
}: TextInputProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label
          htmlFor={id}
          className="font-label-sm text-label-sm text-on-surface font-semibold"
        >
          {label}
        </label>
        {labelAside}
      </div>
      <div className="relative flex items-center">
        <Icon
          name={icon}
          className="absolute left-3 text-secondary text-[20px]"
        />
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          className={`w-full h-10 pl-10 ${
            trailing ? "pr-10" : "pr-space-md"
          } bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-md text-body-md rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:bg-secondary-fixed/10`}
        />
        {trailing && (
          <div className="absolute right-3 flex items-center">{trailing}</div>
        )}
      </div>
    </div>
  );
}
