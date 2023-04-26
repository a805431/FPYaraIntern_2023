// import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInPage from './components/SignInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './styles/global.css';
import UserPage from './components/UserPage';

function App() {
  return (
    <BrowserRouter>
      <Container fluid className='gradient-bg'
        style={{
          minHeight: '100vh',
          height: '100%',
        }}
      >
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/userPage" element={<UserPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
