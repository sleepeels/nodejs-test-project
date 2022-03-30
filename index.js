
const app = require('express')();

const PORT = process.env.PORT || 5000;

app.get('/*', (req,res)=>{
res.send(`<h1>welcome to my simple nodejs app</h1>
<p>we are running on port ${PORT}</p>`);
});

app.listen(PORT, ()=> {console.log(`listening on port ${PORT}`)});

