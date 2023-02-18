
// create the function component just type 
// rafce  and hitt enter 

import React, { useState } from 'react'
 
// then next one is add   the fill input box give pop message you' ve ragister successfully 
// take the usestate again 


const Form = () => {
  // use the useState

  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleClick = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
    console.log(data);
  };

  const [fillform, setFillform] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.pass) {
      alert("Please fill all required info..!");
    } else {
      setFillform(true);
    }
  };
  return (
    <>
      {/* add the meassage over here age fill karte hai to wo meassage de  */}
      {/* am changing the any name then give message you r ragistered successfully  */}
      <pre>
        {fillform ? (
          <h2 className="ui-define">
            Hello {data.name} , You'r Registration is Successfull
          </h2>
        ) : (
          ""
        )}
      </pre>

      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Fill the Ragistration form successfully </h1>
        </div>
        {/* just press (ctrl + alt + down arrow) */}
        <div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleClick}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleClick}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            type="password"
            name="pass"
            value={data.pass}
            onChange={handleClick}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form    // export the app.js
