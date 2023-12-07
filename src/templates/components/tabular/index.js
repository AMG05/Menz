import { h } from 'preact';

const TabularData = ({ caption, head, body }) => (

<div class="table__container">
  <table class="table">
    <caption class="table__caption">{caption}</caption>
    <thead class="table__head">
      <tr class="table__head__row">
        {head.map((header, index) => (
          <th class="table__header" key={index}>{header.value}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {body.map((row, rowIndex) => (
        <tr class="table__row" key={rowIndex}>
          {row.columns.map((column, colIndex) => (
            <td class="table__cell" key={colIndex}>{column.value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
);

export default TabularData;