const { Router }=require('express')
const router = Router()
const admin=require('../configFirebase')

  
  let db = admin.firestore();

//gets

router.get('/', async (req,res)=>{
    const citiesRef = db.collection('projects');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
    
    res.render('index')
})

router.get('/proyectos', async (req,res)=>{
    const citiesRef = db.collection('projects');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
    
    res.render('proyects')
})


//posts
router.post('/subirProyectos',async (req,res)=>{
    console.log(req.body)
   await db.collection('projects').add(req.body)
    .then(()=>{
        console.log('dato almacenado')
        res.redirect('/proyectos')
    })
})

router.post('/subirProyectosDestacados',async (req,res)=>{
    console.log(req.body)
   await db.collection('destacados').add(req.body)
    .then(()=>{
        console.log('dato almacenado')
        res.redirect('/proyectos')
    })
})

module.exports=router;