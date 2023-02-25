import Menu from './modules/Menu/Menu';
import UserRoutes from './UserRoutes';

import './shared/styles/style.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <UserRoutes />
    </div>
  );
}

export default App;
