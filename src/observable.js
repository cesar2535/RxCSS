import { of, merge } from 'rxjs';
import {  scan, map } from 'rxjs/operators';

const Observable = window.rxjs ? rxjs.Observable : require('rxjs').Observable;

export { merge, scan, map, of };

export default Observable;
