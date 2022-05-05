# Final Project - TDD & BDD

## Story: Renting a car

> ### Use Case 01
>
> As a system user
>  
> In order to get an available car in a specific category
>
> Given a car category containing 3 different cars
>
> When I check if there's a car available
>
> Then it should choose randomly a car from the category chosen
---

> ### Use Case 02
>
> As a system user
>
> In order to calculate the final renting price
>
> Given a customer who wants to rent a car for 5 days
>
> And he is 50 years old
>
> When he chooses a car category that costs $37.6 per day
>
> Then I must add the Tax of his age which is 30% to the car category price
>
> Then the final formula will be `((price per day * Tax) * number of days)`
>
> And the final result will be `((37.6 * 1.3) * 5)= 244.4`
>
> And the final price will be printed in Brazilian Portuguese format as "R$ 244,40"
---

> ### Use Case 03
>
> As a system user
>
> In order to register a renting transaction
>
> Given a registered customer who is 50 years old
>
> And a car model that costs $37.6 per day
>
> And a delivery date that is for 05 days behind
>
> And given an actual date 05/11/2020
>
> When I rent a car I should see the customer data
>
> And the car selected
>
> And the final price which will be R$ 244,40
>
> And DueDate which will be printed in Brazilian Portuguese format "10 de Novembro de 2020"  

## TDD - Test Driven Development

---

## BDD - Behavior Driven Development

---

## Resources

- <https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2>
- <https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/#:~:text=When%20applied%20to%20automated%20testing,implementation%20detail%20in%20unit%20tests.&text=You%20should%20not%20test%20implementation%2C%20but%20instead%20behavior>
- <https://www.npmjs.com/package/mocha-cucumber>
- <https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/>
