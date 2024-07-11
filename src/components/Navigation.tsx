import { Link } from "react-router-dom";
import Logout from "../pages/Logout";

const Navigation = () => {
  // 변수에 스토어에 저장된 스테이트를 모두 불러옴
  // const token = useAuthStore();

  // 스토어에 저장된 어세스토큰 스테이트만 불러옴
  // const { accessToken } = useAuthStore();
  // console.log("loginTokenHandler", accessToken);

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex w-[30%] justify-evenly">
        <Link to="/">홈</Link>
        <Link to="/login">로그인</Link>
        <Link to="/signUpPage">회원가입</Link>
        <Link to="/myPage/:email">프로필</Link>
        <Logout />
      </div>
    </div>
  );
};
export default Navigation;
