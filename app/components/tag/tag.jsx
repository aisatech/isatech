import { classes } from '~/utils/style';
import styles from './tag.module.css';

export const Tag = ({
  children,
  className,
  ...rest
}) => {
  return (
    <span
      className={classes(styles.tag, className)}
      {...rest}
    >
      {children}
    </span>
  );
};
