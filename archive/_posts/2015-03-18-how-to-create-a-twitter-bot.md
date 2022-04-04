---
layout: narrative
title: "How to create a Twitter bot"
author: Molly White
publication-date: 2015-03-18
custom_excerpt: "The second of a two-part series on Twitter bots, in which I show you how to create your own Twitter bot."
---

<em>This is the second of a two-part series on Twitter bots. This post discusses how to create them. The [previous post]({{ site.baseurl }}/what-is-a-twitter-bot) covers what they are and some examples.</em>

I write all my Twitter bots in Python, so I'll focus on that in this post. That being said, you can write a Twitter bot in just about any language you please, and there is no shortage of <a href="https://dev.twitter.com/overview/api/twitter-libraries/">Twitter API wrappers</a>; the general strategy remains the same.

This post uses a very basic <a href="https://github.com/molly/twitterbot_framework">bot framework</a> that I've put together, and I'd encourage you to fork it for your own bots. You should also be able to create your own from scratch using my instructions here.

<h2 id="registeratwitteraccount">Register a Twitter account</h2>

Possibly the hardest part of creating a Twitter bot is coming up with a good username that isn't already taken. I can't help much with that, but once you've come up with something, <a href="https://twitter.com/signup">register the account</a>. You can futz with the avatar, description, cover photo, and all that now, or wait until later.

<h2 id="createthetwitterapp">Create the Twitter app</h2>

In order to post to a Twitter account automatically, you have to get access keys for your account. To do this, you have to register a Twitter app. Head over to <a href="https://apps.twitter.com/">apps.twitter.com</a> and click "Create New App".

You should note that you need to have a unique phone number associated with the Twitter account in order to create an app; this is a damn pain. For those such as myself who have more Twitter bots than we have phone numbers, there's only one real solution, and it's not a good one:

<ol>
<li>Choose an account to use as your developer account and associate your phone number with it.  </li>
<li>Create a new account for your bot.  </li>
<li>Register the Twitter app for the bot <em>on the developer account</em>.  </li>
<li>Head over to <a href="https://support.twitter.com/forms/platform">Twitter API support</a> and select "I need to transfer an API key to another account".  </li>
<li>Fill out the form (make sure you're still signed into the developer account).  </li>
<li>Wait an arbitrary amount of time (it's usually been about a week for me, but sometimes much longer) for someone at Twitter Support to manually transfer the key.  </li>
<li>Grumble about how there's got to be a better way to do this.</li>
</ol>

Once you create the account, it'll ask you to fill out a few fields:

<ul>
<li>Name: Whatever you want to call your bot.</li>
<li>Description: A short description of what the bot does.</li>
<li>Website: I usually just put down my own website or my Github, or the link to the Github repo for the given bot.</li>
<li>Callback URL: You can skip this.</li>
</ul>

Check the box to agree to the developer agreement, and click create!

Go to the "Permissions" tab and set the access level your application needs. This will probably be "Read and write".

Go to the "Keys and Access Tokens" tab of the application and click the "Create my access token" button under the "Your access token" heading.

<h2 id="writethebot">Write the bot!</h2>

I've created a very simple <a href="https://github.com/molly/twitterbot_framework">bot framework</a> to go along with this tutorial. It will give you the general structure, as well as some simple logging functionality, which I find very useful for debugging purposes.

This tutorial assumes some knowledge of Python. It's also going to assume that your project is structured like so:

<pre><code>twitter-bot/  
|-- bot.py
|-- secrets.py
</code></pre>

<code>bot.py</code> will hold all the code for the bot. <code>secrets.py</code> will store your access keys, and should be added to your <code>.gitignore</code> if you're going to be publishing the code. Anyone with access to your keys can read or write from this Twitter account, so you really don't want to make these public.

<h3 id="pickyourlibrary">Pick your library</h3>

If you like making things difficult for yourself, or if you're using a language without a <a href="https://dev.twitter.com/overview/api/twitter-libraries">Twitter library</a>, then I suppose you can communicate with the <a href="https://dev.twitter.com/rest/public">Twitter API</a> directly. Otherwise, I'd highly recommend picking one of the many Twitter libraries. My personal favorite is <a href="http://www.tweepy.org/">tweepy</a>, and that's what this tutorial uses.

Install tweepy by running <code>pip install tweepy</code>. Now you can just <code>import tweepy</code> at the top of <code>bot.py</code>.

<h3 id="authenticate">Authenticate</h3>

In order to read or write from the Twitter account, you need to authenticate.

Go back into the "Keys and Access Tokens" tab of your Twitter app. In secrets.py, add:

<pre><code>C_KEY <span class="token operator">=</span> <span class="token string">""</span>  
C_SECRET <span class="token operator">=</span> <span class="token string">""</span>  
A_TOKEN <span class="token operator">=</span> <span class="token string">""</span>  
A_TOKEN_SECRET <span class="token operator">=</span> <span class="token string">""</span>  
</code></pre>

Add the following from the Keys and Access Tokens page inside the quotation marks:

<ul>
<li><code>C_KEY</code>: Consumer Key (API Key)</li>
<li><code>C_SECRET</code>: Consumer Secret (API Secret)</li>
<li><code>A_TOKEN</code>: Access Token</li>
<li><code>A_TOKEN_SECRET</code>: Access Token Secret</li>
</ul>

Again, if you're going to be publishing this code, it's important that you don't publish the <code>secrets.py</code> file.

In <code>bot.py</code>, add the following:

<pre><code><span class="token keyword">from</span> secrets <span class="token keyword">import</span> <span class="token operator">*</span>

auth <span class="token operator">=</span> tweepy<span class="token punctuation">.</span>OAuthHandler<span class="token punctuation">(</span>C_KEY<span class="token punctuation">,</span> C_SECRET<span class="token punctuation">)</span>  
auth<span class="token punctuation">.</span>set_access_token<span class="token punctuation">(</span>A_TOKEN<span class="token punctuation">,</span> A_TOKEN_SECRET<span class="token punctuation">)</span>  
api <span class="token operator">=</span> tweepy<span class="token punctuation">.</span>API<span class="token punctuation">(</span>auth<span class="token punctuation">)</span>  
</code></pre>

<h3 id="createtweets">Create tweets</h3>

This bit is somewhat up to you. [Part I]({{ site.baseurl }}/what-is-a-twitter-bot) of this series explains some types of bots and gives some examples, which might provide some inspiration. You'll need to create the content yourself, but I can give you some resources that I've found to be really useful:

<ul>
<li>News headlines: <a href="http://open-platform.theguardian.com/">Guardian API</a>, <a href="http://news.google.com/news?pz=1&amp;cf=all&amp;ned=us&amp;hl=en&amp;output=rss">Google News RSS</a> (needs to be parsed)</li>
<li>News headlines filter ("tact"): <a href="https://github.com/molly/CyberPrefixer/blob/master/offensive.py">offensive.py</a></li>
<li>HTML parsing: <a href="http://www.crummy.com/software/BeautifulSoup/">BeautifulSoup</a></li>
<li>Parts-of-speech tagging: <a href="https://pypi.python.org/pypi/topia.termextract/">topia.termextract</a></li>
<li>Word and dictionary magic: <a href="https://www.wordnik.com/">Wordnik</a></li>
<li>Rhymes: <a href="http://rhymebrain.com/api.html">RhymeBrain API</a></li>
<li>Weather information: <a href="https://developer.forecast.io/">Forecast.io API</a></li>
<li>Markov chaining: <a href="https://github.com/pteichman/cobe/wiki/Getting-started">cobe</a></li>
<li><a href="https://github.com/dariusk/corpora">Interesting corpora</a></li>
<li>Other APIs: <a href="https://www.mashape.com/">Mashape</a></li>
</ul>

<h3 id="posttweets">Post tweets</h3>

Once you've got your tweet all together, post it!

<pre><code>api<span class="token punctuation">.</span>update_status<span class="token punctuation">(</span>tweet<span class="token punctuation">)</span>  
</code></pre>

This only posts a standalone tweet. If you want to reply to another tweet, direct message someone, or do other fun things, check out the <a href="http://docs.tweepy.org/en/latest/api.html">tweepy documentation</a>.

<h3 id="rinserepeat">Rinse, repeat</h3>

There are a ton of ways to repeatedly post tweets. You could write it into the program itself and run it in the background, but my favorite approach is using <a href="https://en.wikipedia.org/wiki/Cron">cron jobs</a> on my VPS. You could probably also use them on your personal computer, but you would need to ensure the machine was both on and awake when you wanted it to execute. Cron jobs will work on Linux and OSX, but if you're using a Windows machine, you'll probably need to research alternative approaches.

You can edit your cron table by running <code>crontab -e</code>. There are great resources available to help you schedule the task, such as <a href="http://v1.corenominal.org/howto-setup-a-crontab-file/">this how-to</a> and a <a href="http://crontab-generator.org/">crontab generator</a>, but here are a few examples of lines that I'm currently using for my bots:

Tweet every hour, on the hour:

<pre><code>0 * * * * python /home/molly/twitter-bot/bot.py  
</code></pre>

Tweet every three hours:

<pre><code>0 */3 * * * python /home/molly/twitter-bot/bot.py  
</code></pre>

Tweet every fifteen minutes:

<pre><code>*/15 * * * * python /home/molly/twitter-bot/bot.py
</code></pre>

Tweet at 12am, 6am, 12pm, and 6pm:

<pre><code>0 0,6,12,18 * * * python /home/molly/twitter-bot/bot.py
</code></pre>

<h2 id="anote">A note</h2>

I would highly, <em>highly</em> recommend reading Darius Kazemi's article, <a href="http://tinysubversions.com/2013/03/basic-twitter-bot-etiquette/">"Basic Twitter bot etiquette"</a>. He lists four suggestions for "making a bot that isn’t an asshole".

I see some of these rules as more bendable than others. For example, <a href="https://twitter.com/yourevalued">@yourevalued</a> does @mention people, but I try to reduce its assholery by ensuring that it never tweets at the same person twice. <s>That said, I'm running the risk of this bot being banned by Twitter for @mentioning too many non-followers.</s> <small>That fateful day has come. RIP @yourevalued, November 12, 2014–May 4, 2016.</small>
