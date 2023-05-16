import Nav from 'react-bootstrap/Nav';
import { StyledNav } from './style.css';
import { useState } from 'react';

function UserNav() {
   const [activeTab, setActiveTab] = useState('space-tab');

   const handleTabSelect = (tabKey) => {
      setActiveTab(tabKey);
   };

   return (
      <div style={{ display: 'flex' }}>
         <StyledNav className='flex-column vertical-tabs' actveKey={activeTab} onSelect={handleTabSelect}>
            <Nav.Item>
               <Nav.Link eventKey="space-tab">Space</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="data-tab">Data</Nav.Link>
            </Nav.Item>

            <div style={{ marginLeft: 'auto' }}>
               {activeTab === 'space-tab' && (
                  // Render the content for the "Space" tab
                  <div>
                     <h2>Space Content</h2>
                  </div>
               )}

               {activeTab === 'data-tab' && (
                  // Render the content for the "Data" tab
                  <div>
                     <h2>Data Content</h2>
                  </div>
               )}
            </div>
         </StyledNav>
      </div>);
}

export default UserNav;