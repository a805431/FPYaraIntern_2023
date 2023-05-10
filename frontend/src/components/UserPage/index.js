import { useLocation } from 'react-router-dom';
import UserNav from './UserNav';

function UserPage() {
    const location = useLocation();

    return (<>
        <UserNav />
        <span style={{ color: 'yellow', fontWeight: 'bold', fontSize: '50px' }}>Welcome, {location.state.email} !</span>
    </>);
}

export default UserPage;