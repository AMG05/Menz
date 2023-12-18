import { h } from 'preact';

const DataDropdown = () =>

<div class="data-group">
    <div class="data-group__label">
        <label class="data-label" for="sort">
            Date
        </label>
    </div>
    <div class="data-group__select">
        <select class="data-select" id name="sort">
            <option value="12/02/23">(Today)12/02/23</option>
            <option value="11/02/23">11/02/23</option>
            <option value="10/02/23">10/02/23</option>
            <option value="09/02/23">09/02/23</option>
            <option value="08/02/23">08/02/23</option>
        </select>
    </div>
</div>;

export default DataDropdown;