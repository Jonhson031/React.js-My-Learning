import {formatter } from "../util/investment.js";

export default function Results({data = []}) {

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.investmentValue)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
