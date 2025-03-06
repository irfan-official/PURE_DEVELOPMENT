```py
# Addition pyhton code
x = 5 + 6
y = 3 - 2
z = x + y
print(z)
```


```html
<pre id="codeBlock">
# Addition python code
x = 5 + 6
y = 3 - 2
z = x + y
print(z)
</pre>
<button onclick="copyCode()">Copy</button>

<script>
  function copyCode() {
    var codeBlock = document.getElementById("codeBlock").innerText;
    navigator.clipboard
      .writeText(codeBlock)
      .then(() => {
        alert("Code copied!");
      })
      .catch((err) => {
        console.error("Error copying code: ", err);
      });
  }
</script>
```
