(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chatroom></app-chatroom>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chatroom/chatroom.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chatroom/chatroom.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n    <div class='container-fluid'>\n        <div class='card text-center' id='title'>\n            <div class='card-body'>\n                <h2 class='card-text'>Chat Application</h2>\n                <button type='button' (click)='modalOpen()'>Login</button>\n            </div>\n            \n        </div>\n        <div class='row'>\n                <div class='col-4'>\n                        <div class='card' id='userBox'>\n                                <div class='card-body'>\n                                    <h3 class='card-text' id='activeUsers'>Active Users</h3>\n                                    <p *ngFor='let user of userList'><b>{{user.username}}</b></p>\n                                </div>\n                            </div> \n                </div>\n                <div class='col-8'>\n                        <div class='card' id='textBox'>\n                                <div  class='card-body' id=\"messages\">\n                                    <p *ngFor='let msg of messageList'><b>{{msg.user.username}}: </b>{{msg.message}}</p>\n                                    \n                                </div> \n                            </div>\n                            <div>\n                                <input class='form-control' id='searchBox' [(ngModel)]='messageText' placeholder=\"What would you like to say?\" (keyup.enter)='onEnter()'> \n                            </div>  \n                </div>\n            </div>\n            <div id='github-link'>\n                <h3 class = 'font-italic border-bottom mt-3 text-dark'>GitHub Repository</h3>\n                <a class='ml-3 text-dark' href='https://github.com/e-remington-lee/chat-room'>https://github.com/e-remington-lee/chat-room</a>\n            </div>\n    </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-modal/login-modal.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-modal/login-modal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Login</h5>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\"><b>Username</b></label>\n            <p class=\"text-danger\">{{errorMessage}}</p>\n            <input maxlength=\"10\" type=\"text\" class=\"form-control\" id=\"loginBar\"\n             name=\"loginBar\" [(ngModel)]=\"username\" (keyup.enter)='login()' placeholder=\"Enter username\">\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)='closeModal()'>Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='login()'>Login</button>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-chat-room';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-modal/login-modal.component */ "./src/app/login-modal/login-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_7__["ChatroomComponent"],
            _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ],
        entryComponents: [
            _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalComponent"]
        ],
        exports: [
            _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_7__["ChatroomComponent"]
        ],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.scss":
/*!**************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n  margin: 10px 0 10px 0;\n}\n\n#userBox {\n  height: 700px;\n  overflow: auto;\n}\n\n#textBox {\n  height: 650px;\n  overflow: auto;\n}\n\n#activeUsers {\n  border-bottom: 1px solid black;\n  padding-bottom: 5px;\n}\n\n#searchBox {\n  margin: 10px 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vRDpcXE1hc3Rlcm1pbmRcXENoYXQtcm9vbVxcYW5ndWxhci9zcmNcXGFwcFxcY2hhdHJvb21cXGNoYXRyb29tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGF0cm9vbS9jaGF0cm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNFSjs7QURDQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jaGF0cm9vbS9jaGF0cm9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuI3VzZXJCb3gge1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiN0ZXh0Qm94IHtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvXG59XG5cbiNhY3RpdmVVc2VycyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbiNzZWFyY2hCb3gge1xuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbn0iLCIjdGl0bGUge1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG59XG5cbiN1c2VyQm94IHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiN0ZXh0Qm94IHtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiNhY3RpdmVVc2VycyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuI3NlYXJjaEJveCB7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-modal/login-modal.component */ "./src/app/login-modal/login-modal.component.ts");







let ChatroomComponent = class ChatroomComponent {
    constructor(user, data, web, modal) {
        this.user = user;
        this.data = data;
        this.web = web;
        this.modal = modal;
        this.messageList = [];
        this.userList = [];
    }
    ngAfterViewInit() {
    }
    onEnter() {
        this.container = document.getElementById("textBox");
        this.container.scrollTop = this.container.scrollHeight;
        var today = new Date();
        var message_time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
            + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds();
        const message = {
            user: {
                username: localStorage.getItem('username'),
                user_id: localStorage.getItem('user_id')
            },
            message: this.messageText,
            message_time: message_time
        };
        this.data.writeMessage(message).subscribe(data => {
        });
        this.web.sendSocketMessage(message);
        this.messageText = "";
    }
    modalOpen() {
        let modalOptions = {
            backdrop: 'static'
        };
        const modal = this.modal.open(_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_6__["LoginModalComponent"], modalOptions);
    }
    ngOnInit() {
        this.container = document.getElementById("textBox");
        this.container.scrollTop = this.container.scrollHeight;
        this.web.receiveSocketMessages().subscribe(message => {
            this.messageList.push(message);
        });
        this.web.receiveSocketUsers().subscribe(username => {
            this.userList.push(username);
        });
        this.data.getMessageList().subscribe((data) => {
            this.messageList = data;
        });
        this.user.getUserList().subscribe((data) => {
            this.userList = data;
        });
    }
};
ChatroomComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatroom',
        template: __webpack_require__(/*! raw-loader!./chatroom.component.html */ "./node_modules/raw-loader/index.js!./src/app/chatroom/chatroom.component.html"),
        styles: [__webpack_require__(/*! ./chatroom.component.scss */ "./src/app/chatroom/chatroom.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
], ChatroomComponent);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    writeMessage(message) {
        return this.http.post('/messages', message);
    }
    getMessageList() {
        return this.http.get('/messages');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);



/***/ }),

/***/ "./src/app/login-modal/login-modal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login-modal/login-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.ts ***!
  \******************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");





let LoginModalComponent = class LoginModalComponent {
    constructor(user, web, modalActive) {
        this.user = user;
        this.web = web;
        this.modalActive = modalActive;
        this.currentUser = [];
    }
    ngOnInit() {
    }
    login() {
        if (this.username.length > 10 || this.username.length < 2) {
            this.errorMessage = 'Username must be between 2 and 10 characters';
            return false;
        }
        this.user.checkUserDatabase(this.username.toLocaleLowerCase()).subscribe(resp => {
            if (resp.status === 200) {
                this.errorMessage = 'Username already taken';
            }
        }, error => {
            if (error.status === 404) {
                const newUser = {
                    username: this.username
                };
                this.user.createUser(newUser).subscribe((data) => {
                    this.currentUser = data;
                    localStorage.setItem('username', this.currentUser['username']);
                    localStorage.setItem('user_id', this.currentUser['user_id']);
                });
                alert(`Logged in as ${this.username}`);
                this.web.sendSocketUser(newUser);
                this.modalActive.close();
            }
        });
    }
    closeModal() {
        this.modalActive.close();
    }
};
LoginModalComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
LoginModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-modal',
        template: __webpack_require__(/*! raw-loader!./login-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-modal/login-modal.component.html"),
        styles: [__webpack_require__(/*! ./login-modal.component.scss */ "./src/app/login-modal/login-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], LoginModalComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    checkUserDatabase(username) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', username);
        return this.http.get('/users', { observe: 'response', params });
    }
    createUser(user) {
        return this.http.post('/users', user);
    }
    getUserList() {
        return this.http.get('/users');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let WebsocketService = class WebsocketService {
    constructor() {
        // url = 'http://localhost:8000'
        this.url = 'ws://erl-chat-room.herokuapp.com/';
        this.receiveSocketMessages = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('message', (message) => {
                    observer.next(message);
                });
            });
        };
        this.receiveSocketUsers = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('users', (username) => {
                    observer.next(username);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url, { transports: ['websocket'] });
    }
    sendSocketMessage(message) {
        this.socket.emit('message', message);
    }
    sendSocketUser(username) {
        this.socket.emit('users', username);
    }
};
WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WebsocketService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Mastermind\Chat-room\angular\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map