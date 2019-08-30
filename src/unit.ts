import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import mapValues from './utils/mapValues';

const unit = {
  px: (o$: Observable<object>) =>
    o$.pipe(
      map(values => {
        if (typeof values === 'number') return `${values}px`;

        return mapValues(values, value => `${value}px`);
      })
    )
};

export default unit;
