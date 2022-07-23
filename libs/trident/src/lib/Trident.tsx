import styles from './Trident.module.scss';

/* eslint-disable-next-line */
export interface TridentProps {}

export function Trident(props: TridentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Trident!</h1>
    </div>
  );
}

export default Trident;
