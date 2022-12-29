import React, { useState } from "react";

const ControlledSignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  return(
    <>
      <form>
        <div>
          <h3> Please enter your name: </h3>
          <input 
          type="text" 
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <h3> Please enter your email: </h3>
          <input 
          type="text" 
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <h3> Please enter your favorite color: </h3>
          <input 
          type="text" 
          placeholder="favorite color"
          value={favoriteColor}
          onChange={e => setFavoriteColor(e.target.value)} />
        </div>
        <button onClick={e => {
          alert(`
             Your name is ${name},
             Your email is ${email},
             and your favorite color is ${favoriteColor}!
          `)
          e.preventDefault();
        }}>Submit</button>
      </form>
    </>
  )
}

export default ControlledSignUpForm;