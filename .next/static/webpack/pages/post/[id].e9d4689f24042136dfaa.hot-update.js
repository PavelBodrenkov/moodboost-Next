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
              className: "article-button__list-two main-article__button_list-two",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 100
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                className: "article-button__min-img",
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
              className: "article-button__list-two main-article__button_list-two",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_image_point_svg__WEBPACK_IMPORTED_MODULE_3__.default
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 100
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "article-button__list-two main-article__button_list-two",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmU5ZDQ2ODlmMjQwNDIxMzZkZmFhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztDQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNWSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBR3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLE1BQUlDLFNBQVMsR0FBRyxDQUFDRCxJQUFJLENBQUNFLEtBQUwsR0FBYSxJQUFkLEVBQW9CQyxPQUFwQixDQUE0QixDQUE1QixDQUFoQixDQVRxQixDQVV0QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0Esc0JBQ0k7QUFBUyxhQUFTLEdBQUVMLCtFQUFBLEVBQXdCQSxxRkFBMUIsQ0FBbEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUEsNkVBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSx3RkFBaEI7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsSUFBYjtBQUFBLG9CQUFtQkUsSUFBbkIsYUFBbUJBLElBQW5CLHlDQUFtQkEsSUFBSSxDQUFFUSxRQUF6QixtREFBbUIsZUFBZ0JDO0FBQW5D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SSx1QkFBUyxFQUFDLHdEQUFkO0FBQUEsc0NBQ0EsOERBQUMsb0RBQUQ7QUFBTyx5QkFBUyxFQUFDLHlCQUFqQjtBQUEyQyxtQkFBRyxFQUFFRSxrRUFBV0E7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQSxlQUVJO0FBQUEsMEJBQU9TLElBQUksQ0FBQ2dDLFlBQUwsSUFBcUI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEosZUFlSTtBQUFJLHVCQUFTLEVBQUMsd0RBQWQ7QUFBQSxxQ0FBdUU7QUFBSyxtQkFBRyxFQUFFM0MsNERBQUtBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZKLGVBZ0JJO0FBQUksdUJBQVMsRUFBQyx3REFBZDtBQUFBLHNDQUNJLDhEQUFDLG9EQUFEO0FBQU8seUJBQVMsRUFBQyx5QkFBakI7QUFBMkMsbUJBQUcsRUFBRUksZ0VBQVNBO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFBLDBCQUFPTyxJQUFJLENBQUNpQyxVQUFMLElBQW1CO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0dILENBM0tEOztLQUFNbEM7QUE2S04sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL1Bvc3Quc2Nzcyc7XHJcbi8vIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCBwb3N0ZWZ9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHtmZXRjaE9uZXBvc3QsIGZldGNoRGVsZXRlTGlrZSwgZmV0Y2hBZGRMaWtlcywgZmV0Y2hTaGFyZX0gZnJvbSAnLi4vLi4vaHR0cC9wb3N0QVBJJztcclxuLy8gaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xyXG4vLyBpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XHJcbi8vIGltcG9ydCB7IGZldGNoQWxsQ29tbWVudCB9IGZyb20gXCIuLi8uLi9odHRwL2NvbW1lbnRBcGlcIjtcclxuaW1wb3J0IHNoYXJlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZS9zaGFyZS5zdmcnO1xyXG5pbXBvcnQgbGlrZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvbGlrZS5zdmcnO1xyXG5pbXBvcnQgcG9pbnQgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL3BvaW50LnN2Zyc7XHJcbmltcG9ydCB3YXRjaF9taW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL3dhdGNoLW1pbi5zdmcnO1xyXG5pbXBvcnQgY29tbWVudF9taW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL2NvbW1lbnQtbWluLnN2Zyc7XHJcbmltcG9ydCBsaWtlX21pbiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2UvbGlrZS1taW4uc3ZnJztcclxuaW1wb3J0IHNoYXJlX21pbiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2Uvc2hhcmUtbWluLnN2Zyc7XHJcbi8vIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuLy8gaW1wb3J0IFNpZ25VcFdlZWtseSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpZ25VcFdlZWtseS9TaWduVXBXZWVrbHknO1xyXG4vLyBpbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cydcclxuaW1wb3J0IGNvbW1lbnRJbWcgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlL2NvbW1lbnQuc3ZnJztcclxuLy8gLy8gaW1wb3J0IFNlb0hlYWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TRU8vU2VvSGVhZCc7XHJcbi8vIC8vIGltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbi8vIGltcG9ydCBQb3B1cFNoYXJlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9wdXBTaGFyZS9Qb3B1cFNoYXJlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtZG9tLXBhcnNlcic7XHJcbmltcG9ydCBzdHlsZVBvc3QgZnJvbSAnLi4vLi4vc3R5bGVzL3Bvc3QubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuXHJcbmNvbnN0IFBvc3RyID0gKHtwb3N0fSkgPT4ge1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCBbcG9zdCwgc2V0cG9zdF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIC8vIGNvbnN0IHtpZH0gPSB1c2VQYXJhbXMoKVxyXG4gICAgLy8gY29uc3Qge3Bvc3R9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgLy8gY29uc3Qge3Bvc3R9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gICAgLy8gY29uc3Qge2FkbWlufSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgIC8vIGNvbnN0IHtjb21tZW50fSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgICBsZXQgY2FyZFZpZXdzID0gKHBvc3Qudmlld3MgLyAxMDAwKS50b0ZpeGVkKDEpXHJcbiAgICAvLyBjb25zdCBbY2FyZFNoYXJlLCBzZXRDYXJkU2hhcmVdID0gdXNlU3RhdGUoeyB1cmw6XCJcIiwgaW1nOlwiXCIsIGlkOlwiXCIsIGNsaWNrczpcIlwiIH0pXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRtaW5Ub2tlblwiKVxyXG4gICAgLy8gICAgIGZldGNoT25lcG9zdChpZCwgdG9rZW4pLnRoZW4oZGF0YSA9PiBzZXRwb3N0KGRhdGEuZGF0YSkpXHJcbiAgICAvLyB9LCBbaWRdKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pblRva2VuXCIpXHJcbiAgICAvLyAgICAgIGZldGNoQWxsQ29tbWVudChpZCwgdG9rZW4pLnRoZW4oZGF0YSA9PiBjb21tZW50LnNldEFsbENvbW1lbnRzKGRhdGEuZGF0YSkpXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyBjb25zdCBpc0xpa2VkID0gcG9zdC5saWtlcz8uc29tZSgobGlrZSkgPT4gbGlrZSA9PT0gYWRtaW4uYWRtaW4uX2lkKVxyXG4gICAgLy8gY29uc3QgY2FyZExpa2VCdXR0b25DbGFzc05hbWUgPSBgbWFpbi1hcnRpY2xlX19idXR0b25fX2xpc3QgJHtpc0xpa2VkICYmICdsaWtlJ31gXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gaGVuZGxlTGlrZUNsaWNrICgpIHtcclxuICAgIC8vICAgICBpZihwb3N0LmlzQXV0aCkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBwb3N0dG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvc3RUb2tlblwiKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBpc0xpa2VkID0gcG9zdC5saWtlcy5zb21lKChsaWtlKSA9PiBsaWtlID09PSBhZG1pbi5hZG1pbi5faWQpXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGxpa2VSZXF1ZXN0ID0gaXNMaWtlZCA/IGZldGNoRGVsZXRlTGlrZShwb3N0Ll9pZCwgcG9zdHRva2VuKSA6IGZldGNoQWRkTGlrZXMocG9zdC5faWQsIHBvc3R0b2tlbilcclxuICAgIC8vICAgICAgICAgbGlrZVJlcXVlc3QudGhlbigobmV3UG9zdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0cG9zdCh7Li4ucG9zdCwgbGlrZXM6bmV3UG9zdC5kYXRhLmxpa2VzfSlcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBwb3N0LnNldE9wZW5BdXRoKHRydWUpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc3QgY29tID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2Nyb2xsVG9NeVJlZiAoKSB7XHJcbiAgICAvLyAgIGNvbS5jdXJyZW50LnNjcm9sbEludG9WaWV3KClcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAvLyAgIH07XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAvLyByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzaGFyZUNsaWNrIChpZCkge1xyXG4gICAgLy8gICAgIGZldGNoU2hhcmUoaWQpXHJcbiAgICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldHBvc3Qoey4uLnBvc3QsIHNoYXJlQ291bnQ6ZGF0YS5kYXRhLnNoYXJlQ291bnR9KVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gT3BlblNoYXJlUG9wdXAgKCkge1xyXG4gICAgLy8gICAgIHBvc3Quc2V0T3BlblNoYXJlKHRydWUpXHJcbiAgICAvLyAgICAgc2V0Q2FyZFNoYXJlKHt1cmw6cG9zdC5faWQsIGltZzpwb3N0LmltYWdlLCBpZDpwb3N0Ll9pZCwgY2xpY2tzOnNoYXJlQ2xpY2t9KVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlLCBzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19wb3N0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlUG9zdC5wb3N0X2NvbG9yfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QuYXJ0aWNsZV9wcmV2aWV3X19oYXNofT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3QxJz57cG9zdD8uY2F0ZWdvcnk/Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttb21lbnQocG9zdC5jcmVhdGVkX2F0KS5mb3JtYXQoXCJERCBNTU0sIFlZWVlcIil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX190aXRsZX0+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b24sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9wb3N0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZVBvc3QubWFpbl9hcnRpY2xlX19idXR0b25fYWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoZW5kbGVMaWtlQ2xpY2soKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0Lmxpa2VfaW1nfSBzcmM9e2xpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpa2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb015UmVmKCl9IGNsYXNzTmFtZT17c3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX19saXN0LCBzdHlsZVBvc3QuY29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5jb21tZW50X2ltZ30gc3JjPXtjb21tZW50SW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBPcGVuU2hhcmVQb3B1cCgpfSBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9fbGlzdCwgc3R5bGVQb3N0LnNoZXJlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LnNoYXJlX2ltZ30gc3JjPXtzaGFyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9zdW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19taW5faW1nfSBzcmM9e3dhdGNoX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcmRWaWV3cyArICdLJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVQb3N0LmFydGljbGVfYnV0dG9uX19saXN0X3R3bywgc3R5bGVQb3N0Lm1haW5fYXJ0aWNsZV9fYnV0dG9uX2xpc3RfdHdvfT48aW1nICBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbGlzdF90d28sIHN0eWxlUG9zdC5tYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlUG9zdC5hcnRpY2xlX2J1dHRvbl9fbWluX2ltZ30gc3JjPXtsaWtlX21pbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QubGlrZXM/Lmxlbmd0aCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXJ0aWNsZS1idXR0b25fX21pbi1pbWcnIHNyYz17Y29tbWVudF9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QuY29tbWVudENvdW50IHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+PGltZyBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdhcnRpY2xlLWJ1dHRvbl9fbWluLWltZycgc3JjPXtzaGFyZV9taW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3Quc2hhcmVDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LWV4Y2VycHRcIj57cG9zdC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYm9keSB9fS8+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuYm9keSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1hcnRpY2xlX19idXR0b24gbWFpbi1hcnRpY2xlX19idXR0b24tcG9zdCBub24tc3RpY2t5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1hcnRpY2xlX19idXR0b24tYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGVuZGxlTGlrZUNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImxpa2UtaW1nXCIgc3JjPXtsaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MaWtlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9NeVJlZigpfSBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbl9fbGlzdCBjb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNvbW1lbnQtaW1nXCIgc3JjPXtjb21tZW50SW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21tZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBPcGVuU2hhcmVQb3B1cCgpfSBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbl9fbGlzdCBzaGVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwic2hhcmUtaW1nXCIgc3JjPXtzaGFyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLWFydGljbGVfX2J1dHRvbi1zdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXJ0aWNsZS1idXR0b25fX21pbi1pbWcnIHNyYz17d2F0Y2hfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FyZFZpZXdzICsgJ0snfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+PGltZyAgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e2xpa2VfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5saWtlcz8ubGVuZ3RoIHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+PGltZyBzcmM9e3BvaW50fS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpY2xlLWJ1dHRvbl9fbGlzdC10d28gbWFpbi1hcnRpY2xlX19idXR0b25fbGlzdC10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2FydGljbGUtYnV0dG9uX19taW4taW1nJyBzcmM9e2NvbW1lbnRfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LmNvbW1lbnRDb3VudCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGljbGUtYnV0dG9uX19saXN0LXR3byBtYWluLWFydGljbGVfX2J1dHRvbl9saXN0LXR3b1wiPjxpbWcgc3JjPXtwb2ludH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aWNsZS1idXR0b25fX2xpc3QtdHdvIG1haW4tYXJ0aWNsZV9fYnV0dG9uX2xpc3QtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXJ0aWNsZS1idXR0b25fX21pbi1pbWcnIHNyYz17c2hhcmVfbWlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LnNoYXJlQ291bnQgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgcmVmPXtjb219IGNsYXNzTmFtZT1cInNpZ24tdXAtd2Vla2x5X19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFNpZ25VcFdlZWtseSAvPiBcclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDxDb21tZW50cyAgcG9zdD17cG9zdH0vPiAqL31cclxuICAgICAgICB7Lyoge2NhcmRTaGFyZS51cmwgJiYgY2FyZFNoYXJlLmltZyAmJiA8UG9wdXBTaGFyZSBsb2c9eydodHRwczovL21vb2Rib29zdC5tZS9tYWluL3Bvc3QvJyArIGNhcmRTaGFyZS51cmx9IGltZz17J2h0dHBzOi8vYXBpLm1vb2Rib29zdC5tZS8nK2NhcmRTaGFyZS5pbWd9IGlkPXtjYXJkU2hhcmUuaWR9IHNoYXJlQ2xpY2s9e2NhcmRTaGFyZS5jbGlja3N9Lz59ICovfVxyXG4gXHJcbiAgICA8L2FydGljbGU+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0clxyXG5cclxuIl0sIm5hbWVzIjpbInNoYXJlIiwibGlrZSIsInBvaW50Iiwid2F0Y2hfbWluIiwiY29tbWVudF9taW4iLCJsaWtlX21pbiIsInNoYXJlX21pbiIsImNvbW1lbnRJbWciLCJtb21lbnQiLCJJbWFnZSIsInBhcnNlIiwic3R5bGVQb3N0IiwiUG9zdHIiLCJwb3N0IiwiY2FyZFZpZXdzIiwidmlld3MiLCJ0b0ZpeGVkIiwibWFpbl9hcnRpY2xlIiwibWFpbl9hcnRpY2xlX19wb3N0IiwicG9zdF9jb2xvciIsImFydGljbGVfcHJldmlld19faGFzaCIsImNhdGVnb3J5IiwibmFtZSIsImNyZWF0ZWRfYXQiLCJmb3JtYXQiLCJtYWluX2FydGljbGVfX3RpdGxlIiwidGl0bGUiLCJtYWluX2FydGljbGVfX2J1dHRvbiIsIm1haW5fYXJ0aWNsZV9fYnV0dG9uX3Bvc3QiLCJtYWluX2FydGljbGVfX2J1dHRvbl9hY3RpdmUiLCJoZW5kbGVMaWtlQ2xpY2siLCJsaWtlX2ltZyIsInNjcm9sbFRvTXlSZWYiLCJtYWluX2FydGljbGVfX2J1dHRvbl9fbGlzdCIsImNvbW1lbnQiLCJjb21tZW50X2ltZyIsIk9wZW5TaGFyZVBvcHVwIiwic2hlcmUiLCJzaGFyZV9pbWciLCJtYWluX2FydGljbGVfX2J1dHRvbl9zdW0iLCJhcnRpY2xlX2J1dHRvbl9fbGlzdF90d28iLCJtYWluX2FydGljbGVfX2J1dHRvbl9saXN0X3R3byIsImFydGljbGVfYnV0dG9uX19taW5faW1nIiwibGlrZXMiLCJsZW5ndGgiLCJjb21tZW50Q291bnQiLCJzaGFyZUNvdW50IiwiZXhjZXJwdCIsIl9faHRtbCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9