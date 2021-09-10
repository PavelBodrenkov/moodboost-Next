(() => {
var exports = {};
exports.id = "pages/post/[id]";
exports.ids = ["pages/post/[id]"];
exports.modules = {

/***/ "./components/A.js":
/*!*************************!*\
  !*** ./components/A.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\components\\A.js";

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  text,
  href
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../styles/Card.module.scss */ "./styles/Card.module.scss");
/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/consts */ "./utils/consts.js");
/* harmony import */ var _public_image_share_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/image/share.svg */ "./public/image/share.svg");
/* harmony import */ var _public_image_comment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/image/comment.svg */ "./public/image/comment.svg");
/* harmony import */ var _public_image_like_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/image/like.svg */ "./public/image/like.svg");
/* harmony import */ var _public_image_point_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/image/point.svg */ "./public/image/point.svg");
/* harmony import */ var _public_image_watch_min_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/image/watch-min.svg */ "./public/image/watch-min.svg");
/* harmony import */ var _public_image_comment_min_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/image/comment-min.svg */ "./public/image/comment-min.svg");
/* harmony import */ var _public_image_like_min_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/image/like-min.svg */ "./public/image/like-min.svg");
/* harmony import */ var _public_image_share_min_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/image/share-min.svg */ "./public/image/share-min.svg");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\components\\Card.js";
// import { useLocation, useHistory } from 'react-router-dom';











 // import { Context } from "../../index";
// import React, { useContext, useEffect, useState} from "react"

 // import {fetchAllComment} from '../../http/commentApi';
// import { observer, useStaticRendering } from 'mobx-react-lite';
// import {FacebookShareCount} from 'react-share'
// import { Helmet } from 'react-helmet';
// import SeoHead from '../SEO/SeoHead';



const Card = ({
  card,
  hendleLikeClick,
  shareCard
}) => {
  var _card$likes;

  let cardViews = (card.views / 1000).toFixed(1); // const {comment} = useContext(Context)
  // const {post} = useContext(Context)
  // const {admin} = useContext(Context)
  // const {user} = useContext(Context)
  // const isLiked = card.likes?.some((like) => like === admin.admin?._id ? admin.admin?._id : user.user._id)
  // const cardLikeButtonClassName = `article-button__list ${isLiked && 'like'}`
  // useEffect(() => {
  //     setTimeout(() => {
  //      const token = localStorage.getItem("adminToken")
  //      fetchAllComment(card._id, token).then(data => comment.setAllComments(data.data))
  //     }, 20)
  // }, [])
  // function OpenSharePopup () {
  //     post.setOpenShare(true)
  //     shareCard(card)
  // }

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  console.log(router.asPath.slice(0, 5));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_preview),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_preview__hash),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().t1),
          children: card.category.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_preview__hash_data),
          children: moment__WEBPACK_IMPORTED_MODULE_12___default()(card.created_at).format("DD MMM, YYYY")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
        href: router.asPath.slice(0, 5) != '/' ? `${card._id}` : 'post/' + card._id,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_preview__link),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_preview__title),
            children: card.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: 'https://api.moodboost.me/' + card.image.split('.').slice(0, -1).join('.') + "-" + 'medium' + '.' + card.image.split('.').pop(),
            alt: card.title,
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_preview__photo)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_actions),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: card.excerpt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().like_img),
              src: _public_image_like_svg__WEBPACK_IMPORTED_MODULE_4__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Like"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: `${(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list)} comment`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
              href: `/${card._id}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
                  className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().comment_img),
                  src: _public_image_comment_svg__WEBPACK_IMPORTED_MODULE_3__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Comment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            onClick: () => OpenSharePopup(),
            className: `${(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list)} shere`,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().share_img),
              src: _public_image_share_svg__WEBPACK_IMPORTED_MODULE_2__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Share"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: `article_button__min ${(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button)}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list_two),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__min_img),
              src: _public_image_watch_min_svg__WEBPACK_IMPORTED_MODULE_6__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: cardViews + 'K'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list_two),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_5__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 73
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list_two),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__min_img),
              src: _public_image_like_min_svg__WEBPACK_IMPORTED_MODULE_8__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: (card === null || card === void 0 ? void 0 : (_card$likes = card.likes) === null || _card$likes === void 0 ? void 0 : _card$likes.length) || 0
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list_two),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_5__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 73
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list_two),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__min_img),
              src: _public_image_comment_min_svg__WEBPACK_IMPORTED_MODULE_7__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: card.commentCount || 0
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list_two),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_5__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 73
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__list_two),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
              className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_14___default().article_button__min_img),
              src: _public_image_share_min_svg__WEBPACK_IMPORTED_MODULE_9__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: card.shareCount || 0
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./components/CardMiddle.js":
/*!**********************************!*\
  !*** ./components/CardMiddle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CardMiddle_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/CardMiddle.module.scss */ "./styles/CardMiddle.module.scss");
/* harmony import */ var _styles_CardMiddle_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_CardMiddle_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\components\\CardMiddle.js";


const CardMiddle = ({
  card
}) => {
  console.log(window.location.href.slice(22, 26) === 'post' ? `/${card._id}` : 'post/' + card._id);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
    className: (_styles_CardMiddle_module_scss__WEBPACK_IMPORTED_MODULE_1___default().article_preview_middle),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: window.location.href.slice(22, 26) !== '' ? `${card._id}` : 'post/' + card._id,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_CardMiddle_module_scss__WEBPACK_IMPORTED_MODULE_1___default().article_preview_middle__container_photo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: 'https://api.moodboost.me/' + card.image.split('.').slice(0, -1).join('.') + "-" + 'medium' + '.' + card.image.split('.').pop(),
          alt: "",
          className: (_styles_CardMiddle_module_scss__WEBPACK_IMPORTED_MODULE_1___default().article_preview_middle__photo)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: (_styles_CardMiddle_module_scss__WEBPACK_IMPORTED_MODULE_1___default().article_preview_middle__title),
      children: card.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardMiddle);

/***/ }),

/***/ "./components/HashTags.js":
/*!********************************!*\
  !*** ./components/HashTags.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/hashTags.module.scss */ "./styles/hashTags.module.scss");
/* harmony import */ var _styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\components\\HashTags.js";




const Hashtags = ({
  visibCategory
}) => {
  // const {category} = useContext(Context)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
    className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__title),
      children: "Life"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, undefined), visibCategory === null || visibCategory === void 0 ? void 0 : visibCategory.slice().sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
    }).map(hash => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__item),
        children: ["#", hash.name]
      }, hash._id, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 29
      }, undefined);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__footer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__logo_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__pers_footer)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__logo_footer)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__lists),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__list_link),
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__list),
              children: "Privacy & Cookies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 84
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__footer_soc_icon_lists),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__footer_soc_icon_list),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              target: "_blank",
              rel: "noreferrer noopener",
              href: "https://www.facebook.com/moodboost.me",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__footer_soc_icon)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 177
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 87
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__footer_soc_icon_list),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              target: "_blank",
              rel: "noreferrer noopener",
              href: "https://t.me/joinchat/QTzr38Tg5dhjZDI1/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__footer_soc_icon)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 179
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 87
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__footer_soc_icon_list),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              target: "_blank",
              rel: "noreferrer noopener",
              href: "https://www.pinterest.com/moodboostm/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_hashTags_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags_list__footer_soc_icon)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 177
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 87
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hashtags);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../styles/Header.module.scss */ "./styles/Header.module.scss");
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_A__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/A */ "./components/A.js");
/* harmony import */ var _public_image_pers_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../public/image/pers.svg */ "./public/image/pers.svg");
/* harmony import */ var _public_image_burger_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../public/image/burger-icon.svg */ "./public/image/burger-icon.svg");
/* harmony import */ var _public_image_Iphone_spinner_2_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../public/image/Iphone-spinner-2.gif */ "./public/image/Iphone-spinner-2.gif");
/* harmony import */ var _utils_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utils/consts */ "./utils/consts.js");
/* harmony import */ var _public_image_moodboost_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../public/image/moodboost-logo.svg */ "./public/image/moodboost-logo.svg");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\components\\Header.js";










function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "moodboost-Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: `${(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar)} container`,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_logo_container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            onClick: e => asideHendler(e),
            className: ((_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_menu_li), (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_menu_li_toggler)),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              id: "sidebar_toggler",
              className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_menu_link),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                width: 19,
                heigth: 19,
                src: _public_image_burger_icon_svg__WEBPACK_IMPORTED_MODULE_4__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "/",
              className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__header__navbar),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header_pers),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                  width: 52,
                  heigth: 78,
                  className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__logo),
                  src: _public_image_pers_svg__WEBPACK_IMPORTED_MODULE_3__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                  width: 150,
                  height: 30,
                  className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_brand_image),
                  src: _public_image_moodboost_logo_svg__WEBPACK_IMPORTED_MODULE_7__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_menu),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: ((_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headr__navbar_menu_li), (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_menu_li_search)),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A__WEBPACK_IMPORTED_MODULE_2__.default, {
              href: _utils_consts__WEBPACK_IMPORTED_MODULE_6__.SEARCH_ROUTE,
              className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_menu_link),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "icon-search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 92
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            onClick: () => openAuth(),
            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_menu__logn_in),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header__navbar_menu__logn_in_button),
              children: "hgjfghj"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./components/MainContainer.js":
/*!*************************************!*\
  !*** ./components/MainContainer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/MainContainer.module.scss */ "./styles/MainContainer.module.scss");
/* harmony import */ var _styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HashTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HashTags */ "./components/HashTags.js");
/* harmony import */ var _components_CardMiddle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardMiddle */ "./components/CardMiddle.js");


var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\components\\MainContainer.js";






function MainContainer({
  children
}) {
  const {
    0: middleCard,
    1: serMiddleCard
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    async function loadMiddleCard() {
      const response = await fetch('https://api.moodboost.me/categories');
      const response2 = await fetch('https://api.moodboost.me/posts');
      const category = await response.json();
      const card = await response2.json();
      setCategories(category);
      serMiddleCard(card[0]);
    }

    loadMiddleCard();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: (_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().app_moodboost),
      className: `container ${(_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main_posts)}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tags_list),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HashTags__WEBPACK_IMPORTED_MODULE_3__.default, {
          visibCategory: categories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: (_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().page),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: (_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().feed),
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          id: (_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sidebar),
          "data-v-c1e3d870": true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content_slidebar),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_MainContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content_slidebar_signWeekly)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 25
            }, this), middleCard.map(card => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardMiddle__WEBPACK_IMPORTED_MODULE_4__.default, {
                card: card
              }, card._id, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 37
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainer);

/***/ }),

/***/ "./components/MainPosts.js":
/*!*********************************!*\
  !*** ./components/MainPosts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");

var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\components\\MainPosts.js";


function MainPosts({
  users
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: users.map(post => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
        card: post
      }, post._id, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPosts); // export async function getStaticProps(context) {
//     const response = await fetch('https://api.moodboost.me/posts')
//     const users = await response.json();
//     return {
//         props: {users},
//     }
// }

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": true,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": true,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./src/pages/post.js":
/*!***************************!*\
  !*** ./src/pages/post.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_image_share_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/image/share.svg */ "./public/image/share.svg");
/* harmony import */ var _public_image_like_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/image/like.svg */ "./public/image/like.svg");
/* harmony import */ var _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/image/point.svg */ "./public/image/point.svg");
/* harmony import */ var _public_image_watch_min_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/image/watch-min.svg */ "./public/image/watch-min.svg");
/* harmony import */ var _public_image_comment_min_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/image/comment-min.svg */ "./public/image/comment-min.svg");
/* harmony import */ var _public_image_like_min_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/image/like-min.svg */ "./public/image/like-min.svg");
/* harmony import */ var _public_image_share_min_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/image/share-min.svg */ "./public/image/share-min.svg");
/* harmony import */ var _public_image_comment_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/image/comment.svg */ "./public/image/comment.svg");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var html_dom_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! html-dom-parser */ "html-dom-parser");
/* harmony import */ var html_dom_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(html_dom_parser__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/post.module.scss */ "./styles/post.module.scss");
/* harmony import */ var _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\src\\pages\\post.js";
// import './Post.scss';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState, useContext, postef} from 'react';
// import {fetchOnepost, fetchDeleteLike, fetchAddLikes, fetchShare} from '../../http/postAPI';
// import { observer } from 'mobx-react-lite';
// import { Context } from "../../index";
// import { fetchAllComment } from "../../http/commentApi";






 // import moment from 'moment';
// import SignUpWeekly from '../../components/SignUpWeekly/SignUpWeekly';
// import Comments from '../../components/Comments/Comments'

 // // import SeoHead from '../../components/SEO/SeoHead';
// // import { Helmet } from 'react-helmet';
// import PopupShare from '../../components/PopupShare/PopupShare';






const Postr = ({
  post
}) => {
  var _post$category, _post$likes, _post$likes2;

  // const [post, setpost] = useState([])
  // const {id} = useParams()
  // const {post} = useContext(Context)
  // const {post} = useContext(Context)
  // const {admin} = useContext(Context)
  // const {comment} = useContext(Context)
  let cardViews = (post.views / 1000).toFixed(1); // const [cardShare, setCardShare] = useState({ url:"", img:"", id:"", clicks:"" })
  // useEffect(() => {
  //     const token = localStorage.getItem("adminToken")
  //     fetchOnepost(id, token).then(data => setpost(data.data))
  // }, [id])
  // useEffect(() => {
  //      const token = localStorage.getItem("adminToken")
  //      fetchAllComment(id, token).then(data => comment.setAllComments(data.data))
  // }, [])
  // const isLiked = post.likes?.some((like) => like === admin.admin._id)
  // const cardLikeButtonClassName = `main-article__button__list ${isLiked && 'like'}`
  // function hendleLikeClick () {
  //     if(post.isAuth) {
  //         const posttoken = localStorage.getItem("postToken")
  //         const isLiked = post.likes.some((like) => like === admin.admin._id)
  //         const likeRequest = isLiked ? fetchDeleteLike(post._id, posttoken) : fetchAddLikes(post._id, posttoken)
  //         likeRequest.then((newPost) => {
  //             setpost({...post, likes:newPost.data.likes})
  //         })
  //     } else {
  //         post.setOpenAuth(true)
  //     }
  // }
  // const com = useRef(null)
  // function scrollToMyRef () {
  //   com.current.scrollIntoView()
  // }
  // const [scroll, setScroll] = useState(0);
  // const handleScroll = () => {
  //     setScroll(window.scrollY);
  //   };
  // useEffect(() => {
  // window.addEventListener("scroll", handleScroll);
  // return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // function shareClick (id) {
  //     fetchShare(id)
  //     .then(data => {
  //         setpost({...post, shareCount:data.data.shareCount})
  //     })
  // }
  // function OpenSharePopup () {
  //     post.setOpenShare(true)
  //     setCardShare({url:post._id, img:post.image, id:post._id, clicks:shareClick})
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
    className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__post)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().post_color),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_preview__hash),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "t1",
          children: post === null || post === void 0 ? void 0 : (_post$category = post.category) === null || _post$category === void 0 ? void 0 : _post$category.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: moment__WEBPACK_IMPORTED_MODULE_9___default()(post.created_at).format("DD MMM, YYYY")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__title),
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_post)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_active),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: () => hendleLikeClick(),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().like_img),
                src: _public_image_like_svg__WEBPACK_IMPORTED_MODULE_2__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Like"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: () => scrollToMyRef(),
              className: `${(_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button__list)} comment`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().comment_img),
                src: _public_image_comment_svg__WEBPACK_IMPORTED_MODULE_8__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Comment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: () => OpenSharePopup(),
              className: `${(_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button__list)} shere`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().share_img),
                src: _public_image_share_svg__WEBPACK_IMPORTED_MODULE_1__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Share"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_sum),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__min_img),
                src: _public_image_watch_min_svg__WEBPACK_IMPORTED_MODULE_4__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cardViews + 'K'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 121
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__min_img),
                src: _public_image_like_min_svg__WEBPACK_IMPORTED_MODULE_6__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ((_post$likes = post.likes) === null || _post$likes === void 0 ? void 0 : _post$likes.length) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 121
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__min_img),
                src: _public_image_comment_min_svg__WEBPACK_IMPORTED_MODULE_5__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: post.commentCount || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 121
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__min_img),
                src: _public_image_share_min_svg__WEBPACK_IMPORTED_MODULE_7__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: post.shareCount || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().post_excerpt),
        children: post.excerpt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        dangerouslySetInnerHTML: {
          __html: post.body
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button) - post, (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().non_sticky)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_active),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: () => hendleLikeClick(),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().like_img),
                src: _public_image_like_svg__WEBPACK_IMPORTED_MODULE_2__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Like"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: () => scrollToMyRef(),
              className: "main-article__button__list comment",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().comment_img),
                src: _public_image_comment_svg__WEBPACK_IMPORTED_MODULE_8__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Comment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: () => OpenSharePopup(),
              className: "main-article__button__list shere",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "share-img",
                src: _public_image_share_svg__WEBPACK_IMPORTED_MODULE_1__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Share"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "main-article__button-sum",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
                src: _public_image_watch_min_svg__WEBPACK_IMPORTED_MODULE_4__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cardViews + 'K'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 100
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
                src: _public_image_like_min_svg__WEBPACK_IMPORTED_MODULE_6__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ((_post$likes2 = post.likes) === null || _post$likes2 === void 0 ? void 0 : _post$likes2.length) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 100
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
                src: _public_image_comment_min_svg__WEBPACK_IMPORTED_MODULE_5__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: post.commentCount || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 100
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
                src: _public_image_share_min_svg__WEBPACK_IMPORTED_MODULE_7__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: post.shareCount || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Postr);

/***/ }),

/***/ "./src/pages/post/[id].js":
/*!********************************!*\
  !*** ./src/pages/post/[id].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Router */ "next/Router");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post */ "./src/pages/post.js");
/* harmony import */ var _components_MainPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MainPosts */ "./components/MainPosts.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\src\\pages\\post\\[id].js";






function Post({
  user,
  posts
}) {
  console.log(posts);
  const {
    query
  } = (0,next_Router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: data,
    1: seetData
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]); // useEffect(() => {
  //     async function load () {
  //         const response = await fetch('https://api.moodboost.me/posts')
  //         const users = await response.json();
  //         seetData(users[0])
  //     }
  //     load()
  // }, [])

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post__WEBPACK_IMPORTED_MODULE_3__.default, {
      post: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainPosts__WEBPACK_IMPORTED_MODULE_4__.default, {
      users: posts[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
async function getServerSideProps({
  params
}) {
  const response = await fetch(`https://api.moodboost.me/posts/post/${params.id}`);
  const response2 = await fetch(`https://api.moodboost.me/posts`);
  const user = await response.json();
  const posts = await response2.json();
  return {
    props: {
      user,
      posts
    }
  };
}

/***/ }),

/***/ "./utils/consts.js":
/*!*************************!*\
  !*** ./utils/consts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADMIN_ROUTE": () => (/* binding */ ADMIN_ROUTE),
/* harmony export */   "ADMIN_ROLE_ROURE": () => (/* binding */ ADMIN_ROLE_ROURE),
/* harmony export */   "ADMIN_CATEGORY_ROUTE": () => (/* binding */ ADMIN_CATEGORY_ROUTE),
/* harmony export */   "ADMIN_POST_ROUTE": () => (/* binding */ ADMIN_POST_ROUTE),
/* harmony export */   "LOGIN_ROUTE": () => (/* binding */ LOGIN_ROUTE),
/* harmony export */   "LOGIN_ADMIN_ROUTE": () => (/* binding */ LOGIN_ADMIN_ROUTE),
/* harmony export */   "REGISTER_ROUTE": () => (/* binding */ REGISTER_ROUTE),
/* harmony export */   "MAINPOSTS_ROUTE": () => (/* binding */ MAINPOSTS_ROUTE),
/* harmony export */   "POST_ROUTE": () => (/* binding */ POST_ROUTE),
/* harmony export */   "LIFE_ROUTE": () => (/* binding */ LIFE_ROUTE),
/* harmony export */   "SEARCH_ROUTE": () => (/* binding */ SEARCH_ROUTE),
/* harmony export */   "PRIVACYCOOKIES_ROUTE": () => (/* binding */ PRIVACYCOOKIES_ROUTE)
/* harmony export */ });
const ADMIN_ROUTE = '/admin';
const ADMIN_ROLE_ROURE = '/admin/adminrole';
const ADMIN_CATEGORY_ROUTE = '/admin/category';
const ADMIN_POST_ROUTE = "/admin/post";
const LOGIN_ROUTE = '/signin';
const LOGIN_ADMIN_ROUTE = '/signinadmin';
const REGISTER_ROUTE = '/signup';
const MAINPOSTS_ROUTE = '/main';
const POST_ROUTE = '/post';
const LIFE_ROUTE = '/life';
const SEARCH_ROUTE = '/search';
const PRIVACYCOOKIES_ROUTE = '/privacy-cookies';

/***/ }),

/***/ "./public/image/Iphone-spinner-2.gif":
/*!*******************************************!*\
  !*** ./public/image/Iphone-spinner-2.gif ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/Iphone-spinner-2.5260c369161151e8b030d696b9cdae32.gif","height":64,"width":64});

/***/ }),

/***/ "./public/image/burger-icon.svg":
/*!**************************************!*\
  !*** ./public/image/burger-icon.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/burger-icon.30aa8d3e1f77e65efa6f1bb0574a9714.svg","height":18,"width":20});

/***/ }),

/***/ "./public/image/comment-min.svg":
/*!**************************************!*\
  !*** ./public/image/comment-min.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/comment-min.38dca484e1e99f7354b2d319147a80af.svg","height":12,"width":13});

/***/ }),

/***/ "./public/image/comment.svg":
/*!**********************************!*\
  !*** ./public/image/comment.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/comment.57c013d0fadb250911bf45e1eeb5edfc.svg","height":14,"width":17});

/***/ }),

/***/ "./public/image/like-min.svg":
/*!***********************************!*\
  !*** ./public/image/like-min.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/like-min.6d12e79a2149e929abdb0821eebacda8.svg","height":12,"width":13});

/***/ }),

/***/ "./public/image/like.svg":
/*!*******************************!*\
  !*** ./public/image/like.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/like.5bb33455c4631a54b94a0f20279c925f.svg","height":18,"width":16});

/***/ }),

/***/ "./public/image/moodboost-logo.svg":
/*!*****************************************!*\
  !*** ./public/image/moodboost-logo.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/moodboost-logo.8b93c4e71631503079d38028ee0611bd.svg","height":46,"width":252});

/***/ }),

/***/ "./public/image/pers.svg":
/*!*******************************!*\
  !*** ./public/image/pers.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/pers.ce49f472af86866c3c07936c81ae1f97.svg","height":78,"width":52});

/***/ }),

/***/ "./public/image/point.svg":
/*!********************************!*\
  !*** ./public/image/point.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/point.a5cb6f407e41f8dd9721ed831a65dc45.svg","height":4,"width":5});

/***/ }),

/***/ "./public/image/share-min.svg":
/*!************************************!*\
  !*** ./public/image/share-min.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/share-min.e2f0441c0e55f8e4146883c63fe1385f.svg","height":11,"width":9});

/***/ }),

/***/ "./public/image/share.svg":
/*!********************************!*\
  !*** ./public/image/share.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/share.b0c7a8928d19010a4e8ee97dd0f69fce.svg","height":20,"width":17});

/***/ }),

/***/ "./public/image/watch-min.svg":
/*!************************************!*\
  !*** ./public/image/watch-min.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/image/watch-min.061c64ceb615916ce7dc9a38839700f6.svg","height":14,"width":14});

/***/ }),

/***/ "./styles/Card.module.scss":
/*!*********************************!*\
  !*** ./styles/Card.module.scss ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"article_preview": "Card_article_preview__l8-Pj",
	"article_preview__link": "Card_article_preview__link__1ARib",
	"feed": "Card_feed__3Z58y",
	"article_actions": "Card_article_actions__3MxWW",
	"article_actions__item": "Card_article_actions__item__3UT7Q",
	"article_actions__item_disabled": "Card_article_actions__item_disabled__wMHwI",
	"article_preview__photo": "Card_article_preview__photo__2zLgT",
	"article_preview__title": "Card_article_preview__title__1aJ0P",
	"article_preview__hash": "Card_article_preview__hash__3PiH4",
	"article_preview__hash_data": "Card_article_preview__hash_data__2NWk9",
	"t1": "Card_t1__3tsTd",
	"article_button_container": "Card_article_button_container__3353b",
	"article_button": "Card_article_button__24pFx",
	"article_button__min": "Card_article_button__min__2tx8d",
	"share_img": "Card_share_img__2b0Fy",
	"comment_img": "Card_comment_img__20R4L",
	"article_button__list": "Card_article_button__list__1kXgH",
	"like_img": "Card_like_img__2w_Ej",
	"article_button__min_img": "Card_article_button__min_img__2rVVC",
	"article_button__list_two": "Card_article_button__list_two__17mlp"
};


/***/ }),

/***/ "./styles/CardMiddle.module.scss":
/*!***************************************!*\
  !*** ./styles/CardMiddle.module.scss ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"article_preview_middle": "CardMiddle_article_preview_middle__6k6dg",
	"article_preview_middle__container_photo": "CardMiddle_article_preview_middle__container_photo__3OE11",
	"article_preview_middle__photo": "CardMiddle_article_preview_middle__photo__1I7Ik",
	"article_preview_middle__title": "CardMiddle_article_preview_middle__title__2UMIi"
};


/***/ }),

/***/ "./styles/Header.module.scss":
/*!***********************************!*\
  !*** ./styles/Header.module.scss ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"icon-search": "Header_icon-search__2FeC3",
	"active": "Header_active__2hctP",
	"header": "Header_header__2-XWX",
	"header__load": "Header_header__load__15bSi",
	"header__navbar": "Header_header__navbar__ldFha",
	"header__navbar_logo_container": "Header_header__navbar_logo_container__kHe5C",
	"header__navbar_brand_image": "Header_header__navbar_brand_image__QRL8g",
	"header__navbar_menu": "Header_header__navbar_menu__3Zuu-",
	"header__navbar_menu_li_toggler": "Header_header__navbar_menu_li_toggler__PeXQ6",
	"header__navbar_menu__logn_in_button": "Header_header__navbar_menu__logn_in_button__3qWRG",
	"header__navbar_menu_link": "Header_header__navbar_menu_link__1N1I1",
	"header__navbar_menu_li_search": "Header_header__navbar_menu_li_search__3yi7F",
	"header__logo": "Header_header__logo__E1yl1",
	"header__header__navbar": "Header_header__header__navbar__21zmr",
	"header_pers": "Header_header_pers__1srPZ"
};


/***/ }),

/***/ "./styles/MainContainer.module.scss":
/*!******************************************!*\
  !*** ./styles/MainContainer.module.scss ***!
  \******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"content_slidebar_signWeekly": "MainContainer_content_slidebar_signWeekly__n9CQU",
	"content_slidebar": "MainContainer_content_slidebar__1nKGf",
	"app_moodboost": "MainContainer_app_moodboost__39WhT",
	"main_posts": "MainContainer_main_posts__14fHH",
	"page": "MainContainer_page__KWA9C",
	"sidebar": "MainContainer_sidebar__3Mv3g",
	"tags_list": "MainContainer_tags_list__2V4Y5",
	"feed": "MainContainer_feed__2OsFz",
	"feed__title": "MainContainer_feed__title__2sAak",
	"sign_up_weekly_sidebar": "MainContainer_sign_up_weekly_sidebar__29mdE",
	"main_article": "MainContainer_main_article__3Kktt",
	"openAside": "MainContainer_openAside__1QFny"
};


/***/ }),

/***/ "./styles/hashTags.module.scss":
/*!*************************************!*\
  !*** ./styles/hashTags.module.scss ***!
  \*************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"tags_list__container": "hashTags_tags_list__container__3FCdT",
	"tags_list__item": "hashTags_tags_list__item__1_gE4",
	"color_green": "hashTags_color_green__3y5A5",
	"tags_list__pers-footer": "hashTags_tags_list__pers-footer__1OvYh",
	"tags_list__logo-footer": "hashTags_tags_list__logo-footer__aCC5H",
	"tags_list__logo_container": "hashTags_tags_list__logo_container__1TiEs",
	"tags_list__lists": "hashTags_tags_list__lists__2m2Ou",
	"tags_list__list": "hashTags_tags_list__list__31-NB",
	"tags_list__list_link": "hashTags_tags_list__list_link__2soEt",
	"tags_list__footer_soc-icon-lists": "hashTags_tags_list__footer_soc-icon-lists__3eVoo",
	"tags_list__footer_soc-icon": "hashTags_tags_list__footer_soc-icon__3jJ-_",
	"tags_list__footer_soc-icon-list": "hashTags_tags_list__footer_soc-icon-list__1bxn2",
	"tags_list__title": "hashTags_tags_list__title__2heGu"
};


/***/ }),

/***/ "./styles/post.module.scss":
/*!*********************************!*\
  !*** ./styles/post.module.scss ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"main_article": "post_main_article__1If4W",
	"main_article__title": "post_main_article__title__3GPPk",
	"article_actions_lg": "post_article_actions_lg__mLkpi",
	"main_article__button": "post_main_article__button__RpFoi",
	"main_article__button_active": "post_main_article__button_active__6PeHY",
	"main_article__button__list": "post_main_article__button__list__1BwOi",
	"main_article__button_sum": "post_main_article__button_sum__32bVu",
	"main_article__button_list_two": "post_main_article__button_list_two__29RqR",
	"hide": "post_hide__H61bx",
	"article_actions__item": "post_article_actions__item__1ZvOh",
	"article_actions__item_disabled": "post_article_actions__item_disabled__2r2E7",
	"icon-eye": "post_icon-eye__3-Tqr",
	"post_body": "post_post_body__2pGuh",
	"post_color": "post_post_color__lPYwn",
	"non_sticky": "post_non_sticky__30VLl",
	"post_excerpt": "post_post_excerpt__15Y1I",
	"main_article__button-active": "post_main_article__button-active__3Dzf3",
	"main_article__button_post": "post_main_article__button_post__4RsbV",
	"main_article__post": "post_main_article__post__11IAW"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "html-dom-parser":
/*!**********************************!*\
  !*** external "html-dom-parser" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-dom-parser");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/Head");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ "next/Router":
/*!******************************!*\
  !*** external "next/Router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/Router");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("regenerator-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/post/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JCQSwyR0FBK0M7Ozs7Ozs7Ozs7OztBQ0EvQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vY29tcG9uZW50cy9BLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vY29tcG9uZW50cy9DYXJkTWlkZGxlLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vY29tcG9uZW50cy9IYXNoVGFncy5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vY29tcG9uZW50cy9NYWluUG9zdHMuanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9zcmMvcGFnZXMvcG9zdC5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3NyYy9wYWdlcy9wb3N0L1tpZF0uanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi91dGlscy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9wdWJsaWMvaW1hZ2UvSXBob25lLXNwaW5uZXItMi5naWYiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9wdWJsaWMvaW1hZ2UvYnVyZ2VyLWljb24uc3ZnIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vcHVibGljL2ltYWdlL2NvbW1lbnQtbWluLnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3B1YmxpYy9pbWFnZS9jb21tZW50LnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3B1YmxpYy9pbWFnZS9saWtlLW1pbi5zdmciLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9wdWJsaWMvaW1hZ2UvbGlrZS5zdmciLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9wdWJsaWMvaW1hZ2UvbW9vZGJvb3N0LWxvZ28uc3ZnIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vcHVibGljL2ltYWdlL3BlcnMuc3ZnIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vcHVibGljL2ltYWdlL3BvaW50LnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3B1YmxpYy9pbWFnZS9zaGFyZS1taW4uc3ZnIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vcHVibGljL2ltYWdlL3NoYXJlLnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3B1YmxpYy9pbWFnZS93YXRjaC1taW4uc3ZnIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vc3R5bGVzL0NhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9zdHlsZXMvQ2FyZE1pZGRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9zdHlsZXMvTWFpbkNvbnRhaW5lci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3N0eWxlcy9oYXNoVGFncy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3N0eWxlcy9wb3N0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJodG1sLWRvbS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwibmV4dC9IZWFkXCIiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC9leHRlcm5hbCBcIm5leHQvUm91dGVyXCIiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC9leHRlcm5hbCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe3RleHQsIGhyZWZ9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8YT57dGV4dH08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59IiwiXHJcbi8vIGltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvQ2FyZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBPU1RfUk9VVEUgfSBmcm9tICcuLy4uL3V0aWxzL2NvbnN0cyc7XHJcbiBpbXBvcnQgc2hhcmUgZnJvbSAnLi4vcHVibGljL2ltYWdlL3NoYXJlLnN2Zyc7XHJcbmltcG9ydCBjb21tZW50SW1nIGZyb20gJy4uL3B1YmxpYy9pbWFnZS9jb21tZW50LnN2Zyc7XHJcbiBpbXBvcnQgbGlrZSBmcm9tICcuLi9wdWJsaWMvaW1hZ2UvbGlrZS5zdmcnO1xyXG5pbXBvcnQgcG9pbnQgZnJvbSAnLi4vcHVibGljL2ltYWdlL3BvaW50LnN2Zyc7XHJcbiBpbXBvcnQgd2F0Y2hfbWluIGZyb20gJy4uL3B1YmxpYy9pbWFnZS93YXRjaC1taW4uc3ZnJztcclxuIGltcG9ydCBjb21tZW50X21pbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2UvY29tbWVudC1taW4uc3ZnJztcclxuaW1wb3J0IGxpa2VfbWluIGZyb20gJy4uL3B1YmxpYy9pbWFnZS9saWtlLW1pbi5zdmcnO1xyXG4gaW1wb3J0IHNoYXJlX21pbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2Uvc2hhcmUtbWluLnN2Zyc7XHJcbiBpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXHJcbiBpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbi8vIGltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuLy8gaW1wb3J0IHtmZXRjaEFsbENvbW1lbnR9IGZyb20gJy4uLy4uL2h0dHAvY29tbWVudEFwaSc7XHJcbi8vIGltcG9ydCB7IG9ic2VydmVyLCB1c2VTdGF0aWNSZW5kZXJpbmcgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xyXG4vLyBpbXBvcnQge0ZhY2Vib29rU2hhcmVDb3VudH0gZnJvbSAncmVhY3Qtc2hhcmUnXHJcbi8vIGltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbi8vIGltcG9ydCBTZW9IZWFkIGZyb20gJy4uL1NFTy9TZW9IZWFkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCBDYXJkID0gKHtjYXJkLCBoZW5kbGVMaWtlQ2xpY2ssIHNoYXJlQ2FyZH0pID0+IHtcclxuICAgIGxldCBjYXJkVmlld3MgPSAoY2FyZC52aWV3cyAvIDEwMDApLnRvRml4ZWQoMSlcclxuICAgIC8vIGNvbnN0IHtjb21tZW50fSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgIC8vIGNvbnN0IHtwb3N0fSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgIC8vIGNvbnN0IHthZG1pbn0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICAvLyBjb25zdCB7dXNlcn0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgXHJcbiAgICAvLyBjb25zdCBpc0xpa2VkID0gY2FyZC5saWtlcz8uc29tZSgobGlrZSkgPT4gbGlrZSA9PT0gYWRtaW4uYWRtaW4/Ll9pZCA/IGFkbWluLmFkbWluPy5faWQgOiB1c2VyLnVzZXIuX2lkKVxyXG4gICAgLy8gY29uc3QgY2FyZExpa2VCdXR0b25DbGFzc05hbWUgPSBgYXJ0aWNsZS1idXR0b25fX2xpc3QgJHtpc0xpa2VkICYmICdsaWtlJ31gXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkbWluVG9rZW5cIilcclxuICAgIC8vICAgICAgZmV0Y2hBbGxDb21tZW50KGNhcmQuX2lkLCB0b2tlbikudGhlbihkYXRhID0+IGNvbW1lbnQuc2V0QWxsQ29tbWVudHMoZGF0YS5kYXRhKSlcclxuICAgIC8vICAgICB9LCAyMClcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIE9wZW5TaGFyZVBvcHVwICgpIHtcclxuICAgIC8vICAgICBwb3N0LnNldE9wZW5TaGFyZSh0cnVlKVxyXG4gICAgLy8gICAgIHNoYXJlQ2FyZChjYXJkKVxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5hc1BhdGguc2xpY2UoMCwgNSkpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX3ByZXZpZXd9PlxyXG4gICAgICAgICAgICB7LyogPFNlb0hlYWQgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfcHJldmlld19faGFzaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudDF9PntjYXJkLmNhdGVnb3J5Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfcHJldmlld19faGFzaF9kYXRhfT57bW9tZW50KGNhcmQuY3JlYXRlZF9hdCkuZm9ybWF0KFwiREQgTU1NLCBZWVlZXCIpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXIuYXNQYXRoLnNsaWNlKDAsIDUpICE9ICcvJyA/IGAke2NhcmQuX2lkfWAgOiAncG9zdC8nICsgY2FyZC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfcHJldmlld19fbGlua30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9wcmV2aWV3X190aXRsZX0+e2NhcmQudGl0bGV9PC9oMz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9hcGkubW9vZGJvb3N0Lm1lLycgKyBjYXJkLmltYWdlLnNwbGl0KCcuJykuc2xpY2UoMCwgLTEpLmpvaW4oJy4nKSArIFwiLVwiICsgJ21lZGl1bScgKyAnLicgKyBjYXJkLmltYWdlLnNwbGl0KCcuJykucG9wKCl9IGFsdD17Y2FyZC50aXRsZX0gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9wcmV2aWV3X19waG90b30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2FyZC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5saWtlX2ltZ30gc3JjPXtsaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGlrZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFydGljbGVfYnV0dG9uX19saXN0fSBjb21tZW50YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Y2FyZC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X2ltZ30gc3JjPXtjb21tZW50SW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBPcGVuU2hhcmVQb3B1cCgpfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbGlzdH0gc2hlcmVgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5zaGFyZV9pbWd9IHNyYz17c2hhcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaGFyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BhcnRpY2xlX2J1dHRvbl9fbWluICR7c3R5bGVzLmFydGljbGVfYnV0dG9ufWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9idXR0b25fX21pbl9pbWd9IHNyYz17d2F0Y2hfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkVmlld3MrICdLJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d299PjxJbWFnZSBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e2xpa2VfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkPy5saWtlcz8ubGVuZ3RoIHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19saXN0X3R3b30+PEltYWdlIHNyYz17cG9pbnR9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXtjb21tZW50X21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkLmNvbW1lbnRDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d299PjxJbWFnZSBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9idXR0b25fX21pbl9pbWd9IHNyYz17c2hhcmVfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmQuc2hhcmVDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQiLCJpbXBvcnQgc3R5bGVDYXJkTWlkZGxlIGZyb20gJy4uL3N0eWxlcy9DYXJkTWlkZGxlLm1vZHVsZS5zY3NzJztcclxuXHJcblxyXG5jb25zdCBDYXJkTWlkZGxlID0gKHtjYXJkfSkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDIyLCAyNikgPT09ICdwb3N0JyA/IGAvJHtjYXJkLl9pZH1gIDogJ3Bvc3QvJyArIGNhcmQuX2lkKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVDYXJkTWlkZGxlLmFydGljbGVfcHJldmlld19taWRkbGV9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXt3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgyMiwgMjYpICE9PSAnJyA/IGAke2NhcmQuX2lkfWAgOiAncG9zdC8nICsgY2FyZC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZUNhcmRNaWRkbGUuYXJ0aWNsZV9wcmV2aWV3X21pZGRsZV9fY29udGFpbmVyX3Bob3RvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2FwaS5tb29kYm9vc3QubWUvJyArIGNhcmQuaW1hZ2Uuc3BsaXQoJy4nKS5zbGljZSgwLCAtMSkuam9pbignLicpICsgXCItXCIgKyAnbWVkaXVtJyArICcuJyArIGNhcmQuaW1hZ2Uuc3BsaXQoJy4nKS5wb3AoKX0gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZUNhcmRNaWRkbGUuYXJ0aWNsZV9wcmV2aWV3X21pZGRsZV9fcGhvdG99Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZUNhcmRNaWRkbGUuYXJ0aWNsZV9wcmV2aWV3X21pZGRsZV9fdGl0bGV9PntjYXJkLnRpdGxlfTwvaDM+IFxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRNaWRkbGUiLCJpbXBvcnQgc3R5bGVIYXNoIGZyb20gJy4uL3N0eWxlcy9oYXNoVGFncy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBIYXNodGFncyA9ICh7dmlzaWJDYXRlZ29yeX0pICA9PiB7XHJcbiAgICAvLyBjb25zdCB7Y2F0ZWdvcnl9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX3RpdGxlfT5MaWZlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICB7dmlzaWJDYXRlZ29yeT8uc2xpY2UoKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGEubmFtZSA8IGIubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkubWFwKChoYXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19pdGVtfSBrZXk9e2hhc2guX2lkfT4je2hhc2gubmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fbG9nb19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fcGVyc19mb290ZXJ9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fbG9nb19mb290ZXJ9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19saXN0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInRhZ3MtbGlzdF9fbGlzdFwiPkFib3V0PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2xpc3RfbGlua30gaHJlZj1cIiNcIj48bGkgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19saXN0fT5Qcml2YWN5ICYgQ29va2llczwvbGk+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2Zvb3Rlcl9zb2NfaWNvbl9saXN0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19mb290ZXJfc29jX2ljb25fbGlzdH0+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbW9vZGJvb3N0Lm1lXCI+PGltZyBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2Zvb3Rlcl9zb2NfaWNvbn0gIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19mb290ZXJfc29jX2ljb25fbGlzdH0+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiIGhyZWY9XCJodHRwczovL3QubWUvam9pbmNoYXQvUVR6cjM4VGc1ZGhqWkRJMS9cIj48aW1nIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29ufSAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29uX2xpc3R9PjxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIiBocmVmPVwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9tb29kYm9vc3RtL1wiPjxpbWcgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19mb290ZXJfc29jX2ljb259ICAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhc2h0YWdzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQSBmcm9tICcuLy4uL2NvbXBvbmVudHMvQSc7XHJcbmltcG9ydCBwZXJzIGZyb20gJy4vLi4vcHVibGljL2ltYWdlL3BlcnMuc3ZnJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi8uLi9wdWJsaWMvaW1hZ2UvYnVyZ2VyLWljb24uc3ZnJztcclxuaW1wb3J0IGxvYWQgZnJvbSAnLi8uLi9wdWJsaWMvaW1hZ2UvSXBob25lLXNwaW5uZXItMi5naWYnXHJcbmltcG9ydCB7IE1BSU5QT1NUU19ST1VURSwgU0VBUkNIX1JPVVRFIH0gZnJvbSAnLi8uLi91dGlscy9jb25zdHMnO1xyXG5pbXBvcnQgbW9vZGJvb3N0TG9nbyBmcm9tICcuLy4uL3B1YmxpYy9pbWFnZS9tb29kYm9vc3QtbG9nby5zdmcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bW9vZGJvb3N0LU5leHQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGExL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWdpSkY2a2tvcU5RMDB2eStITURQN2F6T3VMMHh0YmZJY2FUOXdqS0hyOFJiRFZkZFZIeVRmQUFzcmVrd0ttUDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGExL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC15Z2JWOWtpcVVjNm9hNG1zWG45ODY4cFR0V01naVFhZVlINy90N0xFQ0xieVBBMng2NUtnZjgwT0pGZHJvYWZXXCJcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxyXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlcl9fbmF2YmFyfSBjb250YWluZXJgfT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX25hdmJhcl9sb2dvX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyhlKSA9PiBhc2lkZUhlbmRsZXIoZSl9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbmF2YmFyX21lbnVfbGksIHN0eWxlcy5oZWFkZXJfX25hdmJhcl9tZW51X2xpX3RvZ2dsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGlkPVwic2lkZWJhcl90b2dnbGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19uYXZiYXJfbWVudV9saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MTl9IGhlaWd0aD17MTl9IHNyYz17bWVudX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2hlYWRlcl9fbmF2YmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX3BlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17NTJ9IGhlaWd0aD17Nzh9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb30gc3JjPXtwZXJzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPXsxNTB9IGhlaWdodD17MzB9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbmF2YmFyX2JyYW5kX2ltYWdlfSBzcmM9e21vb2Rib29zdExvZ299Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19uYXZiYXJfbWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRyX19uYXZiYXJfbWVudV9saSwgc3R5bGVzLmhlYWRlcl9fbmF2YmFyX21lbnVfbGlfc2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEEgaHJlZj17U0VBUkNIX1JPVVRFfSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX25hdmJhcl9tZW51X2xpbmt9PjxpIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPjwvQT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBvcGVuQXV0aCgpfSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX25hdmJhcl9tZW51X19sb2duX2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19uYXZiYXJfbWVudV9fbG9nbl9pbl9idXR0b259PmhnamZnaGo8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+ICBcclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXNNYWluIGZyb20gJy4uL3N0eWxlcy9NYWluQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEhhc2hUYWdzIGZyb20gJy4vSGFzaFRhZ3MnO1xyXG5pbXBvcnQgQ2FyZE1pZGRsZSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRNaWRkbGUnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5Db250YWluZXIoe2NoaWxkcmVufSkge1xyXG5jb25zdCBbbWlkZGxlQ2FyZCwgc2VyTWlkZGxlQ2FyZF0gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG51c2VFZmZlY3QoICgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRNaWRkbGVDYXJkICgpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5tb29kYm9vc3QubWUvY2F0ZWdvcmllcycpXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS9wb3N0cycpXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zdCBjYXJkID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKVxyXG5cclxuICAgICAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5KVxyXG4gICAgICAgIHNlck1pZGRsZUNhcmQoY2FyZFswXSlcclxuICAgIH1cclxuICAgIGxvYWRNaWRkbGVDYXJkKClcclxuICAgIFxyXG59LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXNNYWluLmFwcF9tb29kYm9vc3R9IGNsYXNzTmFtZT17YGNvbnRhaW5lciAke3N0eWxlc01haW4ubWFpbl9wb3N0c31gfT5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXNNYWluLnRhZ3NfbGlzdH0+XHJcbiAgICAgICAgPEhhc2hUYWdzIHZpc2liQ2F0ZWdvcnk9e2NhdGVnb3JpZXN9IC8+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzTWFpbi5wYWdlfT5cclxuICAgICAgICAgICAgPG1haW4gIGNsYXNzTmFtZT17c3R5bGVzTWFpbi5mZWVkfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIHsvKiB7dmlzaWJsZUxvZ29MaWZlKCkgJiYgPGg0IGNsYXNzTmFtZT1cImZlZWRfX3RpdGxlXCI+e2Ake2NhdGVnb3J5LnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSA9PT0gdW5kZWZpbmVkID8gJ0xpZmUnIDogYExpZmUtJHtjYXRlZ29yeS5zZWxlY3RlZENhdGVnb3J5Lm5hbWV9YH1gfTwvaDQ+fSAqL31cclxuICAgICAgICAgICAgey8qIDxNYWluIHNjcm9sbERvd25Qb3N0PXtzY3JvbGxEb3duUG9zdH0gaGVuZGxlTGlrZUNsaWNrPXtoZW5kbGVMaWtlQ2xpY2t9IGNhcmQ9e3Bvc3QucG9zdHN9IGlzTG9hZD17aXNMb2FkfSBzaGFyZUNhcmQ9e3NoYXJlQ2FyZH0gc2hhcmVDbGljaz17c2hhcmVDbGlja30vPiAqL31cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9e3N0eWxlc01haW4uc2lkZWJhcn0gZGF0YS12LWMxZTNkODcwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNNYWluLmNvbnRlbnRfc2xpZGViYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzTWFpbi5jb250ZW50X3NsaWRlYmFyX3NpZ25XZWVrbHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTaWduVXBXZWVrbHkgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWlkZGxlQ2FyZC5tYXAoKGNhcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWlkZGxlIGNhcmQ9e2NhcmR9IGtleT17Y2FyZC5faWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Lyoge2NhcmRTaGFyZS51cmwgJiYgY2FyZFNoYXJlLmltZyAmJiBcclxuICAgICAgICAgICAgPFBvcHVwU2hhcmUgbG9nPXsnaHR0cHM6Ly9tb29kYm9vc3QubWUvbWFpbi9wb3N0LycgKyBjYXJkU2hhcmUudXJsfSAgXHJcbiAgICAgICAgICAgIGltZz17J2h0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS8nICsgY2FyZFNoYXJlLmltZy5zcGxpdCgnLicpLnNsaWNlKDAsIC0xKS5qb2luKCcuJykgKyBcIi1cIiArICdtZWRpdW0nICsgJy4nICsgY2FyZFNoYXJlLmltZy5zcGxpdCgnLicpLnBvcCgpfSBcclxuICAgICAgICAgICAgaWQ9e2NhcmRTaGFyZS5pZH0gc2hhcmVDbGljaz17Y2FyZFNoYXJlLmNsaWNrc30vPn0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lclxyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xyXG5cclxuZnVuY3Rpb24gTWFpblBvc3RzKHt1c2Vyc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3VzZXJzLm1hcChwb3N0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjYXJkPXtwb3N0fSBrZXk9e3Bvc3QuX2lkfS8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUG9zdHNcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5tb29kYm9vc3QubWUvcG9zdHMnKVxyXG4vLyAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHt1c2Vyc30sXHJcbi8vICAgICB9XHJcbi8vIH1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAhaXNWaXNpYmxlICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiB0cnVlLFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgfSkpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiLy8gaW1wb3J0ICcuL1Bvc3Quc2Nzcyc7XHJcbi8vIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCBwb3N0ZWZ9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHtmZXRjaE9uZXBvc3QsIGZldGNoRGVsZXRlTGlrZSwgZmV0Y2hBZGRMaWtlcywgZmV0Y2hTaGFyZX0gZnJvbSAnLi4vLi4vaHR0cC9wb3N0QVBJJztcclxuLy8gaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xyXG4vLyBpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XHJcbi8vIGltcG9ydCB7IGZldGNoQWxsQ29tbWVudCB9IGZyb20gXCIuLi8uLi9odHRwL2NvbW1lbnRBcGlcIjtcclxuaW1wb3J0IHNoYXJlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9zaGFyZS5zdmcnO1xyXG5pbXBvcnQgbGlrZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvbGlrZS5zdmcnO1xyXG5pbXBvcnQgcG9pbnQgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL3BvaW50LnN2Zyc7XHJcbmltcG9ydCB3YXRjaF9taW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL3dhdGNoLW1pbi5zdmcnO1xyXG5pbXBvcnQgY29tbWVudF9taW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL2NvbW1lbnQtbWluLnN2Zyc7XHJcbmltcG9ydCBsaWtlX21pbiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvbGlrZS1taW4uc3ZnJztcclxuaW1wb3J0IHNoYXJlX21pbiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2Uvc2hhcmUtbWluLnN2Zyc7XHJcbi8vIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuLy8gaW1wb3J0IFNpZ25VcFdlZWtseSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpZ25VcFdlZWtseS9TaWduVXBXZWVrbHknO1xyXG4vLyBpbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cydcclxuaW1wb3J0IGNvbW1lbnRJbWcgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL2NvbW1lbnQuc3ZnJztcclxuLy8gLy8gaW1wb3J0IFNlb0hlYWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TRU8vU2VvSGVhZCc7XHJcbi8vIC8vIGltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbi8vIGltcG9ydCBQb3B1cFNoYXJlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9wdXBTaGFyZS9Qb3B1cFNoYXJlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtZG9tLXBhcnNlcic7XHJcbmltcG9ydCBzdHlsZVBvc3QgZnJvbSAnLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuXHJcbmNvbnN0IFBvc3RyID0gKHtwb3N0fSkgPT4ge1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCBbcG9zdCwgc2V0cG9zdF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIC8vIGNvbnN0IHtpZH0gPSB1c2VQYXJhbXMoKVxyXG4gICAgLy8gY29uc3Qge3Bvc3R9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgLy8gY29uc3Qge3Bvc3R9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgLy8gY29uc3Qge2FkbWlufSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgIC8vIGNvbnN0IHtjb21tZW50fSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgICBsZXQgY2FyZFZpZXdzID0gKHBvc3Qudmlld3MgLyAxMDAwKS50b0ZpeGVkKDEpXHJcbiAgICAvLyBjb25zdCBbY2FyZFNoYXJlLCBzZXRDYXJkU2hhcmVdID0gdXNlU3RhdGUoeyB1cmw6XCJcIiwgaW1nOlwiXCIsIGlkOlwiXCIsIGNsaWNrczpcIlwiIH0pXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRtaW5Ub2tlblwiKVxyXG4gICAgLy8gICAgIGZldGNoT25lcG9zdChpZCwgdG9rZW4pLnRoZW4oZGF0YSA9PiBzZXRwb3N0KGRhdGEuZGF0YSkpXHJcbiAgICAvLyB9LCBbaWRdKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pblRva2VuXCIpXHJcbiAgICAvLyAgICAgIGZldGNoQWxsQ29tbWVudChpZCwgdG9rZW4pLnRoZW4oZGF0YSA9PiBjb21tZW50LnNldEFsbENvbW1lbnRzKGRhdGEuZGF0YSkpXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyBjb25zdCBpc0xpa2VkID0gcG9zdC5saWtlcz8uc29tZSgobGlrZSkgPT4gbGlrZSA9PT0gYWRtaW4uYWRtaW4uX2lkKVxyXG4gICAgLy8gY29uc3QgY2FyZExpa2VCdXR0b25DbGFzc05hbWUgPSBgbWFpbi1hcnRpY2xlX19idXR0b25fX2xpc3QgJHtpc0xpa2VkICYmICdsaWtlJ31gXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gaGVuZGxlTGlrZUNsaWNrICgpIHtcclxuICAgIC8vICAgICBpZihwb3N0LmlzQXV0aCkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBwb3N0dG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvc3RUb2tlblwiKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBpc0xpa2VkID0gcG9zdC5saWtlcy5zb21lKChsaWtlKSA9PiBsaWtlID09PSBhZG1pbi5hZG1pbi5faWQpXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGxpa2VSZXF1ZXN0ID0gaXNMaWtlZCA/IGZldGNoRGVsZXRlTGlrZShwb3N0Ll9pZCwgcG9zdHRva2VuKSA6IGZldGNoQWRkTGlrZXMocG9zdC5faWQsIHBvc3R0b2tlbilcclxuICAgIC8vICAgICAgICAgbGlrZVJlcXVlc3QudGhlbigobmV3UG9zdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0cG9zdCh7Li4ucG9zdCwgbGlrZXM6bmV3UG9zdC5kYXRhLmxpa2VzfSlcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBwb3N0LnNldE9wZW5BdXRoKHRydWUpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc3QgY29tID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2Nyb2xsVG9NeVJlZiAoKSB7XHJcbiAgICAvLyAgIGNvbS5jdXJyZW50LnNjcm9sbEludG9WaWV3KClcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAvLyAgIH07XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAvLyByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzaGFyZUNsaWNrIChpZCkge1xyXG4gICAgLy8gICAgIGZldGNoU2hhcmUoaWQpXHJcbiAgICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldHBvc3Qoey4uLnBvc3QsIHNoYXJlQ291bnQ6ZGF0YS5kYXRhLnNoYXJlQ291bnR9KVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gT3BlblNoYXJlUG9wdXAgKCkge1xyXG4gICAgLy8gICAgIHBvc3Quc2V0T3BlblNoYXJlKHRydWUpXHJcbiAgICAvLyAgICAgc2V0Q2FyZFNoYXJlKHt1cmw6cG9zdC5faWQsIGltZzpwb3N0LmltYWdlLCBpZDpwb3N0Ll9pZCwgY2xpY2tzOnNoYXJlQ2xpY2t9KVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19wb3N0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlUG9zdC5wb3N0X2NvbG9yfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9wcmV2aWV3X19oYXNofT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3QxJz57cG9zdD8uY2F0ZWdvcnk/Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttb21lbnQocG9zdC5jcmVhdGVkX2F0KS5mb3JtYXQoXCJERCBNTU0sIFlZWVlcIil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX190aXRsZX0+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b24sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9wb3N0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fYWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoZW5kbGVMaWtlQ2xpY2soKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0Lmxpa2VfaW1nfSBzcmM9e2xpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpa2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb015UmVmKCl9IGNsYXNzTmFtZT17YCR7c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX19saXN0fSBjb21tZW50YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5jb21tZW50X2ltZ30gc3JjPXtjb21tZW50SW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBPcGVuU2hhcmVQb3B1cCgpfSBjbGFzc05hbWU9e2Ake3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9fbGlzdH0gc2hlcmVgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LnNoYXJlX2ltZ30gc3JjPXtzaGFyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9zdW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e3dhdGNoX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmRWaWV3cyArICdLJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT48aW1nICBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXtsaWtlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QubGlrZXM/Lmxlbmd0aCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT48aW1nIHNyYz17cG9pbnR9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX21pbl9pbWd9IHNyYz17Y29tbWVudF9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QuY29tbWVudENvdW50IHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXtzaGFyZV9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3Quc2hhcmVDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlUG9zdC5wb3N0X2V4Y2VycHR9Pntwb3N0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInBvc3QtYm9keVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5ib2R5IH19Lz4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5ib2R5IH19IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b24sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbi1wb3N0LCBzdHlsZVBvc3Qubm9uX3N0aWNreX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGVuZGxlTGlrZUNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0Lmxpa2VfaW1nfSBzcmM9e2xpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpa2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb015UmVmKCl9IGNsYXNzTmFtZT1cIm1haW4tYXJ0aWNsZV9fYnV0dG9uX19saXN0IGNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3QuY29tbWVudF9pbWd9IHNyYz17Y29tbWVudEltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29tbWVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gT3BlblNoYXJlUG9wdXAoKX0gY2xhc3NOYW1lPVwibWFpbi1hcnRpY2xlX19idXR0b25fX2xpc3Qgc2hlcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInNoYXJlLWltZ1wiIHNyYz17c2hhcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNoYXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1hcnRpY2xlX19idXR0b24tc3VtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e3dhdGNoX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmRWaWV3cyArICdLJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPjxpbWcgIHNyYz17cG9pbnR9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdhcnRpY2xlLWJ1dHRvbl9fbWluLWltZycgc3JjPXtsaWtlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QubGlrZXM/Lmxlbmd0aCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdhcnRpY2xlLWJ1dHRvbl9fbWluLWltZycgc3JjPXtjb21tZW50X21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5jb21tZW50Q291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj48aW1nIHNyYz17cG9pbnR9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e3NoYXJlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5zaGFyZUNvdW50IHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IHJlZj17Y29tfSBjbGFzc05hbWU9XCJzaWduLXVwLXdlZWtseV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxTaWduVXBXZWVrbHkgLz4gXHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIHsvKiA8Q29tbWVudHMgIHBvc3Q9e3Bvc3R9Lz4gKi99XHJcbiAgICAgICAgey8qIHtjYXJkU2hhcmUudXJsICYmIGNhcmRTaGFyZS5pbWcgJiYgPFBvcHVwU2hhcmUgbG9nPXsnaHR0cHM6Ly9tb29kYm9vc3QubWUvbWFpbi9wb3N0LycgKyBjYXJkU2hhcmUudXJsfSBpbWc9eydodHRwczovL2FwaS5tb29kYm9vc3QubWUvJytjYXJkU2hhcmUuaW1nfSBpZD17Y2FyZFNoYXJlLmlkfSBzaGFyZUNsaWNrPXtjYXJkU2hhcmUuY2xpY2tzfS8+fSAqL31cclxuIFxyXG4gICAgPC9hcnRpY2xlPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHJcclxuXHJcbiIsImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L1JvdXRlcic7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XHJcbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi4vcG9zdCdcclxuaW1wb3J0IE1haW5Qb3N0cyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01haW5Qb3N0cyc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0ICh7dXNlciwgcG9zdHN9KSB7XHJcbmNvbnNvbGUubG9nKHBvc3RzKVxyXG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbZGF0YSwgc2VldERhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBhc3luYyBmdW5jdGlvbiBsb2FkICgpIHtcclxuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5tb29kYm9vc3QubWUvcG9zdHMnKVxyXG4vLyAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgICAgIHNlZXREYXRhKHVzZXJzWzBdKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgbG9hZCgpXHJcbiAgXHJcbi8vIH0sIFtdKVxyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxQb3N0ZXIgcG9zdD17dXNlcn0vPlxyXG4gICAgICAgICAgICA8TWFpblBvc3RzIHVzZXJzPXtwb3N0c1swXX0vPlxyXG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS9wb3N0cy9wb3N0LyR7cGFyYW1zLmlkfWApXHJcbiAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubW9vZGJvb3N0Lm1lL3Bvc3RzYClcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge3VzZXIsIHBvc3RzfSxcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IEFETUlOX1JPVVRFID0gJy9hZG1pbidcclxuZXhwb3J0IGNvbnN0IEFETUlOX1JPTEVfUk9VUkUgPSAnL2FkbWluL2FkbWlucm9sZSdcclxuZXhwb3J0IGNvbnN0IEFETUlOX0NBVEVHT1JZX1JPVVRFID0gJy9hZG1pbi9jYXRlZ29yeSdcclxuZXhwb3J0IGNvbnN0IEFETUlOX1BPU1RfUk9VVEUgPSBcIi9hZG1pbi9wb3N0XCJcclxuZXhwb3J0IGNvbnN0IExPR0lOX1JPVVRFID0gJy9zaWduaW4nXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9BRE1JTl9ST1VURSA9ICcvc2lnbmluYWRtaW4nXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9ST1VURSA9ICcvc2lnbnVwJ1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTX1JPVVRFID0gJy9tYWluJ1xyXG5leHBvcnQgY29uc3QgUE9TVF9ST1VURSA9ICcvcG9zdCdcclxuZXhwb3J0IGNvbnN0IExJRkVfUk9VVEUgPSAnL2xpZmUnXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUk9VVEUgPSAnL3NlYXJjaCdcclxuZXhwb3J0IGNvbnN0IFBSSVZBQ1lDT09LSUVTX1JPVVRFID0gJy9wcml2YWN5LWNvb2tpZXMnIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZS9JcGhvbmUtc3Bpbm5lci0yLjUyNjBjMzY5MTYxMTUxZThiMDMwZDY5NmI5Y2RhZTMyLmdpZlwiLFwiaGVpZ2h0XCI6NjQsXCJ3aWR0aFwiOjY0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlL2J1cmdlci1pY29uLjMwYWE4ZDNlMWY3N2U2NWVmYTZmMWJiMDU3NGE5NzE0LnN2Z1wiLFwiaGVpZ2h0XCI6MTgsXCJ3aWR0aFwiOjIwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlL2NvbW1lbnQtbWluLjM4ZGNhNDg0ZTFlOTlmNzM1NGIyZDMxOTE0N2E4MGFmLnN2Z1wiLFwiaGVpZ2h0XCI6MTIsXCJ3aWR0aFwiOjEzfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlL2NvbW1lbnQuNTdjMDEzZDBmYWRiMjUwOTExYmY0NWUxZWViNWVkZmMuc3ZnXCIsXCJoZWlnaHRcIjoxNCxcIndpZHRoXCI6MTd9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2UvbGlrZS1taW4uNmQxMmU3OWEyMTQ5ZTkyOWFiZGIwODIxZWViYWNkYTguc3ZnXCIsXCJoZWlnaHRcIjoxMixcIndpZHRoXCI6MTN9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2UvbGlrZS41YmIzMzQ1NWM0NjMxYTU0Yjk0YTBmMjAyNzljOTI1Zi5zdmdcIixcImhlaWdodFwiOjE4LFwid2lkdGhcIjoxNn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZS9tb29kYm9vc3QtbG9nby44YjkzYzRlNzE2MzE1MDMwNzlkMzgwMjhlZTA2MTFiZC5zdmdcIixcImhlaWdodFwiOjQ2LFwid2lkdGhcIjoyNTJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2UvcGVycy5jZTQ5ZjQ3MmFmODY4NjZjM2MwNzkzNmM4MWFlMWY5Ny5zdmdcIixcImhlaWdodFwiOjc4LFwid2lkdGhcIjo1Mn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZS9wb2ludC5hNWNiNmY0MDdlNDFmOGRkOTcyMWVkODMxYTY1ZGM0NS5zdmdcIixcImhlaWdodFwiOjQsXCJ3aWR0aFwiOjV9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2Uvc2hhcmUtbWluLmUyZjA0NDFjMGU1NWY4ZTQxNDY4ODNjNjNmZTEzODVmLnN2Z1wiLFwiaGVpZ2h0XCI6MTEsXCJ3aWR0aFwiOjl9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2Uvc2hhcmUuYjBjN2E4OTI4ZDE5MDEwYTRlOGVlOTdkZDBmNjlmY2Uuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MTd9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2Uvd2F0Y2gtbWluLjA2MWM2NGNlYjYxNTkxNmNlN2RjOWEzODgzOTcwMGY2LnN2Z1wiLFwiaGVpZ2h0XCI6MTQsXCJ3aWR0aFwiOjE0fTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnRpY2xlX3ByZXZpZXdcIjogXCJDYXJkX2FydGljbGVfcHJldmlld19fbDgtUGpcIixcblx0XCJhcnRpY2xlX3ByZXZpZXdfX2xpbmtcIjogXCJDYXJkX2FydGljbGVfcHJldmlld19fbGlua19fMUFSaWJcIixcblx0XCJmZWVkXCI6IFwiQ2FyZF9mZWVkX18zWjU4eVwiLFxuXHRcImFydGljbGVfYWN0aW9uc1wiOiBcIkNhcmRfYXJ0aWNsZV9hY3Rpb25zX18zTXhXV1wiLFxuXHRcImFydGljbGVfYWN0aW9uc19faXRlbVwiOiBcIkNhcmRfYXJ0aWNsZV9hY3Rpb25zX19pdGVtX18zVVQ3UVwiLFxuXHRcImFydGljbGVfYWN0aW9uc19faXRlbV9kaXNhYmxlZFwiOiBcIkNhcmRfYXJ0aWNsZV9hY3Rpb25zX19pdGVtX2Rpc2FibGVkX193TUh3SVwiLFxuXHRcImFydGljbGVfcHJldmlld19fcGhvdG9cIjogXCJDYXJkX2FydGljbGVfcHJldmlld19fcGhvdG9fXzJ6TGdUXCIsXG5cdFwiYXJ0aWNsZV9wcmV2aWV3X190aXRsZVwiOiBcIkNhcmRfYXJ0aWNsZV9wcmV2aWV3X190aXRsZV9fMWFKMFBcIixcblx0XCJhcnRpY2xlX3ByZXZpZXdfX2hhc2hcIjogXCJDYXJkX2FydGljbGVfcHJldmlld19faGFzaF9fM1BpSDRcIixcblx0XCJhcnRpY2xlX3ByZXZpZXdfX2hhc2hfZGF0YVwiOiBcIkNhcmRfYXJ0aWNsZV9wcmV2aWV3X19oYXNoX2RhdGFfXzJOV2s5XCIsXG5cdFwidDFcIjogXCJDYXJkX3QxX18zdHNUZFwiLFxuXHRcImFydGljbGVfYnV0dG9uX2NvbnRhaW5lclwiOiBcIkNhcmRfYXJ0aWNsZV9idXR0b25fY29udGFpbmVyX18zMzUzYlwiLFxuXHRcImFydGljbGVfYnV0dG9uXCI6IFwiQ2FyZF9hcnRpY2xlX2J1dHRvbl9fMjRwRnhcIixcblx0XCJhcnRpY2xlX2J1dHRvbl9fbWluXCI6IFwiQ2FyZF9hcnRpY2xlX2J1dHRvbl9fbWluX18ydHg4ZFwiLFxuXHRcInNoYXJlX2ltZ1wiOiBcIkNhcmRfc2hhcmVfaW1nX18yYjBGeVwiLFxuXHRcImNvbW1lbnRfaW1nXCI6IFwiQ2FyZF9jb21tZW50X2ltZ19fMjBSNExcIixcblx0XCJhcnRpY2xlX2J1dHRvbl9fbGlzdFwiOiBcIkNhcmRfYXJ0aWNsZV9idXR0b25fX2xpc3RfXzFrWGdIXCIsXG5cdFwibGlrZV9pbWdcIjogXCJDYXJkX2xpa2VfaW1nX18yd19FalwiLFxuXHRcImFydGljbGVfYnV0dG9uX19taW5faW1nXCI6IFwiQ2FyZF9hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ19fMnJWVkNcIixcblx0XCJhcnRpY2xlX2J1dHRvbl9fbGlzdF90d29cIjogXCJDYXJkX2FydGljbGVfYnV0dG9uX19saXN0X3R3b19fMTdtbHBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFydGljbGVfcHJldmlld19taWRkbGVcIjogXCJDYXJkTWlkZGxlX2FydGljbGVfcHJldmlld19taWRkbGVfXzZrNmRnXCIsXG5cdFwiYXJ0aWNsZV9wcmV2aWV3X21pZGRsZV9fY29udGFpbmVyX3Bob3RvXCI6IFwiQ2FyZE1pZGRsZV9hcnRpY2xlX3ByZXZpZXdfbWlkZGxlX19jb250YWluZXJfcGhvdG9fXzNPRTExXCIsXG5cdFwiYXJ0aWNsZV9wcmV2aWV3X21pZGRsZV9fcGhvdG9cIjogXCJDYXJkTWlkZGxlX2FydGljbGVfcHJldmlld19taWRkbGVfX3Bob3RvX18xSTdJa1wiLFxuXHRcImFydGljbGVfcHJldmlld19taWRkbGVfX3RpdGxlXCI6IFwiQ2FyZE1pZGRsZV9hcnRpY2xlX3ByZXZpZXdfbWlkZGxlX190aXRsZV9fMlVNSWlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImljb24tc2VhcmNoXCI6IFwiSGVhZGVyX2ljb24tc2VhcmNoX18yRmVDM1wiLFxuXHRcImFjdGl2ZVwiOiBcIkhlYWRlcl9hY3RpdmVfXzJoY3RQXCIsXG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMi1YV1hcIixcblx0XCJoZWFkZXJfX2xvYWRcIjogXCJIZWFkZXJfaGVhZGVyX19sb2FkX18xNWJTaVwiLFxuXHRcImhlYWRlcl9fbmF2YmFyXCI6IFwiSGVhZGVyX2hlYWRlcl9fbmF2YmFyX19sZEZoYVwiLFxuXHRcImhlYWRlcl9fbmF2YmFyX2xvZ29fY29udGFpbmVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fbmF2YmFyX2xvZ29fY29udGFpbmVyX19rSGU1Q1wiLFxuXHRcImhlYWRlcl9fbmF2YmFyX2JyYW5kX2ltYWdlXCI6IFwiSGVhZGVyX2hlYWRlcl9fbmF2YmFyX2JyYW5kX2ltYWdlX19RUkw4Z1wiLFxuXHRcImhlYWRlcl9fbmF2YmFyX21lbnVcIjogXCJIZWFkZXJfaGVhZGVyX19uYXZiYXJfbWVudV9fM1p1dS1cIixcblx0XCJoZWFkZXJfX25hdmJhcl9tZW51X2xpX3RvZ2dsZXJcIjogXCJIZWFkZXJfaGVhZGVyX19uYXZiYXJfbWVudV9saV90b2dnbGVyX19QZVhRNlwiLFxuXHRcImhlYWRlcl9fbmF2YmFyX21lbnVfX2xvZ25faW5fYnV0dG9uXCI6IFwiSGVhZGVyX2hlYWRlcl9fbmF2YmFyX21lbnVfX2xvZ25faW5fYnV0dG9uX18zcVdSR1wiLFxuXHRcImhlYWRlcl9fbmF2YmFyX21lbnVfbGlua1wiOiBcIkhlYWRlcl9oZWFkZXJfX25hdmJhcl9tZW51X2xpbmtfXzFOMUkxXCIsXG5cdFwiaGVhZGVyX19uYXZiYXJfbWVudV9saV9zZWFyY2hcIjogXCJIZWFkZXJfaGVhZGVyX19uYXZiYXJfbWVudV9saV9zZWFyY2hfXzN5aTdGXCIsXG5cdFwiaGVhZGVyX19sb2dvXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19fRTF5bDFcIixcblx0XCJoZWFkZXJfX2hlYWRlcl9fbmF2YmFyXCI6IFwiSGVhZGVyX2hlYWRlcl9faGVhZGVyX19uYXZiYXJfXzIxem1yXCIsXG5cdFwiaGVhZGVyX3BlcnNcIjogXCJIZWFkZXJfaGVhZGVyX3BlcnNfXzFzclBaXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50X3NsaWRlYmFyX3NpZ25XZWVrbHlcIjogXCJNYWluQ29udGFpbmVyX2NvbnRlbnRfc2xpZGViYXJfc2lnbldlZWtseV9fbjlDUVVcIixcblx0XCJjb250ZW50X3NsaWRlYmFyXCI6IFwiTWFpbkNvbnRhaW5lcl9jb250ZW50X3NsaWRlYmFyX18xbktHZlwiLFxuXHRcImFwcF9tb29kYm9vc3RcIjogXCJNYWluQ29udGFpbmVyX2FwcF9tb29kYm9vc3RfXzM5V2hUXCIsXG5cdFwibWFpbl9wb3N0c1wiOiBcIk1haW5Db250YWluZXJfbWFpbl9wb3N0c19fMTRmSEhcIixcblx0XCJwYWdlXCI6IFwiTWFpbkNvbnRhaW5lcl9wYWdlX19LV0E5Q1wiLFxuXHRcInNpZGViYXJcIjogXCJNYWluQ29udGFpbmVyX3NpZGViYXJfXzNNdjNnXCIsXG5cdFwidGFnc19saXN0XCI6IFwiTWFpbkNvbnRhaW5lcl90YWdzX2xpc3RfXzJWNFk1XCIsXG5cdFwiZmVlZFwiOiBcIk1haW5Db250YWluZXJfZmVlZF9fMk9zRnpcIixcblx0XCJmZWVkX190aXRsZVwiOiBcIk1haW5Db250YWluZXJfZmVlZF9fdGl0bGVfXzJzQWFrXCIsXG5cdFwic2lnbl91cF93ZWVrbHlfc2lkZWJhclwiOiBcIk1haW5Db250YWluZXJfc2lnbl91cF93ZWVrbHlfc2lkZWJhcl9fMjltZEVcIixcblx0XCJtYWluX2FydGljbGVcIjogXCJNYWluQ29udGFpbmVyX21haW5fYXJ0aWNsZV9fM0trdHRcIixcblx0XCJvcGVuQXNpZGVcIjogXCJNYWluQ29udGFpbmVyX29wZW5Bc2lkZV9fMVFGbnlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhZ3NfbGlzdF9fY29udGFpbmVyXCI6IFwiaGFzaFRhZ3NfdGFnc19saXN0X19jb250YWluZXJfXzNGQ2RUXCIsXG5cdFwidGFnc19saXN0X19pdGVtXCI6IFwiaGFzaFRhZ3NfdGFnc19saXN0X19pdGVtX18xX2dFNFwiLFxuXHRcImNvbG9yX2dyZWVuXCI6IFwiaGFzaFRhZ3NfY29sb3JfZ3JlZW5fXzN5NUE1XCIsXG5cdFwidGFnc19saXN0X19wZXJzLWZvb3RlclwiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fcGVycy1mb290ZXJfXzFPdlloXCIsXG5cdFwidGFnc19saXN0X19sb2dvLWZvb3RlclwiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fbG9nby1mb290ZXJfX2FDQzVIXCIsXG5cdFwidGFnc19saXN0X19sb2dvX2NvbnRhaW5lclwiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fbG9nb19jb250YWluZXJfXzFUaUVzXCIsXG5cdFwidGFnc19saXN0X19saXN0c1wiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fbGlzdHNfXzJtMk91XCIsXG5cdFwidGFnc19saXN0X19saXN0XCI6IFwiaGFzaFRhZ3NfdGFnc19saXN0X19saXN0X18zMS1OQlwiLFxuXHRcInRhZ3NfbGlzdF9fbGlzdF9saW5rXCI6IFwiaGFzaFRhZ3NfdGFnc19saXN0X19saXN0X2xpbmtfXzJzb0V0XCIsXG5cdFwidGFnc19saXN0X19mb290ZXJfc29jLWljb24tbGlzdHNcIjogXCJoYXNoVGFnc190YWdzX2xpc3RfX2Zvb3Rlcl9zb2MtaWNvbi1saXN0c19fM2VWb29cIixcblx0XCJ0YWdzX2xpc3RfX2Zvb3Rlcl9zb2MtaWNvblwiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fZm9vdGVyX3NvYy1pY29uX18zakotX1wiLFxuXHRcInRhZ3NfbGlzdF9fZm9vdGVyX3NvYy1pY29uLWxpc3RcIjogXCJoYXNoVGFnc190YWdzX2xpc3RfX2Zvb3Rlcl9zb2MtaWNvbi1saXN0X18xYnhuMlwiLFxuXHRcInRhZ3NfbGlzdF9fdGl0bGVcIjogXCJoYXNoVGFnc190YWdzX2xpc3RfX3RpdGxlX18yaGVHdVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbl9hcnRpY2xlXCI6IFwicG9zdF9tYWluX2FydGljbGVfXzFJZjRXXCIsXG5cdFwibWFpbl9hcnRpY2xlX190aXRsZVwiOiBcInBvc3RfbWFpbl9hcnRpY2xlX190aXRsZV9fM0dQUGtcIixcblx0XCJhcnRpY2xlX2FjdGlvbnNfbGdcIjogXCJwb3N0X2FydGljbGVfYWN0aW9uc19sZ19fbUxrcGlcIixcblx0XCJtYWluX2FydGljbGVfX2J1dHRvblwiOiBcInBvc3RfbWFpbl9hcnRpY2xlX19idXR0b25fX1JwRm9pXCIsXG5cdFwibWFpbl9hcnRpY2xlX19idXR0b25fYWN0aXZlXCI6IFwicG9zdF9tYWluX2FydGljbGVfX2J1dHRvbl9hY3RpdmVfXzZQZUhZXCIsXG5cdFwibWFpbl9hcnRpY2xlX19idXR0b25fX2xpc3RcIjogXCJwb3N0X21haW5fYXJ0aWNsZV9fYnV0dG9uX19saXN0X18xQndPaVwiLFxuXHRcIm1haW5fYXJ0aWNsZV9fYnV0dG9uX3N1bVwiOiBcInBvc3RfbWFpbl9hcnRpY2xlX19idXR0b25fc3VtX18zMmJWdVwiLFxuXHRcIm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvXCI6IFwicG9zdF9tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b19fMjlScVJcIixcblx0XCJoaWRlXCI6IFwicG9zdF9oaWRlX19INjFieFwiLFxuXHRcImFydGljbGVfYWN0aW9uc19faXRlbVwiOiBcInBvc3RfYXJ0aWNsZV9hY3Rpb25zX19pdGVtX18xWnZPaFwiLFxuXHRcImFydGljbGVfYWN0aW9uc19faXRlbV9kaXNhYmxlZFwiOiBcInBvc3RfYXJ0aWNsZV9hY3Rpb25zX19pdGVtX2Rpc2FibGVkX18ycjJFN1wiLFxuXHRcImljb24tZXllXCI6IFwicG9zdF9pY29uLWV5ZV9fMy1UcXJcIixcblx0XCJwb3N0X2JvZHlcIjogXCJwb3N0X3Bvc3RfYm9keV9fMnBHdWhcIixcblx0XCJwb3N0X2NvbG9yXCI6IFwicG9zdF9wb3N0X2NvbG9yX19sUFl3blwiLFxuXHRcIm5vbl9zdGlja3lcIjogXCJwb3N0X25vbl9zdGlja3lfXzMwVkxsXCIsXG5cdFwicG9zdF9leGNlcnB0XCI6IFwicG9zdF9wb3N0X2V4Y2VycHRfXzE1WTFJXCIsXG5cdFwibWFpbl9hcnRpY2xlX19idXR0b24tYWN0aXZlXCI6IFwicG9zdF9tYWluX2FydGljbGVfX2J1dHRvbi1hY3RpdmVfXzNEemYzXCIsXG5cdFwibWFpbl9hcnRpY2xlX19idXR0b25fcG9zdFwiOiBcInBvc3RfbWFpbl9hcnRpY2xlX19idXR0b25fcG9zdF9fNFJzYlZcIixcblx0XCJtYWluX2FydGljbGVfX3Bvc3RcIjogXCJwb3N0X21haW5fYXJ0aWNsZV9fcG9zdF9fMTFJQVdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLWRvbS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvSGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9Sb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkxpbmsiLCJ0ZXh0IiwiaHJlZiIsInN0eWxlcyIsIlBPU1RfUk9VVEUiLCJzaGFyZSIsImNvbW1lbnRJbWciLCJsaWtlIiwicG9pbnQiLCJ3YXRjaF9taW4iLCJjb21tZW50X21pbiIsImxpa2VfbWluIiwic2hhcmVfbWluIiwidXNlUm91dGVyIiwibW9tZW50IiwiSW1hZ2UiLCJDYXJkIiwiY2FyZCIsImhlbmRsZUxpa2VDbGljayIsInNoYXJlQ2FyZCIsImNhcmRWaWV3cyIsInZpZXdzIiwidG9GaXhlZCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJzbGljZSIsImFydGljbGVfcHJldmlldyIsImFydGljbGVfcHJldmlld19faGFzaCIsInQxIiwiY2F0ZWdvcnkiLCJuYW1lIiwiYXJ0aWNsZV9wcmV2aWV3X19oYXNoX2RhdGEiLCJjcmVhdGVkX2F0IiwiZm9ybWF0IiwiX2lkIiwiYXJ0aWNsZV9wcmV2aWV3X19saW5rIiwiYXJ0aWNsZV9wcmV2aWV3X190aXRsZSIsInRpdGxlIiwiaW1hZ2UiLCJzcGxpdCIsImpvaW4iLCJwb3AiLCJhcnRpY2xlX3ByZXZpZXdfX3Bob3RvIiwiYXJ0aWNsZV9hY3Rpb25zIiwiZXhjZXJwdCIsImFydGljbGVfYnV0dG9uX2NvbnRhaW5lciIsImFydGljbGVfYnV0dG9uIiwiYXJ0aWNsZV9idXR0b25fX2xpc3QiLCJsaWtlX2ltZyIsImNvbW1lbnRfaW1nIiwiT3BlblNoYXJlUG9wdXAiLCJzaGFyZV9pbWciLCJhcnRpY2xlX2J1dHRvbl9fbGlzdF90d28iLCJhcnRpY2xlX2J1dHRvbl9fbWluX2ltZyIsImxpa2VzIiwibGVuZ3RoIiwiY29tbWVudENvdW50Iiwic2hhcmVDb3VudCIsInN0eWxlQ2FyZE1pZGRsZSIsIkNhcmRNaWRkbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFydGljbGVfcHJldmlld19taWRkbGUiLCJhcnRpY2xlX3ByZXZpZXdfbWlkZGxlX19jb250YWluZXJfcGhvdG8iLCJhcnRpY2xlX3ByZXZpZXdfbWlkZGxlX19waG90byIsImFydGljbGVfcHJldmlld19taWRkbGVfX3RpdGxlIiwic3R5bGVIYXNoIiwiUmVhY3QiLCJ1c2VMb2NhdGlvbiIsIkhhc2h0YWdzIiwidmlzaWJDYXRlZ29yeSIsInRhZ3NfbGlzdF9fY29udGFpbmVyIiwidGFnc19saXN0X190aXRsZSIsInNvcnQiLCJhIiwiYiIsIm1hcCIsImhhc2giLCJ0YWdzX2xpc3RfX2l0ZW0iLCJ0YWdzX2xpc3RfX2Zvb3RlciIsInRhZ3NfbGlzdF9fbG9nb19jb250YWluZXIiLCJ0YWdzX2xpc3RfX3BlcnNfZm9vdGVyIiwidGFnc19saXN0X19sb2dvX2Zvb3RlciIsInRhZ3NfbGlzdF9fbGlzdHMiLCJ0YWdzX2xpc3RfX2xpc3RfbGluayIsInRhZ3NfbGlzdF9fbGlzdCIsInRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29uX2xpc3RzIiwidGFnc19saXN0X19mb290ZXJfc29jX2ljb25fbGlzdCIsInRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29uIiwiSGVhZCIsIkEiLCJwZXJzIiwibWVudSIsImxvYWQiLCJNQUlOUE9TVFNfUk9VVEUiLCJTRUFSQ0hfUk9VVEUiLCJtb29kYm9vc3RMb2dvIiwiSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyX19uYXZiYXIiLCJoZWFkZXJfX25hdmJhcl9sb2dvX2NvbnRhaW5lciIsImUiLCJhc2lkZUhlbmRsZXIiLCJoZWFkZXJfX25hdmJhcl9tZW51X2xpIiwiaGVhZGVyX19uYXZiYXJfbWVudV9saV90b2dnbGVyIiwiaGVhZGVyX19uYXZiYXJfbWVudV9saW5rIiwiaGVhZGVyX19oZWFkZXJfX25hdmJhciIsImhlYWRlcl9wZXJzIiwiaGVhZGVyX19sb2dvIiwiaGVhZGVyX19uYXZiYXJfYnJhbmRfaW1hZ2UiLCJoZWFkZXJfX25hdmJhcl9tZW51IiwiaGVhZHJfX25hdmJhcl9tZW51X2xpIiwiaGVhZGVyX19uYXZiYXJfbWVudV9saV9zZWFyY2giLCJvcGVuQXV0aCIsImhlYWRlcl9fbmF2YmFyX21lbnVfX2xvZ25faW4iLCJoZWFkZXJfX25hdmJhcl9tZW51X19sb2duX2luX2J1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzTWFpbiIsIkhhc2hUYWdzIiwiTWFpbkNvbnRhaW5lciIsImNoaWxkcmVuIiwibWlkZGxlQ2FyZCIsInNlck1pZGRsZUNhcmQiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImxvYWRNaWRkbGVDYXJkIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3BvbnNlMiIsImpzb24iLCJhcHBfbW9vZGJvb3N0IiwibWFpbl9wb3N0cyIsInRhZ3NfbGlzdCIsInBhZ2UiLCJmZWVkIiwic2lkZWJhciIsImNvbnRlbnRfc2xpZGViYXIiLCJjb250ZW50X3NsaWRlYmFyX3NpZ25XZWVrbHkiLCJNYWluUG9zdHMiLCJ1c2VycyIsInBvc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxvYWRpbmciLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwicmVsIiwiYXMiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwicGFyc2UiLCJzdHlsZVBvc3QiLCJQb3N0ciIsIm1haW5fYXJ0aWNsZSIsIm1haW5fYXJ0aWNsZV9fcG9zdCIsInBvc3RfY29sb3IiLCJtYWluX2FydGljbGVfX3RpdGxlIiwibWFpbl9hcnRpY2xlX19idXR0b24iLCJtYWluX2FydGljbGVfX2J1dHRvbl9wb3N0IiwibWFpbl9hcnRpY2xlX19idXR0b25fYWN0aXZlIiwic2Nyb2xsVG9NeVJlZiIsIm1haW5fYXJ0aWNsZV9fYnV0dG9uX19saXN0IiwibWFpbl9hcnRpY2xlX19idXR0b25fc3VtIiwibWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d28iLCJwb3N0X2V4Y2VycHQiLCJfX2h0bWwiLCJib2R5Iiwibm9uX3N0aWNreSIsIlBvc3RlciIsImFzeW5jIiwiUG9zdCIsInVzZXIiLCJwb3N0cyIsInF1ZXJ5IiwiZGF0YSIsInNlZXREYXRhIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiLCJBRE1JTl9ST1VURSIsIkFETUlOX1JPTEVfUk9VUkUiLCJBRE1JTl9DQVRFR09SWV9ST1VURSIsIkFETUlOX1BPU1RfUk9VVEUiLCJMT0dJTl9ST1VURSIsIkxPR0lOX0FETUlOX1JPVVRFIiwiUkVHSVNURVJfUk9VVEUiLCJMSUZFX1JPVVRFIiwiUFJJVkFDWUNPT0tJRVNfUk9VVEUiXSwic291cmNlUm9vdCI6IiJ9