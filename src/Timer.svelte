<script>
  import { onMount } from "svelte";
  let second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0;

  function timer() {
    let countDown = new Date("Aug 11, 2020 00:00:00").getTime();

    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDown - now;

      days = Math.floor(distance / day);
      hours = Math.floor((distance % day) / hour);
      minutes = Math.floor((distance % hour) / minute);
      seconds = Math.floor((distance % minute) / second);

      if (distance <= 0) {
        clearInterval();
      }
    }, second);
  }

  onMount(() => {
    timer();
  });
</script>

<style>
  .timer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    text-align: center;
  }
  .number {
    font-size: 4em;
  }
  .label {
    font-size: 1.5em;
  }
</style>

<div class="timer">
  {#if days > 0}
    <div>
      <div class="number">{days}</div>
      <div class="label">DAYS</div>
    </div>
  {/if}
  <div>
    <div class="number">{hours}</div>
    <div class="label">HOURS</div>
  </div>
  <div>
    <div class="number">{minutes}</div>
    <div class="label">MINUTES</div>
  </div>
  <div>
    <div class="number">{seconds}</div>
    <div class="label">SECONDS</div>
  </div>
</div>
