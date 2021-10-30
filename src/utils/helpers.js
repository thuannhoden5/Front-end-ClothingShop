export const renderErrorMessage = (errs) => {
  if (typeof errs === 'string') {
    return <div> {errs} </div>;
  }
  return errs.map((err) => {
    return <div> {err} </div>;
  });
};

export const renderDate = (date) => {
  const time = new Date(date);
  return `${time.getDate()} ${time.toLocaleString('default', {
    month: 'long',
  })} ${time.getFullYear()} ${
    (time.getHours() < 10 ? '0' : '') + time.getHours()
  }:${(time.getMinutes() < 10 ? '0' : '') + time.getMinutes ()}`;
};
