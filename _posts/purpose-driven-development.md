---
title: 'Purpose Driven Design'
excerpt: 'When building an application, have you ever wondered where to start? '
date: '2024-03-10T12:00:00.000Z'
status: 'DRAFT'
---

I often find myself using [Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html) (TDD) while writing code.

For those not familiar, TDD is a methodology developed by Kent Beck, as part of his book: [Extreme Programming](https://www.amazon.co.uk/Extreme-Programming-Explained-Embrace-Change/dp/0321278658). At a very high level, it's a method for writing code, where the test cases are written first, code is written to pass the tests, code is refactored, rinse and repeat.

Day-to-day, I find the structure rewarding, constantly seeing red and turning it green keeps me fairly engaged with writing code! Getting to refactor code with confidence gives me a warm fuzzy feeling that I'm doing things right - and I end up with code with 100% automated test coverage! Win-win all around!

But... there are occasions when I opt for writing the code first... and in this article, I would like to talk a little about those times.

## The Problems

When I'm writing code in existing projects, I typically already have a rough idea of what I want to write and the structure of it. There's already some structure to the code, which I can use to leverage where smaller functions can go. For larger, more complex pieces - the existing structure guides where I'd put new structure.

If more complex ideas aren't supported by the existing structure, I typically have a good feel for the weak points and where the structure can be improved to accommodate the new requirements.

Where I struggle, is deciding where to start for completely new problems - especially when that problem is presented during an interview and you have 30 minutes to cobble some code together to address it!

So even in a world of methodologies, patterns and frameworks I still feel fairly un-confident when knowing exactly where to start. Using TDD, what tests should I write first?

This is where my idea comes in, Purpose Driven Design.

## Introducing Purpose Driven Design

Purpose Driven Design is an approach to software development that emphasizes identifying the "core" of a system and prioritizing it for development, building requirements around it.

This approach works in conjunction with methodologies like TDD, since TDD emphasizes how to write code whereas Purpose Driven Design emphasizes what code to write.

Finding the core, or purpose, of a system requires some thought and some communication with the customer and typically results in de-scoping the original request to its bare-bone needs, not wants.

### Example: Design a Shopping Cart

Let's take the example of a technical interview I went through, where I discovered this approach. The test was to build a Shopping Cart Checkout system with the following features:

- Scan items in any order.
- Apply a Buy One Get One Free discount for certain items.
- Apply a Bulk Buy discount for certain items.

There is a lot more fluff in the original specification, but the above is what it boiled down to.

After a few iterations of drawing diagrams, writing classes, googling about shopping carts and building solutions that felt very "hacky", I began to think that there must be a better approach.

I'd recently read [Start With Why](https://www.amazon.co.uk/Start-Why-Leaders-Inspire-Everyone/dp/0241958229/) by Simon Sinek, a book about how to build successful and long-lasting businesses by defining its purpose - and thought I'd try my luck at defining the "purpose" of a shopping cart.

So what is the purpose of a shopping cart? Well, let's start by looking at the requirements and seeing which ones are essential to describe a system as a "Shopping Cart":

- Does a shopping cart _have to_ scan items in any order? No, you could enforce items to be added in bulk or enforce an arbitrary order and still call it a shopping cart.
- Does a shopping cart _have to_ have discounts? Certainly not! and many (in my experience) do not.

At this point, I was again, frustrated. The requirements from the specification didn't highlight the fundamental function of a shopping cart, but I chose to carry on this journey, feeling like there was a light at the end.

I thought about a generic shopping cart system and what the essential function is for both a customer and the business. After only a bit of thinking, the realization hit me, calculating the total cost!

Calculating the total cost of the items is why you create a shopping cart, so the customer knows what they need to pay and the business knows what they need to charge!

With this in mind, I began to write some code (in TDD fashion) - and my first iteration was fairly simple. I chose to de-scope the system down to a `CostCalculator`, feeling that better described the initial purpose and wrote a simple class, with one method that took a list of items and returned the total of their prices:

```typescript
import { Item } from './model'

export class CostCalculator {
  public calculate(items: Item[]): number {
    let total = 0
    items.forEach((item) => {
      total += item.price
    })
    return total
  }
}
```

Defining this core functionality paved the way for all the other requirements, which suddenly became much more obvious to implement.

I now had to build on top of and integrate the idea of a `Discount` into my defined core.
I knew that the "discount" was a feature of the system, which meant that it shouldn't be tightly coupled with the core of calculating the overall cost.
Knowing this, meant that I didn't want to amend my current calculations of the total cost, this should stay, and I should retrieve new information and use that to decorate the total cost.

So the purpose of the discount was to calculate the total to remove from the overall total! Even realizing this made me think about how most shopping carts would show different discounts that have been applied to the total, and implementing the discount as a decoupled feature would better enable this type fo future functionality!
This led to creating an abstract interface of a `Discount` that would take a list of `Items` and the concrete implementations would contain a single function of `getDiscountValue` with each `Discount` using a different algorithm to get the total!

Below, we can see this implemented for Buy One Get One Free (BOGOF).

```typescript
import { Discount } from './model'
import { Items } from '../items'
import { ProductCode } from '../model'

export class BuyOneGetOneFree implements Discount {
  constructor(readonly applicableProductCode: ProductCode) {}

  getDiscountValue(items: Items): number {
    const bogofItems = items.filterByProductCode(this.applicableProductCode)
    const applicableItemsCleanedForDiscount =
      bogofItems.removeOneProductIfLengthIsOdd()
    const valueOfApplicableItems =
      applicableItemsCleanedForDiscount.getTotalPrice()
    return valueOfApplicableItems / 2
  }
}
```

Then I updated the `CostCalculator` to apply any `Discounts` if they were present, with discounts as a public field to allow for them to be added and subtracted to the list easily:

```typescript
import { Items } from './items'
import { Discounts } from './discount/discounts'

export class CostCalculator {
  public discounts: Discounts = new Discounts([])

  public calculate(items: Items): number {
    const discountTotal = this.discounts.getDiscountTotal(items)
    const totalCost = items.getTotalPrice()
    const totalCostWithDiscounts = totalCost - discountTotal
    return Number(totalCostWithDiscounts.toFixed(2))
  }
}
```

You can check out the full example in my [GitHub Repository](https://github.com/connormaglynn/shopping-cart-typescript), with some more specific details on the approach for a Shopping Cart - and a nice commit history to demonstrate the TDD nature of it!

### Defining a Purpose

Defining the purpose of a system is challenging since it's an abstract idea to describe _why_ something exists, but in doing so, you also start to understand its value.

How you define an initial purpose is an interesting process and I'd be lying if I said I had a concrete way of applying it to everything.

One approach is to de-scope and simplify the request. You can do this by asking _why_ the system is needed, and what you're looking for, is the output.

In our Shopping Cart example above, the output was the total cost of all the items and identifying this as the essential output allows us to implement and define a system that will always produce that output.
Knowing this early on also allowed us to better define the discount functionality, as we still need the total cost as an output, and we used a separate process to calculate the discount and apply it.

It's worth noting here that we have only assumed what the purpose of the system is, given the small amount of context that was provided. In practice, this should be a back-and-forth conversation between you and the customer!

You should ask questions and test theories with the customer before diving into the code, and understand what the purpose of the system is for them.

Using our Shopping Cart example again, I could take this to a customer with a nice adaptable total cost function with an easy way to integrate different discounts - but what if when those original requirements were better thought out than I'd assumed? What if they never actually wanted to charge the customer and this was simply meant to be a mock interface to store and retrieve a list of items? Then my above solution is a failure, as it doesn't serve the intended purpose.

Instead, I should have focussed more on providing an abstraction over an array structure which would have been far simpler, and potentially they didn't even require the value of discounts to be correct for that mock interface!

This is why it's essential to always communicate, and ensure you share the same perspective as the customer as you attempt to define the purpose of the system.

## Key Takeaways

- Always understand the problem you're trying to solve, before trying to solve it.
- Always engage with the customer to ensure the solution really solves _their_ problem.
- De-scope and simplify the requirements to solve the core problems first.
- Meet the customers' _needs_ first and use the learning and the platform created from this to build additional features.

Thank you for reading!
