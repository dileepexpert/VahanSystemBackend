import Homepage from '../images/hero.png';
import Logo from '../images/logo.png'; 
import Perfectpage from '../images/feature.png';
import Quickpage from '../images/feature1.png';
import google from '../images/google.png';
import Memberpage from '../images/team1.png';
import Memberpage2 from '../images/team2.png';  
import Memberpage3 from '../images/team3.png';  
import Memberpage4 from '../images/team4.png'; 

import { FiCheckCircle, FiLayers, FiGrid, FiCode, FiClipboard, FiSettings } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';



const features = [
  { name: 'SaaS Focused', icon: FiCheckCircle },
  { name: 'Awesome Design', icon: FiLayers },
  { name: 'Essential Sections', icon: FiGrid },
  { name: 'Clean Design', icon: FiCode },
  { name: 'Well Organized Layers', icon: FiClipboard },
  { name: 'Easy to Manage', icon: FiSettings },
];

const fa = [  
  { name: 'Facebook', icon: FaFacebook },
  { name: 'Twitter', icon: FaTwitter },
  { name: 'Instagram', icon: FaInstagram },
  { name: 'LinkedIn', icon: FaLinkedinIn },
];


function Home() {
  return (
    <div >
 
      <header className="flex justify-between items-center px-2 py-2 text-white bg-blue-400">
        <div className="flex items-end">
          <img src={Logo} alt="Logo" className="h-12 w-15 mr-2" />
        </div>
        <nav className="flex items-end space-x-4 ml-auto">
          <a href="#" className="mx-4">Home</a>
          <a href="#" className="mx-4">About Us</a>
          <a href="#" className="mx-4">Features</a>
          <a href="#" className="mx-4">Pricing</a>
          <div className="flex items-end">
            <a href="#" className="mx-2">Team</a>
            <select className="border rounded text-black">
              <option value="click">Click</option>
              <option value="team1">Team 1</option>
              <option value="team2">Team 2</option>
              <option value="team3">Team 3</option>
              <option value="team4">Team 4</option>
            </select>
          </div>
        </nav>
        <div className="hidden sm:flex">
          <button className="bg-red-400 text-white py-2 px-4 mx-4 rounded-lg">Login</button>
        </div>
      </header>


      <div className=" mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 p-8 bg-gray-400">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-4xl font-bold text-white mt-5 mb-6">Launch Your New SaaS Website in Minutes!</h2>
          <p className="mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
          <div className="lg:text-right mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-gray-400 transition-colors duration-300">Get Started</button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={Homepage} alt="Hero" className="w-full max-w-md" />
        </div>
      </div>


      <div className=" mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 p-8 lg:text-center bg-cyan-400">
        <div className="flex flex-col justify-center text-center lg:text-center"> 
          <h2 className="text-center text-white text-4xl mb-6">Modern Design with Essential Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="border-4 border-blue-400 p-4 text-black hover:bg-red-300 rounded-lg flex flex-col items-center text-center">
                <feature.icon className="text-4xl mb-2 text-blue-500" /> 
                <h3 className="text-center text-lg mb-2">{feature.name}</h3>
                <p className="text-center text-black">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt.</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className=" mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 p-8 bg-slate-400">
        <div className="flex justify-start">
          <img src={Perfectpage} alt="Feature" className="w-full max-w-md rounded-lg" />
        </div>
        <div className="flex flex-col justify-center lg:text-right">
          <h1 className="lg:text-right text-white text-4xl">Perfect Solution for Thriving Online Business</h1>
          <p className="mt-4 text-black lg:text-right">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
          <div className="lg:text-right mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-400 transition-colors duration-300">Read More</button>
          </div>
        </div>
      </div>

      <div className=" mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 p-8 bg-red-200">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-center text-4xl text-white lg:text-left">Quick & Easy to Use Bootstrap Template</h1>
          <p className="mt-4 text-center text-black lg:text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
          <div className="text-center lg:text-left mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-400 transition-colors duration-300">Read More</button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={Quickpage} alt="Quick Page" className="w-full max-w-md rounded-lg" />
        </div>
      </div>



  <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4 p-4  bg-gray-200 lg:text-center">
  <h1 className="lg:col-span-4 text-white text-4xl text-center lg:text-center ">
    Meet Our Creative Team Members
  </h1>
  
  <div className="flex flex-col items-center">
    <img src={Memberpage} alt="Team 1" className="w-full lg:w-40 rounded-lg shadow-lg" />
    <h3 className="text-center text-lg mb-2">Jonathon Smith</h3>
    <p className="text-center">Creative Product Designer</p>
    <div>
    <a href="https://www.facebook.com/" className="hover:text-blue-400">Facebook</a>
    <a href="https://www.youtube.com/">Youtube</a>
    <a href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a>
    <a href="https://www.linkedin.com/login">Linkdin</a>
    <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D">Twitter</a>
  </div>
  </div>

  <div className="flex flex-col items-center">
    <img src={Memberpage2} alt="Team 2" className="w-full lg:w-40 rounded-lg shadow-lg" />
    <h3 className="text-center text-lg mb-2">David Smith</h3>
    <p className="text-center">Head of Design</p>
    <div>
    <a href="https://www.facebook.com/" className="hover:text-blue-400">Facebook</a>
    <a href="https://www.youtube.com/">Youtube</a>
    <a href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a>
    <a href="https://www.linkedin.com/login">Linkdin</a>
    <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D">Twitter</a>
  </div>
  </div>

  <div className="flex flex-col items-center">
    <img src={Memberpage3} alt="Team 3" className="w-full lg:w-40 rounded-lg shadow-lg" />
    <h3 className="text-center text-lg ml-2">Labeed</h3>
    <p className="text-center">Head Of UX</p>
    <div>
    <a href="https://www.facebook.com/" className="hover:text-blue-400">Facebook</a>
    <a href="https://www.youtube.com/">Youtube</a>
    <a href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a>
    <a href="https://www.linkedin.com/login">Linkdin</a>
    <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D">Twitter</a>
  </div>
  </div>

  <div className="flex flex-col items-center">
    <img src={Memberpage4} alt="Team 4" className="w-full lg:w-40 rounded-lg shadow-lg" />
    <h3 className="text-center text-lg ml-2">Hafiz Kareem</h3>
    <p className="text-center">JS Ninja</p>


    <div>
    <a href="https://www.facebook.com/" className="hover:text-blue-400">Facebook</a>
    <a href="https://www.youtube.com/">Youtube</a>
    <a href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a>
    <a href="https://www.linkedin.com/login">Linkdin</a>
    <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D">Twitter</a>
  </div>
  </div>


  
</div>



     <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 bg-gray-300 gap-0 p-8 lg:text-center">
  <footer className="bg-gray-300 text-black py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="lg:text-center font-bold text-white">&copy; {new Date().getFullYear()} Join Our Community</p>
      
      <nav className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">

       
      <div>
        <h2 className="hover:text-blue-400 underline hover:underline-offset-4 ">SaaSDeck</h2>
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt.
         </div>
        <div> 
          <h2 className="hover:text-blue-400 underline hover:underline-offset-4 ">About Us</h2>
          <ul>
            <li> <a href="#" className="hover:text-blue-400 mx-4">Home</a></li>
            <li> <a href="#" className="hover:text-blue-400 mx-4">About </a></li>
            <li> <a href="#" className="hover:text-blue-400 mx-4">Features</a></li>
            <li> <a href="#" className="hover:text-blue-400 mx-4">Pricing</a></li>
            <li> <a href="#" className="hover:text-blue-400 mx-4">Contact</a></li>
          </ul>
          </div>

        <div> 
        <h2 className="hover:text-blue-400 underline hover:underline-offset-4">Services</h2>
          <ul>
            <li> <a href="#" className="hover:text-blue-400 mx-4">Saas Focused</a></li>
            <li> <a href="#" className="hover:text-blue-400 mx-4">Awesome Design</a></li>
            <li> <a href="#" className="hover:text-blue-400 mx-4">Ready to Use</a></li>
            <li> <a href="#" className="hover:text-blue-400 mx-4">Essential Sections</a></li>
           
          </ul>
          </div>

        <div>
        <h2 className="hover:text-blue-400 underline hover:underline-offset-4">Contact Us</h2>
   <ul>
  <li>Address:plot no:78, Gautam Nagar Near Utkal gallary ,Bhubaneswar</li>
  <li>Phone no:+91-7509627777</li>
</ul>
  </div>

      </nav>

      <div className="mt-4 flex justify-end">
        <img src={google} alt="Google" className=" md:h-25 md:w-40" />
      </div>
      
      <div className="mt-4 flex justify-left space-x-4">
        {fa.map((social, index) => (
          <a key={index} href="https://www.facebook.com/" className="hover:text-blue-400">

            <social.icon />
          </a>
            
    
          
        ))}
      </div>
    </div>
  </footer>
</div>


    </div>
  );
}

export default Home;
