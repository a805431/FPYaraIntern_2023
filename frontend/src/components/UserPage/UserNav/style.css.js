import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';

export const StyledNav = styled(Nav)`
   width: 300px;
   background-color: #C8A2C8;

   .nav-link {
      border-radius: 0;
      text-align: left;
   }

   .nav-link.active {
      background-color: white !important;
      color: red;
      font-weight: bold;
   }
`;