import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
//import ReusableForm from './Components/ReusableForm/ReusableForm'
//import ReusableForm from './Components/ReusableForm/ReusableForm'
//import HookForm from './Components/HookForm/HookForm'
//import RefForm from './Components/RefForm/RefForm'
//import SimpleForm from './Components/SimpleForm/SimpleForm'
//import StatefullForm from './Components/StatefullForm/StatefullForm'

function App() {
  //const handleSignUpSubmit = data =>{
    //console.log('sign up data',data);
 // }

  //const handleUpdateProfile = data =>{
    //console.log('updata profile',data)
  //}
  return(
    <>
       <h1>Form Master</h1>
       <Grandpa></Grandpa>
       {/* <SimpleForm></SimpleForm> */}
       {/* <StatefullForm></StatefullForm> */}
       {/* <RefForm></RefForm> */}
       {/* <HookForm></HookForm> */}
       {/* <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up</p>
          </div>
        </ReusableForm>

        <ReusableForm
        formTitle={'Profile Updata'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile Update</p>
          </div>
        </ReusableForm> */}
      
    </>
  
  )
}

export default App
