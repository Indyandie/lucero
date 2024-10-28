---
title: Expressive Code
sidebar:
  label: expressive code
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
lastUpdated: 2022-10-26
---

A _quick_ overview of [**Expressive Code**](https://expressive-code.com/) features.

## Word Wrap

- [Expressive Code Docs](https://expressive-code.com/key-features/word-wrap/)

### No Wrap (default)

```js
function printText() {
  if (true) {
    console.log("Just keep examining every low bid quoted for zinc etchings. How razorback-jumping frogs can level six piqued gymnasts! A quick movement of the enemy will jeopardize six gunboats All questions asked by five watched experts amaze the judge Bobby Klun awarded Jayme sixth place for her very high quiz The wizard quickly jinxed the gnomes before they vaporized Zelda might fix the job growth plans very quickly on Monday Zack Gappow saved the job requirement list for the six boys Jackie will budget for the most expensive zoology equipment Quirky spud boys can jam after zapping five worthy Polysixes. Jim quickly realized that the beautiful gowns are expensive");
  }
}
```

````markdown
```js
function printText() {
  if (true) {
    console.log("Just keep examining every low bid quoted for zinc etchings. How razorback-jumping frogs can level six piqued gymnasts! A quick movement of the enemy will jeopardize six gunboats All questions asked by five watched experts amaze the judge Bobby Klun awarded Jayme sixth place for her very high quiz The wizard quickly jinxed the gnomes before they vaporized Zelda might fix the job growth plans very quickly on Monday Zack Gappow saved the job requirement list for the six boys Jackie will budget for the most expensive zoology equipment Quirky spud boys can jam after zapping five worthy Polysixes. Jim quickly realized that the beautiful gowns are expensive");
  }
}
```
````

### Wrap

```js wrap
function printText() {
  if (true) {
    console.log(
      "Just keep examining every low bid quoted for zinc etchings. How razorback-jumping frogs can level six piqued gymnasts! A quick movement of the enemy will jeopardize six gunboats All questions asked by five watched experts amaze the judge Bobby Klun awarded Jayme sixth place for her very high quiz The wizard quickly jinxed the gnomes before they vaporized Zelda might fix the job growth plans very quickly on Monday Zack Gappow saved the job requirement list for the six boys Jackie will budget for the most expensive zoology equipment Quirky spud boys can jam after zapping five worthy Polysixes. Jim quickly realized that the beautiful gowns are expensive",
    );
  }
}
```

````markdown title="markdown" "wrap"
```js wrap
function printText() {
  if (true) {
    console.log(
      "Just keep examining every low bid quoted for zinc etchings. How razorback-jumping frogs can level six piqued gymnasts! A quick movement of the enemy will jeopardize six gunboats All questions asked by five watched experts amaze the judge Bobby Klun awarded Jayme sixth place for her very high quiz The wizard quickly jinxed the gnomes before they vaporized Zelda might fix the job growth plans very quickly on Monday Zack Gappow saved the job requirement list for the six boys Jackie will budget for the most expensive zoology equipment Quirky spud boys can jam after zapping five worthy Polysixes. Jim quickly realized that the beautiful gowns are expensive",
    );
  }
}
```
````

### Unpreserved Indent

```js wrap preserveIndent=false
function printText() {
  if (true) {
    console.log(
      "Just keep examining every low bid quoted for zinc etchings. How razorback-jumping frogs can level six piqued gymnasts! A quick movement of the enemy will jeopardize six gunboats All questions asked by five watched experts amaze the judge Bobby Klun awarded Jayme sixth place for her very high quiz The wizard quickly jinxed the gnomes before they vaporized Zelda might fix the job growth plans very quickly on Monday Zack Gappow saved the job requirement list for the six boys Jackie will budget for the most expensive zoology equipment Quirky spud boys can jam after zapping five worthy Polysixes. Jim quickly realized that the beautiful gowns are expensive",
    );
  }
}
```

````markdown title="markdown" "preserveIndent=false"
```js wrap preserveIndent=false
function printText() {
  if (true) {
    console.log(
      "Just keep examining every low bid quoted for zinc etchings. How razorback-jumping frogs can level six piqued gymnasts! A quick movement of the enemy will jeopardize six gunboats All questions asked by five watched experts amaze the judge Bobby Klun awarded Jayme sixth place for her very high quiz The wizard quickly jinxed the gnomes before they vaporized Zelda might fix the job growth plans very quickly on Monday Zack Gappow saved the job requirement list for the six boys Jackie will budget for the most expensive zoology equipment Quirky spud boys can jam after zapping five worthy Polysixes. Jim quickly realized that the beautiful gowns are expensive",
    );
  }
}
```
````

## Editor & Terminal Frames

- [Expressive Code Docs](https://expressive-code.com/key-features/frames/)

### Code Editor Frame

```js title="test-file.js"
console.log("Hello, star!");
```

````markdown title="markdown" 'title="test-file.js"'
```js title="test-file.js"
console.log("Hello, star!");
```
````

#### File Name Comments

```html
<!-- index.html -->
<h1>Home</h1>
<p>Hello, file!</p>
```

````md '<!-- index.html -->'
```html
<!-- index.html -->
<h1>Home</h1>
<p>Hello, file!</p>
```
````

### Terminal Frame

```zsh title="terminal"
print 'Hello, star!'
```

````markdown title="markdown" 'title="terminal"'
```zsh title="terminal"
print 'Hello, star!'
```
````

### Override Frame Type

```zsh title="terminal" frame="code"
print 'Hello, code!'
```

````markdown title="markdown" 'frame="code"'
```zsh title="terminal" frame="code"
print 'Hello, code!'
```
````

```js title="test-file.js" frame="terminal"
console.log("Hello, terminal!");
```

````markdown title="markdown" 'frame="terminal"'
```js title="test-file.js" frame="terminal"
console.log("Hello, terminal!");
```
````

## Markers

- [Expressive Code Docs](https://expressive-code.com/key-features/text-markers/)

### Line Markers

```js {1, 3, 6-7, 10}
// line 01
// line 02
// line 03
// line 04
// line 05
// line 06
// line 07
// line 08
// line 09
// line 10
```

````markdown title="markdown" '{1, 3, 6-7, 10}'
```js {1, 3, 6-7, 10}
// line 01
// line 02
// line 03
// line 04
// line 05
// line 06
// line 07
// line 08
// line 09
// line 10
```
````

#### Marker Types ( `mark`, `ins`, `del`)

```js title="marker-type.js" mark={1-6} del={8-17} ins={17-22}
/**
 * Apply marker type
 * @param {string} line
 * @param {string} mType="mark"
 * @returns {string|null}
 */
function markerTypes(line, mType = "mark") {
  switch (mType) {
    case "mark":
      return `<mark>${line}</mark>`;
    case "ins":
      return `<mark>'${line}'</mark>`;
    case "del":
      return `<mark>${line}</mark>`;
    default:
      return false;
  }
  if (/^mark$|^ins$|^del$/.test("mark")) {
    return `<${mType}>${line}</${mType}>`;
  } else {
    return false;
  }
}
```

````markdown title="markdown" "mark={1-6}" del="del={8-17}" ins="ins={17-22}"
```js title="marker-type.js" mark={1-6} del={8-17} ins={17-22}
/**
 * Apply marker type
 * @param {string} line
 * @param {string} mType="mark"
 * @returns {string|null}
 */
function markerTypes(line, mType = "mark") {
  switch (mType) {
    case "mark":
      return `<mark>${line}</mark>`;
    case "ins":
      return `<ins>'${line}'</ins>`;
    case "del":
      return `<del>${line}</del>`;
    default:
      return false;
  }
  if (/^mark$|^ins$|^del$/.test("mark")) {
    return `<${mType}>${line}</${mType}>`;
  } else {
    return false;
  }
}
```
````

##### Marker Labels

```js mark={"note (overlap)":1, 3-4} del={"delete":6-7} ins={"insert":9-10}
// line 01
// line 02
// line 03
// line 04
// line 05
// line 06
// line 07
// line 08
// line 09
// line 10
```

````markdown title="markdown" 'mark={"note (overlap)":1, 3-4}' del='del={"delete":6-7}' ins='ins={"insert":9-10}'
```js mark={"note (overlap)":1, 3-4} del={"delete":6-7} ins={"insert":9-10}
// line 01
// line 02
// line 03
// line 04
// line 05
// line 06
// line 07
// line 08
// line 09
// line 10
```
````

### Inline Markers

```js "even" '"quotes"'
// line 01: odd
// line 02: even
// line 03: odd
// line 04: even
// line 05: odd
// line 06: even
// line 07: odd
// line 08: even
// line 09: odd
// line 10: even
// "quotes"
```

````markdown title="markdown" '"even"' "'"quotes"'"
```js "even" '"quotes"'
// line 01: odd
// line 02: even
// line 03: odd
// line 04: even
// line 05: odd
// line 06: even
// line 07: odd
// line 08: even
// line 09: odd
// line 10: even
// "quotes"
```
````

#### Regular Expressions

```js title="marker-type.js" /((<|")(|/)mark("|>))|([</]{1,2}ins(>|"))|("del"|<del>|</del>)/
function markerTypes(line, mType = "mark") {
  switch (mType) {
    case "mark":
      return `<mark>${line}</mark>`;
    case "ins":
      return `<ins>'${line}'</ins>`;
    case "del":
      return `<del>${line}</del>`;
    default:
      return false;
  }
}
```

````markdown title="markdown" '/((<|")(|/)mark("|>))|([</]{1,2}ins(>|"))|("del"|<del>|</del>)/' wrap
```js title="marker-type.js" /((<|")(|/)mark("|>))|([</]{1,2}ins(>|"))|("del"|<del>|</del>)/
function markerTypes(line, mType = "mark") {
  switch (mType) {
    case "mark":
      return `<mark>${line}</mark>`;
    case "ins":
      return `<ins>'${line}'</ins>`;
    case "del":
      return `<del>${line}</del>`;
    default:
      return false;
  }
}
```
````

#### Inline Marker Types (`mark`, `ins`, `del`)

```js title="formatType.js" mark="return false;" del="line" del="// TODO: rename stuff" ins=/arker|text/
function formatType(linetext, markerType = "mark") {
  // TODO: rename stuff
  if (/^mark$|^ins$|^del$/.test("mark")) {
    return `<${markerType}>${linetext}</${markerType}>`;
  } else {
    return false;
  }
}
```

````markdown title="markdown" mark='mark="return false;"' del='del="line"' del='del="// TODO: rename stuff"' ins='ins=/arker|text/' wrap
```js title="formatType.js" mark="return false;" del="line" del="// TODO: rename stuff" ins=/arker|text/
function formatType(linetext, markerType = "mark") {
  // TODO: rename stuff
  if (/^mark$|^ins$|^del$/.test("mark")) {
    return `<${markerType}>${linetext}</${markerType}>`;
  } else {
    return false;
  }
}
```
````

## Diff Syntax

- [Expressive Code Docs](https://expressive-code.com/key-features/text-markers/#using-diff-like-syntax)

### Basic

```diff
- deleted
+ added
  regular
```

````markdown title="markdown" 'diff'
```diff
- deleted
+ added
  regular
```
````

### Diff Metadata

```diff
--- a/test.md
+++ b/test01.md
@@ -1,4 +1,4 @@
 # Test
 
-Deleted
+Modified
 Unmodified
```

````markdown title="markdown" {2-5}
```diff
--- a/test.md
+++ b/test01.md
@@ -1,4 +1,4 @@
 # Test
 
-Deleted
+Modified
 Unmodified
```
````

### Language Syntax Highlighting

```diff lang="js"
function hello(name = "world") {
- const hello = "Hello " + name + "!"
 // print
- console.log(hello)
+ console.log(`Hello, ${name}!`)
}

hello("star")
```

````markdown title="markdown" 'lang="js"'
```diff lang="js"
function hello(name = "world") {
- const hello = "Hello " + name + "!"
 // print
- console.log(hello)
+ console.log(`Hello, ${name}!`)
}

hello("star")
```
````
