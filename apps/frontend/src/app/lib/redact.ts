export interface Detector {
  id: string;
  pattern: RegExp;
  label: string;
  className: string;
}

export interface Segment {
  text: string;
  className?: string;
}

export const DETECTORS: Detector[] = [
  {
    id: "name",
    // Name following the word "Patient"
    pattern: /(?<=Patient\s)[A-Z][a-z]+\s[A-Z][a-z]+/g,
    label: "[REDACTED_NAME:SHA256:7b1e]",
    className: "bg-primary-fixed text-primary",
  },
  {
    id: "ssn",
    pattern: /\b\d{3}-\d{2}-\d{4}\b/g,
    label: "[REDACTED_SSN]",
    className: "bg-primary-fixed text-primary",
  },
  {
    id: "pan",
    pattern: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
    label: "[TOKEN_PAN:tok_9918]",
    className: "bg-secondary-fixed text-on-secondary-fixed-variant",
  },
  {
    id: "aws",
    pattern: /\bAKIA[0-9A-Z]{16}\b/g,
    label: "[REVOKED_AWS_KEY]",
    className: "bg-error-container text-error",
  },
];

export function redact(input: string): { segments: Segment[]; count: number } {
  type Hit = { start: number; end: number; detector: Detector };
  const hits: Hit[] = [];

  for (const detector of DETECTORS) {
    const re = new RegExp(detector.pattern.source, detector.pattern.flags);
    for (const m of input.matchAll(re)) {
      if (m.index === undefined) continue;
      hits.push({ start: m.index, end: m.index + m[0].length, detector });
    }
  }

  hits.sort((a, b) => a.start - b.start);

  const segments: Segment[] = [];
  let cursor = 0;
  let count = 0;

  for (const hit of hits) {
    if (hit.start < cursor) continue; // skip overlaps
    if (hit.start > cursor) segments.push({ text: input.slice(cursor, hit.start) });
    segments.push({ text: hit.detector.label, className: hit.detector.className });
    cursor = hit.end;
    count++;
  }
  if (cursor < input.length) segments.push({ text: input.slice(cursor) });

  return { segments, count };
}