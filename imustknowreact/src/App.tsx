import './App.css';
import profileImage  from "./assets/images/microsoftCeo.jpeg"
import ProfileCard from './components/ProfileCard';


function App() {


  return (
    <>        
    <div className='bg-green-100 p-24 flex flex-col justify-center items-center '>
      <img className='w-48 h-48 object-cover m-5 rounded-full' src={profileImage} alt="Ayoola" />
      <h1 className='text-red-800 font-roboto'>Satya Nadalla</h1>
      <p className='text-red-800'>Microsoft CEO</p>

     <div className='flex flex-col gap-5 '>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>

        </div>
         
         
     </div>
    </>
  )
}

export default App
