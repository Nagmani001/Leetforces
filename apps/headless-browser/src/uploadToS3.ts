import fs from "fs";
import AWS from "aws-sdk";
import { openAiCall } from "./openAiCall";

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();


export function uploadToS3(fileName: string) {

  const params = {
    Bucket: 'leetforces',
    Key: `${fileName}.png`,
    Body: fs.createReadStream(`/home/nagmani/root/${fileName}.png`)
  };

  s3.upload(params, async (err: any, data: any) => {
    if (err) {
      console.log("error occured");
      console.log(err);
    } else {
      console.log("successfully put data to s3");
      const response = await openAiCall(fileName);
      console.log(response);
    }
  });
}
