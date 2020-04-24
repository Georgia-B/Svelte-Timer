<script>
  export let label, className, onClick;

  import { finished } from "./store.js";

  let isFinished;
  const subscribe = finished.subscribe(value => (isFinished = value));
</script>

<style>
  .button {
    border-radius: 30px;
    font-size: 1.2em;
    background-color: #dd7d3f;
    color: white;
    border: 1px solid white;
    width: 90px;
    height: 60px;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
    overflow: hidden;
    position: relative;
  }

  .animate {
    animation: backgroundChange 3s infinite;
  }

  .button:hover {
    background-color: #c46628;
  }

  .button:before {
    top: -100%;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: all 0.3s;
  }

  .button-start:before {
    content: "▶";
  }

  .button-clear:before {
    content: "✖";
  }

  .button-pause:before {
    content: "| |";
  }

  .button:hover:before {
    top: 0;
  }

  .button:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
  }

  .button-label {
    transition: all 0.3s;
  }

  .button:hover > .button-label {
    transform: translateY(300%);
    opacity: 0;
  }
</style>

<button
  on:click={onClick}
  class={`button ${className}`}
  class:animate={isFinished}>
  <div class="button-label">{label}</div>
</button>
