import {
  MenuContainer,
  Avatar,
  UserName,
  PointsPopover,
  PointsLabel,
  Points,
} from './UserMenu.styled';
import { FaUserCircle } from 'react-icons/fa';
import { Component } from 'react';

export class UserMenu extends Component {
  state = {
    isPopoverVisible: false,
  };

  openPopover = () => this.setState({ isPopoverVisible: true });
  closePopover = () => this.setState({ isPopoverVisible: false });
  render() {
    const { isPopoverVisible } = this.state;
    const { user } = this.props;
    return (
      <MenuContainer
        onMouseEnter={this.openPopover}
        onMouseLeave={this.closePopover}
      >
        <Avatar isOnline={user.isOnline}>
          <FaUserCircle size={40} />
        </Avatar>
        <UserName>{user.userName}</UserName>
        {isPopoverVisible && (
          <PointsPopover>
            <PointsLabel>Amount:</PointsLabel>
            <Points variant="total">{user.points.total}</Points>
            <PointsLabel>Amount required:</PointsLabel>
            <Points variant="required">{user.points.required}</Points>
          </PointsPopover>
        )}
      </MenuContainer>
    );
  }
}
