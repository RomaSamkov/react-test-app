import { AppBar } from './AppBar/AppBar';
import { useState } from 'react';

const user = {
  userName: 'Bob',
  isOnline: true,
  points: {
    total: 700,
    required: 200,
  },
};
export const App = () => {
  const [isAppbarOpen, setIsAppbarOpen] = useState(false);

  const openAppBar = () => setIsAppbarOpen(true);
  const closeAppBar = () => setIsAppbarOpen(false);

  return (
    <div>
      {!isAppbarOpen && (
        <button type="button" onClick={openAppBar}>
          Open
        </button>
      )}
      {isAppbarOpen && <AppBar user={user} onClose={closeAppBar} />}
    </div>
  );
};
