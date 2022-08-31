import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import "./style/app.scss";
import AuthProvider from "./hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<SignUpPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
