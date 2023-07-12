export const getYearToDate = (date: Date) => {
  const year = date.toLocaleString('ko-KR', { year: 'numeric' });
  return year;
};

export const getMonthToDate = (date: Date) => {
  const month = date.toLocaleString('ko-KR', { month: 'long' });
  return month;
};

export const getDayToDate = (date: Date) => {
  const day = date.toLocaleDateString('ko-KR', { day: '2-digit' });
  return day;
};
