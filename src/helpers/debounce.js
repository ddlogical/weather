let timer;
export function debounce(fn, wait) {
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
