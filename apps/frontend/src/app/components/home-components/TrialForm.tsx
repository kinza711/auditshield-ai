"use client";

import { useState, type FormEvent } from "react";

export default function TrialForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send `email` to your API route / backend
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-label-lg text-label-lg text-secondary max-w-xl mx-auto mb-6">
        Thanks! We&apos;ll email {email} with your trial details shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto mb-6"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your enterprise work email..."
        className="w-full sm:w-auto flex-1 bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/70 px-4 py-3.5 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary text-body-md"
      />
      <button
        type="submit"
        className="w-full sm:w-auto font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-xl py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap cursor-pointer"
      >
        Start 14-Day Enterprise Trial
      </button>
    </form>
  );
}