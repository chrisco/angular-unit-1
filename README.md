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
URL

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
