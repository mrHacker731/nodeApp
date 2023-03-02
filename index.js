const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        name:"test",
        id:"1",
        site:"render.com"
    });
});
app.get('/user', (req, res) => {
    res.json({
        name:"akash",
        age:"20",
        class:"3red years",
    });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port `);
})

