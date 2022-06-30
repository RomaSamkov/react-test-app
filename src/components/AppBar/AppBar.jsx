import { SidebarContainer } from "./AppBar.styled"
import { UserMenu } from "components/UserMenu/UserMenu"

export const AppBar = ({ user }) => {
    return <SidebarContainer>
        <UserMenu user={user} />
    </SidebarContainer>
}