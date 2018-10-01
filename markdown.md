# github markdown cheetsheet

Here is personal reffere sheet for markdown, some git markdown tags are added too.

# Heading

###### Heading

## Lists

1. one
1. two
   - one
   - two
1. three

- one
- two
  1. one
  1. two
  1. three
- three

## Styling text

**bold** or **bold**  
_Italic_ or _Italic_

~~Strikethrough~~ or **Bold and _italic_**

## Quoting

While writing my tutorials, I thought:

> why not write in markdown.
> this line continues, the quote.

Quote break

> Here continues the quote again.

## Quoting code

### inline

This documents is about `markdown`, written in `github` flavoured `markdown`.

### block

Here is an example code block. They support syntax highlighting, when you provide language. Github uses [linguist](https://github.com/github/linguist) for code highliting.

```bash
git status
```

### Links

Links can be local/or web
This is [link](www.google.com) to www.google.com

I'm an inline-style [link with title](https://www.google.com "Google's Homepage")

Here is reference-style [link][my reference]

Here is number reference-style [link][1]

Even better way for [reference style link]

Here is how angel brackets/links behave. http://www.example.com or <http://www.example.com> and sometimes example.com (but not on Github, for example).

[my reference]: https://www.mozilla.org
[1]: http://slashdot.org
[reference style link]: http://www.reddit.com

## Images

Logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo 2 Title"

## Horizontal Rule

Three or more

---

Hyphens

---

Asterisks

---

Underscores

```html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

## Tables

Colons can be used to align columns.

|        Tables |      Are      | Cool  |
| ------------: | :-----------: | :---- |
|      col 3 is | right-aligned | $1600 |
|      col 2 is |   centered    | $12   |
| zebra stripes |   are neat    | $1    |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

## Task Lists

- [x] This this first
- [x] This is second item
- [ ] This is third item.

## Emoji

:sparkles: :camel: :boom:

Further reading:
Mastering [markdown](https://guides.github.com/features/mastering-markdown/)

Github markdown [specs](https://github.github.com/gfm/)
