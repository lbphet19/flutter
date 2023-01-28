const cloudinary = require("../config/cloudinary");

async function uploadFile(file) {
    const newNameFile = new Date().toISOString() + file.originalname;
    const Img_Url = await cloudinary.uploader.upload(file.path);
    // ImgObj = {...ImgObj , [key]:Img_Url.url , public_id:Img_Url.public_id}
    // const blob = bucket.file(newNameFile);
    // const blobStream = blob.createWriteStream({
    //     metadata: {
    //         contentType: file.mimetype,
    //     },
    // });
    // const publicUrl =
    //     `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURI(blob.name)}?alt=media`;
    return new Promise((resolve, reject) => {
        resolve({
            filename: newNameFile,
            url: Img_Url.url
        });
    });
}
module.exports = uploadFile