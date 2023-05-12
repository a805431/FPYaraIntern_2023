import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserNav from './UserNav';

function UserPage() {
    const location = useLocation();

    return (<Container style={{ margin: 0, padding: 0 }}>
        <Row style={{ marginLeft: 0, marginRight: 0 }}>
            <Col style={{ paddingLeft: 0 }}>
                <UserNav />
            </Col>
            <Col>
                <h2 style={{ color: 'yellow', fontWeight: 'bold', fontSize: '50px' }}>Welcome, {location.state.email} !</h2>
            </Col>
        </Row>
    </Container>);
}

export default UserPage;