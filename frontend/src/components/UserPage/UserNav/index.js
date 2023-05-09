import Nav from 'react-bootstrap/Nav';

function UserNav() {
   return (<Nav className='flex-column vertical-tabs'>
      <Nav.Item>
         <Nav.Item>
            <Nav.Link>Space</Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link>Data</Nav.Link>
         </Nav.Item>
      </Nav.Item>
   </Nav>);
   //test push
}

export default UserNav;