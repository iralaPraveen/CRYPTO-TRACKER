import Chart from 'react-google-charts';
import { useEffect, useState } from 'react';


const LineChart = ({historicalData}) => {
    
    const [data, setData] = useState([["Date","Prices"]]);

    useEffect(() => {
        let dataCopy = [["Date","Prices"]];
        if(historicalData.prices){
            historicalData.prices.map((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]]);
            });
            setData(dataCopy);
        } //10/5/2024
    },[historicalData]);



  return (
    <Chart
          chartType='LineChart'
          data={data}
          height="100%"
          legendToggle
    />      

  )
}

export default LineChart