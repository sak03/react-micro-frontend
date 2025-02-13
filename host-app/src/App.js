import React, { Suspense } from "react";
import RemoteApp2 from "app2/App"; // Importing from mfe2
import RemoteApp3 from "app3/App"; // Importing from mfe3

const App = () => {
  const currentDate = new Date();
  return (
    <Suspense fallback={"loading..."}>
      <div style={{ padding: "10px" }}>
        <div style={{
          margin: "5px",
          padding: "1px 20px",
          backgroundColor: "lightGray",
          display: "flex",
          justifyContent: "space-between",
        }}>
          <h3>Miro Front End</h3>
          <h4 style={{ color:"#006400"}}>Sartaj Alam</h4>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}>
          <div style={{
            width: "50%",
            padding:"3px"
          }}>
            <RemoteApp2 />
          </div>
          <div style={{
            width: "50%",
            padding: "3px"
          }}>
            <RemoteApp3 />
          </div>
        </div>
        <div style={{
          position:"fixed",
          bottom:"5px",
          width:"95%",
          margin: "5px",
          padding: "1px 20px",
          backgroundColor: "#282a35",
          color:"#fff",
          display: "flex",
          justifyContent: "space-between",
        }}>
          <p>&copy; {currentDate.getFullYear()}</p>
          <p>Sartaj Alam</p>
        </div>
      </div>
    </Suspense>)
}


export default App;
