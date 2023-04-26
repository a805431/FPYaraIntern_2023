import styled from 'styled-components';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

export const StyledTabs = styled(Tabs)`
.nav-link {
    border-bottom: 3px solid #0dcaf0;
    font-weight: bold;
    text-transform: uppercase;
  }

.nav-link.active {
    background-color: #0dcaf0;
    color: #7145e2;
    border-color: #0dcaf0;
    border-bottom: 3px solid #7145e2;
  }

  .nav-link:hover {
    background-color: #0dcaf0;
    color: #555;
    border-color: #0dcaf0;
  }
`;

export const StyledContainer = styled(Container)`
    max-width: 800px;
`;
