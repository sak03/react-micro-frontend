import React, { useState } from "react";

const App = () => {
  const [toEmail, setToEmail] = useState('');
  const [ccEmail, setCcEmail] = useState('');
  const [email, setEmail] = useState('')

  const handleSend = () => {
    const dataVal = {
      sender: "0",
      receaver: "0",
      msg: msgText
    }
    setMsgText("")
  }
  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "10px",
      marginTop: "10px"
    }}>
      <h3 style={{ color: "#003366", margin: "5px 10px", borderBottom: "1px solid black" }}>Email Window</h3>
      <div style={{
        width: "100%",
        margin: "5px 10px",
      }}>
        <input
          type="text"
          value={toEmail}
          placeholder="To"
          onChange={(e) => setToEmail(e.target.value)}
          style={{
            width: "95%",
            padding: "3px"

          }}
        />
        <input
          type="text"
          value={ccEmail}
          placeholder="CC"
          onChange={(e) => setCcEmail(e.target.value)}
          style={{
            width: "95%",
            padding: "3px",
            margin: "5px 0px"
          }}
        />
        <textarea
          id="textArea"
          name="textArea"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Write your email..."
          rows="11"
          cols="50"
          style={{
            width: "95%",
            padding: "3px",
            margin: "5px 0px"
          }}
        />
      </div>
      <div style={{
        width: "95%",
        margin: "5px 10px",
        display: 'flex',
        justifyContent: "flex-end"
      }}>
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

