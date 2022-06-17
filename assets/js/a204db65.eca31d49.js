"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[78670],{83632:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return c}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(13904),s=["components"],d={title:"Repeat elements",tags:["core_form","core","Forms API","Advanced"]},l=void 0,m={unversionedId:"apis/subsystems/form/advanced/repeat-elements",id:"apis/subsystems/form/advanced/repeat-elements",title:"Repeat elements",description:"The Form API includes the ability to repeat a group of form elements. This is useful where you need to have an unknown quantity of item data, for example possible answers in a quiz question.",source:"@site/docs/apis/subsystems/form/advanced/repeat-elements.md",sourceDirName:"apis/subsystems/form/advanced",slug:"/apis/subsystems/form/advanced/repeat-elements",permalink:"/devdocs/docs/apis/subsystems/form/advanced/repeat-elements",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/form/advanced/repeat-elements.md",tags:[{label:"core_form",permalink:"/devdocs/docs/tags/core-form"},{label:"core",permalink:"/devdocs/docs/tags/core"},{label:"Forms API",permalink:"/devdocs/docs/tags/forms-api"},{label:"Advanced",permalink:"/devdocs/docs/tags/advanced"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655463803,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"Repeat elements",tags:["core_form","core","Forms API","Advanced"]},sidebar:"docs",previous:{title:"Advanced elements",permalink:"/devdocs/docs/apis/subsystems/form/advanced/advanced-elements"},next:{title:"Form Usage",permalink:"/devdocs/docs/apis/subsystems/form/usage"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,a.Z)({frontMatter:d},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"The Form API includes the ability to repeat a group of form elements. This is useful where you need to have an unknown quantity of item data, for example possible answers in a quiz question."),(0,i.kt)("p",null,"This is achieved by adding a button to the form to handle the creation of the additional buttons using a page reload, and a zero-indexed array added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"elementname")," data returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"get_data()"),"."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Most of the necessary information is in the phpdoc comment for the repeat_elements() method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Method to add a repeating group of elements to a form.\n *\n * @param array $elementobjs Array of elements or groups of elements that are to be repeated\n * @param int $repeats no of times to repeat elements initially\n * @param array $options a nested array. The first array key is the element name.\n *    the second array key is the type of option to set, and depend on that option,\n *    the value takes different forms.\n *         'default'    - default value to set. Can include '{no}' which is replaced by the repeat number.\n *         'type'       - PARAM_* type.\n *         'helpbutton' - array containing the helpbutton params.\n *         'disabledif' - array containing the disabledIf() arguments after the element name.\n *         'rule'       - array containing the addRule arguments after the element name.\n *         'expanded'   - whether this section of the form should be expanded by default. (Name be a header element.)\n *         'advanced'   - whether this element is hidden by 'Show more ...'.\n * @param string $repeathiddenname name for hidden element storing no of repeats in this form\n * @param string $addfieldsname name for button to add more fields\n * @param int $addfieldsno how many fields to add at a time\n * @param string $addstring name of button, {no} is replaced by no of blanks that will be added.\n * @param bool $addbuttoninside if true, don't call closeHeaderBefore($addfieldsname). Default false.\n * @return int no of repeats of element in this page\n */\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The list of elements you wish to repeat is set in the ",(0,i.kt)("inlineCode",{parentName:"li"},"$elementobjs")," array, with any options passed into the ",(0,i.kt)("inlineCode",{parentName:"li"},"$options")," array.\nA ",(0,i.kt)("inlineCode",{parentName:"li"},"{no}")," placeholder can be placed into strings, such as the element label or default values, to represent the item number.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While the elements are zero-indexed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"{no}")," label is one-indexed."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of repeats to show initially can be configured using the ",(0,i.kt)("inlineCode",{parentName:"li"},"$repeats")," parameter."),(0,i.kt)("li",{parentName:"ul"},"The number of elements to add when adding more options is configured using the ",(0,i.kt)("inlineCode",{parentName:"li"},"$addfieldsno")," parameter."),(0,i.kt)("li",{parentName:"ul"},"The label used for the 'Add more' button can be set using the ",(0,i.kt)("inlineCode",{parentName:"li"},"$addstring")," parameter. A ",(0,i.kt)("inlineCode",{parentName:"li"},"{no}")," placeholder can be used in the string to indicate how many repeats will be added."),(0,i.kt)("li",{parentName:"ul"},"The number of element repeats currently shown is stored in a hidden element, whose name can be specified using the ",(0,i.kt)("inlineCode",{parentName:"li"},"$repeathiddenname")," parameter.")),(0,i.kt)("p",null,"The following example shows how ",(0,i.kt)("inlineCode",{parentName:"p"},"repeat_elements()")," can be used within a form definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="definition() function"',title:'"definition()','function"':!0},"$repeatarray = [\n    $mform->createElement('text', 'option', get_string('optionno', 'choice')),\n    $mform->createElement('text', 'limit', get_string('limitno', 'choice')),\n    $mform->createElement('hidden', 'optionid', 0),\n];\n\n\nif ($this->_instance){\n    $repeatno = $DB->count_records('choice_options', ['choiceid' => $this->_instance]);\n    $repeatno += 2;\n} else {\n    $repeatno = 5;\n}\n\n$repeateloptions = [\n    'limit' => [\n        'default' => 0,\n        'disabledif' => array('limitanswers', 'eq', 0),\n        'rule' => 'numeric',\n        'type' => PARAM_INT,\n    ],\n    'option' => [\n        'helpbutton' => [\n            'choiceoptions',\n            'choce',\n        ]\n    ]\n];\n\n$mform->setType('option', PARAM_CLEANHTML);\n$mform->setType('optionid', PARAM_INT);\n\n$this->repeat_elements(\n    $repeatarray,\n    $repeatno,\n    $repeateloptions,\n    'option_repeats',\n    'option_add_fields',\n    3,\n    null,\n    true\n);\n")),(0,i.kt)("p",null,"For other examples, have a look at the question type editing forms. They make extensive use of repeat_elements()."))}h.isMDXComponent=!0}}]);