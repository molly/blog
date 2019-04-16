---
layout: narrative
title: "Building a better alarm clock"
author: Molly White
publication-date: 2014-06-09
comments: true
---

I've been on break since I finished up my spring semester at Northeastern. I was supposed to take summer classes, as is typical for Northeastern students, but, frustrated with the poor selection of classes and already needing to stay at Northeastern for an extra semester, I decided to take these two months off. It's been a great opportunity to catch up on my <a href="http://mollywhite.net/#projects">personal projects</a>, relax, and sleep.

Without many daytime obligations, I become nocturnal. I'm not sure why, as I like the daytime and sunlight well enough. Sure enough, only a week or so in to my summer break, I found myself <a href="http://xkcd.com/448/">drifting into New Zealand Standard Time</a>. This bothers me a bit, because it means I don't see my friends as much, and it makes day-to-day errands and outings a bit complicated. I started setting alarms (around ten of them) to wake up, but found out that <a href="https://www.youtube.com/watch?v=1fGIdZShScA">Sleepy Molly</a> is just smart enough to turn off the alarm (and subsequent alarms) and not smart enough to remember that I had been planning the night before to wake up earlier.

I came up with the idea a while ago to leave my desktop on, and schedule something interesting to happen around the time I wanted to wake up. While at the grocery store this evening, I was lamenting that I'd slept through three of the <a href="http://na.lolesports.com/">League of Legends Championship Series</a> games this afternoon, and it occurred to me that I could use that to wake myself up. I immediately forgot this once more interesting things were occupying my mind (read: food), but remembered the idea when I went to go to sleep around 3am.

<h2 id="gettingmycomputersattention">Getting my computer's attention</h2>

My first step was to figure out how to make sure my computer would be paying attention around the time I wanted to wake up. I thought that this might involve leaving my computer on while I slept, and waking it from standby when I wanted an alarm. However, a little Googling taught me that I could actually have my computer boot itself at a specified time using the real-time clock (RTC). Following the instructions in <a href="http://www.linux.com/learn/docs/672849-wake-up-linux-with-an-rtc-alarm-clock">"Wake Up Linux with an RTC Alarm Clock"</a>, I entered:

<code>sudo sh -c "echo 0 &gt; /sys/class/rtc/rtc0/wakealarm" 
sudo sh -c "echo `date '+%s' -d '+ 3 minutes'` &gt; /sys/class/rtc/rtc0/wakealarm"
</code>

I shut down my computer, and was delighted when it booted itself three minutes later.

<h2 id="schedulinganevent">Scheduling an event</h2>

I moved on to the next step: scheduling a process. I'd briefly read about the <a href="https://en.wikipedia.org/wiki/At_%28Unix%29"><code>at</code></a> command, which would allow me to schedule an event to occur once at a scheduled time in the future (as opposed to <code>cron</code>, which I use to run processes repeatedly at specified intervals). I thought this might make some more sense, as I tend to vary when I try to wake up based on when I go to sleep the night before.

I've already been using a tool called <a href="http://livestreamer.tanuki.se/en/latest/">Livestreamer</a> to pipe streams into <a href="http://www.videolan.org/vlc/index.html">VLC</a>, so figuring out what process to run to open a stream was no issue.

I struggled a bit at first with how to structure the command. I tried:

<code>molly@pennyworth ~ $ at now + 1 minute
warning: commands will be executed using /bin/sh
at&gt; livestreamer twitch.tv/froggen best
at&gt; &lt;EOT&gt;
</code>

But was disappointed when, a minute later, the stream failed to open. Some Googling led me to <a href="http://ubuntuforums.org/showthread.php?t=1777706&amp;p=10916458#post10916458">a post on the Ubuntu Forums</a>, where I learned that I needed to structure it as:

<code>molly@pennyworth ~ $ at now + 1 minute
warning: commands will be executed using /bin/sh
at&gt; env DISPLAY=:0 livestreamer twitch.tv/froggen best
at&gt; &lt;EOT&gt;
</code>

By now it was only 30 minutes after I'd planned to sleep, and I was about read to set the start-up time and the <code>at</code> process. But then I realized...

<h2 id="choosingthestreamtowatch">Choosing the stream to watch</h2>

...there's no LCS on Mondays. If I tried to open the Riot Games stream tomorrow morning, I might be lucky enough to find a replay of previous LCS games, but would probably be greeted with the standard "Offline" message. I tried to think of a streamer who would be streaming at midday tomorrow, but realized I couldn't think of anyone who reliably streams around that time.

So... I <a href="https://github.com/molly/streampicker">wrote a script</a>. It authenticates with Twitch using OAuth (and even serves a simple webpage to show you the token, because why do things halfway?) It then checks to see if any of the channels you specify as "priority" are online. I wanted to be sure that I would be woken up to the LCS if it was happening, so I specified "riotgames" as my only priority stream. If that's unavailable, the script checks to see if any of the channels I follow are currently streaming. Finally, if no one I follow is streaming, the script picks the channel streaming the game I chose (League of Legends, but it's configurable) with the highest number of viewers. It then sets the system volume to 50% (though I've disabled this by default, as it's a lot more OS-dependent than the rest) and the selected stream with Livestreamer.

<h2 id="tryingit">Trying it</h2>

So, to try it out, I can do:

<<code>molly@pennyworth ~ $ at now + 4 minutes
warning: commands will be executed using /bin/sh
at&gt; env DISPLAY=:0 ./streampicker.py
at&gt; &lt;EOT&gt;
</code>

And then:

<code>sudo sh -c "echo 0 &gt; /sys/class/rtc/rtc0/wakealarm" 
sudo sh -c "echo `date '+%s' -d '+ 2 minutes'` &gt; /sys/class/rtc/rtc0/wakealarm"
</code>

I shut down my computer, and soon enough it had booted and opened up a stream for me!

I'd like to say that I could successfully try it out after going to sleep, but unfortunately it's now almost 9am. Perhaps tomorrow...
