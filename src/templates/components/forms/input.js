import { h } from 'preact';

const Input = ({type, className, id}) =>

<div class="table-form-group">
  <h1 class="table-label-wrapper">
    <label class="table-label table-label--l" for={id}>
      
    </label>
  </h1>
  <input class={className} id={id} name={id} type={type}></input>
</div>;

export default Input;