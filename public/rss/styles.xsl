<?xml version="1.0" encoding="utf-8"?>
<!--
source
https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl
-->
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title" /> Web Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
      </head>
      <body class="bg-white not-content">
        <main class="container">
          <header>
            <h2><xsl:value-of select="/rss/channel/title" /></h2>
            <p><xsl:value-of select="/rss/channel/description" /></p>
            <a class="head_link" target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link" />
              </xsl:attribute>
              Visit Website &#x2192;
            </a>
            <hr/>
          </header>
          <hr/>
          <section>
            <h2>
              <img style="vertical-align: text-bottom; width: 1.2em; height: 1.2em" src="/lucero/rss/rss-icon.svg" class="pr-1" />
              RSS Feed
            </h2>
            <hr/>
            <xsl:for-each select="/rss/channel/item">
              <article>
                <h4>
                  <a target="_blank">
                    <xsl:attribute name="href">
                    <xsl:value-of select="link" />
                    </xsl:attribute>
                    <xsl:value-of select="title" />
                  </a>
                </h4>
                <p>
                  <xsl:value-of select="description" />
                </p>
                <time>
                  <xsl:value-of select="pubDate" />
                </time>
              </article>
            </xsl:for-each>
          </section>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
