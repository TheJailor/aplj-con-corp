export function setupIntersectionObserver(callback: IntersectionObserverCallback) {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
  
    return observer;
}