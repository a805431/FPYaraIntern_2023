import Nav from 'react-bootstrap/Nav';
import { StyledNav } from './style.css';

function UserNav() {
   return (
      <StyledNav className='flex-column vertical-tabs'>
         <Nav.Item>
            <Nav.Link eventKey="space-tab">Space</Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link eventKey="data-tab">Data</Nav.Link>
         </Nav.Item>
      </StyledNav>);
}

export default UserNav;