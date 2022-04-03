<script>
  import Cell from './Cell.svelte';

  export let name = 'world';
</script>

<main>
  <h1>Hello {name}!</h1>
  ----
  <Cell />
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
