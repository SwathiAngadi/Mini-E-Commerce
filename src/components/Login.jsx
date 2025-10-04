import useUserStore from './../store/userStore';
import {useAuth0} from "@auth0/auth0-react";
import _ from "lodash";

const Login = () => {
    const { login} = useUserStore();
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) return <p>Loading...</p>

    if (!isAuthenticated) {
      return (
        <div className ="text-center mt-5" >
          <h2 className='text-xl '>You are not logged in</h2>
          <button className ='text-l border rounded p-2 mt-3' onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      );
    }
  
    return (
      <div className ="flex text-center mt-5" >
        <h2 className='flex-1 text-2xl p-2 uppercase'>Welcome, {user.name}</h2>
        <button className ='text-l float-right border rounded p-2' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      </div>
    );
  }
 
export default Login;