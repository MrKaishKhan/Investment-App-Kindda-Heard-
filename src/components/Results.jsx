import React from 'react'
import { calculateInvestmentResults } from '../util/investment'

const Results = ({input}) => {
 
    const resultData = calculateInvestmentResults(input) ;
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    
    return (
        <table id='result'>
          <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year) </th>
                <th>Total Interest  </th>
                <th>Investment Capital  </th>
            </tr>
          </thead>

          <tbody>
            {resultData.map(yearData => {

                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td></td>
                    <td></td>
                </tr>

            })}
          </tbody>
        </table>
    
  )
}

export default Results

