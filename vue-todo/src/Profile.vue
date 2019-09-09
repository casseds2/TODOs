<template>
	<div class="card" style="width:18rem;">
		<img :src="photoURL" width="100" alt="user avatar" />
		<div class="card-body">
			<h3 class="card-title">Hi {{ displayName }}!</h3>
			<p class="card-text">Here is what's left to do.</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'profile',
	props: {
		displayName: String,
		photoURL: String,
	},
};
</script>

<style></style>
