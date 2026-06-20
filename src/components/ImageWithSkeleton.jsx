import { useState } from 'react';
import clsx from 'clsx';
import Skeleton from './Skeleton';

export default function ImageWithSkeleton({ src, alt, className, imgClassName, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={clsx("image-with-skeleton", className)}>
      {!loaded && !error && <Skeleton style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />}
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
