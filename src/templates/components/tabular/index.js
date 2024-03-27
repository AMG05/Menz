import { h } from 'preact';
import Input from '@templates/components/forms/textfieldinput';
import FormSelect from '@components/forms/formselect';

const TabularData = ({ caption, head, body }) => (

<div class="table__container">
  <table class="table is--link">
    <caption class="table__caption">{caption}</caption>
    <thead class="table__head">
      <tr class="table__row">
        {head.map((header, index) => (
          <th class="table__th" span="col" key={index}><p class=" table__th-text">{header.value}</p></th>
        ))}
        <a class="table__sort-btn" href="#"><svg width="9" height="12" viewBox="0 0 9 12"><g id="Group_11895" data-name="Group 11895" transform="translate(-277 -2)"><path id="Polygon_1" data-name="Polygon 1" d="M4.5,0,9,5H0Z" transform="translate(286 14) rotate(180)" fill="#141446" opacity="0.8"></path><path id="Polygon_2" data-name="Polygon 2" d="M4.5,0,9,5H0Z" transform="translate(277 2)" fill="#141446" opacity="0.8"></path></g></svg>
        </a>
      </tr>
    </thead>
    <tbody>
      {body.map((row, rowIndex) => (
        <tr class="table__row" key={rowIndex}>
          {row.columns.map((column, colIndex) => (
            <td class="table__cell" key={colIndex}>
                {column.value !== '' ? column.value :null}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
);

export default TabularData;