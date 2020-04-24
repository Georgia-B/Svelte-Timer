<script>
  import Countdown from "./components/Countdown.svelte";

  import { finished } from "./store.js";

  let isFinished;
  const subscribe = finished.subscribe(value => (isFinished = value));
</script>

<style>
  .title {
    font-size: 2em;
  }
  .app {
    background-color: #dd7d3f;
    color: #ffffff;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .container {
    width: 75%;
    text-align: center;
  }

  .animate {
    animation: backgroundChange 3s infinite;
  }
</style>

<div class="app" class:animate={isFinished}>
  <div class="container">
    <div class="title">Countdown Timer</div>
    <Countdown />
  </div>
</div>
<audio loop id="audio" src="./sound.ogg" type="audio/ogg" />
