
# Example-01
Initialize application params using a ng-init directive
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example 01</title>
    <script type="text/javascript" src="js/angular.min.js"></script>
</head>
<body ng-app="" ng-init="application = {
        title: 'AngularJS- Example 01',
        description: 'AngularJS has many advantages:',
        advantages: [
            'AngularJS Handles Dependencies',
            'AngularJS Allows Developers to Express UI Declaratively and Reduce Side Effects',
            'AngularJS Enables Massively Parallel Development',
            'AngularJS Enables a Design - Development Workflow',
            'AngularJS Gives Developers Controls',
            'AngularJS Helps Developers Manage State',
            'AngularJS Supports Single Page Applications'
        ]
    }">
    <h1 align="center">{{application.title}}</h1>
    <p>{{application.description}}</p>
    <ol>
        <li ng-repeat="advantage in application.advantages">{{advantage}}</li>
    </ol>
</body>
</html>
```

# Example-02
Initialize application params using a controller
```html
<!-- Example-02/index.html -->
<!DOCTYPE html>
<html lang="en" ng-app="Example_02_App">
<head>
    <meta charset="UTF-8">
    <title>Example 01</title>
    <script src="js/angular.min.js"></script>
</head>
<body ng-controller="ConfigController">
    <h1 align="center">{{application.title}}</h1>
    <p>{{application.description}}</p>
    <ol>
        <li ng-repeat="advantage in application.advantages">{{advantage}}</li>
    </ol>

    <script src="js/app.js"></script>
</body>
</html>
```

```javascript
# Example-02/js/app.js
var app = angular.module('Example_02_App', []);
app.controller('ConfigController', function($scope) {
    $scope.application = {
        title: 'AngularJS- Example 02',
        description: 'AngularJS has many advantages:',
        advantages: [
            'AngularJS Handles Dependencies',
            'AngularJS Allows Developers to Express UI Declaratively and Reduce Side Effects',
            'AngularJS Enables Massively Parallel Development',
            'AngularJS Enables a Design - Development Workflow',
            'AngularJS Gives Developers Controls',
            'AngularJS Helps Developers Manage State',
            'AngularJS Supports Single Page Applications'
        ]
    };
});
```

#Using ng-model directive
- Official Documentation: https://docs.angularjs.org/api/ng/directive/ngModel
- The directive ['ng-app'] [1] means that we are in an AngularJS application
- Hello yourName example:
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<input type="text" ng-model="yourName" />
	Hello {{ yourName }}

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```

#Using ng-init directive
- Official Documentation: https://docs.angularjs.org/api/ng/directive/ngInit
- Display list values:
- Example #1
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<h1>ng-init directive</h>
	<div ng-init="programmingLanguages=['Java', 'PHP', 'C#', 'Perl', 'ASP', 'Ruby']">
		programmingLanguages = {{ programmingLanguages }}
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```

- Example #2 (using [ng-repeat] [2])
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<h1>ng-init directive</h>
	<div ng-init="programmingLanguages=['Java', 'PHP', 'C#', 'Perl', 'ASP', 'Ruby']"></div>
	<ul>
		<li ng-repeat="programmingLanguage in programmingLanguages">{{programmingLanguage}}</li>
	</ul>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```

#Using Filters
- Official documentation: https://docs.angularjs.org/api/ng/filter
- Example #1
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<h1>ng-init directive</h>
	<div ng-init="programmingLanguages=['Java', 'PHP', 'C#', 'Perl', 'ASP', 'Ruby']"></div>

	<h1>Filters</h1>
	<h2>All items:</h2>
	<ul>
		<li ng-repeat="programmingLanguage in programmingLanguages">{{programmingLanguage}}</li>
	</ul>

	<h2>All items in uppercase</h2>
	<ul>
		<li ng-repeat="programmingLanguage in programmingLanguages">{{programmingLanguage | uppercase}}</li>
	</ul>
		
	<h2>All items which contains 'a'</h2>
	{{programmingLanguages | filter: 'a'}}

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```
#Example #2 (Filter using text field)
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<h1>ng-init directive</h>
	<div ng-init="programmingLanguages=['Java', 'PHP', 'C#', 'Perl', 'ASP', 'Ruby']"></div>
	<input type="text" ng-model="search" placeholder="Type to filter" />
	<div>
		<ul>
			<li ng-repeat="filteredItem in programmingLanguages | filter: search">{{filteredItem | lowercase}}</li>
		</ul>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```
#Example #3 (Sort content [Z-A])
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<div ng-init="programmingLanguages=[
					{id: 1, 'content': 'Java'}, 
					{id: 2, 'content': 'PHP'}, 
					{id: 3, 'content': 'C#'}, 
					{id: 4, 'content': 'Perl'}, 
					{id: 5, 'content': 'ASP'}, 
					{id: 6, 'content': 'Ruby'}
				]"></div>
	<input type="text" ng-model="search" placeholder="Type to filter" />
	<div>
		<ul>
			<li ng-repeat="filteredItem in programmingLanguages | filter: search | orderBy: '-content'">{{filteredItem | lowercase}}</li>
		</ul>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```

#Example #4 (Sort using either by Id or by Content)
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<div ng-init="programmingLanguages=[
					{id: 1, 'content': 'Java'}, 
					{id: 2, 'content': 'PHP'}, 
					{id: 3, 'content': 'C#'}, 
					{id: 4, 'content': 'Perl'}, 
					{id: 5, 'content': 'ASP'}, 
					{id: 6, 'content': 'Ruby'}
				]"></div>
	<select ng-model="sortingKey">
		<option value="id" selected>Sort by Id</option>
		<option value="content">Sort by Content</option>
	</select>
	<input type="text" ng-model="search" placeholder="Type to filter" />
	<div>
		<ul>
			<li ng-repeat="filteredItem in programmingLanguages | filter: search | orderBy: sortingKey">{{filteredItem | lowercase}}</li>
		</ul>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```

#Example #4 (Sort using either by Id or by Content) and either in ASC or DESC order
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<div ng-init="programmingLanguages=[
					{id: 1, 'content': 'Java'}, 
					{id: 2, 'content': 'PHP'}, 
					{id: 3, 'content': 'C#'}, 
					{id: 4, 'content': 'Perl'}, 
					{id: 5, 'content': 'ASP'}, 
					{id: 6, 'content': 'Ruby'}
				]"></div>
	<select ng-model="sortingKey">
		<option value="id" selected>Sort by Id</option>
		<option value="content">Sort by Content</option>
	</select>
	<select ng-model="sortingOrder">
		<option value="+" selected>ASC</option>
		<option value="-">DESC</option>
	</select>
	<input type="text" ng-model="search" placeholder="Type to filter" />
	<div>
		<ul>
			<li ng-repeat="filteredItem in programmingLanguages | filter: search | orderBy: sortingOrder + sortingKey">{{filteredItem.content | lowercase}}</li>
		</ul>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```

#Using Scopes
- Byy passing $scope to the function, I tell to AngularJS that I need in my controller a scope. So AngularJS will create a new scope and inject it in the controller.
- Using [ng-controller] [3], you link the view to the controller. So any changes to the data are automatically reflected in the View without the need for a manual update AND when you change the view in the controller you can access it.
```html
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<div ng-controller="programmingLanguagesController"></div>
	<select ng-model="sortingKey">
		<option value="id" selected>Sort by Id</option>
		<option value="content">Sort by Content</option>
	</select>
	<select ng-model="sortingOrder">
		<option value="+" selected>ASC</option>
		<option value="-">DESC</option>
	</select>
	<input type="text" ng-model="search" placeholder="Type to filter" />
	<div>
		<ul>
			<li ng-repeat="filteredItem in programmingLanguages | filter: search | orderBy: sortingOrder + sortingKey">{{filteredItem.content | lowercase}}</li>
		</ul>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
	<script type="text/javascript">
		function programmingLanguagesController($scope){
			$scope.programmingLanguages = [
					{id: 1, 'content': 'Java'}, 
					{id: 2, 'content': 'PHP'}, 
					{id: 3, 'content': 'C#'}, 
					{id: 4, 'content': 'Perl'}, 
					{id: 5, 'content': 'ASP'}, 
					{id: 6, 'content': 'Ruby'}
				]
		}
	</script>
</body>
</html>
```


#Thank you!
- Ala Eddine JEBALI
- http://jebalialaeddine.com
- (+216) 96 529 067
- jebali.alaeddine (att gmail dot com)
- Edited using http://dillinger.io/


[1]: https://docs.angularjs.org/api/ng/directive/ngApp
[2]: https://docs.angularjs.org/api/ng/directive/ngRepeat
[3]: https://docs.angularjs.org/api/ng/directive/ngController
