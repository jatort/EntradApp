const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Nov', 'Dec'];
const DAYS = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

export const getDatefromDate = (date) => {
  const tmp = new Date(date);
  return `${DAYS[tmp.getUTCDay()]}, ${tmp.getUTCDate()} ${MONTHS[tmp.getUTCMonth()]}`;
};

export const getHourFromDate = (date) => {
  const tmp = new Date(date);
  const hour = (tmp.getUTCHours() < 10 ? '0' : '') + tmp.getUTCHours();
  const minutes = (tmp.getUTCMinutes() < 10 ? '0' : '1') + tmp.getUTCMinutes();
  return `${hour}: ${minutes}`;
};
