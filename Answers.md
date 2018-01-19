<!-- Answers to the Short Answer Essay Questions go here -->
1. Describe Middleware-- Middleware are functions which are passed control during execution of asynchronous functions.
 Sessions (as we know them in express)-- There are two broad ways of implementing sessions in Express – using cookies and using a session store at the backend. Both of them add a new object in the request object named session, which contains the session variables.

No matter which method you use, Express provides a consistent interface for working with the session data.

Bcrypt -- bcrypt is a password hashing function, Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

JWT-- backend of Auth, JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

JWT.IO allows you to decode, verify and generate JWT.
2. What does bcrypt do in order to prevent attacks? bcrypt has salts built-in to prevent rainbow table attacks.
3. What are the three parts of the JSON Web Token? header, payload, signature 

