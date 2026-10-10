"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "../ui/Icon";
import { DEFAULT_PAYLOAD } from "../../data/guardrails";
import { redact } from "../../lib/redact";

const CONFIDENCE = [
  { label: "SSN Match", value: "99.8%", className: "text-primary" },
  { label: "Luhn CC Match", value: "100.0%", className: "text-primary" },
  { label: "NER Name", value: "94.1%", className: "text-secondary" },
  { label: "Secret Token", value: "99.9%", className: "text-error" },
];

export default function SandboxPanel() {
  const [payload, setPayload] = useState(DEFAULT_PAYLOAD);
  const [result, setResult] = useState(() => redact(DEFAULT_PAYLOAD));
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("Ready for evaluation");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const runSimulation = () => {
    setRunning(true);
    setStatus("Evaluating via Enclave...");
    timer.current = setTimeout(() => {
      setResult(redact(payload));
      setStatus("Enclave Redaction Complete (14.8ms)");
      setRunning(false);
    }, 400);
  };

  return (
    <div className="lg:col-span-7 rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center">
            <Icon name="science" className="text-primary text-[20px]" />
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Interactive Guardrail Sandbox &amp; Test Suite
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Simulate live payload evaluation against hardware-isolated privacy
              policies in real-time.
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono text-[11px]">
          Enclave Port: 8443
        </span>
      </div>

      {/* Input */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
          <label
            htmlFor="sample-payload"
            className="font-semibold text-on-surface"
          >
            RAW INCOMING PAYLOAD (TEST DATA)
          </label>
          <button
            type="button"
            onClick={() => setPayload(DEFAULT_PAYLOAD)}
            className="text-primary hover:underline font-semibold"
          >
            Load Default Test Case
          </button>
        </div>
        <textarea
          id="sample-payload"
          rows={4}
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          placeholder="Paste sensitive text payload here to test detection..."
          className="w-full p-3 font-mono text-body-sm text-on-surface bg-surface-container-low rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none leading-relaxed"
        />
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            onClick={runSimulation}
            disabled={running}
            className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all disabled:opacity-60"
          >
            <Icon name="play_arrow" className="text-[18px]" />
            <span>Test Policy Execution</span>
          </button>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {status}
          </span>
        </div>
        <span className="font-mono text-[12px] text-emerald-600 font-medium">
          Evaluation Latency: 14.8ms
        </span>
      </div>

      {/* Output */}
      <div className="flex flex-col gap-1.5 mt-space-xs">
        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
          <span className="font-semibold text-on-surface">
            REDACTED OUTPUT (SANITIZED STREAM)
          </span>
          <span className="text-emerald-600 font-semibold">
            {result.count} Entities Intercepted
          </span>
        </div>
        <div className="p-3.5 bg-surface-container font-mono text-body-sm text-on-surface rounded-xl shadow-inner leading-relaxed break-words">
          {result.segments.map((seg, i) =>
            seg.className ? (
              <span
                key={i}
                className={`${seg.className} px-1.5 py-0.5 rounded font-semibold`}
              >
                {seg.text}
              </span>
            ) : (
              <span key={i}>{seg.text}</span>
            ),
          )}
        </div>
      </div>

      {/* Confidence chips */}
      <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface-variant mr-1">
          Confidence Telemetry:
        </span>
        {CONFIDENCE.map((c) => (
          <span
            key={c.label}
            className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface"
          >
            {c.label}: <strong className={c.className}>{c.value}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}
