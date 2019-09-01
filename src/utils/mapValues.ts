type Result<T> = {
  [key: string]: T;
};

function mapValues<T>(
  object: Result<T> = {},
  iteratee: (value: T, key: string, obj: Result<T>) => T
) {
  const result: Result<T> = {};

  Object.keys(object).forEach(key => {
    result[key] = iteratee(object[key], key, object);
  });

  return result;
}

export default mapValues;
