import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [data, setData] = useState([]);

  const handleForm = (event) => {
    event.preventDefault();
    firstName.length > 0 && lastName.length > 0 ? setData([...data, {firstName: firstName, lastName:lastName}]) : alert('enter something');
    setFirstName('');
    setLastName('');
  };
  useEffect(() => {
    // alert(data);
  }, [data]); // This will alert whenever the 'data' state changes

  const handleFChange = (event) => {
    setFirstName(event.target.value);

  };

  const handleLChange = (event) => {
    setLastName(event.target.value);

  };

  return (
    <div className="abc">
      <form onSubmit={handleForm}>
        <label htmlFor="fName">Enter First Name:</label>
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={handleFChange}
        />
        <br />
        <label htmlFor='lName'> Enter Last Name: </label>
        <input
          type='text'
          placeholder='Enter Your Last Name'
          value={lastName}
          onChange={handleLChange}
        />
        <br />

        <button type="submit">Submit</button>

      </form>

      <p>OUTPUT :</p>
      <ul>
          {data.map((item,index)=>(
              <li key={index}>{item.firstName + ' ' + item.lastName}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
