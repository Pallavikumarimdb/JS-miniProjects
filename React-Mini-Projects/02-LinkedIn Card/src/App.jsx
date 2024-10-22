import { useState } from 'react'
import './App.css'
import  PostComponent  from './PostComponent.jsx';
// Create a function component named App that will be rendered in the root element

 
function App(){

  const [prop, setProps]=useState([]);

  function addProps(){
    setProps([...prop, {
      name:"Pallavi",
       subtitle: "MERN Stack Developer", 
       time: "10 am",
      image:"https://media.licdn.com/dms/image/v2/D5635AQHUx8ksaTwF2w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1723818106966?e=1730196000&v=beta&t=m64VuY5b-EIJXSBD7guvOnHTk9CbeZHPqfrKKkzW_dk", 
      description: "IT graduate with 1.5 years of internship experience.",
  },])
  }


const setPropd = prop.map(prop1=>(
      <PostComponent 
      name={prop1.name}
      subtitle={prop1.subtitle}
      time={prop1.time}
      image={prop1.image}
      description={prop1.description}
      />
))


  return(
    <div>
     <div className='button-div1'>
     <div className='button-div2'>
      <button onClick={addProps}
        style={{
        padding: 10,
        margin: 10,
        borderRadius: 5,
        cursor: "pointer",}}>Add post</button>
      </div>

      <div className='button-div3'>
      <div>{setPropd}</div>
      </div>
     </div>
    
  </div>
  );
}

export default App;