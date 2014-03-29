---
layout: post
title: JSON.stringify and Arrays in Chrome
category: blog
---
Today I discovered, to my unpleasant surprise, that `JSON.stringify` does not stringify arrays
properly in Chrome.

```
JSON.stringify({ numbers: [1, 2, 3] }) // "{"numbers":"[1, 2, 3]"}"
```

I've tried the same thing in Node and Firefox, and they return what I expect:

```
JSON.stringify({ numbers: [1, 2, 3] }) // '{"numbers":[1,2,3]}'
```

It seems like this has been a problem for quite a while now!
[This post](https://code.google.com/p/chromium/issues/detail?id=154136) is from October 2012 and
reports the same behavior of Chrome v22. I'm seeing the same issue today (March 2014) on Chrome v33.

![JSON.stringify bug](http://new.tinygrab.com/fb3336fca8728ac33848344e11945ac82591881c3a.png)

Edit: I've discovered that the culprit is [Prototype](http://prototypejs.org/) and how it supplies a `toJSON`
method for arrays. The reason I was seeing this on Chrome only is because I was testing `JSON.stringify` on a
different page in Firefox -- one without Prototype.
