import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const WorkingCapitalChart = () => {

  const xLabels = ['Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20'];
  

  const incomeData = [4, 6.8, 5.2, 3.8, 2, 5, 3.6]; 
  const expensesData = [5.1, 5.8, 7.1, 5.6, 4.2, 4.4, 4.4];

  return (
    <div className="w-full bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">Working Capital</h3>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium text-gray-600">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium text-gray-600">Expenses</span>
          </div>
          
          <select className="text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-100 rounded-[8px] px-3 py-1.5 focus:outline-none cursor-pointer">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>

      <div className="w-full h-[230px] relative">
        <LineChart
          xAxis={[{ 
            scaleType: 'point', 
            data: xLabels,
            categoryGapRatio: 0.3,
            slotProps: {
              tickLabel: {
                style: {
                  fill: '#9CA3AF',
                  fontSize: 12,
                  fontWeight: 500
                }
              }
            }
          }]}
          yAxis={[{
            min: 0,
            max: 10,
            tickMinStep: 2,
            valueFormatter: (value) => value === 0 ? '0K' : `${value}K`,
            slotProps: {
              tickLabel: {
                style: {
                  fill: '#9CA3AF',
                  fontSize: 12,
                  fontWeight: 500
                }
              }
            }
          }]}
          series={[
            {
              data: incomeData,
              color: '#0F9D58',
              showMark: false,
              curve: 'catmullRom',
            },
            {
              data: expensesData,
              color: '#BCF124', 
              curve: 'catmullRom',
            },
          ]}
          grid={{ horizontal: true }}
          slotProps={{
            legend: { hidden: true } 
          }}
          margin={{ left: 40, right: 20, top: 20, bottom: 30 }}
        />

        <div className="absolute top-[20px] bottom-[30px] left-[50.2%] w-[45px] -translate-x-1/2 bg-slate-400/5 rounded-lg pointer-events-none border-x border-dashed border-slate-200/40 hidden md:block z-0">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1E293B] text-white text-[11px] font-bold px-2 py-1 rounded shadow-md whitespace-nowrap">
            $5,500
          </div>
        </div>
      </div>

    </div>
  );
};

export default WorkingCapitalChart;