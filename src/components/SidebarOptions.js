import React from 'react';
import "./css/SidebarOptions.css";
import { Add } from '@material-ui/icons';

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-21441-100-wayenzgjgwwmcnyzyefdqmxuzgftkjia.jpeg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-1393903-100-tfltvquinjejunmevoauvdehgunarhat.jpeg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="	https://qph.cf2.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="	https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-1393720-100-xxpsecsmgfvjkfvjhvuiuqirghvvpqbu.jpeg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-2826-100-9Lra8KhPzabpT9I01NxpGhAhBJUBCMuQ.jpeg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-1393740-100-tjtbwiqofezszbgbqrtunqerutuchpmn.jpeg"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-907ae3cb629b1bfbcd43ee4b09501518-lq"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions