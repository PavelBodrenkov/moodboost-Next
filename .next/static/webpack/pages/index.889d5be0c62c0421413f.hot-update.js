"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
              className: "{stylePost.article_button__list_two, stylePost.main_article__button_list_two}",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 123
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "stylePost.article_button__list_two, stylePost.main_article__button_list_two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
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
        className: "post-excerpt",
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
        className: "main-article__button main-article__button-post non-sticky",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg5ZDViZTBjNjJjMDQyMTQxM2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0NBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1ZLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFHdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsTUFBSUMsU0FBUyxHQUFHLENBQUNELElBQUksQ0FBQ0UsS0FBTCxHQUFhLElBQWQsRUFBb0JDLE9BQXBCLENBQTRCLENBQTVCLENBQWhCLENBVHFCLENBVXRCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxzQkFDSTtBQUFTLGFBQVMsR0FBRUwsK0VBQUEsRUFBd0JBLHFGQUExQixDQUFsQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFQSw2RUFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLHdGQUFoQjtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyxJQUFiO0FBQUEsb0JBQW1CRSxJQUFuQixhQUFtQkEsSUFBbkIseUNBQW1CQSxJQUFJLENBQUVRLFFBQXpCLG1EQUFtQixlQUFnQkM7QUFBbkM7QUFB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dkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSixlQVdJO0FBQUksdUJBQVMsRUFBQyx3REFBZDtBQUFBLHNDQUNBLDhEQUFDLG9EQUFEO0FBQU8seUJBQVMsRUFBQyx5QkFBakI7QUFBMkMsbUJBQUcsRUFBRUUsa0VBQVdBO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFFSTtBQUFBLDBCQUFPUyxJQUFJLENBQUNnQyxZQUFMLElBQXFCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhKLGVBZUk7QUFBSSx1QkFBUyxFQUFDLHdEQUFkO0FBQUEscUNBQXVFO0FBQUssbUJBQUcsRUFBRTNDLDREQUFLQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmSixlQWdCSTtBQUFJLHVCQUFTLEVBQUMsd0RBQWQ7QUFBQSxzQ0FDSSw4REFBQyxvREFBRDtBQUFPLHlCQUFTLEVBQUMseUJBQWpCO0FBQTJDLG1CQUFHLEVBQUVJLGdFQUFTQTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSwwQkFBT08sSUFBSSxDQUFDaUMsVUFBTCxJQUFtQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdHSCxDQTNLRDs7S0FBTWxDO0FBNktOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9Qb3N0LnNjc3MnO1xyXG4vLyBpbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgcG9zdGVmfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7ZmV0Y2hPbmVwb3N0LCBmZXRjaERlbGV0ZUxpa2UsIGZldGNoQWRkTGlrZXMsIGZldGNoU2hhcmV9IGZyb20gJy4uLy4uL2h0dHAvcG9zdEFQSSc7XHJcbi8vIGltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcclxuLy8gaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9pbmRleFwiO1xyXG4vLyBpbXBvcnQgeyBmZXRjaEFsbENvbW1lbnQgfSBmcm9tIFwiLi4vLi4vaHR0cC9jb21tZW50QXBpXCI7XHJcbmltcG9ydCBzaGFyZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2Uvc2hhcmUuc3ZnJztcclxuaW1wb3J0IGxpa2UgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL2xpa2Uuc3ZnJztcclxuaW1wb3J0IHBvaW50IGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9wb2ludC5zdmcnO1xyXG5pbXBvcnQgd2F0Y2hfbWluIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS93YXRjaC1taW4uc3ZnJztcclxuaW1wb3J0IGNvbW1lbnRfbWluIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9jb21tZW50LW1pbi5zdmcnO1xyXG5pbXBvcnQgbGlrZV9taW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL2xpa2UtbWluLnN2Zyc7XHJcbmltcG9ydCBzaGFyZV9taW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL3NoYXJlLW1pbi5zdmcnO1xyXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbi8vIGltcG9ydCBTaWduVXBXZWVrbHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWduVXBXZWVrbHkvU2lnblVwV2Vla2x5JztcclxuLy8gaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tbWVudHMvQ29tbWVudHMnXHJcbmltcG9ydCBjb21tZW50SW1nIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9jb21tZW50LnN2Zyc7XHJcbi8vIC8vIGltcG9ydCBTZW9IZWFkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU0VPL1Nlb0hlYWQnO1xyXG4vLyAvLyBpbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG4vLyBpbXBvcnQgUG9wdXBTaGFyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BvcHVwU2hhcmUvUG9wdXBTaGFyZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLWRvbS1wYXJzZXInO1xyXG5pbXBvcnQgc3R5bGVQb3N0IGZyb20gJy4uLy4uL3N0eWxlcy9wb3N0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcblxyXG5jb25zdCBQb3N0ciA9ICh7cG9zdH0pID0+IHtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgW3Bvc3QsIHNldHBvc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICAvLyBjb25zdCB7aWR9ID0gdXNlUGFyYW1zKClcclxuICAgIC8vIGNvbnN0IHtwb3N0fSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgIC8vIGNvbnN0IHtwb3N0fSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgIC8vIGNvbnN0IHthZG1pbn0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICAvLyBjb25zdCB7Y29tbWVudH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICAgbGV0IGNhcmRWaWV3cyA9IChwb3N0LnZpZXdzIC8gMTAwMCkudG9GaXhlZCgxKVxyXG4gICAgLy8gY29uc3QgW2NhcmRTaGFyZSwgc2V0Q2FyZFNoYXJlXSA9IHVzZVN0YXRlKHsgdXJsOlwiXCIsIGltZzpcIlwiLCBpZDpcIlwiLCBjbGlja3M6XCJcIiB9KVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkbWluVG9rZW5cIilcclxuICAgIC8vICAgICBmZXRjaE9uZXBvc3QoaWQsIHRva2VuKS50aGVuKGRhdGEgPT4gc2V0cG9zdChkYXRhLmRhdGEpKVxyXG4gICAgLy8gfSwgW2lkXSlcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRtaW5Ub2tlblwiKVxyXG4gICAgLy8gICAgICBmZXRjaEFsbENvbW1lbnQoaWQsIHRva2VuKS50aGVuKGRhdGEgPT4gY29tbWVudC5zZXRBbGxDb21tZW50cyhkYXRhLmRhdGEpKVxyXG4gICAgLy8gfSwgW10pXHJcblxyXG4gICAgLy8gY29uc3QgaXNMaWtlZCA9IHBvc3QubGlrZXM/LnNvbWUoKGxpa2UpID0+IGxpa2UgPT09IGFkbWluLmFkbWluLl9pZClcclxuICAgIC8vIGNvbnN0IGNhcmRMaWtlQnV0dG9uQ2xhc3NOYW1lID0gYG1haW4tYXJ0aWNsZV9fYnV0dG9uX19saXN0ICR7aXNMaWtlZCAmJiAnbGlrZSd9YFxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGhlbmRsZUxpa2VDbGljayAoKSB7XHJcbiAgICAvLyAgICAgaWYocG9zdC5pc0F1dGgpIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgcG9zdHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwb3N0VG9rZW5cIilcclxuICAgIC8vICAgICAgICAgY29uc3QgaXNMaWtlZCA9IHBvc3QubGlrZXMuc29tZSgobGlrZSkgPT4gbGlrZSA9PT0gYWRtaW4uYWRtaW4uX2lkKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBsaWtlUmVxdWVzdCA9IGlzTGlrZWQgPyBmZXRjaERlbGV0ZUxpa2UocG9zdC5faWQsIHBvc3R0b2tlbikgOiBmZXRjaEFkZExpa2VzKHBvc3QuX2lkLCBwb3N0dG9rZW4pXHJcbiAgICAvLyAgICAgICAgIGxpa2VSZXF1ZXN0LnRoZW4oKG5ld1Bvc3QpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHNldHBvc3Qoey4uLnBvc3QsIGxpa2VzOm5ld1Bvc3QuZGF0YS5saWtlc30pXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgcG9zdC5zZXRPcGVuQXV0aCh0cnVlKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnN0IGNvbSA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHNjcm9sbFRvTXlSZWYgKCkge1xyXG4gICAgLy8gICBjb20uY3VycmVudC5zY3JvbGxJbnRvVmlldygpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIC8vIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIC8vICAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkpO1xyXG4gICAgLy8gICB9O1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgLy8gcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2hhcmVDbGljayAoaWQpIHtcclxuICAgIC8vICAgICBmZXRjaFNoYXJlKGlkKVxyXG4gICAgLy8gICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgLy8gICAgICAgICBzZXRwb3N0KHsuLi5wb3N0LCBzaGFyZUNvdW50OmRhdGEuZGF0YS5zaGFyZUNvdW50fSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIE9wZW5TaGFyZVBvcHVwICgpIHtcclxuICAgIC8vICAgICBwb3N0LnNldE9wZW5TaGFyZSh0cnVlKVxyXG4gICAgLy8gICAgIHNldENhcmRTaGFyZSh7dXJsOnBvc3QuX2lkLCBpbWc6cG9zdC5pbWFnZSwgaWQ6cG9zdC5faWQsIGNsaWNrczpzaGFyZUNsaWNrfSlcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZSwgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fcG9zdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QucG9zdF9jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfcHJldmlld19faGFzaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0MSc+e3Bvc3Q/LmNhdGVnb3J5Py5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bW9tZW50KHBvc3QuY3JlYXRlZF9hdCkuZm9ybWF0KFwiREQgTU1NLCBZWVlZXCIpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fdGl0bGV9Pntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fcG9zdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGVuZGxlTGlrZUNsaWNrKCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5saWtlX2ltZ30gc3JjPXtsaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MaWtlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9NeVJlZigpfSBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9fbGlzdCwgc3R5bGVQb3N0LmNvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3QuY29tbWVudF9pbWd9IHNyYz17Y29tbWVudEltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29tbWVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gT3BlblNoYXJlUG9wdXAoKX0gY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fX2xpc3QsIHN0eWxlUG9zdC5zaGVyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5zaGFyZV9pbWd9IHNyYz17c2hhcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNoYXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fc3VtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXt3YXRjaF9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJkVmlld3MgKyAnSyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+PGltZyAgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX21pbl9pbWd9IHNyYz17bGlrZV9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0Lmxpa2VzPy5sZW5ndGggfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+PGltZyBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e2NvbW1lbnRfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LmNvbW1lbnRDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIntzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d299XCI+PGltZyBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdHlsZVBvc3QuYXJ0aWNsZV9idXR0b25fX2xpc3RfdHdvLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fbGlzdF90d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdhcnRpY2xlLWJ1dHRvbl9fbWluLWltZycgc3JjPXtzaGFyZV9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3Quc2hhcmVDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LWV4Y2VycHRcIj57cG9zdC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYm9keSB9fS8+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYm9keSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1hcnRpY2xlX19idXR0b24gbWFpbi1hcnRpY2xlX19idXR0b24tcG9zdCBub24tc3RpY2t5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1hcnRpY2xlX19idXR0b24tYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGVuZGxlTGlrZUNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImxpa2UtaW1nXCIgc3JjPXtsaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MaWtlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9NeVJlZigpfSBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbl9fbGlzdCBjb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNvbW1lbnQtaW1nXCIgc3JjPXtjb21tZW50SW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBPcGVuU2hhcmVQb3B1cCgpfSBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbl9fbGlzdCBzaGVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwic2hhcmUtaW1nXCIgc3JjPXtzaGFyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbi1zdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXJ0aWNsZS1idXR0b25fX21pbi1pbWcnIHNyYz17d2F0Y2hfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZFZpZXdzICsgJ0snfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+PGltZyAgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e2xpa2VfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5saWtlcz8ubGVuZ3RoIHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+PGltZyBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e2NvbW1lbnRfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LmNvbW1lbnRDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXJ0aWNsZS1idXR0b25fX21pbi1pbWcnIHNyYz17c2hhcmVfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LnNoYXJlQ291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgcmVmPXtjb219IGNsYXNzTmFtZT1cInNpZ24tdXAtd2Vla2x5X19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFNpZ25VcFdlZWtseSAvPiBcclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDxDb21tZW50cyAgcG9zdD17cG9zdH0vPiAqL31cclxuICAgICAgICB7Lyoge2NhcmRTaGFyZS51cmwgJiYgY2FyZFNoYXJlLmltZyAmJiA8UG9wdXBTaGFyZSBsb2c9eydodHRwczovL21vb2Rib29zdC5tZS9tYWluL3Bvc3QvJyArIGNhcmRTaGFyZS51cmx9IGltZz17J2h0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS8nK2NhcmRTaGFyZS5pbWd9IGlkPXtjYXJkU2hhcmUuaWR9IHNoYXJlQ2xpY2s9e2NhcmRTaGFyZS5jbGlja3N9Lz59ICovfVxyXG4gXHJcbiAgICA8L2FydGljbGU+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0clxyXG5cclxuIl0sIm5hbWVzIjpbInNoYXJlIiwibGlrZSIsInBvaW50Iiwid2F0Y2hfbWluIiwiY29tbWVudF9taW4iLCJsaWtlX21pbiIsInNoYXJlX21pbiIsImNvbW1lbnRJbWciLCJtb21lbnQiLCJJbWFnZSIsInBhcnNlIiwic3R5bGVQb3N0IiwiUG9zdHIiLCJwb3N0IiwiY2FyZFZpZXdzIiwidmlld3MiLCJ0b0ZpeGVkIiwibWFpbl9hcnRpY2xlIiwibWFpbl9hcnRpY2xlX19wb3N0IiwicG9zdF9jb2xvciIsImFydGljbGVfcHJldmlld19faGFzaCIsImNhdGVnb3J5IiwibmFtZSIsImNyZWF0ZWRfYXQiLCJmb3JtYXQiLCJtYWluX2FydGljbGVfX3RpdGxlIiwidGl0bGUiLCJtYWluX2FydGljbGVfX2J1dHRvbiIsIm1haW5fYXJ0aWNsZV9fYnV0dG9uX3Bvc3QiLCJtYWluX2FydGljbGVfX2J1dHRvbl9hY3RpdmUiLCJoZW5kbGVMaWtlQ2xpY2siLCJsaWtlX2ltZyIsInNjcm9sbFRvTXlSZWYiLCJtYWluX2FydGljbGVfX2J1dHRvbl9fbGlzdCIsImNvbW1lbnQiLCJjb21tZW50X2ltZyIsIk9wZW5TaGFyZVBvcHVwIiwic2hlcmUiLCJzaGFyZV9pbWciLCJtYWluX2FydGljbGVfX2J1dHRvbl9zdW0iLCJhcnRpY2xlX2J1dHRvbl9fbGlzdF90d28iLCJtYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3byIsImFydGljbGVfYnV0dG9uX19taW5faW1nIiwibGlrZXMiLCJsZW5ndGgiLCJjb21tZW50Q291bnQiLCJzaGFyZUNvdW50IiwiZXhjZXJwdCIsIl9faHRtbCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9