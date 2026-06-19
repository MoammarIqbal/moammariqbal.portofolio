import { useState } from 'react';
import clsx from 'clsx';
import Skeleton from './Skeleton';

export default function ImageWithSkeleton({ src, alt, className, imgClassName, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={clsx("image-with-skeleton", className)}>
      {!loaded && !error && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt}
        className={clsx(imgClassName, !loaded && "opacity-0")}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
}
