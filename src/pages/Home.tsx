import homeImage from "../assets/home.png";

const Home = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <img src={homeImage} alt="Home" />
      </div>
    </div>
  );
};

export default Home;
