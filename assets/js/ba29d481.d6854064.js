"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[60823],{94994:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=a(83117),s=a(80102),o=(a(67294),a(3905)),i=a(13904),l=["components"],n={title:"Moodle 2.2.3",tags:["Release notes","Moodle 2.2"],sidebar_position:3,moodleVersion:"2.2.3"},d=void 0,p={unversionedId:"releases/2.2/2.2.3",id:"releases/2.2/2.2.3",title:"Moodle 2.2.3",description:"Release date: 14 May 2012",source:"@site/general/releases/2.2/2.2.3.md",sourceDirName:"releases/2.2",slug:"/releases/2.2/2.2.3",permalink:"/devdocs/general/releases/2.2/2.2.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.2/2.2.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.2",permalink:"/devdocs/general/tags/moodle-2-2"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655463803,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:3,frontMatter:{title:"Moodle 2.2.3",tags:["Release notes","Moodle 2.2"],sidebar_position:3,moodleVersion:"2.2.3"},sidebar:"releaseNotes",previous:{title:"Moodle 2.2.2",permalink:"/devdocs/general/releases/2.2/2.2.2"},next:{title:"Moodle 2.2.4",permalink:"/devdocs/general/releases/2.2/2.2.4"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("p",null,"Release date: 14 May 2012"),(0,o.kt)("p",null,"Here is ",(0,o.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.2.3%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.2.3"),"."),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32431"},"MDL-32431")," Calendar events can be backed-up and restored"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29262"},"MDL-29262")," Moodle 2 backup_controllers table is no longer needlessly massive")),(0,o.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27862"},"MDL-27862")," Ability to unset a theme"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31835"},"MDL-31835")," Recent conversations link added when viewing a message"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27427"},"MDL-27427")," Option added to delete external blog entries")),(0,o.kt)("h2",{id:"security-issues"},"Security issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203041"},"MSA-12-0024")," Hidden information access issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203042"},"MSA-12-0025")," Personal communication access issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203043"},"MSA-12-0026")," Quiz capability issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203044"},"MSA-12-0027")," Question bank capability issues"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203045"},"MSA-12-0028")," Insecure authentication issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203046"},"MSA-12-0029")," Information editing access issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203048"},"MSA-12-0030")," Capability manipulation issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203049"},"MSA-12-0031")," Cross-site scripting vulnerability in Wiki"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203050"},"MSA-12-0032")," Cross-site scripting vulnerability in Web services"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203054"},"MSA-12-0035"),' Cross-site scripting vulnerability in "download all"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203055"},"MSA-12-0036")," Cross-site scripting vulnerability in category identifier"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203056"},"MSA-12-0037")," Write access issue in Database activity module"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203057"},"MSA-12-0038")," Calendar event write permission issue")),(0,o.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32061"},"MDL-32061")," Backup fixed when there is a lesson with attempts in the course"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31789"},"MDL-31789")," Teachers can access a local system file repository in their course"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31008"},"MDL-31008")," CSS fixed to display dimmed objects"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30867"},"MDL-30867")," Lesson essay question formatting fixed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31528"},"MDL-31528")," Breadcrumbs appearing consistently when editing is off"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31631"},"MDL-31631")," Caching fixed so deleted activities do not remain listed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26674"},"MDL-26674")," Wiki Module activity logs activity fully"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31510"},"MDL-31510")," Students in groups see only assignments in the Gradebook according to their group allocation")),(0,o.kt)("h2",{id:"translations"},"Translations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.2.3"},"Notes de mise \xe0 jour de Moodle 2.2.3"))))}h.isMDXComponent=!0}}]);