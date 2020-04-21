<script>
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Input from "./Input.svelte";

  let x;
  let countdownStarted = false;
  let minutes;
  let seconds;
  $: total = Number(minutes) * 60 + Number(seconds);

  let timer = {
    minutes: 0,
    seconds: 0
  };

  function startTime() {
    console.log("Starting timer");
    countdownStarted = true;
    x = setInterval(() => {
      timer.minutes = Math.floor(total / 60);
      timer.seconds = Math.floor(total % 60);
      total = total - 1;

      if (total <= 0) {
        clearInterval(x);
      }
    }, 1000);
  }

  function clearTime() {
    console.log("Clearing timer");
    countdownStarted = false;
    minutes = null;
    seconds = null;
  }

  function pauseTime() {
    console.log("Pausing timer");
    clearInterval(x);
  }
</script>

<style>
  .content {
    width: 100%;
    position: relative;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #383838;
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

<div class="content">
  <div class={`container ${countdownStarted ? 'invisible' : ''}`}>
    <Input id="minutes" label="MINUTES" bind:value={minutes} />
    <Input id="seconds" label="SECONDS" bind:value={seconds} />
  </div>
  <Display
    minutes={timer.minutes}
    seconds={timer.seconds}
    isVisible={countdownStarted} />
</div>
<Button label="Start" className="button-start" onClick={startTime} />
<Button label="Pause" className="button-pause" onClick={pauseTime} />
<Button label="Clear" className="button-clear" onClick={clearTime} />
