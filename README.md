# strictEqual function

In JavaScript

- `NaN === NaN` returns **false**
- `Object.is(0, -0)` returns **false**

In general it's not a problem, because these above are rare scenarios, but just in case you can implement a function like the one I created.

### Credits

Discovered this weird aspect in the JustJavaScript course by @gaeron
