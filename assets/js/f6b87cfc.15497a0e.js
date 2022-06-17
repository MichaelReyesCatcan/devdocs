"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[78871],{94254:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=a(13904),l=a(11239),s=["components"],u={title:"DevDocs Migration",tags:["Project","Documentation"]},d=void 0,m={unversionedId:"projects/docs/migration",id:"projects/docs/migration",title:"DevDocs Migration",description:"<ProjectSummary",source:"@site/general/projects/docs/migration.md",sourceDirName:"projects/docs",slug:"/projects/docs/migration",permalink:"/devdocs/general/projects/docs/migration",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/projects/docs/migration.md",tags:[{label:"Project",permalink:"/devdocs/general/tags/project"},{label:"Documentation",permalink:"/devdocs/general/tags/documentation"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655463803,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"DevDocs Migration",tags:["Project","Documentation"]},sidebar:"projects",previous:{title:"Moodle Projects",permalink:"/devdocs/general/projects/"},next:{title:"String deprecation",permalink:"/devdocs/general/projects/api/string-deprecation"}},c={},p=[{value:"Candidate selection",id:"candidate-selection",level:2},{value:"New features",id:"new-features",level:2},{value:"Migration plan",id:"migration-plan",level:2},{value:"Initial data migration",id:"initial-data-migration",level:3},{value:"Maturity and growth",id:"maturity-and-growth",level:3},{value:"Sunset",id:"sunset",level:3},{value:"Timeline",id:"timeline",level:2},{value:"Contributing",id:"contributing",level:2}],h={toc:p};function k(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,(0,n.Z)({frontMatter:u},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)(l.ci,{projectName:"docs/migration",mdxType:"ProjectSummary"}),(0,o.kt)("p",null,"The Moodle Developer documentation has been a key resource for all Moodle developers for over fifteen years. The current developer documentation has over 2,000 pages, and is written and updated using the MediaWiki platform. Documentation can be updated after logging in with standard credentials for moodle.org."),(0,o.kt)("p",null,"Anecdotal feedback from a range of sources, including in-person discussions, forum posts, and online discussions suggests that there are a number of limitations with the current approach, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lack of version-specific information"),(0,o.kt)("li",{parentName:"ul"},"large quantities of stale or irrelevant information, including:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"from legacy Moodle versions"),(0,o.kt)("li",{parentName:"ul"},"outdated information"),(0,o.kt)("li",{parentName:"ul"},"abandoned projects"),(0,o.kt)("li",{parentName:"ul"},"docs created in the wrong place"),(0,o.kt)("li",{parentName:"ul"},"docs created for private installations"))),(0,o.kt)("li",{parentName:"ul"},"the ease with which information can be found, including both:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"discoverability - finding relevant information using the interface; and"),(0,o.kt)("li",{parentName:"ul"},"searchability - the quality of the search tools"))),(0,o.kt)("li",{parentName:"ul"},"the ease of editing when most ",(0,o.kt)("em",{parentName:"li"},"developers")," are used to GitHub Formatted Markdown (GFM)"),(0,o.kt)("li",{parentName:"ul"},"slow interface"),(0,o.kt)("li",{parentName:"ul"},"lack of offline availability")),(0,o.kt)("h2",{id:"candidate-selection"},"Candidate selection"),(0,o.kt)("p",null,"As part of an internal process, several sessions were held to identify the key features required to improve the Moodle developer documentation, these included:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"offline availability"),(0,o.kt)("li",{parentName:"ul"},"the ability to link content to specific versions of Moodle"),(0,o.kt)("li",{parentName:"ul"},"the ability to easily remove legacy content"),(0,o.kt)("li",{parentName:"ul"},"markdown compatible"),(0,o.kt)("li",{parentName:"ul"},"the ability to link issues to Moodle tracker issues and hold new features from being integrated until appropriate documentation exists for them"),(0,o.kt)("li",{parentName:"ul"},"improved searching"),(0,o.kt)("li",{parentName:"ul"},"clear landing page to allow relevant information to be found quickly")),(0,o.kt)("p",null,"Different options were assessed, including the option to introduce new features and changes to the existing Wikimedia-based documentation, and migrating to a new documentation system."),(0,o.kt)("p",null,"As part of the process the working group assessed several other solutions, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MDN's Yari tool, used to create the MDN Documentation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Discarded as it is heavily tied to MDN at this time"))),(0,o.kt)("li",{parentName:"ul"},"mkdocs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Discarded as being too immature, in particular due to the number of very immature plugins with no support"))),(0,o.kt)("li",{parentName:"ul"},"Sphinx both natively, and using ReadTheDocs"),(0,o.kt)("li",{parentName:"ul"},"Docusaurus")),(0,o.kt)("p",null,"A number of other tools were also assessed and discarded as they were seen to be immediately unsuitable."),(0,o.kt)("p",null,"Several key documents were migrated to Sphinx, using both ReStructured Text, and Markdown but it was ultimately discarded as the versioning support for Sphinx is restrictive. After migrating a number of key documents we found that some documents needed to be versioned, but many do not."),(0,o.kt)("p",null,"Ultimately the project team selected Docusaurus as the best candidate for migration and more documents were migrated to determine whether it would be fit-for-purpose."),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," is a tool written and managed by Facebook. It is used to document a number of major projects including ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"React Native"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com"},"Algolia Docsearch"),", ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest"),", ",(0,o.kt)("a",{parentName:"p",href:"https://webdriver.io"},"WebdriverIO"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.redis.com"},"Redis Labs"),", ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/flux"},"Flux"),", ",(0,o.kt)("a",{parentName:"p",href:"https://gulpjs.com"},"Gulp"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developers.home-assistant.io/"},"Home Assistant"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"many many more"),"."),(0,o.kt)("p",null,"Out-of-the-box Docusaurus includes support for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Markdown"),(0,o.kt)("li",{parentName:"ul"},"Versioned documentation"),(0,o.kt)("li",{parentName:"ul"},"Versioned and unversioned documentation in the same repository"),(0,o.kt)("li",{parentName:"ul"},"Offline Progressive Web Apps to provide docs as an app, and offline"),(0,o.kt)("li",{parentName:"ul"},"static pages and resources"),(0,o.kt)("li",{parentName:"ul"},"use of standard, and custom React components")),(0,o.kt)("p",null,"In addition, through the use of plugins it is possible to easily add further integrations, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mermaid-js.github.io/mermaid/#/"},"Mermaid diagrams")),(0,o.kt)("li",{parentName:"ul"},"Integrated with the ",(0,o.kt)("a",{parentName:"li",href:"https://moodle.academy"},"Moodle Academy")," to allow for easier cross-linking to relevant training resources [",(0,o.kt)("a",{parentName:"li",href:"https://github.com/moodle/devdocs/issues/60"},"#60"),"]")),(0,o.kt)("p",null,"As we are essentially starting from a fresh slate and migrating documents over to the new system, we have a perfect opportunity to introduce new tooling. The intention is to include, amongst others:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://cspell.org/"},"CSpell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markdownlint/markdownlint"},"Markdownlint")),(0,o.kt)("li",{parentName:"ul"},"Writing style guides using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/errata-ai/vale"},"Vale")," [",(0,o.kt)("a",{parentName:"li",href:"https://github.com/moodle/devdocs/issues/49"},"#49"),"]"),(0,o.kt)("li",{parentName:"ul"},"Checks for links to legacy and obsolete documentation [",(0,o.kt)("a",{parentName:"li",href:"https://github.com/moodle/devdocs/issues/61"},"#61"),"]")),(0,o.kt)("p",null,"By developing the documentation within a Git repository and workflow it is possible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"develop documentation for new Moodle features alongside the feature, and delay the issues integration until documentation is ready"),(0,o.kt)("li",{parentName:"ul"},"download local copies for offline viewing")),(0,o.kt)("p",null,"By hosting that repository in GitHub we can make use of GitHub actions to enable automatic documentation of certain features, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web Service documentation"),(0,o.kt)("li",{parentName:"ul"},"Lists of components, plugins, contributors, and more"),(0,o.kt)("li",{parentName:"ul"},"Third-party libraries"),(0,o.kt)("li",{parentName:"ul"},"upgrade.txt files distributed around Moodle")),(0,o.kt)("h2",{id:"migration-plan"},"Migration plan"),(0,o.kt)("p",null,"Migration from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev"},"Legacy DevDocs")," comes in three main parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sunrise: Initial data migration with the Legacy DevDocs being the authoritative source of information"),(0,o.kt)("li",{parentName:"ul"},"Maturity: The new Documentation becomes authoritative"),(0,o.kt)("li",{parentName:"ul"},"Sunset: The legacy documentation is removed from service")),(0,o.kt)("p",null,"In all cases, migration is a non-trivial affair. While tooling is available to help with migration of individual documents, the process can be time-intensive as each page should be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"assessed to determine whether it is still relevant, or marked as obsolete"),(0,o.kt)("li",{parentName:"ul"},"migrated to the new platform - some automated tooling is available to assist with this"),(0,o.kt)("li",{parentName:"ul"},"updated to remove stale, incorrect, out-of-date, or irrelevant information"),(0,o.kt)("li",{parentName:"ul"},"updated to meet the style of surrounding documentation")),(0,o.kt)("h3",{id:"initial-data-migration"},"Initial data migration"),(0,o.kt)("p",null,"During the initial stage, the legacy wiki will remain open for changes by all contributors."),(0,o.kt)("p",null,"A number of key documents will be migrated to the new platform, including most documents linked from the front page of the legacy docs, that is ",(0,o.kt)("em",{parentName:"p"},"most")," of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Overview, including Mission, Roadmap, Releases, Processes, Meetings, Research, and Testing."),(0,o.kt)("li",{parentName:"ul"},"Plugin development, including documentation for all plugin types"),(0,o.kt)("li",{parentName:"ul"},"Core APIs, including documentation for all core sub-systems"),(0,o.kt)("li",{parentName:"ul"},"Guidelines, including coding styles, guidelines, accessibility, tests, and other related policies"),(0,o.kt)("li",{parentName:"ul"},"Developer tools"),(0,o.kt)("li",{parentName:"ul"},"Moodle App"),(0,o.kt)("li",{parentName:"ul"},"Release notes")),(0,o.kt)("p",null,"In some cases documentation may be marked as obsolete, or the migration may be deferred where it is more time-intensive."),(0,o.kt)("h3",{id:"maturity-and-growth"},"Maturity and growth"),(0,o.kt)("p",null,"Once the initial phase is largely complete, banners will be added to the legacy documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to note that the site is now considered legacy"),(0,o.kt)("li",{parentName:"ul"},"to explain where a page has been migrated, that the page has been moved, providing a link to the new page(s)"),(0,o.kt)("li",{parentName:"ul"},"to explain where a page has been marked as obsolete, giving an opportunity to raise an issue to dispute this and/or provide a patch"),(0,o.kt)("li",{parentName:"ul"},"to encourage authors to try the new system, and migrate a document, or request that a page be marked as obsolete")),(0,o.kt)("p",null,"During this phase the aim is that all remaining documentation is assessed to either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mark it as obsolete"),(0,o.kt)("li",{parentName:"ul"},"mark it as migrated")),(0,o.kt)("h3",{id:"sunset"},"Sunset"),(0,o.kt)("p",null,"Once all of the following criteria are met, and additional time has been allowed, the legacy documentation will be removed from service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all documentation has migrated over or marked as obsolete"),(0,o.kt)("li",{parentName:"ul"},"all versions of Moodle which were covered by the legacy documentation and which are not covered by the new site have been moved ",(0,o.kt)("em",{parentName:"li"},"out")," of ",(0,o.kt)("em",{parentName:"li"},"security")," support")),(0,o.kt)("p",null,"If possible, a static copy of this documentation will be preserved for reference, history, and posterity."),(0,o.kt)("h2",{id:"timeline"},"Timeline"),(0,o.kt)("p",null,"The initial migration of documentation is already in progress and it is hoped that this migration will be complete by the 31st May 2022."),(0,o.kt)("p",null,"The new documentation series only covers Moodle 4.0 onwards. The legacy documentation must remain until security support for older versions of Moodle ends. For Moodle versions 3.9, and 3.11 that is the 13th November 2023. At this time we expect to keep the legacy documentation for a 12 month period following this date."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"We actively welcome community engagement on this project."),(0,o.kt)("p",null,"Development for the new documentation is entirely within the new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs"},"devdocs Github Repository"),"."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/general/documentation/contributing"},"contributing")," guide for more information."))}k.isMDXComponent=!0},11239:function(e,t,a){a.d(t,{ci:function(){return c},e5:function(){return h}});var n=a(67294),i=a(39960),o=a(70891),r=a(18987),l=a(69661),s=a(98181);function u(e){return n.createElement("div",{key:"Person:"+e.name},function(e){return e.githubUsername?n.createElement(o.ZP,{alignItems:"flex-start",key:e.key},n.createElement(r.Z,null,n.createElement(l.Z,{src:"https://avatars.githubusercontent.com/"+e.githubUsername})),n.createElement(i.Z,{to:"https://github.com/"+e.githubUsername},n.createElement(s.Z,{primary:e.name,secondary:e.githubUsername}))):n.createElement(n.Fragment,null,e.name)}(e))}var d="projecttable_Zy3x",m=a(78462);function c(e){return t=h(e.projectName),n.createElement("table",{className:d},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"Owners"),n.createElement("td",null,(l=t.owners)?n.createElement(m.Z,null,l):null)),n.createElement("tr",null,n.createElement("th",null,"Status"),n.createElement("td",null,(r=t.status,n.createElement(n.Fragment,null,r)))),(null==(a=t.discussionLinks)?void 0:a.length)>0&&n.createElement("tr",null,n.createElement("th",null,"Links"),n.createElement("td",null,t.discussionLinks.map((function(e){var t=e.link,a=e.title;return n.createElement("div",{key:a},n.createElement(i.Z,{to:t},a))})))),(null==(o=t.issueLinks)?void 0:o.length)>0&&n.createElement("tr",null,n.createElement("th",null,"Issues"),n.createElement("td",null,t.issueLinks.map((function(e){var t=e.link,a=e.title;return n.createElement("div",{key:a},n.createElement(i.Z,{to:t},a))}))))));var t,a,o,r,l}var p=JSON.parse('{"q":{"docs/migration":{"title":"Dev Docs Migration","status":"In Progress","owners":[{"name":"Andrew Lyons","githubUsername":"andrewnicols"},{"name":"Sara Arjona","githubUsername":"sarjona"}],"discussionLinks":[{"link":"https://moodle.org/mod/forum/discuss.php?d=433613","title":"Announcement"}]},"api/string-deprecation":{"title":"String deprecation","status":"Complete","owners":[{"name":"Marina Glancy","githubUsername":"marinaglancy"}],"issueLinks":[{"link":"https://tracker.moodle.org/browse/MDL-46585","title":"MDL-46585"}]},"api/amos":{"title":"Automated Manipulation of Strings (AMOS)","status":"Complete","owners":[{"name":"David Mudrak","githubUsername":"mudrd8mz"}],"discussionLinks":[{"link":"http://moodle.org/mod/forum/discuss.php?d=118707#p542197","title":"Discussion"}],"issueLinks":[{"link":"https://tracker.moodle.org/browse/MDL-18797","title":"MDL-18797"}]}}}'),h=function(e){if(!p.q[e])throw new Error("Unknown project "+e);var t=p.q[e];return{projectName:e,title:t.title,owners:t.owners.map((function(e){return u(e)})),status:t.status,issueLinks:t.issueLinks,discussionLinks:t.discussionLinks}}}}]);