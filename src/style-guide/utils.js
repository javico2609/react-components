export const capitalize = (string) => {
  return string ? `${string[0].toUpperCase()}${string.slice(1)}` : string;
};

export const emptyFn = () => {
};

export const addStyle = (prop, value) => styles => {
  if (prop) {
    return styles + value;
  }
  return styles;
};

export const compose = (...params) => params.reduce((prev, next) => (acc) => next(prev(acc)));

export const isString = (str) => {
  return typeof str === 'string';
};

export const isEmptyString = (str) => {
  return isNullOrUndefined(str) || str.toString().trim().length === 0;
};

export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;

};

export const isAllKeyNullOrUndefined = (value = {}, omit = []) => {
  const first = Object.keys(value).find(key => !isNullOrUndefined(value[key]) && !omit.includes(key));
  return isNullOrUndefined(first);
}

export const isEmptyObject = (obj) => {
  if (isNullOrUndefined(obj)) return true;

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
};
