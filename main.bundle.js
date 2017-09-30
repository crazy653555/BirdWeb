webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_forum_component__ = __webpack_require__("../../../../../src/app/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__identity_identity_component__ = __webpack_require__("../../../../../src/app/identity/identity.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: ' ', redirectTo: '/forum' },
    { path: 'forum', component: __WEBPACK_IMPORTED_MODULE_2__forum_forum_component__["a" /* ForumComponent */] },
    { path: 'identity', component: __WEBPACK_IMPORTED_MODULE_3__identity_identity_component__["a" /* IdentityComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__forum_forum_component__["a" /* ForumComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default{\r\n  background-color: #2f92cA;\r\n}\r\n\r\n\r\n\r\n.navbar-brand img{\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/forum']\">\n        <img src=\"/assets/img/birds_logo.png\" class=\"img-responsive\">\n      </a>\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#nav-menu\" aria-expanded=\"false\">\n        <span class=\"sr-only\">切換導覽</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <button id=\"tweet\" class=\"btn btn-default pull-right visible-xs-block\">\n        <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n        發文\n      </button>\n    </div>\n\n    <div id=\"nav-menu\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/forum']\">\n            <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\n          首頁\n        </a>\n        </li>\n        <li>\n          <a href=\"#\">\n            <span class=\"badge\">5</span>\n            <span class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></span>\n          通知\n        </a>\n        </li>\n        <li>\n          <a href=\"#\">\n            <span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>\n          訊息\n        </a>\n        </li>\n\n        <li class=\"visible-xs-inline\">\n          <a [routerLink]=\"['/identity']\">\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n            個人檔案\n          </a>\n        </li>\n      </ul>\n\n      <li class=\"visible-xs-inline\">\n        <a href=\"#\">\n            <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\n            登出\n          </a>\n      </li>\n\n      <button id=\"tweet\" class=\"btn btn-default pull-right hidden-xs\" data-toggle=\"modal\" data-target=\"#tweet-modal\">\n        <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" ></span>\n        發文\n      </button>\n\n\n\n      <div id=\"nav-options\" class=\"btn-group pull-right hidden-xs\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle thumbnail\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img src=\"/assets/img/w-4.png\">\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li><a [routerLink]=\"['/identity']\">個人檔案</a></li>\n          <li><a href=\"#\">設定</a></li>\n        </ul>\n      </div>\n\n      <form id=\"search\" role=\"search\" class=\"hidden-sm\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"搜尋...\">\n          <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\n        </div>\n      </form>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forum_forum_component__ = __webpack_require__("../../../../../src/app/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__identity_identity_component__ = __webpack_require__("../../../../../src/app/identity/identity.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__forum_forum_component__["a" /* ForumComponent */],
            __WEBPACK_IMPORTED_MODULE_6__identity_identity_component__["a" /* IdentityComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/forum/forum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <!-- profile -->\n    <div id=\"profile\" class=\"col-md-3 hidden-sm hidden-xs\">\n      <div id=\"profile-resume\" class=\"card\">\n        <img class=\"card-img-top img-responsive\" src=\"/assets/img/w-1.png\">\n        <div class=\"card-block\">\n          <img src=\"/assets/img/{{name}}.png\" class=\"card-img\">\n          <h4 class=\"card-title\">{{name}}@chicken</h4>\n          <p class=\"card-text\">你是不是想知道我的鞋子穿幾號?</p>\n          <ul class=\"list-inline list-unstyled\">\n            <li id=\"card-tweets\">\n              <a href=\"#\">\n                  <span class=\"profile-stats\">推文</span>\n                  <span class=\"profile-value\">99k</span>\n                </a>\n            </li>\n\n            <li id=\"card-tweets\">\n              <a href=\"#\">\n                  <span class=\"profile-stats\">正在關注</span>\n                  <span class=\"profile-value\">707</span>\n                </a>\n            </li>\n\n            <li id=\"card-tweets\">\n              <a href=\"#\">\n                  <span class=\"profile-stats\">跟隨者</span>\n                  <span class=\"profile-value\">132k</span>\n                </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div id=\"profile-photo\" class=\"card\">\n        <div class=\"card-header\">照片</div>\n        <div class=\"card-block\">\n          <ul class=\"list-inline list-unstyled\">\n            <li>\n              <a href=\"#\" class=\"thumbnail\">\n                  <img class=\"img-responsive\" src=\"/assets/img/w-5.png\">\n                </a>\n            </li>\n\n            <li>\n              <a href=\"#\" class=\"thumbnail\">\n                  <img class=\"img-responsive\" src=\"/assets/img/w-6.png\">\n                </a>\n            </li>\n\n\n            <li>\n              <a href=\"#\" class=\"thumbnail\">\n                  <img class=\"img-responsive\" src=\"/assets/img/w-9.png\">\n                </a>\n            </li>\n\n\n            <li>\n              <a href=\"#\" class=\"thumbnail\">\n                  <img class=\"img-responsive\" src=\"/assets/img/w-7.png\">\n                </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n    <!-- profile end-->\n\n    <!-- main -->\n    <div id=\"main\" class=\"col-sm-12 col-md-6\">\n\n      <ol class=\"breadcrumb card\">\n        <li><a href=\"#\">首頁</a></li>\n        <li><a href=\"#\">個人檔案</a></li>\n        <li class=\"active\">動態消息</li>\n      </ol>\n\n      <!-- <div class=\"alert alert-success\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h3>推文通知</h3>\n          你已發布一則新推文\n          <a href=\"#\" class=\"alert-link\">點按此處以查看你的推文</a>\n        </div>\n\n        <div class=\"alert alert-info\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h3>推文通知</h3>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:65%\"></div>\n          </div>\n        </div> -->\n\n\n      <div id=\"main-card\" class=\"card\">\n        <form id=\"new-message\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"發生了什麼事?\">\n            <span class=\"input-group-addon\">\n              <span class=\"glyphicon glyphicon-camera\" aria-hidden=\"true\"></span>\n            </span>\n          </div>\n        </form>\n\n        <ul id=\"feed\" class=\"list-unstyled\">\n          <li *ngFor=\"let item of forums\">\n            <img src=\"/assets/img/{{item.name}}.png\" class=\"feed-avatar img-circle\">\n            <div class=\"feed-post\">\n              <h5>{{item.name}}\n                <small>@chicken - {{item.date}} 小時前</small>\n              </h5>\n              <p>{{item.comment}}</p>\n            </div>\n            <div class=\"action-list\">\n              <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"回覆\">\n                  <span class=\"glyphicon glyphicon-share-alt\" aria-hidden=\"true\"></span>\n                   <span class=\"retweet-count\">{{item.request}}</span>\n                </a>\n              <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"轉推\">\n                  <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n                  <span class=\"retweet-count\">{{item.push}}</span>\n                </a>\n              <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"棒\">\n                  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                   <span class=\"retweet-count\">{{item.like}}</span>\n                </a>\n            </div>\n          </li>\n\n        </ul>\n      </div>\n      <!--\n        <nav class=\"text-center\">\n          <ul class=\"pagination pagination-lg\">\n            <li class=\"disabled\"><a href=\"#\" aria-label=\"上一頁\">\n              <span aria-hidden=\"true\">&laquo;</span></a></li>\n            <li class=\"active\"><a href=\"#\">1<span class=\"sr-only\">(目前頁面)</span></a></li>\n            <li><a href=\"#\">2</a></li>\n            <li class=\"disabled\"><a href=\"#\">...</a></li>\n            <li><a href=\"#\">3</a></li>\n            <li><a href=\"#\">4</a></li>\n            <li class=\"disabled\"><a href=\"#\" aria-label=\"下一頁\">\n              <span aria-hidden=\"true\">&raquo;</span></a></li>\n          </ul>\n        </nav> -->\n    </div>\n    <!-- main end-->\n\n    <div id=\"right-content\" class=\"col-md-3 hidden-sm hidden-xs\">\n      <div id=\"who-follow\" class=\"card\">\n        <div class=\"card-header\">\n          你可能也會喜歡\n        </div>\n        <div class=\"card-block\">\n          <ul class=\"list-unstyled\">\n            <li>\n              <img src=\"/assets/img/果丁莓 ‧ 蹦跳鳥日子.png\" class=\"img-rounded\">\n              <div class=\"info\">\n                <strong>果丁莓 ‧ 蹦跳鳥日子</strong>\n                <a href=\"#\" role=\"button\" tabindex=\"-1\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"你或許會想關注\" class=\"btn btn-default clearfix\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">\n                    </span>\n                    關注\n                  </a>\n              </div>\n            </li>\n            <li>\n              <img src=\"/assets/img/遙遙.png\" class=\"img-rounded\">\n              <div class=\"info\">\n                <strong>yao_la</strong>\n                <a href=\"#\" role=\"button\" tabindex=\"-1\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"你或許會想關注\" class=\"btn btn-default clearfix\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">\n                    </span>\n                    關注\n                  </a>\n              </div>\n            </li>\n            <li>\n              <img src=\"/assets/img/複製鳥協會.png\" class=\"img-rounded\">\n              <div class=\"info\">\n                <strong>複製鳥協會</strong>\n                <a href=\"#\" role=\"button\" tabindex=\"-1\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"你或許會想關注\" class=\"btn btn-default clearfix\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">\n                    </span>\n                    關注\n                  </a>\n              </div>\n            </li>\n            <li>\n              <img src=\"/assets/img/西西.png\" class=\"img-rounded\">\n              <div class=\"info\">\n                <strong>linsisisisisisi</strong>\n                <a href=\"#\" role=\"button\" tabindex=\"-1\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"你或許會想關注\" class=\"btn btn-default clearfix\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">\n                    </span>\n                    關注\n                  </a>\n              </div>\n            </li>\n            <li>\n              <img src=\"/assets/img/英雄家族.png\" class=\"img-rounded\">\n              <div class=\"info\">\n                <strong>my6birds</strong>\n                <a href=\"#\" role=\"button\" tabindex=\"-1\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"你或許會想關注\" class=\"btn btn-default clearfix\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">\n                    </span>\n                    關注\n                  </a>\n              </div>\n            </li>\n            <li>\n              <img src=\"/assets/img/w-15.png\" class=\"img-rounded\">\n              <div class=\"info\">\n                <strong>lin_bao_zo</strong>\n                <a href=\"#\" role=\"button\" tabindex=\"-1\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"你或許會想關注\" class=\"btn btn-default clearfix\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">\n                    </span>\n                    關注\n                  </a>\n              </div>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n\n      <div id=\"app-info\" class=\"card\">\n        <div class=\"card-block\">\n          @2017 ChickenApp\n          <ul class=\"list-unstyled list-inline\">\n            <li><a href=\"#\">關於</a></li>\n            <li><a href=\"#\">條款與隱私政策</a></li>\n            <li><a href=\"#\">輔助說明</a></li>\n            <li><a href=\"#\">狀態</a></li>\n            <li><a href=\"#\">聯絡資訊</a></li>\n          </ul>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"#\">連結其他的通訊錄</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"tweet-modal\" tabindex=\"-1\" role=\"dialog\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" daa-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n            <h4 class=\"modal-title\">發布新推文</h4>\n          </div>\n          <div class=\"modal-body\">\n            <textarea class=\"form-control\" rows=\"4\" placeholder=\"你想說甚麼?\" maxlength=\"140\"></textarea>\n          </div>\n          <div class=\"modal-footer\">\n            <span class=\"char-count pull-left\" data-max=\"140\">140</span>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">關閉</button>\n            <button type=\"button\" class=\"btn btn-primary\">儲存變更</button>\n          </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForumComponent = (function () {
    function ForumComponent(http) {
        var _this = this;
        this.http = http;
        this.forums = [];
        this.name = "翁大頭";
        this.http.get('/api/forum.json')
            .subscribe(function (data) {
            console.log(data);
            _this.forums = data;
            _this.forums.reverse();
        });
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    return ForumComponent;
}());
ForumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-forum',
        template: __webpack_require__("../../../../../src/app/forum/forum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/forum/forum.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ForumComponent);

var _a;
//# sourceMappingURL=forum.component.js.map

/***/ }),

/***/ "../../../../../src/app/identity/identity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/identity/identity.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  identity works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/identity/identity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IdentityComponent = (function () {
    function IdentityComponent() {
    }
    IdentityComponent.prototype.ngOnInit = function () {
    };
    return IdentityComponent;
}());
IdentityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-identity',
        template: __webpack_require__("../../../../../src/app/identity/identity.component.html"),
        styles: [__webpack_require__("../../../../../src/app/identity/identity.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IdentityComponent);

//# sourceMappingURL=identity.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map