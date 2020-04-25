<script>
  import Button from "./Button.svelte";

  export let started, paused, isFinished, startTimer, pauseTimer, clearTimer;
</script>

<style>
  .button-container {
    margin-top: 200px;
  }
</style>

<div class="button-container">
  {#if !started || paused}
    <Button label="Start" className="button-start" onClick={startTimer} />
  {/if}
  {#if started && !paused && !isFinished}
    <Button label="Pause" className="button-pause" onClick={pauseTimer} />
  {/if}
  <Button label="Clear" className="button-clear" onClick={clearTimer} />
</div>
