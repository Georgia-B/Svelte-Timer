<script>
  import ButtonContainer from "./ButtonContainer.svelte";
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
  }
</style>

<div class="content">
  {#if !started}
    <Form
      bind:minutes
      bind:seconds
      onEnter={startTime}
      allowOnEnter={!started && !paused} />
  {/if}
  {#if started}
    <Display minutes={timerMinutes} seconds={timerSeconds} />
  {/if}
</div>
<ButtonContainer
  {started}
  {paused}
  {isFinished}
  startTimer={startTime}
  pauseTimer={pauseTime}
  clearTimer={clearTime} />
