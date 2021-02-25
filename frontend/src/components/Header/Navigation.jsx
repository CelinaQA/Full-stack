
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {

    return (
        <>
            <Navbar color="dark" dark expand="md" >
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/" >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/task" >My Tasks</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )

}

export default Navigation;