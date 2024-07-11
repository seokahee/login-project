import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/tokenStore";
import Navigation from "../Navigation";

const AuthLayout = () => {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  if (isAuthenticated === false) {
    alert("로그인 후 이용해주세요");
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
