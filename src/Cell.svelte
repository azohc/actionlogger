<script>
  export const activities = [];
</script>

<div class="container">
  <div class="cell"></div>
</div>

<style>
  .container {
    height: 70px;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cell {
    height: 40px;
    width: 40px;
    border: 3px solid rgba(42, 24, 42, 0.42);
    border-radius: 5px;
    opacity: 0.8;
    transition: 0.2s;
  }

  .cell:hover {
    border: 4px solid rgba(86, 60, 86, 0.6);
    opacity: 1;
  }
</style>
