import { h } from 'preact';

const Checkbox = ({legend, label, sublabel}) => 

<fieldset class="input__checkbox-group">
	<legend class="input__legend">
		{legend}
		<span class="input__subLabel">{sublabel}</span>
	</legend>
	<div class="input input--checkbox">
		<input id="checkBox7" name="checkBox7" type="checkbox" class="input__checkbox" />
		<label class="input__label" for="checkBox7">
			{label}
			<span class="input__subLabel">{sublabel}</span>
		</label>
	</div>
	<div class="input input--checkbox">
		<input id="checkBox28" name="checkBox28" type="checkbox" class="input__checkbox" />
		<label class="input__label" for="checkBox28">
			{label}
			<span class="input__subLabel">{sublabel}</span>
		</label>
	</div>
	<div class="input input--checkbox">
		<input id="checkBox39" name="checkBox39" type="checkbox" class="input__checkbox" />
		<label class="input__label" for="checkBox39">
			{label}
			<span class="input__subLabel">{sublabel}</span>
		</label>
	</div>
</fieldset>




export default Checkbox;