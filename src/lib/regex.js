export const check_apikey = (key) => {
  const patt = /([a-zA-Z]|\d){8}(-([a-zA-Z]|\d){4}){3}-([a-zA-Z]|\d){12}/gm;
  return patt.test(key);
};

export const check_secretkey = (key) => {
  const patt = /([a-z]|\d){40}/gm;
  return patt.test(key);
};
