export const renderErrorMessage = (errs) => {
  if (typeof errs === 'string') {
    return <div> {errs} </div>;
  }
  return errs.map((err) => {
    return <div> {err} </div>;
  });
};
