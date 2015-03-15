# AngularJS-Examples
List of examples to understand and practice AngularJS...

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
	<div ng-init="myList=['My', 'Name', 'Is', 'Ala', 'Eddine', 'Jebali']">
		myList = {{ myList }}
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
	<div ng-init="myList=['My', 'Name', 'Is', 'Ala', 'Eddine', 'Jebali']"></div>
	<ul>
		<li ng-repeat="itemValue in myList">{{itemValue}}</li>
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
	<div ng-init="myList=['My', 'Name', 'Is', 'Ala', 'Eddine', 'Jebali']"></div>

	<h1>Filters</h1>
	<h2>All items:</h2>
	<ul>
		<li ng-repeat="itemValue in myList">{{itemValue}}</li>
	</ul>

	<h2>All items in uppercase</h2>
	<ul>
		<li ng-repeat="itemValue in myList">{{itemValue | uppercase}}</li>
	</ul>
		
	<h2>All items which contains 'a'</h2>
	{{myList | filter: 'a'}}

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```
#Example #2 (Filter using text field)
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<h1>ng-init directive</h>
	<div ng-init="myList=['My', 'Name', 'Is', 'Ala', 'Eddine', 'Jebali']"></div>
	<input type="text" ng-model="search" placeholder="Type to filter" />
	<div>
		<ul>
			<li ng-repeat="filteredItem in myList | filter: search">{{filteredItem | lowercase}}</li>
		</ul>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```
#Example #3 (Sort content [Z-A])
<html>
<head>
	<title>AnguleJS -Examples</title>
</head>
<body ng-app>
	<div ng-init="myList=[
					{id: 1, 'content': 'My'}, 
					{id: 2, 'content': 'Name'}, 
					{id: 3, 'content': 'Is'}, 
					{id: 4, 'content': 'Ala'}, 
					{id: 5, 'content': 'Eddine'}, 
					{id: 6, 'content': 'Jebali'}
				]"></div>
	<input type="text" ng-model="search" placeholder="Type to filter" />
	<div>
		<ul>
			<li ng-repeat="filteredItem in myList | filter: search | orderBy: '-content'">{{filteredItem | lowercase}}</li>
		</ul>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>


#Thank you!
- Ala Eddine JEBALI
- http://jebalialaeddine.com
- (+216) 96 529 067
- jebali.alaeddine (att gmail dot com)
- Edited using http://dillinger.io/


[1]: https://docs.angularjs.org/api/ng/directive/ngApp
[2]: https://docs.angularjs.org/api/ng/directive/ngRepeat
