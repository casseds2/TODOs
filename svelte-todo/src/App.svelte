<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";
  import Navbar from "./Navbar.svelte";

  import { auth, googleProvider } from "./firebase.js";
  import { authState } from "rxfire/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(u => {
    user = u;
  });

  const login = () => {
    auth.signInWithPopup(googleProvider);
  };
</script>

<section>
  {#if user}
    <Navbar {auth} />
    <Profile {...user} />
    <hr />
    <Todos uid={user.uid} />
  {:else}
    <button type="button" class="btn btn-dark" on:click={login}>
      Google Signin
    </button>
  {/if}
</section>
