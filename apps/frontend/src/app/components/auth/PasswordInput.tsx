"use client";

import { useState, type ReactNode } from "react";
import Icon from "../../components/ui/Icon";
import TextInput from "./TextInput";

type PasswordInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  labelAside?: ReactNode;
};

export default function PasswordInput({
  id,
  label,
  value,
  onChange,
  labelAside,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <TextInput
      id={id}
      label={label}
      icon="key"
      type={visible ? "text" : "password"}
      value={value}
      onChange={onChange}
      placeholder="••••••••••••••••"
      autoComplete="current-password"
      required
      labelAside={labelAside}
      trailing={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="text-on-surface-variant hover:text-on-surface cursor-pointer"
        >
          <Icon name={visible ? "visibility_off" : "visibility"} className="text-[20px]" />
        </button>
      }
    />
  );
}