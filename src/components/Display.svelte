<script>
  import { fade, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { finished } from "./../store.js";

  export let minutes, seconds;

  let isFinished;
  const subscribe = finished.subscribe(value => (isFinished = value));
</script>

<style>
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

<div
  class="countdown"
  class:animate={isFinished}
  transition:scale={{ duration: 500, opacity: 0, start: 0.75, easing: quintOut }}>
  <div class="timer">
    <div class="number" id="minute-display">{minutes}</div>
    <div class="label">MINUTES</div>
  </div>
  <div class="timer">
    <div class="number" id="second-display">{seconds}</div>
    <div class="label">SECONDS</div>
  </div>
</div>
