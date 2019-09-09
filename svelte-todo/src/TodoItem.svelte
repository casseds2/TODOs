<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let index;
  export let id;
  export let text;
  export let complete;

  const remove = () => {
    dispatch("remove", { id })
  }

  const toggleStatus = () => {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus
    });
  }
</script>

<style>
  .is-complete {
    text-decoration: line-through;
  }
  .text-center {
    text-align: center
  }
</style>

<tr>
  <th scope="row">{index}</th>
  {#if complete}
    <td class="table-success text-center">
      <span class="is-complete">{text}</span>
    </td>
  {:else}
    <td class="text-center"><span>{text}</span></td>
  {/if}
  <td class="text-center">
    {#if !complete}
      <button  title="Complete" on:click={toggleStatus}>✔️</button>
    {:else}
      <button  title="Undo" on:click={toggleStatus}>❌</button>
    {/if}
  </td>
  <td class="text-center">
    <button  title="Remove" on:click={remove}>🗑</button>
  </td>
</tr>
