"use client";

import Image from "next/image";
import { 
  X, 
  ExternalLink, 
  Lock, 
  Calendar, 
  Building2 
} from "lucide-react";
import { CredentialItem } from "@/data/credentials";

interface CredentialModalProps {
  credential: CredentialItem | null;
  onClose: () => void;
}

export default function CredentialModal({ credential, onClose }: CredentialModalProps) {
  if (!credential) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0f172a] border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#0c1222]">
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                credential.isRedacted
                  ? "bg-amber-950/80 text-amber-300 border border-amber-800/60"
                  : "bg-indigo-950/80 text-indigo-300 border border-indigo-800/60"
              }`}
            >
              {credential.categoryLabel}
            </span>
            <span className="text-xs text-slate-400">
              {credential.statusBadge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Privacy Alert Banner if Redacted */}
          {credential.isRedacted && (
            <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-3.5 flex items-start gap-3">
              <Lock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div className="text-xs text-amber-200/90 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-0.5">
                  Privacy Redacted Document
                </span>
                {credential.privacyNote ||
                  "Personal identity indicators, contact addresses, and confidential clauses have been redacted in strict compliance with recruiter privacy guidelines."}
              </div>
            </div>
          )}

          {/* Document Preview Image */}
          <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center">
            <Image
              src={credential.documentUrl || credential.thumbnailUrl}
              alt={credential.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Details */}
          <div>
            <h3 id="modal-title" className="text-xl font-bold text-white mb-2">
              {credential.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div className="flex items-center gap-2 text-slate-300">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>Issuer: <strong>{credential.issuer}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Year: <strong>{credential.issueDate}</strong></span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {credential.description}
            </p>

            {/* Skills */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Associated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {credential.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between p-4 border-t border-slate-800 bg-[#0c1222]">
          <div className="text-[11px] text-slate-400">
            {credential.isRedacted ? "Public preview copy" : "Verified genuine asset"}
          </div>

          <div className="flex items-center gap-3">
            {credential.verificationUrl && (
              <a
                href={credential.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
