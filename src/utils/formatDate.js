export default function formatDate(date, type = "full") {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const [month, day, year] = new Intl.DateTimeFormat("en-US", options)
    .format(date)
    .split("/");

  if (type === "full") return `${year}-${month}-${day}`;
  else if (type === "year") return year;
  else if (type === "month") return month;
  else if (type === "day") return day;
}
