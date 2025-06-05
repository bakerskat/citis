import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

export default PageTitle;
