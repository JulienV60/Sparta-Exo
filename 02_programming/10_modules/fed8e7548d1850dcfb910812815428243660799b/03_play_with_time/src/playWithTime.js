import moment from "moment";
moment().format();

function formatDate(date) {
  if (date !== undefined) {
    return moment(date).format("dddd Do MMMM YYYY");
  }
}

function yearsSinceDate(year) {
  return moment().diff(year, "years");
}

function daysSinceDate(date) {
  return moment().diff(date, "days") + 1;
}
function getDayFromDate(date) {
  return moment(date).format("dddd");
}

export { formatDate, yearsSinceDate, daysSinceDate, getDayFromDate };
