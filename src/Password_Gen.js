import React, { useState, useEffect } from 'react'
import './password_gen.css'
import key from './key.svg'

const Password_Gen = () => {

  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  useEffect(() => {

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()_+=-{}[]|\\:;\"'";
    let rchar = "";

    for (let i = 1; i <= length; i++) {
      let rindex = Math.floor(Math.random() * str.length + 1);
      rchar += str.charAt(rindex);
    }
    setPassword(rchar);
  }, [length, numberAllowed, charAllowed, setPassword])



  const background = {
    backgroundImage: 'url("https://media.istockphoto.com/id/1346223165/photo/encryption-your-data-binary-code-and-digital-lock-hacker-attack-and-data-breach-big-data-with.webp?b=1&s=170667a&w=0&k=20&c=D017cD3Uy1ynHOm7w2i4ugulbXQ5qW7OBxYdkni1tzY=")',
    backgroundSize: 'cover'
  }

  function lenght_handel(event) {
    setLength(parseInt(event.target.value, 10))
  }

return (
  <div className="h-screen flex items-center justify-center" style={background}>
    <div className="mx-auto shadow-2xl rounded-lg max-w-lg w-lg px-8 py-8 my-8 bg-gray-800 text-orange-500 flex flex-col justify-center">
      <h1 className='text-blue-400 text-center m-3 mb-5 text-3xl font-rubik-glitch'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 relative  ">
        <img src={key} alt="" className="absolute top-[10px] left-2" />
        <input type="text" className="border-2 rounded-3xl  w-[100%] pl-10 p-2 bg-white " placeholder='img' disabled value={password} />      
      </div>
      <div className="flex text-sm gap-x-8 ">
        <div className="flex items-center gap-x-1 font-serif">
          <input type="range" min="1" max="14" value={length} onChange={lenght_handel} />
          <span >Length : {length}</span>
        </div>
        <div className="flex items-center justify-center gap-2 font-serif ">
          <input type="checkbox" defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((pre) => !pre) }} />
          <span>Number</span>
        </div>
        <div className="flex items-center justify-center gap-2 font-serif" >
          <input type="checkbox" defaultChecked={charAllowed} onChange={() => { setCharAllowed((pre) => !pre) }} />
          <span>Character</span>
        </div>
      </div>
      <button className='font-rubik-glitch outline-none bg-blue-700 text-white py-2 px-6 border rounded-3xl border-transparent shrink-0  mt-6'>Copy Password</button>
    </div>
  </div>
)
}


export default Password_Gen