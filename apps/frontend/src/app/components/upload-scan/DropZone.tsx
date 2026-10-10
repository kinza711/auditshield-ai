"use client";

import { useRef, useState } from "react";
import type { DragEvent, KeyboardEvent } from "react";
import Icon from "../../components/ui/Icon";
import { ACCEPT_ATTR, FORMAT_BADGES } from "../../data/upload-scan";

interface DropZoneProps {
  onFile: (file: File) => void;
  error?: string | null;
}

export default function DropZone({ onFile, error }: DropZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const openPicker = () => inputRef.current?.click();

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onFile(file);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPicker();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Upload a document"
      onClick={openPicker}
      onKeyDown={handleKeyDown}
      onDragEnter={handleDragOver}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`group relative overflow-hidden rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl p-space-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
        dragging ? "shadow-xl scale-[1.008]" : "shadow-md"
      }`}
    >
      {/* Inner highlight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-fixed/20 via-transparent to-primary-fixed/15 opacity-60 pointer-events-none" />

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT_ATTR}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFile(file);
          e.target.value = ""; // allow re-selecting the same file
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-space-md">
        {/* Icon ring */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-secondary-fixed/50 flex items-center justify-center shadow-inner group-hover:scale-105 group-hover:bg-primary-fixed transition-all duration-300">
            <Icon
              name="cloud_upload"
              className="text-primary text-[38px] group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center">
            <Icon name="security" className="text-secondary text-[16px]" />
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Drag and drop audit payload here, or{" "}
            <span className="text-primary underline decoration-primary/40 underline-offset-4 font-semibold group-hover:text-primary-container transition-colors">
              browse workstation
            </span>
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Engineered for standard contracts, high-density PDFs, rasterized scans
            (Max 25MB per package)
          </p>
        </div>

        {error && (
          <p
            role="alert"
            className="font-body-sm text-body-sm text-error bg-error-container px-3 py-1.5 rounded-lg"
          >
            {error}
          </p>
        )}

        <div className="pt-space-xs">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openPicker();
            }}
            className="inline-flex items-center gap-space-sm px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container active:scale-95 transition-all duration-200"
          >
            <Icon name="add_circle" className="text-[20px]" />
            Select Document
          </button>
        </div>

        <div className="flex items-center gap-2 pt-2">
          {FORMAT_BADGES.map((badge) => (
            <span
              key={badge}
              className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant"
            >
              {badge}
            </span>
          ))}
          <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">
            OCR 4.0
          </span>
        </div>
      </div>
    </div>
  );
}