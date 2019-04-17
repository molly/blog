---
layout: narrative
title: "The rise of the cyberbot"
author: Molly White
publication-date: 2013-11-27
comments: true
custom_excerpt: "The making of @cyberprefixer, a cyberpunk dystopian news ticker."
---

When I first saw <a href="http://tinysubversions.com/">Darius Kazemi's</a> <a href="http://tinysubversions.com/stuff/cyberfiction/">Cyberpunk Fiction Machine</a>, all I could think of were the various tech-related articles that try to make things sound more hacker-y and doom-and-gloom by prefixing every noun with "cyber". Take for example "<a href="http://killerapps.foreignpolicy.com/posts/2013/10/08/hostile_takeover_now_the_nsa_wants_to_watch_wall_streets_networks_too">Hostile Takeover: Now the NSA Wants to Snoop on Wall Street, too</a>" from <em>Foreign Policy</em>, which speaks of "cyberpackets" and "one fell cyberswoop." This ridiculous trend seemed perfect for a Twitter bot, something I'd always wanted to try.

After a lot of Googling, I managed to patch together <a href="https://twitter.com/cyberprefixer">@CyberPrefixer</a> (<a href="https://github.com/molly/CyberPrefixer">source</a>). I was really pleased with how easy it was to create. First I use <a href="http://www.crummy.com/software/BeautifulSoup/">BeautifulSoup</a> to parse the HTML that's pulled in from Google News' RSS feed. Once I extract the headlines, I weed out any truncated headlines (ones that end in "...") to avoid awkward half-headlines. I also throw away any headlines that are in title case, as I wanted to avoid having to try to convert them to sentence case without losing proper nouns. I remove the attribution string that follows, then pass the headline along to <a href="https://pypi.python.org/pypi/topia.termextract/">topia.termextract</a> to tag the parts of speech in the headline. Once this is done, I prefix "cyber" to any noun that begins with a lowercase letter, unless the word before it also begins with "cyber." I considered not adding this last check, but found that headlines like "China says it monitored US B 52s that flew through its new cyberair cyberzone" were just getting ridiculous. Once the headline is selected and processed, I use <a href="https://github.com/tweepy/tweepy">tweepy</a> to check that the bot hasn't already tweeted this headline, and send it out! I have the bot running on an hourly <a href="https://en.wikipedia.org/wiki/Cron">cron</a> job, and have been enjoying the tweets it's already created.

I'm glad to have this basic framework, because if (when?) I decide to make any more Twitter bots, I'll be able to just modify this. If anyone happens to like Python2 and wants to create a Twitter bot, feel free to fork it, although I can't imagine it's the most elegant bot framework that's out there.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Berlusconi expelled from Italian cyberparliament over cybertax fraud</p>&mdash; CyberPrefixer (@cyberprefixer) <a href="https://twitter.com/cyberprefixer/status/405757932375392256?ref_src=twsrc%5Etfw">November 27, 2013</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Judge orders Sriracha hot cybersauce plant partly closed over cyberodors</p>&mdash; CyberPrefixer (@cyberprefixer) <a href="https://twitter.com/cyberprefixer/status/405742834776821760?ref_src=twsrc%5Etfw">November 27, 2013</a></blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Wintry cyberstorm lashes eastern US, threatens Thanksgiving cybertravel</p>&mdash; CyberPrefixer (@cyberprefixer) <a href="https://twitter.com/cyberprefixer/status/405682433708023808?ref_src=twsrc%5Etfw">November 27, 2013</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


