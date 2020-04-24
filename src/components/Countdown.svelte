<script>
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Form from "./Form.svelte";

  import { finished } from "./../store.js";

  let isFinished;
  const subscribe = finished.subscribe(value => (isFinished = value));

  let interval;
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

    interval = setInterval(() => {
      timerMinutes = Math.floor(total / 60);
      timerSeconds = Math.floor(total % 60);

      if (total <= 0) {
        clearInterval(interval);
        finished.set(true);
        window.navigator.vibrate([300, 300, 300]);
        let sound = document.getElementById("audio");
        if (sound) {
          sound.play();
        }
      }
      total = total - 1;
    }, 1000);
  }

  function clearTime() {
    clearInterval(interval);
    started = false;
    paused = false;
    finished.set(false);
    minutes = null;
    seconds = null;
    let sound = document.getElementById("audio");
    if (sound) {
      sound.pause();
    }
  }

  function pauseTime() {
    paused = true;
    clearInterval(interval);
  }
</script>

<style>
  .content {
    width: 100%;
    position: relative;
    margin: 20px 0;
  }
</style>

<div class="content">
  <Form
    isVisible={!started}
    bind:minutes
    bind:seconds
    onEnter={startTime}
    allowOnEnter={!started && !paused} />
  <Display isVisible={started} minutes={timerMinutes} seconds={timerSeconds} />
</div>
{#if !started || paused}
  <Button label="Start" className="button-start" onClick={startTime} />
{/if}
{#if started && !paused && !isFinished}
  <Button label="Pause" className="button-pause" onClick={pauseTime} />
{/if}
<Button label="Clear" className="button-clear" onClick={clearTime} />
