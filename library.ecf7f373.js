!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);document.querySelector(".btn-queue"),document.querySelector(".gallery-library__list"),document.querySelector(".empty");var d=o("bpxeT"),r=o("2TvXO"),i=o("kPudI"),c=o("4mCOx"),l=o("juZTq"),u=o("jVDuT"),s=o("gIqCw"),m=o("h4oNJ"),v={watchedBtn:document.querySelector(".btn-watched"),queueBtn:document.querySelector(".btn-queue"),watchedList:document.querySelector(".gallery-library__list"),textOoops:document.querySelector(".empty")},f=1;function h(){var e=(0,m.loadFromLocalStorage)("watched");if(f=1,e)return 0===e.length?(v.textOoops.classList.remove("visually-hidden"),void(v.watchedList.innerHTML="")):void L(e)}function L(e){var t=e;if(0===t.length)return v.textOoops.classList.remove("visually-hidden"),void(v.watchedList.innerHTML="");var a=t.reduce((function(e,t){return e+(0,u.makeLibraryGalleryMarkUp)(t)}),"");v.textOoops.classList.add("visually-hidden"),v.watchedList.innerHTML="",v.watchedList.classList.remove("visually-hidden"),v.watchedList.insertAdjacentHTML("beforeend",a),(0,s.default)()}v.watchedBtn.classList.add("active"),v.watchedBtn.addEventListener("click",(function(){v.watchedBtn.classList.add("active"),v.queueBtn.classList.remove("active")})),v.queueBtn.addEventListener("click",(function(){v.queueBtn.classList.add("active"),v.watchedBtn.classList.remove("active")})),window.addEventListener("load",h),v.watchedBtn.addEventListener("click",h),v.queueBtn.addEventListener("click",(function(){var e=(0,m.loadFromLocalStorage)("queue");if(f=2,!e)return;if(0===e.length)return v.textOoops.classList.remove("visually-hidden"),void(v.watchedList.innerHTML="");L(e)})),window.addEventListener("load",(function(){v.watchedBtn&&(v.watchedBtn.checked=!0,v.watchedBtn.parentNode.classList.add("checked"))}));var w=o("cDXQO"),y=(m=o("h4oNJ"),document.querySelector(".modal-movie__trailer-btn")),q={libraryListOfWatched:document.querySelector(".gallery-library__list"),movieModalContainer:document.querySelector(".modal-movie"),movieModalCommandBtns:document.querySelectorAll(".modal-movie__command-btns"),btnAddToWatched:document.querySelector(".modal-movie__add-to-watched-btn"),btnQueue:document.querySelector(".modal-movie__add-to-queue-btn")};function p(){return(p=e(d)(e(r).mark((function t(a){var n,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=function(){(0,w.handleApiTrailerData)(n),y.removeEventListener("click",o)},n=a.target.dataset.id,(0,m.createArrayLocalStorage)("watched"),(0,m.createArrayLocalStorage)("queue"),(0,m.renameBtn)(q.btnAddToWatched,"watched","Add to watched","Remove from watched",n,"active-btn--yellow"),(0,m.renameBtn)(q.btnQueue,"queue","Add to queue","Remove from queue",n,"active-btn--yellow"),b=(0,c.fetchPictures)(n),"IMG"===a.target.nodeName||"P"===a.target.nodeName||"H2"===a.target.nodeName||"H3"===a.target.nodeName||"B"===a.target.nodeName){e.next=9;break}return e.abrupt("return");case 9:(0,i.handleModalOpenClose)(),q.movieModalContainer.classList.add("modal-movie--background-yellow"),(0,l.handleApiData)(n,"modal-movie__meta-data--yellow"),q.movieModalCommandBtns.forEach((function(e){e.classList.add("modal-movie__command-btns--yellow")})),document.body.style.overflow="hidden",y.addEventListener("click",o);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}q.libraryListOfWatched.addEventListener("click",(function(e){return p.apply(this,arguments)})),(0,m.removeLocalStorage)("watched"),(0,m.removeLocalStorage)("queue");var b={},g=document.querySelector(".modal-movie__add-to-watched-btn"),S=document.querySelector(".modal-movie__add-to-queue-btn");g.addEventListener("click",(function(){b.then((function(e){var t=(0,m.loadFromLocalStorage)("watched");if(t.find((function(t){return t.id===e.id}))){var a=t.findIndex((function(t){return t.id===e.id}));t.splice(a,1),localStorage.setItem("watched",JSON.stringify(t)),(0,m.renameBtnTextCont)(g,"Add to watched"),g.classList.remove("active-btn--yellow"),1===f&&L(t)}else t.push(e),(0,m.saveToLocalStorage)("watched",t),(0,m.renameBtnTextCont)(g,"Remove from watched"),g.classList.add("active-btn--yellow"),1===f&&L(t)}))})),S.addEventListener("click",(function(){b.then((function(e){var t=(0,m.loadFromLocalStorage)("queue");if(t.find((function(t){return t.id===e.id}))){var a=t.findIndex((function(t){return t.id===e.id}));t.splice(a,1),localStorage.setItem("queue",JSON.stringify(t)),(0,m.renameBtnTextCont)(S,"Add to queue"),S.classList.remove("active-btn--yellow"),2===f&&L(t)}else t.push(e),(0,m.saveToLocalStorage)("queue",t),(0,m.renameBtnTextCont)(S,"Remove from queue"),S.classList.add("active-btn--yellow"),2===f&&L(t)}))})),o("7F1pg")}();
//# sourceMappingURL=library.ecf7f373.js.map
