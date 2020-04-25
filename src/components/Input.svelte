<script>
  export let label,
    id,
    placeholder = "00",
    value;

  function onInput(event) {
    let value = event.target.value;
    if (value.length > 2) {
      event.target.value = value.slice(0, 2);
    }
  }
</script>

<style>
  .input {
    color: #ffffff;
    border: none;
    font-size: 4em;
    background-color: unset;
    margin: 0;
    padding: 5px;
    text-align: center;
    max-width: 100px;
    -webkit-appearance: none;
  }

  .input:focus {
    outline: #c46628 auto 1px;
  }

  .input::placeholder {
    color: #e6e6e6;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .label {
    font-size: 1.5em;
    display: block;
  }

  .input-container {
    margin: 15px;
  }
</style>

<div class="input-container">
  <input
    class="input"
    {id}
    type="number"
    maxlength="2"
    min="0"
    max="99"
    {placeholder}
    on:input={onInput}
    bind:value />
  <label for={id} class="label">{label}</label>
</div>
