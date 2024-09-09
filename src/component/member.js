import Memberpage from '../images/team1.png'
import Memberpage2 from '../images/team2.png'
import Memberpage3 from '../images/team3.png'
import Memberpage4 from '../images/team4.png'

function Member() {
    return (
        <form className="mt-20 h-full w-full p-6 bg-gray-500 border-4 border-red-200 rounded-lg text-white font-serif flex flex-col lg:flex-row lg:items-center lg:justify-between">
            
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-8 lg:text-center ">
      <h1 className="lg:text-right text-black text-4xl">
          Meet Our Creative Team Members
        </h1>
        <br /><br /><br/>
        <p className="text-sm lg:text-base text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
        <br />

        <div className=" h-40 w-full sm:w-auto p-2 space-x-4 flex flex-col items-center"> 
          <img src={Memberpage} alt="Team 1" className="w-full lg:w-40 rounded-lg shadow-lg" />
          <h3 className="text-center text-lg mb-2">Jonathon Smith</h3>
          <p className="text-center">Creative Product Designer</p>
        </div>
        


        <div className=" h-40 w-full sm:w-auto p-2  space-x-4 flex flex-col items-center">  
          <img src={Memberpage2} alt="Team 2" className="w-full lg:w-40 rounded-lg shadow-lg" />
          <h3 className="text-center text-lg mb-2">David Smith</h3>
          <p className="text-center">Head of Design</p>
        </div>


        <div className=" h-40 w-full sm:w-auto p-2  space-x-4 flex flex-col items-center">  
          <img src={Memberpage3} alt="Team 3" className="w-full lg:w-40 rounded-lg shadow-lg" />
          <h3 className="text-center text-lg mb-2">Labeed</h3>
          <p className="text-center">Head Of UX</p>
        </div>

        <div className=" h-40 w-full sm:w-auto p-2 space-x-4  flex flex-col items-center">
          <img src={Memberpage4} alt="Team 4" className="w-full lg:w-40 rounded-lg shadow-lg" />
          <h3 className="text-center text-lg mb-2">Hafiz Kareem</h3>
          <p className="text-center">JS Ninja</p>
        </div>
      </div>
        </form>
    );
}

export default Member;
