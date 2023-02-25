import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome Home Page !</h2>
      <NavLink className={styles.link}>B o o k s</NavLink>
    </div>
  );
};

export default HomePage;
