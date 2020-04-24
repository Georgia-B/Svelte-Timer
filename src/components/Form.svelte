<script>
  import Input from "./Input.svelte";

  export let minutes, seconds, isVisible, onEnter, allowOnEnter;

  function onKeyDown(event) {
    if (event.keyCode === 13 && allowOnEnter) {
      onEnter();
    }
  }
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    transition: all ease-out 0.3s;
    opacity: 1;
    transform: scale(1);
  }
  .invisible {
    opacity: 0;
    transform: scale(0.75);
    position: absolute;
    width: 100%;
  }
</style>

<form
  autocomplete="off"
  class="container"
  class:invisible={!isVisible}
  on:keydown={onKeyDown}>
  <Input id="minutes" label="MINUTES" bind:value={minutes} />
  <Input id="seconds" label="SECONDS" bind:value={seconds} />
</form>
