const MyPage = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="flex h-[25rem] w-1/4 flex-col items-center justify-evenly bg-white p-[25px]">
          <p className="text-3xl font-bold">프로필</p>
          <p className="w-full border-b-2 text-lg font-bold">ID</p>
          <p className="w-full border-b-2 text-lg font-bold">PW</p>
          <div className="flex w-full flex-row">
            <p className="w-[80%] border-b-2 text-lg font-bold">Name</p>
            <button className="w-[20%] rounded-md border-gray-400 bg-slate-300 p-1">
              변경
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
