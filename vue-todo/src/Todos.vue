<template>
	<div>
		<table class="table table-striped table-bordered table-hover">
			<caption>
				List of TODOs
			</caption>
			<thead class="thead-dark">
				<tr>
					<th scope="col">Task No.</th>
					<th scope="col">Complete</th>
					<th scope="col">Action</th>
					<th scope="col">Remove</th>
				</tr>
			</thead>
			<tbody>
				<TodoItem
					v-for="(todo, index) in todos"
					:key="index"
					:index="index"
					:id="todo.id"
					:text="todo.text"
					:complete="todo.complete"
					@remove="removeItem"
					@toggle="updateStatus"
				/>
			</tbody>
		</table>
		<input type="text" v-model="text" placeholder="Enter todo..." />
		<button type="button" class="btn btn-dark" @click="add">Add Task</button>
	</div>
</template>

<script>
import TodoItem from "./TodoItem";
import { db } from "./firebase";

export default {
	name: "todos",
	props: {
		uid: String,
	},
	components: {
		TodoItem,
	},
	data() {
		return {
			text: "",
			todos: [],
		};
	},
	created() {
		db.collection("todos")
			.where("uid", "==", this.uid)
			.orderBy("created")
			.onSnapshot(snapshot => {
				const todos = [];
				snapshot.forEach(doc => {
					todos.push({
						...doc.data(),
						id: doc.id,
					});
				});
				this.todos = todos;
			});
	},
	methods: {
		data() {
			return {
				text: "",
			};
		},
		add() {
			let uid = this.uid;
			let text = this.text;
			db.collection("todos").add({
				uid,
				text,
				complete: false,
				created: Date.now(),
			});
			this.text = "";
		},
		removeItem(id) {
			db.collection("todos")
				.doc(id)
				.delete();
		},
		updateStatus({ id, newStatus }) {
			db.collection("todos")
				.doc(id)
				.update({ complete: newStatus });
		},
	},
};
</script>

<style>
input {
	display: block;
}
th {
	text-align: left;
}
</style>
