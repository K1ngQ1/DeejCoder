import React from 'react'
import Login from '../components/profile/Login';
import ProfilePage from '../components/profile/ProfilePage';

interface state {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<any>>;
}

export default function Profile(props: state) {
  return (
    <div className="artboard bg-base-200 rounded-xl border border-solid border-secondary p-4 w-10/12 mb-2 justify-center items-center">
      {props.loggedIn ?
      <ProfilePage loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
      :
      <Login loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
    }
    </div>
  )
}
