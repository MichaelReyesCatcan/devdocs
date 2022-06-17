"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[89509],{27211:function(e,t,i){i.r(t),i.d(t,{assets:function(){return A},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=i(83117),d=i(80102),o=(i(67294),i(3905)),a=i(13904),r=["components"],s={title:"DML exceptions",tags:["core_dml","DB","API","core","exception"]},c=void 0,l={unversionedId:"apis/core/dml/exceptions",id:"apis/core/dml/exceptions",title:"DML exceptions",description:"The DML API uses a selection of exceptions to indicate errors.",source:"@site/docs/apis/core/dml/exceptions.md",sourceDirName:"apis/core/dml",slug:"/apis/core/dml/exceptions",permalink:"/devdocs/docs/apis/core/dml/exceptions",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/core/dml/exceptions.md",tags:[{label:"core_dml",permalink:"/devdocs/docs/tags/core-dml"},{label:"DB",permalink:"/devdocs/docs/tags/db"},{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"core",permalink:"/devdocs/docs/tags/core"},{label:"exception",permalink:"/devdocs/docs/tags/exception"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655463803,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"DML exceptions",tags:["core_dml","DB","API","core","exception"]},sidebar:"docs",previous:{title:"DML drivers",permalink:"/devdocs/docs/apis/core/dml/drivers"},next:{title:"Plugin types",permalink:"/devdocs/docs/apis/plugintypes/"}},A={},p=[{value:"Types of exception",id:"types-of-exception",level:2},{value:"dml_connection_exception",id:"dml_connection_exception",level:3},{value:"dml_read_exception",id:"dml_read_exception",level:3},{value:"dml_write_exception",id:"dml_write_exception",level:3},{value:"See also",id:"see-also",level:2}],u={toc:p};function f(e){var t=e.components,c=(0,d.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,(0,n.Z)({frontMatter:s},void 0!==l?{metadata:l}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/core/dml/"},"DML")," API uses a selection of exceptions to indicate errors."),(0,o.kt)("h2",{id:"types-of-exception"},"Types of exception"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DML Exceptions",src:i(75495).Z,width:"594",height:"137"})),(0,o.kt)("h3",{id:"dml_connection_exception"},"dml_connection_exception"),(0,o.kt)("p",null,"Thrown when can not connect to database for any reason."),(0,o.kt)("h3",{id:"dml_read_exception"},"dml_read_exception"),(0,o.kt)("p",null,"Problem occurred during reading from database. Originally indicated be returning ",(0,o.kt)("em",{parentName:"p"},"false")," - this value was often confused with ",(0,o.kt)("em",{parentName:"p"},"false")," return value meaning ",(0,o.kt)("em",{parentName:"p"},"not found"),"."),(0,o.kt)("h3",{id:"dml_write_exception"},"dml_write_exception"),(0,o.kt)("p",null,"Problem occurred during writing to database. Originally indicated be returning ",(0,o.kt)("em",{parentName:"p"},"false"),"."),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Exceptions"},"Exceptions"),": General guidelines for using of exceptions in Moodle 2.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/core/dml/"},"DML functions"),": Where all the functions used to handle DB data. (",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_manipulation_language"},"DML"),") are defined."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/core/dml/ddl"},"DDL functions"),": Where all the functions used to handle DB objects (",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_Definition_Language"},"DDL"),") are defined.")))}f.isMDXComponent=!0},75495:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlIAAACJCAIAAABo20HhAAAAA3NCSVQICAjb4U/gAAANeklEQVR4nO3dTWjb9h/H8Z9ihyQOpfghTg7t6GkP7NwZGxPomprBMAwfdkoobLBjCyUPdfq4DpdCSu3sUlJGA6PQ8yjbrmPrrS2kh0FCL6kbx2uapFlMsziJo/9Bnebasuz2b8u2fu/XIaQ/9PCV9I0+kpwqiqqqArARRVGaXUIb4Acf0upodgFAPZF5NWJHQVrOZhcA1B+3Mua0zFMUhR0FCXG3B8iLez5IiNgDZKTf55F8kA2xB0iK5IOciD1AXiQfJETsAVIj+SAbYg+QHckHqRB7AEg+SITYAyAEyQdpEHsAXiP5IANiD8B/SD7YHi8nA2REqkFaxB4gnaqv4iQUYWM85ISMzE/ryr8sq+f/0S51Ai2C2ANKqaramn+awDDhWrNUoGURewAAiRB7kMXy8nIwGHS5XJOTk/qgoij9/f3j4+PhcPjChQtvu8zNzc1YLNbT03P06NF0Oq0NRqPRmZkZIcTMzEw0GtUGd3d3z5w509fX53a7k8mkyeyKokxOTrpcrmAwmM1m9UH9j+Tp93yGD2MzmUw4HO7q6gqHw5lMRp/y1q1bPp/P7/ffu3fvbTcTsBNiD7IYGxsbHBxcW1vb2dkpHr9y5crU1NTIyMidO3fedpnxeNzv96+vr8disdHRUW1weno6lUptbW0lk8np6Wlt8PLly/Pz83Nzc0+fPn3+/LnJ7EKIvb29tbW1wcHBs2fPaiP6c9fiB7CGD2NHR0dDodDGxkYgEBgbG9PHFxcX0+n0tWvXJiYm3nYzAVtRARsx6Wqfz5fNZlVVXV5eFkWZ8erVK+1rZ2dnyaKqrm5gYCCTyaiqurGx4fF49PGLFy8eO3bs0qVL+sihQ4eePHlSy+xCCK3ObDbr9/urllQyWLyZPp9Pn2Z9fV1V1Xw+73A4qm4XJwfYmKLyeThsRHviZ9jVDodjd3e3o6OjUCg4nU5tGkVRVFUt/lq8qKo/HU6nU1vd/v6+oij7+/va+MLCwocffriwsPD+++/rU2qRU3V2RVEKhYJWZ1dX197ennlJJYPFm6nPXjxNLdtlshuBdsdDTsjC6/W+ePFCCLGyslLL9Fr8mE8zMDCQy+UKhYIWXfp4IpEYHh5OJBLFUy4uLtY4u1bn6uqqx+MpmaVqFLndbn0z3W63+cSAhIg9yCISiaRSqe3tbf03SswdOXLk/v375tPEYrFz587lcrl0On3y5EltcG5u7tGjR7Ozsw8ePHj8+LE2ODIycvr06Ww2m8vlzp8/bzK7ECKZTG5vb6dSqUgkUrw6j8fz8OFD85KGhoa02W/cuHH8+PFathSQi+WPVYEGMunqpaWlQCDQ3d0dj8fFm78kUvxVd/fu3QMHDpj/jORyueHh4d7e3sOHD8/OzmqDJ06c0L6/fft2JBLRBvP5/KlTp7xe78GDB6empkxmF0KMj493d3cHAoGlpaXi1V29etXlcokKv8yiDabT6WAw2NnZGQqFnj17VryZ5d9XwskBNsZne7AVG3woVctnbxbUINp8NwKV8JATACARXkUNVMdbwQDbIPaA6qxMONIUaCgecgIAJELsAQAkQuwBACRC7AEAJELsAQAkwm9ywoYM/78BAAju9gAAUmn+a5AA2fDqL6CJuNsDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEhEUVW12TW0IkVRml0CAFhNhkTgbg8AIBFnswtoaTJc+KAtaI8faEg0jjyPuLjbAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2AMASITYAwBIhNgDAEiE2HtNURTzPy5cdQKgjmhINJq0PeZsdgGtRTvGqqqWDwLWoyHRaBL2mFKytTKreqTZV7ASDYlGk7PHeMgJAJAIsfcf8+saW171oJXRkGg0OXuM2AMASITYe0Olqxu7XvWgxdGQaDQJe4zYAwBIhNgrVX6NY+OrHrQ+GhKNJluPEXsAAIkQewaKr3TsfdWDtkBDotGk6jFiDwAgETu/gQbvoN0v9Oz9UqV21O4dpaGv2kKNzcbdHt7Ajzfqi46CZWpsttcT2eOKDP8nvWnatx8M36uLZrFBR2noq9ZXe7NxtwcDXKGjvugoWKZqsxF7eIN+ocR5CnVBR8EyNTYbsYdSnKdQX3QULFNLsxF7MMB5CvVFR8EyVZuN2IMxzlOoLzoKljFvNmIPFXGeQn3RUbCMSbMRezDDeQr1RUfBMpWajdhDFZynUF90FCxj2GzEHqrjPIX6oqNgmfJmI/ZQE85TqC86CpYpaTZnU4tBy+EchPqio2CZGpuN2MN/qr7LjlMY3godBcvU3my1PuQ0707lXzUurQW1dfGG7LdFddSC/dz6x6v1K2y6ZvWV/Q5NQ7eoPp/tqaraRu8mN9yhbVR/OfttUXO1Vz83Ah3VCI3rK8PFtksWWt9s/EoLAEAiZrG3vLwcDAZdLtfk5KQ+qChKf3//+Ph4OBy+cOHC265vd3f3zJkzfX19brc7mUxqg5lMJhwOd3V1hcPhTCajr+jWrVs+n8/v99+7d89kcHNzMxaL9fT0HD16NJ1Om6xIf8JQ/KjB8MlD7SUZMiwpGo3OzMwIIWZmZqLRqEmdhrMrijI5OelyuYLBYDabtXiLbKAR/awt4fr16++9915vb+/169dFhcO3uLgYiUS6u7s//fTTxcVFk5IM0VEtq+599cEHH/z555/6P3d2dvr7+58/fy6Mms3w0BgeRMMeMGT7ZjOLvbGxscHBwbW1tZ2dneLxK1euTE1NjYyM3Llzp/Y1aS5fvjw/Pz83N/f06VPtQAohRkdHQ6HQxsZGIBAYGxvTJ15cXEyn09euXZuYmDAZjMfjfr9/fX09FouNjo6arEh/yFD8tMHwycNblVTOsKTp6elUKrW1tZVMJqenp03qNJxdCLG3t7e2tjY4OHj27FmLt8gGGtHPmt9///2PP/5YWlr69ddfRYXDNzQ0NDEx8ffff3/xxRdff/21eUnl6KiWVfe+ikajP/30k/7PX3755eOPP+7v79f+WdJshofG8CBW6oFysjSbasTn82WzWVVVl5eXi6t59eqV9rWzs7N4+krLKXbo0KEnT56YrMjn8+lLW19fV1U1n887HA6TwYGBgUwmo6rqxsaGx+MxWZFJnSWDtZdkyLAkVVUvXrx47NixS5cume8Qw9mFEFpJ2WzW7/dbvEX69LUc5SayuJ+1yZaWlopHKh19zT///NPT02NSkiE6qrms7Kvffvvtk08+WV1ddTgcL1++jMViN2/e1OctaTaTZZYMmrdlLVPaptnMYq+jo6NQKKiqure3J95M5uKv5tWXcDgce3t7JisqTrjyJRsOOhwOh8PR0dEhhFAUxWRFJnWWDNZeUqXNLC9JVdX5+XkhxMLCQvGU5XUazi6EKC/Jsi3Sp2nxk5TF/Ww4meHh+/nnnz/66COHw1FcoWFJhuio5rKyr3Z3dz0ez82bN51O548//uhyuVZWVsznreV4VWqhcrZvNrOHnF6v98WLF0KIlZUVk8l0iqIUCgXzaQYGBvQPNnRut1tfkdvtrmVdJcvM5XLaTtnf3zdZkU7fBZU0oiQhRCKRGB4eTiQSxVOW11lpdq2k1dVVj8dj8RbZQCP62ZDh4fvqq68SicTW1tbm5uY7lERHtay695XT6fzss8++/fbbzz//PB6Ph0Khvr6+d6ut+CBW6oFytm82s9iLRCKpVGp7e1v/rNLckSNH7t+/bz7NyMjI6dOns9lsLpc7f/68Njg0NJRMJre3t2/cuHH8+PEaS9fFYrFz587lcrl0On3y5EmTFWk8Hs/Dhw/Nl9mIkubm5h49ejQ7O/vgwYPHjx+b1Gk4uxBCKymVSkUiEYu3yAYa0c+GDA/f9vZ2X19fPp//7rvv3qEkOqplNaKvotHoX3/99c0332QymS+//PLdCis5iJV6oJwszWZ4S7i0tBQIBLq7u+PxuKjh5v3u3bsHDhyotDRNPp8/deqU1+s9ePDg1NSUNphOp4PBYGdnZygUevbsmckNrOFgLpcbHh7u7e09fPjw7OysyYo0V69edblcxcss3xW1l2TIsKQTJ05o39++fTsSiZjUaTi7EGJ8fLy7uzsQCJQ837dgi4qXXHWyJrK4n8vnUiscvh9++MHj8bjd7u+//16fxbAkQ3RUc1ncVy9fvvT5fIVCwev1rq6uFpdhWJjhmbzkIBr2gCHbN5uifyfQ2rSn5E2vQbR2t7R+ha2Djqpdu9TZslqq2fjv6gAAiTTqVdSSvNxIks2EZQeajpJKcw+3tM3WqNiTYd8JazdTkl3amizb+XSUVJp7CKRtNh5yAgAkQuwBACRC7AEAJELsAQAkQuwBACTy+jc52+Xv8AK1oJ/RCPSVPXC3BwCQSPNfGAMAgGX+B/9bzdBSWLFnAAAAAElFTkSuQmCC"}}]);