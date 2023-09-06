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
      <div
        style={{
          width: '1366px',
          height: '161px',
          backgroundColor: '#202020',
          opacity: 1,
           
        }}
       
       
      >
        { 
          
           menuOptions.map((option, index) => (
          <div
          
            key={index}
            className=" menu-option text-gray-200 bg-opacity-17 bold absolute ]"
            style={{
              top: '99px', 
              left:index==0?'50px' :index==1?'193px':index==2?'339px':index==3?'482px':index==4?'625px':index==5?'766px':index==6?'910px':index==7?'1052px':'1196px', // Adjust spacing between options
              width: index==0?'39px' :index==1?'80px':index==2?'68px':index==3?'91px':index==4?'54px':index==5?'44px':index==6?'52px':index==7?'49px':'52px',
            }}
          >
            <h3 className="bold" style={{  color:index==1?' #DEDEDE ': '#5D5D5D',opacity:index==1?'1':'0.45' }}>{option}</h3>
            <div className="progress-bar bg-gray-400 h-3 mt-1 rounded-full " style={{ width: '131px',borderRadius:'44px',height:'3px',background:'#333333' }}>
              <div className="progress bg-white h-full" style={{ width: index === 0 ? '100%' : index === 1 ? '50%' : '0%' }}>
                {}
              </div>
            </div>
          </div>
        ))}
      </div>

      {
        <img
        src={"/moon.png"} 
        alt="Your Image Alt Text"
        style={{
          position: 'absolute',
          top: '30.1px',
          right: '200px',
          width: '24px', 
          height: '26.11px', 
          objectFit: 'cover', 
        }}></img>
        

      }
      {
        <img
        src={"/logo.png"} 
        alt="Your Image Alt Text"
        style={{
          position: 'absolute',
          top: '30.1px',
          right: '1450px',
          width: '24px',
          height: '26.11px', 
          objectFit: 'cover',
        }}></img>
      }
      <div
        style={{
          width: '1366px',
          height: '809px',
          backgroundColor: '#191919',
          opacity: 1,
        }}
      >
        {
          <div className=''>

          </div>
        }
      </div>
    </div>
  );
};

export default MyComponent;
