import React from 'react';
// import signup from "../images/signup"

const SignUp = () => {
  return (
   <>
   <section className='signup'>
    <div className='container mt-5' style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' , padding: '20px' }}>
      <div className='signup-content' >
        <div className='signup-form' >
         <h1 className='form-title'>SignUp</h1>
         <form className='register-form' id='register-form'>
          <div className='form-group'>
            <label htmlFor="name">
            <i class="zmdi zmdi-account"  style={{ marginRight: '10px' }}></i>
            </label>
          </div>
         </form>
        </div>
      </div>

    </div>
   </section>
   </>
  );
};

export default SignUp;