"use strict";
self["webpackHotUpdate_N_E"]("pages/post/[id]",{

/***/ "./src/pages/post.js":
/*!***************************!*\
  !*** ./src/pages/post.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_image_share_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/image/share.svg */ "./public/image/share.svg");
/* harmony import */ var _public_image_like_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/image/like.svg */ "./public/image/like.svg");
/* harmony import */ var _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/image/point.svg */ "./public/image/point.svg");
/* harmony import */ var _public_image_watch_min_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/image/watch-min.svg */ "./public/image/watch-min.svg");
/* harmony import */ var _public_image_comment_min_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/image/comment-min.svg */ "./public/image/comment-min.svg");
/* harmony import */ var _public_image_like_min_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/image/like-min.svg */ "./public/image/like-min.svg");
/* harmony import */ var _public_image_share_min_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/image/share-min.svg */ "./public/image/share-min.svg");
/* harmony import */ var _public_image_comment_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/image/comment.svg */ "./public/image/comment.svg");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var html_dom_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! html-dom-parser */ "./node_modules/html-dom-parser/lib/client/html-to-dom.js");
/* harmony import */ var html_dom_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(html_dom_parser__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/post.module.scss */ "./styles/post.module.scss");
/* harmony import */ var _styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\bodrenkov.p\\Desktop\\jobproject\\moodboost-Next\\src\\pages\\post.js",
    _this = undefined;

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






var Postr = function Postr(_ref) {
  var _post$category, _post$likes, _post$likes2;

  var post = _ref.post;
  // const [post, setpost] = useState([])
  // const {id} = useParams()
  // const {post} = useContext(Context)
  // const {post} = useContext(Context)
  // const {admin} = useContext(Context)
  // const {comment} = useContext(Context)
  var cardViews = (post.views / 1000).toFixed(1); // const [cardShare, setCardShare] = useState({ url:"", img:"", id:"", clicks:"" })
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: moment__WEBPACK_IMPORTED_MODULE_9___default()(post.created_at).format("DD MMM, YYYY")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__title),
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_post)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_active),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return hendleLikeClick();
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().like_img),
                src: _public_image_like_svg__WEBPACK_IMPORTED_MODULE_2__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Like"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return scrollToMyRef();
              },
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button__list), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().comment)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().comment_img),
                src: _public_image_comment_svg__WEBPACK_IMPORTED_MODULE_8__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Comment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return OpenSharePopup();
              },
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button__list), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().shere)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().share_img),
                src: _public_image_share_svg__WEBPACK_IMPORTED_MODULE_1__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Share"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
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
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cardViews + 'K'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 121
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__min_img),
                src: _public_image_like_min_svg__WEBPACK_IMPORTED_MODULE_6__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ((_post$likes = post.likes) === null || _post$likes === void 0 ? void 0 : _post$likes.length) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 121
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__min_img),
                src: _public_image_comment_min_svg__WEBPACK_IMPORTED_MODULE_5__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: post.commentCount || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 121
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__list_two), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button_list_two)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().article_button__min_img),
                src: _public_image_share_min_svg__WEBPACK_IMPORTED_MODULE_7__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: post.shareCount || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().post_excerpt),
        children: post.excerpt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        dangerouslySetInnerHTML: {
          __html: post.body
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: ((_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button), (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main_article__button) - post, (_styles_post_module_scss__WEBPACK_IMPORTED_MODULE_12___default().non_sticky)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "main-article__button-active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return hendleLikeClick();
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "like-img",
                src: _public_image_like_svg__WEBPACK_IMPORTED_MODULE_2__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Like"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return scrollToMyRef();
              },
              className: "main-article__button__list comment",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "comment-img",
                src: _public_image_comment_svg__WEBPACK_IMPORTED_MODULE_8__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Comment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return OpenSharePopup();
              },
              className: "main-article__button__list shere",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "share-img",
                src: _public_image_share_svg__WEBPACK_IMPORTED_MODULE_1__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Share"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
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
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: cardViews + 'K'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 100
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
                src: _public_image_like_min_svg__WEBPACK_IMPORTED_MODULE_6__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ((_post$likes2 = post.likes) === null || _post$likes2 === void 0 ? void 0 : _post$likes2.length) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 100
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
                src: _public_image_comment_min_svg__WEBPACK_IMPORTED_MODULE_5__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: post.commentCount || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 100
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
                src: _public_image_share_min_svg__WEBPACK_IMPORTED_MODULE_7__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: post.shareCount || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 9
  }, _this);
};

_c = Postr;
/* harmony default export */ __webpack_exports__["default"] = (Postr);

var _c;

$RefreshReg$(_c, "Postr");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmM0MjFkMmNhNmEzZDcxYWE0MmVjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztDQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNWSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBR3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLE1BQUlDLFNBQVMsR0FBRyxDQUFDRCxJQUFJLENBQUNFLEtBQUwsR0FBYSxJQUFkLEVBQW9CQyxPQUFwQixDQUE0QixDQUE1QixDQUFoQixDQVRxQixDQVV0QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0Esc0JBQ0k7QUFBUyxhQUFTLEdBQUVMLCtFQUFBLEVBQXdCQSxxRkFBMUIsQ0FBbEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUEsNkVBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSx3RkFBaEI7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsSUFBYjtBQUFBLG9CQUFtQkUsSUFBbkIsYUFBbUJBLElBQW5CLHlDQUFtQkEsSUFBSSxDQUFFUSxRQUF6QixtREFBbUIsZUFBZ0JDO0FBQW5D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ZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vUG9zdC5zY3NzJztcclxuLy8gaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHBvc3RlZn0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQge2ZldGNoT25lcG9zdCwgZmV0Y2hEZWxldGVMaWtlLCBmZXRjaEFkZExpa2VzLCBmZXRjaFNoYXJlfSBmcm9tICcuLi8uLi9odHRwL3Bvc3RBUEknO1xyXG4vLyBpbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XHJcbi8vIGltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcclxuLy8gaW1wb3J0IHsgZmV0Y2hBbGxDb21tZW50IH0gZnJvbSBcIi4uLy4uL2h0dHAvY29tbWVudEFwaVwiO1xyXG5pbXBvcnQgc2hhcmUgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL3NoYXJlLnN2Zyc7XHJcbmltcG9ydCBsaWtlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9saWtlLnN2Zyc7XHJcbmltcG9ydCBwb2ludCBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvcG9pbnQuc3ZnJztcclxuaW1wb3J0IHdhdGNoX21pbiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2Uvd2F0Y2gtbWluLnN2Zyc7XHJcbmltcG9ydCBjb21tZW50X21pbiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvY29tbWVudC1taW4uc3ZnJztcclxuaW1wb3J0IGxpa2VfbWluIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9saWtlLW1pbi5zdmcnO1xyXG5pbXBvcnQgc2hhcmVfbWluIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9zaGFyZS1taW4uc3ZnJztcclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG4vLyBpbXBvcnQgU2lnblVwV2Vla2x5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2lnblVwV2Vla2x5L1NpZ25VcFdlZWtseSc7XHJcbi8vIGltcG9ydCBDb21tZW50cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzJ1xyXG5pbXBvcnQgY29tbWVudEltZyBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvY29tbWVudC5zdmcnO1xyXG4vLyAvLyBpbXBvcnQgU2VvSGVhZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NFTy9TZW9IZWFkJztcclxuLy8gLy8gaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuLy8gaW1wb3J0IFBvcHVwU2hhcmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3B1cFNoYXJlL1BvcHVwU2hhcmUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1kb20tcGFyc2VyJztcclxuaW1wb3J0IHN0eWxlUG9zdCBmcm9tICcuLi8uLi9zdHlsZXMvcG9zdC5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5cclxuY29uc3QgUG9zdHIgPSAoe3Bvc3R9KSA9PiB7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IFtwb3N0LCBzZXRwb3N0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgLy8gY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpXHJcbiAgICAvLyBjb25zdCB7cG9zdH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICAvLyBjb25zdCB7cG9zdH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICAvLyBjb25zdCB7YWRtaW59ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgLy8gY29uc3Qge2NvbW1lbnR9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgIGxldCBjYXJkVmlld3MgPSAocG9zdC52aWV3cyAvIDEwMDApLnRvRml4ZWQoMSlcclxuICAgIC8vIGNvbnN0IFtjYXJkU2hhcmUsIHNldENhcmRTaGFyZV0gPSB1c2VTdGF0ZSh7IHVybDpcIlwiLCBpbWc6XCJcIiwgaWQ6XCJcIiwgY2xpY2tzOlwiXCIgfSlcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pblRva2VuXCIpXHJcbiAgICAvLyAgICAgZmV0Y2hPbmVwb3N0KGlkLCB0b2tlbikudGhlbihkYXRhID0+IHNldHBvc3QoZGF0YS5kYXRhKSlcclxuICAgIC8vIH0sIFtpZF0pXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkbWluVG9rZW5cIilcclxuICAgIC8vICAgICAgZmV0Y2hBbGxDb21tZW50KGlkLCB0b2tlbikudGhlbihkYXRhID0+IGNvbW1lbnQuc2V0QWxsQ29tbWVudHMoZGF0YS5kYXRhKSlcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIC8vIGNvbnN0IGlzTGlrZWQgPSBwb3N0Lmxpa2VzPy5zb21lKChsaWtlKSA9PiBsaWtlID09PSBhZG1pbi5hZG1pbi5faWQpXHJcbiAgICAvLyBjb25zdCBjYXJkTGlrZUJ1dHRvbkNsYXNzTmFtZSA9IGBtYWluLWFydGljbGVfX2J1dHRvbl9fbGlzdCAke2lzTGlrZWQgJiYgJ2xpa2UnfWBcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBoZW5kbGVMaWtlQ2xpY2sgKCkge1xyXG4gICAgLy8gICAgIGlmKHBvc3QuaXNBdXRoKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHBvc3R0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicG9zdFRva2VuXCIpXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGlzTGlrZWQgPSBwb3N0Lmxpa2VzLnNvbWUoKGxpa2UpID0+IGxpa2UgPT09IGFkbWluLmFkbWluLl9pZClcclxuICAgIC8vICAgICAgICAgY29uc3QgbGlrZVJlcXVlc3QgPSBpc0xpa2VkID8gZmV0Y2hEZWxldGVMaWtlKHBvc3QuX2lkLCBwb3N0dG9rZW4pIDogZmV0Y2hBZGRMaWtlcyhwb3N0Ll9pZCwgcG9zdHRva2VuKVxyXG4gICAgLy8gICAgICAgICBsaWtlUmVxdWVzdC50aGVuKChuZXdQb3N0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRwb3N0KHsuLi5wb3N0LCBsaWtlczpuZXdQb3N0LmRhdGEubGlrZXN9KVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHBvc3Quc2V0T3BlbkF1dGgodHJ1ZSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zdCBjb20gPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzY3JvbGxUb015UmVmICgpIHtcclxuICAgIC8vICAgY29tLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgIC8vICAgfTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIC8vIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgLy8gfSwgW10pO1xyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHNoYXJlQ2xpY2sgKGlkKSB7XHJcbiAgICAvLyAgICAgZmV0Y2hTaGFyZShpZClcclxuICAgIC8vICAgICAudGhlbihkYXRhID0+IHtcclxuICAgIC8vICAgICAgICAgc2V0cG9zdCh7Li4ucG9zdCwgc2hhcmVDb3VudDpkYXRhLmRhdGEuc2hhcmVDb3VudH0pXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBPcGVuU2hhcmVQb3B1cCAoKSB7XHJcbiAgICAvLyAgICAgcG9zdC5zZXRPcGVuU2hhcmUodHJ1ZSlcclxuICAgIC8vICAgICBzZXRDYXJkU2hhcmUoe3VybDpwb3N0Ll9pZCwgaW1nOnBvc3QuaW1hZ2UsIGlkOnBvc3QuX2lkLCBjbGlja3M6c2hhcmVDbGlja30pXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGUsIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX3Bvc3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVQb3N0LnBvc3RfY29sb3J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX3ByZXZpZXdfX2hhc2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndDEnPntwb3N0Py5jYXRlZ29yeT8ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e21vbWVudChwb3N0LmNyZWF0ZWRfYXQpLmZvcm1hdChcIkREIE1NTSwgWVlZWVwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX3RpdGxlfT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbiwgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX3Bvc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9hY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhlbmRsZUxpa2VDbGljaygpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3QubGlrZV9pbWd9IHNyYz17bGlrZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGlrZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvTXlSZWYoKX0gY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fX2xpc3QsIHN0eWxlUG9zdC5jb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LmNvbW1lbnRfaW1nfSBzcmM9e2NvbW1lbnRJbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbW1lbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IE9wZW5TaGFyZVBvcHVwKCl9IGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX19saXN0LCBzdHlsZVBvc3Quc2hlcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3Quc2hhcmVfaW1nfSBzcmM9e3NoYXJlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaGFyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX3N1bX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX21pbl9pbWd9IHNyYz17d2F0Y2hfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZFZpZXdzICsgJ0snfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PjxpbWcgIHNyYz17cG9pbnR9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e2xpa2VfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5saWtlcz8ubGVuZ3RoIHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXtjb21tZW50X21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5jb21tZW50Q291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+PGltZyBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e3NoYXJlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5zaGFyZUNvdW50IHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVQb3N0LnBvc3RfZXhjZXJwdH0+e3Bvc3QuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwicG9zdC1ib2R5XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmJvZHkgfX0vPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmJvZHkgfX0gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbiwgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uLXBvc3QsIHN0eWxlUG9zdC5ub25fc3RpY2t5fT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1hcnRpY2xlX19idXR0b24tYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGVuZGxlTGlrZUNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImxpa2UtaW1nXCIgc3JjPXtsaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MaWtlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9NeVJlZigpfSBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbl9fbGlzdCBjb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNvbW1lbnQtaW1nXCIgc3JjPXtjb21tZW50SW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBPcGVuU2hhcmVQb3B1cCgpfSBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbl9fbGlzdCBzaGVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwic2hhcmUtaW1nXCIgc3JjPXtzaGFyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbi1zdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXJ0aWNsZS1idXR0b25fX21pbi1pbWcnIHNyYz17d2F0Y2hfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZFZpZXdzICsgJ0snfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+PGltZyAgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e2xpa2VfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5saWtlcz8ubGVuZ3RoIHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+PGltZyBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e2NvbW1lbnRfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LmNvbW1lbnRDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXJ0aWNsZS1idXR0b25fX21pbi1pbWcnIHNyYz17c2hhcmVfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LnNoYXJlQ291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgcmVmPXtjb219IGNsYXNzTmFtZT1cInNpZ24tdXAtd2Vla2x5X19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFNpZ25VcFdlZWtseSAvPiBcclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDxDb21tZW50cyAgcG9zdD17cG9zdH0vPiAqL31cclxuICAgICAgICB7Lyoge2NhcmRTaGFyZS51cmwgJiYgY2FyZFNoYXJlLmltZyAmJiA8UG9wdXBTaGFyZSBsb2c9eydodHRwczovL21vb2Rib29zdC5tZS9tYWluL3Bvc3QvJyArIGNhcmRTaGFyZS51cmx9IGltZz17J2h0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS8nK2NhcmRTaGFyZS5pbWd9IGlkPXtjYXJkU2hhcmUuaWR9IHNoYXJlQ2xpY2s9e2NhcmRTaGFyZS5jbGlja3N9Lz59ICovfVxyXG4gXHJcbiAgICA8L2FydGljbGU+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0clxyXG5cclxuIl0sIm5hbWVzIjpbInNoYXJlIiwibGlrZSIsInBvaW50Iiwid2F0Y2hfbWluIiwiY29tbWVudF9taW4iLCJsaWtlX21pbiIsInNoYXJlX21pbiIsImNvbW1lbnRJbWciLCJtb21lbnQiLCJJbWFnZSIsInBhcnNlIiwic3R5bGVQb3N0IiwiUG9zdHIiLCJwb3N0IiwiY2FyZFZpZXdzIiwidmlld3MiLCJ0b0ZpeGVkIiwibWFpbl9hcnRpY2xlIiwibWFpbl9hcnRpY2xlX19wb3N0IiwicG9zdF9jb2xvciIsImFydGljbGVfcHJldmlld19faGFzaCIsImNhdGVnb3J5IiwibmFtZSIsImNyZWF0ZWRfYXQiLCJmb3JtYXQiLCJtYWluX2FydGljbGVfX3RpdGxlIiwidGl0bGUiLCJtYWluX2FydGljbGVfX2J1dHRvbiIsIm1haW5fYXJ0aWNsZV9fYnV0dG9uX3Bvc3QiLCJtYWluX2FydGljbGVfX2J1dHRvbl9hY3RpdmUiLCJoZW5kbGVMaWtlQ2xpY2siLCJsaWtlX2ltZyIsInNjcm9sbFRvTXlSZWYiLCJtYWluX2FydGljbGVfX2J1dHRvbl9fbGlzdCIsImNvbW1lbnQiLCJjb21tZW50X2ltZyIsIk9wZW5TaGFyZVBvcHVwIiwic2hlcmUiLCJzaGFyZV9pbWciLCJtYWluX2FydGljbGVfX2J1dHRvbl9zdW0iLCJhcnRpY2xlX2J1dHRvbl9fbGlzdF90d28iLCJtYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3byIsImFydGljbGVfYnV0dG9uX19taW5faW1nIiwibGlrZXMiLCJsZW5ndGgiLCJjb21tZW50Q291bnQiLCJzaGFyZUNvdW50IiwicG9zdF9leGNlcnB0IiwiZXhjZXJwdCIsIl9faHRtbCIsImJvZHkiLCJub25fc3RpY2t5Il0sInNvdXJjZVJvb3QiOiIifQ==