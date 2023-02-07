const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const multipart = require('aws-lambda-multipart-parser');

//zip -r deployment-package.zip index.js node_modules
exports.handler = async (e) => {
    const request = multipart.parse(e, false)
    const bucketName = request.bucketName;
    const file = request.file;
    const params = {
        Bucket: bucketName,
        Key: file.filename,
        Body: file.content,
    }
    console.log(params)
    await s3.upload(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({
            response: "File uploaded successfully",
            params: params
        })
    };
};