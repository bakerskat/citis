import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// the purpose of this is to make sure that when user click any link and the page is in between it scrolls up and show the beginning of the page
const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollTop;
