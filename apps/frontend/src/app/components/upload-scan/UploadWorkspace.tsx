"use client";

import { useEffect, useRef, useState } from "react";
import DropZone from "../../components/upload-scan/DropZone";
import ScanProgressCard from "../../components/upload-scan/ScanProgressCard";
import AssuranceStrip from "../../components/upload-scan/AssuranceStrip";
import {
  ACCEPTED_EXTENSIONS,
  DEMO_FILE,
  MAX_FILE_SIZE,
} from "../../data/upload-scan";
import { getExtension } from "../../lib/format";
import type { ScanFile } from "../../types/upload-scan";

export default function UploadWorkspace() {
  // Starts with the demo file at 75% like the design.
  // Use useState<ScanFile | null>(null) and useState(0) to start empty.
  const [file, setFile] = useState<ScanFile | null>(DEMO_FILE);
  const [progress, setProgress] = useState(75);
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => stopTimer, []);

  const startScan = () => {
    stopTimer();
    setProgress(0);
    timer.current = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + 5);
        if (next >= 100) stopTimer();
        return next;
      });
    }, 400);
  };

  const handleFile = (selected: File) => {
    if (!ACCEPTED_EXTENSIONS.includes(getExtension(selected.name))) {
      setError("Unsupported file type. Use PDF, DOCX, PNG, JPG or TIFF.");
      return;
    }
    if (selected.size > MAX_FILE_SIZE) {
      setError("File is larger than the 25MB package limit.");
      return;
    }

    setError(null);
    setFile({ name: selected.name, size: selected.size, type: selected.type });
    startScan();
    // TODO: send `selected` to your upload API here (e.g. FormData -> /api/scan)
  };

  const handleCancel = () => {
    stopTimer();
    setFile(null);
    setProgress(0);
  };

  return (
    <div className="grid grid-cols-1 gap-space-lg">
      <DropZone onFile={handleFile} error={error} />
      {file && (
        <ScanProgressCard
          file={file}
          progress={progress}
          onCancel={handleCancel}
        />
      )}
      <AssuranceStrip />
    </div>
  );
}
