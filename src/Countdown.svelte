<script>
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Input from "./Input.svelte";

  import { finished } from "./store.js";

  let isFinished;
  const subscribe = finished.subscribe(value => (isFinished = value));

  let x;
  let started = false;
  let paused = false;
  let minutes = null;
  let seconds = null;
  $: total = Number(minutes) * 60 + Number(seconds);

  $: timerMinutes = minutes ? minutes : 0;
  $: timerSeconds = seconds ? seconds : 0;

  function startTime() {
    console.log("Starting timer");
    started = true;
    paused = false;
    finished.set(false);
    total = Number(timerMinutes) * 60 + Number(timerSeconds);

    x = setInterval(() => {
      timerMinutes = Math.floor(total / 60);
      timerSeconds = Math.floor(total % 60);

      if (total <= 0) {
        clearInterval(x);
        finished.set(true);
        window.navigator.vibrate([300, 300, 300]);
        let sound = document.getElementById("audio");
        sound.play();
      }
      total = total - 1;
    }, 1000);
  }

  function clearTime() {
    clearInterval(x);
    started = false;
    paused = false;
    finished.set(false);
    minutes = null;
    seconds = null;
    let sound = document.getElementById("audio");
    sound.pause();
  }

  function pauseTime() {
    paused = true;
    clearInterval(x);
  }
</script>

<style>
  .content {
    width: 100%;
    position: relative;
    margin: 20px 0;
  }
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

<div class="content">
  <form autocomplete="off" class="container" class:invisible={started}>
    <Input id="minutes" label="MINUTES" bind:value={minutes} />
    <Input id="seconds" label="SECONDS" bind:value={seconds} />
  </form>
  <Display minutes={timerMinutes} seconds={timerSeconds} isVisible={started} />
</div>
{#if !started || paused}
  <Button label="Start" className="button-start" onClick={startTime} />
{/if}
{#if started && !paused && !isFinished}
  <Button label="Pause" className="button-pause" onClick={pauseTime} />
{/if}
<Button label="Clear" className="button-clear" onClick={clearTime} />
<audio loop id="audio" src="./sound.ogg" type="audio/ogg" />
