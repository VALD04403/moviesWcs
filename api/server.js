const express = require('express');
const app = express();
const { NODE_PORT } = require('./config/constant');
const connection = require('./config/databases');
const bodyParser = require('body-parser');


app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/movie', (req, res) => {
	connection.query('SELECT * FROM film', (err, results) => {
		if (err) {
			res.status(500).send('Erreur lors de la récupération des films');
		} else {
			res.json(results);
		}
	});
});

app.get('/movieYear', (req, res) => {
	connection.query(`SELECT * FROM film ORDER BY year`, (err, results) => {
		if (err) {
			res.status(500).send(`Erreur lors de la récupération des films par ordre chronologique`);
		} else {
			res.json(results);
		}
	});
});

app.get('/movieYear2', (req, res) => {
	connection.query(`SELECT * FROM film ORDER BY year DESC`, (err, results) => {
		if (err) {
			res.status(500).send(`Erreur lors de la récupération des films par ordre chronologique descendant`);
		} else {
			res.json(results);
		}
	});
});

app.get('/search/:input', (req, res) => {
	const formData = req.params.input;
	connection.query(`SELECT * from film where (name, director, year) like='%${formData}%'`, (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send(`Erreur lors de la récupération des films par recherche`);
		} else {
			res.json(results);
		}
	})
});

app.get('/movie80', (req, res) => {
	connection.query(`SELECT * FROM film where year between '1979' and '1990'`, (err, results) => {
		if (err) {
			res.status(500).send(`Erreur lors de la récupération des films`);
		} else {
			res.json(results);
		}
	});
});

app.get('/movie90', (req, res) => {
	connection.query(`SELECT * FROM film where year between '1989' and '2000'`, (err, results) => {
		if (err) {
			res.status(500).send(`Erreur lors de la récupération des films`);
		} else {
			res.json(results);
		}
	});
});

app.get('/movie00', (req, res) => {
	connection.query(`SELECT * FROM film where year >= '2000'`, (err, results) => {
		if (err) {
			res.status(500).send(`Erreur lors de la récupération des films`);
		} else {
			res.json(results);
		}
	});
});

app.get('/tarantino', (req, res) => {
	connection.query(`SELECT * from film where director like '%Tarantino%' `, (err, results) => {
		if (err) {
			res.status(500).send(`Erreur lors de la récupération des films`);
		} else {
			res.json(results);
		}
	});
});


app.delete('/:id', (req, res) => {
	const formData = req.body;
	connection.query('DELETE from film where id = ? ', formData, (err, results) => {
		if (err) {
			res.status(500).send('Erreur lors de la suppression du film');
		} else {
			res.json(results);
		}
	});
});

app.post('/:id', (req, res) => {
	const formData = req.body;
	connection.query('INSERT into film set ?', formData, (err, results) => {
		if (err) {
			res.status(500).send('Erreur lors de l\'ajout du film.');
		} else {
			res.json(results);
		}
	})
});

app.put('/:id', (req, res) => {
	const id = req.params.id;
	const formData = req.body;
	connection.query('UPDATE film SET ? where id = ?', [id, formData], (err, results) => {
		if (err) {
			res.status(500).send('Erreur lors de la modification du film');
		} else {
			res.json(results);
		}
	});
});

app.listen(NODE_PORT, (err) => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${NODE_PORT}`);
});