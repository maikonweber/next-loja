import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import crypto from 'crypto';

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
});

var s3 = new aws.S3({ /* .... */   });


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET,
        ac1: 'public-read',
        cintentTyoe: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')} - ${file.originalname}`
                cb(null, fileName);
            })
        }
    })
});

export default upload;
