# Welcome to the Document Object Model (DOM) manupulation

## Table of Content

- [Welcome to the Document Object Model (DOM) manupulation](#welcome-to-the-document-object-model-dom-manupulation)
  - [Table of Content](#table-of-content)
  - [1. Theory](#1-theory)
  - [2 Accessing Elements](#2-accessing-elements)
    - [2.1 DOM Collections (Like Arrays but Not Exactly)](#21-dom-collections-like-arrays-but-not-exactly)
  - [3. Modifying Elements](#3-modifying-elements)
  - [4. Manipulating Style and Classes Elements](#4-manipulating-style-and-classes-elements)
  - [5. Creating and Deleting Elementd](#5-creating-and-deleting-elementd)
  - [6. Event Handling](#6-event-handling)

## 1. Theory

In JavaScript, DOM elements behave like objects, while collections of elements (like `getElementsByClassName` or `querySelectorAll`) are similar to arrays but not exactly the same.

## 2 Accessing Elements

```js
document.querySelector(); // select the first element
```

### 2.1 DOM Collections (Like Arrays but Not Exactly)

---

Some methods return multiple elements, such as:

- `getElementsByClassName` → **HTMLCollection**
- `getElementsByTagName` → **HTMLCollection**
- `querySelectorAll` → **NodeList**

## 3. Modifying Elements

```html
innerHtml, textContennt
```

## 4. Manipulating Style and Classes Elements

```css
style, classList
```

## 5. Creating and Deleting Elementd

```js
createElement(), appendChild(), removeCChild;
```

## 6. Event Handling

```js
addEventListener();
```
