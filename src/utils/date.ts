export const monthsForLocale = (localeName = 'en-EN', monthFormat = 'long') => {
  const now = new Date();
  const format = new Intl.DateTimeFormat(localeName, { month: monthFormat })
    .format;

  return [...Array(12).keys()].map((m) => ({
    key: (m + 1).toString(),
    value: format(new Date(Date.UTC(now.getFullYear(), m % 12))),
  }));
};
