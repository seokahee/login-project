import React from "react";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../api/axiosApi";
import useInput from "../hooks/useInput";

const SignUpPage = () => {
  const [email, emailChangeHandler, resetEmail] = useInput();
  const [password, passwordChangeHandler, resetPassword] = useInput();
  const [nickName, nickNameChangeHandler, resetNickName] = useInput();

  const navigate = useNavigate();

  const onRegisterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMember = {
      email,
      password,
      nickName,
    };
    try {
      const data = await SignUp(newMember);
      console.log("data", data);

      alert("회원가입 성공");

      resetEmail();
      resetPassword();
      resetNickName();
    } catch (error) {
      console.log("회원가입 실패", error);
    }

    navigate("/");
  };

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex h-[25rem] w-1/4 flex-col items-center justify-around bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">회원가입</p>
            <form
              onSubmit={onRegisterHandler}
              className="flex flex-col items-center"
            >
              <label className="my-2">
                ID
                <input
                  type="text"
                  className="m-2 border p-1"
                  autoComplete="current-username"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </label>
              <label className="m-2">
                PW
                <input
                  type="password"
                  className="m-2 border p-1"
                  autoComplete="off"
                  value={password}
                  name="password"
                  onChange={passwordChangeHandler}
                />
              </label>
              <label className="m-2 w-full">
                Name
                <input
                  type="text"
                  className="m-2 border p-1"
                  value={nickName}
                  onChange={nickNameChangeHandler}
                />
              </label>
              <button className="m-2 bg-blue-500 p-2 text-white">
                회원가입
              </button>
            </form>
            <p className="mt-6 cursor-pointer text-blue-500">
              이미 회원이신가요?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
