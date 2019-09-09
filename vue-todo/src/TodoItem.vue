<template>
	<tr>
		<th scope="row">{{ index }}</th>
		<td v-if="complete" class="table-success text-center">
			<span class="is-complete">{{ text }}</span>
		</td>
		<td v-else class="text-center">
			<span>{{ text }}</span>
		</td>
		<td class="text-center">
			<button
				v-if="!complete"
				title="Complete"
				v-on:click="$emit('toggle', { id, newStatus })"
			>
				✔️
			</button>
			<button
				v-else
				title="Undo"
				v-on:click="$emit('toggle', { id, newStatus })"
			>
				❌
			</button>
		</td>
		<td class="text-center">
			<button title="Remove" v-on:click="$emit('remove', id)">🗑</button>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		index: Number,
		id: String,
		text: String,
		complete: Boolean,
	},
	computed: {
		newStatus() {
			return !this.complete;
		},
	},
};
</script>

<style>
.is-complete {
	text-decoration: line-through;
}
.text-center {
	text-align: center;
}
</style>
