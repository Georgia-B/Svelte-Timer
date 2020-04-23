<script>
  export let label,
    id,
    placeholder = "00",
    value;
</script>

<style>
  .input {
    color: #383838;
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
    outline: #e08044 auto 1px;
  }

  .input::placeholder {
    color: #4e4e4e;
  }

  .label {
    font-size: 1.5em;
  }

  .input-container {
    margin: 15px;
  }
</style>

<div class="input-container">
  <input
    class="input"
    {id}
    type="numeric"
    maxlength="2"
    min="0"
    max="99"
    {placeholder}
    bind:value />
  <label for={id} class="label">{label}</label>
</div>
