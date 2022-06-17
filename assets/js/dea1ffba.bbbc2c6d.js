"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8257],{68782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(13904),r=["components"],s={title:"Setting up your development environment for the Moodle App",sidebar_label:"Setting up your environment",sidebar_position:1,tags:["Moodle App"]},d=void 0,p={unversionedId:"moodleapp/development/setup/index",id:"moodleapp/development/setup/index",title:"Setting up your development environment for the Moodle App",description:"The structure of this page is the following:",source:"@site/docs/moodleapp/development/setup/index.md",sourceDirName:"moodleapp/development/setup",slug:"/moodleapp/development/setup/",permalink:"/devdocs/docs/moodleapp/development/setup/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/setup/index.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655463803,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:1,frontMatter:{title:"Setting up your development environment for the Moodle App",sidebar_label:"Setting up your environment",sidebar_position:1,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Development",permalink:"/devdocs/docs/category/development"},next:{title:"Using the App in a browser",permalink:"/devdocs/docs/moodleapp/development/setup/app-in-browser"}},u={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Install a browser for development",id:"install-a-browser-for-development",level:3},{value:"Install git",id:"install-git",level:3},{value:"Install Node.js and Npm",id:"install-nodejs-and-npm",level:3},{value:"Install native SDKs",id:"install-native-sdks",level:3},{value:"Windows only: Native build dependencies",id:"windows-only-native-build-dependencies",level:3},{value:"Mac only: Push notifications",id:"mac-only-push-notifications",level:3},{value:"Linux only: <code>libsecret</code>",id:"linux-only-libsecret",level:3},{value:"Running the app in a browser",id:"running-the-app-in-a-browser",level:2},{value:"Running the app in Android and iOS",id:"running-the-app-in-android-and-ios",level:2},{value:"Developing using Live Reload",id:"developing-using-live-reload",level:3},{value:"Compiling using AOT",id:"compiling-using-aot",level:3},{value:"Using Android emulators",id:"using-android-emulators",level:3},{value:"See also",id:"see-also",level:2}],c={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,(0,o.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"The structure of this page is the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first part, up to the point where you get the ",(0,i.kt)("inlineCode",{parentName:"li"},"npm start")," command to work, includes the basics of what you need to work on the app."),(0,i.kt)("li",{parentName:"ul"},"The second part indicates how to build the app to run it on a native device (or emulator)."),(0,i.kt)("li",{parentName:"ul"},"You can find ",(0,i.kt)("a",{parentName:"li",href:"./setup/troubleshooting"},"troubleshooting advices in a separate page"),". If you encounter a problem that is not already listed, please consider adding it.")),(0,i.kt)("p",null,"Most of your development can happen on a browser, you only need to use an emulator if you have to work on native functionality."),(0,i.kt)("p",null,"If you are just ",(0,i.kt)("a",{parentName:"p",href:"./plugins-development-guide"},"adding mobile support to plugins"),", you probably don't need to build the app yourself and you can skip reading this page."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"install-a-browser-for-development"},"Install a browser for development"),(0,i.kt)("p",null,"Most of the time we recommend that you use a browser for development; the app will work in any Chromium-based browser. We recommend using the Chromium browser (an open source alternative to Google Chrome). You can get it from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/download-chromium"},"official download page"),"."),(0,i.kt)("p",null,"To learn more about using a browser for development, and why it needs to be Chromium-based, read the ",(0,i.kt)("a",{parentName:"p",href:"./setup/app-in-browser"},"Using the Moodle App in a browser")," page."),(0,i.kt)("h3",{id:"install-git"},"Install git"),(0,i.kt)("p",null,"You will need to install Git in order to get the source code and upload your changes. If you are not familiar with it, we recommend that you get started reading the following guide: ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Installing Git"),"."),(0,i.kt)("h3",{id:"install-nodejs-and-npm"},"Install Node.js and Npm"),(0,i.kt)("p",null,"We recommend using a version manager like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," to make this easier, you can prepare the correct environment running ",(0,i.kt)("inlineCode",{parentName:"p"},"nvm install")," in the project root. Remember to run this every time you work with the app, or if you're not working on any other node projects in your computer you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"nvm alias default `node -v` ")," to make it the default."),(0,i.kt)("p",null,"It may seem simpler and easier to install directly from ",(0,i.kt)("a",{parentName:"p",href:"http://nodejs.org"},"nodejs.org"),", but actually it is more tricky to get that to work. If you have previously installed Node directly, and want to switch to nvm, you need to uninstall node completely before installing nvm - or search for troubleshooting instructions online."),(0,i.kt)("h3",{id:"install-native-sdks"},"Install native SDKs"),(0,i.kt)("p",null,"If you intend to run the application in a native device, you will need to install that platform's native SDKs. You can learn how to set up your environment by reading Ionic's documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/developing/android"},"Android")," and ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/developing/ios"},"iOS"),"."),(0,i.kt)("h3",{id:"windows-only-native-build-dependencies"},"Windows only: Native build dependencies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node-gyp")," requires native build tools for your platform. If you're developing on Mac or Linux, you'll probably have these already (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp/blob/master/README.md"},"refer to the docs if you don't"),"). On Windows, run the following command as administrator (in cmd or Powershell):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global --production windows-build-tools\n")),(0,i.kt)("p",null,"Warning! This installer can take a very, very long time to run. We were seeing it take hours. Literally. Be prepared to be very patient. Don't just make the natural assumption that it has crashed."),(0,i.kt)("h3",{id:"mac-only-push-notifications"},"Mac only: Push notifications"),(0,i.kt)("p",null,"This is only be necessary if you intend to compile the native iOS application. The push notifications plugin requires CocoaPods to work on a Mac; you can find the complete installation instructions in ",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"the official documentation"),", but it should work by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gem install cocoapods\npod setup\n")),(0,i.kt)("p",null,"Please note that for compiling the app in Mac you need to open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Moodle.xcworkspace")," file, more information here: ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE-1970"},"MOBILE-1970"),"."),(0,i.kt)("h3",{id:"linux-only-libsecret"},"Linux only: ",(0,i.kt)("inlineCode",{parentName:"h3"},"libsecret")),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"./scripts/gulp-push"},"the gulp push script"),", you need to have ",(0,i.kt)("inlineCode",{parentName:"p"},"libsecret")," installed before running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),". Depending on your distribution, you will need to run one of the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Debian/Ubuntu"',title:'"Debian/Ubuntu"'},"sudo apt-get install libsecret-1-dev\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Red Hat"',title:'"Red','Hat"':!0},"sudo yum install libsecret-devel\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Arch Linux"',title:'"Arch','Linux"':!0},"sudo pacman -S libsecret\n")),(0,i.kt)("h2",{id:"running-the-app-in-a-browser"},"Running the app in a browser"),(0,i.kt)("p",null,"You can obtain a copy of the source code by cloning the public repository. If you want to work on the latest development version, you should check out the ",(0,i.kt)("inlineCode",{parentName:"p"},"integration")," branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:moodlehq/moodleapp.git\ncd moodleapp\ngit checkout integration\n")),(0,i.kt)("p",null,"Once you have the correct environment set up, you can run the application with the following two commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm start\n")),(0,i.kt)("p",null,"This will launch the application in a browser and you should be ready to start coding (you may also want to ",(0,i.kt)("a",{parentName:"p",href:"./setup/app-in-browser#configuring-the-default-browser"},"configure the default browser")," for future runs). This compiles the entire application and can take a while, so don't worry if it doesn't open the browser instantly. Keep in mind that this command may open the browser before the dev server is ready, and you could get a network error. If that happens, just wait until the dev server is ready and launch the application again. It should be ready when you see a \"Compiled successfully\" message in the console."),(0,i.kt)("p",null,"Congratulations, you have just completed the basics to become a Moodle App developer!"),(0,i.kt)("p",null,"If you need to work with native features or build packaged versions of the app, you can read the rest of this page."),(0,i.kt)("h2",{id:"running-the-app-in-android-and-ios"},"Running the app in Android and iOS"),(0,i.kt)("p",null,"The first time you want to run the application in a native device, this process will take a bit longer than usual because it needs to create the native projects and install native plugins. These will be created under the ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/")," folders respectively. If you ever run into issues during this process, try deleting both of these folders to get a clean start."),(0,i.kt)("p",null,"In order to run the application on a native device, you can use one of the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev:android  # Uses Live Reload, read below\nnpm run dev:ios      # Does NOT use Live Reload, read below\nnpm run prod:android # Uses AOT compilation, read below\nnpm run prod:ios     # Uses AOT compilation, read below\n")),(0,i.kt)("p",null,"If you get any errors while building, please see the ",(0,i.kt)("a",{parentName:"p",href:"#troubleshooting"},"Troubleshooting")," section below."),(0,i.kt)("p",null,"You can also inspect the HTML and look at the console logs by using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/remote-debugging/"},"Chrome's Remote Debugging for Android")," and ",(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/guide/safari/use-the-developer-tools-in-the-develop-menu-sfri20948/15.1/mac/12.0"},"Safari's Develop menu for iOS"),". This will only work with emulators or devices connected to your computer running with the development environment."),(0,i.kt)("h3",{id:"developing-using-live-reload"},"Developing using Live Reload"),(0,i.kt)("p",null,"Most of the time, it is recommended to develop using the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," command. Working in a browser is faster, easier, and doesn't have as much overhead. However, in some situations you may want to run the application in a native device. If you want a similar development experience, you'll want to enable ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"Live Reload"),"."),(0,i.kt)("p",null,"In Android, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:android"),' command and the application will launch on a device or emulator. Whenever you make any changes to your code, the application will reload automatically. Keep in mind that this command may launch the application before the dev server is ready, and you could get a network error. If that happens, just wait until the dev server is ready and launch the application again (you should see "Compiled successfully" in the console).'),(0,i.kt)("p",null,"In iOS, there are some limitations using live reload and that's why the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:ios")," command doesn't enable it by default. You can still use it by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npx ionic cordova run ios --livereload --external"),", but keep in mind that this will serve your application on an IP and will expose it to anyone connected to the same Wi-Fi network. Other than privacy concerns, this may cause some problems if you are working with iframes or local files. If you have any problems with that, you'll have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:ios")," command to recompile the application every time you change the code."),(0,i.kt)("h3",{id:"compiling-using-aot"},"Compiling using AOT"),(0,i.kt)("p",null,"Angular has 2 ways of compiling: ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/glossary#jit"},"JIT")," and ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/glossary#aot"},"AOT"),"."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:android")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:ios")," compiles using JIT, which is faster to compile but the app takes longer to start. This is acceptable during development because it allows you to use Live Reload."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run prod:android")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run prod:ios")," commands use AOT compilation because they generate production bundles."),(0,i.kt)("h3",{id:"using-android-emulators"},"Using Android emulators"),(0,i.kt)("p",null,"Most of the time, you should be using an emulator running recent versions of Android, and it should work fine. But sometimes, you may want to use an older version to test a specific behaviour."),(0,i.kt)("p",null,"If you want to run the application in an Android 5 emulator, you'll need to upgrade the system webview because emulators come with version 37 preinstalled. Your first idea may be to upgrade the webview using the Google Play store, but it will not work because the webview served by Google Play is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.google.android.webview")," whilst the system webview used in emulators is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.android.webview"),". You can do the following instead."),(0,i.kt)("p",null,"Once you have ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/managing-avds"},"created your Android 5 virtual device"),", you'll need to do download ",(0,i.kt)("a",{parentName:"p",href:"https://android.googlesource.com/platform/external/chromium-webview/+/refs/heads/oreo-m3-release/prebuilt/x86_64/"},"the apk for Webview 61")," and run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Open the folder where the "emulator" script is installed\ncd $(dirname `which emulator`)\n\n# Boot the emulator in write mode (you can get a list of device names running "emulator -list-avds")\nemulator @DeviceName -writable-system\n\n# In a different shell, make /system writable\nadb remount\n\n# Uninstall the webview app manually and reboot the device\nadb shell\nrm -rf /data/data/com.android.webview\nrm -rf /system/app/webview\nreboot\n\n# Install the new version\nadb install webview.apk\n')),(0,i.kt)("p",null,"After doing this, remember to run the emulator in write mode for subsequent sessions, but you don't need to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"remount")," command every time."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/development/policies/codingstyle-moodleapp"},"Moodle App Coding Style")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./network-debug"},"Debugging network requests in the Moodle App")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-docker"},"Moodle Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://ionicframework.com/docs/cli/"},"Ionic CLI docs"))))}h.isMDXComponent=!0}}]);