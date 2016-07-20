# Angular Curriculum Unit 1

## Instructions

<https://github.com/chrisco/angular-curriculum/blob/master/Unit-1/01-intro-and-setup.md>

## My Answers to Curriculum Questions

### 1.1 - Introduction and Setup

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

### 1.2 - Data Binding

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

### 1.3 - Angular MVC

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

### 1.4 - Expressions and Filters

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/04-expressions-and-filters.md

__My Commit__    
https://github.com/chrisco/angular-unit-1/commit/79644ee60400f91aef8dd288b2fe0fad5683e934

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

### 1.5 - Built In Directives

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/05-built-in-directives.md

__My Commit__    
[INSERT URL HERE]

__List of Angular Directives__
https://docs.angularjs.org/api/ng/directive

__Q&A__

Q1) What is the purpose of ng-init?

A1) From the [ng-init docs](https://docs.angularjs.org/api/ng/directive/ngInit): "The ngInit directive __allows you to evaluate an expression in the current scope__. There are only a few appropriate uses of ngInit, such as: (1) for aliasing special properties of ngRepeat, as seen in the demo in [the docs](https://docs.angularjs.org/api/ng/directive/ngInit); and, (2) for injecting data via server side scripting. Besides these few cases, use controllers rather than ngInit to initialize values on a scope."
"

Q2) Why use ng-src and ng-href?

A2) "Only use ng-src and ng-href if you have dynamic links or have to load images dynamically. Use the href and src otherwise." SOURCE: [Using ng-src and ng-href](http://www.befundoo.com/blog/using-ng-src-and-ng-href/).

Q3) What are directives?

A3) "At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children. Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngClass. Much like you create controllers and services, you can create your own directives for Angular to use." SOURCE: [Angular Docs for Directives](https://docs.angularjs.org/guide/directive).

Q4) Does ng-class require an object to be passed in?

A4) I think so. One thing that did come up for me was classes with hyphens causing problems. I solved it by changing them to camelcase, as in this example from my code:
```html
<span ng-show="{{camera.onSale}}" ng-class="{onSale: {{camera.onSale}}}">{{camera.price | currency}} ON SALE!</span>
```
Now I know that: When using classes with hyphens I must put single quotes around the class. I also learned that the ternary operator is good for toggling classes, such as shown here:

HTML:
```html
<form class="" action="" method="">
  <label for="password">Password:</label>
  <input ng-model="password" type="password" name="password" value="">
  <p ng-class="password.length > 5 ? 'valid-pw' : 'invalid-pw'">
    Your password is {{password.length}} characters long.
  </p>
  <p ng-show="password.length > 5">
    Password is valid!
  </p>
  <button ng-disabled="password.length < 6" type="button" name="button">Sign Up!</button>
</form>
```
CSS:
```css
.valid-pw {
  color: green;
}

.invalid-pw {
  color: red;
}
```

Q5) In what order does an ng-repeat display items?

A5) I think it depends. If iterating over an array, I think the iteration order will match the array order. But, if iterating over an object, the order can vary, as JavaScript does not define the order in which keys are returned for an object. If you want to sort the results, you can use Angular's [orderBy filter](https://docs.angularjs.org/api/ng/filter/orderBy).

Q6) How does ng-repeat handle duplicate data?

A6) The ng-repeat directive does not take duplicate data well. When I tried it, errors were thrown.

__Bonus__

Question:

What's happening in each of these examples? What's the purpose of the directive?

* [ng-cloak](https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/examples/ng-cloak)
* [ng-include](https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/examples/ng-include)
* [ng-pluralize](https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/examples/ng-pluralize)

Answer (v1):

* [ng-cloak](https://docs.angularjs.org/api/ng/directive/ngCloak): "The ngCloak directive is used to prevent the Angular html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading. Use this directive to avoid the undesirable flicker effect caused by the html template display."
* [ng-include](https://docs.angularjs.org/api/ng/directive/ngInclude): "Fetches, compiles and includes an external HTML fragment. By default, the template URL is restricted to the same domain and protocol as the application document. This is done by calling $sce.getTrustedResourceUrl on it. To load templates from other domains or protocols you may either whitelist them or wrap them as trusted values. Refer to Angular's Strict Contextual Escaping. In addition, the browser's Same Origin Policy and Cross-Origin Resource Sharing (CORS) policy may further restrict whether the template is successfully loaded. For example, ngInclude won't work for cross-domain requests on all browsers and for file:// access on some browsers."
* [ng-pluralize](https://docs.angularjs.org/api/ng/directive/ngPluralize): "ngPluralize is a directive that displays messages according to en-US localization rules. These rules are bundled with angular.js, but can be overridden (see Angular i18n dev guide). You configure ngPluralize directive by specifying the mappings between plural categories and the strings to be displayed."

### 1.6 Intro to Controllers

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/06-intro-to-controllers.md

__My Commit__    
[INSERT URL HERE]



### 1.7 Scope

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/07-intro-to-scope.md

__My Commit__    
[INSERT URL HERE]

__Q&A__


### 1.8 Angular Events

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/08-intro-to-events.md

__My Commit__    
[INSERT URL HERE]

__Q&A__


### 1.9 Form Validation

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/09-form-validation.md

__My Commit__    
[INSERT URL HERE]

__Q&A__


### 1.10 Animations

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/10-animation.md

__My Commit__    
[INSERT URL HERE]

__Q&A__


### 1.11 Unit 1 Assessment Reddit Clone

__Instructions__    
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/11-reddit-clone.md

__My Commit__    
[INSERT URL HERE]

__Q&A__
