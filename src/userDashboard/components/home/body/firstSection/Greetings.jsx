import { useCallback, useEffect, useState } from "react";

const Greetings = () => {
  const [greetings, setGreetings] = useState("");

  //   this part is used to check the current hours of date to get the current state of greetings
  const updateGreetings = useCallback(() => {
    let hour = new Date().getHours();

    if (hour < 12) {
      setGreetings("Good Morning");
    } else if (hour < 17) {
      setGreetings("Good Afternoon");
    } else {
      setGreetings("Good Evening");
    }
  }, []);
  useEffect(() => {
    updateGreetings();
  }, [updateGreetings]);

  return <span>{greetings}</span>;
};

export default Greetings;
