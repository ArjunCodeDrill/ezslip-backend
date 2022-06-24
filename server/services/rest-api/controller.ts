import { Request,Response} from 'express';
import User from '@database/model/user';
import OrganizationDetails from '@database/model/organizationDetails';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'

// storing file in upload folder and changing path name
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./server/public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, uuidv4() + '-' + file.originalname);
    },
  });
  
  //multer to upload file in uploads folder
  const maxSize = 4 * 1024 * 1024; //for 4 MB
  const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: { fileSize: maxSize },
  }).single("file");

  
export const postController = async(req : Request | any,res : Response) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json("File too large should be less than 4 MB");
    }else if(err) {
      return res
          .status(400)
          .json("Only .png, .jpg and .jpeg format filetype  allowed!");
    }else{   
      const id = req.user._id;
      const user = await User.findById(id)
      if(!user) return { message :'User does not exits!'}
      try{
        await User.findByIdAndUpdate(id,{
          $set : {
            organizationImage : req.file.path,
            organizationLegalName : req.body.organizationLegalName,
            organizationType : req.body.organizationType,
            address : req.body.address
          }
        })
        const managment = new OrganizationDetails({
          user : id,
          basicSalary : req.body.basicSalary,
          HRA : req.body.HRA,
          CIN : req.body.CIN,
          EPF : req.body.EPF,
          ESI : req.body.ESI,
        })
        await managment.save();
        return  res.status(201).json('Organization Details Added')
      }catch(error){
        // console.log(error);
        return  res.status(400).json(`Error occured : ${error}`)
      }}    
    })
}

export const updateController = async(req : Request | any,res : Response) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json("File too large should be less than 4 MB");
    }else if (err) {
      return res
          .status(400)
          .json("Only .png, .jpg and .jpeg format filetype  allowed!");
    }else{
      try{
        const id = req.user._id;
        const user = await User.findById(id)
        if(!user) return { message :'User does not exits!'}
        if(req.file.path){
          if(user.organizationImage != req.file.path){
            fs.unlink(user.organizationImage, (err) => {
              if (err) {
                // console.error(err)
                return
              }      
            })
          }
        }
        await User.findByIdAndUpdate(id,{
          $set : {
            organizationImage : req.file.path,
            organizationLegalName : req.body.organizationLegalName,
            organizationType : req.body.organizationType,
            address : req.body.address
          }
        })
        await OrganizationDetails.findOneAndUpdate({user : id},{
          $set : {
            basicSalary : req.body.basicSalary,
            HRA : req.body.HRA,
            CIN : req.body.CIN,
            EPF : req.body.EPF,
            ESI : req.body.ESI,
          }
        })
        return res.status(201).json('Organization Details Updated')
      }catch(error){
        // console.log(error);
        return  res.status(400).json(`Error occured : ${error}`)
      }
    }
  })
}

export const getController = async(req : Request | any,res : Response) => {
  const id = req.user._id;
  const user = await User.findById(id);
  const organization = await OrganizationDetails.findOne({user : id})
  const user_Details = {
    organizationImage : user.organizationImage,
    organizationLegalName : user.organizationLegalName,
    organizationType : user.organizationType,
    address : user.address,
  }
  const organization_Details = {
    basicSalary : organization.basicSalary,
    HRA : organization.HRA,
    CIN : organization.CIN,
    EPF : organization.EPF,
    ESI : organization.ESI,
  }
  try{
    const details = {
      user_Details,
      organization_Details
    }
    return res.status(200).json(details)
  }catch(error){
    return  res.status(400).json(`Error occured : ${error}`)
  }
}