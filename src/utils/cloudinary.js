import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: 'dzwyba6pl',
    api_key: 883577113399265,
    api_secret: "39Pif1EuUedzrSmIiNw1L3gpxic"
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        // console.log("file is uploaded on cloud ",response.url);
        fs.unlinkSync(localFilePath)
        return response
    } 
    
    catch (error) {
        console.log(error);
        
        fs.unlinkSync(localFilePath) // remove the locally saved temp file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}
