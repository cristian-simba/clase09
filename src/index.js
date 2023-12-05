// // CREACIÓN DE UN WEB SERVER EN EXPRESS

// // Invocar la libreria de express
// const express = require('express')
// const {engine} = require('express-handlebars')



// // Crear una instancia
// const app = express()

// // Iniciar el servidor en el puerto
// app.listen(3000)

// // ROUTES
// // EL ORDEN DE LAS RUTAS SIEMPRE SON IMPORTANTES

// // // Crear una ruta raíz // Request es lo que se quiere mandar a la ruta // Response es lo que se va a devolver
// // app.get('/', (req,res) =>{
// //     res.send("Bievenido")
// // })

// // // Otra ruta
// // app.get('/dashboard', (req,res) =>{
// //     res.send("Dashboard Principal")
// // })

// // // Para rutas no existentes
// // app.use((req,res) =>{
// //     res.send("404 - Not Found")
// // })

// // REQUEST
// // get - obtiene / post - registra / put - actualiza / delete - borra

// // REQUEST BODY
// // app.use(express.json())

// // app.post('/register', (req,res) =>{
// //     const {pedido, solicitado} = req.body // Desestruturing JS
// //     res.send(`El pedido de ${pedido} es realizado por ${solicitado}`)

// // })

// // REQUEST PARAM
// // app.get('/pedido/:abc',(req,res)=>{
// //     res.send(`El pedido es hamburguesa ${req.params.abc}`)
// // })

// // REQUEST QUERY
// // app.get('/search', (req,res)=>{
// //     if (req.query.tipo === 'sencilla'){
// //         res.send("Hamburguesa sencilla")
// //     }else{
// //         res.send("Otro tipo de Hamburguesa")
// //     }
// // })

// // RESPONSE
// // 100 bloqueos // 200 procesamiento // 300 redireccion // 400 usuario - cliente // 500 servidor
// // app.get('/hamburguesa/simple', (req,res)=>{
// //     res.send('Hamburguesa - Simple')
// // })

// // console.log(__dirname)

// // app.get('/hamburguesa/doble', (req,res)=>{
// //     res.sendFile('./hambur.png',{
// //         root:__dirname    
// //     })
// // })
// // app.get('/hamburguesa/triple', (req,res)=>{
// //     res.sendFile('./triple.docx',{
// //         root:__dirname    
// //     })
// // })
// // app.get('/hamburguesa/mixta', (req,res)=>{
// //     res.status(202).json({
// //         "tipo": "Mixta",
// //         "extra": "No"
// //     })
// // })

// // Utilizar un motor de plantillas
// app.engine('handlebars', engine());

// // Extensión de las páginas
// app.set('view engine', 'handlebars');

// // Ubicacion del directorio views
// app.set('views', './src/views');

// app.get('/hamburguesa/vegana', (req,res)=>{
//     res.render('home')
// })
// app.get('/hamburguesa/about', (req,res)=>{
//     res.render('about')
// })


// console.log("Web server ejecutandose en el puerto 3000")

const express = require('express')
const app = express()
const port = 3000

// // RUTAS PÚBLICAS
// app.get('/entrada', (req, res) => { 
//   res.send('Entrada al local!')
// })

// // CREAR UN MIDDLEWARE
// app.use((req,res,next)=>{
//     const {email, password} = req.body
//     if(email === "david@gmail.com" && password === "12345"){
//         next() // Pasa a la ruta privada
//     }else{
//         res.send("Usuario no Registrado") // No permite acceder a la ruta privada
//     }
// })

// // RUTAS PRIVADAS
// app.get('/pedido', (req, res) => {
//   res.send(`Listo para preparar su orden ${req.body.email}!`)
// })

app.get('/', (req, res) => {
    res.send(`Lading Page`)
  })

app.get('/dashboard', (req, res) => {
    res.send(`Bienvenido`)
  })
app.get('/about', (req, res) => {
    res.send(`Sobre Nosotros`)
  })

app.listen(port, () => {
  console.log(`El puerto es: ${port}`)
})


