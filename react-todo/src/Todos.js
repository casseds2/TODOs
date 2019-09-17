import React from "react";
import { useState, useEffect } from "react";
import { db } from "./firebase";

import TodoItem from "./TodoItem";

const Todos = ({ uid }) => {
	const [text, setText] = useState("");
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		db.collection("todos")
			.where("uid", "==", uid)
			.orderBy("created")
			.onSnapshot(snapshot => {
				const todos = [];
				snapshot.forEach(doc => {
					todos.push({
						...doc.data(),
						id: doc.id,
					});
				});
				setTodos(todos);
			});
	}, [uid]);

	const updateText = event => {
		setText(event.target.value);
	};

	const add = () => {
		db.collection("todos").add({
			uid,
			text,
			complete: false,
			created: Date.now(),
		});
		setText("");
	};

	const updateStatus = (id, newStatus) => {
		db.collection("todos")
			.doc(id)
			.update({ complete: newStatus });
	};

	const removeItem = id => {
		db.collection("todos")
			.doc(id)
			.delete();
	};

	const styles = {
		input: {
			display: "block",
		},
		tableHead: {
			textAlign: "center",
		},
	};

	return (
		<div>
			<table className="table table-striped table-bordered table-hover">
				<caption>List of TODOs</caption>
				<thead className="thead-dark">
					<tr>
						<th scope="col" style={{ ...styles.tableHead, width: "10%" }}>
							Task No.
						</th>
						<th scope="col" style={{ ...styles.tableHead, width: "70%" }}>
							Task
						</th>
						<th scope="col" style={{ ...styles.tableHead, width: "10%" }}>
							Complete
						</th>
						<th scope="col" style={{ ...styles.tableHead, width: "10%" }}>
							Remove
						</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, index) => {
						return (
							<TodoItem
								{...todo}
								key={index}
								index={index}
								remove={removeItem}
								updateStatus={({ id, newStatus }) =>
									updateStatus(id, newStatus)
								}
							/>
						);
					})}
				</tbody>
			</table>
			<input
				type="text"
				value={text}
				onChange={updateText}
				placeholder="Enter todo..."
			/>
			<br />
			<button type="button" className="btn btn-dark" onClick={add}>
				Add Task
			</button>
		</div>
	);
};

export default Todos;
