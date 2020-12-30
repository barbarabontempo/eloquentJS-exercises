## VOCAB LIST - Chapter 3


* **function:** A function is created with an expression that starts with the keyword function. Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.
return statement:  A return statement determines the value the function returns (A return keyword without an expression after it will cause the function to return undefined)
* **Parameters to a function:** behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself
* **scope:** Each binding has a scope, which is the part of the program in which the binding is visible
* **lexical scoping:** block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. Side note: When called, the function body sees the environment in which it was created, not the environment in which it is called.
* **The Call Stack:** the way that control flows through functions is involved. Because a function has to jump back to the place that called it when it returns, the computer must remember the context from which the call happened. The place where the computer stores this context is the call stack
* **Optional Arguments/Default Parameters:** JS does not care if you pass in the required number of arguments when calling a function. If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.
* **Closure**: A function that references bindings from local scopes around it is called a closure... being able to reference a specific instance of a local binding in an enclosing scope—is called closure
* **Recursive**: A function that calls itself is called recursive
* **Wishful Programming**: You might even start writing code that uses the function before you actually define the function itself.
* **Pure Functions**: A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change
