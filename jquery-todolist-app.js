let STORE = [
	{"name": "Grocery Shopping", "checked": false},
	{"name": "Water the plants", "checked": true},
	{"name": "Organize a meeting", "checked": false},
	{"name": "Buy home decor items", "checked": false},
	{"name": "Do laundry", "checked": false}
];

function handleTodoList() {
	//Call rendering
	renderToDoList();
	//Initialize submission events
	handleNewTaskSubmit();
	//Initialize click of check button
	handleTaskCheckClicked();
	//Initialize click of delete button
	handleDeleteTaskClicked();
}

function renderToDoList() {
	//Make the todo list.
	//The todo list needs to be populated from the store data.
	//Loop through the STORE and call addList on each array element.

	STORE.forEach(task => {
		//The task contains the current task object from the array.
		addTask(task);
	});
}

function addTask(task) {
	//This function will add one singe task item.
	// The input should be an object with name and checked values.
	//Use jQuery to append the LI to the UI.
	//First build the LI.

	let checked = ((task.checked) ? "task-todo_checked": '');

let li = `<li>
		    <span class="task-todo${checked}">${task.name}</span>
		    <div class="task-todo-controls">
		   		<button class="task-todo-toggle">
		   			<span class="button-label">Check</span>
		   		</button>
		   		<button class="task-todo-delete">
		   			<span class="button-label">Delete</span>
		   		</button>
		   	</div>
		  </li>`

	$(".js-task-list").append(li);	
	// console.log(li);  
}

function handleNewTaskSubmit() {
	//Handle for submission
	$("#js-todo-list-form").on('submit', function(e) {
		e.preventDefault();
		console.log("hello");
		//Get the value from  the input
		let entryValue = $(".js-todo-list-entry").val(); //can also keep the variable name as task
		//By default, we consider item as unchecked.
		//So that would be false
		//Fire the add item.
		addTask({
			"name": entryValue, //can also have its value as task
			"checked": false 
		});
		//clear the input
		$(".js-todo-list-entry").val("");
	});		
}

function handleTaskCheckClicked() {
	$(".js-task-list").on("çlick", ".task-todo-toggle", function(e) {
		e.preventDefault();
		$(this).closest("li").find(".task-todo").toggleClass("task-todo_checked");
	});
}

function handleDeleteTaskClicked() {
	$(".js-task-list").on("click", ".task-todo-delete", function(e) {
		e.preventDefault();
		$(this).closest("li").remove();
	});
}

//Once evrything is loaded, please run the whole stuff.
$(function() {
	handleTodoList();
})