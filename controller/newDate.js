export const newDate = () => {
  const d = new Date();
  const yy = d.getFullYear();
  const mm = d.getMonth() + 1;
  const dd = d.getDate();

  const dotDate = `${dd}.${mm}.${yy}`;
  const fullDate = `${yy}-${mm}-${dd}`;

  return fullDate;
};
