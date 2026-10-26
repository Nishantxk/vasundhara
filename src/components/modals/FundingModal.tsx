import React, { useState } from 'react';
import { X, HeartHandshake, Phone, Mail, QrCode, Check, Copy, ShieldCheck } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const FundingModal: React.FC = () => {
  const { isFundingOpen, setFundingOpen } = useVasundharaStore();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isFundingOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/65 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto sm:my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#1B4332] text-white shrink-0">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#E9D8A6] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold">Philanthropic & Seed Funding</h3>
          </div>
          <button
            onClick={() => setFundingOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-300 hover:text-white hover:bg-[#2D6A4F] transition-colors cursor-pointer"
            aria-label="Close funding modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          {/* Vision Statement */}
          <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-4 sm:p-5">
            <span className="text-[10px] sm:text-xs font-semibold text-emerald-800 uppercase tracking-wide block mb-1">
              Enterprise Vision Statement
            </span>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              &ldquo;Vasundhara channels philanthropic capital directly into decentralized
              capital assets—purchasing semi-automated pit-looms, low-emission plastic extruders,
              and ergonomic workstations for rural women-led cooperatives. Every rupee contributed
              funds measurable waste diversion and verified living wages.&rdquo;
            </p>
          </div>

          {/* QR Code and Payment Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Left: QR Code Box */}
            <div className="bg-white border-2 border-dashed border-stone-300 rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center">
              <span className="text-xs font-semibold text-stone-600 uppercase tracking-wide mb-2 sm:mb-3 flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-emerald-800" />
                <span>Instant UPI & QR Pay</span>
              </span>
              <div className="w-36 h-36 sm:w-48 sm:h-48 bg-stone-50 border border-stone-200 rounded-lg p-2 shadow-xs flex items-center justify-center">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=vasundhara.green@icici&pn=Vasundhara%20Enterprise&cu=INR&tn=Rural%20Artisan%20Fund"
                  alt="UPI QR Code for Vasundhara Enterprise"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] text-stone-500 mt-2 sm:mt-3 font-mono">
                UPI ID: vasundhara.green@icici
              </p>
            </div>

            {/* Right: Bank Transfer Coordinates */}
            <div className="space-y-2.5 sm:space-y-3 text-xs">
              <span className="text-xs font-semibold text-stone-800 uppercase tracking-wide block mb-1">
                Direct NEFT / RTGS Bank Coordinates
              </span>

              <div className="p-2.5 sm:p-3 bg-stone-50 rounded-lg border border-stone-200">
                <span className="text-stone-500 block text-[10px] sm:text-[11px]">Account Name</span>
                <span className="font-semibold text-stone-900">Vasundhara Rural Enterprise Trust</span>
              </div>

              <div className="p-2.5 sm:p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-stone-500 block text-[10px] sm:text-[11px]">Account Number</span>
                  <span className="font-mono font-semibold text-stone-900">50200088924156</span>
                </div>
                <button
                  onClick={() => copyToClipboard('50200088924156', 'acc')}
                  className="p-1.5 hover:bg-stone-200 rounded text-stone-600 cursor-pointer"
                  title="Copy account number"
                >
                  {copiedField === 'acc' ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-2.5 sm:p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-stone-500 block text-[10px] sm:text-[11px]">IFSC Code</span>
                  <span className="font-mono font-semibold text-stone-900">ICIC0000104</span>
                </div>
                <button
                  onClick={() => copyToClipboard('ICIC0000104', 'ifsc')}
                  className="p-1.5 hover:bg-stone-200 rounded text-stone-600 cursor-pointer"
                  title="Copy IFSC code"
                >
                  {copiedField === 'ifsc' ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-2.5 sm:p-3 bg-stone-50 rounded-lg border border-stone-200">
                <span className="text-stone-500 block text-[10px] sm:text-[11px]">Branch</span>
                <span className="font-medium text-stone-800">Senapati Bapat Road, Pune</span>
              </div>
            </div>
          </div>

          {/* Executive Leadership Contact Details */}
          <div className="border-t border-stone-200 pt-4 sm:pt-5">
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wide block mb-2 sm:mb-3">
              Executive & Founder Contact
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
              <div className="p-2.5 sm:p-3 bg-[#FAF8F5] rounded-lg border border-stone-200">
                <span className="text-stone-500 block text-[10px] sm:text-[11px]">Managing Director</span>
                <span className="font-bold text-stone-900 block">Dr. Radhika Kulkarni</span>
                <span className="text-stone-500 text-[10px] sm:text-[11px]">Lead Circular Architect</span>
              </div>

              <div className="p-2.5 sm:p-3 bg-[#FAF8F5] rounded-lg border border-stone-200 flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[10px] sm:text-[11px]">Direct Line</span>
                  <span className="font-medium text-stone-900">+91 20 2567 8940</span>
                  <span className="text-stone-500 text-[10px] sm:text-[11px] block">+91 98220 18450</span>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 bg-[#FAF8F5] rounded-lg border border-stone-200 flex items-start gap-2">
                <Mail className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-stone-500 block text-[10px] sm:text-[11px]">Direct Inquiries</span>
                  <span className="font-medium text-stone-900 block truncate">director@vasundhara-green.org</span>
                  <span className="text-stone-500 text-[10px] sm:text-[11px] block truncate">grant.office@vasundhara-green.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance & Section 80G Note */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-stone-500 bg-stone-50 p-3 rounded-lg border border-stone-200">
            <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
            <span>
              All donations are eligible for 50% tax exemption under Section 80G of the Indian Income Tax Act.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
