import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-left fixed-bottom bg-black bg-opacity-100'>
      <div className='text-center p-3 text-white'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://github.com/GamerXI/DaddyGamers.github.io'>
          Suhail
        </a>
      </div>
    </MDBFooter>
  );
}