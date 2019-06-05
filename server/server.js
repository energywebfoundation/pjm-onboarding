const  express = require('express');
const bodyParser  = require( 'body-parser' );
const app = express();
const route = express.Router();

const fs = require('fs');
const multer = require('multer')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const getExtension = (filePath) => '.'+filePath.split('.').pop()

const generateTempFileName = (fileName) => (new Date().getTime())+getExtension(fileName);

const diskStorageFactory = (destiny)  =>{

    const storage =  multer.diskStorage({
        destination: function(_,__,cb){
            cb(null, destiny)
        },
        filename: function(_,file,cb){
            const filename =generateTempFileName(file.originalname)
            cb(null, filename);
        }
    });

    return multer({storage:storage});
}



route.post('/upload/public', diskStorageFactory('./upload/').single('file'),
     function(req,resp){
         resp.send(req.file)
    });

route.get('/download/public/:hash',   function(req,resp){
    const file = fs.readFileSync(`./upload/${req.params.hash}`);
    resp.end( file, 'binary')
});

if(!fs.existsSync('./upload'))
    fs.mkdirSync('./upload');

app.use('/api', route);

app.listen(process.env.PORT||8090);