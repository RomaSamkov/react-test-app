import { useState } from 'react';
import {
  MenuContainer,
  Avatar,
  UserName,
  PointsPopover,
  PointsLabel,
  Points,
} from './UserMenu.styled';
import { FaUserCircle } from 'react-icons/fa';

export const UserMenu = ({ userName, isOnline, points }) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  // state = {
  //   isPopoverVisible: false,
  // };

  const openPopover = () => setIsPopoverVisible(true);
  const closePopover = () => setIsPopoverVisible(false);
  
  return (
    <MenuContainer onMouseEnter={openPopover} onMouseLeave={closePopover}>
      <Avatar>
        <FaUserCircle size={40} />
      </Avatar>
      <UserName>{userName}</UserName>
      {isPopoverVisible && (
        <PointsPopover>
          <PointsLabel>Amount:</PointsLabel>
          <Points variant="total"></Points>
          <PointsLabel>Amount required:</PointsLabel>
          <Points variant="required"></Points>
        </PointsPopover>
      )}
    </MenuContainer>
  );
};
