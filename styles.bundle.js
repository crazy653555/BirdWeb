webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody{\n  background-color: #f5f8fa;\n}\n\nbody{\n  padding-top:4em;\n  background-color: #f5f8fa;\n}\n\n\n.navbar-brand img{\n  height: 100%;\n}\n\nnav form#search{\n  float:right;\n  padding:0.5em;\n}\n\nnav form#search .glyphicon-search{\n  z-index:99;\n  position: absolute;\n  right:0.7em;\n  top:50%;\n  margin-top:-0.44em;\n}\n\nnav form#search .input-group .from-control{\n  border-radius:0.25em;\n}\n\n#nav-options{\n  margin:0.5em;\n}\n\n#nav-options button.thumbnail{\n  margin:0;\n  padding:0;\n}\n\n#nav-options img{\n  max-height: 2.3em;\n  border-radius: 0.3em;\n}\n\n#tweet{\n  margin: 0.5em;\n}\n\n.navbar-default{\n  background-color: #2f92cA;\n}\n\n.navbar-default .navbar-nav>li>a,\n.navbar-default .navbar-nav>li>a:hover{\n  color:#FFF;\n  transition: all 150ms ease-in-out;\n}\n\n.navbar-default .navbar-nav> .active>a{\n  background-color: transparent;\n  color: #fff;\n  padding-bottom: 0.62em;\n  border-bottom:0.42em solid #FFF;\n}\n\n.navbar-default .navbar-nav > .active >a:hover,\n.navbar-default .navbar-nav > li >a:hover{\n  background-color: transparent;\n  color:#f3f3f3;\n  padding-bottom: 0.62em;\n  border-bottom:0.45em solid #f3f3f3;\n}\n\n\n.navbar-nav .badge{\n  color: #2f92cA;\n  background-color: #fff;\n  font-size: 0.7em;\n  padding: 0.27rem 0.55rem 0.2rem 0.4rem;\n  position:absolute;\n  left:0.37rem;\n  top:0.7rem;\n  z-index: 99;\n  border:0.2rem solid #2f92cA;\n}\n\n.navbar-header .navbar-toggle,\n.navbar-header .navbar-toggle:focus{\n  background-color: #57a5d2;\n}\n\n.navbar-default .navbar-toggle:hover{\n  background-color: #3986b3;\n}\n\n.navbar-default .navbar-toggle .icon-bar{\n  background-color:#FFF;\n}\n\n@media(max-width:60em){\n  .navbar-default .navbar-nav > .active > a{\n    border-bottom:none;\n    border-left:0.45em solid #fff;\n    padding-left:0.5em;\n  }\n}\n\n\n@media(max-width:60em){\n  .navbar-default .navbar-nav > .active >a:hover,\n  .navbar-default .navbar-nav > li >a:hover{\n    border-bottom:none;\n    border-left:0.45em solid #fff;\n    padding-left:0.5em;\n  }\n}\n\n\n.card{\n  position: relative;\n  border:0.1rem solid #e5e5e5;\n  border-radius: 0.4rem;\n  background-color: #fff;\n}\n\n.card-img-top{\n  border-radius: 0.4rem 0.4rem 0 0;\n}\n\n.card-block{\n  padding:1.25rem;\n}\n\n.card-block img.card-img{\n  top:50%;\n  margin-top:-36px;\n  width:72px;\n  border:3px solid #fff;\n  border-radius:0.4rem;\n  float:left;\n  position:relative;\n  z-index:99;\n}\n\n.card-block ul a:hove{\n  text-decoration: none;\n}\n\n.card-block ul .profile-stats{\n  color: #777;\n  display:block;\n  text-transform: uppercase;\n  font-size:0.63em;\n}\n\n.card-block ul .profile-value{\n  color: #000;\n  font-size: 1.2em;\n  font-weight: bold;\n  color: #2f92ca;\n}\n\n.card .card-header{\n  border-radius:0.4rem 0.4rem 0 0;\n  padding:.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-bottom: 0.1em solid #e5e5e5;\n  color: #4e5665;\n  font-weight: bold;\n}\n\n#profile-photo{\n  margin-top: 2rem;\n}\n\n#profile-photo ul{\n  margin:0;\n}\n\n#profile-photo li{\n  width:48%;\n  padding:0;\n}\n\n#profile-photo li a{\n  margin:0;\n}\n\nform#new-message{\n  border-radius: 0.4rem 0.4rem 0 0;\n  padding:1em;\n  border-bottom:0.1em solid #cee4f5;\n  background-color: #ebf4fb;\n}\n\nform#new-message .input-group-addon{\n  background-color: #fff;\n}\n\nul#feed{\n  margin:0;\n}\n\nul#feed li{\n  padding:1em 1em;\n}\n\nul#feed .feed-avatar{\n  width: 13%;\n  display:inline-block;\n  vertical-align: top;\n}\n\nul#feed .feed-post{\n  width:80%;\n  display: inline-block;\n  margin-left: 2%;\n}\n\nul#feed .feed-post h5{\n  font-weight:bold;\n  margin-bottom:0.5rem;\n}\n\nul#feed .feed-post h5 >small{\n  font-size:1.2rem;\n}\n\nul#feed .action-list{\n  margin-left: 13%;\n  padding-left: 1em;\n}\n\nul#feed .action-list a{\n  width:15%;\n  display:inline-block;\n}\n\nul#feed .action-list a:hover{\n  text-decoration:none;\n}\n\nul#feed .action-list .retweet-count{\n  padding-left: 0.2em;\n  font-weight:bold;\n}\n\nul#feed li{\n   padding:1em 1em;\n   border-bottom:0.1rem solid #e5e5e5;\n}\n\n/* 最後一個li 取消底線  */\nul#feed li:last-child{\n  border-bottom:none;\n}\n\n\n\ndiv#who-follow li{\n  margin-bottom:2em;\n}\n\ndiv#who-follow li:last-child{\n   margin-bottom:0;\n}\n\ndiv#who-follow li img{\n  width:26%;\n  display:inline-block;\n  vertical-align:top;\n  margin-right:2%;\n}\n\ndiv#who-follow li .info{\n  width:68%;\n  display:inline-block;\n}\n\ndiv#whofollow li .info strong{\n  display:block;\n  overflow:hidden;\n  text-overflow:ellipsis;\n}\n\ndiv#who-follow li .info .glyphicon{\ncolor:#2a92ca;\n}\n\n.card .card-footer{\n  border-radius:0 0 0.4rem 0.4rem;\n  padding:.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-top:0.1em solid #e5e5e5;\n  color: #4e5665;\n}\n\ndiv#app-info{\n  margin-top:2rem;\n}\n\n.alert h3{\n  margin: 0 0 1rem;\n  font-size: 1.4em;\n}\n\n.alert{\n  border-left-width: 0.5rem;\n}\n\n@-webkit-keyframes w70{\n  from{width:0%}\n  to{width:70%}\n}\n\n@keyframes w70{\n  from{width:0%}\n  to{width:70%}\n}\n\n.progress-bar.active{\n  -webkit-animation: w70 1 ease forwards,\n             progress-bar-stripes 2s linear infinite;\n          animation: w70 1 ease forwards,\n             progress-bar-stripes 2s linear infinite;\n}\n\n\n\n.row .card + .card{\n  margin-top:2rem;\n}\n\n#profile-settings .nav-stacked li{\n  border-bottom:1px solid #e5e5e5;\n  margin:0;\n}\n\n#profile-settings .nav-stacked a{\n  border-radius:0;\n}\n\n#profile-settings .nav-stacked li:first-child a{\n  border-radius:0.4rem 0.4rem 0 0;\n}\n\n\n#profile-settings .nav-stacked li:last-child{\n  border-radius:0;\n}\n\n#profile-settings .nav-stacked li:last-child a{\n  border-bottom:0 0 0.4rem 0.4rem;\n}\n\n\n#account-tabs > li{\n  border-bottom:0.1rem solid #e5e5e5;\n}\n\n#account-tabs a{\n  border-bottom:0;\n}\n\n#main .tab-content{\n  padding:2em;\n  margin-top:-0.1rem;\n}\n\n#account-tabs>li{\n  border-bottom:0;\n}\n\n#account-tabs{\n  position:relative;\n  z-index:99;\n}\n\n#main .form-horizontal .form-group:last-child{\n  margin-bottom: 0;\n}\n\n.list-group-item{\n  border-color: #e5e5e5;\n}\n\n#right-content .list-group .label{\n  float:right;\n  padding:0.3rem 0.6rem;\n}\n\n#right-content .list-group .badge.glyphicon-star{\n  background-color: #f0ad4e;\n  padding:0.4rem;\n  padding-left: 0.5rem;\n}\n\ndiv#who-follow li .info .glyphicon-ok{\n  color:#5cb85c;\n}\n\n#messages-modal .btn-message{\n  position: absolute;\n  right: 3em;\n  top:0.75em;\n}\n\n\n\n#messages-modal .modal-body{\n  max-height: 32rem;\n  overflow: auto;\n}\n\n#messages-modal li{\n  padding:0.75rem;\n  border-bottom: 0.1rem solid #e6e6e6;\n}\n\n#messages-modal li:hover{\n  background-color: #e6e6e6;\n}\n\n#messages-modal li a:hover{\n  text-decoration:none;\n}\n\n#messages-modal li img{\n  max-width: 15%;\n}\n\n#messages-modal .msg-content{\n  display: inline-block;\n  color:#000;\n}\n#messages-modal .msg-content h5{\n  font-size: 1em;\n  font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map