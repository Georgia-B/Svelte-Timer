<script>
  export let label, className, onClick;
</script>

<style>
  .button {
    border-radius: 25px;
    background-color: #d6783c;
    color: white;
    border: 1px solid white;
    width: 80px;
    height: 50px;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
    overflow: hidden;
    position: relative;
  }

  .button:hover {
    background-color: #ca6a2f;
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

<button on:click={onClick} class={`button ${className}`}>
  <div class="button-label">{label}</div>
</button>
