import background from "../../assets/bg.jpeg";
import { useNavigate } from "react-router-dom";

const HomePoster = () => {
  const navigate = useNavigate();

  return (
    <section className="h-[90vh] sm:h-[50vh] lg:h-[60vh] flex justify-center items-center p-3 bg-[rgb(196,196,210)]">
      <div className="flex max-w-md sm:max-w-6xl mx-auto justify-between flex-col sm:flex-row gap-6 sm:gap-0">
        <div className="sm:w-[60%] flex flex-col justify-center gap-3 sm:gap-0 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold lg:text-4xl sm:mb-6 sm:w-[70%] text-slate-800">
          Connect with <span className="text-blue-700 font-serif">trusted</span> brokers at Plateau Konnect – your gateway to the{" "}
            <span className="text-blue-700 font-serif">perfect property!</span>
        </h1>

          <p className="text-base md:text-lg lg:text-xl md:w-[100%] text-slate-600">
            This is your premier destination for property listings. explore,
            discover, and find your dream property effortlessly with our
            cutting-edge platform.
          </p>
          <div className="mt-5">
            <button
              className="text-white cursor-pointer bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
              type="button"
              onClick={() => navigate("/listings")}
            >
              Search Property
            </button>
            <button
              className="text-white cursor-pointer bg-blue-600 px-3 py-2 rounded-lg hover:bg-green-800 ml-4"
              type="button"
              onClick={() => navigate("/listings/add")}
            >
              Add Property
            </button>
          </div>
        </div>
        <div className="sm:h-auto sm:w-[40%] flex items-center">
          <img
            src={background}
            alt="home"
            width="100%"
            className="h-[50vh] sm:h-[100%] md:h-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePoster;
