import multer from "multer";

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + "-" + file.originalname);
  },
});

export const propertyImageListMiddleWare = multer({
  storage: imageStorage,
}).array("image_list", 10);


export const profileImageMiddleWare = multer({ storage: imageStorage }).single(
  "image"
);
