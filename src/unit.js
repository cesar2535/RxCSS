import mapValues from './utils/mapValues';
import { map } from './observable';

const unit = {
  px: o$ =>
    o$.pipe(
      map(values => {
        if (typeof values === 'number') return `${values}px`;

        return mapValues(values, value => `${value}px`);
      })
    )
};

export default unit;
