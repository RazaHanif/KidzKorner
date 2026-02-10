import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Image = ({ src, alt, w = "md:w-3xs w-full" }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const outer = `${w} relative`;
  const inner = "w-full h-full object-cover rounded-lg border-2 shadow-lg";

  console.log("IMG SRC:", src, typeof src);

  return (
    <div className={outer}>
      {(!src || !loaded || errored) && (
        <Skeleton className="w-full aspect-video rounded-lg" />
      )}

      {src && !errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`${inner} ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => {
            console.log(`${src}: onLoad`);
            setLoaded(true);
          }}
          onError={() => {
            console.log(`${src}: onLoad`);
            setErrored(true);
          }}
        />
      )}
    </div>
  );
};

export default Image;
