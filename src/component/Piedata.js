import React from "react";

import { Pie } from "react-chartjs-2";
	
const Side = () => {
	

    const data = {
        labels: ["Waiting", "Selected", "NotSelected", "Onboard", "Applied"],
          datasets: [
            {
              
              data: ["blue", "green","yellow", "pink", "orange"],
              
              backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
            }
          ]
      }
	
return (
	
	<Pie data={data} />
	
);
}
	
export default Side;
