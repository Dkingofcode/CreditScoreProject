//import React, { useRef, useEffect } from "react";
//import Chart from "chart.js/auto";
//import { Canvas, useFrame } from "@react-three/fiber";
//import { OrbitControls } from "@react-three/drei";
import ReactSpeedometer from "react-d3-speedometer";

  




const Speedometer = ({ level }) => {


//     const canvasRef = useRef(null);

//   useEffect(() => {
    

//     const ctx = canvasRef.current.getContext("2d");

//     // Chart instance
//     const chartInstance = new Chart(ctx, {
//       type: "doughnut",
//       data: {
//         labels: [
//           "Thin File",
//           "Very High",
//           "High",
//           "Moderate",
//           "Low",
//           "Very Low",
//         ],
//         datasets: [
//           {
//             data: [16.6, 16.6, 16.6, 16.6, 16.6, 16.6], // Equal width for indicators
//             needleValue: level, // Arrow will point to this value
//             backgroundColor: [
//               "violet",
//               "red",
//               "orange",
//               "yellow",
//               "lightgreen",
//               "green",
//             ],
//             borderWidth: 1,
//             circumference: 180,
//             rotation: 270,
//             cutout: "70%", // Make the chart more like a gauge
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             display: false,
//           },
//           tooltip: {
//             enabled: false,
//           },
//         },
//         layout: {
//           padding: 0,
//         },
//         // Add labels above indicators
//         scales: {
//           y: {
//             display: false,
//           },
//           x: {
//             display: false,
//           },
//         },
//       },
//       plugins: [gaugeNeedle],
//     });

//     return () => {
//       chartInstance.destroy();
//     };
//   }, [level]);


  

//   const labelPlugin = {
//     id: "customLabels",
//     afterDatasetsDraw(chart) {
//       const { ctx, data, chartArea } = chart;
//       const { labels } = data;
//       const meta = chart.getDatasetMeta(0);
//       const centerX = chartArea.left + chartArea.width / 2;
//       const centerY = chartArea.top + chartArea.height / 2;
  
//       ctx.save();
//       labels.forEach((label, index) => {
//         const arc = meta.data[index];
//         const angle = (arc.startAngle + arc.endAngle) / 2.0; // Midpoint of the arc
//         const radius = arc.outerRadius + 0; // Position outside the arc for labels
//         const arrowRadius = arc.outerRadius - 0; // Slightly inside for arrows
  
//         // Label Position
//         const xLabel = centerX + Math.cos(angle) * radius;
//         const yLabel = centerY + Math.sin(angle) * radius;
  
//         // Arrow Tip Position
//         const xArrowTip = centerX + Math.cos(angle) * arrowRadius;
//         const yArrowTip = centerY + Math.sin(angle) * arrowRadius;
  
//         // Arrow Base Positions
//         const xArrowLeft = xArrowTip - Math.cos(angle + Math.PI / 2) * 5; // Slightly left
//         const yArrowLeft = yArrowTip - Math.sin(angle + Math.PI / 2) * 5;
  
//         const xArrowRight = xArrowTip + Math.cos(angle + Math.PI / 2) * 5; // Slightly right
//         const yArrowRight = yArrowTip + Math.sin(angle + Math.PI / 2) * 5;
  
//         // Draw Label
//         ctx.font = "12px Arial";
//         ctx.fillStyle = "black";
//         ctx.textAlign = "center";
//         ctx.fillText(label, xLabel, yLabel);
  
//         // Draw Arrow
//         ctx.beginPath();
//         ctx.moveTo(xArrowLeft, yArrowLeft); // Start at the left base
//         ctx.lineTo(xArrowTip, yArrowTip); // Draw to the tip
//         ctx.lineTo(xArrowRight, yArrowRight); // Draw to the right base
//         ctx.closePath();
//         ctx.fillStyle = "black";
//         ctx.fill();
//       });
//       ctx.restore();
//     },
//   };
  

// const gaugeNeedle = {
//   id: "gaugeNeedle",
//   afterDatasetDraw(chart) {
//     const { ctx, data } = chart;

//     // Save canvas state
//     ctx.save();

//     // Needle value
//     const needleValue = data.datasets[0].needleValue;
//     const xCenter = chart.chartArea.width / 2 + chart.chartArea.left;
//     const yCenter = chart.chartArea.height / 2 + chart.chartArea.top;
//     const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
//     const angle = Math.PI + (Math.PI * needleValue) / 100;

//     // Translate and rotate
//     ctx.translate(xCenter, yCenter);
//     ctx.rotate(angle);

//     // Draw shadow for needle
//     ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
//     ctx.shadowBlur = 8;
//     ctx.shadowOffsetX = 3;
//     ctx.shadowOffsetY = 3;

//     // Draw needle
//     ctx.beginPath();
//     ctx.fillStyle = "black";
//     ctx.moveTo(-8, 0); // Left side of needle base (thicker base)
//     ctx.lineTo(0, -outerRadius * 0.85); // Needle tip (length)
//     ctx.lineTo(8, 0); // Right side of needle base
//     ctx.fill();

//     // Restore canvas state
//     ctx.restore();

//     // Draw center circle with shadow
//     ctx.save();
//     ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
//     ctx.shadowBlur = 6;
//     ctx.fillStyle = "black";
//     ctx.beginPath();
//     ctx.arc(xCenter, yCenter, 10, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.restore();
//   },
// };

    
     

return (
//     <div
//       style={{
//         width: "90%",
//         height: "400px",
//         background: "white",
//         margin: "auto",
//       }}
//     >
//       <ReactSpeedometer
//         forceRender={true}
//         fluidWidth={true}
//         minValue={0} // Use numbers here
//         maxValue={5} // Use numbers here
//         value={3} // Adjust value as needed
//         needleColor="steelblue"
//         needleHeightRatio={0.7}
//         segmentColors={["violet", "red", "orange", "yellow", "lightgreen", "green"]}
//         customSegmentLabels={[
//             { text: "Thin File", position: "INSIDE", color: "black" },
//             { text: "Very High", position: "INSIDE", color: "black" },
//             { text: "High", position: "INSIDE", color: "black", fontSize: "19px" },
//             { text: "Moderate", position: "INSIDE", color: "black" },
//             { text: "Low", position: "INSIDE", color: "black" },
//           ]}
//           segments={5}
//         currentValueText={"Level: ${value}"}
//         ringWidth={47}
//         needleTransitionDuration={3333}
//         needleTransition="easeElastic"
//       />
//     </div>

<div>
<ReactSpeedometer
  width={500}
  needleHeightRatio={0.7}
  value={777}
  customSegmentLabels={[
    {
      text: 'Thin File',
      position: 'INSIDE',
      color: '#555',
    },
    {
      text: 'Very High',
      position: 'INSIDE',
      color: '#555',
    },
    {
      text: 'High',
      position: 'INSIDE',
      color: '#555',
      fontSize: '19px',
    },
    {
      text: 'Moderate',
      position: 'INSIDE',
      color: '#555',
    },
    {
      text: 'Low',
      position: 'INSIDE',
      color: '#555',
    },
  ]}
  ringWidth={47}
  needleTransitionDuration={3333}
  needleTransition="easeElastic"
  needleColor={'#90f2ff'}
  textColor={'#d8dee9'}
/>
</div>


    );
   };




export default Speedometer;
