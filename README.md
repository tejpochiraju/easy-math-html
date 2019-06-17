# easymath-html
EasyMath HTML

## Steps to update cordova app changes to native app and generate APK.

1. Do a build inside cordova project. 
2. Copy the 'www' directory from <b>/platforms/android/app/src/main/assets</b> to <b>/app/src/main/assets</b>
3. Copy contents of <b>/platforms/android/app/src/main/res/xml</b> to <b>/app/src/main/res/xml</b>
4. Copy contents of <b>/platforms/android/app/src/main/java</b> to <b>/app/src/main/java</b>
5. Copy contents of <b>/platforms/android/app/libs</b> to <b>/app/libs</b>

## Staging Build

Run the gradle tasks : clean, assembleDebug. The generated APK can be found under <b>/app/build/outputs/apk/</b>

## Production Build

Run the gradle tasks : clean, assembleRelease. The generated APK can be found under <b>/app/build/outputs/apk/</b>

