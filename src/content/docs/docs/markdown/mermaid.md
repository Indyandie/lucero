---
title: Mermaid
description: Diagramming and charting tool.
lastUpdated: 2025-06-15
sidebar:
  label: mermaid
  order: 20
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
next: false
rss: true
pubDate: 2025-06-15
---

- [Mermaid JS](https://mermaid.js.org/)
- [Starlight Discussion](https://github.com/withastro/starlight/discussions/1259#discussioncomment-8515492)

:::note
Support provided by [astro-mermaid](https://github.com/joesaby/astro-mermaid). 🙇 Thank you [joesaby](https://github.com/joesaby)!
:::

```mermaid
flowchart TD
    Start --> Stop
```

````text title="Code:"
```mermaid
flowchart TD
    Start --> Stop
```
````

#### Pre-generated Images

- [mermaid-cli](https://github.com/mermaid-js/mermaid-cli)

##### Default

```shell title="terminal"
mmdc -i basic.mmdc -o basic.png
```

![](../../../../assets/images/mermaid/misc/basic.png)

```shell title="terminal"
mmdc -i basic.mmdc -o basic.svg
```

![](../../../../assets/images/mermaid/misc/basic.svg)

##### Dark Mode (`-t dark`) & Transparent Background (`-b transparent`)

```shell title="terminal"
mmdc -t dark -b transparent -i basic.mmdc -o basic.png
```

![](../../../../assets/images/mermaid/misc/basic-dark.png)

```shell title="terminal"
mmdc -t dark -b transparent -i basic.mmdc -o basic.svg
```

![](../../../../assets/images/mermaid/misc/basic-dark.svg)
