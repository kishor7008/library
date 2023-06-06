import React from 'react'
import EmployeeHeading from './EmployeeHeader'
import YearlyChart from './YearlyChart'
import MonthlyChart from './MonthlyChart'
import WeeklyChart from './WeeklyChart'
export default function Report() {
    return (
        <>
            <EmployeeHeading />
            <div style={{ height: "20vh" }}></div>
            <h1 style={{ margin: "10px" }}>Weekly Report</h1>
            <WeeklyChart />
            <h1 style={{ margin: "20px" }}>Monthly Report</h1>
            <MonthlyChart />
            <div style={{ height: "20vh" }}></div>

            <h1 style={{ margin: "20px" }}>Yearly Report</h1>
            <YearlyChart />
        </>
    )
}
