---
layout: post
title: Why I migrated my blog to Jekyll
category: blog
---

About a month ago, I moved my blog from [Posterous](http://posterous.com) to [Github Pages](http://pages.github.com/), which runs on [Jekyll](https://github.com/mojombo/jekyll). A while before that, I had moved it from a rudimentary, custom built blogging platform which used [IrisCouch](http://iriscouch.com). (In retrospect, I realize that trying to build my own blogging platform, while educational, was a case of engineer-trying-to-build-everything-himself-when-it-is-much-more-practical-to-use-an-existing-solution.) Well before that, I made [a Wordpress blog](http://gordonkoo.wordpress.com) with exactly three posts. And many, many years ago when I was a young boy, I started my first blog on Blogger. I used the FTP syncing functionality to actually publish HTML files on my webspace. At a lifetime of a little over seven years, my Blogger blog was the longest-lived of all the platforms I've tried. I ultimately stopped using Blogger after they [discontinued FTP support](http://buzz.blogger.com/2010/01/important-note-to-ftp-users.html).

Why have the blogging platforms that I've tried after Blogger failed to retain me as a user? Shouldn't technology improve over time, giving us better tools with which to do the things we love to do? Yes, it should, and I think that, in large part, it has. And I'm sure a large part of it was also the fact that as I grew older, I had less time (and perhaps interest) to blog. But as technology behind various Internet services evolved, a trend began to emerge.

On March 12, 2012, Posterous announced that it was being acquired by Twitter. This caused a lot of head-scratching on The Internet. What did Posterous, a blogging service, have to do with 140-character messages? Many people began to fear that the Posterous product would be shut down, despite the message from the founders reassuring them that there were no plans to do so ... _yet_. I was one such person. And you know what? I was tired of jumping around from service to service. I wanted the next one I chose to last me for a long, long time.

The problem with using a service like Posterous is part of a somewhat controversial trend in Silicon Valley right now. So many other blogs have discussed this topic, so I'll keep it short. When startups are just getting up off the ground, they need users to thrive. After they become successes, they're acquired by bigger companies and shut down their products, abandoning the users who helped them build their way to success.

Yes, Posterous has not shut down as of the time of this writing, nor have the founders announced any such plans. However, a service shutdown in the near future is not out of the question either. It's this uncertainty that leaves Posterous users like me on edge. And even though, in the event of a shutdown, Posterous would probably provide a migration tutorial to transfer their data to a different service, it's still really inconvenient and a big hassle.

So why Github Pages then? Github Pages uses Jekyll as a blog generator. How it works is basically this: your blog is just another git repository. This means that you _own all of your data_. It doesn't get sucked into a black hole cloud service. You're simply replicating it on Github's hosted platform. Should Github suddenly close up shop--well, there would probably be far more serious implications than migrating your blog, but humor me--then you still have all of your code on your local repository. What's that? You somehow lost it, deleted it, or for whatever reason don't have it anymore? Downloading your blog content is a `git clone` away! Github Pages may not be the most fully fetured blog platform, but it's enough for me, and knowing that I own my data allows me to sleep at night.

Though it may not seem as important to others, owning my data is a big deal to me. Writing a blog, documenting your thoughts and opinions about life is an investment of time and energy. In the end, you have many snapshots of who you were and what you were thinking and feeling at those particular moments in time. And that's something that I want to hold on to for a long time.

For example: since I published my Blogger blog via FTP, I still have all of my posts from high school through the end of college. Here's one from high school.

> If you've been around me long enough, you may have heard me \[perhaps on more than one occasion\] talk about what I will have when I'm rich. I've decided to make a list of all the things, lest I forget them. Most of these have to do with the mansion I'll be living in.
> 
> 1. A gigantic room that is completely white. One like in the first Matrix, \["guns. lots of guns."\] only theirs was far more extensive. Someone asked me, and I don't know who so please forgive me if you're reading this, what I would do when it got dirty. That's the worst question ever. I'd just have my people clean it!
> 2. Indoor swimming pool. This is pretty much a given.
> 3. Outdoor swimming pool. In case it's nice outside.
> 4. A room with a really high ceiling and stadium seating on one half. Usable for watching movies or TV, as well as other activities that require high ceilings.
> 5. Firepole running up and down all of my floors. How cool would it be to have a firepole in your house? Think about it: Oh no, I'm late! Take the stairs? Too much physical exhaustion involved. Elevator? The wait is too long. The only rational choice would be to take the firepole. In three seconds, you're at ground zero. If I have kids, they'll just stay on the first floor so they don't fall to their deaths.
> 6. A room made completely out of bed. No square inch of that room is left uncovered. The easiest way to get around in that room is to crawl. Or roll like a snake. No shoes allowed inside, of course. In fact, no shoes allowed in the entire house! What are we, barbarians?
> 7. The master bedroom--mine, of course--will have a refrigerator in it. When you get the rumblies in the tumblies, it's too much of a hassle to take the firepole down to the kitchen. Instead, just walk five feet and get whatever you need right there. It's genius, I tell you!
> 8. A ball pit. I've always thought that ball pits were fun, and this way I can ensure that nobody's peed in it.

I was kind of a weird kid.
