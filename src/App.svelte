<script>
  import Cell from './Cell.svelte';
  import { getActivityLogs } from './Data';

  export let name = 'world';

  /**
   we want to make visible the past X months up to today
  
   assuming that we retrieve data.activityLogs with 
    the most recent days first,

    create an array of objects that have a day and a list of actions

   -> show a cell for each day that has
   *  passed since data.settings.trackingSince
   *
   */
  const activityLogs = getActivityLogs();
  console.log(activityLogs);
</script>

<main>
  <h1>Hello {name}!</h1>
  ----
  {#each activityLogs as log}
    <Cell {...log} />
  {/each}
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
