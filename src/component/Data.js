import React, { useEffect, useState } from 'react'

const Data = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registerd");
  }, [flag]);
  const handler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
    console.log(data);
  };

  const submithandler = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.pass) {
      alert("Please fill all required info");
    } else {
      setFlag(true);
    }
  };
  return (
    <>
      <pre>
        {flag ? (
          <h1 className="ui-define">
            Hello {data.name}, You've ragister successfully
          </h1>
        ) : (
          " "
        )}
      </pre>
      <form className="container" onSubmit={submithandler}>
        <div className="header">
          <h1>Fill the Ragistration Form </h1>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handler}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handler}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            type="password"
            name="pass"
            value={data.pass}
            onChange={handler}
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

export default Data
