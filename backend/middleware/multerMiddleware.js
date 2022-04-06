import path from 'path'
import multer from 'multer';

const __dirname = path.join('backend') ;

let upload = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null,path.join(__dirname,'static','public'))
        },
        filename: (req, file, cb) => {
            // console.log(file.originalname)
            // console.log(__dirname)
            const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E6)
            cb(null, uniquePrefix+'-'+file.originalname)
        }
    })
});


export default upload.single('file')