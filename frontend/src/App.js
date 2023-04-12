import SignUpForm from "./components/SignUpForm/SignUpForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<SignUpForm />}/>
    </Routes>
    </BrowserRouter>);
}

export default App;