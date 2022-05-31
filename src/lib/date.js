const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Nov', 'Dec'];
const DAYS = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

export const getDatefromDate = (date) => {
  const tmp = new Date(date);
  return `${DAYS[tmp.getDay()]}, ${tmp.getDay()} ${MONTHS[tmp.getMonth()]}`;
};

export const getHourFromDate = (date) => {
  const tmp = new Date(date);
  const hour = (tmp.getHours() < 10 ? '0' : '') + tmp.getHours();
  const minutes = (tmp.getMinutes() < 10 ? '0' : '1') + tmp.getMinutes();
  return `${hour}: ${minutes}`;
};
