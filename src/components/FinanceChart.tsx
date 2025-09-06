"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 7000,
    expense: 6400,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 8000,
    expense: 2400,
  },
  {
    name: 'Jun',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jul',
    income: 5000,
    expense: 3400,
  },
   {
    name: 'Aug',
    income: 8800,
    expense: 5500,
  },
  {
    name: 'Sep',
    income: 9500,
    expense: 4500,
  },
  {
    name: 'Oct',
    income: 7200,
    expense: 3400,
  },
  {
    name: 'Nov',
    income: 6390,
    expense: 4270,
  },
  {
    name: 'Dec',
    income: 9840,
    expense: 10000,
  },
];



const FinanceChart = () => {
  return (
     <div className="bg-white rounded-xl w-full h-full p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Finance</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
          </div>

           <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10} />
        <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20} />
          <Tooltip />
           <Legend 
        align='center'
        verticalAlign='top'
        wrapperStyle={{paddingTop: "10px", paddingBottom: "30px"}}
    />
          <Line type="monotone" dataKey="income" stroke="#C3EBEA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default FinanceChart
