'use client';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg p-8 md:p-12 max-w-md w-full border border-border shadow-lg animate-in fade-in zoom-in duration-300">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold mb-3">Sikeresen elküldve!</h3>
          <p className="text-foreground/70 mb-8">
            Köszönjük az üzenetét! Hamarosan válaszolunk Önnek.
          </p>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Bezárás
          </button>
        </div>
      </div>
    </div>
  );
}
