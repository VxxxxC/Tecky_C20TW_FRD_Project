cd app
yarn
yarn build

source ../scripts/config

aws s3 sync build s3://$S3_BUCKET_NAME
aws cloudfront create-invalidation --distribution-id $CLOUDFONT_DISTRIBUTION --paths '/*'