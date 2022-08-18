export default function formatDateToString(date) {
  let newDate = new Date(
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
  );

  return newDate;
}
