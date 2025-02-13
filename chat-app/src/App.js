import React, { useState } from "react";

const App = () => {
  const [msgText, setMsgText] = useState('');
  const userId = '1';
  const [chatData, setChatData] = useState([
    {
      id: "msg1",
      sender: "1",
      receaver: "0",
      msg: "Hi"
    },
    {
      id: "msg2",
      sender: "0",
      receaver: "0",
      msg: "Hello"
    },
    {
      id: "msg3",
      sender: "1",
      receaver: "0",
      msg: "How are you?"
    },
    {
      id: "msg4",
      sender: "0",
      receaver: "0",
      msg: "I'm fine."
    },
    {
      id: "msg5",
      sender: "1",
      receaver: "0",
      msg: "How about you?"
    },
    {
      id: "msg6",
      sender: "0",
      receaver: "0",
      msg: "I'm also fine."
    },
  ])
  const handleSend = () => {
    const dataVal = {
      id: `msg${chatData.length + 1}`,
      sender: "0",
      receaver: "0",
      msg: msgText
    }
    setChatData([...chatData, dataVal])
    setMsgText("")
  }
  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "10px",
      marginTop: "10px"
    }}>
      <h3 style={{ color: "#003366", margin: "5px 10px", borderBottom: "1px solid black" }}>Chat Window</h3>
      <div style={{
        width: "97%",
        margin: "5px 10px",
      }}>
        {chatData?.map((item, idx) => {
          return (
            <p key={idx} style={userId === item.sender ? {
              backgroundColor: "lightgray",
              padding: "3px"
            } : {
              padding: "3px",
              display: 'flex',
              alignItems: "flex-end",
              justifyContent: 'flex-end'
            }}>{item.msg}</p>
          )
        })}
      </div>
      <div style={{
        width: "100%",
        margin: "5px 10px",
      }}>
        <input
          type="text"
          value={msgText}
          placeholder="Message ..."
          onChange={(e) => setMsgText(e.target.value)}
          style={{
            width: "80%",
            padding: "3px"
          }}
        />
        <button
          style={{
            width: "15%",
            padding: "3px"
          }}
          onClick={handleSend}
        >Send</button>
      </div>
    </div>
  )
}

export default App;

