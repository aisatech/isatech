import { classes } from '~/utils/style';
import styles from './text.module.css';

/**
 * TextSegment - Um componente para aplicar estilos específicos a um segmento de texto
 * Geralmente usado dentro de um componente Text para ter múltiplos estilos no mesmo parágrafo
 * 
 * @example
 * <Text as="p">
 *   Este é um texto <TextSegment weight="bold">em negrito</TextSegment> normal novamente.
 * </Text>
 */
export const TextSegment = ({
  children,
  weight = 'auto',
  className,
  ...rest
}) => {
  return (
    <span
      className={classes(styles.segment, className)}
      data-weight={weight}
      {...rest}
    >
      {children}
    </span>
  );
};
