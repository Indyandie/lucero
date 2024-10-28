---
title: Basic Syntax
sidebar:
  label: basic
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
lastUpdated: 2022-10-27
---

<blockquote cite="https://daringfireball.net/projects/markdown/syntax#philosophy">
<b>Markdown</b> is intended to be as <em>easy-to-read</em> and <em>easy-to-write</em> as is feasible.
</blockquote>

**John Gruber**

## References

- [Markdown (Daring Fireball)](https://daringfireball.net/projects/markdown/)
- [Authoring Content in Markdown (Starlight)](https://starlight.astro.build/guides/authoring-content/)
  - [Markdown in Astro](https://docs.astro.build/en/guides/markdown-content/)
- [CommonMark Spec](https://commonmark.org/)
- [GitHub Flavored Markdown (GFM) Spec](https://github.github.com/gfm/)
  - [GitHub Docs (Markdown)](https://docs.github.com/en/contributing/writing-for-github-docs/using-markdown-and-liquid-in-github-docs#alerts)
- [Cheat Sheet (Markdown Guide)](https://www.markdownguide.org/cheat-sheet/)

---

:::note[HTML Output]

All `HTML` output examples are generated with [`pandoc`](https://pandoc.org/).

```shell frame="none"
pandoc -f gfm -t html <<< '**Markdown**'
# <p><strong>Markdown</strong></p>
```

:::

## Section Heading `<h1> - <h6>`

# h1

## h2

### h3

#### h4

##### h5

###### h6

```markdown title="Markdown:" /#+ /
# h1

## h2

### h3

#### h4

##### h5

###### h6
```

```html title="HTML output:"
<h1 id="h1">h1</h1>
<h2 id="h2">h2</h2>
<h3 id="h3">h3</h3>
<h4 id="h4">h4</h4>
<h5 id="h5">h5</h5>
<h6 id="h6">h6</h6>
```

- [HTML standard](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/heading_elements)

## Inline Code `<code>`

A fragment of computer code:
element name (`code`),
filename (`index.html`),
computer program (`cat`),
or any string a computer would recognize (`~`, `if`, `else`).

```markdown title="Markdown:" /`[a-zA-Z-.~]+`/
a fragment of computer code:
element name (`code`),
filename (`index.html`),
computer program (`cat`),
or any string a computer would recognize (`~`, `if`, `else`).

````
```html title="HTML output:"
<p>
  a fragment of computer code: element name (<code>code</code>), filename (<code>index.html</code>), computer program (<code>cat</code>), or any string a computer would recognize (<code>~</code>,
  <code>if</code>, <code>else</code>).
</p>
````

- [HTML standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/code)

## Emphasis `<em>`

Stress _emphasis_ on the right _syllable_.

```markdown title="Markdown:" /(_\w+_)/
stress _emphasis_ on the right _syllable_.
```

```html title="HTML output:"
<p>
  Stress <em>emphasis</em> on the right <em>syllable</em>.
</p>
```

- [HTML standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/em)

## Strong Importance `<strong>`

**Strong importance:**
it should not be used to apply **bold styling**, use **`css`** for that.
**Don't use** `<b>` for styling either!

```markdown title="Markdown:" '**Strong importance:**' '**`css`**' '**bold styling**' '**Don't use**'
**Strong importance:**
it should not be used to apply **bold styling**, use **`css`** for that.
**Don't use** `<b>` for styling either!

````
```html title="HTML output:"
<p>
  <strong>strong importance:</strong> it should not be used to apply
  <strong>bold styling</strong>, use <strong><code>css</code></strong> for that. <strong>don't use</strong>
  <code>&lt;b&gt;</code> for styling either!
</p>
````

- [HTML standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/strong)

## Block Quotation `<blockquote>`

> The `blockquote` element represents a section that is quoted from _another source_.
>
>> **Example**
>>
>> ```html
>> <blockquote>
>>   <p>[Jane] then said she liked [...] fish.</p>
>> </blockquote>
>> ```

````markdown title="Markdown:" />+/
> The `blockquote` element represents a section that is quoted from _another source_.
>
>> **Example**
>>
>> ```html
>> <blockquote>
>>   <p>[Jane] then said she liked [...] fish.</p>
>> </blockquote>
>> ```
````

```html title="HTML output:"
<blockquote>
  <p>
    The <code>blockquote</code> element represents a section that is quoted from <em>another source</em>.
  </p>
  <blockquote>
    <p><strong>Example</strong></p>
    <div class="sourceCode" id="cb1"><pre class="sourceCode html">
<code class="sourceCode html"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="dt">&lt;</span><span class="kw">blockquote</span><span class="dt">&gt;</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>  <span class="dt">&lt;</span><span class="kw">p</span><span class="dt">&gt;</span>[Jane] then said she liked [...] fish.<span class="dt">&lt;/</span><span class="kw">p</span><span class="dt">&gt;</span></span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a><span class="dt">&lt;/</span><span class="kw">blockquote</span><span class="dt">&gt;</span></span></code></pre></div>
  </blockquote>
</blockquote>
```

- [HTML standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element)
- [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)

## Image `<img>`

![Astro mascot with a hard hat](../../../../assets/images/houston.webp)
![replacement text if the image isn't available](/lucero/images/not-available.png)

```markdown title="Markdown:" '![' '](' ')'
![Astro mascot with a hard hat](../../../../assets/images/houston.webp)
![replacement text if the image isn't available](/lucero/images/not-available.png)
```

```html title="HTML output:"
<p>
  <img src="/lucero/images/earth.gif" alt="gif of the earth spinning" />
  <img
    src="/lucero/images/not-available.png"
    alt="replacement text if the image isn&#39;t available"
  />
</p>
```

- [HTML standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/img)

## Anchor/Hyperlink `<a>`

link to [usage](../../usage/),
[astro](https://docs.astro.build/en/getting-started/),
anchor to [code section](#inline-code-code)

```markdown title="Markdown:" '[' '](' ')'
link to [usage](../../usage/),
[astro](https://docs.astro.build/en/getting-started/),
anchor to [code section](#inline-code-code)
```

```html title="HTML output:"
<p>
  link to <a href="../../usage/">usage</a>, <a href="https://docs.astro.build/en/getting-started/">astro</a>, anchor to
  <a href="#inline-code-code">code section</a>
</p>
```

- [HTML standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/a)

## Unordered List `<ul>`

- apple
- dog
- number

```markdown title="Markdown:" '- '
- apple
- dog
- number
```

```html title="HTML output:"
<ul>
  <li>apple</li>
  <li>dog</li>
  <li>number</li>
</ul>
```

- [HTML standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/ul)

## Ordered List `<ol>`

1. item 01
1. item 02
1. item 03

```markdown title="Markdown:" '1. '
1. item 01
1. item 02
1. item 03
```

```html title="HTML output:"
<ol type="1">
  <li>item 01</li>
  <li>item 02</li>
  <li>item 03</li>
</ol>
```

- [HTML standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/ol)

## Thematic Break `<hr>`

This is topic 1.

---

This is topic 2.

---

This is topic 3.

---

This is topic 4.

```markdown title="Markdown:" '---'
This is topic 1.

---

This is topic 2.

---

This is topic 3.

---

This is topic 4.
```

```html title="HTML output:"
<p>This is topic 1.</p>
<hr>
<p>This is topic 2.</p>
<hr>
<p>This is topic 3.</p>
<hr>
<p>This is topic 4.</p>
```

- [HTML standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element)
- [MDN reference](https://developer.mozilla.org/en-us/docs/web/html/element/hr)
