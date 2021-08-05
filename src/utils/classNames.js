export const classNames = (...classes) => classes.reduce((prev, next) => (next ? `${prev} ${next}` : prev), '').trim();
