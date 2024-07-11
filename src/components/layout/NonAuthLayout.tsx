import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/tokenStore";
import Navigation from "../Navigation";

const NonAuthLayout = () => {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  console.log("isAuthenticated", isAuthenticated);

  if (isAuthenticated === true) {
    alert("로그인 상태입니다");
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default NonAuthLayout;
