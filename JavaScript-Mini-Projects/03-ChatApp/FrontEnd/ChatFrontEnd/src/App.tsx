import {useEffect, useState, useRef} from 'react';
import './App.css'

function App() {
  const [messages, setMessages] = useState(["Welcome to ChitChat Room"]);
  const wsRef=useRef();
  const inputRef=useRef();

  useEffect(()=>{
    const ws=new WebSocket("http://localhost:8080");
    ws.onmessage = (event)=>{
      setMessages(m=>[...m, event.data]);
    }
    // @ts-ignore
    wsRef.current=ws;

    ws.onopen = ()=>{
      ws.send(JSON.stringify({
        type: "join",
        payload:{
          roomId: "red"
        }
      }))
    }
    return ()=> {
      ws.close()
    }
  },[])
  return (
    <>
     <div className='h-screen bg-black'>
      <br /><br /><br />
      <div className='chat-sec'>
      <div className='h-[55vh]'>
        {messages.map(message => <div className='m-8'> 
          <span className='bg-white text-black rounded p-2 '>            
            {message} 
          </span>
        </div>)}
      </div>
      <div className='w-full bg-white flex button-down'>
        <input ref={inputRef} id="message" className="inp-chat flex-1 p-4" placeholder='Type a message'></input>
        <div>
        <button onClick={() => {
          const message = inputRef.current?.value;
          wsRef.current.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }))

        }} className='inp-chat bg-black text-white p-4'>
          Send message
        </button>
        </div>
      </div>
      </div>
    </div>
      
    </>
  )
}

export default App
