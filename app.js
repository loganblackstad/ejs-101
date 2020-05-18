const express = require('express');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
app.set('views', 'views');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let todoList = [
	{
		id: 1,
		todo: 'Implement a REST API',
	},
	{
		id: 2,
		todo: 'Build a Front End',
	},
	{
		id: 3,
		todo: '???',
	},
	{
		id: 4,
		todo: 'Profit!',
	},
];


app.get('/home', function (req, res) {
	res.render('home', {
		title: 'About ToDoList',
		todos: todoList
	});
});

app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}`)
});

