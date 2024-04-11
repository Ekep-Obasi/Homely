import multer from 'multer'

export const ImageUploadMiddleware = multer({ storage: multer.memoryStorage() })
