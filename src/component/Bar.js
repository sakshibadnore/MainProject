import { Bar } from "react-chartjs-2";

function App() {
return (
	<div className="App">
	
	<div >
		<Bar
		data={{
			
			labels: ["1st bar", "2nd bar", "3rd bar"],
			datasets: [
			{
				label: "total count/value",
			
				data: [1552, 1319, 613, 1400],
				
				backgroundColor: ["lightblue", "lightgreen", "pink"],
				
				borderColor: ["aqua", "green", "red"],
				borderWidth: 0.5,
			},
			],
		}}
		
	
		options={{
			maintainAspectRatio: false,
			scales: {
			yAxes: [
				{
				ticks: {
					
					beginAtZero: true,
				},
				},
			],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
);
}

export default App;
