<script>
  export let displayName;
  export let photoURL;
</script>

<div class="card" style="width:18rem;">
  <img src={ photoURL } width="100" alt="user avatar">
  <div class="card-body">
    <h3 class="card-title">Hi { displayName }!</h3>
    <p class="card-text">Here is what's left to do.</p>
  </div>
</div>
