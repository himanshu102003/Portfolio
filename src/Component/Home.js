import React from "react";

import abcd from "../assets/abcd.png";


function Home(){
    return(
        <>
        <div className="justify-between flex">
            <h4 className="text-gray-300 text-3xl ml-28 mt-28">Full-Stack 
                Web Developer
            <h1 className="text-gray-400 text-6xl ">Himanshu</h1>
            <h1 className="text-gray-500 text-6xl">Gupta</h1>
            </h4>
            
       
        <div className="grid justify-items-end ... mr-20">
                <img src={abcd} alt="abc" className="h-128 w-128 " />
                {/*<img src={Hp} alt="HP" className="h-128 w-128 " />*/}


        </div>
        </div>
        <div className="text-gray-400 ml-28 mt-12 justify-start flex">
        <div className="border-l-4 border-gray-400 h-24"></div>
        <div className="ml-4">
        < h4>Hii I am a Full-stack Web 
        <h4>Developer and I am a Student of</h4>
         Computer Science Branch</h4>
        </div>
        </div>
        </>
    );
}
export default Home;