<script>
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Input from "./Input.svelte";

  export let minutes, seconds, onEnter, allowOnEnter;

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
  <Input id="minutes" label="MINUTES" bind:value={minutes} />
  <Input id="seconds" label="SECONDS" bind:value={seconds} />
</form>
