import React from "react";

import abcd from "../assets/abcd.png";
import abd from "../assets/CV2.png";
import abc from "../assets/Download.png";
import about from "../assets/about1.jpeg";
import arrow from "../assets/arrowright.png";

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
        <div className="text-gray-400 ml-28 mt-12 justify-between flex">
        <div className="border-l-4 border-gray-400 h-24 justify-start flex mt-6">
        <div className="ml-4">
        < h4>Hii I am a Full-stack Web 
        <h4>Developer and I am a Student of</h4>
         Computer Science Branch</h4>
        </div>
        </div>
        <div className="mr-60">
        
      <a
        href="./Himanshug.pdf"
        download="Himanshug.pdf"
        className="font-bold py-2 px-4 rounded"
      >
        <div className="justify-start flex mb-4" >
        <div>
        <img src={abd} alt="abd" className="h-48 w-48"/>
        </div>
        <div>
        <img src={abc} alt="abc" className="h-16 w-16"/>
        </div>
        </div>
      </a>
    </div>

            </div>
           {/* <hr class="w-full h-1   bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>*/}

            <div className="ml-28 mt-28 justify-between flex ">
              <div>
                <div className="justify-start flex">
                <h1 className="text-gray-400 text-7xl mt-2 hover:text-gray-500">About me</h1>
                <img src={arrow} alt="arrow" className="h-28 w-28 ml-36 mb-16"/>
                </div>
              </div>
              <div>
              <img src={about} alt="about" className="h-96 w-96 rounded-full mr-48"/>
            </div>
            </div>



        </>
    );
}
export default Home;