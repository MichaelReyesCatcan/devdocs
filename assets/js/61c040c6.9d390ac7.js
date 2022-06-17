"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[61509],{37860:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return k}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),n=r(13904),s=["components"],i={title:"Moodle App 3.6.0 release notes",sidebar_label:"Moodle App 3.6.0",tags:["Moodle App","Release notes"]},p=void 0,m={unversionedId:"app_releases/v3/v3.6.0",id:"app_releases/v3/v3.6.0",title:"Moodle App 3.6.0 release notes",description:"Release date: 11th January 2019",source:"@site/general/app_releases/v3/v3.6.0.md",sourceDirName:"app_releases/v3",slug:"/app_releases/v3/v3.6.0",permalink:"/devdocs/general/app_releases/v3/v3.6.0",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app_releases/v3/v3.6.0.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655463803,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"Moodle App 3.6.0 release notes",sidebar_label:"Moodle App 3.6.0",tags:["Moodle App","Release notes"]},sidebar:"releaseNotes",previous:{title:"Moodle App 3.5.2",permalink:"/devdocs/general/app_releases/v3/v3.5.2"},next:{title:"Moodle App 3.6.1",permalink:"/devdocs/general/app_releases/v3/v3.6.1"}},d={},k=[{value:"New features and improvements",id:"new-features-and-improvements",level:2},{value:"Complete list of issues",id:"complete-list-of-issues",level:2},{value:"Bug",id:"bug",level:3},{value:"Epic",id:"epic",level:3},{value:"New Feature",id:"new-feature",level:3},{value:"Task",id:"task",level:3},{value:"Improvement",id:"improvement",level:3}],h={toc:k};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 11th January 2019"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/jira/secure/ReleaseNote.jspa?projectId=10070&version=16563"},"Complete list of fixed issues in Moodle App 3.6.0"),"."),(0,l.kt)("h2",{id:"new-features-and-improvements"},"New features and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improvements in sections navigation: infinite scroll"),(0,l.kt)("li",{parentName:"ul"},"Customisable Course overview: Navigating through your courses and assignments on the Dashboard is now easier. Keep better track of deadlines and sort and filter them easily with the new Timeline block. Hide or star courses in the course overview and display recently accessed items in a separate block to quickly return where you left off."),(0,l.kt)("li",{parentName:"ul"},"Performance improvements, the app is faster now for sites using Moodle 3.6"),(0,l.kt)("li",{parentName:"ul"},"Support Nextcloud integration"),(0,l.kt)("li",{parentName:"ul"},"Enhanced off-line learning: Students can now access content embedded via iframes offline and can mark activities and resources as complete when offline."),(0,l.kt)("li",{parentName:"ul"},"App supports group messaging: group messaging can be enabled in courses, and users have control over who can message them"),(0,l.kt)("li",{parentName:"ul"},"New languages support: Khmer (\u1781\u17d2\u1798\u17c2\u179a), Kannada (\u1781\u17d2\u1798\u17c2\u179a) and US English")),(0,l.kt)("h2",{id:"complete-list-of-issues"},"Complete list of issues"),(0,l.kt)("h3",{id:"bug"},"Bug"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1070"},"MOBILE-1070")," - Infinite-loading and failed requests: user cannot re-try unless he reloads the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1748"},"MOBILE-1748")," - Uploading big files makes the app crash (Android)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2383"},"MOBILE-2383")," - Support parent languages and en-us"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2427"},"MOBILE-2427")," - Numerical Quiz Question shown in Moodle Mobile without corresponding units"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2502"},"MOBILE-2502")," - stealth mode not working in the Moodle App"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2507"},"MOBILE-2507")," - Remove the \\&nspb; from the roles field in the user profile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2532"},"MOBILE-2532")," - Teachers and admins cannot access hidden courses through Site Home > Available courses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2571"},"MOBILE-2571"),' - Nothing happens after clicking "CONNECT!" button'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2574"},"MOBILE-2574")," - Picture in the profile does not display in RECONNECT page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2577"},"MOBILE-2577"),' - Moodle desktop displays "drag and drop int text" quiz question incorrectly'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2585"},"MOBILE-2585")," - Cannot synchronise offline course when some plugins are installed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2587"},"MOBILE-2587")," - Fake credentials shouldn't be sent in desktop apps when adding a site"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2588"},"MOBILE-2588")," - Wrong grade displayed when editing an assignment grade"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2589"},"MOBILE-2589")," - Overridden assignment submission grades are displayed as editable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2590"},"MOBILE-2590")," - Clicking a notification does not go to the right page in Android"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2592"},"MOBILE-2592")," - App is restarted when splitting the screen in Android"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2593"},"MOBILE-2593")," - Current working directory is not a Cordova based project"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2594"},"MOBILE-2594")," - SQLite plugin returns invalid strings and crashes the app in Android"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2598"},"MOBILE-2598")," - Moodle App activities in competency section goes to directly to the web in the app itself"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2608"},"MOBILE-2608")," - java.lang.RuntimeException: Canvas: trying to draw too large(157286400bytes) bitmap."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2610"},"MOBILE-2610")," - Lesson multichoice questions with multiple answers: user can not understand which answer was correct"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2619"},"MOBILE-2619")," - Desktop version for Mac requires audio entitlement and updated packages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2624"},"MOBILE-2624")," - Text in rich text editor has a different format in the first line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2626"},"MOBILE-2626")," - Admit single quotes in config.json strings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2627"},"MOBILE-2627")," - All sections infinite loading not working when loading whole course at once"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2641"},"MOBILE-2641")," - mod_resource icon is not displayed in sites older than 3.3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2650"},"MOBILE-2650")," - Links in Youtube player for embedded videos don't open in a new browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2651"},"MOBILE-2651")," - Links to embedded files are broken when editing content"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2654"},"MOBILE-2654")," - Wifi connection on About page is not showing correct value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2655"},"MOBILE-2655")," - Course Completion requests for each course won't be necessary anymore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2661"},"MOBILE-2661")," - Empty sections should be displayed to be consistent with web version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2676"},"MOBILE-2676")," - Header margin-top is 0 when rotating and iPhone with Notch"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2678"},"MOBILE-2678")," - core-external-content does not work for \\<video src=> in iOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2692"},"MOBILE-2692")," - core-site-plugins-call-ws-on-load isn't executed when performing a PTR"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2694"},"MOBILE-2694"),' - Clicking the "View password" button closes the keyboard in Android'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2695"},"MOBILE-2695")," - Enable download sections text is confusing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2697"},"MOBILE-2697")," - priority not always used correctly for CoreCourseOptionsDelegate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2699"},"MOBILE-2699")," - App is not informing properly about the problems for connecting to a site"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2704"},"MOBILE-2704")," - CoreMainMenuDelegate handlers do not behave as expected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2706"},"MOBILE-2706")," - Course tiles (for the dashboard page) shouldn't be used in the course section page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2709"},"MOBILE-2709")," - Filter my courses does not support shortnames"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2711"},"MOBILE-2711"),' - Changing tab and going back to "Home" makes SCORM iframe to disappear'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2716"},"MOBILE-2716")," - Increase iOS padding within section titles"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2721"},"MOBILE-2721")," - Course page title does not use course shortname"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2722"},"MOBILE-2722")," - Fix dashboard for 3.1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2724"},"MOBILE-2724")," - Labels appear to react to clicks, but they are inert"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2725"},"MOBILE-2725")," - ngOnDestroy, ngAfterContentInit and ngAfterViewInit isn't called for site plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2728"},"MOBILE-2728")," - Cannot navigate inside http iframes, all links are opened in browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2730"},"MOBILE-2730")," - Images don't observe ATTO alignment attributes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2733"},"MOBILE-2733")," - html5 details tag not supported in labels on main page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2734"},"MOBILE-2734")," - Calculate the number of conversations of each type and contact requests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2737"},"MOBILE-2737")," - Add a new discussion button in Forums is not working"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2738"},"MOBILE-2738")," - Clicking the Back button in the Main Menu will close the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2741"},"MOBILE-2741")," - Images inserted by a filter take up the whole screen in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2743"},"MOBILE-2743")," - Preview answer without any selection autoselects the first answer instead of refusing to show answer explanation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2744"},"MOBILE-2744")," - Lesson question type 'matching' selects an answer while scrolling (and other UX issue)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2750"},"MOBILE-2750"),' -  "Error reading file" is raised when uploading PDF'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2751"},"MOBILE-2751")," - Some youtube videos can't be played in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2752"},"MOBILE-2752")," - Target is ignored when redefining window.open inside an iframe"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2753"},"MOBILE-2753")," - Fix english language in Moment.js"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2754"},"MOBILE-2754")," - Translate PHP date formats to Moment.js one"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2755"},"MOBILE-2755")," - SCORMs with a fixed width shouldn't be wider than the screen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2759"},"MOBILE-2759")," - Completed Learning plans cannot be opened"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2764"},"MOBILE-2764"),' - Android decimal "," "." no warning, grade lost'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2765"},"MOBILE-2765")," - Iframe for embedded custom menu items is not using the full height"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2767"},"MOBILE-2767")," - The core.sitepolicynotagreederror seems to not be translated"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2782"},"MOBILE-2782")," - List issue in lessons on Android"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2784"},"MOBILE-2784")," - Non editing teachers cannot see feedback analysis summary"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2787"},"MOBILE-2787")," - Quiz Review - column header wraps on small screens"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2791"},"MOBILE-2791")," - App is restarted when a site policy is added in a site with adapted plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2794"},"MOBILE-2794")," - Accessing a stored site with token expired or logged out opens More page instead of Dashboard"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2800"},"MOBILE-2800")," - Course using a custom format plugin can show the core format instead"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2801"},"MOBILE-2801")," - Shortname displayed in the dashboard even if 'courselistshortnames' is disabled except if you refresh several times"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2803"},"MOBILE-2803")," - Core course options aren't downloaded when downloading a course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2693"},"MOBILE-2693")," - Some small bugs in the database addon")),(0,l.kt)("h3",{id:"epic"},"Epic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2629"},"MOBILE-2629")," - Mobile improvements for Dashboard and Course Overview page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2630"},"MOBILE-2630")," - Group messaging improvements mobile app")),(0,l.kt)("h3",{id:"new-feature"},"New Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2149"},"MOBILE-2149")," - Display topics/sections Completion status"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2599"},"MOBILE-2599")," - Add a 'Resend Confirmation Email' button to login page when user tries to login but has not confirmed yet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2609"},"MOBILE-2609")," - Add file support in the gradebook feedback"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2631"},"MOBILE-2631")," - Make conversations favouritable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2632"},"MOBILE-2632")," - Support group conversations discussion view"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2634"},"MOBILE-2634")," - Support the new user blocking feature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2638"},"MOBILE-2638")," - Upgrade Moodle Badges to apply Open Badges Specification version 2.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2729"},"MOBILE-2729")," - Support the new discussions list view"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2788"},"MOBILE-2788")," - Handle context freeze in the Mobile app")),(0,l.kt)("h3",{id:"task"},"Task"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2777"},"MOBILE-2777")," - Freeze plugin and library versions after the start of the release testing")),(0,l.kt)("h3",{id:"improvement"},"Improvement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1075"},"MOBILE-1075")," - Move app settings outside of sites"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1486"},"MOBILE-1486")," - Create status indicator for online users available for messaging"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1764"},"MOBILE-1764")," - Calculate the correct pre-fetch size for modules"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1874"},"MOBILE-1874"),' - Implement "Activity modules" block and check if "Main menu block" should be displayed'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2058"},"MOBILE-2058")," - Warn ungrouped users that they cannot edit or submit an assignment"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2061"},"MOBILE-2061")," - Support offline manual completion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2539"},"MOBILE-2539")," - Support URL appearance settings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2553"},"MOBILE-2553")," - Detect and handle redirections"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2554"},"MOBILE-2554"),' - Show "All sections" by default in courses with few activities'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2560"},"MOBILE-2560")," - Let users select and copy some texts in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2573"},"MOBILE-2573"),' - Display "Locked" text instead of disabled toggle in message preferences'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2575"},"MOBILE-2575")," - Allow selecting a different tab in course contents"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2581"},"MOBILE-2581")," - New discussions should be loaded at the right panel once created in split view"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2591"},"MOBILE-2591")," - Display an option to go to activity in activity calendar events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2595"},"MOBILE-2595")," - Autobuild apps from travis"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2597"},"MOBILE-2597")," - Fix vulnerabilities in project dependencies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2600"},"MOBILE-2600")," - SCORM: support new option to force new attempts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2601"},"MOBILE-2601")," - Display location field in calendar events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2602"},"MOBILE-2602"),' - Page: Support setting "Display modified date"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2604"},"MOBILE-2604")," - Assignment: Indicate wether submission needs regrading"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2607"},"MOBILE-2607")," - Replace compilation time with compilation info including the latest commit"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2611"},"MOBILE-2611")," - Workshop: Support new submission type setting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2612"},"MOBILE-2612")," - Display upload timestamp for the files uploaded on assignments"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2613"},"MOBILE-2613"),' - Add "All" option to dropdown menu in my overview courses'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2614"},"MOBILE-2614"),' - Create Sort dropdown with "Last accessed & Title" in course overview'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2616"},"MOBILE-2616")," - Dropdown to filter events by days in timeline"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2618"},"MOBILE-2618")," - Messages: New privacy preference"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2620"},"MOBILE-2620")," - Make message contacts a two-way approval process"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2636"},"MOBILE-2636")," - Support preSets in core-site-plugins-new-content"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2639"},"MOBILE-2639")," - Add auto translation to Travis scripts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2640"},"MOBILE-2640")," - Display full WS error messages on the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2647"},"MOBILE-2647")," - Add Kannada language"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2649"},"MOBILE-2649")," - Detect new languages for the Mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2653"},"MOBILE-2653")," - Embedded media content displays net::ERR_INTERNET_DISCONNECTED. when offline"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2656"},"MOBILE-2656")," - Update local_moodlemobileapp strings when new string is incorporated"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2658"},"MOBILE-2658")," - Improve the BMA site selector to be scalable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2667"},"MOBILE-2667")," - Separate my overview and timeline from core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2668"},"MOBILE-2668")," - Reduce WS requests in the user dashboard"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2669"},"MOBILE-2669")," - Reduce WS requests in the course main page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2675"},"MOBILE-2675")," - Site content embedded via iframes should be made available when offline"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2679"},"MOBILE-2679")," - Add hidden and starred option to dropdown menu in my overview block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2681"},"MOBILE-2681")," - Add user preferences to remember view selections in timeline and myoverview block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2685"},"MOBILE-2685")," - Build Starred Courses Block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2686"},"MOBILE-2686"),' - Create New "Recent accessed items" block'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2687"},"MOBILE-2687"),' - Create New "Recent Courses" Block'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2688"},"MOBILE-2688")," - Add ability to hide courses from the course overview page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2689"},"MOBILE-2689")," - Add ability to star courses from the course overview page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2698"},"MOBILE-2698")," - Reduce core_group_get_course_user_groups requests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2700"},"MOBILE-2700")," - Get dashboard block info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2701"},"MOBILE-2701")," - Support Nextcloud integration"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2707"},"MOBILE-2707")," - Fix plugin versions for packages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2719"},"MOBILE-2719")," - Stop sending fake credentials to check if the site exists"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2720"},"MOBILE-2720")," - Remove course progress bar when the user is viewing a section"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2726"},"MOBILE-2726")," - Let module site plugins hide default context menu options"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2727"},"MOBILE-2727")," - Use the correct version number for 3.6 when released"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2739"},"MOBILE-2739")," - Add version of site on body tag"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2758"},"MOBILE-2758")," - Simplify messaging settings like in Moodle web"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2761"},"MOBILE-2761")," - Maintain bottom tabs context on link handling"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2771"},"MOBILE-2771"),' - Append "MoodleMobile" to the Desktop app UserAgent'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2773"},"MOBILE-2773")," - Add and review improvements done on dashboard"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2774"},"MOBILE-2774")," - Style group messaging"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2779"},"MOBILE-2779")," - Display the icon of activity modules not supported by the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2783"},"MOBILE-2783")," - Reduce selectors on overview and timeline blocks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2786"},"MOBILE-2786")," - Windows Desktop for older versions of Moodle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2789"},"MOBILE-2789")," - Add Khmer language"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-2790"},"MOBILE-2790")," - Show/Hide download options")))}u.isMDXComponent=!0}}]);