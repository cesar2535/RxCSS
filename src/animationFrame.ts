import { Observable, Observer } from 'rxjs';

interface MyWindow extends Window {
  mozRequestAnimationFrame(callback: FrameRequestCallback): number;
  msRequestAnimationFrame(callback: FrameRequestCallback): number;
}

declare var window: MyWindow;

const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

export function createAnimationFrameTicker() {
  return Observable.create((observer: Observer<number>) => {
    let active = true;
    let lastTick = Date.now();
    let currentTick = Date.now();

    const dispatch = () => {
      const delta = Date.now() - lastTick;

      observer.next(delta);

      if (active) requestAnimationFrame(dispatch);
    };

    dispatch();

    return () => (active = false);
  });
}

export default createAnimationFrameTicker();
