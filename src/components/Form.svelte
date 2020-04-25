<script>
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Input from "./Input.svelte";
  import { secondInput, minuteInput } from "../store.js";

  export let onEnter, allowOnEnter;

  let minutes, seconds;
  minuteInput.subscribe(value => (minutes = value));
  secondInput.subscribe(value => (seconds = value));

  function onChange(event) {
    if (event.target.id === "seconds") {
      secondInput.set(event.target.value);
    }
    if (event.target.id === "minutes") {
      minuteInput.set(event.target.value);
    }
  }

  function onKeyDown(event) {
    if (event.keyCode === 13 && allowOnEnter) {
      onEnter();
    }
  }
</script>

<form
  autocomplete="off"
  class="countdown"
  transition:scale={{ duration: 500, opacity: 0, start: 0.75, easing: quintOut }}
  on:keydown={onKeyDown}>
  <Input id="minutes" label="MINUTES" bind:value={minutes} {onChange} />
  <Input id="seconds" label="SECONDS" bind:value={seconds} {onChange} />
</form>
