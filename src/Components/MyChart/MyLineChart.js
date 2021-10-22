import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: "Company A",
            product1: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Company B",
            product1: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Company C",
            product1: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Company D",
            product1: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Company E",
            product1: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Company F",
            product1: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Company G",
            product1: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    //area chart data
    const data1 = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];
    return (
        <div style={{ margin: '20px auto', width: '500px' }}>
            <h1>Exploring line chart by Rechart</h1>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="product1" stroke="#82ca9d" />
            </LineChart>
            <h1 style={{ marginTop: '30px' }}>Exploring AreaChart from Rechart</h1>
            <AreaChart
                width={500}
                height={400}
                data={data1}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default MyLineChart;