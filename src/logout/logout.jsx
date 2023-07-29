import React from 'react';
import Swal from 'sweetalert2';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';

const Logout = ({ setIsAuthenticated }) => {

  const handleLogout = () => {
    signOut(auth).then(() => {
      Swal.fire({
        icon: 'question',
        title: 'Logging Out',
        text: 'Are you sure you want to log out?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then(result => {
        if (result.value) {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              setIsAuthenticated(false);
            },
          });
        }
      });
    }).catch((error) => {
      console.log(error)
    });
};

  return (
    <h1 onClick={handleLogout}>Logout</h1>
  )
}

export default Logout;