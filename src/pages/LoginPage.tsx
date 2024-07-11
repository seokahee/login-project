import { Link, useNavigate } from "react-router-dom";
import { Login } from "../api/axiosApi";
import useInput from "../hooks/useInput";
import { useAuthStore } from "../store/tokenStore";

const LoginPage = () => {
  const [email, emailChangeHandler] = useInput();
  const [password, passwordChangeHandler] = useInput();

  const { loginTokenHandler } = useAuthStore();

  const navigate = useNavigate();

  const onLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      // axios Api요청 응답으로 에세스토큰을받음
      const { accessToken } = await Login(user);

      // 쥬스탄드 저장
      if (accessToken) {
        loginTokenHandler(accessToken, true);
      }

      alert("로그인 성공");
      navigate("/");
    } catch (error) {
      console.log("로그인 실패", error);
    }
  };

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex h-[25rem] w-1/4 flex-col items-center justify-around bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">로그인</p>
            <form
              onSubmit={onLoginHandler}
              className="flex flex-col items-center"
            >
              <label className="my-2">
                ID
                <input
                  type="text"
                  className="m-2 border p-1"
                  autoComplete="on"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </label>
              <label className="my-2">
                PW
                <input
                  type="password"
                  className="m-2 border p-1"
                  autoComplete="on"
                  value={password}
                  onChange={passwordChangeHandler}
                />
              </label>
              <button className="m-2 bg-green-500 p-2 text-white">
                로그인
              </button>
            </form>
            <Link to={"/sign"} className="mt-14 cursor-pointer text-green-500">
              회원이 아니신가요?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
