import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images'))
    },
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname)
        const filename = Date.now() + ext
        cb(null, filename)
    },
})

export const getImageUrl = (filename: string): string => {
    return `${process.env.BASE_URL}images/${filename}`
}

const upload = multer({ storage })

export default upload
