(this.webpackJsonpuntitled1=this.webpackJsonpuntitled1||[]).push([[3],{294:function(t,e,s){t.exports={allocation:"ProfileInfo_allocation__15Jq3",posts:"ProfileInfo_posts__3fmoj",image:"ProfileInfo_image__3wY_j",icons:"ProfileInfo_icons__1w1-r",job:"ProfileInfo_job__2-Eu2",floatForImages:"ProfileInfo_floatForImages__20WvA"}},296:function(t,e,s){t.exports={posts:"MyPosts_posts__3tZ1c",button:"MyPosts_button__2WbpQ"}},299:function(t,e,s){},300:function(t,e,s){t.exports={item:"Post_item__ihtu9"}},301:function(t,e,s){"use strict";s.r(e);var n=s(3),i=s(0),o=s.n(i),r=s(299),a=s.n(r),c=s(65),A=s(294),u=s.n(A),j=s.p+"static/media/witcher.ecd9f284.jpg";var b=s(95);function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,i=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(n=(r=a.next()).done)&&(s.push(r.value),!e||s.length!==e);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return s}}(t,e)||Object(b.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=s(1),m=function(t){var e=l(Object(i.useState)(!1),2),s=e[0],n=e[1],o=l(Object(i.useState)(t.status),2),r=o[0],a=o[1];Object(i.useEffect)((function(){a(t.status)}),[t.status]);return Object(d.jsx)("div",{children:s?Object(d.jsx)("textarea",{autoFocus:!0,onChange:function(t){return function(t){a(t.currentTarget.value)}(t)},onBlur:function(e){n(!1),t.updateStatus(r)},value:r}):Object(d.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"There is no status yet"})})},h=function(t){return t.profile?Object(d.jsxs)("div",{className:u.a.allocation,children:[Object(d.jsx)("div",{className:u.a.image,children:Object(d.jsx)("img",{height:"100%",width:"105%",src:t.profile.photos.large?t.profile.photos.large:j})}),Object(d.jsxs)("div",{className:u.a.icons,children:[Object(d.jsxs)("div",{className:u.a.job,children:[Object(d.jsxs)("div",{children:["Something about JOB status:"," ",t.profile.lookingForAJobDescription,"."]}),Object(d.jsxs)("div",{children:["Full Name: "," "+t.profile.fullName]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:Object(d.jsx)(m,{status:t.status,updateStatus:t.updateStatus})})}),Object(d.jsxs)("span",{className:u.a.floatForImages,children:[Object(d.jsx)("a",{href:t.profile.contacts.instagram,children:Object(d.jsx)("img",{height:50,width:50,src:"data:image/png;base64,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"})}),Object(d.jsx)("a",{href:t.profile.contacts.vk,children:Object(d.jsx)("img",{height:50,width:50,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFGElEQVRoge2aa2yTVRjH/+f0XbXd1snY1g3YBGLAZe4CqwQTuQghDJUPGkfQGIUEopAYMI4aE0k0QQvMxQRFjH4wRAggSoLRbUoQhA8qt2QX3MUJ2aVruy27tGO9vJfjBxms7XnX9+0I68h+3/o85/Y/7znPec5JCThYK+qyCCE2SmBlQBKvzP2GAKLC4IEgXXY7Fvdy/HfJsTfkE7BKBqwDQO/bKPUhM0aqqcDs3Y6i5lHjHSHZ79avIwzfAUiZlOHpZxiMlbsqi2uB20Jy7A35ALuEqSNiFB8xYEm3o6iZAgCBsh9TTwQApCoy9gEAsVbUZVFKXEjcPRELRRbILEoIsWHqigAAahCVRRRgGZM9konCgCwKkKn8NW5D6AMg4n+mhSQa00ISjQdGiBCrgIESbCh9BOnJd4syBpxt9qHFEwgrm2Yy4JUnZ4BSEtkMAOBMkxetnqBqX3NnGlFWYIFhTH2vX8axywOQFDYxIcVzTKh6aU6UfevTM7FkbwtE+W4Hyx5Lwe7nclTbKpxtwptHO7g+UxLF8S3zkJdujPLVO/2o6/KPO86YS6vXJ3HtVksSnlmYGmY70+TFv73qM242qne3dVkGV4TXL6PJHeDUCCemEOdgCP23+GJeKEkL+x2UGA7+HnV5i8kMswHbV/AzpcN/9iMkjb+sAA1CFAZcbBvm+tbkW5AcMctX20didhpJxRorLA8bouwDIzIOXdA2MZqi1vlWvhCzkaKswBJm86gsRTWK55jw2tJ0rm9vrRuDI7KmdjQJqb3uRVDl876xPAOEH6RiIlCC/S/ODotSo9R1+XH0Ur/mtjQJGfLL+LlhiOt7YpYJqyI2vVbsa60onG2KsksKg/2UEzEibhiaD8RDF3rBVBresSpL91dZuSAV21dkcn0Hz/eiwTl+uI1Es5Dr3QH81uLj+myPmvH60pkx21hofQgZKQLW5Fvwxcu54J2bze4APj3bo3VYd4h5II7loxo3Vi5I4a7p95/Nxh83biEoKar1c2cYUb87f9w+dv3g1BRuI9GVazW7AziisgHNRorT2+bjs425ugcxSu+whGud+sM3EEfS6KjxwDkocn0WkwGleea4BgIAmSkCNmlYojx0C/EGZLzzfZfqxp8oH6zPwZK5ybrrxZXGX/hnGAfO6d+QN/qCWLSnCVu+bVc9OJMMBF+9mofsNH1v53HfRyp/9aCm0aurzs2+EDw+CdWNXpQdaEObSoKZlSrg4MZcblBRI24hCgO2HevAOZWQzGPsavR4RWz4+iY6B0Lcsk/NT8bO1Vma257QDTEkMWw63I4TVwbiqu8eErH5cDv8Ij9k71yVicUag8eEr7qizPD2yS7sONGF4aD6GaLG364A3jreyQ0eBkrw4focTVnDPbuzn7w2gOVVrTjyl/r9QVSxVzd68eXFPq6vNM+MgpzofCwSXSd7LNxDIuynnPi41o3nC9OwdF4y8tKNMAoEriERn59Xv1vsqXbhVlDG6sdTwzZ537CEjn7+PhoLyd5Vv4kQfHNPlEwSjGHzA/McNC0k0ZgWkmhQgOk/xRIOplBQov9FLcEgQA9lMrsKQNvjUWIiE0W8Qj2fFPcwRqonezRxw/BTd5WtjwIAFZgdAP85MbHxUUGxA7ejVrejqBmMlWNqifGBKOVOR0krMCb8uiqLawmYjQE/IrH3jAyG09Sg2Fz7Sn4ZNXIz/ez3rmVCEWyUITuh/nhG4KZS6HJ3lS0q5/8PCve3/x7pMf0AAAAASUVORK5CYII="})}),Object(d.jsx)("a",{href:t.profile.contacts.github,children:Object(d.jsx)("img",{height:50,width:50,src:"data:image/png;base64,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"})}),Object(d.jsx)("a",{href:t.profile.contacts.facebook,children:Object(d.jsx)("img",{height:50,width:50,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAB1klEQVRYhe2Xv0vDQBTHv7mcifVXLSoOIlp0EHRxsosigi6KIKKTi5soboKCk4Ozm5uoOPkXCILQQRB0EheH1moRFOtPYqnR9OIgiG2useWaNkM+48u745N793iJNLJ8tMQkMggXQkwWpkwigzG9c7TcMjyCagSk3BL/4QmK4gny8PsIfIqUVy512AUA0NpAMTtQg/6uSrQ1UpA/bp+GiZckw8xmArGEUXrB6VA11ibrUSHzT0yhEpr9cs7njgoOdVdifSoAKb9qcnHsDipUwvq0mBzgoOBwjw9NtbLwPo6VuK9T5ca1D4b9kySuEga0FPuN372mufmOCbY3WbfWDRMTGw+45nRrLhwrcZ3PevnOonpBcoCDgpRYBRMa42TaU9JJYpqFr3H9LBZuEipLqObMVZnz6gr9mcPZGMxEUucfr7BgqEPFzlxjXrljvVUY662yxA8vUpjffuKucUWJbx5zd7YrBONuF3T9CdoJCjfJ5d0XFnetF3xlvB4tgcyPhdOojr3jd0vu/Rt/DhdF8FFL4+A8ZYkvDNcBWYK3z/xcO1xRYjs8QVE8QVE8QVE8QVE8QVE8QVEoMVk4qEaKvvHqVpzKBBl/U58GY0HVyP1tlQUxWfgbPD18Cl3nKiwAAAAASUVORK5CYII="})})]})]})]}):Object(d.jsx)(c.a,{})},O=s(135),g=s(296),p=s.n(g),x=s(300),f=s.n(x),v=function(t){return Object(d.jsxs)("div",{className:f.a.item,children:[Object(d.jsx)("img",{src:"https://media.npr.org/assets/img/2021/04/27/prancer_wide-db59609b5bd96c9e56e4dfe32d198461197880c2.jpg?s=1400"}),Object(d.jsx)("div",{children:t.postMessage}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[t.likesCount," likes!"]}),Object(d.jsx)("button",{children:"like"})]})]})},w=s(125),Q=s(126),G=s(49),R=s(88),k=Object(G.b)(50),P=Object(Q.a)({form:"AddNewPostForm"})((function(t){return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(w.a,{component:R.b,name:"newPostText",placeholder:"Write your message here",validate:[G.d,k]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:p.a.button,children:"Add post"})})]})})),C=o.a.memo((function(t){console.log("Render YO");var e=-1,s=t.postInfo.map((function(t){return e++,Object(d.jsx)("nav",{children:Object(d.jsx)(v,{postMessage:t.postMessage,id:t.id,likesCount:t.likesCount})},e)}));return Object(d.jsxs)("div",{className:u.a.posts,children:["My posts",Object(d.jsx)("div",{children:Object(d.jsx)(P,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(d.jsx)("div",{className:p.a.posts,children:s})]})})),I=s(15),V=Object(I.b)((function(t){return{postInfo:t.profilePage.postInfo}}),{addPost:O.addPost})(C),E=function(t){return Object(d.jsxs)("div",{className:a.a.content,children:[Object(d.jsx)("div",{className:a.a.info,children:Object(d.jsx)(h,{profile:t.profilePage.profile,isAuth:t.isAuthorized,status:t.status,updateStatus:t.updateStatus})}),Object(d.jsx)("div",{className:a.a.posts,children:Object(d.jsx)(V,{})})]})},S=s(9),z=s(10);e.default=Object(z.compose)(Object(I.b)((function(t){return{profilePage:t.profilePage,authorizedUserId:t.auth.id,status:t.profilePage.status,isAuthorized:t.auth.isAuthorized}}),{getProfile:O.getProfile,getStatusThunkCreator:O.getStatusThunkCreator,updateStatus:O.updateStatus}),S.f)((function(t){return Object(i.useEffect)((function(){var e=t.match.params.userId;e||(e=t.authorizedUserId),e&&(t.getProfile(e),t.getStatusThunkCreator(e))}),[t.match.params.userId,t.authorizedUserId]),t.match.params.userId||t.isAuthorized?Object(d.jsx)(E,Object(n.a)({},t)):Object(d.jsx)(c.a,{})}))}}]);
//# sourceMappingURL=3.f7b8b41b.chunk.js.map