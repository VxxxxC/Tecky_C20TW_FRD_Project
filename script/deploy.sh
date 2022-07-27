# set 選項說明：
#    -a 　標示已修改的變數，以供輸出至環境變數。
#    -b 　使被中止的後台程序立刻回報執行狀態。
#    -e 　若指令傳回值不等於 0，則立即退出 shell。
#    -H	 Shell 可利用"!"加<指令編號>的方式來執行 history 中記錄的指令。
#    -k 　指令所給的參數都會被視為此指令的環境變數。
#    -l 　記錄 for 迴圈的變數名稱。
#    -m 　使用監視模式。
#    -n   不要執行 script，僅查詢語法的問題。
#    -p 　啟動優先順序模式。
#    -P 　啟動 -P 選項後，執行指令時，會以實際的文件或目錄來取代符號連接。
#   -t 　執行完隨後的指令，即退出 shell。
#   -u 　當執行時使用到未定義過的變數，則顯示錯誤信息。
#   -v   執行 script 前，先將 script 的內容輸出到螢幕上；
#    -x 　執行指令前，先顯示該指令及所下的選項。
#

set -e
set -x

source ../script/config
echo $text

# ******************************************* #

# 1. go to project root
cd ..
pwd

# ******************************************* #

# 2. update and deploy to backend
cd $SERVER_ROOT
pwd

npm run build
rsync -SavLP dist ubuntu@veper-ec2:~/unipeice-frd-project/server

ssh veper-ec2 "
    cd $PROJECT_ROOT &&
    pm2 stop server.js
    pwd &&
    cd $SERVER_ROOT &&
    pwd && 
    npm install &&
    npx knex migrate:rollback &&
    npx knex migrate:latest &&
    npx knex seed:run &&
    cd dist &&
    pm2 start server.js
    exit
"

# ******************************************* #

# 3. update and deplpoy to frontend
pwd
cd ..
pwd
cd $REACT_ROOT
yarn
yarn build
pwd
aws s3 sync build s3://$S3_BUCKET_NAME
aws cloudfront create-invalidation --distribution-id $CLOUDFONT_DISTRIBUTION --paths '/*'


