(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-center {\r\n    margin: 0 auto;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span  class=\"title-center\">Issue Tracker</span>\n</mat-toolbar>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./issue.service */ "./src/app/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //For routes
//For http client, to be used by service

//For using Form Builders

//Importing components





//For material designing

//For service class 

var routes = [
    { path: 'create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"] },
    { path: 'edit/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"] },
    { path: 'list', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
            ],
            providers: [_issue_service__WEBPACK_IMPORTED_MODULE_11__["IssueService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.create-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n}\r\n\r\n.field-full-width {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <br>\n    <mat-card>\n      <section class=\"mat-typography\">\n        <h3>Create A New Issue</h3>\n      </section>\n      <mat-divider></mat-divider>\n      <br>\n      <form [formGroup]=\"createForm\" class=\"create-form\">\n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Issue Title\" formControlName=\"title\" #title>\n          <!--<mat-error *ngIf=\"createForm.controls['title'].errors.required\">\n            Title is <strong>required</strong>\n          </mat-error>-->\n        </mat-form-field>\n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Responsible\" formControlName=\"responsible\" #responsible>\n        </mat-form-field>\n        <mat-form-field class=\"field-full-width\">\n          <textarea matInput placeholder=\"Description\" formControlName=\"description\" #description></textarea>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-select placeholder=\"Severity\" formControlName=\"severity\" #severity>\n              <mat-option value=\"Low\">Low</mat-option>\n              <mat-option value=\"Medium\">Medium</mat-option>\n              <mat-option value=\"High\">High</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-divider></mat-divider>\n        <br><br>\n        <button mat-raised-button color=\"warn\" routerLink=\"/list\">Back</button>&nbsp;\n        <button type=\"submit\" (click)=\"addIssue(title.value, responsible.value, description.value, severity.value)\" [disabled]=\"createForm.pristine || createForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n      </form>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(issueService, fb, router) {
        this.issueService = issueService;
        this.fb = fb;
        this.router = router;
        this.createForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            responsible: '',
            description: '',
            severity: ''
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.addIssue = function (title, responsible, description, severity) {
        var _this = this;
        this.issueService.addIssue(title, responsible, description, severity).subscribe(function () {
            _this.router.navigate(['/list']);
        });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n}\r\n\r\n.field-full-width {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <br>\n    <mat-card>\n      <section class=\"mat-typography\">\n        <h3>Update Issue</h3>\n      </section>\n      <mat-divider></mat-divider>\n      <br>\n      <form [formGroup]=\"updateForm\" class=\"edit-form\">\n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Issue Title\" formControlName=\"title\" #title>\n        </mat-form-field>\n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"Responsible\" formControlName=\"responsible\" #responsible>\n        </mat-form-field>\n        <mat-form-field class=\"field-full-width\">\n          <textarea matInput placeholder=\"Description\" formControlName=\"description\" #description></textarea>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-select placeholder=\"Severity\" formControlName=\"severity\" #severity>\n              <mat-option value=\"Low\">Low</mat-option>\n              <mat-option value=\"Medium\">Medium</mat-option>\n              <mat-option value=\"High\">High</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-select placeholder=\"Status\" formControlName=\"status\" #status>\n            <mat-option value=\"Open\">Open</mat-option>\n            <mat-option value=\"In Progress\">In Progress</mat-option>\n            <mat-option value=\"Done\">Done</mat-option>\n          </mat-select>\n      </mat-form-field>\n        <mat-divider></mat-divider>\n        <br><br>\n        <button mat-raised-button color=\"warn\" routerLink=\"/list\">Back</button>&nbsp;\n        <button type=\"submit\" (click)=\"updateIssue(title.value, responsible.value, description.value, severity.value, status.value)\" [disabled]=\"updateForm.pristine || updateForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n      </form>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(issueService, router, route, snackBar, fb) {
        this.issueService = issueService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.fb = fb;
        this.issue = {};
        this.updateForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            responsible: '',
            description: '',
            severity: '',
            status: ''
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.issueService.getIssueById(_this.id).subscribe(function (res) {
                _this.issue = res;
                _this.updateForm.get('title').setValue(_this.issue.title);
                _this.updateForm.get('responsible').setValue(_this.issue.responsible);
                _this.updateForm.get('description').setValue(_this.issue.description);
                _this.updateForm.get('severity').setValue(_this.issue.severity);
                _this.updateForm.get('status').setValue(_this.issue.status);
            });
        });
    };
    EditComponent.prototype.updateIssue = function (title, responsible, description, severity, status) {
        var _this = this;
        this.issueService.updateIssue(this.id, title, responsible, description, severity, status).subscribe(function () {
            _this.snackBar.open('Issue updated successfully', 'OK', {
                duration: 3000
            });
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_4__["IssueService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-right {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <br>\n    <mat-card>\n      <button mat-raised-button color=\"primary\" routerLink=\"/create\">Create New Issue</button>\n      <br><br>\n      <mat-divider></mat-divider>\n      <br>\n      <table mat-table [dataSource]=\"issues\" >\n        <ng-container matColumnDef=\"title\">\n          <th mat-header-cell *matHeaderCellDef>Title</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"responsible\">\n          <th mat-header-cell *matHeaderCellDef>Responsible</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.responsible}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"severity\">\n          <th mat-header-cell *matHeaderCellDef>Severity</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.severity}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef>Status</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\">Actions</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\">\n            <button mat-button color=\"primary\" (click)=\"editIssue(element._id)\">Edit</button>\n            <button mat-button color=\"warn\" (click)=\"deleteIssue(element._id)\">Delete</button>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  \n      </table>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(issueService, router) {
        this.issueService = issueService;
        this.router = router;
        this.displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.fetchIssues();
    };
    ListComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.issueService.getIssues().subscribe(function (data) {
            _this.issues = data;
            console.log("get service call");
            console.log(_this.issues);
        });
    };
    ListComponent.prototype.editIssue = function (id) {
        this.router.navigate(["/edit/" + id]);
    };
    ListComponent.prototype.deleteIssue = function (id) {
        var _this = this;
        this.issueService.deleteIssue(id).subscribe(function () {
            _this.fetchIssues();
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IssueService = /** @class */ (function () {
    function IssueService(http) {
        this.http = http;
        this.uri = 'https://issuesbackend.herokuapp.com';
    }
    IssueService.prototype.getIssues = function () {
        return this.http.get(this.uri + "/issues");
    };
    IssueService.prototype.getIssueById = function (id) {
        return this.http.get(this.uri + "/issues/" + id);
    };
    IssueService.prototype.addIssue = function (title, responsible, description, severity) {
        var issue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity
        };
        return this.http.post(this.uri + "/issues/add", issue);
    };
    IssueService.prototype.updateIssue = function (id, title, responsible, description, severity, status) {
        var issue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity,
            status: status
        };
        return this.http.post(this.uri + "/issues/update/" + id, issue);
    };
    IssueService.prototype.deleteIssue = function (id) {
        return this.http.get(this.uri + "/issues/delete/" + id);
    };
    IssueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IssueService);
    return IssueService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\angular6\frontend\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map