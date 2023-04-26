import { useLocation } from 'react-router-dom';

function UserPage() {
     const location = useLocation();

    return (<div><span style={{color: 'yellow', fontWeight: 'bold', fontSize: '50px'}}>Welcome, {location.state.email} !</span></div>);
}

export default UserPage;