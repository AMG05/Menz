import {h} from 'preact';

const FormSelect = () =>
<div class="form-select-group">
  <label class="form-label" for="action">
  </label>
  <select class="form-select" id="action" name="action">
    <option value="published">Select an action</option>
    <option value="updated" selected>Select an action</option>
    <option value="views">Select an action</option>
    <option value="comments">Select an action</option>
  </select>
</div>;



export default FormSelect;