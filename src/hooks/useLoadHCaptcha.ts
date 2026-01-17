import { useState, useCallback, useEffect, useRef } from "react";

const useLoadHCaptcha = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const hasTriggeredRef = useRef(false);

  const loadScript = useCallback(() => {
    // Prevent multiple triggers
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // Already loaded
    if (window.hcaptcha) {
      setIsLoaded(true);
      return;
    }

    // Already loading
    if (document.querySelector('script[src*="hcaptcha"]')) {
      return;
    }

    setIsLoading(true);
    
    // Use requestIdleCallback to load during idle time, reducing TBT
    const load = () => {
      const script = document.createElement("script");
      script.src = "https://js.hcaptcha.com/1/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setIsLoaded(true);
        setIsLoading(false);
      };
      script.onerror = () => {
        setIsLoading(false);
        hasTriggeredRef.current = false; // Allow retry
      };
      document.head.appendChild(script);
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(load);
    } else {
      setTimeout(load, 1);
    }
  }, []);

  return { isLoaded, isLoading, loadScript };
};

export default useLoadHCaptcha;
