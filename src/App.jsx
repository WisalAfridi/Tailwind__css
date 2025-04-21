import React from "react";
import logo from "./assets/facebook.svg";

function App() {
  return (
    <div className=" bg-gray-100 flex items-center justify-center ">
      <div className="left flex flex-col items-center justify-center w-1/2   h-screen  ">
        <img src={logo} alt="image" className="w-80 justify-center" />
        <p className="text-3xl text-center justify-center mx-30">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="Right flex flex-col items-center justify-center rounded-lg relative shadow-2xl text-lg bg-white w-90 mx-25 p-4">
        <input
          type="text"
          className="p-3  text-2lx border rounded-lg border-gray-200  outline-blue-600 w-full"
          placeholder="Email address or phone number"
        />
        <input
          type="password"
          className="p-3  border-2 rounded-lg border-gray-200 outline-blue-600 w-full my-3"
          placeholder="Password"
        />
        <button className="bg-blue-600 hover:bg-blue-700 w-full p-3 text-xl rounded-lg font-bold my-2 cursor-pointer text-white ">
          Log in
        </button>
        <span className="text-blue-500  my-2 text-sm cursor-pointer hover:underline">
          Forgotten password?
        </span>
        <hr className="w-full m-3 text-gray-300" />
        <button className="bg-green-600 hover:bg-green-700 w-fit p-2 px-4   rounded-lg font-bold my-2 cursor-pointer text-white ">
          Carete New Page
        </button>
        <span className="absolute -bottom-12 text-sm">
          <span className="font-bold hover:underline cursor-pointer">Create a Page</span> for a
          celebrity, brand or business.
        </span>
      </div>
    </div>
  );
}

export default App;
