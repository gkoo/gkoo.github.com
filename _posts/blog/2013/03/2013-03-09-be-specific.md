---
layout: post
title: Be specific
category: blog
---
Fill in the blank: eval is ________.

If you've been working with Javascript for any substantial amount of time, there's probably no thought required in this task. For those who are new to Javascript, the completed phrase is: **eval is evil**. The phrase [originates from Douglas Crockford](http://javascript.crockford.com/code.html), the Javascript guru whose words many regard as scripture. You can read more about the eval function on its [MDN page](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/eval).

The bad taste that eval leaves in the mouths of Javascript developers is so ingrained that the reaction is almost Pavlovian. Let's parse this motto to uncover the real meaning behind such a powerful phrase.

Except we can't. The only meaning we can extract from those three words is that the usage of eval is a no-no. While Crockford’s other recommendations are accompanied by rationale--some keywords result in confusing code, some coding practices produce evasive bugs—the admonishment of eval comes with no such explanation other than the decree of its nefariousness.

Until the machines rise up against us--and it's only a matter of time before they do--I can't seriously consider a programming keyword evil. The reasons for avoiding the eval function are well-known and fall into three main categories: security, performance, and maintainability. Perhaps Crockford's well-known slogan could have been: "eval is an overly powerful function which produces code that is difficult to debug, with serious security and performance implications, commonly misused by many, for which there is almost always a better alternative." I'll concede that this phrase isn't as pithy, and it doesn't roll off the tongue in quite the same way, but it would have provided more information for the betterment of developers everywhere. I'm actually not opposed to the "eval is evil" phrase. It's really easy to remember, as evidenced by the readiness with which it is recited, and gets its point across succinctly. I wouldn't be surprised if there's a tattoo out there of "eval is evil."

Most Javascript developers already know why the use of eval is discouraged. But let's face the facts: Javascript developers aren't the only people who write Javascript code. A lot of non-Javascript programmers have written some Javascript at some point in their lives, due to its de facto status as the programming language of the web. And when these programmers are learning how to write clean, secure Javascript code, it’s in everyone’s interests to be upfront about the why's behind the do's and don'ts.

The "eval is evil" phrase is just one example of how criticism frequently tends to be too general. I've been guilty of giving overly general criticism myself, and I've been making a conscious effort to be more specific when giving feedback. There are benefits to giving specific:

* You demonstrate that you actually know what you're talking about.
* You're in a better position to suggest ways to improve the thing you're criticizing.
* You seem less like you're whining. Or, you'll seem less like an ass.

If you can't articulate why you dislike something, or if you have no suggestions for improving the thing you're criticizing, you're in no place to criticize it. Even when you’re giving positive feedback, being more specific is always more valuable for the party receiving the feedback. In general, talking in specifics is the easiest way to start having more constructive discussions.
