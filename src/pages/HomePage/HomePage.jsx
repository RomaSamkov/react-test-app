import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Home Page !</h1>
      <h2 className={styles.fontFaceText}>
        This is my student draft while studying RTK Query
      </h2>
      <NavLink to="/my-books" className={styles.link}>
        B o o k s
      </NavLink>
    </div>
  );
};

export default HomePage;
