require('./kafka');

const knex = require('./knexConfig');

const express = require('express');
const app = express();
const port = 8081;


app.get('/user/*', async (req, res) => {
    const id = req.originalUrl.replace('/user/', '');
    knex.select('*')
        .from('users')
        .where('user_id', id)
        .then(result => {
            res.json({
                user: result,
            });
        })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});