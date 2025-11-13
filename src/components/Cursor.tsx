import { useEffect, useRef } from "preact/hooks";
import { cursorPosition, cursorScale } from "../customFunctions/CursorEvents";

export function Cursor() {
  const ref = useRef(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    cursorPosition(ref.current);
    cursorScale(ref.current);
  },[]);


  return <div ref={ref} className={"cursor"} />;
}
