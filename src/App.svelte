<script>
  import Timer from "./Timer.svelte";
  import Countdown from "./Countdown.svelte";
</script>

<style>
  .title {
    color: #383838;
    font-size: 2em;
  }
  .app {
    background-color: #f79556;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .container {
    width: 60%;
    text-align: center;
  }
</style>

<div class="app">
  <div class="container">
    <div class="title">Countdown Timer</div>
    <Countdown />
  </div>
</div>
