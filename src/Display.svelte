<script>
  export let minutes,
    seconds,
    isVisible = false;
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    text-align: center;
    transition: all ease-out 0.3s;
    transform: scale(0.75);
    opacity: 0;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: -1;
  }
  .visible {
    position: relative;
    opacity: 1;
    transform: scale(1);
    z-index: 1;
  }
  .timer {
    margin: 20px;
  }
  .number {
    font-size: 5em;
  }
  .label {
    font-size: 1.5em;
  }
</style>

<div class={`container ${isVisible ? 'visible' : ''}`}>
  <div class="timer">
    <div class="number">{minutes}</div>
    <div class="label">MINUTES</div>
  </div>
  <div class="timer">
    <div class="number">{seconds}</div>
    <div class="label">SECONDS</div>
  </div>
</div>
