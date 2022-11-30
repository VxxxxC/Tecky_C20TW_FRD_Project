# set -e
# set -x

# source ./veper.config

# cd app
# yarn
# yarn build

# aws s3 sync build s3://$S3_BUCKET_NAME
# aws cloudfront create-invalidation --distribution-id $CLOUDFONT_DISTRIBUTION --paths '/*'
