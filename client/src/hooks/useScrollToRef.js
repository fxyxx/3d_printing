import { useRef, useCallback } from "react";

function useScrollToRef() {
  const scrollRef = useRef(null);

  const scrollToRef = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return [scrollRef, scrollToRef];
}

export default useScrollToRef;
