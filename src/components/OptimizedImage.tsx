import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onContextMenu?: (e: React.MouseEvent) => void;
  draggable?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  priority = false,
  onContextMenu,
  draggable = true,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : undefined}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      onLoad={() => setIsLoaded(true)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onContextMenu={onContextMenu}
      draggable={draggable}
    />
  );
};

export default OptimizedImage;
