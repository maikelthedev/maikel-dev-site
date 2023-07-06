#!/bin/bash

for file in *.png; do
  if [[ -f $file ]]; then
    filename="${file%.*}"
    webp_file="$filename.webp"
    cwebp -q 80 -resize 200 200 "$file" -o "$webp_file"
    #     convert "$file" -resize '200x200>' -quality 80 "$webp_file"
  fi
done
