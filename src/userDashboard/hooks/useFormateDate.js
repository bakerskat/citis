const useFormateDate = (initialValue) => {
  const formateDate = (initialValue) => {
    // this parts means that when the date is a string, like a normal string i want to apply it into a date, meaning by creating a date to it and adding "T00:00:00" to blend with normal date that was added and if a not a string just a normal date no need to create another date to it
    const date =
      typeof initialValue === "string"
        ? new Date(initialValue + "T00:00:00")
        : initialValue;
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const now = new Date();
  const cutOffDate = new Date();
  // this part means get the currennt date of today and minus it from the selected day selected, and when it gives e.g -16, the - start from last month then count backward to exact results show
  cutOffDate.setDate(now.getDate() - parseInt(initialValue));

  const formateStartDate = formateDate(cutOffDate);
  // same but in the case it gets todays date
  const formateEndDate = formateDate(now);

  return {
    now,
    formateDate,
    cutOffDate,
    formateEndDate,
    formateStartDate,
  };
};

export default useFormateDate;
