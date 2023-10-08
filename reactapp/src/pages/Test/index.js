// import React, {useState} from "react";
// import "./style.css";

// const Test = () => {
// const [count, setCount] = useState(0);
// const [faiz, setFaiz] = useState(0);
// const [resultFaiz, setResultFaiz] = useState(0);

// const azalt = () => {
//  setCount(c=>c-1)
// }
// const artir = () => {
// setCount(c=>c+1)
// }
// const FaizHesabla = () => {
//   setResultFaiz((count * faiz)/100);
// }

//   return (
//     <div className="Test">
//       <h1>Count: {count}</h1>
//       <h3>Faiz:{resultFaiz}</h3>
//       <input value={faiz} onChange={(e)=>setFaiz(e.target.value)} type="number"/>
//       <p>
//         <button onClick={azalt}>-</button>
//         <button onClick={artir}>+</button>
//         <button onClick={FaizHesabla}>Faiz</button>
//       </p>
//     </div>
//   );
// };

// export default Test;
/*
import React, { useState } from "react";
import "./style.css";

const Test = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const user = {
      login: e.target.login.value,
      pass: e.target.pass.value,
    };

    setUsers([user, ...users]);

    e.target.reset();

    console.log(users);
  };

  const openCheck = () => {
    setShow(!show);
  };
  const Clear = () => {
    setUsers([]);
  };

  return (
    <div className="SignUp">
      <h1>SignUp</h1>
      <form onSubmit={submitForm}>
        <label>
          Login: <br />
          <input name="login" type="text" placeholder="Adinizi daxil edin.." />
        </label>
        <br />
        <label>
          Password: <br />
          <input
            name="pass"
            type={show ? "text" : "password"}
            placeholder="Passwordunuzu daxil edin.."
          />
        </label>
        <br />
        <label>
          {show ? "Passwordu gizlet:" : "Passwordu goster"}

          <input type="checkbox" onChange={openCheck} />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
      <br />
      {users.length === 0 ? (
        <h3>Sistemde user yoxdur.. </h3>
      ) : (
        <>
          <h3>Sisteme giren shexsler</h3>
          <button onClick={Clear}>Clear</button>
        </>
      )}

      <hr />
      <br />

      <ol>
        {users.map((v, i) => (
          <li key={i}>
            {i === 0 ? <b>Sonuncu: </b> : <b>Digerleri: </b>}
            Login:{v.login}, Paassword:{v.pass}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Test;
*/

import React, { useEffect, useState, useRef } from "react";
import "./style.css";

const Test = () => {
  const [value, setValue] = useState(4);
  const [msj, setMsj] = useState("");

const pDom = useRef();

  //Ekran ilkm defe acildiqda
  //   useEffect(()=>{
  // console.log('Ekran acildi')
  //   },[]);
  //Sehife her defe render olunduqda
  //   useEffect(()=>{
  // console.log('Ekran acildi')
  //   });
  //State-de deyishiklik olunduqda
  useEffect(() => {
 
    if(value === 0){
      setMsj('Diqqet!!!');
      pDom.current.style.backgroundColor = 'orange'
    }else if(value <= 0){
     setMsj('Value heddinden cox azaldi!!!');
      pDom.current.style.backgroundColor = 'red'
    }

  }, [value]);

  return (
    <div className="useEffect">
      <h1>useEffect</h1>
      <p>{value}</p>
      <hr />
      <button onClick={() => setValue((v) => v - 1)}>-</button>
      <button onClick={() => setValue((v) => v + 1)}>+</button>

      <p ref={pDom}>{msj}</p>
    </div>
  );
};

export default Test;
