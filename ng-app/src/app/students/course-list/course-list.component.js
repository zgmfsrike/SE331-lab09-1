"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Course_1 = require("../Course");
var CourseListComponent = (function () {
    function CourseListComponent() {
    }
    CourseListComponent.prototype.ngOnInit = function () {
    };
    return CourseListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CourseListComponent.prototype, "count", void 0);
__decorate([
    core_1.Input('enrolledCourse'),
    __metadata("design:type", Course_1.Course)
], CourseListComponent.prototype, "courses", void 0);
CourseListComponent = __decorate([
    core_1.Component({
        selector: 'course-list',
        templateUrl: 'app/students/course-list/course-list.component.html',
        styleUrls: ['app/students/course-list/course-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], CourseListComponent);
exports.CourseListComponent = CourseListComponent;
//# sourceMappingURL=course-list.component.js.map