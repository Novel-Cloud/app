import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";

TimeAgo.setDefaultLocale(ko.locale);
TimeAgo.addLocale(ko);
const timeAgo = new TimeAgo("ko-KR");

export const getKoreanDate = (
  date: Date,
  options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  } as Intl.DateTimeFormatOptions,
) => {
  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

export const getTimeAgo = (date: Date) => {
  return timeAgo.format(date);
};

export const isISODateString = (value: string) => {
  const isISODateStringRegExp =
    /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):?([0-5][0-9])?(\.[0-9]+)?(Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/;
  return isISODateStringRegExp.test(value);
};

export const getDateParsedData = (data: unknown): any => {
  if (data === null || data === undefined || typeof data !== "object") {
    return data;
  }

  return Object.entries(data).reduce((acc: any, item: any) => {
    const [key, value] = item;
    if (Array.isArray(value)) {
      return {
        ...acc,
        [key]: value.map((v) => getDateParsedData(v)),
      };
    }

    if (isISODateString(value)) return { ...acc, [key]: new Date(value) };

    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

export const getGreeting = () => {
  const today = new Date();
  const utc = today.getTime() + today.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const nowHour = new Date(utc + KR_TIME_DIFF).getHours();

  if (nowHour < 6) return "Oyasuminasai~";
  if (nowHour < 12) return "Ohayogozaimasu!";
  if (nowHour < 18) return "Konnichiwa~";
  return "Konbanwa~";
};
