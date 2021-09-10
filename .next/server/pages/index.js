(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _components_MainPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainPosts */ "./components/MainPosts.js");
/* harmony import */ var _post_id___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/[id] */ "./src/pages/post/[id].js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/Router */ "next/Router");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\src\\pages\\index.js";







function index({
  users,
  categories
}) {
  const {
    query
  } = (0,next_Router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  console.log(categories);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainPosts__WEBPACK_IMPORTED_MODULE_2__.default, {
      users: users[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
async function getStaticProps(context) {
  const response = await fetch('https://api.moodboost.me/posts');
  const response2 = await fetch('https://api.moodboost.me/categories');
  const users = await response.json();
  const categories = await response2.json();
  return {
    props: {
      users,
      categories
    }
  };
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL2NvbXBvbmVudHMvQS5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL2NvbXBvbmVudHMvQ2FyZE1pZGRsZS5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL2NvbXBvbmVudHMvSGFzaFRhZ3MuanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL2NvbXBvbmVudHMvTWFpblBvc3RzLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vc3JjL3BhZ2VzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9zcmMvcGFnZXMvcG9zdC9baWRdLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vdXRpbHMvY29uc3RzLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vcHVibGljL2ltYWdlL0lwaG9uZS1zcGlubmVyLTIuZ2lmIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vcHVibGljL2ltYWdlL2J1cmdlci1pY29uLnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3B1YmxpYy9pbWFnZS9jb21tZW50LW1pbi5zdmciLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9wdWJsaWMvaW1hZ2UvY29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9wdWJsaWMvaW1hZ2UvbGlrZS1taW4uc3ZnIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vcHVibGljL2ltYWdlL2xpa2Uuc3ZnIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vcHVibGljL2ltYWdlL21vb2Rib29zdC1sb2dvLnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3B1YmxpYy9pbWFnZS9wZXJzLnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3B1YmxpYy9pbWFnZS9wb2ludC5zdmciLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9wdWJsaWMvaW1hZ2Uvc2hhcmUtbWluLnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3B1YmxpYy9pbWFnZS9zaGFyZS5zdmciLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9wdWJsaWMvaW1hZ2Uvd2F0Y2gtbWluLnN2ZyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL3N0eWxlcy9DYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vc3R5bGVzL0NhcmRNaWRkbGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0Ly4vc3R5bGVzL01haW5Db250YWluZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9zdHlsZXMvaGFzaFRhZ3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvLi9zdHlsZXMvcG9zdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwiaHRtbC1kb20tcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC9leHRlcm5hbCBcIm5leHQvSGVhZFwiIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJuZXh0L1JvdXRlclwiIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9tb29kYm9vc3QtbmV4dC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL21vb2Rib29zdC1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbW9vZGJvb3N0LW5leHQvZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHt0ZXh0LCBocmVmfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPGE+e3RleHR9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsIlxyXG4vLyBpbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL0NhcmQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQT1NUX1JPVVRFIH0gZnJvbSAnLi8uLi91dGlscy9jb25zdHMnO1xyXG4gaW1wb3J0IHNoYXJlIGZyb20gJy4uL3B1YmxpYy9pbWFnZS9zaGFyZS5zdmcnO1xyXG5pbXBvcnQgY29tbWVudEltZyBmcm9tICcuLi9wdWJsaWMvaW1hZ2UvY29tbWVudC5zdmcnO1xyXG4gaW1wb3J0IGxpa2UgZnJvbSAnLi4vcHVibGljL2ltYWdlL2xpa2Uuc3ZnJztcclxuaW1wb3J0IHBvaW50IGZyb20gJy4uL3B1YmxpYy9pbWFnZS9wb2ludC5zdmcnO1xyXG4gaW1wb3J0IHdhdGNoX21pbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2Uvd2F0Y2gtbWluLnN2Zyc7XHJcbiBpbXBvcnQgY29tbWVudF9taW4gZnJvbSAnLi4vcHVibGljL2ltYWdlL2NvbW1lbnQtbWluLnN2Zyc7XHJcbmltcG9ydCBsaWtlX21pbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2UvbGlrZS1taW4uc3ZnJztcclxuIGltcG9ydCBzaGFyZV9taW4gZnJvbSAnLi4vcHVibGljL2ltYWdlL3NoYXJlLW1pbi5zdmcnO1xyXG4gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xyXG4gaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG4vLyBpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbi8vIGltcG9ydCB7ZmV0Y2hBbGxDb21tZW50fSBmcm9tICcuLi8uLi9odHRwL2NvbW1lbnRBcGknO1xyXG4vLyBpbXBvcnQgeyBvYnNlcnZlciwgdXNlU3RhdGljUmVuZGVyaW5nIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcclxuLy8gaW1wb3J0IHtGYWNlYm9va1NoYXJlQ291bnR9IGZyb20gJ3JlYWN0LXNoYXJlJ1xyXG4vLyBpbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG4vLyBpbXBvcnQgU2VvSGVhZCBmcm9tICcuLi9TRU8vU2VvSGVhZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7Y2FyZCwgaGVuZGxlTGlrZUNsaWNrLCBzaGFyZUNhcmR9KSA9PiB7XHJcbiAgICBsZXQgY2FyZFZpZXdzID0gKGNhcmQudmlld3MgLyAxMDAwKS50b0ZpeGVkKDEpXHJcbiAgICAvLyBjb25zdCB7Y29tbWVudH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICAvLyBjb25zdCB7cG9zdH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICAvLyBjb25zdCB7YWRtaW59ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgLy8gY29uc3Qge3VzZXJ9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIFxyXG4gICAgLy8gY29uc3QgaXNMaWtlZCA9IGNhcmQubGlrZXM/LnNvbWUoKGxpa2UpID0+IGxpa2UgPT09IGFkbWluLmFkbWluPy5faWQgPyBhZG1pbi5hZG1pbj8uX2lkIDogdXNlci51c2VyLl9pZClcclxuICAgIC8vIGNvbnN0IGNhcmRMaWtlQnV0dG9uQ2xhc3NOYW1lID0gYGFydGljbGUtYnV0dG9uX19saXN0ICR7aXNMaWtlZCAmJiAnbGlrZSd9YFxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pblRva2VuXCIpXHJcbiAgICAvLyAgICAgIGZldGNoQWxsQ29tbWVudChjYXJkLl9pZCwgdG9rZW4pLnRoZW4oZGF0YSA9PiBjb21tZW50LnNldEFsbENvbW1lbnRzKGRhdGEuZGF0YSkpXHJcbiAgICAvLyAgICAgfSwgMjApXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBPcGVuU2hhcmVQb3B1cCAoKSB7XHJcbiAgICAvLyAgICAgcG9zdC5zZXRPcGVuU2hhcmUodHJ1ZSlcclxuICAgIC8vICAgICBzaGFyZUNhcmQoY2FyZClcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyb3V0ZXIuYXNQYXRoLnNsaWNlKDAsIDUpKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9wcmV2aWV3fT5cclxuICAgICAgICAgICAgey8qIDxTZW9IZWFkIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX3ByZXZpZXdfX2hhc2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnQxfT57Y2FyZC5jYXRlZ29yeS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX3ByZXZpZXdfX2hhc2hfZGF0YX0+e21vbWVudChjYXJkLmNyZWF0ZWRfYXQpLmZvcm1hdChcIkREIE1NTSwgWVlZWVwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cm91dGVyLmFzUGF0aC5zbGljZSgwLCA1KSAhPSAnLycgPyBgJHtjYXJkLl9pZH1gIDogJ3Bvc3QvJyArIGNhcmQuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX3ByZXZpZXdfX2xpbmt9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfcHJldmlld19fdGl0bGV9PntjYXJkLnRpdGxlfTwvaDM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS8nICsgY2FyZC5pbWFnZS5zcGxpdCgnLicpLnNsaWNlKDAsIC0xKS5qb2luKCcuJykgKyBcIi1cIiArICdtZWRpdW0nICsgJy4nICsgY2FyZC5pbWFnZS5zcGxpdCgnLicpLnBvcCgpfSBhbHQ9e2NhcmQudGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfcHJldmlld19fcGhvdG99Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2FjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NhcmQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMubGlrZV9pbWd9IHNyYz17bGlrZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpa2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbGlzdH0gY29tbWVudGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2NhcmQuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF9pbWd9IHNyYz17Y29tbWVudEltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29tbWVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gT3BlblNoYXJlUG9wdXAoKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXJ0aWNsZV9idXR0b25fX2xpc3R9IHNoZXJlYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuc2hhcmVfaW1nfSBzcmM9e3NoYXJlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgYXJ0aWNsZV9idXR0b25fX21pbiAke3N0eWxlcy5hcnRpY2xlX2J1dHRvbn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e3dhdGNoX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZFZpZXdzKyAnSyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvfT48SW1hZ2Ugc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXtsaWtlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZD8ubGlrZXM/Lmxlbmd0aCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d299PjxJbWFnZSBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9idXR0b25fX21pbl9pbWd9IHNyYz17Y29tbWVudF9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZC5jb21tZW50Q291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvfT48SW1hZ2Ugc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e3NoYXJlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkLnNoYXJlQ291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkIiwiaW1wb3J0IHN0eWxlQ2FyZE1pZGRsZSBmcm9tICcuLi9zdHlsZXMvQ2FyZE1pZGRsZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5cclxuY29uc3QgQ2FyZE1pZGRsZSA9ICh7Y2FyZH0pID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgyMiwgMjYpID09PSAncG9zdCcgPyBgLyR7Y2FyZC5faWR9YCA6ICdwb3N0LycgKyBjYXJkLl9pZClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlQ2FyZE1pZGRsZS5hcnRpY2xlX3ByZXZpZXdfbWlkZGxlfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17d2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMjIsIDI2KSAhPT0gJycgPyBgJHtjYXJkLl9pZH1gIDogJ3Bvc3QvJyArIGNhcmQuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVDYXJkTWlkZGxlLmFydGljbGVfcHJldmlld19taWRkbGVfX2NvbnRhaW5lcl9waG90b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9hcGkubW9vZGJvb3N0Lm1lLycgKyBjYXJkLmltYWdlLnNwbGl0KCcuJykuc2xpY2UoMCwgLTEpLmpvaW4oJy4nKSArIFwiLVwiICsgJ21lZGl1bScgKyAnLicgKyBjYXJkLmltYWdlLnNwbGl0KCcuJykucG9wKCl9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVDYXJkTWlkZGxlLmFydGljbGVfcHJldmlld19taWRkbGVfX3Bob3RvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVDYXJkTWlkZGxlLmFydGljbGVfcHJldmlld19taWRkbGVfX3RpdGxlfT57Y2FyZC50aXRsZX08L2gzPiBcclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkTWlkZGxlIiwiaW1wb3J0IHN0eWxlSGFzaCBmcm9tICcuLi9zdHlsZXMvaGFzaFRhZ3MubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgSGFzaHRhZ3MgPSAoe3Zpc2liQ2F0ZWdvcnl9KSAgPT4ge1xyXG4gICAgLy8gY29uc3Qge2NhdGVnb3J5fSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X190aXRsZX0+TGlmZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Zpc2liQ2F0ZWdvcnk/LnNsaWNlKCkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhLm5hbWUgPCBiLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEubmFtZSA+IGIubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcCgoaGFzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9faXRlbX0ga2V5PXtoYXNoLl9pZH0+I3toYXNoLm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2Zvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2xvZ29fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX3BlcnNfZm9vdGVyfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2xvZ29fZm9vdGVyfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fbGlzdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJ0YWdzLWxpc3RfX2xpc3RcIj5BYm91dDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19saXN0X2xpbmt9IGhyZWY9XCIjXCI+PGxpIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fbGlzdH0+UHJpdmFjeSAmIENvb2tpZXM8L2xpPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19mb290ZXJfc29jX2ljb25fbGlzdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29uX2xpc3R9PjxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21vb2Rib29zdC5tZVwiPjxpbWcgY2xhc3NOYW1lPXtzdHlsZUhhc2gudGFnc19saXN0X19mb290ZXJfc29jX2ljb259ICAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29uX2xpc3R9PjxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIiBocmVmPVwiaHR0cHM6Ly90Lm1lL2pvaW5jaGF0L1FUenIzOFRnNWRoalpESTEvXCI+PGltZyBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2Zvb3Rlcl9zb2NfaWNvbn0gLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlSGFzaC50YWdzX2xpc3RfX2Zvb3Rlcl9zb2NfaWNvbl9saXN0fT48YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCIgaHJlZj1cImh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vbW9vZGJvb3N0bS9cIj48aW1nIGNsYXNzTmFtZT17c3R5bGVIYXNoLnRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29ufSAgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYXNodGFncyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEEgZnJvbSAnLi8uLi9jb21wb25lbnRzL0EnO1xyXG5pbXBvcnQgcGVycyBmcm9tICcuLy4uL3B1YmxpYy9pbWFnZS9wZXJzLnN2Zyc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vLi4vcHVibGljL2ltYWdlL2J1cmdlci1pY29uLnN2Zyc7XHJcbmltcG9ydCBsb2FkIGZyb20gJy4vLi4vcHVibGljL2ltYWdlL0lwaG9uZS1zcGlubmVyLTIuZ2lmJ1xyXG5pbXBvcnQgeyBNQUlOUE9TVFNfUk9VVEUsIFNFQVJDSF9ST1VURSB9IGZyb20gJy4vLi4vdXRpbHMvY29uc3RzJztcclxuaW1wb3J0IG1vb2Rib29zdExvZ28gZnJvbSAnLi8uLi9wdWJsaWMvaW1hZ2UvbW9vZGJvb3N0LWxvZ28uc3ZnJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPm1vb2Rib29zdC1OZXh0PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMS9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1naUpGNmtrb3FOUTAwdnkrSE1EUDdhek91TDB4dGJmSWNhVDl3aktIcjhSYkRWZGRWSHlUZkFBc3Jla3dLbVAxXCJcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMS9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcclxuICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQteWdiVjlraXFVYzZvYTRtc1huOTg2OHBUdFdNZ2lRYWVZSDcvdDdMRUNMYnlQQTJ4NjVLZ2Y4ME9KRmRyb2FmV1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cclxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJfX25hdmJhcn0gY29udGFpbmVyYH0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19uYXZiYXJfbG9nb19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoZSkgPT4gYXNpZGVIZW5kbGVyKGUpfSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX25hdmJhcl9tZW51X2xpLCBzdHlsZXMuaGVhZGVyX19uYXZiYXJfbWVudV9saV90b2dnbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBpZD1cInNpZGViYXJfdG9nZ2xlclwiIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbmF2YmFyX21lbnVfbGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezE5fSBoZWlndGg9ezE5fSBzcmM9e21lbnV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLycgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19oZWFkZXJfX25hdmJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9wZXJzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezUyfSBoZWlndGg9ezc4fSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2xvZ299IHNyYz17cGVyc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MTUwfSBoZWlnaHQ9ezMwfSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX25hdmJhcl9icmFuZF9pbWFnZX0gc3JjPXttb29kYm9vc3RMb2dvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbmF2YmFyX21lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkcl9fbmF2YmFyX21lbnVfbGksIHN0eWxlcy5oZWFkZXJfX25hdmJhcl9tZW51X2xpX3NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9e1NFQVJDSF9ST1VURX0gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19uYXZiYXJfbWVudV9saW5rfT48aSBjbGFzc05hbWU9XCJpY29uLXNlYXJjaFwiPjwvaT48L0E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gb3BlbkF1dGgoKX0gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19uYXZiYXJfbWVudV9fbG9nbl9pbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbmF2YmFyX21lbnVfX2xvZ25faW5fYnV0dG9ufT5oZ2pmZ2hqPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbmF2PiAgXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzTWFpbiBmcm9tICcuLi9zdHlsZXMvTWFpbkNvbnRhaW5lci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBIYXNoVGFncyBmcm9tICcuL0hhc2hUYWdzJztcclxuaW1wb3J0IENhcmRNaWRkbGUgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTWlkZGxlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNYWluQ29udGFpbmVyKHtjaGlsZHJlbn0pIHtcclxuY29uc3QgW21pZGRsZUNhcmQsIHNlck1pZGRsZUNhcmRdID0gdXNlU3RhdGUoW10pXHJcbmNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxudXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTWlkZGxlQ2FyZCAoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubW9vZGJvb3N0Lm1lL2NhdGVnb3JpZXMnKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5tb29kYm9vc3QubWUvcG9zdHMnKVxyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGF3YWl0IHJlc3BvbnNlMi5qc29uKClcclxuXHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yeSlcclxuICAgICAgICBzZXJNaWRkbGVDYXJkKGNhcmRbMF0pXHJcbiAgICB9XHJcbiAgICBsb2FkTWlkZGxlQ2FyZCgpXHJcbiAgICBcclxufSwgW10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzTWFpbi5hcHBfbW9vZGJvb3N0fSBjbGFzc05hbWU9e2Bjb250YWluZXIgJHtzdHlsZXNNYWluLm1haW5fcG9zdHN9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzTWFpbi50YWdzX2xpc3R9PlxyXG4gICAgICAgIDxIYXNoVGFncyB2aXNpYkNhdGVnb3J5PXtjYXRlZ29yaWVzfSAvPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlc01haW4ucGFnZX0+XHJcbiAgICAgICAgICAgIDxtYWluICBjbGFzc05hbWU9e3N0eWxlc01haW4uZmVlZH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICB7Lyoge3Zpc2libGVMb2dvTGlmZSgpICYmIDxoNCBjbGFzc05hbWU9XCJmZWVkX190aXRsZVwiPntgJHtjYXRlZ29yeS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUgPT09IHVuZGVmaW5lZCA/ICdMaWZlJyA6IGBMaWZlLSR7Y2F0ZWdvcnkuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lfWB9YH08L2g0Pn0gKi99XHJcbiAgICAgICAgICAgIHsvKiA8TWFpbiBzY3JvbGxEb3duUG9zdD17c2Nyb2xsRG93blBvc3R9IGhlbmRsZUxpa2VDbGljaz17aGVuZGxlTGlrZUNsaWNrfSBjYXJkPXtwb3N0LnBvc3RzfSBpc0xvYWQ9e2lzTG9hZH0gc2hhcmVDYXJkPXtzaGFyZUNhcmR9IHNoYXJlQ2xpY2s9e3NoYXJlQ2xpY2t9Lz4gKi99XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPXtzdHlsZXNNYWluLnNpZGViYXJ9IGRhdGEtdi1jMWUzZDg3MD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzTWFpbi5jb250ZW50X3NsaWRlYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc01haW4uY29udGVudF9zbGlkZWJhcl9zaWduV2Vla2x5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U2lnblVwV2Vla2x5IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21pZGRsZUNhcmQubWFwKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1pZGRsZSBjYXJkPXtjYXJkfSBrZXk9e2NhcmQuX2lkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIHtjYXJkU2hhcmUudXJsICYmIGNhcmRTaGFyZS5pbWcgJiYgXHJcbiAgICAgICAgICAgIDxQb3B1cFNoYXJlIGxvZz17J2h0dHBzOi8vbW9vZGJvb3N0Lm1lL21haW4vcG9zdC8nICsgY2FyZFNoYXJlLnVybH0gIFxyXG4gICAgICAgICAgICBpbWc9eydodHRwczovL2FwaS5tb29kYm9vc3QubWUvJyArIGNhcmRTaGFyZS5pbWcuc3BsaXQoJy4nKS5zbGljZSgwLCAtMSkuam9pbignLicpICsgXCItXCIgKyAnbWVkaXVtJyArICcuJyArIGNhcmRTaGFyZS5pbWcuc3BsaXQoJy4nKS5wb3AoKX0gXHJcbiAgICAgICAgICAgIGlkPXtjYXJkU2hhcmUuaWR9IHNoYXJlQ2xpY2s9e2NhcmRTaGFyZS5jbGlja3N9Lz59ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXJcclxuIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcclxuXHJcbmZ1bmN0aW9uIE1haW5Qb3N0cyh7dXNlcnN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt1c2Vycy5tYXAocG9zdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2FyZD17cG9zdH0ga2V5PXtwb3N0Ll9pZH0vPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBvc3RzXHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubW9vZGJvb3N0Lm1lL3Bvc3RzJylcclxuLy8gICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7dXNlcnN9LFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgIWlzVmlzaWJsZSAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogdHJ1ZSxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0pKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XHJcbmltcG9ydCBNYWluUG9zdHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYWluUG9zdHMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4vcG9zdC9baWRdJztcclxuaW1wb3J0IHt1c2VMb2NhdGlvbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L1JvdXRlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gaW5kZXgoe3VzZXJzLCBjYXRlZ29yaWVzfSkge1xyXG5cclxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxNYWluUG9zdHMgdXNlcnM9e3VzZXJzWzBdfS8+XHJcbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS9wb3N0cycpXHJcbiAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubW9vZGJvb3N0Lm1lL2NhdGVnb3JpZXMnKVxyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7dXNlcnMsIGNhdGVnb3JpZXN9LFxyXG4gICAgfVxyXG59IiwiLy8gaW1wb3J0ICcuL1Bvc3Quc2Nzcyc7XHJcbi8vIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCBwb3N0ZWZ9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHtmZXRjaE9uZXBvc3QsIGZldGNoRGVsZXRlTGlrZSwgZmV0Y2hBZGRMaWtlcywgZmV0Y2hTaGFyZX0gZnJvbSAnLi4vLi4vaHR0cC9wb3N0QVBJJztcclxuLy8gaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xyXG4vLyBpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XHJcbi8vIGltcG9ydCB7IGZldGNoQWxsQ29tbWVudCB9IGZyb20gXCIuLi8uLi9odHRwL2NvbW1lbnRBcGlcIjtcclxuaW1wb3J0IHNoYXJlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9zaGFyZS5zdmcnO1xyXG5pbXBvcnQgbGlrZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvbGlrZS5zdmcnO1xyXG5pbXBvcnQgcG9pbnQgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL3BvaW50LnN2Zyc7XHJcbmltcG9ydCB3YXRjaF9taW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL3dhdGNoLW1pbi5zdmcnO1xyXG5pbXBvcnQgY29tbWVudF9taW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL2NvbW1lbnQtbWluLnN2Zyc7XHJcbmltcG9ydCBsaWtlX21pbiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvbGlrZS1taW4uc3ZnJztcclxuaW1wb3J0IHNoYXJlX21pbiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2Uvc2hhcmUtbWluLnN2Zyc7XHJcbi8vIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuLy8gaW1wb3J0IFNpZ25VcFdlZWtseSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpZ25VcFdlZWtseS9TaWduVXBXZWVrbHknO1xyXG4vLyBpbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cydcclxuaW1wb3J0IGNvbW1lbnRJbWcgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL2NvbW1lbnQuc3ZnJztcclxuLy8gLy8gaW1wb3J0IFNlb0hlYWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TRU8vU2VvSGVhZCc7XHJcbi8vIC8vIGltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbi8vIGltcG9ydCBQb3B1cFNoYXJlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9wdXBTaGFyZS9Qb3B1cFNoYXJlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtZG9tLXBhcnNlcic7XHJcbmltcG9ydCBzdHlsZVBvc3QgZnJvbSAnLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuXHJcbmNvbnN0IFBvc3RyID0gKHtwb3N0fSkgPT4ge1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCBbcG9zdCwgc2V0cG9zdF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIC8vIGNvbnN0IHtpZH0gPSB1c2VQYXJhbXMoKVxyXG4gICAgLy8gY29uc3Qge3Bvc3R9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgLy8gY29uc3Qge3Bvc3R9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgLy8gY29uc3Qge2FkbWlufSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgIC8vIGNvbnN0IHtjb21tZW50fSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgICBsZXQgY2FyZFZpZXdzID0gKHBvc3Qudmlld3MgLyAxMDAwKS50b0ZpeGVkKDEpXHJcbiAgICAvLyBjb25zdCBbY2FyZFNoYXJlLCBzZXRDYXJkU2hhcmVdID0gdXNlU3RhdGUoeyB1cmw6XCJcIiwgaW1nOlwiXCIsIGlkOlwiXCIsIGNsaWNrczpcIlwiIH0pXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRtaW5Ub2tlblwiKVxyXG4gICAgLy8gICAgIGZldGNoT25lcG9zdChpZCwgdG9rZW4pLnRoZW4oZGF0YSA9PiBzZXRwb3N0KGRhdGEuZGF0YSkpXHJcbiAgICAvLyB9LCBbaWRdKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pblRva2VuXCIpXHJcbiAgICAvLyAgICAgIGZldGNoQWxsQ29tbWVudChpZCwgdG9rZW4pLnRoZW4oZGF0YSA9PiBjb21tZW50LnNldEFsbENvbW1lbnRzKGRhdGEuZGF0YSkpXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyBjb25zdCBpc0xpa2VkID0gcG9zdC5saWtlcz8uc29tZSgobGlrZSkgPT4gbGlrZSA9PT0gYWRtaW4uYWRtaW4uX2lkKVxyXG4gICAgLy8gY29uc3QgY2FyZExpa2VCdXR0b25DbGFzc05hbWUgPSBgbWFpbi1hcnRpY2xlX19idXR0b25fX2xpc3QgJHtpc0xpa2VkICYmICdsaWtlJ31gXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gaGVuZGxlTGlrZUNsaWNrICgpIHtcclxuICAgIC8vICAgICBpZihwb3N0LmlzQXV0aCkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBwb3N0dG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvc3RUb2tlblwiKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBpc0xpa2VkID0gcG9zdC5saWtlcy5zb21lKChsaWtlKSA9PiBsaWtlID09PSBhZG1pbi5hZG1pbi5faWQpXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGxpa2VSZXF1ZXN0ID0gaXNMaWtlZCA/IGZldGNoRGVsZXRlTGlrZShwb3N0Ll9pZCwgcG9zdHRva2VuKSA6IGZldGNoQWRkTGlrZXMocG9zdC5faWQsIHBvc3R0b2tlbilcclxuICAgIC8vICAgICAgICAgbGlrZVJlcXVlc3QudGhlbigobmV3UG9zdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0cG9zdCh7Li4ucG9zdCwgbGlrZXM6bmV3UG9zdC5kYXRhLmxpa2VzfSlcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBwb3N0LnNldE9wZW5BdXRoKHRydWUpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc3QgY29tID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2Nyb2xsVG9NeVJlZiAoKSB7XHJcbiAgICAvLyAgIGNvbS5jdXJyZW50LnNjcm9sbEludG9WaWV3KClcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAvLyAgIH07XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAvLyByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzaGFyZUNsaWNrIChpZCkge1xyXG4gICAgLy8gICAgIGZldGNoU2hhcmUoaWQpXHJcbiAgICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldHBvc3Qoey4uLnBvc3QsIHNoYXJlQ291bnQ6ZGF0YS5kYXRhLnNoYXJlQ291bnR9KVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gT3BlblNoYXJlUG9wdXAgKCkge1xyXG4gICAgLy8gICAgIHBvc3Quc2V0T3BlblNoYXJlKHRydWUpXHJcbiAgICAvLyAgICAgc2V0Q2FyZFNoYXJlKHt1cmw6cG9zdC5faWQsIGltZzpwb3N0LmltYWdlLCBpZDpwb3N0Ll9pZCwgY2xpY2tzOnNoYXJlQ2xpY2t9KVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19wb3N0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlUG9zdC5wb3N0X2NvbG9yfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9wcmV2aWV3X19oYXNofT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3QxJz57cG9zdD8uY2F0ZWdvcnk/Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttb21lbnQocG9zdC5jcmVhdGVkX2F0KS5mb3JtYXQoXCJERCBNTU0sIFlZWVlcIil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX190aXRsZX0+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b24sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9wb3N0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fYWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoZW5kbGVMaWtlQ2xpY2soKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0Lmxpa2VfaW1nfSBzcmM9e2xpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpa2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb015UmVmKCl9IGNsYXNzTmFtZT17YCR7c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX19saXN0fSBjb21tZW50YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5jb21tZW50X2ltZ30gc3JjPXtjb21tZW50SW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBPcGVuU2hhcmVQb3B1cCgpfSBjbGFzc05hbWU9e2Ake3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9fbGlzdH0gc2hlcmVgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LnNoYXJlX2ltZ30gc3JjPXtzaGFyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9zdW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e3dhdGNoX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmRWaWV3cyArICdLJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT48aW1nICBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXtsaWtlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QubGlrZXM/Lmxlbmd0aCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT48aW1nIHNyYz17cG9pbnR9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX21pbl9pbWd9IHNyYz17Y29tbWVudF9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QuY29tbWVudENvdW50IHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXtzaGFyZV9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3Quc2hhcmVDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlUG9zdC5wb3N0X2V4Y2VycHR9Pntwb3N0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInBvc3QtYm9keVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5ib2R5IH19Lz4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5ib2R5IH19IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b24sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbi1wb3N0LCBzdHlsZVBvc3Qubm9uX3N0aWNreX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGVuZGxlTGlrZUNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0Lmxpa2VfaW1nfSBzcmM9e2xpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpa2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb015UmVmKCl9IGNsYXNzTmFtZT1cIm1haW4tYXJ0aWNsZV9fYnV0dG9uX19saXN0IGNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3QuY29tbWVudF9pbWd9IHNyYz17Y29tbWVudEltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29tbWVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gT3BlblNoYXJlUG9wdXAoKX0gY2xhc3NOYW1lPVwibWFpbi1hcnRpY2xlX19idXR0b25fX2xpc3Qgc2hlcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInNoYXJlLWltZ1wiIHNyYz17c2hhcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNoYXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1hcnRpY2xlX19idXR0b24tc3VtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e3dhdGNoX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmRWaWV3cyArICdLJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPjxpbWcgIHNyYz17cG9pbnR9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdhcnRpY2xlLWJ1dHRvbl9fbWluLWltZycgc3JjPXtsaWtlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QubGlrZXM/Lmxlbmd0aCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdhcnRpY2xlLWJ1dHRvbl9fbWluLWltZycgc3JjPXtjb21tZW50X21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5jb21tZW50Q291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj48aW1nIHNyYz17cG9pbnR9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e3NoYXJlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5zaGFyZUNvdW50IHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IHJlZj17Y29tfSBjbGFzc05hbWU9XCJzaWduLXVwLXdlZWtseV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxTaWduVXBXZWVrbHkgLz4gXHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIHsvKiA8Q29tbWVudHMgIHBvc3Q9e3Bvc3R9Lz4gKi99XHJcbiAgICAgICAgey8qIHtjYXJkU2hhcmUudXJsICYmIGNhcmRTaGFyZS5pbWcgJiYgPFBvcHVwU2hhcmUgbG9nPXsnaHR0cHM6Ly9tb29kYm9vc3QubWUvbWFpbi9wb3N0LycgKyBjYXJkU2hhcmUudXJsfSBpbWc9eydodHRwczovL2FwaS5tb29kYm9vc3QubWUvJytjYXJkU2hhcmUuaW1nfSBpZD17Y2FyZFNoYXJlLmlkfSBzaGFyZUNsaWNrPXtjYXJkU2hhcmUuY2xpY2tzfS8+fSAqL31cclxuIFxyXG4gICAgPC9hcnRpY2xlPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHJcclxuXHJcbiIsImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L1JvdXRlcic7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XHJcbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi4vcG9zdCdcclxuaW1wb3J0IE1haW5Qb3N0cyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01haW5Qb3N0cyc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0ICh7dXNlciwgcG9zdHN9KSB7XHJcbmNvbnNvbGUubG9nKHBvc3RzKVxyXG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbZGF0YSwgc2VldERhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBhc3luYyBmdW5jdGlvbiBsb2FkICgpIHtcclxuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5tb29kYm9vc3QubWUvcG9zdHMnKVxyXG4vLyAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgICAgIHNlZXREYXRhKHVzZXJzWzBdKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgbG9hZCgpXHJcbiAgXHJcbi8vIH0sIFtdKVxyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxQb3N0ZXIgcG9zdD17dXNlcn0vPlxyXG4gICAgICAgICAgICA8TWFpblBvc3RzIHVzZXJzPXtwb3N0c1swXX0vPlxyXG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS9wb3N0cy9wb3N0LyR7cGFyYW1zLmlkfWApXHJcbiAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubW9vZGJvb3N0Lm1lL3Bvc3RzYClcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge3VzZXIsIHBvc3RzfSxcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IEFETUlOX1JPVVRFID0gJy9hZG1pbidcclxuZXhwb3J0IGNvbnN0IEFETUlOX1JPTEVfUk9VUkUgPSAnL2FkbWluL2FkbWlucm9sZSdcclxuZXhwb3J0IGNvbnN0IEFETUlOX0NBVEVHT1JZX1JPVVRFID0gJy9hZG1pbi9jYXRlZ29yeSdcclxuZXhwb3J0IGNvbnN0IEFETUlOX1BPU1RfUk9VVEUgPSBcIi9hZG1pbi9wb3N0XCJcclxuZXhwb3J0IGNvbnN0IExPR0lOX1JPVVRFID0gJy9zaWduaW4nXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9BRE1JTl9ST1VURSA9ICcvc2lnbmluYWRtaW4nXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9ST1VURSA9ICcvc2lnbnVwJ1xyXG5leHBvcnQgY29uc3QgTUFJTlBPU1RTX1JPVVRFID0gJy9tYWluJ1xyXG5leHBvcnQgY29uc3QgUE9TVF9ST1VURSA9ICcvcG9zdCdcclxuZXhwb3J0IGNvbnN0IExJRkVfUk9VVEUgPSAnL2xpZmUnXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUk9VVEUgPSAnL3NlYXJjaCdcclxuZXhwb3J0IGNvbnN0IFBSSVZBQ1lDT09LSUVTX1JPVVRFID0gJy9wcml2YWN5LWNvb2tpZXMnIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZS9JcGhvbmUtc3Bpbm5lci0yLjUyNjBjMzY5MTYxMTUxZThiMDMwZDY5NmI5Y2RhZTMyLmdpZlwiLFwiaGVpZ2h0XCI6NjQsXCJ3aWR0aFwiOjY0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlL2J1cmdlci1pY29uLjMwYWE4ZDNlMWY3N2U2NWVmYTZmMWJiMDU3NGE5NzE0LnN2Z1wiLFwiaGVpZ2h0XCI6MTgsXCJ3aWR0aFwiOjIwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlL2NvbW1lbnQtbWluLjM4ZGNhNDg0ZTFlOTlmNzM1NGIyZDMxOTE0N2E4MGFmLnN2Z1wiLFwiaGVpZ2h0XCI6MTIsXCJ3aWR0aFwiOjEzfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlL2NvbW1lbnQuNTdjMDEzZDBmYWRiMjUwOTExYmY0NWUxZWViNWVkZmMuc3ZnXCIsXCJoZWlnaHRcIjoxNCxcIndpZHRoXCI6MTd9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2UvbGlrZS1taW4uNmQxMmU3OWEyMTQ5ZTkyOWFiZGIwODIxZWViYWNkYTguc3ZnXCIsXCJoZWlnaHRcIjoxMixcIndpZHRoXCI6MTN9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2UvbGlrZS41YmIzMzQ1NWM0NjMxYTU0Yjk0YTBmMjAyNzljOTI1Zi5zdmdcIixcImhlaWdodFwiOjE4LFwid2lkdGhcIjoxNn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZS9tb29kYm9vc3QtbG9nby44YjkzYzRlNzE2MzE1MDMwNzlkMzgwMjhlZTA2MTFiZC5zdmdcIixcImhlaWdodFwiOjQ2LFwid2lkdGhcIjoyNTJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2UvcGVycy5jZTQ5ZjQ3MmFmODY4NjZjM2MwNzkzNmM4MWFlMWY5Ny5zdmdcIixcImhlaWdodFwiOjc4LFwid2lkdGhcIjo1Mn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZS9wb2ludC5hNWNiNmY0MDdlNDFmOGRkOTcyMWVkODMxYTY1ZGM0NS5zdmdcIixcImhlaWdodFwiOjQsXCJ3aWR0aFwiOjV9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2Uvc2hhcmUtbWluLmUyZjA0NDFjMGU1NWY4ZTQxNDY4ODNjNjNmZTEzODVmLnN2Z1wiLFwiaGVpZ2h0XCI6MTEsXCJ3aWR0aFwiOjl9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2Uvc2hhcmUuYjBjN2E4OTI4ZDE5MDEwYTRlOGVlOTdkZDBmNjlmY2Uuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MTd9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2Uvd2F0Y2gtbWluLjA2MWM2NGNlYjYxNTkxNmNlN2RjOWEzODgzOTcwMGY2LnN2Z1wiLFwiaGVpZ2h0XCI6MTQsXCJ3aWR0aFwiOjE0fTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnRpY2xlX3ByZXZpZXdcIjogXCJDYXJkX2FydGljbGVfcHJldmlld19fbDgtUGpcIixcblx0XCJhcnRpY2xlX3ByZXZpZXdfX2xpbmtcIjogXCJDYXJkX2FydGljbGVfcHJldmlld19fbGlua19fMUFSaWJcIixcblx0XCJmZWVkXCI6IFwiQ2FyZF9mZWVkX18zWjU4eVwiLFxuXHRcImFydGljbGVfYWN0aW9uc1wiOiBcIkNhcmRfYXJ0aWNsZV9hY3Rpb25zX18zTXhXV1wiLFxuXHRcImFydGljbGVfYWN0aW9uc19faXRlbVwiOiBcIkNhcmRfYXJ0aWNsZV9hY3Rpb25zX19pdGVtX18zVVQ3UVwiLFxuXHRcImFydGljbGVfYWN0aW9uc19faXRlbV9kaXNhYmxlZFwiOiBcIkNhcmRfYXJ0aWNsZV9hY3Rpb25zX19pdGVtX2Rpc2FibGVkX193TUh3SVwiLFxuXHRcImFydGljbGVfcHJldmlld19fcGhvdG9cIjogXCJDYXJkX2FydGljbGVfcHJldmlld19fcGhvdG9fXzJ6TGdUXCIsXG5cdFwiYXJ0aWNsZV9wcmV2aWV3X190aXRsZVwiOiBcIkNhcmRfYXJ0aWNsZV9wcmV2aWV3X190aXRsZV9fMWFKMFBcIixcblx0XCJhcnRpY2xlX3ByZXZpZXdfX2hhc2hcIjogXCJDYXJkX2FydGljbGVfcHJldmlld19faGFzaF9fM1BpSDRcIixcblx0XCJhcnRpY2xlX3ByZXZpZXdfX2hhc2hfZGF0YVwiOiBcIkNhcmRfYXJ0aWNsZV9wcmV2aWV3X19oYXNoX2RhdGFfXzJOV2s5XCIsXG5cdFwidDFcIjogXCJDYXJkX3QxX18zdHNUZFwiLFxuXHRcImFydGljbGVfYnV0dG9uX2NvbnRhaW5lclwiOiBcIkNhcmRfYXJ0aWNsZV9idXR0b25fY29udGFpbmVyX18zMzUzYlwiLFxuXHRcImFydGljbGVfYnV0dG9uXCI6IFwiQ2FyZF9hcnRpY2xlX2J1dHRvbl9fMjRwRnhcIixcblx0XCJhcnRpY2xlX2J1dHRvbl9fbWluXCI6IFwiQ2FyZF9hcnRpY2xlX2J1dHRvbl9fbWluX18ydHg4ZFwiLFxuXHRcInNoYXJlX2ltZ1wiOiBcIkNhcmRfc2hhcmVfaW1nX18yYjBGeVwiLFxuXHRcImNvbW1lbnRfaW1nXCI6IFwiQ2FyZF9jb21tZW50X2ltZ19fMjBSNExcIixcblx0XCJhcnRpY2xlX2J1dHRvbl9fbGlzdFwiOiBcIkNhcmRfYXJ0aWNsZV9idXR0b25fX2xpc3RfXzFrWGdIXCIsXG5cdFwibGlrZV9pbWdcIjogXCJDYXJkX2xpa2VfaW1nX18yd19FalwiLFxuXHRcImFydGljbGVfYnV0dG9uX19taW5faW1nXCI6IFwiQ2FyZF9hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ19fMnJWVkNcIixcblx0XCJhcnRpY2xlX2J1dHRvbl9fbGlzdF90d29cIjogXCJDYXJkX2FydGljbGVfYnV0dG9uX19saXN0X3R3b19fMTdtbHBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFydGljbGVfcHJldmlld19taWRkbGVcIjogXCJDYXJkTWlkZGxlX2FydGljbGVfcHJldmlld19taWRkbGVfXzZrNmRnXCIsXG5cdFwiYXJ0aWNsZV9wcmV2aWV3X21pZGRsZV9fY29udGFpbmVyX3Bob3RvXCI6IFwiQ2FyZE1pZGRsZV9hcnRpY2xlX3ByZXZpZXdfbWlkZGxlX19jb250YWluZXJfcGhvdG9fXzNPRTExXCIsXG5cdFwiYXJ0aWNsZV9wcmV2aWV3X21pZGRsZV9fcGhvdG9cIjogXCJDYXJkTWlkZGxlX2FydGljbGVfcHJldmlld19taWRkbGVfX3Bob3RvX18xSTdJa1wiLFxuXHRcImFydGljbGVfcHJldmlld19taWRkbGVfX3RpdGxlXCI6IFwiQ2FyZE1pZGRsZV9hcnRpY2xlX3ByZXZpZXdfbWlkZGxlX190aXRsZV9fMlVNSWlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImljb24tc2VhcmNoXCI6IFwiSGVhZGVyX2ljb24tc2VhcmNoX18yRmVDM1wiLFxuXHRcImFjdGl2ZVwiOiBcIkhlYWRlcl9hY3RpdmVfXzJoY3RQXCIsXG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMi1YV1hcIixcblx0XCJoZWFkZXJfX2xvYWRcIjogXCJIZWFkZXJfaGVhZGVyX19sb2FkX18xNWJTaVwiLFxuXHRcImhlYWRlcl9fbmF2YmFyXCI6IFwiSGVhZGVyX2hlYWRlcl9fbmF2YmFyX19sZEZoYVwiLFxuXHRcImhlYWRlcl9fbmF2YmFyX2xvZ29fY29udGFpbmVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fbmF2YmFyX2xvZ29fY29udGFpbmVyX19rSGU1Q1wiLFxuXHRcImhlYWRlcl9fbmF2YmFyX2JyYW5kX2ltYWdlXCI6IFwiSGVhZGVyX2hlYWRlcl9fbmF2YmFyX2JyYW5kX2ltYWdlX19RUkw4Z1wiLFxuXHRcImhlYWRlcl9fbmF2YmFyX21lbnVcIjogXCJIZWFkZXJfaGVhZGVyX19uYXZiYXJfbWVudV9fM1p1dS1cIixcblx0XCJoZWFkZXJfX25hdmJhcl9tZW51X2xpX3RvZ2dsZXJcIjogXCJIZWFkZXJfaGVhZGVyX19uYXZiYXJfbWVudV9saV90b2dnbGVyX19QZVhRNlwiLFxuXHRcImhlYWRlcl9fbmF2YmFyX21lbnVfX2xvZ25faW5fYnV0dG9uXCI6IFwiSGVhZGVyX2hlYWRlcl9fbmF2YmFyX21lbnVfX2xvZ25faW5fYnV0dG9uX18zcVdSR1wiLFxuXHRcImhlYWRlcl9fbmF2YmFyX21lbnVfbGlua1wiOiBcIkhlYWRlcl9oZWFkZXJfX25hdmJhcl9tZW51X2xpbmtfXzFOMUkxXCIsXG5cdFwiaGVhZGVyX19uYXZiYXJfbWVudV9saV9zZWFyY2hcIjogXCJIZWFkZXJfaGVhZGVyX19uYXZiYXJfbWVudV9saV9zZWFyY2hfXzN5aTdGXCIsXG5cdFwiaGVhZGVyX19sb2dvXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19fRTF5bDFcIixcblx0XCJoZWFkZXJfX2hlYWRlcl9fbmF2YmFyXCI6IFwiSGVhZGVyX2hlYWRlcl9faGVhZGVyX19uYXZiYXJfXzIxem1yXCIsXG5cdFwiaGVhZGVyX3BlcnNcIjogXCJIZWFkZXJfaGVhZGVyX3BlcnNfXzFzclBaXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50X3NsaWRlYmFyX3NpZ25XZWVrbHlcIjogXCJNYWluQ29udGFpbmVyX2NvbnRlbnRfc2xpZGViYXJfc2lnbldlZWtseV9fbjlDUVVcIixcblx0XCJjb250ZW50X3NsaWRlYmFyXCI6IFwiTWFpbkNvbnRhaW5lcl9jb250ZW50X3NsaWRlYmFyX18xbktHZlwiLFxuXHRcImFwcF9tb29kYm9vc3RcIjogXCJNYWluQ29udGFpbmVyX2FwcF9tb29kYm9vc3RfXzM5V2hUXCIsXG5cdFwibWFpbl9wb3N0c1wiOiBcIk1haW5Db250YWluZXJfbWFpbl9wb3N0c19fMTRmSEhcIixcblx0XCJwYWdlXCI6IFwiTWFpbkNvbnRhaW5lcl9wYWdlX19LV0E5Q1wiLFxuXHRcInNpZGViYXJcIjogXCJNYWluQ29udGFpbmVyX3NpZGViYXJfXzNNdjNnXCIsXG5cdFwidGFnc19saXN0XCI6IFwiTWFpbkNvbnRhaW5lcl90YWdzX2xpc3RfXzJWNFk1XCIsXG5cdFwiZmVlZFwiOiBcIk1haW5Db250YWluZXJfZmVlZF9fMk9zRnpcIixcblx0XCJmZWVkX190aXRsZVwiOiBcIk1haW5Db250YWluZXJfZmVlZF9fdGl0bGVfXzJzQWFrXCIsXG5cdFwic2lnbl91cF93ZWVrbHlfc2lkZWJhclwiOiBcIk1haW5Db250YWluZXJfc2lnbl91cF93ZWVrbHlfc2lkZWJhcl9fMjltZEVcIixcblx0XCJtYWluX2FydGljbGVcIjogXCJNYWluQ29udGFpbmVyX21haW5fYXJ0aWNsZV9fM0trdHRcIixcblx0XCJvcGVuQXNpZGVcIjogXCJNYWluQ29udGFpbmVyX29wZW5Bc2lkZV9fMVFGbnlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhZ3NfbGlzdF9fY29udGFpbmVyXCI6IFwiaGFzaFRhZ3NfdGFnc19saXN0X19jb250YWluZXJfXzNGQ2RUXCIsXG5cdFwidGFnc19saXN0X19pdGVtXCI6IFwiaGFzaFRhZ3NfdGFnc19saXN0X19pdGVtX18xX2dFNFwiLFxuXHRcImNvbG9yX2dyZWVuXCI6IFwiaGFzaFRhZ3NfY29sb3JfZ3JlZW5fXzN5NUE1XCIsXG5cdFwidGFnc19saXN0X19wZXJzLWZvb3RlclwiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fcGVycy1mb290ZXJfXzFPdlloXCIsXG5cdFwidGFnc19saXN0X19sb2dvLWZvb3RlclwiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fbG9nby1mb290ZXJfX2FDQzVIXCIsXG5cdFwidGFnc19saXN0X19sb2dvX2NvbnRhaW5lclwiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fbG9nb19jb250YWluZXJfXzFUaUVzXCIsXG5cdFwidGFnc19saXN0X19saXN0c1wiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fbGlzdHNfXzJtMk91XCIsXG5cdFwidGFnc19saXN0X19saXN0XCI6IFwiaGFzaFRhZ3NfdGFnc19saXN0X19saXN0X18zMS1OQlwiLFxuXHRcInRhZ3NfbGlzdF9fbGlzdF9saW5rXCI6IFwiaGFzaFRhZ3NfdGFnc19saXN0X19saXN0X2xpbmtfXzJzb0V0XCIsXG5cdFwidGFnc19saXN0X19mb290ZXJfc29jLWljb24tbGlzdHNcIjogXCJoYXNoVGFnc190YWdzX2xpc3RfX2Zvb3Rlcl9zb2MtaWNvbi1saXN0c19fM2VWb29cIixcblx0XCJ0YWdzX2xpc3RfX2Zvb3Rlcl9zb2MtaWNvblwiOiBcImhhc2hUYWdzX3RhZ3NfbGlzdF9fZm9vdGVyX3NvYy1pY29uX18zakotX1wiLFxuXHRcInRhZ3NfbGlzdF9fZm9vdGVyX3NvYy1pY29uLWxpc3RcIjogXCJoYXNoVGFnc190YWdzX2xpc3RfX2Zvb3Rlcl9zb2MtaWNvbi1saXN0X18xYnhuMlwiLFxuXHRcInRhZ3NfbGlzdF9fdGl0bGVcIjogXCJoYXNoVGFnc190YWdzX2xpc3RfX3RpdGxlX18yaGVHdVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbl9hcnRpY2xlXCI6IFwicG9zdF9tYWluX2FydGljbGVfXzFJZjRXXCIsXG5cdFwibWFpbl9hcnRpY2xlX190aXRsZVwiOiBcInBvc3RfbWFpbl9hcnRpY2xlX190aXRsZV9fM0dQUGtcIixcblx0XCJhcnRpY2xlX2FjdGlvbnNfbGdcIjogXCJwb3N0X2FydGljbGVfYWN0aW9uc19sZ19fbUxrcGlcIixcblx0XCJtYWluX2FydGljbGVfX2J1dHRvblwiOiBcInBvc3RfbWFpbl9hcnRpY2xlX19idXR0b25fX1JwRm9pXCIsXG5cdFwibWFpbl9hcnRpY2xlX19idXR0b25fYWN0aXZlXCI6IFwicG9zdF9tYWluX2FydGljbGVfX2J1dHRvbl9hY3RpdmVfXzZQZUhZXCIsXG5cdFwibWFpbl9hcnRpY2xlX19idXR0b25fX2xpc3RcIjogXCJwb3N0X21haW5fYXJ0aWNsZV9fYnV0dG9uX19saXN0X18xQndPaVwiLFxuXHRcIm1haW5fYXJ0aWNsZV9fYnV0dG9uX3N1bVwiOiBcInBvc3RfbWFpbl9hcnRpY2xlX19idXR0b25fc3VtX18zMmJWdVwiLFxuXHRcIm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvXCI6IFwicG9zdF9tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b19fMjlScVJcIixcblx0XCJoaWRlXCI6IFwicG9zdF9oaWRlX19INjFieFwiLFxuXHRcImFydGljbGVfYWN0aW9uc19faXRlbVwiOiBcInBvc3RfYXJ0aWNsZV9hY3Rpb25zX19pdGVtX18xWnZPaFwiLFxuXHRcImFydGljbGVfYWN0aW9uc19faXRlbV9kaXNhYmxlZFwiOiBcInBvc3RfYXJ0aWNsZV9hY3Rpb25zX19pdGVtX2Rpc2FibGVkX18ycjJFN1wiLFxuXHRcImljb24tZXllXCI6IFwicG9zdF9pY29uLWV5ZV9fMy1UcXJcIixcblx0XCJwb3N0X2JvZHlcIjogXCJwb3N0X3Bvc3RfYm9keV9fMnBHdWhcIixcblx0XCJwb3N0X2NvbG9yXCI6IFwicG9zdF9wb3N0X2NvbG9yX19sUFl3blwiLFxuXHRcIm5vbl9zdGlja3lcIjogXCJwb3N0X25vbl9zdGlja3lfXzMwVkxsXCIsXG5cdFwicG9zdF9leGNlcnB0XCI6IFwicG9zdF9wb3N0X2V4Y2VycHRfXzE1WTFJXCIsXG5cdFwibWFpbl9hcnRpY2xlX19idXR0b24tYWN0aXZlXCI6IFwicG9zdF9tYWluX2FydGljbGVfX2J1dHRvbi1hY3RpdmVfXzNEemYzXCIsXG5cdFwibWFpbl9hcnRpY2xlX19idXR0b25fcG9zdFwiOiBcInBvc3RfbWFpbl9hcnRpY2xlX19idXR0b25fcG9zdF9fNFJzYlZcIixcblx0XCJtYWluX2FydGljbGVfX3Bvc3RcIjogXCJwb3N0X21haW5fYXJ0aWNsZV9fcG9zdF9fMTFJQVdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLWRvbS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvSGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9Sb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkxpbmsiLCJ0ZXh0IiwiaHJlZiIsInN0eWxlcyIsIlBPU1RfUk9VVEUiLCJzaGFyZSIsImNvbW1lbnRJbWciLCJsaWtlIiwicG9pbnQiLCJ3YXRjaF9taW4iLCJjb21tZW50X21pbiIsImxpa2VfbWluIiwic2hhcmVfbWluIiwidXNlUm91dGVyIiwibW9tZW50IiwiSW1hZ2UiLCJDYXJkIiwiY2FyZCIsImhlbmRsZUxpa2VDbGljayIsInNoYXJlQ2FyZCIsImNhcmRWaWV3cyIsInZpZXdzIiwidG9GaXhlZCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJzbGljZSIsImFydGljbGVfcHJldmlldyIsImFydGljbGVfcHJldmlld19faGFzaCIsInQxIiwiY2F0ZWdvcnkiLCJuYW1lIiwiYXJ0aWNsZV9wcmV2aWV3X19oYXNoX2RhdGEiLCJjcmVhdGVkX2F0IiwiZm9ybWF0IiwiX2lkIiwiYXJ0aWNsZV9wcmV2aWV3X19saW5rIiwiYXJ0aWNsZV9wcmV2aWV3X190aXRsZSIsInRpdGxlIiwiaW1hZ2UiLCJzcGxpdCIsImpvaW4iLCJwb3AiLCJhcnRpY2xlX3ByZXZpZXdfX3Bob3RvIiwiYXJ0aWNsZV9hY3Rpb25zIiwiZXhjZXJwdCIsImFydGljbGVfYnV0dG9uX2NvbnRhaW5lciIsImFydGljbGVfYnV0dG9uIiwiYXJ0aWNsZV9idXR0b25fX2xpc3QiLCJsaWtlX2ltZyIsImNvbW1lbnRfaW1nIiwiT3BlblNoYXJlUG9wdXAiLCJzaGFyZV9pbWciLCJhcnRpY2xlX2J1dHRvbl9fbGlzdF90d28iLCJhcnRpY2xlX2J1dHRvbl9fbWluX2ltZyIsImxpa2VzIiwibGVuZ3RoIiwiY29tbWVudENvdW50Iiwic2hhcmVDb3VudCIsInN0eWxlQ2FyZE1pZGRsZSIsIkNhcmRNaWRkbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFydGljbGVfcHJldmlld19taWRkbGUiLCJhcnRpY2xlX3ByZXZpZXdfbWlkZGxlX19jb250YWluZXJfcGhvdG8iLCJhcnRpY2xlX3ByZXZpZXdfbWlkZGxlX19waG90byIsImFydGljbGVfcHJldmlld19taWRkbGVfX3RpdGxlIiwic3R5bGVIYXNoIiwiUmVhY3QiLCJ1c2VMb2NhdGlvbiIsIkhhc2h0YWdzIiwidmlzaWJDYXRlZ29yeSIsInRhZ3NfbGlzdF9fY29udGFpbmVyIiwidGFnc19saXN0X190aXRsZSIsInNvcnQiLCJhIiwiYiIsIm1hcCIsImhhc2giLCJ0YWdzX2xpc3RfX2l0ZW0iLCJ0YWdzX2xpc3RfX2Zvb3RlciIsInRhZ3NfbGlzdF9fbG9nb19jb250YWluZXIiLCJ0YWdzX2xpc3RfX3BlcnNfZm9vdGVyIiwidGFnc19saXN0X19sb2dvX2Zvb3RlciIsInRhZ3NfbGlzdF9fbGlzdHMiLCJ0YWdzX2xpc3RfX2xpc3RfbGluayIsInRhZ3NfbGlzdF9fbGlzdCIsInRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29uX2xpc3RzIiwidGFnc19saXN0X19mb290ZXJfc29jX2ljb25fbGlzdCIsInRhZ3NfbGlzdF9fZm9vdGVyX3NvY19pY29uIiwiSGVhZCIsIkEiLCJwZXJzIiwibWVudSIsImxvYWQiLCJNQUlOUE9TVFNfUk9VVEUiLCJTRUFSQ0hfUk9VVEUiLCJtb29kYm9vc3RMb2dvIiwiSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyX19uYXZiYXIiLCJoZWFkZXJfX25hdmJhcl9sb2dvX2NvbnRhaW5lciIsImUiLCJhc2lkZUhlbmRsZXIiLCJoZWFkZXJfX25hdmJhcl9tZW51X2xpIiwiaGVhZGVyX19uYXZiYXJfbWVudV9saV90b2dnbGVyIiwiaGVhZGVyX19uYXZiYXJfbWVudV9saW5rIiwiaGVhZGVyX19oZWFkZXJfX25hdmJhciIsImhlYWRlcl9wZXJzIiwiaGVhZGVyX19sb2dvIiwiaGVhZGVyX19uYXZiYXJfYnJhbmRfaW1hZ2UiLCJoZWFkZXJfX25hdmJhcl9tZW51IiwiaGVhZHJfX25hdmJhcl9tZW51X2xpIiwiaGVhZGVyX19uYXZiYXJfbWVudV9saV9zZWFyY2giLCJvcGVuQXV0aCIsImhlYWRlcl9fbmF2YmFyX21lbnVfX2xvZ25faW4iLCJoZWFkZXJfX25hdmJhcl9tZW51X19sb2duX2luX2J1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzTWFpbiIsIkhhc2hUYWdzIiwiTWFpbkNvbnRhaW5lciIsImNoaWxkcmVuIiwibWlkZGxlQ2FyZCIsInNlck1pZGRsZUNhcmQiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImxvYWRNaWRkbGVDYXJkIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3BvbnNlMiIsImpzb24iLCJhcHBfbW9vZGJvb3N0IiwibWFpbl9wb3N0cyIsInRhZ3NfbGlzdCIsInBhZ2UiLCJmZWVkIiwic2lkZWJhciIsImNvbnRlbnRfc2xpZGViYXIiLCJjb250ZW50X3NsaWRlYmFyX3NpZ25XZWVrbHkiLCJNYWluUG9zdHMiLCJ1c2VycyIsInBvc3QiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxvYWRpbmciLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwicmVsIiwiYXMiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiUG9zdCIsImluZGV4IiwicXVlcnkiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsInBhcnNlIiwic3R5bGVQb3N0IiwiUG9zdHIiLCJtYWluX2FydGljbGUiLCJtYWluX2FydGljbGVfX3Bvc3QiLCJwb3N0X2NvbG9yIiwibWFpbl9hcnRpY2xlX190aXRsZSIsIm1haW5fYXJ0aWNsZV9fYnV0dG9uIiwibWFpbl9hcnRpY2xlX19idXR0b25fcG9zdCIsIm1haW5fYXJ0aWNsZV9fYnV0dG9uX2FjdGl2ZSIsInNjcm9sbFRvTXlSZWYiLCJtYWluX2FydGljbGVfX2J1dHRvbl9fbGlzdCIsIm1haW5fYXJ0aWNsZV9fYnV0dG9uX3N1bSIsIm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvIiwicG9zdF9leGNlcnB0IiwiX19odG1sIiwiYm9keSIsIm5vbl9zdGlja3kiLCJQb3N0ZXIiLCJhc3luYyIsInVzZXIiLCJwb3N0cyIsImRhdGEiLCJzZWV0RGF0YSIsImdldFNlcnZlclNpZGVQcm9wcyIsIkFETUlOX1JPVVRFIiwiQURNSU5fUk9MRV9ST1VSRSIsIkFETUlOX0NBVEVHT1JZX1JPVVRFIiwiQURNSU5fUE9TVF9ST1VURSIsIkxPR0lOX1JPVVRFIiwiTE9HSU5fQURNSU5fUk9VVEUiLCJSRUdJU1RFUl9ST1VURSIsIkxJRkVfUk9VVEUiLCJQUklWQUNZQ09PS0lFU19ST1VURSJdLCJzb3VyY2VSb290IjoiIn0=