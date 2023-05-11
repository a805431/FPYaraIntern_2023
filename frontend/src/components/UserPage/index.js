import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserNav from './UserNav';

function UserPage() {
    const location = useLocation();

    return (<Container>
        <Row>
            <Col>
                <UserNav />
            </Col>
            <Col>
                <span style={{ color: 'yellow', fontWeight: 'bold', fontSize: '50px' }}>Welcome, {location.state.email} !</span>
            </Col>
        </Row>
    </Container>);
}

export default UserPage;