export const convertIsoDate = (date: number): string => {
  let isoDate = new Date(date);
  let day = isoDate.getUTCDate();
  let month = isoDate.toLocaleString("default", { month: "short" });

  return `${day} ${month}`;
}
