---
title: Extended Syntax
description: Extended markdown syntax.
lastUpdated: 2024-11-28
sidebar:
  label: extended
  order: 19
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
next: false
rss: true
pubDate: 2024-10-25
---

## Deleted Text `<del>`

This is for ~~strikethrough~~ deleted text

```markdown title="Markdown:" /~~\w+~~/
This is for ~~strikethrough~~ deleted text
```

```html title="HTML output:"
<p>This is for <del>strikethrough</del> deleted text</p>
```

## Fenced Code Block `<pre><code>`

```json
{
  "firstName": "John",
  "lastName": "Gruber",
  "markdown": ["GFM", "MDX"]
}
```

<!-- deno-fmt-ignore -->
````markdown title="Markdown:"  /^&grave;{3}(?:\w+|)$/
```json
{
  "firstName": "John",
  "lastName": "Gruber",
  "markdown": ["GFM", "MDX"]
}
```
````

```html title="HTML output:"
<div class="sourceCode" id="cb1"><pre class="sourceCode json">
<code class="sourceCode json"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">{</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>  <span class="dt">&quot;firstName&quot;</span><span class="fu">:</span> <span class="st">&quot;John&quot;</span><span class="fu">,</span></span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>  <span class="dt">&quot;lastName&quot;</span><span class="fu">:</span> <span class="st">&quot;Gruber&quot;</span><span class="fu">,</span></span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>  <span class="dt">&quot;markdown&quot;</span><span class="fu">:</span> <span class="ot">[</span><span class="st">&quot;GFM&quot;</span><span class="ot">,</span> <span class="st">&quot;MDX&quot;</span><span class="ot">]</span></span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a><span class="fu">}</span></span></code></pre></div>
```

## Tabular Data `<table>`

| element                                                                               | description                                      |
| ------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [**`<table>`**](https://html.spec.whatwg.org/multipage/tables.html#the-table-element) | represents tabular data                          |
| [**`<thead>`**](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element) | a block of rows that consist of labels (headers) |
| [**`<th>`**](https://html.spec.whatwg.org/multipage/tables.html#the-th-element)       | header cell in a table.                          |
| [**`<tbody>`**](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element) | a block of rows that consist of body data        |
| [**`<tr>`**](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element)       | a row of cells                                   |
| [**`<td>`**](https://html.spec.whatwg.org/multipage/tables.html#the-td-element)       | a data cell                                      |

```markdown title="Markdown:" '|' /-{3,}/
| element                                                                               | description                                      |
| ------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [**`<table>`**](https://html.spec.whatwg.org/multipage/tables.html#the-table-element) | represents tabular data                          |
| [**`<thead>`**](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element) | a block of rows that consist of labels (headers) |
| [**`<th>`**](https://html.spec.whatwg.org/multipage/tables.html#the-th-element)       | header cell in a table.                          |
| [**`<tbody>`**](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element) | a block of rows that consist of body data        |
| [**`<tr>`**](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element)       | a row of cells                                   |
| [**`<td>`**](https://html.spec.whatwg.org/multipage/tables.html#the-td-element)       | a data cell                                      |
```

```html title="HTML output:"
<table>
  <thead>
    <tr class="header">
      <th>element</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td><a href="https://html.spec.whatwg.org/multipage/tables.html#the-table-element"><strong><code>&lt;table&gt;</code></strong></a></td>
      <td>represents tabular data</td>
    </tr>
    <tr class="even">
      <td><a href="https://html.spec.whatwg.org/multipage/tables.html#the-thead-element"><strong><code>&lt;thead&gt;</code></strong></a></td>
      <td>a block of rows that consist of labels (headers)</td>
    </tr>
    <tr class="odd">
      <td><a href="https://html.spec.whatwg.org/multipage/tables.html#the-th-element"><strong><code>&lt;th&gt;</code></strong></a></td>
      <td>header cell in a table.</td>
    </tr>
    <tr class="even">
      <td><a href="https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element"><strong><code>&lt;tbody&gt;</code></strong></a></td>
      <td>a block of rows that consist of body data</td>
    </tr>
    <tr class="odd">
      <td><a href="https://html.spec.whatwg.org/multipage/tables.html#the-tr-element"><strong><code>&lt;tr&gt;</code></strong></a></td>
      <td>a row of cells</td>
    </tr>
    <tr class="even">
      <td><a href="https://html.spec.whatwg.org/multipage/tables.html#the-td-element"><strong><code>&lt;td&gt;</code></strong></a></td>
      <td>a data cell</td>
    </tr>
  </tbody>
</table>
```

## Asides/Callouts

:::note
This is a **note** aside.
:::

:::tip
This is a **tip** aside.
:::

:::caution
This is a **caution** aside.
:::

:::danger
This is a **danger** aside.
:::

```markdown title="Markdown:" /:{3}(?:\w+|)/
:::note
This is a **note** aside.
:::

:::tip
This is a **tip** aside.
:::

:::caution
This is a **caution** aside.
:::

:::danger
This is a **danger** aside.
:::
```

### Custom Titles

:::tip[This is a _Custom_ Title]
Check it out!
:::

```markdown title="Markdown:" '[This is a _Custom_ Title]'
:::tip[This is a _Custom_ Title]
Check it out!
:::
```

## Task List

- [x] Start
- [ ] Continue
- [ ] Stop

<!-- deno-fmt-ignore -->
```markdown title="Markdown:" /- \\[(?:x| )\\] /
- [x] Start
- [ ] Continue
- [ ] Stop
```

```html title="HTML output:"
<ul class="task-list">
  <li><label><input type="checkbox" checked="" />Start</label></li>
  <li><label><input type="checkbox" />Continue</label></li>
  <li><label><input type="checkbox" />Stop</label></li>
</ul>
```

## Footnote

This has a footnote. [^1]

[^1]: footnote

<!-- deno-fmt-ignore -->
```markdown title="Markdown:" /\\[\\^1\\](?:: \w+|)/
This has a footnote. [^1]

[^1]: footnote
```

```html title="HTML output:"
<p>This has a footnote. <a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></p>
<section id="footnotes" class="footnotes footnotes-end-of-document" role="doc-endnotes">
  <hr>
  <ol>
    <li id="fn1"><p>footnote<a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
  </ol>
</section>
```

---

## Unsupported

```markdown
<!-- Emojis -->

emoji :joy:

<!-- Heading ID -->

#### Custom ID {#custom-id}

<!-- Highlighted Text `<mark>` -->

==mark==

<!-- Subscript `<sub>` -->

H~2~O

<!-- Superscript `<sup>` -->

X^Y

<!-- Definition List -->

term
: definition
```
