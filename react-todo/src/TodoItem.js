import React from "react";

const TodoItem = ({ index, id, complete, text, updateStatus, remove }) => {
	const styles = {
		isComplete: {
			textDecoration: "line-through",
		},
		textCenter: {
			textAlign: "center",
		},
	};

	const toggleStatus = () => {
		updateStatus({
			id: id,
			newStatus: !complete,
		});
	};

	return (
		<tr>
			<th scope="row">{index}</th>
			{complete ? (
				<td className="table-success" style={styles.textCenter}>
					<span style={styles.isComplete}>{text}</span>
				</td>
			) : (
				<td style={styles.textCenter}>
					<span>{text}</span>
				</td>
			)}
			<td style={styles.textCenter}>
				{!complete ? (
					<button title="Complete" onClick={toggleStatus}>
						<span role="img" aria-label="tick">
							✔️
						</span>
					</button>
				) : (
					<button title="Undo" onClick={toggleStatus}>
						<span role="img" aria-label="cross">
							❌
						</span>
					</button>
				)}
			</td>
			<td style={styles.textCenter}>
				<button title="Remove" onClick={() => remove(id)}>
					🗑
				</button>
			</td>
		</tr>
	);
};

export default TodoItem;
