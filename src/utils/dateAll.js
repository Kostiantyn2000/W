export const dateDay = () => {
  let dateInfo = new Date();

  let formatter = new Intl.DateTimeFormat("en-us", {
    weekday: "long",
  });

  return formatter.format(dateInfo);
};

export const dateAll = () => {
  let dateInfo = new Date();

  let formatter = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: true,
  });

  return formatter.format(dateInfo);
};
