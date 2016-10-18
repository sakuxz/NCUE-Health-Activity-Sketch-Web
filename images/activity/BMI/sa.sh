for i in `ls`; do
  echo "goto ${i}"
  cd $i
  pwd
  cd ..
  pwd
  echo ====================
done
