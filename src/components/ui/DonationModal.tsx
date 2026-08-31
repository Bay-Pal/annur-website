"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/ui/Icon";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [pollChoice, setPollChoice] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div
      className={`modal ${isOpen ? "is-open" : ""}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
    >
      <button
        className="modal-backdrop"
        type="button"
        aria-label="Close donation modal"
        onClick={onClose}
      />
      <div className="modal-panel donate-modal-panel">
        <button
          className="modal-close"
          type="button"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="donate-modal-header">
          <div className="donate-modal-badge">
            <Icon name="heart" size={16} />
            <span>Direct Community Impact</span>
          </div>
          <h2 id="donate-modal-title" className="donate-modal-title">
            Direct Bank Wire Transfer
          </h2>
          <p className="donate-modal-subtitle">
            100% of your contribution directly funds sustainable agriculture, scholarships,
            orphan care, and Masjid complexes in Malawi with <strong>0% admin deductions</strong>.
          </p>
        </div>

        {/* Official Bank Account Details Card */}
        <div className="donate-bank-card">
          <div className="donate-bank-header">
            <span className="donate-bank-tag">Official Account</span>
            <span className="donate-bank-currency">Malawi (MWK / USD Wire)</span>
          </div>

          <div className="donate-bank-grid">
            <div className="donate-bank-item">
              <span className="donate-bank-label">Account Name</span>
              <strong className="donate-bank-value">An Nur Charity Foundation</strong>
            </div>

            <div className="donate-bank-item">
              <span className="donate-bank-label">Bank Name</span>
              <strong className="donate-bank-value">First Capital Bank</strong>
            </div>

            <div className="donate-bank-item">
              <span className="donate-bank-label">Branch</span>
              <strong className="donate-bank-value">City Mall Branch</strong>
            </div>

            <div className="donate-bank-item donate-bank-item--highlight">
              <div className="donate-bank-meta">
                <span className="donate-bank-label">Account Number</span>
                <strong className="donate-bank-value donate-bank-value--num">0027704001377</strong>
              </div>
              <button
                type="button"
                className="btn-copy-pill"
                onClick={() => copyToClipboard("0027704001377", "accNum")}
                aria-label="Copy Account Number"
              >
                {copiedField === "accNum" ? "✓ Copied" : "Copy Account"}
              </button>
            </div>

            <div className="donate-bank-item donate-bank-item--highlight">
              <div className="donate-bank-meta">
                <span className="donate-bank-label">SWIFT Code</span>
                <strong className="donate-bank-value donate-bank-value--num">FRCGMWMW</strong>
              </div>
              <button
                type="button"
                className="btn-copy-pill"
                onClick={() => copyToClipboard("FRCGMWMW", "swift")}
                aria-label="Copy SWIFT Code"
              >
                {copiedField === "swift" ? "✓ Copied" : "Copy SWIFT"}
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="donate-trust-pills">
          <span>✓ 100% Donation Policy</span>
          <span>✓ Zakaat &amp; Sadaqah Eligible</span>
          <span>✓ 0% Administrative Deductions</span>
        </div>

        {/* Interactive Donor Poll & Confirmation */}
        <div className="donate-poll-box">
          <p className="donate-poll-prompt">
            <strong>Have you completed or planned a transfer?</strong> Let us know so we can assist:
          </p>
          <div className="donate-poll-options">
            <button
              type="button"
              className={`donate-poll-btn ${pollChoice === "completed" ? "is-active" : ""}`}
              onClick={() => setPollChoice("completed")}
            >
              💚 I have completed a transfer
            </button>
            <button
              type="button"
              className={`donate-poll-btn ${pollChoice === "saved" ? "is-active" : ""}`}
              onClick={() => setPollChoice("saved")}
            >
              📋 I saved the bank details for later
            </button>
            <button
              type="button"
              className={`donate-poll-btn ${pollChoice === "partnership" ? "is-active" : ""}`}
              onClick={() => setPollChoice("partnership")}
            >
              🤝 I want to discuss Waqf / Corporate Partnership
            </button>
          </div>

          {/* Dynamic Feedback based on choice */}
          {pollChoice === "completed" && (
            <div className="donate-poll-feedback donate-poll-feedback--success">
              <p>
                <strong>Jazakum Allahu Khairan!</strong> Please notify our finance desk with your transfer reference so we can issue an official receipt.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm" onClick={onClose}>
                Notify Team / Send Receipt &rarr;
              </Link>
            </div>
          )}

          {pollChoice === "saved" && (
            <div className="donate-poll-feedback">
              <p>
                BarakAllahu Feekum! We look forward to your partnership in building self-reliant communities.
              </p>
            </div>
          )}

          {pollChoice === "partnership" && (
            <div className="donate-poll-feedback">
              <p>
                We welcome collaborative Waqf investments and Zakaat allocations.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm" onClick={onClose}>
                Go to Contact Us &amp; Learn More &rarr;
              </Link>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="donate-modal-footer">
          <Link href="/contact" className="doc-arrow-link" onClick={onClose}>
            Have questions? Visit our Contact Page &rarr;
          </Link>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
