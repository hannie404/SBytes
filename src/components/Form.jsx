import React from 'react'

function Form() {
  return (
    <div>
      <div className="container-fluid section mb-5 border p-3 w-50 mt-5">
        <form>
          <h1 className="text-center mb-4">Login</h1>

          <div className="form-group mb-2">
            <label for="Email" className="form-label grey-text">Email:</label>
            <input type="Email" id="Email" name='Email' className="form-control mb-3"/>
          </div>

          <div className="form-group mb-2">
          <label for="Password" className="form-label grey-text">Password:</label>
          <input type="password" id="Password" name='Password' className="form-control mb-3"/>
          </div>

          <div className="text-center">
            <button className="btn btn-outline-primary w-25" type="submit">Sign In</button>
          </div>
        </form>
      </div>


      <div className="container-fluid section mb-5 border p-3 w-50 mt-5">
        <form>
          <h1 className="text-center mb-4">Create Account</h1>
          <div className="form-group">
            <label for="FirstName" className="form-label grey-text">First name:</label>
            <input type="text" id="FirstName" name='FirstName' className="form-control mb-3"/>
          </div>

          <div className="form-group mb-2">
            <label for="LastName" className="form-label grey-text">Last name:</label>
            <input type="text" id="LastName" name='LastName' className="form-control mb-3"/>
          </div>

          <div className="form-group mb-2">
            <label for="Email" className="form-label grey-text">Email:</label>
            <input type="Email" id="Email" name='Email' className="form-control mb-3"/>
          </div>

          <div className="form-group mb-2">
          <label for="Password" className="form-label grey-text">Password:</label>
          <input type="password" id="Password" name='Password' className="form-control mb-3"/>
          </div>

          <div className="form-group mb-2">
          <label for="ConfirmPassword" className="form-label grey-text">Confirm password:</label>
          <input type="password" id="ConfirmPassword" name='ConfirmPassword' className="form-control mb-3"/>
          </div>

          <div className="text-center">
            <button className="btn btn-outline-primary w-25" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>

    // Fisr
  )
}

export default Form