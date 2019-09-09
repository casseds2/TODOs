<template>
	<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
		<span class="navbar-brand mb-0 h1">TODO</span>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="/settings"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Settings
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<button class="dropdown-item" v-on:click="$emit('logout')">
							Logout
						</button>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "navbar",
};
</script>

<style></style>
