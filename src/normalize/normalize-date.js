import moment from "moment";

export const normalizeDate = (date, formatter = "DD.MM.YYYY") => moment(date).format(formatter);
