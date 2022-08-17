import { Component } from 'react';
import { AppBar } from './AppBar/AppBar';

const user = {
  userName: 'Bob',
  isOnline: true,
  points: {
    total: 700,
    required: 200,
  },
};
export class App extends Component {
  state = {
    isAppbarOpen: false,
  };

  openAppBar = () => this.setState({ isAppbarOpen: true });
  closeAppBar = () => this.setState({ isAppbarOpen: false });

  render() {
    const { isAppbarOpen } = this.state;

    return (
      <div>
        {!isAppbarOpen && (
          <button type="button" onClick={this.openAppBar}>
            Open
          </button>
        )}
        {isAppbarOpen && <AppBar user={user} onClose={this.closeAppBar} />}
      </div>
    );
  }
}
