import { useEffect, useRef, useCallback } from "react";

interface HCaptchaProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

declare global {
  interface Window {
    hcaptcha: {
      render: (container: HTMLElement, config: {
        sitekey: string;
        callback: (token: string) => void;
        "expired-callback"?: () => void;
        "error-callback"?: () => void;
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const HCaptcha = ({ siteKey, onVerify, onExpire, onError }: HCaptchaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const handleVerify = useCallback((token: string) => {
    onVerify(token);
  }, [onVerify]);

  const handleExpire = useCallback(() => {
    onExpire?.();
  }, [onExpire]);

  const handleError = useCallback(() => {
    onError?.();
  }, [onError]);

  useEffect(() => {
    const renderCaptcha = () => {
      if (containerRef.current && window.hcaptcha && !widgetIdRef.current) {
        widgetIdRef.current = window.hcaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: handleVerify,
          "expired-callback": handleExpire,
          "error-callback": handleError,
        });
      }
    };

    // Check if hCaptcha is already loaded
    if (window.hcaptcha) {
      renderCaptcha();
    } else {
      // Wait for hCaptcha to load
      const interval = setInterval(() => {
        if (window.hcaptcha) {
          clearInterval(interval);
          renderCaptcha();
        }
      }, 100);

      return () => clearInterval(interval);
    }

    return () => {
      if (widgetIdRef.current && window.hcaptcha) {
        try {
          window.hcaptcha.remove(widgetIdRef.current);
        } catch (e) {
          // Widget may already be removed
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, handleVerify, handleExpire, handleError]);

  return <div ref={containerRef} className="flex justify-center" />;
};

export default HCaptcha;
