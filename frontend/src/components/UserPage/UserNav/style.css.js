import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';

export const StyledNav = styled(Nav)`
.vertical-tabs .nav-link {
   border-radius: 0;
   text-align: left;
}

.vertical-tabs .nav-link.active {
   background-color: #f8f9fa;
}`;