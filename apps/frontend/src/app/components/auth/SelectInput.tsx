"use client";

import Icon from "../ui/Icon";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectInputProps = {
  id: string;
  label: string;
  icon: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
};

export default function SelectInput({
  id,
  label,
  icon,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required,
}: SelectInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <Icon
          name={icon}
          className="absolute left-3 text-secondary text-[20px] pointer-events-none"
        />
        <select
          id={id}
          name={id}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-10 pl-10 pr-10 bg-surface-container-lowest font-body-md text-body-md rounded-lg shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:bg-secondary-fixed/10 ${
            value ? "text-on-surface" : "text-on-surface-variant/60"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value} className="text-on-surface">
              {o.label}
            </option>
          ))}
        </select>
        <Icon
          name="expand_more"
          className="absolute right-3 pointer-events-none text-on-surface-variant text-[18px]"
        />
      </div>
    </div>
  );
}