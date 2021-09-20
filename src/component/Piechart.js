import React from "react";

import { Pie } from "react-chartjs-2";
    
const App = () => {
    
  
  const data = {
    
      datasets: [
        {
         
          data: [2, 5, 6, 7, 3],
          backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
        }
        
      ]
      
  }
  
    
  return (
   
      <Pie data={data} />
   
  );
}
    
export default App;