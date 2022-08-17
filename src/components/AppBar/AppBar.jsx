import { SidebarContainer } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = ({ user, onClose }) => {
  return (
    <SidebarContainer>
      <UserMenu user={user} />
      <button type="button" onClick={onClose}>
        Close
      </button>
    </SidebarContainer>
  );
};
