import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="102"
      height="42"
      viewBox=" 0 0 145 165"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
    <path d="M72.321.48C32.411.48.027 31.322.027 69.338c0 38.047 53.607 95.309 72.294 95.309 18.719 0 72.326-57.262 72.326-95.31C144.647 31.323 112.273.48 72.321.48ZM60.737 111.795c-3.272 3.293-14.64-2.805-25.345-13.676-10.725-10.83-16.75-22.3-13.479-25.613C25.174 69.183 40.785 70.65 51.5 81.5c10.695 10.85 12.508 26.951 9.236 30.295Zm22.973-.083C80.397 108.4 82.12 92.339 93 81.5c10.86-10.84 26.728-12.328 30.061-8.994 3.313 3.292-2.805 14.743-13.666 25.572-10.87 10.839-22.372 16.916-25.685 13.634Z"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
