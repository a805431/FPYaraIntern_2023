// import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<SignInForm />}/>
    </Routes>
    </BrowserRouter>);
}

export default App;