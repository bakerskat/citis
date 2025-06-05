import { useNavigate } from "react-router-dom";

const useGoback = () => {
  const navigate = useNavigate();

  // this go back to the previous page
  const goBack = () => {
    if (window.history.length >= 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return { goBack };
};

export default useGoback;
