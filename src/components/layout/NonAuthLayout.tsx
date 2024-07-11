import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/tokenStore";
import Navigation from "../Navigation";

const NonAuthLayout = () => {
  const accessToken = useAuthStore((store) => store.accessToken);

  // console.log("isAuthenticated", isAuthenticated);

  if (accessToken) {
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
