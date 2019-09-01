import mapValues from './utils/mapValues';

const lerp = (rate: number) => (
  value: { [key: string]: number },
  targetValue: { [key: string]: number } | number
) => {
  if (
    value !== null &&
    (typeof value === 'object' || Array.isArray(value)) &&
    typeof targetValue === 'object'
  ) {
    return mapValues(value, (subVal, key) => {
      const delta = (targetValue[key] - subVal) * rate;

      return subVal + delta;
    });
  }

  if (typeof targetValue === 'number' && typeof value === 'number') {
    const delta = (targetValue - value) * rate;

    return value + delta;
  }
};

export default lerp;
