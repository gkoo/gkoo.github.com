---
layout: post
title: Copying files in Vim's Netrw directory listing
category: blog
---

Today I was trying to figure out how to copy a file while in the Netrw directory listing in Vim. In the past, I have tried to look it up in the Netrw documentation, but I never got too far since it's quite long and, in my opinion, a little poorly organized. Anyhow, today I powered through my laziness and finally read up on how to copy a file.

Copying a file involves three steps. Marking a file, marking a target directory, and then actually copying it. To mark a file, place the cursor over the file you wish to copy and hit `mf` which stands for "Mark file". Then find the directory you want to copy to, place your cursor over the name of the directory and hit `mt`, which stands for "Mark target". Then hit `mc` (does that stand for "Mark copy"?) and voila! You can also mark the target directory first, then mark the file to copy, and it will still work.

For more on what you can do with marked files, see the [Netrw documentation](http://vimdoc.sourceforge.net/htmldoc/pi_netrw.html#netrw-mf)!
