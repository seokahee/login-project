import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/tokenStore";
import Navigation from "../Navigation";

const AuthLayout = () => {
  const accessToken = useAuthStore((store) => store.accessToken);

  if (!accessToken) {
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
