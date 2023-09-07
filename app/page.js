import React from 'react';
import'../public/fonts.css';

const MyComponent = () => {
  const menuOptions = [
    "Pages",
    "Integrations",
    "Scalability",
    "Requirements",
    "Security",
    "Others",
    "Support",
    "Hosting",
    "Support",
  ];
  return (
    
    <div>
      { }
      <div  className='w-[100%] h-[161px] bg-[#202020] opacity-[1]' >
        <div className="flex justify-between">
          <img src="/logo.png"></img>
          <img src="/moon.png"></img>
         </div>
         <div className='flex justify-evenly bold '>
          <div >Pages
          <div className='progress-bar bg-[#333333] h-[3px] w-[100px] '>
            <div className='progress bg-white  h-full w-[100%]'></div>
          </div>
          </div>
          <div>Integrations
          <div className='progress-bar bg-[#333333] h-[3px] w-[100px] '>
            <div className='progress bg-white h-full  w-[50%]'></div>
          </div>
          </div>
          <div>Scalability
          <div className='progress-bar bg-[#333333] w-[100px] h-[3px] '>
            <div className='progress bg-white  h-full w-0'></div>
          </div>
          </div>
          <div>Requirements
          <div className='progress-bar bg-[#333333] w-[100px] h-[3px] '>
            <div className='progress bg-white  h-full w-0'></div>
          </div>
          </div>
          <div>Security
          <div className='progress-bar bg-[#333333] w-[100px] h-[3px] '>
            <div className='progress bg-white  h-full w-0'></div>
          </div>
          </div>
          <div>Others
          <div className='progress-bar bg-[#333333] w-[100px] h-[3px]'>
            <div className='progress bg-white  h-full w-0'></div>
          </div>
          </div>
          <div>Support
          <div className='progress-bar bg-[#333333] w-[100px] h-[3px] '>
            <div className='progress bg-white  h-full w-0'></div>
          </div>
          </div>
          <div>Hosting
          <div className='progress-bar bg-[#333333] w-[100px] h-[3px] '>
            <div className='progress bg-white  h-full w-0'></div>
          </div>
          </div>
          <div>Support
          <div className='progress-bar bg-[#333333] w-[100px] h-[3px] '>
            <div className='progress bg-white  h-full w-0'></div>
          </div>
          </div>

         </div>
         

         </div>

      

      
      
      <div className='w-[100%] h-[809px] bg-[#191919] opacity-[1]'
        
      >
        {
          /*<div className='bold h-[24px] w-[229]  py-[70px] px-[110px]'>
            Select Pages Information 
            
            <div className='regular'>
            Lorem ipsum dolor sit amet consetetur elitr

            </div>

          </div>*/
        }
      </div>
    </div>
  );
};

export default MyComponent;
