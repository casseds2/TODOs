<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "./firebase.js";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  export let uid;
  let text = "";

  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  const add = () => {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now()
    });
    text = "";
  }

  const updateStatus = (event) => {
    const { id, newStatus } = event.detail;
    db.collection("todos")
      .doc(id)
      .update({ complete: newStatus });
  }

  const removeItem = (event) => {
    const { id } = event.detail;
    db.collection("todos")
      .doc(id)
      .delete();
  }
</script>

<style>
  input {
    display: block;
  }
  th {
    text-align: left;
  }
</style>

<table class="table table-striped table-bordered table-hover">
  <caption>List of TODOs</caption>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Task No.</th>
      <th scope="col">Complete</th>
      <th scope="col">Action</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
    {#each $todos as todo, index}
      <TodoItem
        {index}
        {...todo}
        on:remove={removeItem}
        on:toggle={updateStatus} />
    {/each}
  </tbody>
</table>

<input type="text" bind:value={text} placeholder="Enter todo..." />

<button type="button" class="btn btn-dark" on:click={add}>Add Task</button>
