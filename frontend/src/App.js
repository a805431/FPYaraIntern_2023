// import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from './components/SignInForm/SignInForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './styles/global.css';
import UserPage from './components/UserPage/UserPage';

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
          <Route path="/" element={<SignInForm />} />
          <Route path="/userPage" element={<UserPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
