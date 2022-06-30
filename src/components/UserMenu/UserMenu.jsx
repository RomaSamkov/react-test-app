import { MenuContainer, Avatar, UserName, PointsPopover, PointsLabel, Points } from "./UserMenu.styled"
import { FaUserCircle } from 'react-icons/fa';
import { useState } from "react";

export const UserMenu = ({user}) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    return <MenuContainer
        onMouseEnter={() => setIsPopoverVisible(true)}
        onMouseLeave={() => setIsPopoverVisible(false)}>
            <Avatar isOnline={user.isOnline}>
            <FaUserCircle size={40}/>
            </Avatar>
            <UserName>{user.userName}</UserName>
            {isPopoverVisible && (<PointsPopover>
                <PointsLabel>Amount:</PointsLabel>
                <Points variant='total'>{user.points.total}</Points>
                <PointsLabel>Amount required:</PointsLabel>
                <Points variant='required'>{user.points.required}</Points>
            </PointsPopover>)}
        </MenuContainer>
}