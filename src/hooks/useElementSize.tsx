import { useState, useEffect, useRef } from 'react';

function useElementSize<T extends Element>(): {
  height: number;
  width: number;
  ref: React.RefObject<T>;
} {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const resizeObserver = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setWidth(width);
        setHeight(height);
      });

      resizeObserver.observe(element);

      return () => {
        resizeObserver.unobserve(element);
      };
    }
  }, [ref.current]);

  return { width, height, ref };
}

export default useElementSize;
