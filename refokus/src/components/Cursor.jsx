import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const move = (e) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor"
      className="pointer-events-none fixed top-0 left-0 
                 w-6 h-6 rounded-full bg-white mix-blend-difference
                 transform -translate-x-1/2 -translate-y-1/2 z-[999]"
    ></div>
  );
}
