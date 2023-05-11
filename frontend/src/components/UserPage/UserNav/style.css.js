import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';

export const StyledNav = styled(Nav)`
.nav-link.vertical-tabs {
   border-radius: 0;
   text-align: left;
}

.nav-link.vertical-tabs.active {
   background-color: red;
}

.nav-link.vertical-tabs.active::before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 5px;
   height: 100%;
   background-color: black;
 }`;