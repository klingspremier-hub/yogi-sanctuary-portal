import { useState, useCallback, useEffect, useRef } from "react";

const useLoadHCaptcha = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadScript = useCallback(() => {
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
    };
    document.head.appendChild(script);
  }, []);

  const observe = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    // If already loaded, no need to observe
    if (window.hcaptcha) {
      setIsLoaded(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadScript();
          observerRef.current?.disconnect();
        }
      },
      { rootMargin: "400px" } // Start loading when 400px away
    );

    observerRef.current.observe(element);
  }, [loadScript]);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { isLoaded, isLoading, loadScript, observe };
};

export default useLoadHCaptcha;
