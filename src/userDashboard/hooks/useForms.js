import { useState } from "react";

const useForms = (initialValue) => {
  const [formState, setFormState] = useState(initialValue);
  const [errorFormState, setErrorFormState] = useState({});
  const [showAccount, setShowAccount] = useState({
    account: false,
    date: false,
    CVV: false,
    card: false,
  });

  const maxLength = {
    routing: 9,
    account: 17,
    card: 16,
    CVV: 3,
  };
  const minLength = {
    routing: 9,
    card: 16,
    date: 5,
    CVV: 3,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "date") {
      const digits = value.replace(/\D/g, "").slice(0, 4);
      let months = digits.slice(0, 2);
      let year = digits.slice(2);

      if (months.length === 2) {
        let parseMonth = parseInt(months, 10);
        if (parseMonth > 12) {
          months = "12";
        } else if (parseMonth < 1) {
          months = "01";
        }
      }

      if (year.length) {
        newValue = `${months}/${year}`;
      } else {
        newValue = months;
      }
    } else if (name in maxLength) {
      newValue = value.replace(/\D/g, "").slice(0, maxLength[name]);
    }

    // if (name === "account") {
    //   newValue = value.replace(/\D/g, "").slice(0, 17);
    // }

    setFormState((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
    if (!value.trim()) {
      setErrorFormState((prevError) => ({
        ...prevError,
        [name]: `Please enter a valid ${name}`,
      }));
    } else {
      setErrorFormState((prevError) => {
        const newState = { ...prevError };
        delete newState[name];
        return newState;
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldName = e.target.name;

    if (fieldName in showAccount) {
      setShowAccount((prevShow) => ({
        ...prevShow,
        [fieldName]: false,
      }));
    }

    if (!value.trim()) {
      setErrorFormState((prevError) => ({
        ...prevError,
        [name]: `Please enter a valid ${name}`,
      }));
      return;
    }

    if (name === "date") {
      // the purpose of this is to have 2 destructive value and remove the "/" and add comma that the purpose of the split
      const [month, year] = value.split("/");

      if (!month || !year || month.length !== 2 || year.length !== 2) {
        setErrorFormState((prevError) => ({
          ...prevError,
          [name]: "Expiration Date should be in this format (MM/YY)",
        }));
        return;
      }
      // this part means that when the month is 1 - 9 make sure it at base 10 and same for the year aspect while for the "20" shown in the year part means that when the users add any 2 digit add 20 to it for instance when a year is at 25 make it 2025 and so on
      let expMonth = parseInt(month, 10);
      let expYear = parseInt("20" + year, 10);

      if (expMonth < 1 || expMonth > 12) {
        setErrorFormState((prevError) => ({
          ...prevError,
          [name]: "Invalid Month",
        }));

        return;
      }

      let today = new Date();
      // the purposed of this +1 we all know that js starts at index 0 so + 1 make it starts at index 1 not 0
      let currentMonth = today.getMonth() + 1;
      let currentYear = today.getFullYear();

      if (
        expYear < currentYear ||
        (expYear === currentYear && expMonth < currentMonth)
      ) {
        setErrorFormState((prevError) => ({
          ...prevError,
          [name]: "Card is expired",
        }));

        return;
      }
    } else if (name in minLength && value.length < minLength[name]) {
      setErrorFormState((prevError) => ({
        ...prevError,
        [name]: `Invalid ${name} `,
      }));
      return;
    }

    // if (name === "card" && value.length < 16) {
    //   setErrorFormState((prevError) => ({
    //     ...prevError,
    //     [name]: `Invalid ${name} `,
    //   }));
    //   return;
    // }

    setErrorFormState((prevError) => {
      const newErrorState = { ...prevError };
      delete newErrorState[name];
      return newErrorState;
    });
  };

  const handleFocus = (e) => {
    const fieldName = e.target.name;

    if (fieldName in showAccount) {
      setShowAccount((prevShow) => ({
        ...prevShow,
        [fieldName]: true,
      }));
    }

    // it also written as
    // if(fieldName === "account") {
    //   setShowAccount((prevShow) => ({
    //     ...prevShow,
    //     account : true,
    //   }));
    // }
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    let newError = {};
    Object.keys(formState).forEach((field) => {
      const value = formState[field];
      if (typeof value === "string" && !value.trim()) {
        newError[field] = `Please enter a valid ${field}`;
        return;
      }

      if (field === "date") {
        const [month, year] = value.split("/");

        if (!month || !year || month.length !== 2 || year.length !== 2) {
          newError[field] = "Expiration Date should be in this format (MM/YY)";
          return;
        }

        let expMonth = parseInt(month, 10);
        let expYear = parseInt("20" + year, 10);

        if (expMonth < 1 || expMonth > 12) {
          newError[field] = "Invalid Month";
          return;
        }

        let today = new Date();
        let currentMonth = today.getMonth() + 1;
        let currentYear = today.getFullYear();

        if (
          expYear < currentYear ||
          (expYear === currentYear && expMonth < currentMonth)
        ) {
          newError[field] = "Card is expired";
          return;
        }
      } else if (
        field in minLength &&
        value.trim() &&
        value.length < minLength[field]
      ) {
        newError[field] = `Invalid ${field}`;
      }

      // if (field === "routing" && value.trim() && value.length < 9) {
      // newError[field] = `Invalid ${field}`;
      // }
    });

    if (Object.keys(newError).length > 0) {
      setErrorFormState(newError);
      return;
    }

    callback();
    setFormState(initialValue);
  };

  return {
    handleChange,
    handleSubmit,
    formState,
    setFormState,
    errorFormState,
    handleBlur,
    handleFocus,
    showAccount,
    setErrorFormState,
  };
};

export default useForms;
