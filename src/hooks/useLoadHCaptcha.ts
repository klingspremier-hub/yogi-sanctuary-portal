import { useState, useCallback, useRef, useEffect } from "react";

const useLoadHCaptcha = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const hasTriggeredRef = useRef(false);
  const isInViewportRef = useRef(false);
  const formInteractedRef = useRef(false);

  // Check if already loaded on mount
  useEffect(() => {
    if (window.hcaptcha) {
      setIsLoaded(true);
    }
  }, []);

  const actuallyLoadScript = useCallback(() => {
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
      setTimeout(load, 100);
    }
  }, []);

  // Only load when BOTH conditions are met: form is in viewport AND user has interacted
  const tryLoad = useCallback(() => {
    if (hasTriggeredRef.current) return;
    if (isInViewportRef.current && formInteractedRef.current) {
      hasTriggeredRef.current = true;
      actuallyLoadScript();
    }
  }, [actuallyLoadScript]);

  // Called when form section enters viewport
  const setInViewport = useCallback((inView: boolean) => {
    isInViewportRef.current = inView;
    if (inView) {
      tryLoad();
    }
  }, [tryLoad]);

  // Called when user interacts with form
  const onFormInteraction = useCallback(() => {
    formInteractedRef.current = true;
    tryLoad();
  }, [tryLoad]);

  return { isLoaded, isLoading, setInViewport, onFormInteraction };
};

export default useLoadHCaptcha;
