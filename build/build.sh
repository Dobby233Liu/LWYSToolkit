cat ../src/main/main.js > ./final.js
cat ../src/main/base1.js >> ./final.js
cat ../src/main/base2.js >> ./final.js
echo OK
cat ./final.js
exit 0
