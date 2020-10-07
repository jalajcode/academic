import React from 'react';
import Button from './elements/Button';

const Singup = () => {
  return (
    <div class="container">
      <h4>Sign up for Blinkist</h4>

      <input
        type="text"
        placeholder="Email"
        name="uname"
        required
        className="pt-8 pb-8 pl-12 pr-12 mb-24"
      />

      <input
        type="password"
        placeholder="Create Password"
        name="psw"
        required
        className="pt-8 pb-8 pl-12 pr-12 mb-24"
      />
      <div></div>

      <Button
        className="button button-primary button-wide-mobile button-sm mb-24 "
        style={{ width: '67%' }}
      >
        Sign Up
      </Button>
      <p>
        Or sign up with <a href="!#">your social account</a>
      </p>
      <h6>
        By continuing you indicate that you've read and agree to our Terms of
        Service and Privacy Policy.
      </h6>
      <h6>
        <a href="!#">Already have an account?</a>
      </h6>

      <p></p>
    </div>
  );
};

export default Singup;
