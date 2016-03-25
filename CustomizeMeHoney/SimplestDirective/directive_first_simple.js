myApp.directive('myDirective', function ($compile) {
    return {
        restrict: 'E',
        //replace: true,
        //link: function (scope, element, attribute, controller) {
        //    var sampleMarkup = "<input type='text' ng-model='name' /> {{na    me}}<br/>";
        //    //var linkFn = $compile(sampleMarkup);
        //    //var content = linkFn(scope);
        //    //element.append(content);
        //    element.append($compile(sampleMarkup)(scope));
        //},
        //template: "<input type='text' ng-model='name' /> {{name}}<br/>",
        templateUrl: 'HtmlPage2.html',
        scope: {
            name: '=nameHtml',
            greet: '&greetHtml'
        },
        //controller: controller 
    };

    //var controller = ['$scope', function ($scope) {

    //    $scope.hi = function (val) { alert('Hello ' + val); };
    //    $scope.bye = function (val) { alert('See you again ' + val); };
    //}];
});