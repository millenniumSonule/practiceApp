import React ,{useState} from 'react'
import './App.css'
const App = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email , setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});



  const handleForm = (e) => {
    e.preventDefault();
    const errors = {};

    if(!firstName.trim().length>0){
        errors.firstName='Enter valid first name';
        setFormErrors(errors.firstName)
        alert(errors.firstName)
    }
    if(!lastName.trim().length>0){
      errors.lastName='Enter valid last name'
    }

    if(!/\S+@\S+\.\S+/.test(email)){
      alert('enter valid email')
    }

    if (Object.keys(errors).length === 0) {
      alert(`${firstName} ${lastName} ${email}`);
      setFirstName('');
      setLastName('');
      setEmail('');
    }

  }

  return (
    <div className="container">
        <div className="form-container">
          <form onSubmit={handleForm}>
              <div className="row1">
                <p>{setFormErrors.firstName}</p>
               <label>
                  First Name
                  <input type='text' placeholder='first name' onChange={(e)=>{setFirstName(e.target.value)}}/>
                </label> 
                <label>
                  Last Name
                  <input type='string' placeholder='last name' onChange={(e)=>{setLastName(e.target.value)}}/>
                </label>
              </div>
              <div className="row2">
                <label>
                  Email
                  <input type='' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>
              </div>
              <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default App