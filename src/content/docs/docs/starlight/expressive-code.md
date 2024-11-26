---
title: Expressive Code
sidebar:
  0rder: 22
  label: expressive code
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
lastUpdated: 2024-11-25
---

A _quick_ overview of [**Expressive Code**](https://expressive-code.com/) features.

## Themes

- [Expressive Code Docs](https://expressive-code.com/guides/themes/)
- [Available Themes](https://expressive-code.com/guides/themes/#using-bundled-themes)

### Configuration

```js title="astro.config.mjs" {4-9} {" dark mode": 6} {"light mode": 7}
export default defineConfig({
  integrations: [
    starlight({
      expressiveCode: {
        themes: [
          "github-dark-dimmed",
          "github-light",
        ],
      },
    }),
  ],
});
```

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

````markdown title="Markdown:"
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

````markdown title="Markdown:" "wrap"
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

````markdown title="Markdown:" "preserveIndent=false"
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

````markdown title="Markdown:" 'title="test-file.js"'
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

````markdown title="Markdown:" 'title="terminal"'
```zsh title="terminal"
print 'Hello, star!'
```
````

### Override Frame Type

```zsh title="terminal" frame="code"
print 'Hello, code!'
```

````markdown title="Markdown:" 'frame="code"'
```zsh title="terminal" frame="code"
print 'Hello, code!'
```
````

```js title="test-file.js" frame="terminal"
console.log("Hello, terminal!");
```

````markdown title="Markdown:" 'frame="terminal"'
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

````markdown title="Markdown:" '{1, 3, 6-7, 10}'
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

````markdown title="Markdown:" "mark={1-6}" del="del={8-17}" ins="ins={17-22}"
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

````markdown title="Markdown:" 'mark={"note (overlap)":1, 3-4}' del='del={"delete":6-7}' ins='ins={"insert":9-10}'
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

````markdown title="Markdown:" '"even"' "'"quotes"'"
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

````markdown title="Markdown:" '/((<|")(|/)mark("|>))|([</]{1,2}ins(>|"))|("del"|<del>|</del>)/' wrap
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

````markdown title="Markdown:" mark='mark="return false;"' del='del="line"' del='del="// TODO: rename stuff"' ins='ins=/arker|text/' wrap
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

````markdown title="Markdown:" 'diff'
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

````markdown title="Markdown:" {2-5}
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

````markdown title="Markdown:" 'lang="js"'
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

## Render ANSI Escape Sequences

```ansi title="terminal"
[4;1;38;5;255mText formatting[0m

- [1mBold[0m
- [2mDimmed[0m
- [3mItalic[0m
- [4mUnderline[0m

[4;1;38;5;255mColors[0m

[30m0 [31m1[0m [32m2[0m [33m3[0m [34m4[0m [35m5[0m [36m6 [37m7 [0m (standard)
[90m0 [91m1[0m [92m2[0m [93m3[0m [94m4[0m [95m5[0m [96m6 [97m7 [0m (bright)

[4;1;38;5;255m256-Color Mode[0m

[3mStandard Colors                 Bright[0m
[38;5;0m000 [38;5;1m001 [38;5;2m002 [38;5;3m003 [38;5;4m004 [38;5;5m005[0m [38;5;6m006 [38;5;7m007 [38;5;8m008 [38;5;9m009 [38;5;10m010 [38;5;11m011 [38;5;12m012 [38;5;13m013[0m [38;5;14m014 [38;5;15m015
[38;5;0m████[38;5;1m████[38;5;2m████[38;5;3m████[38;5;4m████[38;5;5m████[0m[38;5;6m████[38;5;7m████[38;5;8m████[38;5;9m████[38;5;10m████[38;5;11m████[38;5;12m████[38;5;13m████[0m[38;5;14m████[38;5;15m████

[0;3m216 Colors[0m
[38;5;16m016 [38;5;17m017 [38;5;18m018 [38;5;19m019 [38;5;20m020 [38;5;21m021[0m [38;5;22m022 [38;5;23m023 [38;5;24m024 [38;5;25m025 [38;5;26m026 [38;5;27m027 [38;5;28m028 [38;5;29m029[0m [38;5;30m030 [38;5;31m031 [38;5;32m032 [38;5;33m033 [38;5;34m034 [38;5;35m035 [38;5;36m036 [38;5;37m037[0m [38;5;38m038 [38;5;39m039 [38;5;40m040 [38;5;41m041 [38;5;42m042 [38;5;43m043 [38;5;44m044 [38;5;45m045[0m [38;5;46m046 [38;5;47m047 [38;5;48m048 [38;5;49m049 [38;5;50m050 [38;5;51m051
[38;5;52m052 [38;5;53m053[0m [38;5;54m054 [38;5;55m055 [38;5;56m056 [38;5;57m057 [38;5;58m058 [38;5;59m059 [38;5;60m060 [38;5;61m061[0m [38;5;62m062 [38;5;63m063 [38;5;64m064 [38;5;65m065 [38;5;66m066 [38;5;67m067 [38;5;68m068 [38;5;69m069[0m [38;5;70m070 [38;5;71m071 [38;5;72m072 [38;5;73m073 [38;5;74m074 [38;5;75m075 [38;5;76m076 [38;5;77m077[0m [38;5;78m078 [38;5;79m079 [38;5;80m080 [38;5;81m081 [38;5;82m082 [38;5;83m083 [38;5;84m084 [38;5;85m085[0m [38;5;86m086 [38;5;87m087
[38;5;88m088 [38;5;89m089 [38;5;90m090 [38;5;91m091 [38;5;92m092 [38;5;93m093[0m [38;5;94m094 [38;5;95m095 [38;5;96m096 [38;5;97m097 [38;5;98m098 [38;5;99m099 [38;5;100m100 [38;5;101m101[0m [38;5;102m102 [38;5;103m103 [38;5;104m104 [38;5;105m105 [38;5;106m106 [38;5;107m107 [38;5;108m108 [38;5;109m109[0m [38;5;110m110 [38;5;111m111 [38;5;112m112 [38;5;113m113 [38;5;114m114 [38;5;115m115 [38;5;116m116 [38;5;117m117[0m [38;5;118m118 [38;5;119m119 [38;5;120m120 [38;5;121m121 [38;5;122m122 [38;5;123m123
[38;5;124m124 [38;5;125m125[0m [38;5;126m126 [38;5;127m127 [38;5;128m128 [38;5;129m129 [38;5;130m130 [38;5;131m131 [38;5;132m132 [38;5;133m133[0m [38;5;134m134 [38;5;135m135 [38;5;136m136 [38;5;137m137 [38;5;138m138 [38;5;139m139 [38;5;140m140 [38;5;141m141[0m [38;5;142m142 [38;5;143m143 [38;5;144m144 [38;5;145m145 [38;5;146m146 [38;5;147m147 [38;5;148m148 [38;5;149m149[0m [38;5;150m150 [38;5;151m151 [38;5;152m152 [38;5;153m153 [38;5;154m154 [38;5;155m155 [38;5;156m156 [38;5;157m157[0m [38;5;158m158 [38;5;159m159
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m [38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171 [38;5;172m172 [38;5;173m173[0m [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177 [38;5;178m178 [38;5;179m179 [38;5;180m180 [38;5;181m181[0m [38;5;182m182 [38;5;183m183 [38;5;184m184 [38;5;185m185 [38;5;186m186 [38;5;187m187 [38;5;188m188 [38;5;189m189[0m [38;5;190m190 [38;5;191m191 [38;5;192m192 [38;5;193m193 [38;5;194m194 [38;5;195m195
[38;5;196m196 [38;5;197m197[0m [38;5;198m198 [38;5;199m199 [38;5;200m200 [38;5;201m201 [38;5;202m202 [38;5;203m203 [38;5;204m204 [38;5;205m205[0m [38;5;206m206 [38;5;207m207 [38;5;208m208 [38;5;209m209 [38;5;210m210 [38;5;211m211 [38;5;212m212 [38;5;213m213[0m [38;5;214m214 [38;5;215m215 [38;5;216m216 [38;5;217m217 [38;5;218m218 [38;5;219m219 [38;5;220m220 [38;5;221m221[0m [38;5;222m222 [38;5;223m223 [38;5;224m224 [38;5;225m225 [38;5;226m226 [38;5;227m227 [38;5;228m228 [38;5;229m229[0m [38;5;230m230 [38;5;231m231

[38;5;16m██[38;5;17m██[38;5;18m██[38;5;19m██[38;5;20m██[38;5;21m██[0m[38;5;22m██[38;5;23m██[38;5;24m██[38;5;25m██[38;5;26m██[38;5;27m██[38;5;28m██[38;5;29m██[0m[38;5;30m██[38;5;31m██[38;5;32m██[38;5;33m██[38;5;34m██[38;5;35m██[38;5;36m██[38;5;37m██[0m[38;5;38m██[38;5;39m██[38;5;40m██[38;5;41m██[38;5;42m██[38;5;43m██[38;5;44m██[38;5;45m██[0m[38;5;46m██[38;5;47m██[38;5;48m██[38;5;49m██[38;5;50m██[38;5;51m██
[38;5;52m██[38;5;53m██[0m[38;5;54m██[38;5;55m██[38;5;56m██[38;5;57m██[38;5;58m██[38;5;59m██[38;5;60m██[38;5;61m██[0m[38;5;62m██[38;5;63m██[38;5;64m██[38;5;65m██[38;5;66m██[38;5;67m██[38;5;68m██[38;5;69m██[0m[38;5;70m██[38;5;71m██[38;5;72m██[38;5;73m██[38;5;74m██[38;5;75m██[38;5;76m██[38;5;77m██[0m[38;5;78m██[38;5;79m██[38;5;80m██[38;5;81m██[38;5;82m██[38;5;83m██[38;5;84m██[38;5;85m██[0m[38;5;86m██[38;5;87m██
[38;5;88m██[38;5;89m██[38;5;90m██[38;5;91m██[38;5;92m██[38;5;93m██[0m[38;5;94m██[38;5;95m██[38;5;96m██[38;5;97m██[38;5;98m██[38;5;99m██[38;5;100m██[38;5;101m██[0m[38;5;102m██[38;5;103m██[38;5;104m██[38;5;105m██[38;5;106m██[38;5;107m██[38;5;108m██[38;5;109m██[0m[38;5;110m██[38;5;111m██[38;5;112m██[38;5;113m██[38;5;114m██[38;5;115m██[38;5;116m██[38;5;117m██[0m[38;5;118m██[38;5;119m██[38;5;120m██[38;5;121m██[38;5;122m██[38;5;123m██
[38;5;124m██[38;5;125m██[0m[38;5;126m██[38;5;127m██[38;5;128m██[38;5;129m██[38;5;130m██[38;5;131m██[38;5;132m██[38;5;133m██[0m[38;5;134m██[38;5;135m██[38;5;136m██[38;5;137m██[38;5;138m██[38;5;139m██[38;5;140m██[38;5;141m██[0m[38;5;142m██[38;5;143m██[38;5;144m██[38;5;145m██[38;5;146m██[38;5;147m██[38;5;148m██[38;5;149m██[0m[38;5;150m██[38;5;151m██[38;5;152m██[38;5;153m██[38;5;154m██[38;5;155m██[38;5;156m██[38;5;157m██[0m[38;5;158m██[38;5;159m██
[38;5;160m██[38;5;161m██[38;5;162m██[38;5;163m██[38;5;164m██[38;5;165m██[0m[38;5;166m██[38;5;167m██[38;5;168m██[38;5;169m██[38;5;170m██[38;5;171m██[38;5;172m██[38;5;173m██[0m[38;5;174m██[38;5;175m██[38;5;176m██[38;5;177m██[38;5;178m██[38;5;179m██[38;5;180m██[38;5;181m██[0m[38;5;182m██[38;5;183m██[38;5;184m██[38;5;185m██[38;5;186m██[38;5;187m██[38;5;188m██[38;5;189m██[0m[38;5;190m██[38;5;191m██[38;5;192m██[38;5;193m██[38;5;194m██[38;5;195m██
[38;5;196m██[38;5;197m██[0m[38;5;198m██[38;5;199m██[38;5;200m██[38;5;201m██[38;5;202m██[38;5;203m██[38;5;204m██[38;5;205m██[0m[38;5;206m██[38;5;207m██[38;5;208m██[38;5;209m██[38;5;210m██[38;5;211m██[38;5;212m██[38;5;213m██[0m[38;5;214m██[38;5;215m██[38;5;216m██[38;5;217m██[38;5;218m██[38;5;219m██[38;5;220m██[38;5;221m██[0m[38;5;222m██[38;5;223m██[38;5;224m██[38;5;225m██[38;5;226m██[38;5;227m██[38;5;228m██[38;5;229m██[0m[38;5;230m██[38;5;231m██

[0;3mGrayscale[0m
[38;5;232m232 [38;5;233m233 [38;5;234m234 [38;5;235m235 [38;5;236m236 [38;5;237m237[0m [38;5;238m238 [38;5;239m239 [38;5;240m240 [38;5;241m241 [38;5;242m242 [38;5;243m243 [38;5;244m244 [38;5;245m245[0m [38;5;246m246 [38;5;247m247 [38;5;248m248 [38;5;249m249 [38;5;250m250 [38;5;251m251 [38;5;252m252 [38;5;253m253[0m [38;5;254m254 [38;5;255m255
[38;5;232m████[38;5;233m████[38;5;234m████[38;5;235m████[38;5;236m████[38;5;237m████[0m[38;5;238m████[38;5;239m████[38;5;240m████[38;5;241m████[38;5;242m████[38;5;243m████[38;5;244m████[38;5;245m████[0m[38;5;246m████[38;5;247m████[38;5;248m████[38;5;249m████[38;5;250m████[38;5;251m████[38;5;252m████[38;5;253m████[0m[38;5;254m████[38;5;255m████

[4;1;38;5;255mRGB Colors[0m

[38;2;255;0;0mRed - RGB(255, 0, 0)[0m
[38;2;0;255;0mGreen - RGB(0, 255, 0)[0m
[38;2;0;0;255mBlue - RGB(0, 0, 255)[0m
```

````markdown title="Markdown:"
```ansi
[4;1;38;5;255mText formatting[0m

- [1mBold[0m
- [2mDimmed[0m
- [3mItalic[0m
- [4mUnderline[0m

[4;1;38;5;255mColors[0m

[30m0 [31m1[0m [32m2[0m [33m3[0m [34m4[0m [35m5[0m [36m6 [37m7 [0m (standard)
[90m0 [91m1[0m [92m2[0m [93m3[0m [94m4[0m [95m5[0m [96m6 [97m7 [0m (bright)

[4;1;38;5;255m256-Color Mode[0m

[3mStandard Colors                 Bright[0m
[38;5;0m000 [38;5;1m001 [38;5;2m002 [38;5;3m003 [38;5;4m004 [38;5;5m005[0m [38;5;6m006 [38;5;7m007 [38;5;8m008 [38;5;9m009 [38;5;10m010 [38;5;11m011 [38;5;12m012 [38;5;13m013[0m [38;5;14m014 [38;5;15m015
[38;5;0m████[38;5;1m████[38;5;2m████[38;5;3m████[38;5;4m████[38;5;5m████[0m[38;5;6m████[38;5;7m████[38;5;8m████[38;5;9m████[38;5;10m████[38;5;11m████[38;5;12m████[38;5;13m████[0m[38;5;14m████[38;5;15m████

[0;3m216 Colors[0m
[38;5;16m016 [38;5;17m017 [38;5;18m018 [38;5;19m019 [38;5;20m020 [38;5;21m021[0m [38;5;22m022 [38;5;23m023 [38;5;24m024 [38;5;25m025 [38;5;26m026 [38;5;27m027 [38;5;28m028 [38;5;29m029[0m [38;5;30m030 [38;5;31m031 [38;5;32m032 [38;5;33m033 [38;5;34m034 [38;5;35m035 [38;5;36m036 [38;5;37m037[0m [38;5;38m038 [38;5;39m039 [38;5;40m040 [38;5;41m041 [38;5;42m042 [38;5;43m043 [38;5;44m044 [38;5;45m045[0m [38;5;46m046 [38;5;47m047 [38;5;48m048 [38;5;49m049 [38;5;50m050 [38;5;51m051
[38;5;52m052 [38;5;53m053[0m [38;5;54m054 [38;5;55m055 [38;5;56m056 [38;5;57m057 [38;5;58m058 [38;5;59m059 [38;5;60m060 [38;5;61m061[0m [38;5;62m062 [38;5;63m063 [38;5;64m064 [38;5;65m065 [38;5;66m066 [38;5;67m067 [38;5;68m068 [38;5;69m069[0m [38;5;70m070 [38;5;71m071 [38;5;72m072 [38;5;73m073 [38;5;74m074 [38;5;75m075 [38;5;76m076 [38;5;77m077[0m [38;5;78m078 [38;5;79m079 [38;5;80m080 [38;5;81m081 [38;5;82m082 [38;5;83m083 [38;5;84m084 [38;5;85m085[0m [38;5;86m086 [38;5;87m087
[38;5;88m088 [38;5;89m089 [38;5;90m090 [38;5;91m091 [38;5;92m092 [38;5;93m093[0m [38;5;94m094 [38;5;95m095 [38;5;96m096 [38;5;97m097 [38;5;98m098 [38;5;99m099 [38;5;100m100 [38;5;101m101[0m [38;5;102m102 [38;5;103m103 [38;5;104m104 [38;5;105m105 [38;5;106m106 [38;5;107m107 [38;5;108m108 [38;5;109m109[0m [38;5;110m110 [38;5;111m111 [38;5;112m112 [38;5;113m113 [38;5;114m114 [38;5;115m115 [38;5;116m116 [38;5;117m117[0m [38;5;118m118 [38;5;119m119 [38;5;120m120 [38;5;121m121 [38;5;122m122 [38;5;123m123
[38;5;124m124 [38;5;125m125[0m [38;5;126m126 [38;5;127m127 [38;5;128m128 [38;5;129m129 [38;5;130m130 [38;5;131m131 [38;5;132m132 [38;5;133m133[0m [38;5;134m134 [38;5;135m135 [38;5;136m136 [38;5;137m137 [38;5;138m138 [38;5;139m139 [38;5;140m140 [38;5;141m141[0m [38;5;142m142 [38;5;143m143 [38;5;144m144 [38;5;145m145 [38;5;146m146 [38;5;147m147 [38;5;148m148 [38;5;149m149[0m [38;5;150m150 [38;5;151m151 [38;5;152m152 [38;5;153m153 [38;5;154m154 [38;5;155m155 [38;5;156m156 [38;5;157m157[0m [38;5;158m158 [38;5;159m159
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m [38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171 [38;5;172m172 [38;5;173m173[0m [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177 [38;5;178m178 [38;5;179m179 [38;5;180m180 [38;5;181m181[0m [38;5;182m182 [38;5;183m183 [38;5;184m184 [38;5;185m185 [38;5;186m186 [38;5;187m187 [38;5;188m188 [38;5;189m189[0m [38;5;190m190 [38;5;191m191 [38;5;192m192 [38;5;193m193 [38;5;194m194 [38;5;195m195
[38;5;196m196 [38;5;197m197[0m [38;5;198m198 [38;5;199m199 [38;5;200m200 [38;5;201m201 [38;5;202m202 [38;5;203m203 [38;5;204m204 [38;5;205m205[0m [38;5;206m206 [38;5;207m207 [38;5;208m208 [38;5;209m209 [38;5;210m210 [38;5;211m211 [38;5;212m212 [38;5;213m213[0m [38;5;214m214 [38;5;215m215 [38;5;216m216 [38;5;217m217 [38;5;218m218 [38;5;219m219 [38;5;220m220 [38;5;221m221[0m [38;5;222m222 [38;5;223m223 [38;5;224m224 [38;5;225m225 [38;5;226m226 [38;5;227m227 [38;5;228m228 [38;5;229m229[0m [38;5;230m230 [38;5;231m231

[38;5;16m██[38;5;17m██[38;5;18m██[38;5;19m██[38;5;20m██[38;5;21m██[0m[38;5;22m██[38;5;23m██[38;5;24m██[38;5;25m██[38;5;26m██[38;5;27m██[38;5;28m██[38;5;29m██[0m[38;5;30m██[38;5;31m██[38;5;32m██[38;5;33m██[38;5;34m██[38;5;35m██[38;5;36m██[38;5;37m██[0m[38;5;38m██[38;5;39m██[38;5;40m██[38;5;41m██[38;5;42m██[38;5;43m██[38;5;44m██[38;5;45m██[0m[38;5;46m██[38;5;47m██[38;5;48m██[38;5;49m██[38;5;50m██[38;5;51m██
[38;5;52m██[38;5;53m██[0m[38;5;54m██[38;5;55m██[38;5;56m██[38;5;57m██[38;5;58m██[38;5;59m██[38;5;60m██[38;5;61m██[0m[38;5;62m██[38;5;63m██[38;5;64m██[38;5;65m██[38;5;66m██[38;5;67m██[38;5;68m██[38;5;69m██[0m[38;5;70m██[38;5;71m██[38;5;72m██[38;5;73m██[38;5;74m██[38;5;75m██[38;5;76m██[38;5;77m██[0m[38;5;78m██[38;5;79m██[38;5;80m██[38;5;81m██[38;5;82m██[38;5;83m██[38;5;84m██[38;5;85m██[0m[38;5;86m██[38;5;87m██
[38;5;88m██[38;5;89m██[38;5;90m██[38;5;91m██[38;5;92m██[38;5;93m██[0m[38;5;94m██[38;5;95m██[38;5;96m██[38;5;97m██[38;5;98m██[38;5;99m██[38;5;100m██[38;5;101m██[0m[38;5;102m██[38;5;103m██[38;5;104m██[38;5;105m██[38;5;106m██[38;5;107m██[38;5;108m██[38;5;109m██[0m[38;5;110m██[38;5;111m██[38;5;112m██[38;5;113m██[38;5;114m██[38;5;115m██[38;5;116m██[38;5;117m██[0m[38;5;118m██[38;5;119m██[38;5;120m██[38;5;121m██[38;5;122m██[38;5;123m██
[38;5;124m██[38;5;125m██[0m[38;5;126m██[38;5;127m██[38;5;128m██[38;5;129m██[38;5;130m██[38;5;131m██[38;5;132m██[38;5;133m██[0m[38;5;134m██[38;5;135m██[38;5;136m██[38;5;137m██[38;5;138m██[38;5;139m██[38;5;140m██[38;5;141m██[0m[38;5;142m██[38;5;143m██[38;5;144m██[38;5;145m██[38;5;146m██[38;5;147m██[38;5;148m██[38;5;149m██[0m[38;5;150m██[38;5;151m██[38;5;152m██[38;5;153m██[38;5;154m██[38;5;155m██[38;5;156m██[38;5;157m██[0m[38;5;158m██[38;5;159m██
[38;5;160m██[38;5;161m██[38;5;162m██[38;5;163m██[38;5;164m██[38;5;165m██[0m[38;5;166m██[38;5;167m██[38;5;168m██[38;5;169m██[38;5;170m██[38;5;171m██[38;5;172m██[38;5;173m██[0m[38;5;174m██[38;5;175m██[38;5;176m██[38;5;177m██[38;5;178m██[38;5;179m██[38;5;180m██[38;5;181m██[0m[38;5;182m██[38;5;183m██[38;5;184m██[38;5;185m██[38;5;186m██[38;5;187m██[38;5;188m██[38;5;189m██[0m[38;5;190m██[38;5;191m██[38;5;192m██[38;5;193m██[38;5;194m██[38;5;195m██
[38;5;196m██[38;5;197m██[0m[38;5;198m██[38;5;199m██[38;5;200m██[38;5;201m██[38;5;202m██[38;5;203m██[38;5;204m██[38;5;205m██[0m[38;5;206m██[38;5;207m██[38;5;208m██[38;5;209m██[38;5;210m██[38;5;211m██[38;5;212m██[38;5;213m██[0m[38;5;214m██[38;5;215m██[38;5;216m██[38;5;217m██[38;5;218m██[38;5;219m██[38;5;220m██[38;5;221m██[0m[38;5;222m██[38;5;223m██[38;5;224m██[38;5;225m██[38;5;226m██[38;5;227m██[38;5;228m██[38;5;229m██[0m[38;5;230m██[38;5;231m██

[0;3mGrayscale[0m
[38;5;232m232 [38;5;233m233 [38;5;234m234 [38;5;235m235 [38;5;236m236 [38;5;237m237[0m [38;5;238m238 [38;5;239m239 [38;5;240m240 [38;5;241m241 [38;5;242m242 [38;5;243m243 [38;5;244m244 [38;5;245m245[0m [38;5;246m246 [38;5;247m247 [38;5;248m248 [38;5;249m249 [38;5;250m250 [38;5;251m251 [38;5;252m252 [38;5;253m253[0m [38;5;254m254 [38;5;255m255
[38;5;232m████[38;5;233m████[38;5;234m████[38;5;235m████[38;5;236m████[38;5;237m████[0m[38;5;238m████[38;5;239m████[38;5;240m████[38;5;241m████[38;5;242m████[38;5;243m████[38;5;244m████[38;5;245m████[0m[38;5;246m████[38;5;247m████[38;5;248m████[38;5;249m████[38;5;250m████[38;5;251m████[38;5;252m████[38;5;253m████[0m[38;5;254m████[38;5;255m████

[4;1;38;5;255mRGB Colors[0m

[38;2;255;0;0mRed - RGB(255, 0, 0)[0m
[38;2;0;255;0mGreen - RGB(0, 255, 0)[0m
[38;2;0;0;255mBlue - RGB(0, 0, 255)[0m
```
````
