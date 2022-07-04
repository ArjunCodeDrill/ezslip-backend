import { Request, Response } from "express";
import User from "@database/model/user";
import OrganizationDetails from "@database/model/organizationDetails";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import * as path from 'path';

// storing file in upload folder and changing path name
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

//multer to upload file in uploads folder
const maxSize = 4 * 1024 * 1024; //for 4 MB
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if(
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ){
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: { fileSize: maxSize },
}).single("file");

export const updateController = async (req: Request | any, res: Response) => {
  upload(req, res, async function (err) {
    // console.log(req.file)
    if (err instanceof multer.MulterError) {
      return res.status(400).json("File too large should be less than 4 MB");
    } else if (err) {
      return res
        .status(400)
        .json("Only .png, .jpg and .jpeg format filetype  allowed!");
    } else {
      try {
        const id = req.user._id;
        const user = await User.findById(id);
        if (!user) return { message: "User does not exits!" };
        var splitUrl = user.organizationImage.split('/');
        const imageName = splitUrl[4]
        if (req.file.filename) {        
          if (imageName != req.file.filename) {
            fs.unlink('./server/public/uploads/'+ imageName, (err) => {
              if (err) {
                return;
              }
            });
          }
        }
        const imageUrl = `http://localhost:5000/image/${req.file.filename}`
        return res.status(201).json(imageUrl);
      } catch (error) {
        // console.log(error);
        return res.status(400).json(`Error occured : ${error}`);
      }
    }
  });
};