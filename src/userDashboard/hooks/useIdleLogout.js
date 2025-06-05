import { signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { noUSerSignIn } from "../redux/feature/auth/authSlice";
import { auth } from "../../firebase/FirebaseConfig";

const IDLE_TIMEOUT = 15 * 60 * 1000; // 15 minutes
const WARNING_TIMEOUT = 2 * 40; // 1 minutes

const useIdleLogout = () => {
  // const [showWarning, setShowWarning] = useState(false);
  // const [count, setCount] = useState(WARNING_TIMEOUT);

  // const timeoutRef = useRef(null);
  // const warningRef = useRef(null);
  // const countdownIntervalRef = useRef(null);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const resetTimers = () => {
  //   // Clear both timers
  //   clearTimeout(timeoutRef.current);
  //   clearTimeout(warningRef.current);
  //   clearInterval(countdownIntervalRef.current);

  //   setCount(WARNING_TIMEOUT); // reset countdown
  //   setShowWarning(false);

  //   // Start idle timer again
  //   timeoutRef.current = setTimeout(() => {
  //     setShowWarning(true);
  //     setCount(WARNING_TIMEOUT);
  //     // Start warning timer
  //     warningRef.current = setTimeout(() => {
  //       handleLogout();
  //     }, WARNING_TIMEOUT * 1000);

  //     // countdownIntervalRef.current = setInterval(() => {
  //     //   setCount((prevCount) => {
  //     //     if (prevCount <= 1) {
  //     //       clearInterval(countdownIntervalRef.current);
  //     //       return 0;
  //     //     }
  //     //     return prevCount - 1;
  //     //   });
  //     // }, 1000);
  //   }, IDLE_TIMEOUT);
  // };

  // const handleLogout = async () => {
  //   clearTimeout(timeoutRef.current);
  //   clearTimeout(warningRef.current);
  //   clearInterval(countdownIntervalRef.current);

  //   setShowWarning(false);

  //   await signOut(auth);
  //   dispatch(noUSerSignIn());
  //   navigate("/personalBanking");
  // };

  // const cancelLogout = () => {
  //   setShowWarning(false);
  //   resetTimers();
  // };

  // useEffect(() => {
  //   if (showWarning) {
  //     countdownIntervalRef.current = setInterval(() => {
  //       setCount((prev) => {
  //         if (prev <= 1) {
  //           clearInterval(countdownIntervalRef.current);
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //   } else {
  //     clearInterval(countdownIntervalRef.current);
  //   }

  //   return () => clearInterval(countdownIntervalRef.current);
  // }, [showWarning]);

  // const formatTime = (second) => {
  //   const minute = Math.floor(second / 60);
  //   const seconds = second % 60;
  //   const minStg = minute <= 1 ? "minute" : "minutes";
  //   const secStg = seconds <= 1 ? "second" : "seconds";
  //   return `${minute} ${minStg} ${seconds} ${secStg}`;
  // };

  // useEffect(() => {
  //   const events = ["mousemove", "keydown", "click", "scroll"];
  //   const activity = () => {
  //     if (!showWarning) resetTimers();
  //   };

  //   events.forEach((event) => window.addEventListener(event, activity));
  //   resetTimers();

  //   return () => {
  //     events.forEach((event) => window.removeEventListener(event, activity));
  //     clearTimeout(timeoutRef.current);
  //     clearTimeout(warningRef.current);
  //     clearInterval(countdownIntervalRef.current);
  //   };
  // }, [showWarning]);

  const [showWarning, setShowWarning] = useState(false);
  const [count, setCount] = useState(WARNING_TIMEOUT);

  const timeoutRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clearAllTimers = () => {
    clearTimeout(timeoutRef.current);
    clearInterval(countdownIntervalRef.current);
  };

  const handleLogout = async () => {
    clearAllTimers();
    setShowWarning(false);
    await signOut(auth);
    dispatch(noUSerSignIn());
    navigate("/personalBanking");
  };

  const cancelLogout = () => {
    clearAllTimers();
    setShowWarning(false);
    setCount(WARNING_TIMEOUT);
    startIdleTimer(); // Restart everything
  };

  const startIdleTimer = () => {
    timeoutRef.current = setTimeout(() => {
      setShowWarning(true);
    }, IDLE_TIMEOUT);
  };

  // ⚠️ Start countdown only when the warning is shown
  useEffect(() => {
    if (showWarning) {
      setCount(WARNING_TIMEOUT);

      countdownIntervalRef.current = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(countdownIntervalRef.current);
            handleLogout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(countdownIntervalRef.current);
  }, [showWarning]);

  // ⚠️ Watch for user activity and restart the idle timer
  useEffect(() => {
    const events = ["mousemove", "keydown", "click", "scroll"];
    const handleActivity = () => {
      if (!showWarning) {
        clearAllTimers();
        startIdleTimer();
      }
    };

    events.forEach((event) => window.addEventListener(event, handleActivity));
    startIdleTimer();

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
      clearAllTimers();
    };
  }, [showWarning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} ${mins === 1 ? "minute" : "minutes"} ${secs} ${
      secs === 1 ? "second" : "seconds"
    }`;
  };

  return { showWarning, cancelLogout, count, formatTime, handleLogout };
};

export default useIdleLogout;
