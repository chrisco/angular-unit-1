# Angular Curriculum Unit 1

## Instructions

<https://github.com/chrisco/angular-curriculum/blob/master/Unit-1/01-intro-and-setup.md>

## My Answers to Curriculum Questions

### 1.1

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/01-intro-and-setup.md

__My Commit__    
https://github.com/chrisco/angular-unit-1/commit/f64bbd5a74e47c4e6eb19bdc70136e75c30a55f8

__Q&A__

Q1) Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?    

A1) Because they are useful, interesting, and fun.

Q2) People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?  

A2) Doesn't scale (at leasat now pre-2.0), bloated, overly complex.

Q3) Is Angular an MVC framework?    

A3) No, it's more of a M V VM.

Q4) Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?    

A4) Here are the [ng-app docs](https://docs.angularjs.org/api/ng/directive/ngApp). "The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags." The "ng" stands for "Angular."

### 1.2

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/02-data-binding.md

__My Commits__    

The "Angular way":    
https://github.com/chrisco/angular-unit-1/commit/f8cae8c58a469b9aa53c2bfda0be13cd87f77a16

The raw JavaScript way:    
https://github.com/chrisco/angular-unit-1/commit/6433f31bf20e9ec989e4f41bdafff2f6859a1f57

__Q&A__

Q1) What does ng-model do?    

A1) It two-way binds data between the front-end and back-end of the Angular app.

Q2) What is "dirty checking"?    

A2) "[Dirty checking](http://stackoverflow.com/questions/24698620/dirty-checking-on-angular)" is a term for Angular's built-in process for checking for changes in $scope variables and updating them to the DOM if they have changed. It's also possible for developers to roll their own dirty checking.

Q3) Find a way to set the initial value of "name" as "BoJack" (without writing a controller).    

A3) That can be done with *ng-init*, although it is not something you would probably ever want to do. This is what the [ngInit docs](https://docs.angularjs.org/api/ng/directive/ngInit) say: "This directive can be abused to add unnecessary amounts of logic into your templates. There are only a few appropriate uses of ngInit, such as for aliasing special properties of ngRepeat, as seen in the demo below; and for injecting data via server side scripting. Besides these few cases, you should use controllers rather than ngInit to initialize values on a scope."

Q4) What are those {{ }} expressions? Are they Handlebars?    

A4) They are what Angular uses to evaluate code in HTML files. See the [Scope docs here](https://docs.angularjs.org/guide/scope).

Q5) Explain what two-way data binding is.

A5) This is how Angular keeps the view in sync with the model. When Angular detects a change in one, it updates the other.

BONUS Q: Research the $digest loop.    

BONUS A: The best explanation I found [here on SitePoint](https://www.sitepoint.com/understanding-angulars-apply-digest/): "The $digest cycle is where the watchers are fired. When a watcher is fired, AngularJS evaluates the scope model, and if it has changed then the corresponding listener function is called. So, our next question is when and how this $digest cycle starts."

### 1.3

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/03-angular-mvc.md

__Slides__
https://slides.com/tylerbettilyon/angularmvc

__My Commit__    
https://github.com/chrisco/angular-unit-1/commit/e696039ff474e91c652403449991a3fc2e37f35a

__Notes__

The MODEL is where an Angular application's data lives. It holds and represents the current state.    

 The VIEW displays an Angular application's data (from the model) and handles user interaction. How defined? Via HTML, CSS, some JavaScript, Angular directives ('ng-'attributes) and two-way data bindings. Within the HTML document. Declarative.   

The CONTROLLER, also sometimes called the "View Model", controls the relationship between the MODELA and VIEWS by exposing parts of the model and managing state. How defined? Via JavaScript, within Angular Controllers. Imperative.

__Example__

```html
<!DOCTYPE html>
<html ng-app="myapp">
  <head>
    <meta charset="utf-8">
    <title>Hello, World!</title>
  </head>
  <body>
    <div ng-controller="HelloController">
      <h2>Hello, {{hello.title}}!</h2>
    </div>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
    <script>
    angular.module("myapp", [])
      .controller("HelloController", function($scope) {
        $scope.hello = {};
        $scope.hello.title = "World";
      });
    </script>
  </body>
</html>
```

**Model**

```javascript
$scope.hello
```

**View**

```html
<div ng-controller="HelloController">
  <h2>Hello, {{hello.title}}!</h2>
</div>
```

**Controller**

```javascript
<script>
angular.module("myapp", [])
  .controller("HelloController", function($scope) {
    $scope.hello = {};
    $scope.hello.title = "World";
  });
</script>
```

__Resources__

- [MVC and MVVM with AngularJS](https://web.archive.org/web/20160229124959/http://codechutney.in/blog/javascript/mvc-and-mvvm-with-angularjs/)

### 1.4

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/04-expressions-and-filters.md

__My Commit__    
URL

__Q&A__

Q1) What are Angular expressions? How do they compare to tags from templating engines you've used before?    

A1) According to the [Angular docs](https://docs.angularjs.org/guide/expression), Angular expressions are "JavaScript-like code snippets that are mainly placed in interpolation bindings such as <span title="{{ attrBinding }}">{{ textBinding }}</span> , but also used directly in directive attributes such as ng-click="functionExpression()"."

Q2) What happens when you write invalid code in an expression? What type of error do you get?

A2) I think the answer depends on what kind of invalid code you write. If you try to reference a model that doesn't exist, nothing happens. I've also had "{{ whatever }}" get printed into the index.html page. And I've seen "undefined" when trying to console.log things. I've also gotten NaN when trying to perform calculations. And I've seen error message printed in the Chrome console.

Q3) What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.    

A3) You can use filters within expressions to format data before displaying it. Some examples of built-in filters we used and didn't use yet are: currency, number, date, json, lowercase, uppercase, limitTo, and orderBy. See the [filter docs](https://docs.angularjs.org/guide/filter) for more information, including "Angular Expressions vs. JavaScript Expressions".

Q4) What's the syntax for filters?    

A4) hTe syntax is "{{ expression | filter1 | filter2 | ... }}". With arguments, the syntax is "{{ expression | filter:argument1:argument2:... }}".

Q5) Can you use more than one filter?    

A5) Yes, see examples above.

Q6) We'll soon see how to create custom filters. What's a use case for a custom filter?    

A6) To filter an object.

__Resources__

https://docs.angularjs.org/guide/expression
https://docs.angularjs.org/guide/filter
