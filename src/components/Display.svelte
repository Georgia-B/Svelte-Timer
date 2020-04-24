<script>
  export let minutes,
    seconds,
    isVisible = false;

  import { finished } from "./../store.js";

  let isFinished;
  const subscribe = finished.subscribe(value => (isFinished = value));
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
  .animate {
    animation: scaleOut 2s infinite;
  }

  @keyframes scaleOut {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.9);
    }
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

<div class="container" class:visible={isVisible} class:animate={isFinished}>
  <div class="timer">
    <div class="number" id="minute-display">{minutes}</div>
    <div class="label">MINUTES</div>
  </div>
  <div class="timer">
    <div class="number" id="second-display">{seconds}</div>
    <div class="label">SECONDS</div>
  </div>
</div>
