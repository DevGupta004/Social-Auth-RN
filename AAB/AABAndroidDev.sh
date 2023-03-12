



echo "BEFORE Spalsh Background::::" && \
convert ./icon.png -resize 1020x1024 -background black -gravity center -extent 2048x2048 ./splash.png && \
cp "./splash.png" "${projectBase}android/app/src/main/res/drawable/splash.png" && \
echo "AFTER Spalsh Background::::" && \
yarn add -D @bam.tech/react-native-make && \
react-native set-icon --path icon.png --platform android --background black && \
echo "react-native-rename SocialAuth -b com.dev.socialauth" && \
react-native-rename SocialAuth -b com.dev.socialauth && \
yarn remove @bam.tech/react-native-make


yarn android

