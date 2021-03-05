console.log("Hello, I'm Manan.");
console.log(typeof `This is a template literal.`);
console.log(1==true);
console.log(1===true); /* triple equal (===) and not-equal with two equal signs (!==)
don't allow type conversions if inputs have different types */

// Short-circuiting || and &&
console.log(null || "This works as 'if true then return first input, if false then return second input'");
console.log(1 && "This works as 'if true then return second input, if false then return first input'");