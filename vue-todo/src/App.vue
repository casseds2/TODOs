<template>
	<section>
		<div v-if="loggedIn">
			<navbar @logout="logout"></navbar>
			<profile
				:displayName="this.user.displayName"
				:photoURL="this.user.photoURL"
			></profile>
      <hr />
			<todos :uid="this.user.uid"></todos>
		</div>
		<button v-else type="button" class="btn btn-dark" @click="login">
			Google Signin
		</button>
	</section>
</template>

<script>
import Navbar from "./Navbar";
import Profile from "./Profile";
import Todos from "./Todos";
import { auth, googleProvider } from "./firebase";
import { authState } from "rxfire/auth";

export default {
	components: {
		Navbar,
		Profile,
		Todos,
	},
	data() {
		return {
			user: null,
		};
	},
	created() {
		auth.onAuthStateChanged(u => {
			this.user = u;
		});
	},
	methods: {
		login() {
			auth.signInWithPopup(googleProvider);
		},
		logout() {
			auth.signOut();
		},
	},
	computed: {
		loggedIn() {
			return this.user !== null;
		},
	},
};
</script>

<style></style>
