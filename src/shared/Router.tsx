import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import SignUpPage from "../pages/SignUpPage";
import NonAuthLayout from "../components/layout/NonAuthLayout";
import AuthLayout from "../components/layout/AuthLayout";
import Layout from "../components/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<NonAuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/myPage/:email" element={<MyPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
