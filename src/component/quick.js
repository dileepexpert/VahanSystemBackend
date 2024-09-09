import Quickpage from '../images/feature1.png';

function Quick() {
    return (
        <form className="mt-20 h-full w-full p-6 bg-gray-500 border-4 border-red-200 rounded-lg text-white font-serif flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div class="grid grid-cols-2 gap-4">
                <h1 className="text-center text-lg lg:text-left">
                    Quick & Easy to Use Bootstrap Template
                </h1>
                <br /><br />
                <p className="text-sm  bg-cyan-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem. Lorem ipsum dolor sit amet.
                </p>
                <br />
                <div className="text-center lg:text-left">
                    <input 
                        type="button" 
                        value="Read More" 
                        className="bg-blue-500 text-white text-lg rounded py-2 px-4 mt-4 hover:bg-red-400 transition-colors duration-300"
                    />
                </div>
            </div>
            <div className="flex justify-end items-center lg:w-1/2 mt-0 lg:mt-0">
                <img src={Quickpage} alt="Quick Page" className="w-40    rounded-md"/>
        </div>
        </form>
    );
}

export default Quick;