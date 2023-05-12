// import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInPage from './components/SignInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import GlobalCSS from './styles/global.css.js';
import UserPage from './components/UserPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Container fluid className='gradient-bg'
        style={{
          minHeight: '100vh',
          height: '100%',
          paddingLeft: 0,
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
