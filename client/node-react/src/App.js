import React from 'react'
import axios from 'axios'
function App() {
  
  const [name,setName]=React.useState("")
  axios
  .post('/')
  .then((response) => {
    setName(response.data);
  });

  return (
    <div className="App">
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
