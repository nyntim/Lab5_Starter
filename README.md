# Lab 5 - Starter
Tim Nguyen

[View expose.html](https://nyntim.github.io/Lab5_Starter/expose.html)

[View explore.html](https://nyntim.github.io/Lab5_Starter/explore.html)

1. A unit test would not be ideal for testing the message feature because sending a message involves multiple components working together. Unit tests are better suited for testing small, self-contained pieces of logic like input validation or message formatting.

2. Yes, a unit test would be well-suited for testing the max message length feature because it is a small, self-contained piece of logic that takes an input and produces a predictable output with no dependencies on a network or database. You can write tests that pass strings of varying lengths and assert whether they are accepted or rejected.