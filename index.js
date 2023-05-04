const express=require('express');
const app=express();
const cors=require('cors');
const port= process.env.PORT || 5000;

const chefs=require('./data/chefs.json');
const recipes=require('./data/recipes.json')
app.use(cors());
app.get('/',(req,res)=>{
  res.send('Dragon is running');
});
app.get('/chefs',(req,res)=>{
    res.send(chefs);
  });
  app.get('/recipeDetails/:recipeId', (req, res) => {
    
    res.send(recipes);
});
app.listen(port,()=>{
    console.log(`Dragon API is running on port:${port}`)
})