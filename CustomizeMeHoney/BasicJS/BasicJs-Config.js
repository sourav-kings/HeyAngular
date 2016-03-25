'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {

    //class Person{
    //    constructor(name, location) {
    //        this.name = name;
    //        this.location = location;
    //    }

    //    getPersonDetails() {
    //        return this;
    //    }
    //}
    
    //var person1 = new Person('Sourav', 'India');
    //console.log(person1);
    //var person1Details = person1.getPersonDetails();
    //console.log(person1Details);
    //console.log('Object.getOwnPropertyDescriptor:- ', Object.getOwnPropertyDescriptor(person1, 'name'));

    //var player = { Name: 'Virat Kohli', Country: 'India' };
    //console.log(player.Country);
    ////Object.defineProperty(player, 'Country', { writable: false });
    //player.Country = 'USA'
    //console.log(player.Country);
    //console.log('Object.getOwnPropertyDescriptor:- ', Object.getOwnPropertyDescriptor(player, 'Country'));
    //console.log('Object.keys:- ', Object.keys(player));
    ////Object.defineProperty(player, 'Country', { configurable: false });
    ////delete player.Country;
    //console.log(player);

    //Object.defineProperty(player, 'FullName',
    //    {
    //        get: function () {
    //            return this.Name + ' belongs to ' + this.Country;
    //        }
    //    })

    //console.log('Player Info:-', player.FullName);
    //console.log(player);


    function Person (name, age) {
        this.name = name;
        this.age = age;
    };
    //console.log('newFunction:-', newFunction.prototype);

    //var newObject = { name: 'Sourav'}
    //console.log('newObject:-', newObject._proto_);

    var person1 = new Person('Sourav', 27);
    var person2 = new Person('Aryan', 22);

    
    Person.prototype.country = 'India';
    person1.country = 'America';

    console.log('person1 country:- ', person1.country);
    console.log('person2 country:- ', person2.country);
    console.log('person1 prototype country:- ', person1.__proto__.country);
    console.log('person1 prototype country:- ', person2.__proto__.country);


    console.log('person2 country:- ', person2.country);
    console.log('person2 keys:- ', Object.keys(person2));
});

