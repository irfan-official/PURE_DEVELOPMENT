Object.defineProperty(globalThis, "myTypeof", {
  get() {
    return new Proxy({}, {
      get(_, prop) {
        return typeof globalThis[prop]; // Mimics `typeof`
      }
    });
  }
});

// Example Usage:
console.log(myTypeof arr);    // "object"
console.log(myTypeof 10);     // "number"
console.log(myTypeof "text"); // "string"
console.log(myTypeof []);     // "object" (like typeof)
console.log(myTypeof null);   // "object" (JS quirk)
console.log(myTypeof (() => {})); // "function"
