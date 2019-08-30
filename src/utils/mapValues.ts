function mapValues(object: object = {}, iteratee: Function) {
  const result: object = {};

  Object.keys(object).forEach(key => {
    result[key] = iteratee(object[key], key, object);
  });

  return result;
}

export default mapValues;
