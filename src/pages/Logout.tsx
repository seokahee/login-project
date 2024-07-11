import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/tokenStore";

const Logout = () => {
  const { logoutTokenHandler } = useAuthStore();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    logoutTokenHandler();

    alert("로그아웃 완료");

    navigate("/login");
  };

  return <button onClick={onLogoutHandler}>로그아웃</button>;
};

export default Logout;
