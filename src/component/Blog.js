import React from 'react';

const Blog = () => {
    return (
        <div className="bg-rose-100 py-12">
            <div className='w-3/4 mx-auto'>
            <h3 className='text-2xl font-bold'>1. What are the different ways to manage a state in a React application?</h3>
            <p>There are four main types of state properly manage in your React apps:</p>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
            <p>Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Data that comes from an external server that must be integrated with our UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
<h3 className='text-2xl font-bold'>2. How does prototypical inheritance work?</h3>
<p>JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types.When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>
<h3 className='text-2xl font-bold'>3. What is a unit test? Why should we write unit tests?</h3>
    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.[4] In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In object-oriented programming, a unit is often an entire interface, such as a class, or an individual method.[5] By writing tests first for the smallest testable units, then the compound behaviors between those, one can build up comprehensive tests for complex applications.The goal of unit testing is to isolate each part of the program and show that the individual parts are correct.[1] A unit test provides a strict, written contract that the piece of code must satisfy. As a result, it affords several benefits.In test-driven development (TDD), which is frequently used in both extreme programming and scrum, unit tests are created before the code itself is written. When the tests pass, that code is considered complete. The same unit tests are run against that function frequently as the larger code base is developed either as the code is changed or via an automated process with the build. If the unit tests fail, it is considered to be a bug either in the changed code or the tests themselves. The unit tests then allow the location of the fault or failure to be easily traced. Since the unit tests alert the development team of the problem before handing the code off to testers or clients, potential problems are caught early in the development process.</p> 
    <h3 className='text-2xl font-bold'>4.  React vs. Angular vs. Vue?</h3> 
    <p className='text-xl font-bold'>Angular</p> 
    <p>A Google employee, Misko Hevery, was working on a side project aimed at simplifying the process of building web applications. The solution he found out was released in 2010 as an open-source project under the name AngularJS and came into active usage by some big brands.Several years after, new advancements in JavaScript emerged, and the team was forced to rewrite AngularJS from scratch as based on TypeScript. The framework name dropped “JS” to omit the confusion. Angular has continually grown and reinvented itself, with each new version being better than the last, as seen by Angular 13, the most recent version published in November 2021.</p>
    <p className='text-xl font-bold'>React</p>
    <p>An unchanged leader among the most popular JavaScript frameworks, React was developed by Facebook to meet the needs of its products, and successfully presented and open-sourced to the tech audience in 2013. The elaboration of React takes roots from its early prototype created by Jordan Walke — “Fax.js”, first deployed in 2011 in Facebook’s News Feed. The current stable version is 17.x, which was launched in October 2020 and has been updated in minor steps since then.</p>
    <p className='text-xl font-bold'>Vue.js</p>
    <p>The former Google employee Evan You after years of working with Angular decided to create a lightweight framework that would contain the best features of the aforementioned. An open-source framework Vue.js was released in February 2014 and since then is gaining extreme popularity. The most recent stable version is Vue 3, which was launched in September 2020 with a new default version update as of February 2022.</p>     
        </div>
        </div>
    );
};

export default Blog;