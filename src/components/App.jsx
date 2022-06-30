import { AppBar } from "./AppBar/AppBar";

export const App = () => {
  return (
    <div>
      <AppBar user={{
        userName: 'Bob', isOnline: true, points: {
          total: 700,
          required: 200
      },}} />
    </div>
  );
};
