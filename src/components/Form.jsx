import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
	const [todo, setTodo] = useState({ name: "", done: false });

	function handleSubmit(e) {
		// e.preventDefault();
		// setTodos([...todos, todo]);
		// setTodo({ name: "", done: false });
		// console.log("todo.name: ", todo.name);
		// console.log(todo);
		// console.log("todos: ", todos);

		e.preventDefault();
		const newTodos = [...todos, todo];
		setTodos(newTodos); // Update state
		setTodo({ name: "", done: false }); // Reset input field
		console.log("Current todos: ", newTodos); // Log the new array
	}
	return (
		<form className={styles.todoform} onSubmit={handleSubmit}>
			<div className={styles.inputContainer}>
				<input
					className={styles.modernInput}
					onChange={(e) => setTodo({ ...todo, name: e.target.value })}
					type="text"
					value={todo.name}
					placeholder="Enter todo item..."
				/>
				<button className={styles.modernButton} type="submit">
					Add
				</button>
			</div>
		</form>
	);
}
