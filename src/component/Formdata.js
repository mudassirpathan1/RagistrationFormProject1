import React, { useEffect, useState } from "react";

const Formdata = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [val, setVal] = useState(false);

  useEffect(() => {
    console.log("register your form");
  }, [val]);

  const handleClick = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
    console.log(data);
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.pass) {
      alert("Please fill all required info..!");
    } else {
      setVal(true);
    }
  };
  return (
    <>
      <pre>
        {val ? (
          <h2 className="ui-define">
            Hellow {data.name}, You've ragister successfully
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={submithandler}>
        <div className="header">
          <h1>Ragistation form</h1>
        </div>
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

export default Formdata;
