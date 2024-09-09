import Perfectpage from '../images/feature.png';

function Perfect() {
  return (
    <form className="mt-20 h-full w-full p-6 bg-gray-500 border-4 border-red-200 rounded-lg text-white font-serif"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div>
          <h1 className="text-center text-xl ">
            Perfect Solution for Thriving Online Business
          </h1>
          <br/>
          <p className="bg-cyan-500 text-lg text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem. Lorem ipsum dolor sit amet.
          </p>
          <br/>
          <div className="text-center lg:text-left">
                    <input 
                        type="button" 
                        value="Read More" 
                        className="bg-blue-500 text-white text-lg rounded py-2 px-4 mt-4 hover:bg-red-400 transition-colors duration-300"
                    />
                </div>
        </div>

        <div className="flex justify-center items-center">
          <img src={Perfectpage} alt="Feature" className="w-full max-w-md rounded-lg"/>
        </div>
        
      </div>
    </form>
  );
}

export default Perfect;