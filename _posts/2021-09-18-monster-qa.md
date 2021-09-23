---
layout: narrative
title: "Transcript of Rob Monster's live Q&A following the Epik breach"
author: Molly White
publication-date: 2021-09-18
comments: false
custom_excerpt: "Transcript of a live Q&A session held by Rob Monster on September 16, 2021."
---

<div class="note">
<p>This is a transcript of a portion of the live Q&A session held by <a href="https://en.wikipedia.org/wiki/Epik_(company)">Epik</a> CEO <a href="https://en.wikipedia.org/wiki/Rob_Monster">Rob Monster</a> on September 16, 2021. It is compiled from a <a href="https://www.youtube.com/watch?v=aZ9MFts28XI">YouTube</a> recording, where it was published by <a href="ttps://twitter.com/MikaelThalen">Mikael Thalen</a>, as well as from a <a href="https://soundcloud.com/user-197465089-37602075/rob-monster-ceo-of-epik-discussing-hack-by-anonymous">Soundcloud</a> recording published by "EpikFail". Timestamps from the two recordings are not in sync, so those referring to YouTube are marked with "YT" and those from SoundCloud are "SC".</p>

<p><b>I have finished transcribing what is available in Thalen's recording on YouTube. The remaining missing portion at the end is in progress.</b></p>

<details>
<summary>Transcription and copyright details</summary>
<p>The transcript has only been edited for readability (e.g., to remove filler words which do not change meaning) and to remove some of weev's comments (all removals marked inline) which I have no interest in reprinting on my own website. Where relevant, comments from the live chat section have been transcribed for context.</p>

<p>All additional copyright to this transcript can be considered waived, and it can be freely reused with or without attribution to me. Video copyright details are available at the YouTube link.</p>
</details>
</div>

<span class="transcript-speaker">Rob Monster, YT0:00:00:</span> ... working hypothesis is that it was a backup. And I'm not going to say where the backup was found but I believe it was a backup and it wasn't the live data. I don't think that there is an active vulnerability that would have allowed that scale of data haul. But we're going to find exactly where it was, we're going to find exactly how it was moved, and...

<span class="transcript-speaker">Monster, YT0:00:28:</span> <span class="transcript-note">[reading question from chat. Full question in chat was asked by "nf84": "Why are you putting breach in quotes? Do you not believe the breach happened...?"]</span> No, I think that there was a non-active host. Not our production system. It had a backup, as we were doing remote backup of our data, and I think that was intercepted. And we'll figure out exactly how it was done, and cyber forensics people will navigate that, and they will advise us on what we should do, and law enforcement's involved.

<span class="transcript-speaker">Monster, YT0:01:05:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "JorgeOrwell": "He's in a state of denial. I've looked at just the file list from the torrent and it's data from multiple systems."]</span> No, not a state of denial, come on bro. Yeah, I mean yeah there was a hijack of data that should not have been hijacked. I don't think there's any way to deny that. I think that the data was intercepted and the method that was used to be able to intercept that data was a method that I think is subject to review. So we haven't made a formal statement along those lines, what we've done is we've announced to our customers, "hey, your personal data may be out there" and encouraged people to... 

<span class="transcript-speaker">Monster, YT0:01:52:</span> <span class="transcript-note">[reading the chat. Full question in chat was asked by "RobRocks": "Can anyone hear anything hes saying"]</span> "can anyone hear anything"... yeah, I think my microphone's working. Can you guys hear me? Yeah, well anyway I don't know that it is a breach of our production systems, I think that's the wrong word. I think that there was a backup that was hijacked and that it's making the rounds and there are a bunch of guys who I actually think are cursing themselves by trafficking in that data. I can unpack that if you want, but it's not a good move. 

<span class="transcript-speaker">Monster, YT0:02:20:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "nf84": "Breach of a back up server is still a breach."]</span> Yeah no, breaches of a backup server is still a breach, yeah. I guess, you know, you can get into like wordsmithing and whatever, you know. It is a data privacy problem, and it requires...

<span class="transcript-speaker">Monster, YT0:02:37:</span> <span class="transcript-note">[reading question from chat. Full question in chat was asked by Mikael Thalen: "Are reporters cursing themselves for reporting on the breach?"]</span> "are reporters cursing themselves reporting the breach?" I think there are reporters that are cursing themselves because they're engaging in propaganda. I think that journalism used to be kind of an honorable practice. It was about basically truth and empowering people to make informed decisions and I think somewhere in the last 30 years the economic model changed because there was no longer money to be made selling subscriptions. And as the world became more digital, there was more of an emphasis on online ads. And most of the newspaper industry failed to transition from the current method of monetizing through subscription and print ads, which were very lucrative, to a model that was viable for paying expensive salaries with online ads. Almost nobody wants to pay the paywall so what do you do? You basically become like [_Huffington Post_](https://en.wikipedia.org/wiki/HuffPost) and like [_Gizmodo_](https://en.wikipedia.org/wiki/Gizmodo) and operations like that basically are whores. They sell their influence to people that want to write big checks and... Easy money, because you don't have to basically collect money from that many people, but the problem is if you're a journalist and you work for one of these organizations, you have to kind of sell your soul. So I think that's probably not great economics, right? So if you like make a buck and curse your soul I think it's not worth it.

<span class="transcript-speaker">Monster, YT0:04:20:</span> So... <span class="transcript-note">[reading chat. Full comment in chat was from "JorgeOrwell": "Yes well (sic) all know how fringe political sites, like gatewaypundit engage in advertising fraud."]</span> [_Gateway Pundit_](https://en.wikipedia.org/wiki/The_Gateway_Pundit)... they're not a client I don't think. You can check that. I think Jim Hoft, I know his work. They got booted from Twitter,[^fn1] and I think... here's the thing, right? I think that nations get the leaders they deserve. So when you have people who are not great at self-governing, they get dictators, right? When you look back in history, two nations that had great leaders that were, like, empowering and whatnot, a lot of them were very much focused on self-governance. Even like [Gaddafi](https://en.wikipedia.org/wiki/Muammar_Gaddafi), who people say was this terrible despot tyrant, he was like pro-free education and a lot of other free benefits advancing the cause of its people. And somebody decided that it was time to just basically take his stuff, and so they rolled in and took his stuff. Now why is that relevant to _Gateway Pundit_? I think that Twitter has to make a call around who do they give the microphone? And we have to make that same call too. We routinely have to de-platform sites that we think are not engaging in self-governance. [8chan](https://en.wikipedia.org/wiki/8chan) came to our platform without warning, they showed up on like a Sunday night, and by Tuesday morning they were gone. I think _Gateway Pundit_ was booted by Twitter, but if you look at their journalism, not all of it is really showing great discernment. I think that's one of the great challenges that a lot of platforms like Twitter have, which is who do you give the microphone?

<span class="transcript-speaker">Monster, YT0:06:15:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "@JorgeOrwell IMO there aren't many lies, but journalists don't really understand what they're writing about. They don't understand the difference between a web host and a registrar. Or the distinction between a hack of a live system and theft of a backup (though you can use credentials from the backups to get access to the live systems, so long as you're quick, which is probably what happened do (sic) to the defacement of the knowledge desk."]</span> "in my opinion there aren't many lies but journalists don't really understand what they're writing about. They don't understand the difference between a [web host](https://en.wikipedia.org/wiki/Web_hosting_service) and a [registrar](https://en.wikipedia.org/wiki/Domain_name_registrar) or the distinction between a hack of a live system and a theft of a backup where you can use credentials from the backups to get access to the live system..." Yes, that's a problem. "...so long as you're quick, which is probably what happened to the defacement of the knowledge..." Yes, that's exactly what happened. So there was a user, you can look it up, there was a user like "alp", alp@epik.com. His credentials were in one of the files and so people used that to post some stuff on the WordPress blog.[^fn2] And we cleaned it up, but that's where they got it. They also got a [Coinbase](https://en.wikipedia.org/wiki/Coinbase) API key and they tried to move a hundred grand out. We shut that down. So, sorry, no hundred grand for you, hopefully you don't get prosecuted too badly, but it's with the forensic people at Coinbase, so hopefully nobody goes to jail. Nice try though, because you almost got a hundred grand, but no luck, not happening. So if anybody's boasting about getting a hundred grand they got nothing. But you might get trouble. So, that's all I can tell you about that. If you guys think that there are still bad API keys or things that we missed with regards to credentials that are hanging out there, let us know. We pay [bug bounties](https://en.wikipedia.org/wiki/Bug_bounty_program) and we're pretty reasonable guys and you have my direct email address.

<span class="transcript-speaker">Monster, YT0:08:00:</span> <span class="transcript-note">[reading chat. Full comment in chat was from Mikael Thalen: "I saw unhashed credit card data stored in [plain text](https://en.wikipedia.org/wiki/Plaintext)"]</span> "...unhashed credit card data..." I am a bit mystified by that, because we actually store just the last four digits. We don't actually store a full card. So I don't know what that was, unless possibly there was some caching going on in which case, you know, bad form, shouldn't happen. And yeah, I mean, our team... we've done like eleven acquisitions in the last three years and we raised a significant amount of money not that long ago, from a billionaire, freedom-minded guy. No board seat, [common stock](https://en.wikipedia.org/wiki/Common_stock), and so in other words he just wants to empower people to basically have the opportunity to search for truth and to do the right thing. I'm the sole board director, founder, CEO. But in the process of doing those acquisitions and raising that capital, what we assembled was really capable people, and some of the different business units that we've acquired came with really really talented technologists, and we're working on basically retooling the development organization. In fact, because of this incident we formed a technical core team. I've been kind of the acting CTO if you look at the org chart, well, it's not public. But we have like 80 people and not all of them are staff, some of them are like overseas contractors and whatnot, but there's about 80 staff in various capacities across our various business units. And so the outcome of what we saw here, where really not many people... This will sound strange, so the Russian dev team historically was very guarded about the code base for the legacy core registrar, and up until like six months ago, right? I mean we did an acquisition of Amplify.io, so a licensed [crypto exchange](https://en.wikipedia.org/wiki/Cryptocurrency_exchange), and we acquired a company called Substratum and both of those acquisitions came with <span class="transcript-note">[noise from some other participant, Monster mutes himself but continues speaking]</span>

<span class="transcript-speaker">Monster, YT0:11:05:</span> It's me. I tried to mute the new person but I muted myself, that's me. So when we... this will sound funny. When this breach occurred, I think for many of our top engineers this was the first time they saw the code. And that sounds really stupid, but the history of Epik is that we acquired a company called IntrustDomains back in 2011. Let me give you the story. So 2009, Epik gets started. We're like a domain name asset management company, we set up these websites, we figure out ways to create content, put them on exact match domains, and then Google indexed them and they made a lot of money because Google used to weight the domain name very highly in their algorithm. And then like in 2010, like around October, there was [Google Panda](https://en.wikipedia.org/wiki/Google_Panda) and they kind of took the punch bowl away, and our business model was just trash. Actually in the fourth quarter of 2010 and in the first quarter of 2011 we actually had negative revenue because we were reimbursing people who had bought sites from us that were not making money because Google deindexed all of them. And so I had to make a decision do I fold the tent and shut down Epik, or do I retool and come up with a new business model? So I didn't draw salary for a long time. We made a decision that a client, or a supplier, that we were working with at the time called IntrustDomains based in Colorado Springs, they were providing software for [drop catching](https://en.wikipedia.org/wiki/Domain_drop_catching). So when the domain name expires you drop catch it. They were providing us with drop catching services. But their customer service was atrocious, and so I flew down to Colorado Springs, talked to Ken Palm who's the founder and owner, and I said, "Ken, you guys are really, really bad at customer service. Why don't you sell me your registrar and let me run that registrar?" And so he agreed, and he didn't charge me a ton, and so we bought that company, and it came with a Russian development team. So this was 2011, I think. June 2011.

<span class="transcript-speaker">Monster, YT0:13:35:</span> <span class="transcript-note">[reading that chat. Full comment from chat was from "anon2839451": "cant hear or see anything"]</span> and so yeah, anon, I don't know, I can see it here, yeah so we're good. Just maybe refresh or try another browser.

<span class="transcript-speaker">Monster, YT0:13:49:</span> So we ended up acquiring this company, and it came with a Russian dev team. At the time they were based in the Ukraine, or in the Crimea region. Then there were wars and then they moved to [Krasnodar](https://en.wikipedia.org/wiki/Krasnodar), and they're based there. They're pretty talented, but the legacy codebase of the early Epik... <span class="transcript-note">[reading the chat. Full comment from chat was from "JorgeOrwell": "So you bought some shitty russian code and never fixed it? [MD5s](https://en.wikipedia.org/wiki/MD5). Rob common (sic) man"]</span> Yes, shitty Russian code. We bought some shitty Russian code and we actually didn't really have an opportunity to evaluate that code until we finished, until we really took control over everything. If you look, if you go to Epik Labs, epik.com/labs, we have a full catalog of a lot of other things that we've been developing.

<span class="transcript-speaker">Monster, YT0:14:47:</span> Yo, yo, video! [Kirtaner](https://twitter.com/ThatNotoriousK)![^fn3] <span class="transcript-note">[unintelligible]</span> bro! <span class="transcript-note">[clapping]</span> God bless you bro! You are the man! I was getting tired of talking to myself. Oh man. What's up bro?

<span class="transcript-speaker">Kirtaner[^fn3], YT0:15:03:</span> Hello!

<span class="transcript-speaker">Monster:</span> Where you from?

<span class="transcript-speaker">Kirtaner:</span> Canada.

<span class="transcript-speaker">Monster, YT0:15:06:</span> Canada, all right. I'm in Seattle, Washington. It's around seven o'clock, sun's gonna set, it's gonna get dark behind me but... good to see you. Alright, so yeah, so like truth... truth, people. We acquired a company, they were protective of the code, I used to be a developer, my first job out of college was I was a systems analyst for [Procter & Gamble](https://en.wikipedia.org/wiki/Procter_%26_Gamble). I used to code in, like, [Clipper](https://en.wikipedia.org/wiki/Clipper_(programming_language)). Back in the days, like database compilers and stuff, back in the day. I have a pretty good understanding of databases, data structures, but I'm not the lead coder, don't claim to be one. I have a pretty good concept of high level architecture, I'm very conscious of ecosystems. People would characterize me as having decent vision. We have done 11 acquisitions in the last three years and a lot of times that's basically a story of trading one dream for another, and so we've been really fortunate because we've self-funded pretty much all of that. And then in June of this year, we raised $32 million. And we ended up basically being able to just dramatically...

<span class="transcript-speaker">Monster, YT0:16:45:</span> <span class="transcript-note">[reading the chat. Full comment from "nf84": "This feels like a shareholders earnings call"]</span> Yeah "it feels like a share..." yeah, whatever I'm just keeping it real. I'll ask anything, I'm here all night. My wife and daughter flew down to Austin, Texas to go and... my daughter is a rower, she's like a serious rower, and she did Olympic development program in the summer time, so she's like legit good. So she got a bid from University of Texas in Austin to go row for them. So I skipped that to hang back to deal with this crisis. So that's why I'm not in Austin tonight.

<span class="transcript-speaker">Monster, YT0:17:11:</span> So, alright, so you guys want to talk about Joey Camp. You guys want to talk about Joey Camp? Let's talk about Joey Camp. So okay, Joey Camp.

<span class="transcript-speaker">Kirtaner, YT0:17:25:</span> Joey Camp [social engineered](https://en.wikipedia.org/wiki/Social_engineering_(security)) my [ISP](https://en.wikipedia.org/wiki/Internet_service_provider) in April and terminated my fucking service for a week.

<span class="transcript-speaker">Monster, YT0:17:29:</span> Alright well you know what? I'll tell you a story about Joey Camp. So Joey Camp is... <span class="transcript-note">[reading the chat. Full question is from "nf84": "Can you explain who he is? I'm out of the loop"]</span> "can you explain who he is?" So Joey Camp is a client. He runs the site YourDaddyJoey.com,[^fn4] which is a thorn in [Chad's](https://twitter.com/chadloder) side. Chad, if you're listening, love you bro. I believe in you, you're a very smart man, very articulate, and very handsome, and I'm not gay. And if anybody's gay, I don't judge you either, God loves you. But very articulate, very charismatic, drops a few too many f-bombs. But that site, YourDaddyJoey, is in the business of basically outing bullies and thugs. People who engage in stuff that he considers to be unlawful. And I believe his "why" is this: as I understand it, and again I've never met him, I don't know him that well, but he once told me that his sister was killed by some antifa member because she was in the wrong place at the wrong time and ever since then he's been like a like a Batman. He's like this, like, justice warrior dude who operates by his own moral code. And he gets himself, I think, into some trouble. Like he does private investigation kind of stuff, and at one point... and this is like, I'm keeping it real guys. So at one point I needed help tracking down a guy in Tampa. Hey!

<span class="transcript-speaker">Kirtaner, YT0:19:20:</span> <span class="transcript-note">[unintelligible]</span> from Tampa!

<span class="transcript-speaker">Monster:</span> Alright.

<span class="transcript-speaker"><a href="https://en.wikipedia.org/wiki/Rocco_Castoro">Rocco Castoro</a>:</span> I'm from Florida!

<span class="transcript-speaker">Monster, YT0:19:25:</span> Alright, so Joey, so I asked him, I said, "can you track down this guy? His name is Donny and he lives in Tampa." And he runs a service that we rely on, and he like never pays out. And I'm like "this is really weird". And I had heard a rumor that he'd become mixed up in drugs and was in and out of rehab. But I was like, "I just want to know he was alive!" So I said, "Joey can you help me track down this guy?" And he's like, he says, "I'm in Tampa, I'll get back to you in a few hours." And then like a few hours later he sends me this note, he's like, "yeah!" I think it was a note... I don't know what it was, yeah note, chat, I forget what it was. [Telegram](https://en.wikipedia.org/wiki/Telegram_(software)), yes, Telegram. And he says "yeah, I found Don..." his name is Donny. "I found Donny, and Donny was at home." And he had like jumped the fence of a gated community to go get to Donny, to knock the door. And it's like, I would never condone that, right? Because there are laws, and there are like reasonable boundaries of private property, and so... but he operates based on his moral code. And I think that every now and then it's possible that he's a bully. I believe that I have seen evidence that he may have the capacity to be a bully. And I'm not a fan of that. I think that there's a place for calling out bullies and thugs for being bullies and thugs. Chad, if you're listening, I think you're a bully, I think you're a thug, but I also believe in your highest self and I think that you're a very gifted man and people should give you the opportunity to use your gifts in really mighty ways, and I think that'd be super awesome. And so I prefer that method, right? Which is to kind of believe in the highest self of the individual. And I think that the carnal lower self version of the vigilante may be prone to like taking an approach of taking justice into their own hands. And I think that's Joey. At his lowest self he uses his intellect and his extreme, like, dot-connecting ability... I mean the dude is like a world-class private investigator.

<span class="transcript-speaker">Castoro, YT0:22:09:</span> He's a piece of shit.

<span class="transcript-speaker">Monster, YT0:22:11:</span> Okay, but I would say that his tactics... if it involves like anything that's not lawful, I have a problem with that. But we've never we've never engaged him...

<span class="transcript-speaker">Castoro, YT0:22:24:</span> Do you think Jesus would be okay with what JoJo Camp's doing, sir? 

<span class="transcript-speaker">Monster:</span> You know what, I'll tell you what.

<span class="transcript-speaker">Castoro, YT0:22:35:</span> Do you see my eyes? Do you see how serious I am? Do you think JoJo Camp would be redeemed by Jesus?

<span class="transcript-speaker">Monster:</span> You know what? I'm not sure. I've never talked to him about his faith. 

<span class="transcript-speaker">Castoro, YT0:22:53:</span> Then why are you talking to us about our faith? Why are you hosting somebody who sends people to my house based off a Sue Basko token on [LexisNexis](https://en.wikipedia.org/wiki/LexisNexis)? And why do you think you can profit off that? 

<span class="transcript-speaker">Monster: YT0:23:09:</span> Well we don't profit off of that.

<span class="transcript-speaker">Castoro:</span> You do profit off of it. You run his servers, and you have, and you've known it, and you've admitted to Chad Loder, as well as other individuals, that you do that.

<span class="transcript-speaker">Monster, YT0:23:23:</span> So I think he pays like $7.95

<span class="transcript-speaker">Castoro:</span> I don't care what he pays, you profit off him. You profit off the suffering of others. That is not Christlike.

<span class="transcript-speaker">Monster:</span> Well listen, look. I think that people who are basically wrongly outed and that kind of thing, I think that needs to be...

<span class="transcript-speaker">Castoro:</span> Outed? Like what, like a Christian?

<span class="transcript-speaker">Monster:</span> No no no no no. Like Chad. You listen to those videos that are on that page, I mean Chad is talking about some heavy stuff, right? Would you agree? Is that a fair statement?

<span class="transcript-speaker">Castoro:</span> I've seen heavy stuff, what's your definition of heavy stuff?

<span class="transcript-speaker">Monster, YT0:24:02:</span> I'm talking about like arranging to give people beatdowns, and I mean you know. Watch the video, I mean the guy is talking about...

<span class="transcript-speaker">Castoro:</span> Right, but you host [Andy Ngo's](https://en.wikipedia.org/wiki/Andy_Ngo) site, and he posts stuff on like... what's the other site that his guy Trollan[^fn5] runs? It's like AntifaMugshots.com.[^fn5] I mean you literally host sites that result in direct action of people like [Tony Moon](https://www.huffpost.com/entry/californian-filmed-attacking-female-journalist-at-la-anti-vaxx-protest-linked-to-capitol-riot_n_611ac616e4b0f7bc26a8a6f0) coming to my house. Now I can explain that to you offline or online, however you like.

<span class="transcript-speaker">Monster: YT0:24:33:</span> No no, if you want to send me, send me stuff or <span class="transcript-note">[unintelligible]</span> Look, I mean the thing is, here's the deal. I run a company with like seven subsidiaries, 24 business units, you can look at Epik Labs, epik.com/labs, you'll see we have a lot going on. And we're growing really quickly, and so I wouldn't have the ability to keep track of like every page on every customer's website.

<span class="transcript-speaker">Castoro, YT0:25:03:</span> You have acknowledged...

<span class="transcript-speaker">Monster:</span> Stop, stop stop.

<span class="transcript-speaker">Castoro:</span> You know about these pages by [replying](https://twitter.com/robmonster/status/1437532355476983813) to Chad Loder's tweets.[^fn6] You brought it up, sir.

<span class="transcript-speaker">Monster:</span> Yeah yeah, let me finish. So like, I was privy to the abuse letter that Chad Loder sent, and I looked him up, and I watched his video, and I said, "you know what? This guy does not seem like a nice person." 

<span class="transcript-speaker">Castoro:</span> Alright, I can quote you on that?

<span class="transcript-speaker">Monster:</span> Yeah, it's fine. To which I said, that page was not indicating a guy that was basically operating according to what I would consider to be his higher self. Clearly very smart, and I don't know what all he has going on, but I mean clearly a guy he was capable of...

<span class="transcript-speaker">Castoro:</span> Let's forget about Chad Loder for a second. Do you know me, sir? Do you know me, sir?

<span class="transcript-speaker">Monster:</span> I have no idea who you are, tell me who you are. 

<span class="transcript-speaker">Castoro:</span> Well forget Chad Loder and forget... <span class="transcript-note">[crosstalk]</span> who cares? Who cares who I am? I'm the former editor-in-chief of [_Vice_](https://en.wikipedia.org/wiki/Vice_(magazine)), that is your antichrist. That's who I am.

<span class="transcript-speaker">Monster, YT0:26:20:</span> <span class="transcript-note">[laughing]</span> No, you guys are cool. _Vice_ is very cool.

<span class="transcript-speaker">Castoro:</span> No, fuck _Vice_. You're right. [Gavin McInnes](https://en.wikipedia.org/wiki/Gavin_McInnes) and [Shane Smith](https://en.wikipedia.org/wiki/Shane_Smith_(journalist)), they're both [Proud Boys](https://en.wikipedia.org/wiki/Proud_Boys). Let me tell you that. I'm going to leak audio that shows that Gavin left the company over his knowledge of an assault of an office manager that Shane allegedly committed. And he used that knowledge, and I have audio of Gavin admitting this on Christmas Eve while his kids are opening presents. Sound Christlike to you?

<span class="transcript-speaker">Monster, YT0:26:49:</span> I don't know that he's a Christian. <span class="transcript-note">[crosstalk]</span> As far as I know we don't host any Proud Boys websites.

<span class="transcript-speaker">Castoro:</span> You host at least six that have been found today and their names have been outed.

<span class="transcript-speaker">Nonster:</span> No no no. Are they live websites that are actually run by a Proud Boys organization?

<span class="transcript-speaker">Castoro:</span> ... historical data of 10 years, sir. I mean look at who you have on this call.

<span class="transcript-speaker">Monster, YT0:27:12:</span> Oh no no. Listen, I mean come on. Domain names are one thing, right? Another thing is to actually host a website that is engaging in lawlessness. We have an abuse team they will review every abuse case that comes...

<span class="transcript-speaker">Castoro:</span> Give me the name of your abuse manager right now please.

<span class="transcript-speaker">Monster, YT0:27:29:</span> abuse@epik.com and the woman's name is...

<span class="transcript-speaker">Castoro:</span> <span class="transcript-note">[unintelligible]</span> I've emailed them about 50 times so that's B.S. What's the name?

<span class="transcript-speaker">Monster:</span> By the way <span class="transcript-note">[crosstalk]</span> Just tell me your first name so I know...

<span class="transcript-speaker">Castoro:</span> Rocco. R-o-c-c-o C-a-s-t-o-r-o. You know what it means?

<span class="transcript-speaker">Monster:</span> Oh that's you!

<span class="transcript-speaker">Castoro:</span> That's me! You know what it means? It means beaver-fucking-nurse. Because Castoro is, it's the secretion gland of the beaver. And [Saint Rocco](https://en.wikipedia.org/wiki/Saint_Roch), when he put his hands on you during the plague? He'd heal you. And that's me. I'm your beaver nurse, sir.

<span class="transcript-speaker">Monster:</span> Nice.

<span class="transcript-speaker">Castoro:</span> Yeah, it is nice isn't it.

<span class="transcript-speaker">Monster, 28:16:</span> So like, is that like mind-altering kind of stuff?

<span class="transcript-speaker">Castoro:</span> I don't know, you tell me. Did your mind get altered just now or what?

<span class="transcript-speaker">Monster:</span> I don't know. Alright.

<span class="transcript-speaker">Castoro:</span> I'm pissed off, maybe I'm a client, maybe I'm not, who knows, it's Epik.com.

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[muted, but speaking]</span>

<span class="transcript-speaker">Castoro:</span> We will talk soon. Can I please have... offline, can you please follow me? I'm sick of this nonsense, and we're going to get down to brass tacks, sir. Please follow me back on Twitter. Have a good night.

<span class="transcript-note">[Unidentified]</span>: You are muted, Rob.

<span class="transcript-speaker">Monster, YT0:29:00:</span> I hit the "mute all" because there was background noise from somebody who came in. <span class="transcript-note">[reading chat. Full comment from "JorgeOrwell": "Beavers will heal you Rob"]</span> So yeah, beavers will heal you, right? So George, lay it on me bro, what should I know about the beavers? I gotta, I gotta learn this one. Beavers will heal you. That's a new one. I did not know this. I learn something every day and so... a beaver nurse, <span class="transcript-note">[reading the chat. Full comment from "JorgeOrwell": "well where do we start"]</span> "where do we start?" All right. <span class="transcript-note">[reading the chat. Full comment from "nf84": "All hail the beavers"]</span> "all hail the beavers". All right so if anybody's got intel on why beavers are good for you, send the email to beavers@epik.com, alright? So beavers@epik.com that I will totally read whatever you send me. <span class="transcript-note">[reading the chat. Full comment from "JorgeOrwell": "maybe the clitoris?"]</span> "maybe the clitoris?" Happily married, so I only know one of those. 

<span class="transcript-speaker">Monster, YT0:29:50:</span> All right guys, what else we got. Is [Chad](https://twitter.com/chadloder) on the call? I really want to talk to Chad. And [Steven](https://twitter.com/stevanzetti). I want to talk to Steven. Steven's got to be on this call, he cannot be missing this. Come on Steven, say hi.

<span class="transcript-speaker">Monster, YT0:30:06:</span> <span class="transcript-note">[reading chat. Full comment from "JorgeOrwell": "common (sic) guys"]</span> "come on guys" Gosh that's funny, aw man this is funny. <span class="transcript-note">[reading chat. Full comment from "nf84": "This is the greatest earnings call of all time"]</span> "This is the greatest earnings call of all time." Thank you. <span class="transcript-note">[reading chat, full comment from "JP": "I'm just a concerned customer listening in, I have some domains with Epik"]</span> That's cool, thank you JP, appreciate that. You have domains on Epik. So yeah, so like, let's talk about like the status of like the cybersecurity whatever that we're... We've brought in outside people, we have inside people. The big thing is, like, when we did these other acquisitions, we brought in some really really tip-top engineers, and those tip-top engineers are now in what I refer to as the tech core team. And they have taken full control over all the code, all the servers, all the keys, and they're cleaning house, and moving as quickly as possible. All the [Auth-Codes](https://en.wikipedia.org/wiki/Auth-Code) have been reset. The Auth-Codes that were out there were not live Auth-Codes, they were Auth-Codes from back in February, and we do rotate the Auth-Codes. No domains have gone missing, praise God, and I don't believe any assets of customers have been lost. I mentioned earlier in the call that somebody did try to exploit an old [Coinbase](https://en.wikipedia.org/wiki/Coinbase) API key. It kind of worked, but we shut it down in time, so that they're probably just going to get a bloody nose. Not from me, from Coinbase. But that was clever, because I had no idea that very old API key was still out there. So yeah, if you guys see some more... 

<span class="transcript-speaker">Monster, YT0:31:56:</span> <span class="transcript-note">[reading from chat. Full comment from "JP": "Have all Auth-Codes been reset/changed? Is there any risk to domains at this point, what security measures would you recommend customers take at this time?"]</span> Yeah, all the Auth-Codes have been changed. "Is there any risk to domains at this point... what security measures would you recommend customers take at this time..." So I would suggest [two-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication), and I would say reset to a strong password. That would be my advice, yeah. I would say that will be just about everything. Anybody else got any advice? I'd be happy to listen to anybody else's advice for how to secure accounts. One good news is that the single sign-on, and you guys would have figured it out by now, we have a [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on) product called Federated Identity. That product is going to be rebranded soon, it'll be called Valido.com...

<span class="transcript-speaker">Monster: YT0:32:45:</span> <span class="transcript-note">[reading from chat. Full comment from "nf84": "Change your passwords elsewhere if you reuse passwords across other sites (and stop doing that)"]</span>. I agree with you. "change your passwords elsewhere if you reuse the passwords". Yes, I think that's wise, because there are legacy passwords from before the Federated Identity switch, which is our single sign-on network that we use across the entire Epik [federation](https://en.wikipedia.org/wiki/Federation_(information_technology)), which is a modern code base, it's based on key cloak.

<span class="transcript-speaker">Monster: YT0:33:10:</span> <span class="transcript-note">[reading from chat. Full comment from "JP": "I recommend password manager, preferably one that can generate strong unique passwords"]</span>. Yeah, "recommend [password manager](https://en.wikipedia.org/wiki/Password_manager), preferably one that can generate strong unique passwords". I think a lot of people like [LastPassword](https://en.wikipedia.org/wiki/LastPass) <span class="transcript-note">[sic]</span>, I think [1Password](https://en.wikipedia.org/wiki/1Password), there's another one that people like. I'm not really a big fan of storing passwords in the cloud, but if you have a trusted cloud, then then go for it. Hey!

<span class="transcript-speaker">Unidentified, YT0:33:31:</span> That is not what your data showed.

<span class="transcript-speaker">Monster:</span> Yeah no you missed it right? I don't know if you've been catching up on any of this stuff, but the story here is that legacy code from the Russians that we acquired...

<span class="transcript-speaker">Monster, YT0:33:45:</span> <span class="transcript-note">[reading chat. Full comment from "nf84": "1Password stores only encrypted passwords in the cloud, so no biggie"]</span>. Yeah, "stores only encrypted passwords in the cloud so no biggie". Yeah, I agree. You just have to remember your private key. <span class="transcript-note">[reading chat. Full comment from "JP": "1Password is what I recommend"]</span>. 1Password. Yeah, I think you're right, I think that's what we've deployed.

<span class="transcript-speaker">Monster, YT0:33:55:</span> So, yeah, so the Russian developers that came from the acquisition of IntrustDomains back in June 2011. I think they were like kind of PHP devs, I don't think they were using modern frameworks. And a lot of that legacy code was still hanging out there, and it is being pretty much retooled, migrated, in fact the entire platform will be rewritten. There's a lot to that stuff, to be a registrar and to cover like 1200 [TLDs](https://en.wikipedia.org/wiki/Top-level_domain), registries, accreditations. That takes some serious engineering. Yo yo! Oh we have... she left. She just changed, she went video. That was cool, that was super cool. It looked like a Halloween costume. So yeah, so that's, that's the story. And if anybody wants to help with [pen testing](https://en.wikipedia.org/wiki/Penetration_test), drop us a note. We'll definitely work with pen testers.

<span class="transcript-speaker">Unidentified:</span> Do we have to tell you first? 

<span class="transcript-speaker">Monster, YT0:34:59:</span> No, you don't. I mean you could pen test us. I think that's what people do.

<span class="transcript-speaker">Monster, YT0:35:06:</span> <span class="transcript-note">[reading chat. Full comment from "JorgeOrwell": "I would migrate my domains to a host that isn't run a(sic) 'christian libritarian(sic)". Free market principles are in play here"]</span> But so yeah, so there's some questions here about "I would migrate into a host that isn't run by Christian libertarian". Yeah so, tough one right? So I guess what I mean by that is that I think we're all on the journey, I think the truth sets you free, I think people should be allowed to be self-governing. Small government. And people who are not self-governing will ultimately be ruled over by dictators, and that's not a great outcome. So better to create an environment, or having the opportunity to be self-governing. That's kind of what I mean by being a libertarian who happens to be a Christian. I hope that helps.

<span class="transcript-speaker">Monster, YT0:35:56:</span> <span class="transcript-note">[reading chat. Full comment from "JP": "I'm upset at the security incident at Epik, but my anger isn't towards Rob specifically, he's just human."]</span> "upset at the security incident at Epik but my anger isn't towards Rob..." Yeah no, thank you, I appreciate that, JP. Yeah we... we did not nail that one. I think quite candidly that was some serious weak code, like hard-coding API keys... just weak sauce. And in reality, like I said earlier in the call, our top engineers mostly hadn't seen that code because it was kind of blackboxed, behind a firewall, separate [git](https://en.wikipedia.org/wiki/Git) repository, and not part of the Epik git. And that might sound surprising... <span class="transcript-note">[pauses to blow nose]</span> sorry, I have a cold... considering that we're like a registrar, but that's basically because of the history of how that company became part of Epik. It was an acquisition, it is a [captive](https://www.accelerance.com/blog/hybrid-vs.-captive-which-outsourcing-method-makes-the-most-sense) dev team, and I've operated with that group to a large extent on the basis of trust. They're good people, they're honorable people, ethical, responsible people, but their coding methods and frameworks are not up to standard, and they've pretty much handed over all the keys to two top guys, [Justin Tabb](https://www.linkedin.com/in/justintabb), David Roman. And they're they're doing a great job diving into the code. And there were some very unpleasant discussions, very heated conversations, because some of the team hadn't seen the code until until it was exposed. That might sound a little bit crazy but you have to keep in mind that we've grown really quickly around a core registrar, and if you want to know the history, I'll tell you a story. You guys mind a digression? I'll tell you a story. So up until July 2018... yo yo! Welcome! I'm Rob, nice to meet you. So July 2018, right, I've been running for the last three years as a consultant, kind of interim exec, a company called DigitalTown. You could look it up, it was on pink sheets. It's still existing but it's pretty much defunct. I did a TED talk, it's actually a banned TED talk, and it was about DigitalTown. I can share it, I have a copy. So July 2018, I'm kind of in this boardroom struggle with the group that was running the company at the time, and we go on vacation, cruising in the Mediterranean, like around August 17. Middle of the Mediterranean underneath a Persian meteor shower and I'm looking up at the sky. Beautiful, clear night, like endless stars, and I have absolute clarity that the Lord is going to need a registrar. It's the closest thing to a calling I've ever experienced.

<span class="transcript-speaker">Monster, YT0:39:20:</span> <span class="transcript-note">[reading the chat. Full comment from "JorgeOrwell": "This reads like an obituary."]</span> Yeah, hang in with me, not an obituary. And so I dropped everything and focused exclusively on Epik. And then in the next three years we've done all these acquisitions, but what was the triggering event? So from August 2011, no, August 2018 until October 2018 I'm like like "what's going on? Like, why am I doing?" You know, don't feel like I have exact clarity on what it means to be focused on running Epik. And then this [Gab](https://en.wikipedia.org/wiki/Gab_(social_network)) thing happens. [Gab was like abruptly deplatformed](https://en.wikipedia.org/wiki/Gab_(social_network)#Hosting_and_termination_of_services_by_web_services_providers) by [GoDaddy](https://en.wikipedia.org/wiki/GoDaddy), and it's like a $300,000 domain, and I'm thinking to myself "this is crazy". It makes no sense to me that you would be removing like a $300,000 domain and then throwing it in the trash can and carrying it permanently so that nobody will buy it. And so I did a call with [Andrew Torba](https://newrepublic.com/article/163285/andrew-torba-gab-white-christian-internet). I'm like, "hey, Andrew, what's going on?" And we had a good call. I got a sense that this was not an angry man unless... he had angry moments, but I'm saying that he's not an angry man. and I agreed... <span class="transcript-note">[reading chat. Full comment from ".": "interesting" with [ASCII art of a cow](https://en.wikipedia.org/wiki/Cowsay)]</span> "interesting". Yeah, cool, nice job. So I agreed to kind of take him on, and of course the moment I did that... this was right after like the [Tree of Life thing that happened in Pittsburgh](https://en.wikipedia.org/wiki/Pittsburgh_synagogue_shooting). We got lit up. It was like October 28, 2018. It was right before the election. And so we got lit up. The media just went to town. And all kinds of stuff unfolded. And then we just had a series of opportunities, stuff came to us. We acquired a company called [BitMitigate](https://en.wikipedia.org/wiki/Epik_(company)#Acquisitions) run by a dude named [Nick Lim](https://en.wikipedia.org/wiki/Nicholas_Lim_(entrepreneur)). Some of you guys probably came across his work. Mercurial dude. He doesn't work for us, but he had clients like [_Daily Stormer_](https://en.wikipedia.org/wiki/The_Daily_Stormer), and we ultimately parted ways with _Daily Stormer_, and in part... I never spoke with the head of _Daily Stormer_...[^fn7]

<span class="transcript-speaker">[Steven Monacelli](https://twitter.com/stevanzetti), YT0:41:30:</span> Do you still provide directing services to _The Daily Stormer_? Like are you forwarding...

<span class="transcript-speaker">Monster:</span> No, no.

<span class="transcript-speaker">Monacelli:</span> You said that to me on the phone, though. That you are still providing...

<span class="transcript-speaker">Monster:</span> Hi, Steve! 

<span class="transcript-speaker">Monacelli:</span> Yeah hey! What's up Rob!

<span class="transcript-speaker">Monster:</span> Hey, what's going bro? How are you? Sorry, sorry for your pain.

<span class="transcript-speaker">Monacelli, YT0:41:49:</span> Oh, well, if you were sorry you would comment on if you condone Joey Camp's actions in retaliation... 

<span class="transcript-speaker">Monster:</span> Well, let's stay on topic.

<span class="transcript-speaker">Monacelli:</span> No, no, you said you would answer anything. This is on topic.

<span class="transcript-speaker">Monster:</span> Okay, I'm going to mute you first. So I get to finish my story and then I get to...

<span class="transcript-speaker">Unidentified:</span> It's absolutely on topic.

<span class="transcript-speaker">Monster, YT0:42:00:</span> No no no, let me finish, let me finish the story, and then I'm going to come to Steve's question. Right, fair? Alright. So... I'm the moderator. But I promise I will listen to everybody. I will not leave until all your questions are answered. We can go all night. It's okay. My wife and daughter are in Austin so I have the house to myself. If the dog has to pee he's got a diaper on. So, October 2018, we get lit up because of this Gab thing. Because of that we basically had to become vertically integrated in everything. So we're like a [registrar](https://en.wikipedia.org/wiki/Domain_name_registrar); a [host](https://en.wikipedia.org/wiki/Web_hosting_service); we acquired multiple [data centers](https://en.wikipedia.org/wiki/Data_center); [content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network); [denial of service mitigation](https://en.wikipedia.org/wiki/DDoS_mitigation); we're an [intermediate root certificate authority](https://en.wikipedia.org/wiki/Root_certificate), that's DNEncrypt; we run our own [ASM](https://en.wikipedia.org/wiki/Any-source_multicast), IP ranges, [BGP instances](https://en.wikipedia.org/wiki/Border_Gateway_Protocol); we normally run our own [VPN](https://en.wikipedia.org/wiki/Virtual_private_network), we took Anonymize.com down for maintenance because we wanted to make sure that the keys were all tidy so nobody was using corrupted keys. But we basically have assembled kind of end-to-end theoretical digital resiliency. When you basically figure out a way to hijack a backup of Epik at some other host that's not controlled by us, then of course it looks like we're like totally clowns and we don't know what we're doing. And there are aspects that would suggest that we don't know what we're doing, but there are aspects that show that we do know what we're doing, and we're closing the gap. So that's the background about how Gab became a client and then Epik...

<span class="transcript-speaker">Monster, YT0:43:50:</span> <span class="transcript-note">[reading chat. Full question from "nf84": "did epik host parler or only gab?"]</span> Yeah we helped Gab a little bit with this stuff. And [Parler](https://en.wikipedia.org/wiki/Parler), we don't host Parler. We're a registrar for... so that's why... 

<span class="transcript-speaker">Kirtaner, YT0:44:22:</span> <span class="transcript-note">[loud feedback sound]</span> Is my microphone fixed? There it is. Hi everybody! 

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[mutes self, continues speaking]</span>

<span class="transcript-speaker">Monacelli:</span> Is the sound busted? What the hell's going on here? 

<span class="transcript-speaker">Unidentified:</span> Rob accidentally muted himself again.

<span class="transcript-speaker">Monster:</span> Alright. I tried to mute other people so that we wouldn't have to listen to Kirtaner talking to himself. Steve, you go.

<span class="transcript-speaker">Monacelli, YT0:44:44:</span> Yeah, so this is something that I asked you on the phone about and you didn't want to comment on. I've emailed your lawyer, per your request, two days ago. Hasn't gotten back to me. It's been more than 48 hours at this point. And I'm wondering if you're, one, aware of what Joey Camp is using your web services to do and, two, if you condone it. And I'm happy to explain to you exactly what he is doing if you are unaware.

<span class="transcript-speaker">Monster:</span> Yeah actually later on... <span class="transcript-note">[crosstalk]</span> By the way, by the way, when I told you about your story being a nothingburger, I wasn't talking about anything related to this data thing.

<span class="transcript-speaker">Steve Monacelli:</span> So you were talking about [the Overoptic Systems connection](https://bylinetimes.com/2021/09/08/texa-anti-abortion-bounty-hunting-website-now-hosted-in-the-uk/), you were talking about <span class="transcript-note">[unintelligible]</span> Q host, all those things, right?

<span class="transcript-speaker">Monster:</span> I was talking about... you were all about, like, us working with the Russians and I was like, "no..."

<span class="transcript-speaker">Monacelli:</span> No, I didn't say anything about that. I said you have shell companies that are based in the UK, but let's get back to the point... <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Monster:</span> All right, but I just want to clarify, I just want to clarify. Let me finish, I will listen to you. I promise. I will listen to you. I will. Just take turns. So the Russian thing. The reason why I called it a nothingburger was, you called me, we talked for 15 minutes, off the record, and I was trying to explain that this whole thing about Russia was irrelevant because...

<span class="transcript-speaker">Monacelli, YT0:46:10:</span> So I actually never said anything about Russia. I was talking about the United Kingdom.

<span class="transcript-speaker">Monster:</span> Yeah, yeah, I get it. But you were talking about like in the context of [prolifewhistleblower](https://en.wikipedia.org/wiki/Texas_Heartbeat_Act#Aftermath)...

<span class="transcript-speaker">Monacelli, YT0:46:20:</span> I'm talking about connections to shell companies with directors in Switzerland and Crimea.

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[making "time out" hand signal]</span> Okay. Time out. Let's take turns. I will totally talk to you.

<span class="transcript-speaker">Monacelli:</span> You're not even addressing my point, though, I want to talk about Joey Camp.

<span class="transcript-speaker">Monster, YT0:46:32:</span> How much cocaine did you do today? Come on, let's just chill.

<span class="transcript-speaker">Monacelli:</span> No no no. Wow. Wow. Wow.

<span class="transcript-speaker">Monster:</span> Just... just... just relax, right? We will take turns.

<span class="transcript-speaker">Monacelli, YT0:46:43:</span> Your customer has sent me my social security number.

<span class="transcript-speaker">Monster:</span> That's not good.

<span class="transcript-speaker">Monacelli:</span> Yeah!

<span class="transcript-speaker">Monster, YT0:46:53:</span> I agree. That's not good. So I will have a conversation. I don't know if it'll be tonight, but I'll have a conversation with Joey.

<span class="transcript-speaker">Kirtaner, YT0:47:03:</span> Will ya?

<span class="transcript-speaker">Monster:</span> Yeah! My deal with Joey is...

<span class="transcript-speaker">Kirtaner:</span> Ask him about me sometime!

<span class="transcript-speaker">Monster:</span> Yeah yeah yeah. If you guys have profiles that are not accurately representing your truth...

<span class="transcript-speaker">Kirtaner, YT0:47:17:</span> demonhackers.com,[^fn8] I'm right there front and center.

<span class="transcript-speaker">Monster:</span> I had no idea. Thanks for the background. Demon hackers, that's you?

<span class="transcript-speaker">Kirtaner:</span> Hi!

<span class="transcript-speaker">Unidentified:</span> That is him.

<span class="transcript-speaker">Monster:</span> Wow, that is nuts. 

<span class="transcript-speaker">Monacelli, YT0:47:33:</span> So yeah, to be clear, Joey Camp is engaged in a harassment campaign against myself, a few other journalists... And what he does is he posts public information that he should not have access to, and then he sends people to message you. He has people who have sent me my social security number, my driver's license number, my address, he's posted my family's address, he's told me that he will... he keeps posting about how he's gonna basically "ruin me" and this, that, the other. And he's trying to threaten and extort people. He has a pattern of doing this, there are tons of people...

<span class="transcript-speaker">Monster:</span> He has no money. He has no money.

<span class="transcript-speaker">Monacelli:</span> It doesn't matter if he has money! It doesn't matter if he has money. It doesn't matter if he has money! It matters that you are providing web services to him that allow him to do this.

<span class="transcript-speaker">Monster:</span> That's fair. Alright, so, like, let's be fair. So when it comes to prolifewhistleblower, we had them take it down.

<span class="transcript-speaker">Monacelli:</span> Yes, you did, that's correct.

<span class="transcript-speaker">Monster, YT0:48:32:</span> Thank you. <span class="transcript-note">[reading from chat, full comment from "nf84": "Why do you guys yell when you speak? Calm down"]</span>. "why do you guys yell when you speak? Calm down." I agree. Am I too loud?

<span class="transcript-speaker">Monacelli:</span> Because you're skipping around. You need to talk about what I'm asking about, otherwise

<span class="transcript-speaker">Kirtaner:</span> He's full of energy!

<span class="transcript-speaker">Monster, YT0:48:47:</span> Okay, so [we de-platformed prolifewhistleblower](https://www.washingtonpost.com/nation/2021/09/06/texas-abortion-ban-website/) because they were engaging in [doxing](https://en.wikipedia.org/wiki/Doxing), and we thought that was not a useful practice...

<span class="transcript-speaker">Monacelli:</span> What do you think Joey Camp is doing?

<span class="transcript-speaker">Monster:</span> Take turns... prolifewhistleblower as an idea was ill-conceived.

<span class="transcript-speaker">Monacelli:</span> Is Joey Camp doxing? Is Joey Camp doxing? Is Joey Camp doxing?

<span class="transcript-speaker">Monster:</span> Alright, I'll mute you, you're not behaving. Come on, otherwise we're gonna kick you out. Come on. Alright, so I called [Jim Graham](https://www.politico.com/story/2018/07/26/texas-anti-abortion-group-tacks-to-the-right-dividing-state-republicans-708639), executive director, son of the founder of a 46-year-old organization. And I said to Jim, I said, "Jim, what part..." he claims to be a Christian, I think he is. "What part of what you're doing for like outing people for participating in abortion procedures is Christlike? God doesn't like tattlers." And so I advised him to take the site down and redirect it to his [Texas Right for Life](https://www.cbsnews.com/news/planned-parenthood-restraining-order-texas-right-to-life/) site. And, true story, the reason why they couldn't do it that night was because Texas Right for Life was actually hosted in one of the staff's homes. It was not actually at a data center, and they would have been blown up with bandwidth. And so they engaged [RightForge](https://www.foxbusiness.com/technology/big-tech-fight-web-hosting-company-conservatives-cancel-proof-alternative) to, who I don't, I didn't know until the next day when they called me, to move their hosts to RightForge. And that's who they're with now. And we also told them to move their domain. So prolifewhistleblower came to us unannounced and we sent it away. It's doxing and it's not cool. Now, Steve, you have...

<span class="transcript-speaker">Monacelli, YT0:50:38:</span> Simple question: is Joey Camp doxing?

<span class="transcript-speaker">Monster:</span> You know what? I think that the content that is on that site... I haven't studied it very closely...

<span class="transcript-speaker">Monacelli, YT0:50:52:</span> [You shared a link](https://twitter.com/robmonster/status/1437532355476983813) to it a few days ago to [Chad Loder](https://twitter.com/chadloder).[^fn6]

<span class="transcript-speaker">Monster:</span> Yeah, no, I got it.

<span class="transcript-speaker">Monacelli:</span> And I'm asking, what is your definition of doxing?

<span class="transcript-speaker">Monster:</span> Yeah, I leave that to the attorneys. 

<span class="transcript-speaker">Monacelli:</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster, YT0:51:08:</span> No, seriously! If I felt that you were an honorable guy, Steve, I think that the site would come down. I think free speech exists and...

<span class="transcript-speaker">Monacelli:</span> Wait wait wait wait. I just wanna... do you think that, if I were deemed honorable by who, that the site would come down?

<span class="transcript-speaker">Monster:</span> No, the page.

<span class="transcript-speaker">Monacelli:</span> Yeah the page. By whom? Who would have to...

<span class="transcript-speaker">Kirtaner:</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster, YT0:51:32:</span> Alright, demon. Hang out. 

<span class="transcript-speaker">Unidentified:</span> You talk a lot about libertarian values, Rob, and you just said a word here that is definitely confusing, and I see Steve's point. The idea that if he was honorable, that leaves the question open of: who indeed is the arbiter of "is Steve honorable?"

<span class="transcript-speaker">Monster, YT0:51:55:</span> Well, come on. So Steve called me out of the blue and my cell phone is pretty easy to find...

<span class="transcript-speaker">Monacelli:</span> I had emailed you and you responded to the abuse line that I emailed... <span class="transcript-note">[crosstalk]</span> 

<span class="transcript-speaker">Monster:</span> That's fine. I don't hide myself, I'm pretty easy to find, right guys? I'm easy to find.

<span class="transcript-speaker">Monacelli:</span> I know, I know that. I'm wondering if you can just really help me understand: what do you mean when you say doxing?

<span class="transcript-speaker">Monster:</span> Yeah no... you know Steve? I think that.. I think that... there are a bunch of pages that should come down. Because exposing home addresses, if that's happening...

<span class="transcript-speaker">Monacelli:</span> It's what's happening to me and my family right now, on your client's website.

<span class="transcript-speaker">Monster:</span> Right, and I told you I'm gonna talk to Joey. That's not tonight, it'll be tomorrow.

<span class="transcript-speaker">Monacelli:</span> I mean I can give you his phone number, he's texting me nonstop. I'm sure he'll pick up. Tonight.

<span class="transcript-speaker">Monster:</span> I'll get it.

<span class="transcript-speaker">Monacelli:</span> Why don't you do it now, in front of all of us, it would be awesome.

<span class="transcript-speaker">Monster, YT0:52:56:</span> I understand. But I have a request. I have a request.

<span class="transcript-speaker">Monacelli:</span> Is this an ultimatum or is this a...?

<span class="transcript-speaker">Monster:</span> No no no, it's a request. It's not an ultimatum. I'm not into ultimatums. I have a request. <span class="transcript-note">[reading from the chat. Full comment from Mikael Thalen is "Every minute you leace (sic) it up Rob the more harm is caused"]</span> So yeah, "every minute you leave it up, more's done". Yeah, so I think it should come down. I think that the page should come down. But I have a request, and that is when you called me with your Russian stuff and whatever, there was an effort to vilify and condemn Epik and I don't think that was an accurate, fair representation of Epik.

<span class="transcript-speaker">Monacelli, YT0:53:44:</span> I asked you for clarification. If you can provide me with the exact understanding of why [all of these things are pointing to Overoptic systems, NatCoWeb Corp, and Tinhat](https://bylinetimes.com/2021/09/08/texa-anti-abortion-bounty-hunting-website-now-hosted-in-the-uk/), I don't understand these connections and that's why I called you. But since you were unwilling to provide me any clarity regarding those connections, I reported on what is publicly available information.

<span class="transcript-speaker">Monster, YT0:54:08:</span> Yeah, I mean the problem is that so much of the content that is out there, like [_Huffington Post_](https://en.wikipedia.org/wiki/HuffPost) and like, a whole list. Like you go look to the Wikipedia page... I mean, do you guys get how subverted Wikipedia is? You realize how much of a [globalist](https://en.wikipedia.org/wiki/Globalism#Right-wing_usage) tool that thing has become? You get that? Is that, like, lost on people?

<span class="transcript-speaker">Monacelli, YT0:54:28:</span> So I'm not talking about Wikipedia. I'm talking about the web domain registration that I was able to link, and I explained to you over the phone...

<span class="transcript-speaker">Monster:</span> Steve. Steve. I'm gonna get that page taken down, alright? Alright?

<span class="transcript-speaker">Monacelli:</span> Thank you. I appreciate that. And as soon as possible, within a reasonable amount of time, because I have emailed... <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">Monster: YT0:54:54:</span> I understand. I understand. I'm gonna get that page taken down for you. And all I ask in return, and it's an ask, it's not an expectation, it's not conditional, it's an ask. There are some aspects of the "left media" that has been very unfair to Epik and to me personally. I don't think anybody in good conscience or good faith could conclude that what is being distilled on the likes of Wikipedia and by the likes of [_Huffington Post_](https://en.wikipedia.org/wiki/HuffPost) and many other... [Vice Media](https://en.wikipedia.org/wiki/Vice_Media)...

<span class="transcript-speaker">Monacelli:</span> Or the [Southern Poverty Law Center](https://en.wikipedia.org/wiki/Southern_Poverty_Law_Center)?

<span class="transcript-speaker">Monster:</span> Southern Poverty Law Center. Not quite the bane of my existence but it's like right up there. [Michael Edison Hayden](https://twitter.com/MichaelEHayden), [_Hatewatch_](https://www.splcenter.org/hatewatch), I mean...[^fn9] These dudes I think are not being truthful. I think that they are engaging in a willful form of deception, and I will happily... I've actually taken his phone call in good faith, I've listened, I've spoken with him. But after you're betrayed multiple times, where you talk to people in good faith and you answer their questions...

<span class="transcript-speaker">Monacelli, YT0:56:16:</span> Your conversation with me was not in good faith, Rob. You did not want to say anything on the record.

<span class="transcript-speaker">Monster, YT0:56:22:</span> No, well, because I have an understanding from my lawyers to not be talking to journalists, and really...

<span class="transcript-speaker">Monacelli:</span> You're talking to journalists right now <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster:</span> I'm going off script, right? I'm slightly maverick, okay? But I just decided, here it is, Yom Kippur, Day of Atonement, sunset in Hawaiʻi is very soon, and I just think it's important to clear the air. I'm not a fan of seeing people cursed, bearing sins that they don't need to bear. And I just think...

<span class="transcript-speaker">Monster, YT0:57:09:</span> <span class="transcript-note">[reading the chat. Full comment from "wt": "happy new year mr monster"]</span> Thank you, W.T., love you man, appreciate that. I just want to clear the air and I want to make peace. I want to make peace. So if there are sites, or pages, that need to come down because they're engaging in gross malfeasance, then let's have unity and truth. Let's stop with the lies, let's stop with the propaganda, let's try to appeal to each other's highest self, and create an outcome that creates abundance.

<span class="transcript-speaker">Monacelli:</span> I think it's a great idea...

<span class="transcript-speaker">Unidentified:</span> You first! 

<span class="transcript-speaker">Monacelli:</span> ... it's a great idea, Rob, and if you have any corrections or any... if you would like to better explain to folks the connections to the shell companies I identified and the UK servers, I am a journalist and I issue corrections when I'm wrong. But I have to be shown that I'm wrong, and that is why I called you, because I was hoping to get some clarity, which your conversation with me did not provide.

<span class="transcript-speaker">Monster, YT0:58:12:</span> Alright, so stand by. Stand by. Just as a gesture of good faith, let's disable the DNS of your... the [A record](https://support.dnsimple.com/articles/a-record/) of YourDaddyJoey, shall we?

<span class="transcript-speaker">Monacelli:</span> I would love to do this live.

<span class="transcript-speaker">Monster, YT0:58:25:</span> Alright, let's do this live. Sorry Joey. We're going to do this. Bear with me here. 

<span class="transcript-speaker">Kirtaner:</span> demonhackers.com would be a great thing to go away, just saying...

<span class="transcript-speaker">Monster:</span> Yeah, one second here. I don't want to break email, right? So let's just see what we got here. Host records, yeah alright so we're gonna just take the site down. And he told me, he told me that if he goes too far that I can take him down. So I'm going to take him down. A record is offline, you guys. Sorry, not yet. This domain is actually under max-lock. We actually have a service called max-lock that if his account was compromised you couldn't actually take him down, but I could take him down. So YourDaddyJoey, good faith gesture guys, here we go.

<span class="transcript-speaker">Kirtaner, YT0:59:38:</span> I actually really appreciate this.

<span class="transcript-speaker">Monster:</span> Oh no guys, I mean the thing... 

<span class="transcript-speaker">Monacelli:</span> I really appreciate this, Rob, I really do. And I will be sharing this immediately because this is something that, it means a lot to my family who have been getting harassing phone calls from Joey...

<span class="transcript-speaker">Kirtaner:</span> Likewise.

<span class="transcript-speaker">Monster, YT0:59:56:</span> Well, and I think it needs to be kind of a boundaries thing with Joey. Joey needs to also step up and man up and being accountable.

<span class="transcript-speaker">Monacelli:</span> He has demonstrated no interest in being held responsible for his actions and no regard for consequence whatsoever.

<span class="transcript-speaker">Monster, YT1:00:26:</span> Swastika? What the heck? That's quite a tat. Is that a breast? That's a male breast. Look at that, how about that.

<span class="transcript-speaker">Monacelli:</span> Yeah, [weev](https://en.wikipedia.org/wiki/Weev)? Yeah, that guy.

<span class="transcript-speaker">Monster:</span> Who is it?

<span class="transcript-speaker">Monacelli:</span> Oh, he's a convicted cybercriminal that was the web host of _The Daily Stormer_.

<span class="transcript-speaker">Monster:</span> Oh, so you guys know who he is? <span class="transcript-note">[loud noise]</span> Oh, okay, he's got an attitude.

<span class="transcript-speaker">Unidentified:</span> Well I also wanted to just say how much I, just as someone who's been following the story and not necessarily someone who's involved in it, I very much am impressed by the willingness to to go beyond your lawyer's advice and things, and come transparently and talk to people in an open way about everything, and to make such a gesture like that in front of everyone, to say like "look as a gesture of good faith this is what I'll do". Because I think that's so much of what we lack today in our society and especially in like the public eye, is an accountability and transparency of our actions, and our ability to just be reasonable people about things that have gone wrong and things that are going wrong.

<span class="transcript-speaker">Monster:</span> Yeah.

<span class="transcript-speaker">Monacelli, YT1:01:48:</span> Also it's great to see it happen somewhat within a reasonable time frame, because Joey's stuff has been on there for years at this point and there's been a lot of people who've tried to get something to happen, and get that stuff removed. And I'm glad it's happened within a few days at this point. Because, yeah, it's helpful and we appreciate it. And I look forward to seeing it propagate on my browser.

<span class="transcript-speaker">Monster:</span> Yeah, the [TTL](https://en.wikipedia.org/wiki/Time_to_live) is 300 seconds so it should already be down.

<span class="transcript-speaker">Monacelli:</span> I'm not seeing it.

<span class="transcript-speaker">Monster:</span> The TTL is 300 so it should already be down, but anyway the rest of the world can't see it.

<span class="transcript-speaker">Monacelli:</span> I'm refreshing it.

<span class="transcript-speaker">Monster:</span> Yeah, just change your [DNS provider](https://en.wikipedia.org/wiki/Public_DNS_resolver). If you were using [8.8.8.8](https://en.wikipedia.org/wiki/Google_Public_DNS) use [1.1.1.1](https://en.wikipedia.org/wiki/1.1.1.1) or something.

<span class="transcript-speaker">Unidentified:</span> It does look down.

<span class="transcript-speaker">Monster:</span> It's down.

<span class="transcript-speaker">Monacelli:</span> Oh, awesome.

<span class="transcript-speaker">Monster, YT1:02:43:</span> I do this for a living. So weev, weev. Let's talk for a second. So what's going on...

<span class="transcript-speaker">Kirtaner:</span> It's been a while.

<span class="transcript-speaker">Monster:</span> Why the angry man thing? What's that about?

<span class="transcript-speaker">weev:</span> I don't know man, I can ask you that <span class="transcript-note">[connectivity issues]</span> why so angry, Rob? Are you gonna shoot up something? Are you a danger to other people? You seem mad a lot, I don't know, you're too extreme for me man, you're too hardcore.

<span class="transcript-speaker">Monster, YT1:03:20:</span> Oh, uh, well. Much love to you actually. You and I have not met before, I've heard of your name "weev" before. I had no idea that you had an enormous swastika tat on your chest, but evidently other people knew that so yeah. <span class="transcript-note">[unintelligible crosstalk]</span> What? Anyway, so weev, seriously like what's the deal? What's your "why"? What's going on?

<span class="transcript-speaker">weev:</span> I don't know man. <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster:</span> Come on, is that like rhetoric or is that like legit what motivates you?

<span class="transcript-speaker">Monacelli:</span> It doesn't fucking matter, Rob. And I just want to real quick, I want to check: hey Rob, can you make sure to commit that if Joey brings up his site under any of the other domain names that he's registered with you that you'll do something the same thing about it?

<span class="transcript-speaker">Monster:</span> I told you I'm going to have a substantial one-on-one conversation with him where we set boundaries and conditions about what the conditions are for him bringing the site back online. Alright?

<span class="transcript-speaker">Monster, YT1:04:22:</span> So weev. Did he leave? Did weev leave?

<span class="transcript-speaker">Unidentified:</span> No he's there, he's off to the side.

<span class="transcript-speaker">Monster:</span> Oh okay good. So weev, seriously bro. What's your "why"? Like what gets you up in the middle of the night, for real?

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[laughter]</span>

<span class="transcript-speaker">weev, YT1:04:38:</span> <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Unidentified:</span> What's happening right now?

<span class="transcript-speaker">Monacelli, YT1:05:24:</span> So weev, weev, just confirming: how would you describe these beliefs? Is there an ideological term to describe the beliefs that you're espousing?

<span class="transcript-speaker">weev:</span> Yes absolutely, it's traditionalism.

<span class="transcript-speaker">Monacelli:</span> Oh no, you're not...

<span class="transcript-speaker">weev:</span> It's what any of my great grandfathers would believe. And any of your great grandfathers, in fact, <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monacelli:</span> Not my great grandfathers, you asshole.

<span class="transcript-speaker">Monster:</span> Come on.

<span class="transcript-speaker">weev:</span> It's what anyone's great grandfather believes <span class="transcript-note">[connectivity issues]</span>

<span class="transcript-speaker">Monster:</span> I apologize Steve, I owe you an apology for that. Uh go ahead, so weev.

<span class="transcript-speaker">weev:</span> <span class="transcript-note">[connectivity issues]</span> ...very temporary experience, let me tell you, that's about to end. The Western neoliberal order is about to collapse on itself 

<span class="transcript-speaker">Monster:</span> I agree with that

<span class="transcript-speaker">weeva:</span> <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster, YT1:06:26:</span> Here's the part that I agree with. I agree...

<span class="transcript-speaker">Monacelli:</span> I'm getting the fuck out of here because this is now just a fucking Nazi conversation. Have fun y'all.

<span class="transcript-speaker">Monster:</span> Alright, Steve.

<span class="transcript-speaker">weev:</span> I don't support Nazism. I'm not a fan of Nazi ideology. I think it's kind of wishy-washy, and I'm not a fascist in general actually. I don't like fascism as a system...

<span class="transcript-speaker">Unidentified:</span> Is your tattoo ironic?

<span class="transcript-speaker">weev:</span> <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Unidentified:</span> You also have really bad Internet there in [Tiraspol](https://en.wikipedia.org/wiki/Tiraspol).

<span class="transcript-speaker">weev:</span> Huh?

<span class="transcript-speaker">Monster:</span> So is this tattoo thing like a big part of your identity? Or do you like regret ever...

<span class="transcript-speaker">weev:</span> Oh, it's part of my religion. It's a religious tattoo, not an ideological tattoo.

<span class="transcript-speaker">Monster:</span> What's your religion? What's it called? 

<span class="transcript-speaker">weev:</span> I'm, uh, I'm like uh... <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster:</span> Alright, well. Tell you what weev. Can you tell us your real name? Or do you just go by weev?

<span class="transcript-speaker">weev:</span> Andrew Auernheimer.

<span class="transcript-speaker">Monster, YT1:07:42:</span> Okay got it. I've heard of you. I've heard of weev. And some people think you're a scary guy, but I would just say, just figure out a way to get along. There's just no real reason to kind of like engage in these identity politics. Are you like personally all about this or are you just feeding the polarity because somebody pays you? Like legit.

<span class="transcript-speaker">weev:</span> Oh no, I'm pretty honest. <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster:</span> Alright, alright.

<span class="transcript-speaker">weev, YT1:08:37:</span> That's not something in newfangled identity politics. It has nothing to do with identity politics. <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster:</span> Right, but would you acknowledge that the founding fathers were actually Christians?

<span class="transcript-speaker">weev:</span> Oh yeah certainly, absolutely <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Monster:</span> ...didn't identify <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Unidentified:</span> Most slave owners were Christians.

<span class="transcript-speaker">Monster:</span> Yeah, you know...

<span class="transcript-speaker">weev, YT1:09:01:</span> <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Unidentified:</span> You can be slaves, you want to be my slaves?

<span class="transcript-speaker">Monster:</span> You could be, that's cute. I agree. I think you should probably try to walk in somebody else's shoes and be her slave for a while and see how it feels. But seriously though, I don't think that the founding fathers had a mindset with regards to being intolerant. I don't think that they were as intolerant...

<span class="transcript-speaker">weev:</span> The norms that I have listed... <span class="transcript-note">[redacted]</span> What I'm talking about is not a fringe ideology.

<span class="transcript-speaker">Unidentified 1:</span> There's many many different kinds of families <span class="transcript-note">[unintelligible]</span> no idea what you're talking.

<span class="transcript-speaker">Monster:</span> Okay can you put your video on? They didn't see who was talking. I muted you weev, I'm sorry, you were rambling on and I figured it was two guys talking at the same time. So there's a woman trying to speak, I think she has something intelligent to say. Go ahead. She left?

<span class="transcript-speaker">Unidentified 1, YT1:10:50:</span> Yeah, you just have no original ideas and you really haven't made any successes at all and you're really delusional basically. That's about it.

<span class="transcript-speaker">Monster:</span> I am? I am?

<span class="transcript-speaker">Unidentified 2:</span> No, weev. I mean, you too, but no, weev.

<span class="transcript-speaker">Unidentified 1:</span> No weev is super delusional. Are you kidding me?

<span class="transcript-speaker">Monster, YT1:11:08:</span> I agree. Weev? I gotta tell you bro. I don't think that you're very enlightened. We're all on a journey, we're all on a journey but I'm just not feeling like you're really enlightened dude. I will pray for you tonight. <span class="transcript-note">[background noise]</span> I can't tell if he's trying to speak to us or if he's talking to himself. I just muted him because he looks like he was talking to somebody else. Alright so the woman who was speaking, she was calling out weev for not having original ideas. Yeah I agree, I think that this is sketchy. weev, not a fan bro, but I believe in your highest self and I really hope that you will try to make peace with people and not... you said at the very beginning about wanting genocide or whatever. That's just not gonna work out for you. 

<span class="transcript-speaker">Unidentified:</span> He's being an edgelord.

<span class="transcript-speaker">Monster:</span> You're not being nice. Yeah, I think he's being edgelord. And oh by the way, I gotta tell you this, this is a true story. [Chris Cantwell](https://en.wikipedia.org/wiki/Christopher_Cantwell), the guy they call the Crying Nazi? I talked to him one-on-one and he was actually a nice guy in one-on-one. His whole thing of like "kill this, hate this" whatever? It's an act. It's a schtick. He is fully capable of being a nice guy. As for weev, I'm trying to figure out if he's like legit a hater or if it's just a way to make a buck. It's not clear to me.

<span class="transcript-speaker">Monacelli, YT1:12:45:</span> Hey Rob, so I know I said I was gonna leave because this was a Nazi conversation but I just wanted to inform you of another domain that you may want to take a look at. It's called antifawatch.com. It also belongs to Joey.

<span class="transcript-speaker">Monster:</span> What's it called? Antifawatch?

<span class="transcript-speaker">Monacelli:</span> Antifawatch.com, he also doxes people on that website.

<span class="transcript-speaker">Monster:</span> Alright we'll take care of that one too, how about that.

<span class="transcript-speaker">Monacelli:</span> Thanks man, I appreciate it.

<span class="transcript-speaker">Monster:</span> I'll take care of this one. And then I'm gonna have a conversation. I'm making a leap of faith here that I can basically... I don't see it, antifawatch.com is not an Epik domain. I don't see it.

<span class="transcript-speaker">Monacelli:</span> Okay, that's good to know. I guess it's somewhere else.

<span class="transcript-speaker">Monster:</span> I don't think it's at Epik. Maybe somewhere else, but it's not that Epik. His email's still working though, so you can still probably email him or something. Joey and I will have a conversation, I promise you that. The thing is, children have many fathers. I'm not sure what his relationship is with his dad, and I feel like I could probably help him out to kind of like be a...

<span class="transcript-speaker">Monacelli:</span> Actually, I'm looking at the [ICANN](https://en.wikipedia.org/wiki/ICANN), you may want to look up the ICANN registration because it says the privacy administrator is Anonymize, Inc.

<span class="transcript-speaker">Monster:</span> Yeah, just look at the registrar, I don't think... 

<span class="transcript-speaker">Monacelli:</span> Well yeah but you guys are providing web services to him.

<span class="transcript-speaker">Monster:</span> Possibly. We're not the...

<span class="transcript-speaker">Monacelli:</span> Yeah, Anonymize is your subsidiary.

<span class="transcript-speaker">Monster:</span> That's the [WHOIS privacy proxy](https://en.wikipedia.org/wiki/Domain_privacy). I will check that. I will check to see if antifawatch.com has any hosting from Epik, but we're not the registrar, so I don't have an easy way to just turn it off.

<span class="transcript-speaker">Monacelli:</span> Okay cool, but as long as you're... the privacy administration is also a problem.

<span class="transcript-speaker">Monster, YT1:14:34:</span> Well obviously there's not a lot of privacy if a snapshot from a <span class="transcript-note">[unintelligible]</span> backup is out on the web.

<span class="transcript-speaker">Monacelli:</span> Right, and there's not a lot of privacy when we're talking about doxing sites either. 

<span class="transcript-speaker">Monster, YT1:14:46:</span> Alright, so look guys. Here's the thing. I believe that dataset that's floating out there is cursed. It's stolen data. 

<span class="transcript-speaker">Unidentified:</span> It's cursed?

<span class="transcript-speaker">Monster:</span> I strongly advise... yeah it's cursed. I believe that it's cursed. I don't think it ends well. You know it's funny, because, why did I do this? Why did I say "okay let's have it out"? Every year on the Day of Atonement, Yom Kippur, you're supposed to clear your debts. I went, made sure I checked all my invoices, whatever, made sure that everybody was paid and I think I succeeded. And then also that you've settled your arguments with various people. So anyway I don't want to have any kind of differences with a bunch of folks. The Bible says when a man's ways please the lord, even his enemies are at peace with him. If somebody has a beef with me, then I'm happy to have it out, trying to figure out what the deal is.

<span class="transcript-speaker">Monster, YT1:15:45:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "/usr/bin": "Bibles a Psyop"]</span> The Bible's not a [psyop](https://en.wikipedia.org/wiki/Psychological_warfare). That's bad info, sorry. BIBLE stands for "best instruction before leaving earth". I think that's pretty good. <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "I can't get into the religious stuff. God probably isn't real to be honest."]</span> Alright, you can't get into this religious stuff you can ignore it. So yeah if anybody else has problem sites that are really engaging like bad, bad stuff that you could never defend in the light...

<span class="transcript-speaker">Unidentified:</span> gab.com 

<span class="transcript-speaker">Monster, YT1:16:11:</span> Alright, let's talk about [Gab](https://en.wikipedia.org/wiki/Gab_(social_network)). So [Andrew Torba](https://newrepublic.com/article/163285/andrew-torba-gab-white-christian-internet) is much more of a free speech absolutist than I am. I am not a free speech absolutist. The free speech absolutist people sometimes get mad at me because I actually have a condition, which is that it needs to edify. And the question is does the content in the aggregate edify? And I think the answer is yes. And the reason why I say that is because the Gab people have been pretty much booted off of Twitter and whatnot, and to the extent that Gab basically governs itself and doesn't allow unlawful content and doesn't allow genocidal people... weev, for example, is almost surely not on Gab. I'm pretty sure that he would be removed, just like Chris Cantwell with this edgelord stuff. It's just not fun, it really gets tiresome. So yeah if there is...

<span class="transcript-speaker">Monster, YT1:17:16:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "/usr/bin": "Gabs a Psyop"]</span> Somebody says Gab's a [psyop](https://en.wikipedia.org/wiki/Psychological_warfare). I don't... no. Is it theoretically possible that Torba is an operator? I don't know. I can't tell. People say that about [Alex Jones](https://en.wikipedia.org/wiki/Alex_Jones), also a client. I don't know, I never met him, never talked to him. We hired one of his guys, Michael Zimmerman, Director of I.T., from <i>InfoWars</i>, but tough to say. I do believe this, I'll tell you what: I believe that there's a polarity, this whole right, left, fat, skinny, rich, poor, gay, straight... it is a giant polarity. For the last two, three decades it's been divide and rule, create a dynamic where you just get people to rub up against each other, and just kill the crap out of each other and exhaust each other. The right fears the left, the left fears the right, and it's super stupid. It's a game. If you fell for it, sorry. The right doesn't really need to fear the left, the left doesn't really need to fear the right. There have been antifa people, some of you are on this call, who have come at me and stuff, and I offered to meet with them for coffee in Seattle. They didn't want to meet. I wasn't gonna hurt anybody. Just like this, I'm just happy to have a conversation, get real, and solve stuff. Because at the end of the day I think there has to be a basis for being able to find truth. If you treat the whole universe as a giant puzzle and somebody arbitrarily decides to take away half the puzzle pieces, what good does that do you? 

<span class="transcript-speaker">Monster, YT1:19:10:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "/usr/bin": "So would you say Epik helps run psyops? Epiks a psyop"]</span> "so you would say Epik helps run psyops..." No, Epik's not a psyop. We're not a psyop.

<span class="transcript-speaker">Unidentified:</span> But wait, if you're talking about taking away half of the puzzle pieces and you read the Bible then what do you think about the [Council of Nicaea](https://en.wikipedia.org/wiki/First_Council_of_Nicaea) where they removed half of the Bible?

<span class="transcript-speaker">Monster:</span> Oh man, I tell you what! No you're right, I think that was bullshit. I think that [Book of Jasher](https://en.wikipedia.org/wiki/Sefer_haYashar), if you can find the one that is not put out by the [Rosicrucians](https://en.wikipedia.org/wiki/Rosicrucianism), good read. [Book of Enoch](https://en.wikipedia.org/wiki/Book_of_Enoch), good read. [Maccabees](https://en.wikipedia.org/wiki/Books_of_the_Maccabees), all four books, good read. Lots of great scripture that's not canonical will help you connect the dots. I think there's tremendous wisdom. On my Twitter, oh no, not my Twitter, internally I posted a [Laozi](https://en.wikipedia.org/wiki/Laozi) quote this morning. [The one that's about your thoughts, it goes down the character](https://www.goodreads.com/quotes/8203490-watch-your-thoughts-they-become-your-words-watch-your-words), right? What the thoughts lead to this lead to this. The head bone's connected to the cheekbone, whatever. Okay so your thoughts basically ultimately define your character. You don't have to believe in a deity to know that's probably true. 

<span class="transcript-speaker">Monster, YT1:20:20:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "/usr/bin": "prayer meeting is a psyop"]</span> "PrayerMeeting is a psyop..." No, not a psyop. It's a free thing. So when this COVID thing was going on, non-denominational, we said okay can we create a tool and host it for free? We host this, there's no recording, there's no surveillance. If somebody's recording it, it's not me, let's just say it that way.

<span class="transcript-speaker">Monster, YT1:20:20:</span> <span class="transcript-note">[reading chat. Full question in chat was from "Pyramid King Reuben": "Rob, what's your take on [Spinozan pantheism](https://en.wikipedia.org/wiki/Spinozism)"]</span> "What's my take on Spinozan pan..." I don't know, I am not schooled. Pyramid King Reuben, lay it on us, what do we need to know about Spinozan pantheism? You have to talk, if you want to tell us. Alright, he had a chance.

<span class="transcript-speaker">Monster, YT1:21:04:</span> So what else we got? Demon spawn, the Canadian guy, Kirtaner?[^fn3] You there?

<span class="transcript-speaker">Kirtaner:</span> Yeah I'm here. It's pronounced kir-tanner. But yes demonhackers.com is another one of Joey's properties, yes.

<span class="transcript-speaker">Monster:</span> So there's somebody in the chat that said you did the hack, is that true?

<span class="transcript-speaker">Kirtaner:</span> No. First of all, no I didn't do the hack. Second of all, I would never ever ever ever admit to a federal crime in a space like this. I mean what kind of question is that? God.

<span class="transcript-speaker">Monster:</span> Okay, I did not mean to offend.

<span class="transcript-speaker">Unidentifed:</span> He's here for the same reason Steven was. There's a site that has all his dox that Joey's running, demonhackers.com.

<span class="transcript-speaker">Monster:</span> But which is the site? We took that site down, the problem site.

<span class="transcript-speaker">Kirtaner:</span> Yeah, demonhackers would be a redirect to another page for somebody from Distributed Denial of Secrets, and that's a big overview page that's got me, a couple of my friends, that stuff.

<span class="transcript-speaker">Monster:</span> Got it. So hypothetically, I'm not saying it was you. Hypothetically, how would someone have accomplished it? Because from my interpretation, there was a backup on a host that we will not name, and that's all it was. I'm not aware of a successful penetration of Epik. Would you like to comment on that?

<span class="transcript-speaker">Kirtaner, YT1:22:30:</span> I do know that there were valid [SSH](https://en.wikipedia.org/wiki/Secure_Shell) keys in the dump, and as far as I'm aware...

<span class="transcript-speaker">Monster:</span> Ah, but that's different. But the actual start of the penetration was accomplished by getting a copy of a backup. Is that a fair characterization?

<span class="transcript-speaker">Kirtaner:</span> I don't know. I haven't examined the dump to that degree, so I couldn't comment on that.

<span class="transcript-speaker">Monster, YT1:22:54:</span> Alright, but you have intimate familiarity with the person who was involved with the alleged hack...

<span class="transcript-speaker">Kirtaner:</span> No!

<span class="transcript-speaker">Monster:</span> No, I'm not saying that you're it. I'm not asking you to condemn yourself. And I'm not here to mess with your life. I'm not really a litigious person. We hired lawyers just because we have to deal with state AGs or whatever, in the event that we do, we have to basically govern ourselves in a way that is responsible. The first order of business was to basically cure whatever was out there, we reset all the Auth-Code and did everything basically textbook basically be able to fix the problem, and hired outside experts to just pound the crap out of the site to see if there were any vulnerabilities. I think we cured them. If we didn't, please send me a note, rob@epik, I will happily appreciate any assistance, guidance. Some of you guys are super duper knowledgeable on a level that I will never attain. We all have our gifts, I'm not a hacker, I try not to get messed up... so yeah if you have more stuff or you've seen stuff in our code that's really really bad... yes, I know there's a lot of bad legacy code, I got it. But if there's an imminent vulnerability in the code that you think needs to be breached, or needs to be cured, please drop a note. I will return the favor I promise.

<span class="transcript-speaker">Unidentified:</span> Do you have an active [bug bounty program](https://en.wikipedia.org/wiki/Bug_bounty_program) where you pay what it's worth? 

<span class="transcript-speaker">Monster, YT1:24:27:</span> Yes. bugs@epik.com. Yes we do. In fact, funny you should ask. We have a very talented young developer in Belgium. His name is Guy. Like "Guy" but Belgians pronounce it "gee", French. And Guy is developing a bug submission platform. We also have started a company that you might have come across called Cybermarks, and it is a cybersecurity boutique. You might say "wow guys, you guys are such clowns, why would you start a cybersecurity company?" Well, yeah. So the idea is... what can we do? So we hired a bunch of South Africans, like an elite team of cybersecurity people. They only were at it for a couple of months in terms of setting up their operation. They were working for a high-level firm. And they're Kingdom guys, so they work for the Kingdom. They're Christians. And the company that was employing them wanted to do some stuff that they didn't feel comfortable with, and so they quit as a cohort, four of them, actually eight of them, but four elite cybersecurity guys, and we hired them. So that was about a month and a half ago. So Cybermarks.com is a division that's being incubated by Epik. But I think we're gonna hire quite a few heavy-duty cybersecurity guys, so if you're on the side of good, you want to basically turn from the dark side or whatever. If you're [white hat](https://en.wikipedia.org/wiki/White_hat_(computer_security)) and you want to be a force for good, Cybermarks would be a fantastic organization to be a part of I would say. We're a pretty cool company, guys. I know that we look like clowns to some of you when you look at the cover, but check out epik.com/labs.

<span class="transcript-speaker">Monster, YT1:26:28:</span> We're working on a [single sign-on platform](https://en.wikipedia.org/wiki/Single_sign-on) called Valido, valido.com. We have single sign-on. So the passwords that you saw in that data dump, they're not they're not actual, because the passwords are actually governed by the single sign-on. We pivoted to a [Keycloak](https://en.wikipedia.org/wiki/Keycloak)-based SSO platform early this year, back in January. So we have not been on that SSO that you saw, that is in the database which is legacy passwords. But there are... the [MD5 wasn't salted](https://svanas.medium.com/why-an-unsalted-md5-hash-is-bad-practice-6a0d7d017856), I mean, there was just a bunch of ineptitude in there. And thankfully we were not using that, it's not production, and I think for legacy reasons they never dropped those columns in the tables. They should have because they, as somebody in the chat, in the Twitter comment section, talked about how it was not unsalted MD5, MD5 hash. So it was kind of below standard. So that's the reason why...

<span class="transcript-speaker">Monster, YT1:27:36:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "I don't know how many people will sign up to a cyber security service from Epik, if we're being honest. maybe just don't brand it with 'Epik', spin that off somehow"]</span> "...I don't know how many people will sign up with..." So yeah, I got it. So I'm just saying, so, to the extent that you guys are aware, this notion of a cyberpandemic, [Klaus Schwab](https://en.wikipedia.org/wiki/Klaus_Schwab), the [World Economic Forum](https://en.wikipedia.org/wiki/World_Economic_Forum), check it out.[^fn10] He goes on, <span class="transcript-note">[German accent]</span> "there comes this cyberpandemic". This guy. To the extent that there's going to be a cyberpandemic, that's going to be an opportunity to create a lot of value. So just like the guys who made the viruses also sold the antiviruses. So let's figure out a way to make a buck and use it for good as opposed to bad stuff.

<span class="transcript-speaker">Monster: YT1:28:20:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "How much user data was unencrypted and stored in plain text? I'd like to hear more about that and the MD5"]</span> "how much user data... I'd like to hear more about that..." Yeah, I'm not the expert on MD5. Salted, unsalted, don't ask me about encryption, I'm not a genius in this stuff. I'm happy to introduce you, if anybody...

<span class="transcript-speaker">Kirtaner:</span> From what I saw, it was bad.

<span class="transcript-speaker">Monster, YT1:28:37:</span> Yeah, I agree it was bad. Absolutely. And if you missed it, the developers that we got from the Russian team, they're kind of [captive](https://www.accelerance.com/blog/hybrid-vs.-captive-which-outsourcing-method-makes-the-most-sense). A dev team that's captive. They're not Epik employees, the legacy Russian dev team. They're part of our team, they're part of our culture, I trust them implicitly, they're like brothers. Many of them are Christians. And you know, we have Jews, we have Muslims, that's not a statement, I'm just saying that we have some common code of conduct. And they've been great, they've always been honorable, fair. They're smart, diligent, call them at three in the morning to get out of bed, do whatever. But I think now that we've seen the code, a bunch of stuff's gonna get rewritten. It was already in motion, and I mentioned earlier about a couple of really capable senior devs that we've since added. They are coming on board, they've already come on board because of these recent acquisitions and some new hires, and they are completely retooling the entire development workflow. We use... I think you would be impressed by the coding methods and frameworks and protocols. You can look up David Roman and [Justin Tabb](https://www.linkedin.com/in/justintabb). Capable guys. And then Michael Zimmerman, the ex-director of I.T. at [_InfoWars_](https://en.wikipedia.org/wiki/InfoWars). He's not a coder, but he has a lot of experience with migrating people out of [AWS](https://en.wikipedia.org/wiki/Amazon_Web_Services). We did acquire a data center, a company with two data centers, underground data centers. And we acquired two other hosting companies, one in Portugal and one in Bangladesh. We haven't announced those deals, but we do have a considerable amount of vertical integration now in hosting infrastructure.

<span class="transcript-speaker">Monster, YT1:30:44:</span> So we're going to get our ducks fully in a row, and my guess is within six months we will be fairly competent in the cybersecurity arena. And if there are people that are like hardcore hackers that want to be on the side of good, making...

<span class="transcript-speaker">Monster, YT1:31:00:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "Hosting in Bangaldesh (sic). Interesting"]</span> "Hosting in Bangladesh, interesting..." ... then we have jobs, we have raised considerable amount of money and we're happy to employ honorable people. I don't think weev is gonna be able to submit his resume. I just don't think he's got a great vibe about him, so if you're an asshole then we don't really want to have you hanging around and spewing garbage. But if you want to turn the page and be a kinder version of yourself, love your neighbor as yourself, and maybe do a better job, then absolutely. We try people out. There was a guy that we hired, first letter of his name is "A" but won't name his name. We hired him, he developed kind of a substance problem and we let him go and he was kind of rogue, not very intelligent... So there are people though, that you try to help that you can't always help, and so sometimes you just can't lift somebody out of their...

<span class="transcript-speaker">Monster, YT1:32:04:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "Addiction is hard. Sad."]</span> Yeah, addiction is hard, it's true. People with hardcore addiction. It's a slippery slope, so... But I tell you, you can break every vice in Jesus' name. I think that we all have our vices and I have absolutely seen evidence that even the most hardcore addiction can be broken in the name of the Lord Jesus Christ, so.

<span class="transcript-speaker">Monster, YT1:32:27:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "Pyramid King Reuben": "once you start on weed, it's a slippery slope"]</span> "weed is a slippery slope..." I smoked weed in college. Not much, but freshman year of college. Yeah freshman, I mean, I was wild. I mean I was not a regenerate dude, I'll tell you that. I was with the [Cornell](https://en.wikipedia.org/wiki/Cornell_University)... rowed for Cornell varsity crew, but freshman year... man, freshman frat parties. Girls, drugs, weed, did it all.

<span class="transcript-speaker">Monster, YT1:32:58:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "Pyramid King Reuben": "yikes, did you ever take LSD?"]</span> Did not take LSD. Didn't really do any other drugs, I have no other experience with drugs. I drink too much coffee. My go-to is whole beans from Trader Joe's. I grind it myself, push the button. I can do like three things: empty the dishwasher, take a piss, and make a coffee all while the coffee's brewing, it's fully automated. Caffè latte, I have a method of making caffè latte. I brew the coffee, like two shot espresso, I put the milk in and then I let the frother steam while I go do other stuff and it works really well.

<span class="transcript-speaker">Unidentified (Greg?), YT1:33:42:</span> Okay Rob, let me ask you a question here related to something you just said. Not about the college stuff but before that, about all the work that's going into Epik now. You've got a lot of work going into it, you've got new teams, you've got new people. Would you then say, and this is a leap, that in the end this hack is actually making Epik better because it has identified all of these problems, and without it, who knows who would have been abusing these problems. So this hack actually made your platform better is what it sounds you're saying?

<span class="transcript-speaker">Monster, YT1:34:19:</span> Yeah, no absolutely. So [Romans 8:28](https://www.bible.com/bible/111/ROM.8.28.NIV) says that all things work together for the good of those who love God, that are called according to His purpose. I believe all lemons are for lemonade. And I gotta tell you guys, yesterday was the hardest day of my life. Some of you wouldn't know that, most of you wouldn't know that, but I was actually at the closest I ever got to being broke. And it was a very hard day because so many things came at me from all different sides. You haven't really lived, like I've walked through the fire right? For the last three years I've walked through the fire. And you can walk through the fire and it doesn't burn you, that's what i've learned. But there's like a different level of fire when you have freaking [Anonymous](https://en.wikipedia.org/wiki/Anonymous_(hacker_group)) light your ass up. It's on another level. And I have to tell you that yesterday totally took me to the threshold where I'm like "wow how much can I take?" So anyway, it all worked out though. It was a hundred thousand dollar critical hack, we plugged that gap, we didn't lose any domains, thank God and <span class="transcript-note">[unintelligible]</span> Yeah, we didn't lose any domains and we actually gained more domains than we lost yesterday, that was a freaking miracle, but praise God. And then today too, I think we've probably gained more domains than we lost. Some of the people in media, they were not kind to us, but I absolutely think you're right, Greg. It didn't kill us, it's gonna make us stronger. The code base that the Russians were totally safeguarding, they wouldn't give our new engineers access to the [git](https://en.wikipedia.org/wiki/Git), now we know why: the code sucked. And ironically now we have them all, we've got [SSH](https://en.wikipedia.org/wiki/Secure_Shell) keys to 70 servers and all kinds of legacy stuff. We're going through all of it, everything. We've hired really top cybersecurity outside experts, there are a bunch of people that have showed up out of the blue saying "hey we'd like to help", offering to do [pentesting](https://en.wikipedia.org/wiki/Penetration_test), stuff like that, and we're getting our ducks in a row. So yeah, I feel terrible. Yesterday was, I tell you. I weeped. We actually had, craziest thing. So I had a call at five in the morning, got up at 4:40 in the morning for this 5am call, the cybersecurity group. And this cybersecurity group gave us a briefing. And then after that, our guy in South Africa, his name is Carlos. He pronounced it "Carlo", he's Portuguese but he lives in South Africa. He's like "Rob, we need a meeting. We need this prayer meeting." I was like, "alright, then do it". And so he convenes a meeting, he explains to me how it's going to go. Five guys, you've got John, Carlos, Ivan, Dewalt (?), myself. So, three South Africans and two Americans. We have this hour and fifteen minute meeting, courts of heaven, throne room, total get-it-done, break every curse... I mean, I am not gifted on that level, I  know how to pray but this was on another level. And I'm telling you, there were curses put on these datasets, and not out of spite. I'm just saying that it was done. I'm just giving you a heads up. There are curses. Laptops will burn. Hard drives will burn. And we'll see if it's true, but there's...

<span class="transcript-speaker">Kirtaner, YT1:38:32:</span> You're going to need a sledgehammer.

<span class="transcript-speaker">Monster:</span> No, just delete it. Just repudiate it. In Jesus' name is what I would recommend.

<span class="transcript-speaker">Unidentified:</span> [Thermite](https://en.wikipedia.org/wiki/Thermite) actually works really, really well for burning hard drives.

<span class="transcript-speaker">Monster:</span> I'm not saying... I'm just saying, repudiate it. In other words... We all make mistakes, right? So don't forget. You've got Saul of Tarsus. Saul of Tarsus was like a hardcore murderer and he became [Paul the Apostle](https://en.wikipedia.org/wiki/Paul_the_Apostle). David, the great [King David](https://en.wikipedia.org/wiki/David), he had the hots for [Bathsheba](https://en.wikipedia.org/wiki/Bathsheba). Checked out Bathsheba, Bathsheba's husband was out at war, he hooks up with Bathsheba, they have a baby, he's like, "oh crap what am I gonna do", he kills the husband of Bathsheba, they lose their baby, and then a year later... <span class="transcript-note">[crosstalk]</span> They have [Solomon](https://en.wikipedia.org/wiki/Solomon). So Solomon ends up basically... so anyway the point is, God will use all kinds of people. It doesn't matter what stupid mistakes you've ever made.

<span class="transcript-speaker">Monster, YT1:39:37:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "Same nf84, I think it's immoral to download the data sets of hacked customer information but I don't think 'curses' is the right language to reestablish trust"]</span> "I don't think 'curse' is the language to reestablish..." Yeah I mean, to be clear, I'm just giving you a heads up. You know, before the sun sets in Honolulu where it's the end of the Day of Atonement. I'm just saying if I were you I would get rid of those datasets if you have it. I don't care, I mean the data's all out there. You can keep it if you want, I'm just giving you a heads up.

<span class="transcript-speaker">Monster, YT1:40:00:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "Why is it immoral to download the data? I downloaded it to check the scope of the breach, not for any malicious purposes."]</span> Yeah, no problem. People who are using it for [white hat](https://en.wikipedia.org/wiki/White_hat_(computer_security)) stuff... if your intent is to use it for benevolent purposes to make sure there's no problem data, keep it. I mean, the code is out there. Some of the code doesn't suck. There's some bad coding aspects, clearly, like API keys hard coded in the code, config files not up to speed, but yeah, but I would just say if you have a negative intent to use that data, it's not going to work out for you. I'm just telling you. I am telling you. I love that neighbor as thyself, I would just give you my strong counsel to not do it. If the demon tells you to do it, the demon is not your friend.

<span class="transcript-speaker">Monster, YT1:40:55:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "bob": "@mikael hell yeah, I'm good if that's the case. what domain registrar should I move to?"]</span> "What domain... I'm good... that's the case... what domain regist..." I wouldn't use [GoDaddy](https://en.wikipedia.org/wiki/GoDaddy). Crap product, crap service. We outpolled GoDaddy in the registrar of the year award two to one in the [2020 registrar of the year award](https://www.namepros.com/threads/epik-wins-the-namepros-2020-best-registrar.1183404/), and...

<span class="transcript-speaker">Monster, YT1:41:18:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "GoDaddy is NoDaddy"]</span> "GoDaddy is NoDaddy..." Yeah I would not use them. They're nice people, by the way. I have to say, they are very lovely people at the lower level of the organization. <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "Overpriced as fk"]</span> They're overpriced, I think that's right. If you go to epik.com/free it catalogs all the stuff that we give you for free, I would encourage you to check that out.

<span class="transcript-speaker">Unidentified:</span> Do you have any discount codes like the My Pillow guy?[^fn11]

<span class="transcript-speaker">Monster, YT1:41:41:</span> Yeah well, so for example, .com transfer now is $6.99 for unlimited .com transfer. I would encourage you to check that out. On September 1st, the registry raised the prices by like seven percent and we didn't, we held our price. So it's $6.99, all-inclusive, including the ICANN fee, regardless of payment method. You can pay with the crypto. With free privacy, free forwarding, lots of stuff. epik.com/free... Free WordPress hosting, basic... no custom templates, but you can use free basic WordPress hosting. And $6.99 .com transfer and then $8.49 all-inclusive renewal, which is below cost.

<span class="transcript-speaker">Monster: YT1:42:30:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "Does Epik take a loss on keeping renewal prices low? I know ICANN is raising fees on some extensions"]</span> "Does Epik take a loss on keep..." Yes we do. So why do we do that? We lose money on our .com names because when our clients sell domains to an end, we typically can sell them hosting, CDN, DDoS mitigation...

<span class="transcript-speaker">Unidentified:</span> You know a really good way to make money is to use offshore accounts to launder money from <span class="transcript-note">[unintelligible]</span>. I've always found that's been, you know... Just throwing that out there.

<span class="transcript-speaker">Monster:</span> So offshore accounts... break that down for me.

<span class="transcript-speaker">Unidentified:</span> I don't know, I wasn't in the [Panama Papers](https://en.wikipedia.org/wiki/Panama_Papers), you were.

<span class="transcript-speaker">Monster:</span> Uh, I don't know. Oh no, I mean Panama Papers... I don't know I was... I don't know if I was in the Panama Papers, that's news to me. But I had a Coinbase account. That's actually very interesting that you mentioned that, because I have a Coinbase account, and I don't use it very much, I hadn't used it in years, and then yesterday... talk about my bad day, I get this email that I'm overdrafted. I'm overdrafted by $60 grand, because this legacy Coinbase account that almost nobody uses, it's the first crypto. We were one of the first registrars to accept crypto. 

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[unintelligible]</span> the [MasterBucks thing](https://domainnamewire.com/2020/10/26/masterbucks-and-tax-avoidance-at-center-of-epik-paypal-controversy/), right?

<span class="transcript-speaker">Monster:</span> I could talk about that. We could talk about this first.

<span class="transcript-speaker">Unidentified:</span> Oh, so that's different from the crypto thing? From the Swiss bank account thing?[^fn12]

<span class="transcript-speaker">Monster:</span> We don't have a Swiss bank. There's no Swiss banks.

<span class="transcript-speaker">Unidentified:</span> Oh, my bad. Anything in the islands?

<span class="transcript-speaker">Monster:</span> Nothing, nope, no Caymans, no islands. We acquired an Irish crypto exchange, you can check it out. It's called Amplify.io. I'm told it's pretty secure. You guys can try and hack it. Amplify.io. And it's domiciled in Ireland. It's licensed as a crypto exchange. We ended up acquiring that company in April of this year. We're working on an [NFT](https://en.wikipedia.org/wiki/Non-fungible_token) platform called Fraktion, f-r-a-k-t-i-o-n. But all [Reg. D](https://en.wikipedia.org/wiki/Regulation_D_(SEC)), [Reg. S](https://en.wikipedia.org/wiki/Securities_Act_of_1933#Regulation_S) compliant stuff. We hired a full-time in-house lawyer, that lawyer brings in other lawyers as needed. Before you got here, I mentioned that we raised $32 million in outside growth capital from a guy who didn't ask for a board seat and it's all common stock. I'm overwhelmingly the majority shareholder and there are no other board directors at this time. We had two board directors, they were both Jewish, they both resigned because of the Gab stuff... I think was too hot.[^fn13] Then after [the 8chan thing](https://en.wikipedia.org/wiki/Epik_(company)#8chan), it was a client for two days and we let them go. But it's not easy running Epik, right? You have to understand. Trying to thread the needle on what's lawful free speech is not an easy task. The decision tonight to turn off Joey's site is not a light decision. It's like, you know what? Can I extend an olive branch to the netizens, to the community of Internet people, that says okay if that's doxing because there's like a screenshot of some nasty stuff about people and it includes people's home addresses, then that crosses a line. That's if that's what was going on, and it basically causes people harm, it needs to come down. But there are things that we deal with, like Gab, like some of these health sites. Like, let's be real. [Mike the "Health Ranger"](https://gizmodo.com/self-declared-health-ranger-mike-adams-has-apparently-b-1823537158). Lovely, nice guy, but he spouts some garbage. And he's a client in a small way, but when he goes out there with this crazytown stuff, it's not very honorable. Because I get it, if you're [Alex Jones](https://en.wikipedia.org/wiki/Alex_Jones) and you gotta talk for three hours a day and maintain an audience, sometimes you have to maybe kind of be a little fringe. He gets some stuff right, but a lot of stuff maybe... he has to rely on other people, that is facts. And we have to kind of come back to the decision of "is this person trying to be a force for good as they kind of navigate the issue of truth?"

<span class="transcript-speaker">Monster, YT1:47:26:</span> I think it's extremely hard to be an on-demand person. Earlier today, some of you guys know I run a ministry thing called Fast Brothers. [Phil](https://www.linkedin.com/in/philipp-laederach-92068b163/) actually, he's the guy... where's Phil? There's Phil. Phil works for [Times Square Church](https://en.wikipedia.org/wiki/Times_Square_Church), and Phil called the other day as a client, and after an hour and a half call as a client I offered him a job and he agreed to come work for us. But we had this thing this evening called Fast Brothers, and it's basically prayer, fasting, and Communion, and this exists as a way to kind of bring people together across denominations and try to figure stuff out. And one guy that came on the call tonight, first time. I would say the guy is prophetically gifted, but there have been prophets in the past, modern-day prophets where they fill a colosseum. Like [Kim Clement](https://www.christianpost.com/news/prophet-kim-clement-dies-at-60.html) is one of those guys who would fill a colosseum and do a little, like, prophecy on demand. And I don't think that's very easy. I think that would be extremely hard. I wouldn't want that job. I think that's a hard way to make a buck. And I think he died young, because that's probably not an easy way to make a living. Anyway, sidebar.

<span class="transcript-speaker">Monster, YT1:48:57:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "It's in here https://www.epik.com/terms. There's a headline 'Acceptable Use'"]</span>. "Acceptable use policy..." Yeah, if you guys think there's something wrong with our acceptable use policy, drop me a note, rob@epik.com, and we'll take a look at that.

<span class="transcript-speaker">Unidentified:</span> Can we still host sites that sell drugs on Epik?[^fn14] Or is that a no-no now?

<span class="transcript-speaker">Monster, YT1:49:11:</span> That's an interesting question. We enforce court orders, and so the challenge that we have, and I don't know to what extent the question is being asked in good faith, but I'll give it to you as I see it. If you go and do a search, go on Google and search "Epik LegitScript", I did a [blog post](https://www.epik.com/blog/why-i-stood-up-to-legitscript.html) years ago about the time I told LegitScript to pound sand. And I annoyed them, because my policy is very simple: it's "get a court order". If somebody is engaging in malfeasance, get a court order. And we honor those court orders. Also [WIPO](https://en.wikipedia.org/wiki/World_Intellectual_Property_Organization) has the [UDRP process](https://en.wikipedia.org/wiki/Uniform_Domain-Name_Dispute-Resolution_Policy). When there's a UDRP order, we enforce it. So for example, there was a guy who bought a bunch of Coinbase typo names and he still had them on Epik, and we're not a fan of that. If it's [phishing](https://en.wikipedia.org/wiki/Phishing) we don't allow it, but he wasn't doing phishing, he was doing redirects for these typo names and he got a UDRP, he lost, and whatever value was accrued in owning those names, he lost it. Because if you're engaging in something that is dodgy, then you're probably not going to out yourself in responding to a UDRP claim, because to answer a UDRP you have to basically de-cloak. It's very hard to defend a UDRP without identifying yourself as a real person.

<span class="transcript-speaker"><a href="https://twitter.com/Hifi_Lucky13">High Fidelity</a>, YT1:50:55:</span> Is that like a cloak of invisibility... Harry Potter, or what?

<span class="transcript-speaker">Monster:</span> No, it's [WHOIS privacy proxy](https://en.wikipedia.org/wiki/Domain_privacy). So Anonymize is owned by Epik, and we allow people to go and basically do privacy proxy for free. wW believe privacy is a right, not a privilege, so we don't charge for it. We never charge for it. Somebody in one of the Twitter comments said that we charge all this money for privacy that didn't work. The answer is no, not quite, we never charge for it. It's always been free. GoDaddy charges money for it, a lot of people charge money for it, we never did. And we have an ICANN-compliant WHOIS privacy proxy. It's Anonymize, Incorporated, it's owned by the same parent company. So there's Epik Holdings, Inc. and there's Epik, Inc and then there's Anonymize, Inc. They're part of the same parent. But we don't actually charge for privacy. We took it down because the keys were compromised, and so we will put it back up maybe tomorrow. Because we also offer a free [VPN](https://en.wikipedia.org/wiki/Virtual_private_network), those of you who need free VPN. And normally it works, there's a free one and a paid one.

<span class="transcript-speaker">Monster, YT1:52:14:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "I think users should automatically be prompted to change their password when logging into Epik if they haven't already"]</span> Let's see... "I think users should automatically be prompted to change their pass..." Yeah, I agree. I think that that hasn't been deployed yet. There will be a forced password change. And just to recap for those of you who didn't catch it before: we run a single sign-on product based on [Keycloak](https://en.wikipedia.org/wiki/Keycloak) called Federated Identity. It is separate from the dataset that was evidently compromised, and so we don't believe that Federal Identity has been compromised. I don't think there's imminent risk, if somebody thinks there's imminent risk, drop me a note, but Keycloak latest version seems pretty solid. And we do have a plan to rebrand that.

<span class="transcript-speaker">Monster, YT1:52:55:</span> <span class="transcript-note">[reading chat. Full comment in chat was from "Customer": "I heard that Auth-Codes are also leaked. can anybody steal the domains?"]</span> The [Auth-Codes](https://en.wikipedia.org/wiki/Auth-Code) that were leaked were not current. They have all been changed twice: once immediately as the information was spreading, and I kept my mouth shut for a couple of days while we basically worked very hard through the night to tidy up, but we changed all the Auth-Codes and then we changed them again. So they've been changed twice in the last 48 hours. We ran through all of them. So all the Auth-Codes have been changed, the domains were locked, and to basically transfer a name, you would need both the Auth-Code and you would need to unlock the name. If you had an unlocked name and you had the valid Auth-Code you could steal a domain. I don't believe any domains have been stolen, and checked it throughout the day the last couple of days. I was slightly terrified, just in case that were to happen I think that would be an extremely bad day. The good news is we're on great speaking terms with the CEOs of all the major registrars. If you do steal a name you'd have to go to [Njalla](https://en.wikipedia.org/wiki/Njalla) or somebody who basically is lawless and unaccountable.

<span class="transcript-speaker">Kirtaner:</span> They are <span class="transcript-note">[unintelligible]</span> people.

<span class="transcript-speaker">Monster, YT1:54:08:</span> Yeah, I know, but I don't... they are willfully and brazenly lawless and unaccountable. They steal other people's intellectual property and but, anyway... I don't judge them. I'm just saying that I've never had a relationship with them. So if you wanted to be a cybercriminal, then you would probably take the names to like... China.

<span class="transcript-speaker">High Fidelity:</span> Cybercriminal? That's a terrible thing to say, Rob.

<span class="transcript-speaker">Kirtaner:</span> I would never do cybercrime!

<span class="transcript-speaker">High Fidelity:</span> Our only crime is curiosity.

<span class="transcript-speaker">Monster, YT1:54:43:</span> Yeah I get it. Demon spawns probably don't do any cybercrime at all. So I would just say that if you're going to steal a name, then Njalla is probably a receptacle of that, and then there are Chinese registrars who basically ignore all UDRPs. And I can't tell if it's because they're lawless or because they don't read English. But if you could hold the domain in China, you can get away with it for a while.

<span class="transcript-speaker">High Fidelity:</span> You know the real problem, Rob, is that [RDAP](https://en.wikipedia.org/wiki/Registration_Data_Access_Protocol) is being an RFC rewrite for WHOIS lookups and being further obfuscation of these sites. Don't you think that [ICANN](https://en.wikipedia.org/wiki/ICANN), something needs to be done there?

<span class="transcript-speaker">Monster:</span> Yeah so "[High Fidelity](https://twitter.com/Hifi_Lucky13)", I don't know what your real name is, but I'll just call you "High" and you can change your name.

<span class="transcript-speaker">High Fidelity:</span> Excellent choice.

<span class="transcript-speaker">Monster:</span> Okay, HF, so I would say: RDAP, I was not a big fan of RDAP and I'll tell you why. I went to many ICANN meetings, I lobbied against RDAP, you know why I lobbied against RDAP? Because, so ICANN meetings. They're free, anybody can go to them

<span class="transcript-speaker">High Fidelity:</span> Did they ever hold anything on [Epstein's island](https://en.wikipedia.org/wiki/Little_Saint_James,_U.S._Virgin_Islands), do you know?

<span class="transcript-speaker">Monster:</span> No, no. They're only hosted in big cities and big conference centers. They're four days, they're partying every night...

<span class="transcript-speaker">High Fidelity:</span> Any Eastern European models?

<span class="transcript-speaker">Monster, YT1:56:20:</span> No, it's not like that. It's more bar scene, restaurant, free food. But there's no strippers, none of that. It's not like a salacious crowd, just to cure that illusion. They're not boring, they're not just nerds, some of these guys are fun and cool, but I'm just saying that it's not... if you're thinking like Puerto Rico crypto crowd it's not that. So RDAP: here's the dirty little secret about RDAP. RDAP, they basically wanted to deploy a model where law enforcement and approved individuals could pierce the private detail at will. 

<span class="transcript-speaker">High Fidelity:</span> Ooh, law enforcement penetrating things? Never heard of it.

<span class="transcript-speaker">Monster:</span> Yeah, no exactly. So here's the thing: normally, when Epik is highly functioning and not having backups of data hijacked by opportunists or people who were corrupted and brought off or whatever...

<span class="transcript-speaker">High Fidelity:</span> <span class="transcript-note">[unintelligible]</span> backup, we're here to help. <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Monster:</span> And I appreciate that.

<span class="transcript-speaker">Kirtaner:</span> Complementary backups! Always the best.

<span class="transcript-speaker">Monster, YT1:57:28:</span> Yeah so... thanks, demon. So what I was going to say though is that RDAP basically had this deal where approved individuals would have the ability to pierce the privacy veil at will. And I never agreed to that. So what we did is we allowed people to own names under Anonymize. So you could actually list Anonymize as the registrant, as the legal registrant of your name, for free so even if our RDAP was working and pierced the privacy veil, all you would see is the privacy proxy. Because... hold on, HF. The only requirement for ICANN from a compliance standpoint is that the domain name has to be owned by a legal person, a non-real... a non-fake person or a legal entity. And Anonymize, Inc. satisfies the condition of being a legal entity. And so when somebody does a UDRP action against a domain name that is owned by Anonymize, Anonymize is the initial respondent until we have an opportunity to go the registrant and say, "do you want to de-cloak? Because if you don't you will lose by default." Go ahead, HF.

<span class="transcript-speaker">High Fidelity, YT1:58:43:</span> So you mean that they used the email address that was just a standard set of numbers@anonymize, and then they use those numbers as an email address, but that email address also tied to the record in Epik's database of users, right? Isn't that how that's all being put together? It seems like it online.

<span class="transcript-speaker">Monster:</span> No, so it's random. So there was a point in time, like a year ago, when you would be hf@anonymous.com. hf.com@anonymize.com. But so if you had the domain hf.com, probably would be worth like a million dollars. hf.com@anonymize.com. And of course then any spammer could just engineer that and just spam the crap out of domain plus domain@anonymize.com. And we said clearly that's not a great plan, so we moved to a random hash so if you look at how the anonymized email addresses work now, it's a random rotating hash so it gets rotated every whatever... every few days.

<span class="transcript-speaker">High Fidelity, YT1:59:55:</span> Okay, but you also use those anonymized email addresses for the contact information somewhere in this user's sites? So that there wasn't actually... I mean now that all this data is coming out and we're looking at it, it doesn't look like it's that anonymized. I don't know, I may be wrong...

<span class="transcript-speaker">Monster:</span> Yeah, so I said, I think it was earlier this year. So the thing that was snagged from the backup, as I believe it was, subject to further confirmation by forensic people. So that upgrade earlier this year I don't know if it was in March or February, I don't know when we made that change, but we moved to a model where... hold on guys, this is my wife. One second. She's in Austin, Texas. What's up? Hey there. Yeah, I'm good. I'm on a conference call. Can I call you... everything's good, can I call you back? Yeah, I think so. Yeah, alright. Love you. Bye.

<span class="transcript-speaker">Monster, YT2:01:02:</span> Yeah so my wife is with my daughter down in Austin, Texas. I was supposed to be in Austin, Texas tonight! My daughter is going to row at Austin, Texas. She's a really competitive rower.

<span class="transcript-speaker">Unidentified:</span> You know of the taco trucks in Austin? The taco trucks in Austin are awesome, dude.
 
<span class="transcript-speaker">Monster, YT2:01:24:</span> They are very good. When I go to South By Southwest I get a taco. 

<span class="transcript-speaker">High Fidelity:</span> Yeah, what really sucks though is they closed down Friedman's...

<span class="transcript-speaker">Monster:</span> Brazos Street. Brazos Street, right? There's that...

<span class="transcript-speaker">High Fidelity:</span> Yeah. But they closed down Friedman's Bar, which was over by the uni... and then that place was amazing. It used to be a Black church. It was Friedman's, and it was such a cornerstone of the community, in the Black community in Austin, Texas at the time which is to me, that's really really cool. But I'm not quite surprised.

<span class="transcript-speaker">Monster, YT2:02:02:</span> Yeah, got it. What do you do for a living, HF?


<span class="transcript-speaker">High Fidelity:</span> I live on the Internet, that's what I do.

<span class="transcript-speaker">Monster:</span> You live on the Internet. How do you make a buck? To pay the groceries?

<span class="transcript-speaker">High Fidelity:</span> All sorts of things.

<span class="transcript-speaker">Monster:</span> That's funny. <span class="transcript-note">[reading the chat. Full comment in chat was from "bob": "goatee guy looks like he took too much acid at a soundgarden concert and never recovered"]</span> "Goatee guy..." Bob's making fun of you, bro. "Goatee guy looks he took too much acid at Soundgarden concert and never recovered." That's not nice. I see the inner divinity of HF even if you guys don't see it. I think he actually has some inner divinity. Don't underestimate him, he has great potential.

<span class="transcript-speaker">High Fidelity:</span> I'm actually... Okay, so I'll stop being a smartass and <span class="transcript-note">[unintelligible]</span>. I'm a technologist. I'm a futurist. I do some [OSINT](https://en.wikipedia.org/wiki/Open-source_intelligence) stuff, I do everything from storage, networking, virtualization... I tend to stay away from the cloud stuff because I don't trust cloud companies. I mean if you look at the [OMIGOD Azure hack](https://therecord.media/ddos-botnets-cryptominers-target-azure-systems-after-omigod-exploit-goes-public/) that just came out recently, one packet and you've got [root](https://en.wikipedia.org/wiki/Superuser) on an [Azure](https://en.wikipedia.org/wiki/Microsoft_Azure) [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine)? No thanks.

<span class="transcript-speaker">Monster, YT2:03:14:</span> <span class="transcript-note">[reading the chat. Full question in chat was from [Mikael Thalen](https://twitter.com/MikaelThalen): "Rob, will you pull down the demonhackers website[^fn8] that is doxing journalists and their family members like you did Joey's website?"]</span> Alright, got it. Mikael? Did I get that right, Mikael? I think I've seen your work. I think you're the guy who does... well, that was a really, really nasty [article](https://www.dailydot.com/debug/epik-hack-far-right-sites-anonymous/) that he wrote. Dot something. So yeah, I already said that I'm gonna check out this other site. I don't know if we're hosting it, check the IP address.

<span class="transcript-speaker">Mikael Thalen, YT2:03:33:</span> What did you find nasty about the article?

<span class="transcript-speaker">Monster:</span> Well it just... it seemed like it had a really negative slant. <span class="transcript-note">[background noise from another participant]</span> I didn't read it very carefully. You're [_Daily Dot_](https://en.wikipedia.org/wiki/The_Daily_Dot), right?

<span class="transcript-speaker">Thalen:</span> Correct.

<span class="transcript-speaker">Monster:</span> I'd have to go back and look at it. <span class="transcript-note">[background noise from another participant]</span> I'm gonna mute... one second. Yeah, no offense, I just... it didn't seem like it was attempting to be too balanced. But I mean, we acknowledge that a bunch of crappy code from legacy stuff acquired ten years ago that hadn't been retooled was out there and isn't up to par.

<span class="transcript-speaker">High Fidelity, YT2:04:21:</span> Rob, you gotta update your systems, man. I mean think about it, look what happened with the [Equifax hack](https://en.wikipedia.org/wiki/2017_Equifax_data_breach), bro. One guy supposedly didn't update one website.

<span class="transcript-speaker">Monster:</span> Check this out, check this out though. Here's the thing. Cyber security is a problem, right? Because everybody can be bought. I saw some trash talk by Joey, the guy that a lot of you guys hate. I think he said something like, "I'm gonna go hire somebody to steal your phone." I think I saw him write that. I was like, "you're an idiot. You're a freaking idiot."

<span class="transcript-speaker">Monster, YT2:04:56:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "Literally a Nazi": "love your work, Rob, great stuff"]</span> Thank you, Literally. Nice comment there, appreciate that.

<span class="transcript-speaker">Monster, YT2:05:00:</span> So yeah, we're gonna... if we're hosting that site, it will come down. It will come down long enough for him to get rid of any doxing. Maybe he just needs to find something else to do, because like... whoever was responsible for killing his sister? Just make peace with him. I mean if you're, like, related to the person who killed his sister, or you know who he is... just make peace with the dude. Because he has so much unresolved anger. Vengeful anger directed at the quote unquote antifa people that he believes is responsible for the murder of his sister, and I think it just consumes him. I think that it turned him to kind of, as I called him, like digital Batman. But digital Batman with like a slightly dark side. So it's not a guy who's completely self-governing. I've seen him swear like a sailor. I know he's jumped fences. Evidently he dispatches people to steal phones. So he has got a lot of unresolved dark side that needs to be worked out.

<span class="transcript-speaker">Monster, YT2:06:15:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "anon589454": "rob are you a white nationalist"]</span> "Rob, are you a white nationalist?" I am white, and I think that we shouldn't have open, open borders.

<span class="transcript-speaker">High Fidelity:</span>: Where are you from? Where are your parents from?

<span class="transcript-speaker">Monster:</span> I'm Dutch.

<span class="transcript-speaker">High Fidelity:</span> You're Dutch?

<span class="transcript-speaker">L, YT2:06:36:</span> Wait, no, no, then, listen. This is the source of the problem, and I'm telling you the solution. What am I? I'm fucking Irish, and I'm fucking German. Fuck those labels people are using. That's the source of this shit. We as human beings think we're so cocky and we know everything. I'm not attacking you brother, I'm not talking about that. Also for security, it doesn't matter how up-to-date your shit is, someone can use a [zero-day exploit](https://en.wikipedia.org/wiki/Zero-day_(computing)) if they have enough money. There are millions of zero-day exploits on a long list that have never been used...

<span class="transcript-speaker">Monster:</span> I agree.

<span class="transcript-speaker">L:</span> ...at any point in time. It's almost a waste of money. Why do you think the military hasn't updated their nuclear crap in like 60 or something years? Using old floppy technology. That's super reliable, you're never going to hack into that.

<span class="transcript-note">[note: the audio cuts out for about 40 seconds in Mikael Thalen's recording. The missing section is available <a href="https://twitter.com/svpndotcom/status/1439635246316666888">on Twitter</a>.]</span>

<span class="transcript-speaker">Monster:</span> Right. Oh, it's also probably [air gap](https://en.wikipedia.org/wiki/Air_gap_(networking)) and all that. But I would say, to answer the question about white nationalist, you know, I think that there is a place for like, uh...

<span class="transcript-speaker">L:</span> Refuse their terminology. <span class="transcript-note">[crosstalk]</span> Nationalism <span class="transcript-note">[crosstalk]</span> try to force you to answer yes or no, and that's what they use against you. It doesn't matter what you say or do. If this is what they think, they use their numbers and they shut you down. How many people have been speaking, speaking, and then poof, that happens. My advice to you is: when they try to <span class="transcript-note">[unintelligible]</span> you and trap you into that, that same shit they put on TV the last 30 fucking years, because I'm 31 years old and I don't remember this shit being on TV in the 90s, I remember. Don't... you are not... this. And they say, "are you a nationalist?" They're not asking you if you're a nationalist. They're speaking in a feminine language. Feminine language has nothing to do with the word they're actually telling you. Feminism...

<span class="transcript-speaker">High Fidelity:</span> Well I fucking <span class="transcript-note">[unintelligible]</span> feminism, you. Suck it.

<span class="transcript-speaker">L:</span> No, listen, this is the nature of reality...

<span class="transcript-speaker">High Fidelity:</span> No, no, <span class="transcript-note">[unintelligible]</span> accepted your female side. I happen to like cooking, I happen to like interior decorating...

<span class="transcript-speaker">L:</span> I like cooking...

<span class="transcript-speaker">High Fidelity:</span> How dare you, sir. How fucking dare you.

<span class="transcript-speaker">L:</span> Whatever. Anyway, if you do the research throughout all of fucking history the label for things in reality has been masculine and feminine, and these are all everywhere.

<span class="transcript-speaker">High Fidelity:</span> No, that's wrong. That's horrendously wrong, because there are multiple fucking cultures <span class="transcript-note">[crosstalk, unintelligible]</span> that's a lie.

<span class="transcript-speaker">L:</span> ...what they're really saying is what they mean by <span class="transcript-note">[unintelligible]</span> is usually using the word nationalist, what they really mean is going to be a mystery to you. So you should... if you look in the Bible, how many yes or no questions did Jesus answer?

<span class="transcript-speaker">High Fidelity:</span> Now you're, now you're mixing political and religious terms. No, sir. Your argument is deeply, deeply flawed.

<span class="transcript-speaker">L:</span> <span class="transcript-note">[crosstalk, unintelligible]</span> ...that if you directly answer the question, you're already fucked. And that's how the politicians do what they do. They don't directly answer any question. And you're trying to throw your head against a brick wall by doing the opposite of what they're doing. And they're being successful... <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">High Fidelity:</span> Because I'm not <span class="transcript-note">[unintelligible]</span> sir. 

<span class="transcript-speaker">L, YT2:09:25:</span> ...I'm saying when someone asks if you're a nationalist or not, what they're...

<span class="transcript-speaker">Monster:</span> Little mute timeout because people were not behaving. Yeah just skip the f-bombs. Let's just keep it civil and try and work it out. HF man, you're a smart guy. But enlightenment, I don't know. Just can't really feel that yet.

<span class="transcript-speaker">High Fidelity:</span> Sorry man, I have a lot of hate in my heart, I'm trying to let it go.

<span class="transcript-speaker">Monster, YT2:09:57:</span> I know, I know you have... but God loves you man. You gotta resolve that hate, it's gonna kill you. You have cancer? What kind of diseases you carry with you?

<span class="transcript-speaker">High Fidelity:</span> Uh... actually I'm in perfect health, aside from having a bunch of titanium in my body from a car accident.

<span class="transcript-speaker">Monster, YT2:10:12:</span> Car accident. So where did that hate come from? Group therapy, seriously. Like where did the hate come from? Why do you hate...

<span class="transcript-speaker">High Fidelity:</span> The Internet hate machine.[^fn15]

<span class="transcript-speaker">Monster:</span> Yeah, but why you? Why do you have to on board this stuff? You have to basically, at some point, say "I accept the idea that I should hate people indiscriminately." It's like, why would you do that?

<span class="transcript-speaker">High Fidelity, YT2:10:30:</span> Rob. Rob. We live in a capitalist society. Capitalist society is based on predatory behavior.

<span class="transcript-speaker">Monster:</span> It doesn't have to be. <span class="transcript-note">[crosstalk from HF]</span> I got one for you. I figured something out, really mighty. I'm going to share it with you. Scarcity is an illusion. I promise you. It's an illusion.

<span class="transcript-speaker">High Fidelity:</span> It could be, except we have too many billionaires, Rob.

<span class="transcript-speaker">Monster, YT2:10:53:</span> No, but here's the thing. I pray for the billionaires. And you know what...

<span class="transcript-speaker">High Fidelity:</span> Me too. I pray that they don't hurt too bad when we steal their money.

<span class="transcript-speaker">Monster:</span> You know what? I had a billionaire, a billionaire... In fact, true story. Craziest thing. A few weeks ago, I was heading to a meeting. Undisclosed location. And the Saturday before the meeting, a dear friend who's kind of a prophetic guy... I'm just going to mute <span class="transcript-note">[unintelligible]</span> And he said to me, he said, "Rob, this night two billionaires are being saved, and have all the money that you need." And I thought, "that's pretty whack, but that's really interesting". Anyway, we raised $32 million from a billionaire, and so I knew one of the one of the identities was. I didn't know that he'd come to Christ. He'd come to Christ. He realized who he was, that showed up at his house on a Tuesday morning... Tuesday evening for dinner, and there was a box of books, giant box from the Christian bookstore sitting at his doorstep. And evidently he must have come to Christ that weekend. I don't know. Strange. And I guess there's a second billionaire. I have a theory who it is but... but I will tell you this: scarcity is an illusion. The entire economic paradigm is built on the premise of scarcity, and making people operate with a dog-eat-dog mindset rather than realizing we're all in this together. That the idea of "love your neighbor as yourself" is not some high ideal, it is actually the best advice anybody ever gave you. When you actually take an approach where you treat everybody who comes to your path with humility and compassion, your whole world transforms around. So even the most dark, mean-spirited individual, if you attempt to engage that person with humility and compassion, more times than not, they will actually respond to that. And sometimes you have to confront it, like if it's really outrageous anger, but I think that is very effective.

<span class="transcript-speaker">Monster, YT2:13:14:</span> What I've generally found is if you treat people as a criminal, they will manifest criminal. And if you treat people according to their highest self, they will, eventually, manifest their higher self. There's a guy who we helped sell a bunch of adult names. And I was asked, "should we deny this transaction?" A portfolio of adult names. And I was like, in my spirit, I think that we should help this guy. And so I called the dude and I asked him, "what's your 'why'?" And he's like, "My girlfriend is pregnant, we're getting married, and I need to leave this business." I said, "good for you." And we helped him sell those names, and he is no longer an adult entertainment guy. So, guy walked off the battlefield, out of that business. So you never know. Just because somebody starts in a mode where they're operating with a scarcity mindset that they feel they have to lower themselves now, to be able to make a living, put food on the table, it isn't necessarily the only way forward. 

<span class="transcript-speaker">Monster, YT2:14:26:</span> Anyway. There's NE, I think. It keeps disappearing. NE, I think is his initials. N8. N8, do you want to ask a question? It said he wanted to raise his hand but there's not a question. <span class="transcript-note">[reading the chat. Full question in chat was from "nf84": "Rob at what age did you become a staunch Christian?"]</span> "At what age did I become a Christian?" I will tell you. <span class="transcript-note">[Jitsi noise, pop-up reads, "High Fidelity would like to speak"]</span> HF, I'm gonna come to you. Let me answer this question and then I'll come to you.

<span class="transcript-speaker">Monster, YT2:14:56:</span> So, true story. Start of 2006... no, January 2007. I was fired from a company that I had founded in 1999. I had just raised $35 million for this company, Global Market Insite, GMI. I was named Entrepreneur of the Year in 2006. And the board that had come in in this financing in 2006, they... just, the chairman decided to give me the boot. And, you know, at the time I had, you know... private jet, Maserati in the garage and all that, and I was like, "I'm fooling myself". I thought I was all that. You know, had lots of vices, and terrible... faithful to my wife and all that, but I mean I had my vices. I swore like a sailor, and I was judgmental, discriminatory. I made gay jokes, I mean I was not a good guy. So in January 2007, I got fired. And I spent like two weeks on the beach in Cabo San Lucas, basically kind of just being despondent. Like, this thing that I had spent six years, seven years building, which was very big part of my identity, was ripped away from me. And so I immediately decided that I should start a venture capital firm. So in 2007, I started a venture capital firm, borrowed $4 million, and those of you were around... 2008 was a terrible, terrible year to be scaling a venture capital company. It was just about the worst vintage year you could ask for. And so a guy who basically had a long history of everything he touched turned to gold, suddenly everything that I touched turned to poop. So that was bad. And my wife, who called, who's in Austin tonight, she put up with me, thankfully. I stopped that in 2009 and started Epik as a [bootstrap startup](https://en.wikipedia.org/wiki/Entrepreneurship#Bootstrapping), and began to build Epik initially focused on a bunch of stuff. But what I was originally doing, starting around 2008... 9, after basically throwing in the towel on being a venture capital guy... you know, I made about a dozen venture investments in the span of a couple years... I ended up building two libraries in my search for truth. I studied everything. Eastern mysticism, witchcraft, occult, Freemasonry, everything. And basically what I concluded was that, well, Satan is real but Jesus Christ is Lord. And that was not a normal path. I was self-righteous for a bunch of years. And then basically in the fall of 2013, I fell on my knees in tears and accepted Christ as Savior. And then February 5th, 2014, I understood [Romans 12:1](https://www.bible.com/bible/111/ROM.12.1.NIV). Romans 12:1 says, "render your body a living sacrifice, that is your reasonable service" and die to self, die to sin, and basically said, "Lord, you know everything, you see everything, you're outside of space and time. Just, like, Jesus take the wheel." And he did. So that's when I really became a Christian. And then a few years later, I figured out the idea of sanctification. Ended up reading a lot of the old Puritan texts. My favorite book in the world, by the way, besides the Bible is a book that you can find. I gave out so many copies, I made a website, mysteryofprovidence.com. Check it out. [John Flavel](https://en.wikipedia.org/wiki/John_Flavel) wrote it in 1678. That's where I realized that scarcity is an illusion. So, [Psalm 57:2](https://www.bible.com/bible/116/PSA.57.2.NLT) says, "the God who does all things for me"... and once you realize that, basically, the same God that basically fed the Israelites six days a week for 40 years in the desert is the same God we serve today, you start figuring out, like, God can basically make it happen.

<span class="transcript-speaker">High Fidelity, YT2:19:46:</span> You know what Rob? Robots. Robots can feed us 24/7 too. We should spend more money developing robots that can, like, grow us food. Because then scarcity <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Monster:</span> I agree. <span class="transcript-note">[crosstalk]</span> but that's precisely the point. Scarcity is an illusion. You could fit the whole world into Texas. There's this mindset that says we're out of space. I don't believe that's true.

<span class="transcript-speaker">Monster, YT2:20:16:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "Frustrated Customer": "Are you fixing the hack or not"]</span> Frustrated Customer, yeah, so... are we fixing the hack? I don't believe there was a hack of our core system, I believe that somebody got access to an old backup. We already talked about it.

<span class="transcript-speaker">Monster, YT2:20:32:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "Frustrated Customer": "What is the point of this call??? What are you hoping to achieve here???"]</span> "the point of this call..." The point of this call was actually to get Chad to come online to talk to me in a minute(?) but I haven't seen Chad. Anybody seen Chad? I haven't seen Chad. Who even knows Chad. But Steven bolted.

<span class="transcript-speaker">High Fidelity, YT2:20:49:</span> Yeah, you know, the way they treated Chad is really kind of awful you know? [They took pictures of the inside of his house](https://twitter.com/chadloder/status/1440183790668709894), [they filed a false restraining order against him](https://twitter.com/chadloder/status/1433956895652417536), and then they put his address up on the Internet for everyone to know! Where he and his <i>child</i>... <span class="transcript-note">[Monster mutes everyone]</span>

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[muted, but speaking]</span>

<span class="transcript-speaker">Unidentified:</span> You muted both of yourselves.

<span class="transcript-speaker">Monster, YT2:21:25:</span> HF has to unmute himself... I did it because there was too much background noise. Alright guys, so a lot of questions. I gotta call my wife. You guys mind if I take a two... five-minute break?

<span class="transcript-speaker">Unidentified 1:</span> Oh, go ahead!

<span class="transcript-speaker">Unidentified 2:</span> Do it on cam, do it on camera please!

<span class="transcript-speaker">Monster:</span> I will go all night. I will go all night with you while I say sweet nothings to my wife

<span class="transcript-speaker">Unidentified:</span> Whoa whoa whoa! Wait until you're on the phone with your wife to say that, Rob, come on now.

<span class="transcript-speaker">Monster:</span> Oh you know what? You guys can talk amongst yourself. You guys talk. <span class="transcript-note">[Monster leaves]</span>

<span class="transcript-speaker">Unidentified, YT2:22:00:</span> I will say, though, if it's okay for me to say, that in reference to the word "Nazi": I think the word itself... because, forgive me for saying, I'm pretty... I'm a bit persnickety on language and words even though I can be very loose with my tongue, I admit. But, that word, a lot of other trigger words, are used purely for warfare, regardless of what side you're on. It doesn't matter. It doesn't matter. It's like certain other words that hurt certain other people so much that, you know what, why don't we just not be a-holes to this group of people and just, respectfully, not say this thing they don't want us to say. Just like how, with Muslim people, we give them enough respect because clearly they were really, really upset about the idea of if people in america try to basically satire and make fun of their... their... um, you know...

<span class="transcript-speaker">High Fidelity?, YT2:22:53:</span> Hey, hey, you're making a massive generalization off of the minute response of a very extreme, small set... dude, my nephew is Muslim. I love Islam. Have you had the fucking food? It's delicious.

<span class="transcript-speaker">Unidentified:</span> Are you saying I'm saying something bad about it?

<span class="transcript-speaker">High Fidelity?:</span> I hope not.

<span class="transcript-speaker">Unidentified 1:</span> I'm not <span class="transcript-note">[unintelligible]</span> that you'd be talking about, so don't do that. Yeah, I would appreciate <span class="transcript-note">[crosstalk]</span> 

<span class="transcript-speaker">High Fidelity?:</span> You're taking things out of context, bro.

<span class="transcript-speaker">Unidentified, YT2:23:29:</span> No, I'm saying that a lot of this stuff is... what I was saying about that word is it seems it's probably just not a great term to use currently. Or anymore. Maybe let's just come up with a different <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">High Fidelity?, YT2:23:47:</span> When people try to call me a Nazi, I laugh. Because I'm not a fascist. I hate fascism. I love pretty much everybody, as long as they're not fascists. Don't talk about killing people because of their religion, or their sexuality, or what genitals they have, which are not in your fucking business anyway. As long as they don't do that.

<span class="transcript-speaker">Unidentified:</span> Yeah, I mean there's no way to move forward as a civilization in any kind of way if we're getting into "do anything you want here" of technology. That's going to require a large amount of responsibility, a lot of care...

<span class="transcript-speaker">High Fidelity?, YT2:24:26:</span> Yeah how are we doing on the responsibility of that so far?

<span class="transcript-speaker">Unidentified:</span> Honestly? It could be a lot worse. Man, the world could be... everything going on now? This tribulation? All this? Oh boy, this could be a lot worse.

<span class="transcript-speaker">High Fidelity?:</span> They are turning war into a video game. And they don't even want a video game, they want to put artificial intelligence into these drones so they can send them out to kill them.

<span class="transcript-speaker">Unidentified:</span> You know why AI doesn't make sense? You know why?

<span class="transcript-speaker">High Fidelity?:</span> Are you cool with that?

<span class="transcript-speaker">Unidentified:</span> No.

<span class="transcript-speaker">High Fidelity?:</span> Alright <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified, YT2:24:58:</span> Because of the contradiction of them trying to say that you can put consciousness and the spirit of God into an AI, which doesn't make sense because it literally means artificial. "Artificial" means not real, not natural. By definition, artificial intelligence is not intelligent. By the literal definition. You'd have to create a different kind of intelligence, and even then, you shouldn't probably shouldn't play God and basically make something that sentient that can't move or breathe. That might not be a great experience, in my opinion.

<span class="transcript-speaker">High Fidelity?:</span> You know what would be a great experience, though? What would be a great experience would be having an earbud that had an AI in it that could translate any language into your native language for you. That would be...

<span class="transcript-speaker">Unidentified 2, YT2:25:37:</span> So there's a device I saw like two years ago in China or something. It was this little handheld device and it translated everything into everything. So we can do that technically. It just hasn't been made yet. We technically...

<span class="transcript-speaker">High Fidelity?:</span> So get on that. Stop worrying about nationalism, stop worrying about God and Christianity and crap, and go out there and make my damn earbud for me, would ya dude?

<span class="transcript-speaker">Unidentified 2:</span> Are you willing to invest in my business of making that earbud? 

<span class="transcript-speaker">High Fidelity?:</span> I don't know. It depends. Are you gonna have diversity <span class="transcript-note">[crosstalk]</span> in your hires? Are you going to have female executives?

<span class="transcript-speaker">Unidentified 2:</span> I mean... why not? I don't know, why not? I don't care what people look like or where they're from, I just care about if they come into my workplace to do their job, they need to do their job. I don't want <i>any</i> like...

<span class="transcript-speaker">High Fidelity?, YT2:26:41:</span> See just by saying you're already prejudging the people who show up. You know what? I'm gonna shut up for a minute. This is Kirt's show. Kirt, you're on. 

<span class="transcript-speaker">Kirtaner, YT2:27:00:</span> <span class="transcript-note">[laughing]</span> I'm sorry... <span class="transcript-note">[laughing]</span> I'm sorry! I had to change tabs and I closed it, my bad! Hi, this is my show, I'm on indeed! What is up? <span class="transcript-note">[laughing]</span> 

<span class="transcript-speaker">High Fidelity?:</span> How many diapers do you think are being filled around the world now with this Epik hack, Kirt?

<span class="transcript-speaker">Kirtaner, YT2:27:26:</span> Over 9,000? <span class="transcript-note">[laughing]</span> I gotta go pee... <span class="transcript-note">[laughing]</span> Oh my gosh... <span class="transcript-note">[laughing]</span> I need a smoke. Alright I'm gonna go grab my pack of smokes, give me a second.
 
<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[returns to desk, is muted but is speaking]</span> ...wife calls me, she's got like a romantic corner room in Austin, Texas and I'm not there. Basically because I'm dealing with this, and the whole, uh, incident. Going right back.

<span class="transcript-speaker">Monster, YT2:28:18:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "69": "i hope your wife is ok"]</span> Wife's good. She still loves me. Thank you for asking. Yeah. So what's going on? Is HF... did HF clean up his act, or is he still lying(?) ? You know what, he's better than... HF, to be fair,  weev seems less enlightened than you, and he left. So, I have confidence in you. weev, I'm not so sure. 

<span class="transcript-speaker">High Fidelity?:</span> weev? <span class="transcript-note">[unintelligible]</span> give me a wide berth. All I can say.

<span class="transcript-speaker">Monster:</span> Yeah. Wide berth, I agree with you. He seems... I think it's a schtick though. I'm not sure that the angry thing is like legit who he is. I think he's <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Kirtaner?:</span> He is as pure a chaos agent as I have ever known on this earth, other than myself.

<span class="transcript-speaker">Monster, YT2:29:02:</span> I could imagine that. <span class="transcript-note">[reading the chat]</span> So, nealr, you had a question I think earlier. So if you wanted to ask a question I will answer it. But I'll tell you a true story about...

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "Literally a Nazi": "I think we need to pray together"]</span> I will, I'll totally pray. Before we leave I'll totally pray. So, true story. So I got this call one time.

<span class="transcript-speaker">Kirtaner?:</span> Neal wants to ask a question, let him ask his question.

<span class="transcript-speaker">Monster, YT2:29:28:</span> Yeah so... a call from an I.T. guy for a bunch of far-right people. And he told me this thing! The guy is a legitimate racist, and he said to me, "yeah, don't you know that all Blacks are cursed?" Because there's this idea that they have the [Curse of Ham](https://en.wikipedia.org/wiki/Curse_of_Ham) or something. And he says he's a Christian. I'm like, "dude, what part of 'born again, new creature' did you miss?" So, you may have a curse, but the curse is lifted in Jesus' name, so why would you conclude that Black people are cursed? Black people are not cursed. Certainly if they're Christians, they couldn't possibly be cursed. So anyway, there are lots of people who have generational hate. Their grandfather and their grandfather and whatever, they've passed on these ideas, and they've been raised with it. And just have pity on them because they're misguided and they eventually...

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "here for the comedy": "black people aren't cursed but the data is"]</span> Yeah, they're not cursed but the data is. Yeah I agree. Yeah, so, crazy stuff.

<span class="transcript-speaker">Monster, YT2:30:42:</span> You know, one thing that's kind of cool about this job: I get to do phone calls with a lot of very colorful people. I'm fairly private, so I don't typically kiss and tell, so I try to keep people anonymous where I can, but I get to meet some really colorful people. So that's fun. And actually, I'm  totally down to meet with antifa people, I've met with hardcore neo-Nazis, a guy that basically was like legit vigilante <span class="transcript-note">[unitelligible]</span> type guy... and I was like, "dude, you're not on the site of right". And I think I helped him walk off the battlefield, because what he was doing with vigilante justice was not cool.

<span class="transcript-speaker">Monster, YT2:31:30:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "JP": "One day we're going to get a documentary on Rob Monster"]</span> "...the documentary of Rob Monster..." Yeah, that'd be funny, actually. If you never get to do a movie about the crazy big story. I tell you what, here's something I started. I recommend this highly. So after I read this book _History of Providence_ like three times, and I created this URL historyofprovidence.com where people can read it for free. I developed this practice of keeping it a log. I have a providence log. It's a running log of all the different crazy things that happened in my life. This is definitely going into the providence log, because I didn't expect to have 37 people show up to to rap about life. But, I was hoping to talk to Chad, because he's got like a huge following on Twitter. I'm trying to figure this dude out. But I appreciate you guys showing up.

<span class="transcript-speaker">Monster, YT2:32:28:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "nf84": "@Rob, what kind of libertarian are you? A small-gov Republican-lite, a 'left-libertarian', or an anarcho-capitalist?"]</span> "What kind of libertarian are you?" I just believe in small government, and I believe in self-governance. I believe that if you have self-governance, that where people are accountable to each other and love their neighbors as themselves, then they will be less likely to need dictators to put them in jail, and foreign teams, and house sequestering, and stuff like that. That's why I believe in liberty, but I think that liberty as the founding fathers envisioned it was kind of predicated on the assumption that people would be self-governing. And then over the last 50 years we've become progressively a lot less good at self-governing. And now we have a mess. So that's what I would tell you, that's my version of being a libertarian. It's not heavy. I'm not like a... the doctrine of somebody's version of libertarian. I just believe in the idea that liberty and personal accountability work really well together. And the philanthropist thing, which I put on my Twitter, is like, I just think that if you have means and you love your neighbor as yourself, then you can basically use the means that you have to lift people up. I'm a bigger fan of giving people a hand up than a handout.

<span class="transcript-speaker">Unidentified:</span> Did you say memes? Uplifting people through memes?

<span class="transcript-speaker">Monster, YT2:33:54:</span> No no no. <i>Means</i>. Like means. Economic means. Like ways and means, like you have money. If you have resource...

<span class="transcript-speaker">Unidentified:</span> I have written(?) memes, my friends. Yes. I understand you.

<span class="transcript-speaker">Monster:</span> The means. As in, like, money. I'm getting a cold, guys. But it is what it is.

<span class="transcript-speaker">Unidentified:</span> The memes!

<span class="transcript-speaker">Monster, YT2:34:17:</span> That's what I would tell you, is that that if you have the ability to love your neighbor as yourself and basically give somebody a hand up, as opposed to just a handout, you can co-create abundance. And the result is that you lift people out of poverty. They in turn lift their community out of poverty. And I have seen so many examples of that. The whole mindset around scarcity is designed to get as many people as possible to compete with each other, to hoard resource, and that basically keeps us...

<span class="transcript-speaker">Unidentified:</span> Whores and resources? What did you say?

<span class="transcript-speaker">Monster, YT2:34:53:</span> They hoard. They hoard resources. They hoard. I don't think I'm <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">Undefined:</span> I'm sorry, I thought you were talking about [that guy up in Minnesota who got busted for sex trafficking](https://www.mprnews.org/story/2021/08/24/gop-donor-lazzaro-seeks-release-as-he-appears-in-court). The GOP guy.

<span class="transcript-speaker">Monster:</span> No, that that's your dirty mind. <span class="transcript-note">[puts in headphone]</span> So is this audio better? Is this audio better, or is it better with no headset?

<span class="transcript-speaker">Unidentified:</span> I think not with the headset.

<span class="transcript-speaker">Neal Rauhauser, YT2:35:18:</span> I see i've been atted <span class="transcript-note">[added? outed?]</span>. How's my audio here?

<span class="transcript-speaker">Unidentified:</span> It's wonderful.

<span class="transcript-speaker">Unidentified 2:</span> Oh, is that Neal? Or is that David? Who is that?

<span class="transcript-speaker">Rauhauser:</span> It's me, it's Neal.

<span class="transcript-speaker">Monster, YT2:35:28:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "LinsHorse": "can you send me your venmo, rob?"]</span> That's funny. Venmo. That's funny. I'll just give you guys my cell phone. 425... just don't call me now, alright? 425-765-0077. That's my cell phone. If you guys have like a problem, if you think that people are doing some nasty stuff, and you think it's urgent that I need to help you, you can call me.

<span class="transcript-speaker">Monster, YT2:35:54:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "nf84": "I like your curtains Rob"]</span> Thanks. My wife. My wife has a good taste.

<span class="transcript-speaker">Monster, YT2:36:00:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "LinsHorse": "[lifting pals outta poverty 4277250007(sic)"]</span> "lifting pals out of poverty..." <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Rob what's your favorite Bible verse?"]</span> "What's my favorite Bible verse?" My favorite Bible verse, I think that's probably [Romans 8:28](https://www.bible.com/bible/111/ROM.8.28.NIV). I would say... <span class="transcript-note">[crosstalk]</span> if you don't know it, it's "all things work together for the good of those who love God that are called according to His purpose". I think that is probably... because I think if you understand what that verse says, then you know that all lemons are for lemonade. So when this whole thing went down, I thought, "crap, what a freaking nightmare". And to basically walk into that saying, "you know what, I know there's a lemonade here somewhere", and to basically have blind faith that there's lemonade... So once we got the system secured and things were locked down to a certain degree... you might still find vulnerabilities, so if you found, let us know... then I was like, alright, I still want to have a conversation with people. And tonight seemed like a good night to do it. So I just totally followed a prompt. I'm sure my lawyers will freak out, but it doesn't matter. I'm just trying to basically solve stuff for you, <span class="transcript-note">[unintelligible]</span> people who will have dark thoughts.

<span class="transcript-speaker">Monster, YT2:37:21:</span> Somebody asked a really good question, you guys are going fast, let me find it. Here, hold on... <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Does God love Satan?"]</span> "Does God love Satan?" So, here's the deal. Here's what I've concluded. For anybody who cares to investigate this issue. So a lot of people feared... I do not fear Satan. Why do I not fear Satan? I fear God, but I don't fear Satan. I would tell you, I think the Lord showed me this, that Satan is controlled opposition. I refer to him as the corrections officer of the universe. So his job is to basically tempt you, test you, show you where you are on the mountain. The Lord chases the love, so you basically make a mistake, do something stupid, suffer the consequence, and you basically will. And if you're still stupid, you'll eventually get in jail, and then you can figure out your life there.

<span class="transcript-speaker">High Fidelity?:</span> Well, <span class="transcript-note">[crosstalk, unintelligible]</span> you're there for eternity. Like, you can't escape. It's not really... it's not like you're trying to train someone to be a better person, it's the final destination. But that's really besides the point because Rob, Neal really has a question for you and he's been trying to get your attention.

<span class="transcript-speaker">Monster, YT2:38:42:</span> Go ahead! Neal, go for it, ask your question.

<span class="transcript-speaker">Rauhauser, YT2:38:46:</span> Oh I... this is a fascinating discussion! And not at all what I anticipated, so kudos to you Rob for hosting this. It's just... in the past we've had TinyChat and lewd behavior and people getting raided by the FBI while livestreaming and things like that, so it's nice to actually come across a sort of intellectual adult discussion. I'm curious, there have been a dozen good points along the way here, but what you just said about not viewing viewing Satan as the direct opponent to God, that's very interesting. Because we have this sort of [Manichaean](https://en.wikipedia.org/wiki/Manichaeism) dualism that is the norm for a lot of Christianity, and what you just said is more... it's similar to the Muslim view. And that Shaitan is not not an opponent of Allah, he is the the trivializer. And if you if you compare notes between the Christians in the West and the things that concern them and Muslims with Shaitan, you'll find that they're using different words and reacting at a very big emotional level about those words, but often describing the same problem in society.

<span class="transcript-speaker">Monster, YT2:40:21:</span> Yep. I have a lot of Muslim friends, and we employ many Muslims, and we celebrate their holidays. I mean... some of their [unintelligible, and I learned a lot from them. And there are a lot of, I would say, enlightened Christians. Er, Muslims. But I would say, and lovely people...

<span class="transcript-note">[connection issue, Jitsi reconnects]</span>

<span class="transcript-speaker">Kirtaner, YT2:41:56:</span> I <i>swear</i> I did not do that. It was pretty funny, though.

<span class="transcript-speaker">Monster:</span> Somebody make me moderator. Somebody needs to make me moderator again. Or if somebody else is going to be the moderator, then just kind of manage the sound stuff so we don't have interruptions. But that was impressive, I don't know how you did that, but that was impressive.

<span class="transcript-speaker">Neal:</span> As soon as I speak, Kirt has to get started like that. I see how it is.

<span class="transcript-speaker">Monster, YT2:42:23:</span> No, no, no. So anyway, we were talking about Muslims. And so, where I differ from Muslims... how do I make me a moderator so I can fix this background noise? 

<span class="transcript-speaker">Kirtaner:</span> Yeah, who the hell renamed the room? <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">High Fidelity:</span> Mod! Mod! Mod! Mod!

<span class="transcript-speaker">Monster, YT2:42:42:</span> Yeah, so that's funny. So anyway, yeah.

<span class="transcript-speaker">Rauhauser:</span> I've got no audio.

<span class="transcript-speaker">Monster:</span> Really? I've got audio. I can hear you.

<span class="transcript-speaker">High Fidelity:</span> I have no video. Do I have audio?

<span class="transcript-speaker">Monster YT2:42:56:</span> That's funny... no? Alright. Are we done? Looks we got hacked. Or something. Somebody's a really good hacker. I'm not sure.

<span class="transcript-speaker">High Fidelity:</span> We've been hacked!

<span class="transcript-speaker">Kirtaner:</span> It wasn't... you could see me the whole time! My hands were nowhere near a keyboard!

<span class="transcript-speaker">High Fidelity:</span> He types with his penis, don't believe him.

<span class="transcript-speaker">Monster:</span> I gotta give a new URL. Let's try again. One second, one second. Got a new URL for you. Go there, go to that URL. Alright. That's funny. That's so funny. That's funny. So there's a dude... this is funny. So there's a dude, the one that's called "Literally a Nazi". He is, I think he's troubled. He's sending me 

<span class="transcript-speaker">High Fidelity:</span> He is literally a Nazi

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[audio distortion, unintelligible]</span>

<span class="transcript-note">[loud feedback noise]</span>

<span class="transcript-speaker">Kirtaner:</span> It's weev(?), I fucking knew it!

<span class="transcript-speaker">Monster, YT2:45:10:</span> ...alright! Heavenly Father, Abba Father, Lord, we come to you in the name of your Son, the Lord Jesus Christ. And we pray in the Spirit, Lord, take authority at this time over the demons and evil spirits, agents of Satan, all spiritual wickedness that is at work. We bind all demons, all agents of Satan. We make our curses in Jesus' name, to clear all magic, all voodoo, all witchcraft be null and void without effect. If You would take authority, Lord, at this time that whatever demon is engaged in this nonsense work stops immediately. That You would be glorified, Lord, that we have this opportunity...

<span class="transcript-speaker">High Fidelity:</span> Hey Rob, Rob! It stopped!

<span class="transcript-speaker">Monster:</span> ... in Jesus' name, Amen.

<span class="transcript-speaker">High Fidelity:</span> It stopped! But the question is, was that the <span class="transcript-note">[unintelligible]</span>, or was it the praying?

<span class="transcript-speaker">Monster, YT2:45:53:</span> So I have two different meetings going on. I have the take two, if you guys want to drop and go in there, we can do that. But I'm not sure who did that. If that was a like a hack or what. Your words can stop it, yeah.

<span class="transcript-speaker">Monster, YT2:46:05:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "LinsHorse": "the power of prayer worked"]</span> Yeah, this is... "the power of prayer worked". Yeah, there you go.

<span class="transcript-speaker">Monster, YT2:46:09:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Rob do you think you're overpaid?"]</span> "Do I think I'm overpaid?" So uh... and hey Phil! You're my... intercessors, man. Just pray over meeting. Pray over this meeting.

<span class="transcript-speaker">Unidentified:</span> Yes.

<span class="transcript-speaker">Monster:</span> Thank you brother. So do I think I'm overpaid? No, I mean, I pretty much did <span class="transcript-note">[unintelligible]</span> a bunch of years. And I think I work about 100 hours a week.

<span class="transcript-speaker">High Fidelity:</span> That's not good for you, man! You gotta take some you time, bro.

<span class="transcript-speaker">Monster, YT2:46:44:</span> No, no! But I have my hobbies. But, I feel good. I don't drink very much. I had wine today, that was good, we had Communion today. But I don't really drink much, and I try to get to sleep by 11:30 and get up around 6 or 6:30. And then try to take a nap on the weekend. So yeah, what else?

<span class="transcript-speaker">LH:</span> Are you not fasting?

<span class="transcript-speaker">Monster, YT2:47:19:</span> I fasted today. I did. I fasted. I did. I fasted from Wednesday afternoon until Thursday evening. 

<span class="transcript-speaker">LH:</span> How can you drink if you're fasting?

<span class="transcript-speaker">Monster:</span> I did fast.

<span class="transcript-speaker">High Fidelity:</span> Aw shit.

<span class="transcript-speaker">Monster:</span> So my fast ended with Communion. We had bread and wine.

<span class="transcript-speaker">C:</span> <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Rauhauser:</span> So is JoJo still here? If Camp is here I just I want to say to Rob <span class="transcript-note">[crosstalk]</span> 

<span class="transcript-speaker">C:</span> <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Unidentified:</span> Oh my god, fuck!

<span class="transcript-speaker">High Fidelity:</span> He's speaking in tongues, let him go man.

<span class="transcript-speaker">Kirtaner:</span> <span class="transcript-note">[unintelligible]</span>

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Rauhauser, YT2:48:06:</span> I just wanted to say thank you out here in public, for removing Joseph Camp from the Internet. That guy has been... I don't know, he's not the number one pain my ass but he's definitely in the top five when he's active. And you know, the natural right of free speech aside, he contributes nothing to the marketplace of ideas that our founding fathers envisioned. He's just an incredibly damaged human being who gets online and acts out.

<span class="transcript-speaker">Monster, YT2:48:41:</span> Yeah. Yeah, not his highest self. So yeah, we gotta work on that. And I commit to working with him to try to be a better version of himself. And in the meantime, we're not going to turn YourDaddyJoey back on, because I think it's divisive, and I think that... needs to basically heal. I mean some of this antifa stuff that has been going on the last year is kind of crazy. I mean it would just be good if we just had a little bit less of like, burning down neighborhoods and stuff that. I think we need to do a little better.

<span class="transcript-speaker">LH:</span> I think that Catgod wants to say a prayer.

<span class="transcript-speaker">Kirtaner:</span> Catgod!

<span class="transcript-speaker">LH:</span> Catgod, say a prayer.

<span class="transcript-speaker">Catgod:</span> <span class="transcript-note">[unintelligible]</span> ...and bless your cats.

<span class="transcript-speaker">D, YT2:49:37:</span> Does anybody here follow Mardu?

<span class="transcript-speaker">Catgod:</span> Anytime you see JoJo camp online you just ignore that <span class="transcript-note">[unintelligible]</span> and go pet some cats.

<span class="transcript-speaker">Monster, YT2:49:54:</span> "Literally a Nazi"... This dude is full-on demon spawn, man. We must be making too much impact because he is full-on demon spawn.

<span class="transcript-speaker">Rauhauser:</span> We talking about JoJo?

<span class="transcript-speaker">Monster, YT2:50:04:</span> I don't know, whoever "Literally a Nazi" is. There's a user named "Literally a Nazi". He's troubled with his assessment.

<span class="transcript-speaker">Catgod:</span> Are y'all going to ban me for smoking on camera?

<span class="transcript-speaker">Monster:</span> No. Whatever. You do you. So anyway, exciting times around here. What else we want to talk about?

<span class="transcript-speaker">Catgod:</span> Send Catgod five dollars to cashtag $catgodcatgod

<span class="transcript-speaker">Kirtaner:</span> Give Catgod his five dollars, he won't stop asking! For the love of God, somebody do it already.

<span class="transcript-speaker">LH:</span> Cashapp is $catgodcatgod

<span class="transcript-speaker">Rauhauser, YT2:50:49:</span> For those of us who don't have five dollars handy, are we still assisting with homework? 

<span class="transcript-speaker">Catgod:</span> Uh, no, I just want five dollars.

<span class="transcript-speaker">Kirtaner:</span> I'm pretty sure he's got the homework covered.

<span class="transcript-speaker">Monster, YT2:51:03:</span> Yep. That's funny. So yeah anyway, it says... <span class="transcript-note">[looking at chat]</span> "PKR..." <span class="transcript-note">[crosstalk]</span> I don't watch much <span class="transcript-note">[crosstalk]</span> Somebody asked if I watch Netflix. <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">High Fidelity:</span> You don't watch Netflix? Do you watch any television? 

<span class="transcript-speaker">Monster, YT2:51:28:</span> Pretty much not. I almost don't watch any television. No time.

<span class="transcript-speaker">LH:</span> What do you think for fun?

<span class="transcript-speaker">Monster:</span> You know what, I grow a lot of blueberries. We have like 80 blueberry bushes. And I actually read a ton, I have like two libraries. If you could see the stack of books that are around me, I think you'd be impressed.

<span class="transcript-speaker">LH:</span> Do you read [Parler](https://en.wikipedia.org/wiki/Parler)?

<span class="transcript-speaker">Monster, YT2:51:54:</span> What?

<span class="transcript-speaker">LH:</span> Have you ever read Parler?

<span class="transcript-speaker">Monster:</span> What's Palmer? Oh the website, Parler. I'm not a member of Parler <span class="transcript-note">[crosstalk]</span> 

<span class="transcript-speaker">Kirtaner:</span> I had a budding relationship with its CEO for a while, he was a good sport. 

<span class="transcript-speaker">Monster, YT2:52:16:</span> Yeah? Do you want to explain that one? Wanna unpack that for us?

<span class="transcript-speaker">Kirtaner:</span> Well, myself and another friend kind of made them look a joke, and then he invited me to be a verified influencer on his platform as a... I don't even know. I don't know why he did that, but I mean it was fun.[^fn16] It was a fun time. He's very nice, very nice gentleman! I liked him.

<span class="transcript-speaker">Monster, YT2:52:39:</span> Oh [John Matze](https://en.wikipedia.org/wiki/Parler#Company) is here! John Matze's in the house! Get the heck out.

<span class="transcript-speaker">Kirtaner:</span> Oh! John! My man! I was just talking about how wonderful you are.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Monster, YT2:52:52:</span> John, you got video? 

<span class="transcript-speaker">High Fidelity:</span> Is this <i>the</i> John Matze? John, are you here bro?

<span class="transcript-speaker">Monster, YT2:52:57:</span> You gotta decloak so we can verify this. If your camera works. If your camera doesn't work...  we never met, but we did become Parler's registrar, so that was cool.

<span class="transcript-speaker">Monster, YT2:53:18:</span> Gosh. How's everybody feeling? You guys... everybody COVID-free?

<span class="transcript-speaker">LH:</span> I feel like... the power of god... I've got nothing. Catgod, say a prayer.

<span class="transcript-speaker">Catgod:</span> I did.

<span class="transcript-speaker">LH:</span> Louder.

<span class="transcript-speaker">Rauhauser:</span> Did you get five bucks for it?

<span class="transcript-speaker">Catgod:</span> No. I should. 

<span class="transcript-speaker">Rauhauser:</span> Hell yeah you should.

<span class="transcript-speaker">Monster, YT2:53:44:</span> Yeah well, that's funny. Well I gotta tell you that Satan is burning up because of this video. We did something kind of clever, right? So Satan wants to divide. He wants to basically create divisiveness, hate, polarity, and that polarity is breaking down. There's awakening happening all over the world because people have consensus around truth, and it drives Satan crazy. And satan ultimately loses. He's going to go to the pit. Ultimately he goes to the pit. That's the deal, he knows it, and we know that God wins in the end and Jesus Christ will rule and reign from the <span class="transcript-note">[unintelligible]</span> for a thousand years. That's what I believe. So, it's coming, we're almost there.

<span class="transcript-speaker">LH:</span> Do you think Jesus will save you from the hack?

<span class="transcript-speaker">Monster, YT2:54:42:</span> I think that Jesus basically allows evil to happen because he gives us free will. But I think that in the end he transmutes evil so when there's injustice... and it's repaid sevenfold. So this hack could happen, it's going to actually repay Epik with a bounty sevenfold. That's God's... <span class="transcript-note">[noise from other participant, unintelligible]</span> ...but when Satan overplays his hand, does something really stupid, then the Lord transmutes that into good.

<span class="transcript-speaker">Kirtaner:</span> For the love of God, whoever that is, mute your shit!

<span class="transcript-speaker">Unidentified:</span> You said that the hack was done by Satan and God will repay it sevenfold?

<span class="transcript-speaker">Monster, YT2:55:30:</span> He does. That's how it goes. That's God's economic.

<span class="transcript-speaker">LH:</span> Do you know who David Johnson is?

<span class="transcript-speaker">Monster, YT2:55:33:</span> I don't, who's David Johnson?

<span class="transcript-speaker">LH:</span> <span class="transcript-note">[laughing]</span> He's everyone.

<span class="transcript-speaker">Monster:</span> He's everyone. Alright. That's good. You seem pretty enlightened. What do you believe? Is there a plan of salvation in your methodology?

<span class="transcript-speaker">LH:</span> Jainism. Jainism.

<span class="transcript-speaker">Monster:</span> Jainism.

<span class="transcript-speaker">LH:</span> Have you heard of it?

<span class="transcript-speaker">Monster:</span> So are you from India? Or where do you come from?

<span class="transcript-speaker">LH, YT2:56:02:</span> I live in England

<span class="transcript-speaker">Monster:</span> In England.

<span class="transcript-speaker">Catgod:</span> Where's uh... <span class="transcript-note">[unintelligible, cat meowing]</span>.

<span class="transcript-speaker">LH:</span> I'm trying to see the Christian light, which is why I'm here.

<span class="transcript-speaker">Unidentified:</span> Uh... he's called Rob Monster. I guess that's his real fucking name.

<span class="transcript-speaker">Monster, YT2:56:18:</span> It's my real name. My birth name is Robert Willard Monster. Those of you who think I'm related to [Rob Zombie](https://en.wikipedia.org/wiki/Rob_Zombie), I'm not. My birth name is Robert Willard Monster. And then when I went to college I changed my first name from Robert to Rob... I became known as Rob Monster. So that's how I became Rob Monster. And that was before I knew who Rob Zombie was.

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster, YT2:56:54:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "q": "is rob gonna host a party every night for us now or what"]</span> Alright. "Is Rob gonna host a party every night for us now or what?" You know what? Do you guys want to do this again tomorrow? I'll do it again tomorrow. I will.

<span class="transcript-speaker">Monster, YT2:56:59:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Rob do you like Lex Luther?"]</span> Do I like Lex Luthor? Alright, do you guys want to hear a funny story? I'll tell you a funny story about Lex Luthor.

<span class="transcript-speaker">Kirtaner:</span> I love anything funny!

<span class="transcript-speaker">Monster:</span> Alright, that's good. So [Lex Luthor](https://en.wikipedia.org/wiki/Lex_Luthor). So, so, NPR did [this bit](https://www.npr.org/2021/02/08/965515655/meet-rob-monster-the-self-described-lex-luther-of-the-internet) where I was referred to as "the Lex Luthor of the Internet". So let me tell you how this went down. [Bobby Allyn](https://twitter.com/BobbyAllyn), who is a lovely charming guy, but he's kind of an operative. <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Is NPR fake news?!?"]</span>  NPR is fake news. Yes, NPR is fake news. They're propagandists. So he came to my home for a two and three-quarter hour interview. I made him a very good latte, he admitted it was a good latte. And we sat down...

<span class="transcript-speaker">Unidentified:</span> Who the fuck is this clown?

<span class="transcript-speaker">Monster, YT2:57:46:</span> ...and then on the basis of this two and three quarter hour interview, he took six sentences of mine and turned it into a hit piece. And the part about "the Lex Luthor of the Internet", he asked me this question: "why do people think... why do you think the media is unkind to you?" And I said to him, I said, "well, with a name Rob Monster, it's like the Lex Luthor of the Internet." So if you wanted to, like, cast a villain to create, I don't know, a negative story, so you could be like the [Charlie of Vietnam](https://en.wikipedia.org/wiki/Viet_Cong#Names) but on the Internet... Rob Monster would be a really good name, because it sounds like a villain. But I'm not a villain. So that's kind of how I think it went down. And so the scriptwriters who orchestrate this stuff, they decided to make me the villain. What they underestimated is that it's going to cost them some stuff. Anonymous, you guys got it wrong. I don't know who runs... you're not on Twitter, but you guys got it wrong. We don't think...

<span class="transcript-speaker">LH:</span> David Johnson

<span class="transcript-speaker">Monster, YT2:58:56:</span> David Johnson is the propaganda guy from Anonymous? Okay good to know.

<span class="transcript-speaker">Rauhauser:</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster, YT2:59:00:</span> And then Wikipedia! Those of you who think Wikipedia is anything other than propaganda, you're...

<span class="transcript-speaker">Unidentified:</span> He's just fucking around talking about it. Did he like apologize for getting everybody's fucking data? Or is he just rambling like a fucking idiot?

<span class="transcript-speaker">Monster:</span> Uh, no. No, no, no, not like a fucking idiot.

<span class="transcript-speaker">Unidentified:</span> Oh, you can hear me?

<span class="transcript-speaker">Monster:</span> I can.

<span class="transcript-speaker">Unidentified, YT2:59:22:</span> You fucking clown.

<span class="transcript-speaker">Monster:</span> ...because you can mute yourself, or you can... what's your name?

<span class="transcript-speaker">Unidentified:</span> No I'm not gonna bother. No thank you. Continue on, keep going.

<span class="transcript-speaker">Monster:</span> Alright. Well if you're gonna masturbate, just turn the audio off okay, because I don't really want to hear it. 

<span class="transcript-speaker">Unidentified:</span> Yeah you do.

<span class="transcript-speaker">Monster:</span> No, I don't really get off on it.

<span class="transcript-speaker">Unidentified:</span> Yeah you do. That's why you're talking about it.

<span class="transcript-speaker">Monster, YT2:59:56:</span> Gosh... Oh yeah, so Wikipedia. I think Wikipedia is 98% useful and 2% arsenic. The problem is you never know what's the arsenic. So Wikipedia is going down the rabbit hole of becoming [Snopes](https://en.wikipedia.org/wiki/Snopes), and I hope that they turn from their path because they have basically become the truth ministry, like a very Orwellian way. They're basically cataloging a bunch of media links into a piece and they become the kind of ministry of truth. The arbiter of what's true. And then Google, which pays a lot of money to Wikipedia, they're probably the main sponsor at this point by far.[^fn17] Google then basically amplifies their version of truth.

<span class="transcript-speaker">Monster, YT3:00:42:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "MLN": "Wikipedia, do you even understand how the governing of Wikipedia works? Google doesn't pay them"]</span> Yeah, Google does pay them. Google is a very big sponsor of Wikipedia. I'm happy to talk with anybody who wants to discuss it. Look up [Larry Sanger](https://en.wikipedia.org/wiki/Larry_Sanger) on Twitter, if you don't know him. He tells you a lot of stuff about Google... about Wikipedia. He was one of the founders.

<span class="transcript-speaker">High Fidelity, YT3:01:04:</span> Hey, did you know that [Sergey Brin](https://en.wikipedia.org/wiki/Sergey_Brin) used to hang out with [Harvey Weinstein](https://en.wikipedia.org/wiki/Harvey_Weinstein) and [Wendi Deng](https://en.wikipedia.org/wiki/Wendi_Deng_Murdoch)?

<span class="transcript-speaker">Monster:</span> Yeah, makes sense. It doesn't surprise me.

<span class="transcript-speaker">High Fidelity:</span> Yeah, so you've got a serial sexual assaulter and a Chinese spy. Isn't that crazy?

<span class="transcript-speaker">Monster, 3:01: 20:</span> Yeah, it's possible. <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Rob what do you think of Antifa?"]</span> So somebody asked me about... Hellbat asked me what I think of antifa. I think antifa is an op. I don't think it's organic. I think it's basically an op. And I think that [QAnon](https://en.wikipedia.org/wiki/QAnon) is an op. I think that... <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">High Fidelity:</span> Who runs QAnon, do you think?

<span class="transcript-speaker">Kirtaner:</span> QAnon is indeed an op.

<span class="transcript-speaker">High Fidelity:</span> Noo. Shut up.

<span class="transcript-speaker">LH:</span> Everything's a psyop.

<span class="transcript-speaker">Monster, YT3:01:52:</span> No, no. Guys. So, guys this idea of like... brigading a bunch of people who think they have access to secret information, and they, you know, using different systems. Then they rub up against each other, creating this dichotomy of two polar enemies who think the other side is trying to wipe each other out. And that's where you get the insanity that we've had to endure for the last 18 months. 

<span class="transcript-speaker">LH:</span> <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">High Fidelity:</span> I actually know an organization that has access to secret data. It's kind of fun.

<span class="transcript-speaker">Monster, YT3:02:25:</span> Have access to what?

<span class="transcript-speaker">Unidentified:</span> Access to your mom.

<span class="transcript-speaker">Unidentified 2:</span> He said access to... I think, secret data.

<span class="transcript-speaker">Monster, YT3:02:35:</span> Oh yeah, secret data. Yeah. I don't know.

<span class="transcript-speaker">Rauhauser:</span> But as we've seen here just in the last day or week or month or through this year, nothing is really secret. Secrets have a dwell time, and then things are getting dumped in public.

<span class="transcript-speaker">Monster, YT3:02:57:</span> That's it. I mean, [Epstein](https://en.wikipedia.org/wiki/Jeffrey_Epstein). I mean, that's some stuff. But I think that they're all right.

<span class="transcript-speaker">NF:</span> Yeah Trump! [Jean Carroll's lawsuit](https://en.wikipedia.org/wiki/Donald_Trump_sexual_misconduct_allegations#E._Jean_Carroll_(1995_or_1996)) is going forward. He's gonna have to give his DNA in a cup. 

<span class="transcript-speaker">Monster, YT3:03:09:</span> Yeah, yeah. I'm totally driving "Literally a Nazi" crazy doing these private chats. This is pretty funny. Yeah, so I think that there's a lot of truth that's coming out. So what happens is, when you create this crazy period where people feel like they're about to lose everything, there's a saying when people lose everything... when they have nothing left to lose, they lose it.

<span class="transcript-speaker">High Fidelity:</span> Oh are you talking about when the money launderers are gonna eventually crash crypto or no? Is that something else?

<span class="transcript-speaker">Monster:</span> I'm not referring to that as much as people who do deathbed confessions. I mean there's a lot of stuff that's coming out now, and free speech platforms like [Gab](https://en.wikipedia.org/wiki/Gab_(social_network)) and [Parler](https://en.wikipedia.org/wiki/Parler) and [BitChute](https://en.wikipedia.org/wiki/BitChute) and whatnot. [CloutHub](https://www.latimes.com/california/story/2021-01-16/valley-secession-jeff-brain-clouthub-anti-twitter). More to come. And these sites basically are trafficking in truth, and of course you have to, like [Reddit](https://en.wikipedia.org/wiki/Reddit), like [4chan](https://en.wikipedia.org/wiki/4chan). You have to kind of shorten...

<span class="transcript-speaker">High Fidelity:</span> Rob, some of these people are talking about killing my relatives. How do you want me to feel about that, man? That hits deep, bro.

<span class="transcript-speaker">Monster, YT3:04:19:</span> I somehow... somehow I'm no longer the moderator of this forum so I can't mute them or boot them. So whoever's the moderator at this point, you're gonna have to take care of business and be a responsible steward of this completely organic misfit group.

<span class="transcript-speaker">L:</span> Do you want to just make another one yourself and then just post that?

<span class="transcript-speaker">Monster:</span> Eh. <span class="transcript-note">[reading the chat. Full comment in chat was from "High Fidelity": "actually I'm a mod"]</span> "Actually I'm a mod." High Fidelity is the moderator, that's cute. That's really good. If you could be a good steward, HF, then just mute people who are having too much background noise. It's working good right now.

<span class="transcript-speaker">Rauhauser, YT3:04:59:</span> Going back to that, Rob, if we could? The notion that there's the truth on Gab and Parler. I mean, there's absolutely been some criminal activity on there. No question about it.

<span class="transcript-speaker">Monster:</span> Yeah.

<span class="transcript-speaker">Rauhauser:</span> And we... society-wise, the big picture society-wise, we have what's been labeled as "free speech absolutism". I think that there are problems there. There are issues there as far as jurisdiction, as far as what is acceptable behavior. I mean the internet has basically, of all the things that have been devalued by the Internet over the years, the value of a good punch in the mouth has really been taken away. Because there's a lot of things... even, you look at the people in this chat. There's things that they would just never, never say in person because it would quickly escalate to an etiquette lesson. This  is something that I've been puzzling over since... I don't know, for the last ten years or so. And having had so much trouble with with JoJo Camp in particular, and various people like him over the last decade, I'm at a loss for what we do as a society to correct problems like that without interdicting the natural right of free speech and without harming our economy in the process. I mean it's really a serious puzzle.

<span class="transcript-speaker">Monster, YT3:06:44:</span> Yeah. I think that there's a lot of broken processes, but guess what? We get to build it. The word on the street is, [World Economic Forum](https://en.wikipedia.org/wiki/World_Economic_Forum) wants to basically have the [Great Reset](https://en.wikipedia.org/wiki/Great_Reset).[^fn10] And as that Reset happens we get to decide what we build better too. On the one side of the duality you have a desire to... emerges a technocratic control grid,[^fn18] Orwellian stuff, [universal basic income](https://en.wikipedia.org/wiki/Universal_basic_income), nobody owns anything...

<span class="transcript-speaker">High Fidelity:</span> Whoa whoa whoa. How is universal basic income Orwellian?

<span class="transcript-speaker">Monster, YT3:07:21:</span> Well no, it's Orwellian if it comes with terms and conditions like "hand in everything that you own, you own nothing..."

<span class="transcript-speaker">High Fidelity:</span> Nobody's going to say that. Where is that coming from?

<span class="transcript-speaker">Monster:</span> Oh you wait!

<span class="transcript-speaker">High Fidelity:</span> No! Why are you so scared, Rob? Universal basic income has been proven to not be wasted on drugs or alcohol or frivolous things. People pay off their debts, and it helps actually move them forward in society. There are experiments that have been done, Rob. 

<span class="transcript-speaker">B, YT3:07:55:</span> I don't disagree with his point. I will say, though, that one of the reasons why these decisions can often be hard to make, or have specifics over... maybe I'll say... maybe not doing it, but the specifics of it has to do not with what happens a year from now, not ten years from now. It has to do with what's going to happen to our civilization 100,000 years from now. And we're all obsessively OCD about binding, and limitations, because the true nature of reality means that once you hit "do anything" tiers of technology you are screwed unless you have the existence of God in your civilization. So I'm just saying... <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">High Fidelity, YT3:08:35:</span> Are you specifying a Judeo-Christian God? Are you saying that only a Judeo-Christian God... or are you willing to welcome all gods? Because I have friends who are Hindu and there's a lot of Hindu gods, and so you got to have a big table for a lot of Hindu gods, you know what I'm saying?

<span class="transcript-speaker">L:</span> There are many <span class="transcript-note">[unintelligible]</span> ones for two and two for one and as a result they have no knowledge of either one. Many have confused God <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">High Fidelity:</span> Okay so you're hung up on your Judeo-Christian mindset is what you're telling me. You're stuck in your little "this is my religion" box, and "I'm gonna stick with it and I'm gonna ignore all these massive wonderful histories". Like do you know the story of <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">L:</span> You know that I also studied the Hindu Vedas, right? You're making many assumptions about me...

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Rauhauser, YT3:09:24:</span> ...here in that the world is... On the one hand we have the Abrahamic religions, the monotheism. And...

<span class="transcript-speaker">High Fidelity:</span> Sons of Shev(?), bro.

<span class="transcript-speaker">Rauhauser:</span> And on the other hand the Vedantic traditions, so Buddhism and Jainism and Hinduism and <span class="transcript-note">[unintelligible]</span> of Islam and that earlier Vedantic thinking. And then we don't give enough credit to, because they're not particularly technological usually, the animists who are still close to nature. And the notion that there's some sort of culture war, that it's Christianity against Islam, and we certainly have spent a lot of money doing that but... 

<span class="transcript-speaker">C, YT3:10:15:</span> Dude, there have been crusades for a thousand years.

<span class="transcript-speaker">High Fidelity:</span> Yeah so let's knock that shit off. It's wasteful. 

<span class="transcript-speaker">C:</span> <span class="transcript-note">[crosstalk]</span> thousand years, crusades.

<span class="transcript-speaker">Rauhauser:</span> <span class="transcript-note">[crosstalk]</span> ...fundamentally useless activity in Afghanistan and Iraq. We're now going to see that China, having avoided those problems, rises.

<span class="transcript-speaker">Monster, YT3:10:37:</span> I don't know, man... <span class="transcript-note">[crosstalk]</span> ...knocking at the door. There's a very strong possibility that you might see it all come unwind really quickly. We'll see. Why do you think the United States are so freaking happy that they got out of China? That doesn't mean that China doesn't have a lot of things that work well, I think if they're a...

<span class="transcript-speaker">High Fidelity:</span> Well they allowed China for a while, but then the God people tried to take over everything, so China stamped down on the God people.

<span class="transcript-speaker">Monster, YT3:11:22:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "MLN": "Rob have you ever had a discussion with a wumao?"]</span> MLN said, "have you ever had a discussion with a [wumao](https://en.wikipedia.org/wiki/50_Cent_Party)?" I have no idea what a wumao is. W-u-m-a-o, anybody know? Maybe MLN will say something. I don't know, I'll look it up.

<span class="transcript-speaker">Rauhauser:</span> Well, wait a minute is that <i>the</i> MLN?

<span class="transcript-speaker">Unidentified:</span> Yes, it is.

<span class="transcript-speaker">Unidentified 2:</span> Yes, that's <i>the</i> MLN.

<span class="transcript-speaker">Rauhauser, YT3:11:47:</span> If that's the MLN, stop being a weenie and turn your microphone on, man. You're good at this kind of stuff. Get in here and contribute.

<span class="transcript-speaker">Hellbat:</span> Play bro...

<span class="transcript-speaker">Monster, YT3:12:00:</span> <span class="transcript-note">[reading from a webpage]</span> "Wumao are Chinese citizens paid to spread propaganda..." I didn't know that. That's very interesting. I'm not surprised...

<span class="transcript-speaker">Hellbat:</span> Well, are you familiar with that fellow named [Guo Wengui](https://en.wikipedia.org/wiki/Guo_Wengui)?

<span class="transcript-speaker">Monster:</span> Yeah, yes.

<span class="transcript-speaker">Hellbat:</span> Yeah that's one of them.

<span class="transcript-speaker">Monster:</span> Got it, good to know. That's good to know. Well, fascinating, gosh guys, you guys are...

<span class="transcript-speaker">Rauhauser:</span> Hold on, hold on. Someone just credited him as being a Chinese propagandist?

<span class="transcript-speaker">C, YT3:12:27:</span> He's anti-[CCP](https://en.wikipedia.org/wiki/Chinese_Communist_Party).

<span class="transcript-speaker">High Fidelity:</span> No, he's... he's...

<span class="transcript-speaker">Unidentified:</span> Super anti-CCP

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">High Fidelity, YT3:12:34:</span> He's an infiltrator. A CCP infiltrator who's here to, while fighting the CCP, also surreptitiously get ahold of all the people who are in the CCP.

<span class="transcript-speaker">Monster:</span> Got it, control government. Okay, good to know. It's not exactly the first time that play's been played. That's interesting.

<span class="transcript-speaker">High Fidelity, YT3:12:55:</span> Yeah, you want to know another thing that got played? Here's one for you, Rob. Have you ever heard of the company called [Palantir](https://en.wikipedia.org/wiki/Palantir_Technologies)?

<span class="transcript-speaker">Monster:</span> Yeah, yeah. They're not a client, as far as I know. But I know them.

<span class="transcript-speaker">High Fidelity, YT3:13:09:</span> Yeah. Did you know that one of the founders like, beat and raped and tortured and completely mindfucked a young girl?

<span class="transcript-speaker">Rauhauser:</span> Well...

<span class="transcript-speaker">LH:</span> I mean, Donald Trump's had abortions...

<span class="transcript-speaker">Monster, YT3:13:20:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "Hellbat": "Rob after you log off tonight demonic spirits will enter your home"]</span> So there's somebody here, Hellbat, he's got an attitude issue. He says "after you log off tonight, demonic spirits will enter your home." Heavenly Father, Abba Father, I declare in the name of the Lord Jesus Christ that that will not happen. I bind all demons and all evil spirits, all agents of Satan in the name of the Lord Jesus Christ. Take authority over it and send them to the abyss(?), if they were to come so far. And give You all the glory. Yeah. My God, my God, my God is mighty. He is in you and He is in me.

<span class="transcript-speaker">L:</span> You know Solomon's system(?) of his temple is really templated on a lot of things...

<span class="transcript-note">[connection issue, Jitsi reconnects]</span>

<span class="transcript-speaker">Rauhauser, YT3:15:17:</span> ...turn the mic down a little.

<span class="transcript-speaker">Kirtaner:</span> Demon hackers on steroids!

<span class="transcript-speaker">Unidentified:</span> Turn your shit down.

<span class="transcript-speaker">Monster, YT3:15:25:</span> So, uh, the intercessors. You guys take authority over this. And uh... <span class="transcript-note">[feedback sound]</span> the moderator <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Catgod:</span> <span class="transcript-note">[holds a gallon-sized bag of marijuana up to the camera]</span> You see that demons? You see that demons? God has given me, he's just given me <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">C:</span> What you smoking on, Catgod?

<span class="transcript-speaker">Catgod:</span> Got some A1 Yolo, got some Cherry Lime Rickey.

<span class="transcript-speaker">Monster, YT3:15:57:</span> That's funny.

<span class="transcript-speaker">Catgod:</span> But all them demon n*****s, He's just giving them reggie.

<span class="transcript-speaker">High Fidelity:</span> <span class="transcript-note">[holding vape]</span> NYC Flow.

<span class="transcript-speaker">Monster, YT3:16:06:</span> Um, gosh guys. 

<span class="transcript-speaker">LH:</span> <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Monster, YT3:16:12:</span> Sun is setting in... what time is it in Honolulu? Then sun has set. Yom Kippur has ended, I think. So hopefully you made wise choices, and are set for an auspicious rest of the year. And for those of you who are still trying to figure it out: may God bless you, direct your <span class="transcript-note">[unintelligible]</span> May the Holy Spirit minister to you and lead you to a path of righteousness. I'll tell you what, though. I believe everybody has a purpose, everybody has a calling. And when you figure that out, when you surrender to the Lord's will, you will discover your spiritual inheritance and be led to the thing that you were made to perform. The thing that you were intended to accomplish. And you will have treasure for eternity, and I would encourage you to consider the possibility that life in all its complexity is... <span class="transcript-note">[crosstalk]</span> ...that there is a Designer. There is an Architect. And the meaning of life is to figure out the identity of who the Creator is, and what He wants. That would be my very strong encouragement.

<span class="transcript-speaker">Unidentified, YT3:17:37:</span> Wait, what did I try to...? How do we come back next time? Like is there a Discord or something?

<span class="transcript-speaker">High Fidelity:</span> "Does Rob Monster have a Discord"? Is that what I heard?

<span class="transcript-speaker">Monster:</span> I don't have a [Discord](https://en.wikipedia.org/wiki/Discord_(software)). <span class="transcript-note">[crosstalk]</span> I do have a [Telegram](https://en.wikipedia.org/wiki/Telegram_(software)).

<span class="transcript-speaker">Unidentified:</span> I just meant this video chat.

<span class="transcript-speaker">LH:</span> What's your Telegram?

<span class="transcript-speaker">Rauhauser:</span> Yeah, I think this is a much better platform. This is really handy. Nothing invasive, just get in and talk. 

<span class="transcript-speaker">C:</span> Yeah it's [Jitsi](https://en.wikipedia.org/wiki/Jitsi). You ain't never heard of Jitsi, Neal?

<span class="transcript-speaker">Monster, YT3:18:12:</span> By the way, we self-host this. I encourage you to check it out. You can run Jitsi very easily on any Linux OS, but I would say also there's an app, so this doesn't work... this is an RTC relay so it doesn't work well on mobile phones. But you can install the Jitsi app on iOS or Android and it will work that way. Yeah so you can use it. So you don't need to basically be surveilled on [Zoom](https://en.wikipedia.org/wiki/Zoom_(software)) and whatnot. This is a really good option, that's why we self-host this chat service.

<span class="transcript-speaker">High Fidelity:</span> Have they had security <span class="transcript-note">[unintelligible]</span> with the telephone app?

<span class="transcript-speaker">Monster:</span> But we also... anybody who wants to have a self-hosted instance of Jitsi on your own domain name, Epik will set it up for you, and we don't charge much. We haven't commercialized it as a product. But if you want help setting up your own, you can do that. Looks like Catgod is now the moderator.

<span class="transcript-speaker">Unidentified:</span> Oh God. Oh no.

<span class="transcript-speaker">Kirtaner:</span> Catgod! Be a benevolent god!

<span class="transcript-speaker">Rauhauser, YT3:19:31:</span> Whoever wrote this scene, Hollywood's not gonna buy it.

<span class="transcript-speaker">Monster, YT3:19:32:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "..": "are you taking ivermectin rob ?"]</span> I got a question of if I'm taking [Ivermectin](https://en.wikipedia.org/wiki/Ivermectin). I'm not taking ivermectin.

<span class="transcript-speaker">LH:</span> Ivermectin's mine.

<span class="transcript-speaker">High Fidelity:</span> Don't... don't use that, Rob. That's for animals. 

<span class="transcript-speaker">LH:</span> I take it daily.

<span class="transcript-speaker">Monster, YT3:19:48:</span> I have some, but I haven't taken it...

<span class="transcript-speaker">High Fidelity:</span> No, no, no, no...

<span class="transcript-speaker">LH:</span> Can I have it?

<span class="transcript-speaker">Unidentified:</span> Honestly, the best advice I can give anyone for this stuff, this sickness, is focus on your breathing. If you get sick, just focus on your breathing.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Kirtaner:</span> For those in the audience who were asking if Libby is present, she says hi.

<span class="transcript-speaker">LH:</span> Can I buy your ivermectin?

<span class="transcript-speaker">Monster, YT3:20:18:</span> That's funny... <span class="transcript-note">[reading the chat. Full question in chat was from "cody": "DID U VACCINATE ROB?"]</span> "Did I vaccinate?" No, I didn't vaccinate, and I haven't taken any action(?) I do take [zinc](https://www.covid19treatmentguidelines.nih.gov/therapies/supplements/zinc/) and [NAC](https://en.wikipedia.org/wiki/Acetylcysteine), and again, try to get out in the sun every day for at least a few minutes. And also I eat a lot of antioxidants. 

<span class="transcript-speaker">LH:</span> Do you like bofa?

<span class="transcript-speaker">Monster:</span> And I do believe there is a Spirit of Infirmity and I believe that... oh! It's funny, because I was in a prayer meeting yesterday, and after the prayer meeting this soreness that I had in my left shoulder for like a month and a half, I couldn't feel it. I'm completely back to normal, so it's great. 

<span class="transcript-speaker">LH:</span> Rob, do you like bofa?

<span class="transcript-speaker">Unidentified:</span> And... out.

<span class="transcript-speaker">Catgod:</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Unidentified, YT3:21:22:</span> Rob, what do you think Satan would post on the Internet?

<span class="transcript-note">[music]</span>

<span class="transcript-speaker">Monster:</span> Uh, what do I think Satan would post on the Internet?

<span class="transcript-speaker">Unidentified:</span> Yeah, where would he hang out?

<span class="transcript-speaker">Kirtaner:</span> On my Twitter timeline!

<span class="transcript-speaker">Monster, YT3:21:35:</span> I think he gets around. I think he's one individual, I think he gets around. He might even be hanging out with us tonight, I don't know.

<span class="transcript-speaker">Kirtaner:</span> He might be me <span class="transcript-note">[laughs]</span>

<span class="transcript-speaker">High Fidelity:</span> He's the [hacker known as 4chan](https://knowyourmeme.com/memes/the-hacker-known-as-4chan).

<span class="transcript-speaker">LA:</span> More or less.

<span class="transcript-speaker">Monster, YT3:21:54:</span> Alright. Gosh guys. <span class="transcript-note">[reading the chat. Full comment in chat was from "Hellbat": "Satan (sic) with us tonight Rob!"]</span> "Satan's with us tonight..." He might be! He loses in the end, though. I think he was in the chat earlier. He was giving me some private chats, trying to tell me stuff.

<span class="transcript-speaker">High Fidelity:</span> Hey Rob, can people who aren't Christian go to <span class="transcript-note">[unintelligible]</span>?

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Catgod:</span> Hey Rob!

<span class="transcript-speaker">Monster:</span> Yo.

<span class="transcript-speaker">Catgod:</span> <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Monster:</span> Say that again?

<span class="transcript-speaker">Catgod:</span> You don't, you're not one of those fake churches where they say cats don't go to heaven, right?

<span class="transcript-speaker">Monster:</span> I don't know where the pets go. <span class="transcript-note">[crosstalk]</span> I don't know where the cats go. I think God loves us enough that he'll probably allow us to have pets in eternity, but <span class="transcript-note">[crosstalk]</span> I don't think pets are eternal, I don't believe they are. Because God did make it so meat was available to people... <span class="transcript-note">[loud music]</span> ...vegetarian or vegan.

<span class="transcript-speaker">L, YT3:23:04:</span> You know how animals like going outside, if you have a pet cat inside, you how their instincts... it's who they are, they being outside? That's what happens. You can't... they might go to heaven if they are instinct or if they choose to for a time, but you're not going to be able to hold them down there. Unless they love you in which case they'll stay with you for a time. It's the same thing as it is down here. They'll stay with you for a time...

<span class="transcript-speaker">High Fidelity:</span> I saw that movie. That was [_Pet Sematary_](https://en.wikipedia.org/wiki/Pet_Sematary_(1989_film)), right?

<span class="transcript-speaker">Rauhauser:</span>  ...if you let the cat into heaven, it will just paw at the door all day.

<span class="transcript-speaker">High Fidelity:</span> Oh yeah. But then when you open the door, it'll like paw at the gates to get back in. 

<span class="transcript-speaker">L:</span> It's just like a little kid. When he's outside, he wants to come inside. When he's inside, he wants to go outside. When it's hot out, he wishes it was winter. When it gets cold out, he wishes it was summer. It's the same thing, man. It's just nature.

<span class="transcript-speaker">Monster, YT3:23:50:</span> We have we have a new guest and we have a badass microphone. In the red sweatshirt. What's going on?

<span class="transcript-speaker">[John Jackson](https://twitter.com/johnjhacking):</span> Hey what's up?

<span class="transcript-speaker">Monster:</span> You got something to say?

<span class="transcript-speaker">Kirtaner:</span> John! What is up my man!

<span class="transcript-speaker">Unidentified:</span> Oh my god.

<span class="transcript-speaker">Kirtaner:</span> Hey that's my brother! That's my brother from another mother, [John Jackson](https://twitter.com/johnjhacking) from [Sakura Samurai](https://en.wikipedia.org/wiki/Sakura_Samurai_(hacker_group)). What is up!

<span class="transcript-speaker">Monster, YT3:24:12:</span> It is John! It is John. <span class="transcript-note">[crosstalk]</span> There you go, he's back. So earlier [John Matze](https://en.wikipedia.org/wiki/Parler#Company) was not an imposter. This is the real John Matze. 

<span class="transcript-speaker">Unidentified:</span> That's not John Matze.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Jackson:</span> I'm not John Matze, I'm John Jackson.

<span class="transcript-speaker">Kirtaner:</span> It's John J. Hacking. <span class="transcript-note">[crosstalk]</span> Don't worry, he's not <span class="transcript-note">[unintelligible]</span> He's an ethical hacker, you don't have to worry about him.

<span class="transcript-speaker">Monster:</span> Alright guys.

<span class="transcript-speaker">Unidentified, YT3:24:39:</span> Being an ethical hacker just means you sit back and are truly pained when people ask you to hack shit every day. You would know that Kirt.

<span class="transcript-speaker">Kirtaner:</span> That's true.

<span class="transcript-speaker">Monster, YT3:24:49:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Rob have you seen God's face?"]</span> Hellbat asked me if I've seen God's face. I have not seen God's face. Nobody has seen...

<span class="transcript-speaker">Catgod:</span> There's no such thing as an ethical criminal.

<span class="transcript-speaker">Monster, YT3:24:59:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "MLN": "me says: Rob how come John is verified on Twitter and you are not?"]</span> "Why am I not verified on Twitter?" <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> Mortals cannot see God's face because it would be a metaphysical contradiction because as Jesus Christ said, "I cannot witness myself". You can't witness yourself metaphysically because the concept of doing it means you're not witnessing yourself. Your eyeball can't look at itself. You have to use a mirror. It sees you and then you see it and it's showing you what it sees, which is different. So the concept of seeing God's face is like seeing the singularity, that's like... it doesn't make any sense.

<span class="transcript-speaker">Monster, YT3:25:33:</span> Yeah, I got you. 

<span class="transcript-speaker">Jackson:</span> Personally I run a cult, so... you know.

<span class="transcript-speaker">Monster:</span> Yeah. Who's that?

<span class="transcript-speaker">Kirtaner:</span> Same! Cult brothers. We both have our cults.

<span class="transcript-speaker">Unidentified:</span> It's not running the cult <i>itself</i> that's necessarily evil...

<span class="transcript-speaker">Kirtaner:</span> They're both hacker cults.

<span class="transcript-speaker">Monster:</span> Yep. That's funny. The chat's going by really fast here...

<span class="transcript-speaker">Kirtaner, YT3:26:06:</span> This hacker cult, this hacker cult...

<span class="transcript-speaker">Jackson:</span> You gotta read faster, man, you gotta do more chats.

<span class="transcript-speaker">Kirtaner:</span> So this guy here, John Jackson, he has a cult. His hacker cult is Sakura Samurai. I have a cult, my hacker cult is called Anonymous.

<span class="transcript-speaker">Monster:</span> Got it.

<span class="transcript-speaker">Jackson, YT3:26:21:</span> Two different ends of the spectrum there.

<span class="transcript-speaker">Rauhauser:</span> Slow(?) the audio disruption here, just for for Rob's benefit... You mentioned expelling imps earlier? And there's a specific flavor of imp in here known as a fuckmuppet. And there's at least two of them I've seen in chat, so...

<span class="transcript-speaker">Unidentified:</span> Oh, Neal. Blah blah blah blah blah.

<span class="transcript-speaker">Kirtaner:</span> <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Unidentified:</span> Says the guy who's been talking shit for years. Neal, what's up, man?

<span class="transcript-speaker">Monster, YT3:26:54:</span> Somebody asked about why I don't have a checkmark on my Twitter. I think when I applied...

<span class="transcript-speaker">Unidentified:</span> You gotta be more famous probably.

<span class="transcript-speaker">Monster:</span> I wasn't famous enough. So that's okay. It wasn't the main goal, to be famous. Just trying to do the right thing. You know the key to doing the right thing? Just take the right next step. It doesn't matter where you are. Just, wherever you are, just take the right next step, and then just take the right next step after that <span class="transcript-note">[noise from another participate]</span> and you'll find it gets you to a better place.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> Welcome to the 21st century, man.

<span class="transcript-speaker">Monster, YT3:27:35:</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "q": "i wonder if rob is verified on pornhub"]</span> I promise you I don't go to [Pornhub](https://en.wikipedia.org/wiki/Pornhub).

<span class="transcript-speaker">Jackson:</span> Oh I do. A lot. <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">Kirtaner:</span> Let's see you look at your browser history, Rob, let's test this.

<span class="transcript-speaker">Monster, YT3:27:45:</span> Yeah, I promise you, I don't have a porn addiction. I got nothing to hide. <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Does god watch people masturbate?"]</span> "Does God watch people masturbate?" I think he does, but...

<span class="transcript-speaker">Jackson:</span> That's hot, God.

<span class="transcript-speaker">Kirtaner:</span> God is a pervert.

<span class="transcript-speaker">Monster:</span> No, I don't think that. I think he just cringes. I think it's more that. I think that he doesn't miss much.

<span class="transcript-speaker">Jackson:</span> That's a lot of people to watch jerk off, though.

<span class="transcript-speaker">Unidentified:</span> God <span class="transcript-note">[unintelligible]</span>. God is a sadomasochist.

<span class="transcript-speaker">Monster:</span> Yeah, anyone with a masturbation habit, you want to know the cure for it? Just think about the fact that God sees everything.

<span class="transcript-speaker">Jackson:</span> I think about my grandmother and I'm like, "oh fuck I hope my grandmother's not watching"

<span class="transcript-speaker">Unidentified:</span> There is an actual similarity between God and chan people, dude, and it's that both of them look through inside boards and just get fucking bored with 99.9 percent of the shit they see.

<span class="transcript-speaker">Unidentified 2:</span> I forgot to <span class="transcript-note">[unintelligible]</span> for Philipp, but one of them wrote something along the lines of that, "we shun evil". The other thing is that somewhere in the Old Testament it's written and that, "I have hidden my face away from you because of your sins and I, even I, have forgotten about your sins for my own sake." <span class="transcript-note">[crosstalk]</span> I'm not disagreeing with what you're saying.

<span class="transcript-speaker">Monster, YT3:28:55:</span> I think that you're right. For those who are resting in the finished work of the Lord Jesus Christ, your sins are washed, and I believe those things are expunged from the record. People talk about the <span class="transcript-note">[unintelligible]</span> record. That may or may not exist, I don't know, but I do believe that there's this idea that the books are opened and there's a lot of stuff that's probably in there that you have to then answer for at the white throne of judgment. And I don't think that that's really one of these things that you want to look forward to.

<span class="transcript-speaker">L:</span> What if there's, like, whole alien civilizations that have TV that tune into us and they look at people doing that in their rooms as like... "and here we have this specimen"? And they look at it not even in a sad or cringe way, but just like you would watching a lions do that. It's just comically, overtly scientific.

<span class="transcript-speaker">Monster, YT3:29:53:</span> Makes sense. I do think that the marriage bit is undefiled, and I don't believe the angels or demons get a peek at what goes on in the marriage bedroom behind closed doors. That I think is biblical.

<span class="transcript-speaker">L:</span> "Treat your neighbor as yourself".

<span class="transcript-speaker">Monster:</span> Yeah. Because you know what, it'd be kind of creepy if you basically had to hang out with people in eternity that were like, "yeah I saw you and your wife". That seems really classless.

<span class="transcript-speaker">L:</span> It's supposed to be like, what you hold up true down there, I hold true up here. And I mean, what do we do when we know we're not going to try to make them feel bad about it? Like, jeez, anyone who has a kid, if your kid does something wrong, how the hell do you tell them?

<span class="transcript-speaker">Monster, YT3:30:40:</span> Yeah, I agree.

<span class="transcript-speaker">Unidentified:</span> What about Mary and that angel? Who's the one who brought Jesus down to Mary, how about that?
 
<span class="transcript-speaker">L:</span> I mean you can't just tell the kid what he did wrong because he... our feelings get hurt pretty easily. Also, if you blame the kid, the kid's like "well you're my father"

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Jackson:</span> What if you just told them what they were doing wrong without blaming them? You know that's possible too.

<span class="transcript-speaker">Monster:</span> Yeah, and children have many fathers. And probably a lot of mothers, too.

<span class="transcript-speaker">Jackson:</span> I know. I fathered a ton of children in the Philippines.

<span class="transcript-speaker">Monster, YT3:31:18:</span> There you go. That's really honorable. By the way, we acquired... two weeks ago, we acquired the domain name orphans.com, and we're gonna build a site for funding orphans. It's gonna be [fintech](https://en.wikipedia.org/wiki/Financial_technology) for orphans. So, fixing the problem of how do you get funding to all these orphans. <span class="transcript-note">[crosstalk]</span> ... you can connect with people that are part of your virtual family, so you can be a source of encouragement to these kids who have lost their parents. So I'm excited about that project. Anybody who's really passionate about that topic, we're probably going to be hiring some people for that project.

<span class="transcript-speaker">Monster, YT3:32:00:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Rob do you think the rapture will happen?"]</span> "Rob, do you think the [rapture](https://en.wikipedia.org/wiki/Rapture) will happen?" Yeah I think it does. I don't know. <span class="transcript-note">[reading the chat. Full question in chat was from "liken": "flat earth? psyop. round earth? psyop."]</span> [Flat earth](https://en.wikipedia.org/wiki/Modern_flat_Earth_beliefs), round earth, tough call.

<span class="transcript-speaker">Unidentified:</span> Willl the rapture happen in the next 30 years?

<span class="transcript-speaker">Monster:</span> Yeah...

<span class="transcript-speaker">Jackson:</span> Just make sure you hire a cybersecurity team. That would make sense...

<span class="transcript-speaker">L:</span> Hold on hold on. I just want to say, because everyone always has an answer for this. It is plainly written: no. one. knows. but. the. Father. So, every single solitary person in the history of the earth, I don't care who you are, <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">High Fidelity:</span> <span class="transcript-note">[crosstalk, unintelligible]</span> hear me out? <span class="transcript-note">[crosstalk]</span> The problem with people like you is <span class="transcript-note">[crosstalk]</span> ...

<span class="transcript-speaker">L:</span> <span class="transcript-note">[crosstalk]</span> everyone who's ever... <span class="transcript-note">[crosstalk]</span> ... no one wants that stuff to happen. No one wants the tribulation.

<span class="transcript-speaker">Jackson:</span> I do.

<span class="transcript-speaker">L:</span> No one should... <span class="transcript-note">[crosstalk]</span> It's also written in Revelation, I think. I forgot if it was Revelation or not. But it's written in the New Testament: no one should want that day. I think that lying about it contributes to the hell that's happening... <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">High Fidelity:</span> Why are [accelerationists](https://en.wikipedia.org/wiki/Accelerationism) trying to push us towards that day?

<span class="transcript-speaker">L, YT3:33:07:</span> There's no such thing as the acceleration. Instead, it slows us down. It's a trap.

<span class="transcript-speaker">High Fidelity:</span> Nonsense. No.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Monster, YT3:33:18:</span> I mean, God is on the throne, and so if you subscribe to the notion that God controls the duality of good and evil, even the guys who are basically free-will actors, to a certain extent, their steps are directed. You know, like [Pharaoh](https://en.wikipedia.org/wiki/Pharaohs_in_the_Bible)... with the story of the [Ten Plagues](https://en.wikipedia.org/wiki/Plagues_of_Egypt), it says that God can induce harm(?). So he had to basically endure ten plagues, including losing his son, as all the boys of the Pharaoh's kingdom perished, but God had to harden his heart. Because what rational person basically endures plague after plague of their free will? At some point you'd be like, "okay, enough! I've seen enough supernatural stuff, I'm going to back down". But that's not what happened. That's pretty wild. <span class="transcript-note">[crosstalk]</span> 

<span class="transcript-speaker">High Fidelity, YT3:34:05:</span> <span class="transcript-note">[crosstalk]</span> duality, Rob. Do you know why duality came about? It actually has to do with accounting. The reason duality came about was actually slightly through [Zoroastrianism](https://en.wikipedia.org/wiki/Zoroastrianism)...

<span class="transcript-speaker">Kirtaner:</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">High Fidelity:</span> ...with debits and credits. And that debit and credit system, that duality, that something's either positive or negative, was transferred into religion. Prior to that, humanity was all polytheistic. But after accounting came around, and that affected religion, that's where duality came from in a religious aspect. If you do a comparative study of religions throughout history, you have to go back to the [Hittites](https://en.wikipedia.org/wiki/Hittites) and the [Sumerians](https://en.wikipedia.org/wiki/Sumerian_religion) and blah blah blah. Like farther back than Jesus and all that.

<span class="transcript-speaker">Monster, YT3:35:03:</span> Yeah.

<span class="transcript-speaker">High Fidelity:</span> Yeah, actually the whole duality of...

<span class="transcript-speaker">Unidentified (computer-generated voice):</span> This is boring, I'm going to bed.

<span class="transcript-speaker">Monster:</span> Goodnight.

<span class="transcript-speaker">Jackson:</span> Goodnight. We love you.

<span class="transcript-speaker">RX:</span> Goodnight, don't let the rotten Feds bite. If you do, whack them with a shovel.

<span class="transcript-speaker">Monster, YT3:35:20:</span> That's funny. Gosh. So... looks like... 

<span class="transcript-speaker">Jackson:</span> I use Arch by the way. Just so everyone on this call knows, I use [Arch Linux](https://en.wikipedia.org/wiki/Arch_Linux).

<span class="transcript-speaker">High Fidelity:</span> <span class="transcript-note">[crosstalk]</span> Is there a [BlackArch](https://blackarch.org/)?

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">RX:</span> Thanks for the tip, John. I appreciate it.

<span class="transcript-speaker">Jackson:</span> You're welcome.

<span class="transcript-speaker">Unidentified, YT3:35:45:</span> BlackArch exists but it seems really tryhard-y. Honestly.

<span class="transcript-speaker">Jackson:</span> Just get BlackArch Lite. It's got a lot less bloatware type shit.

<span class="transcript-speaker">Kirtaner:</span> Yes! I too use ArchLinux and I need to tell everyone. That's <span class="transcript-note">[laughing, unintelligible]</span> 

<span class="transcript-speaker">Unidentified:</span> It's just like saying you're a fan of [anarcho-syndicalism](https://en.wikipedia.org/wiki/Anarcho-syndicalism) because you like [Noam Chomsky](https://en.wikipedia.org/wiki/Noam_Chomsky) or something.

<span class="transcript-speaker">Unidentified:</span> I just like narcotics, bro. 

<span class="transcript-speaker">Monster, YT3:36:22:</span> Well guys... <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Rob are you a Trump supporter?"]</span> "Trump supporter..." Hellbat wants to know if I'm a Trump supporter. Well, it's tough...

<span class="transcript-speaker">Kirtaner:</span> Is it really?? 

<span class="transcript-speaker">Monster:</span> Yeah, it's tough because he has some good economic ideas, but... still a work in progress. But we all are.

<span class="transcript-speaker">WF:</span> Trump fucking sucks.

<span class="transcript-speaker">Monster:</span> I don't... I don't think that... Yeah. We all have blind spots. Tough call.

<span class="transcript-speaker">Unidentified:</span> You know what was good for the economy? Slavery.

<span class="transcript-speaker">Monster, YT3:36:55:</span> I don't think that... I don't think that Biden's killing...

<span class="transcript-speaker">Unidentified:</span> Okay <span class="transcript-note">[unintelligible]</span>, calm down there.

<span class="transcript-speaker">Monster, YT3:37:00:</span> I think Biden is letting a lot of people down. 

<span class="transcript-speaker">Unidentified:</span> Government sucks.

<span class="transcript-speaker">L:</span> You know what's really good for the economy? Honest business practices.

<span class="transcript-speaker">Monster, YT3:37:09:</span> Yeah. I think there's too much much control grid[^fn18] stuff coming. But God's on the throne, it all works out. But it's not fun...

<span class="transcript-speaker">Unidentified:</span> Corporations suck.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[crosstalk, unintelligible]</span> ...[NFT](https://en.wikipedia.org/wiki/Non-fungible_token) good for the economy

<span class="transcript-speaker">Unidentified:</span> Do you know another thing that's good for the economy? Porn.

<span class="transcript-speaker">High Fidelity:</span> Here's the problem with porn though... <span class="transcript-note">[crosstalk, unintelligible]</span> ... and you have a lot of, well, obviously child pornography. Like that guy from the GOP, what was his name? [Verastigui](https://www.politico.com/news/2021/07/09/former-hill-aide-pleads-guilty-child-porn-498937)? Who actually worked in the Trump White House, and got caught in chats talking about wanting to rape babies.

<span class="transcript-speaker">Monster, YT3:38:00:</span> Yeah, I think there's a lot of evil depravity out there and a lot of it's being exposed. The independent media is holding a bunch of people accountable, and that's one of the side effects that is in some ways causing some people to kind of adjust course. You just hope that they can adjust course before their stuff gets exposed. And I think God's merciful, up to a point, but then God chases those He loves. So if you have a long history of making stupid choices, eventually that will come up and bite you in the butt. 

<span class="transcript-speaker">High Fidelity, YT3:38:34:</span> Well, God could be merciful. I hope our judicial system is not.

<span class="transcript-speaker">Monster, YT3:38:44:</span> <span class="transcript-note">[reading the chat. Full question in chat was from "Hellbat": "Rob have you* ever done anything evil?"]</span> Have I done anything evil? I'm sure that I have, yeah. I'm sure that I have.

<span class="transcript-speaker">Unidentified:</span> Racism is apparently ingrained in our system.

<span class="transcript-speaker">Monster, YT3:38:54:</span> There was a time when, before Epik became more wildly successful, there was a time actually during the time of COVID when a lot of businesses were shutting down, and you couldn't actually borrow any money very easily. And so we had refinanced the house and I used the proceeds of the refinance of the house to keep everybody fully employed at Epik. And that at the time was slightly awkward <span class="transcript-note">[unintelligible]</span> but it all worked out, and we're better off for it.

<span class="transcript-speaker">High Fidelity, YT3:39:38:</span> You know Rob, if you had [universal basic income](https://en.wikipedia.org/wiki/Universal_basic_income) you wouldn't have had to have done that. 

<span class="transcript-speaker">Monster:</span> No, no, you're wrong.

<span class="transcript-speaker">Unidentified:</span> But everything else would be so expensive that the basic income would be almost useless... unless you regulate other things.

<span class="transcript-speaker">Unidentified:</span> Inflation would go up <span class="transcript-note">[feedback]</span>

<span class="transcript-speaker">Monster [SC2:36:19]:</span> I'll tell you what's really interesting that's coming down, which is, I do think that this whole [non-fungible token](https://en.wikipedia.org/wiki/Non-fungible_token) stuff is super interesting.

<span class="transcript-note">[Thalen's recording ends]</span>

<span class="transcript-speaker">Monster:</span> I think you're going to see the emergence of security tokens as a capitalization framework. One of the things that we are actually working on...

<span class="transcript-speaker">Unidentified [SC2:36:34]:</span> Those would be regulated.

<span class="transcript-speaker">Monster:</span> Yeah, I know, but you can do Reg. S, Reg. D compliant security token offerings and do it at scale. So imagine a world where you have people who can legally participate in [multistakeholder governance](https://en.wikipedia.org/wiki/Multistakeholder_governance) of an enterprise, and we wouldn't <span class="transcript-note">[unintelligible]</span> to be able to participate. I think that's coming.

<span class="transcript-speaker">Unidentified:</span> Oh, a [DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization). You mean DAOs.

<span class="transcript-speaker">Monster [SC2:36:57]:</span> Yeah, exactly. Yep. [Smart contracts](https://en.wikipedia.org/wiki/Smart_contract), I think that that's coming. And I think it can be done in a legal way. We've hired a bunch of people to go work on this Fraktion project, f-r-a-k-t-i-o-n.

<span class="transcript-speaker">High Fidelity [SC2:37:10]:</span> How's the security of that project? How's the security of that project? Like, if the security of that project isn't 100%, then at every possible chance that contract's going to be altered, right? So, how do you verify that it's 100% secure? Because as I think we've all learned recently, nothing's 100% secure.

<span class="transcript-speaker">Monster:</span> You cut out there.

<span class="transcript-speaker">B:</span> Contracts can't be altered once they're <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Jackson [2:37:55]:</span> Contracts can be hacked, though.

<span class="transcript-speaker">Monster:</span> I don't know if you can really hack a smart contract. That would be a very bad...

<span class="transcript-speaker">Jackson:</span> You can. they can be hacked, look it up.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Kirtaner:</span> Uh, yes. Yes, yes, yes. I have heard, I know of many smart contracts that have been hacked. Anything can be hacked, period.

<span class="transcript-speaker">Jackson?:</span> Can confirm.

<span class="transcript-speaker">Kirtaner:</span> Do not fool yourself into thinking otherwise. Anything and everything can be hacked.

<span class="transcript-speaker">Jackson [SC2:38:15]:</span> There's like thirty known vulnerabilities in smart contracts.

<span class="transcript-speaker">Monster:</span> I get the feeling that you <span class="transcript-note">[crosstalk]</span> that you've got...

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> I bet God could create technology that couldn't be hacked.

<span class="transcript-speaker">Rauhauser [SC2:38:29]:</span> The problem is... what Kirt has said there is sort of the philosophical view. And I think it's true, everything can be hacked. But the question is, do you have the time, the money, enough matter in the universe to convert into computing power in order to do it? And the goal...

<span class="transcript-speaker">High Fidelity:</span> And amphetamines, Neal. Amphetamines.

<span class="transcript-speaker">Rauhauser:</span> Yeah, okay, that might be a consideration...

<span class="transcript-speaker">Unidentified:</span> That's true, the stimulants, they definitely do help out.

<span class="transcript-speaker">Unidentified:</span> Can I just say? Cocaine, hell of a drug, bro.

<span class="transcript-speaker">Unidentified:</span> Facts.

<span class="transcript-speaker">Monster [SC2:39:07]:</span> <span class="transcript-note">[reading the chat, not visible]</span> Hellbat wants to know, <span class="transcript-note">[crosstalk]</span> what do I know about [gematria](https://en.wikipedia.org/wiki/Gematria). Do you guys know about gematria? It's kind of interesting.

<span class="transcript-speaker">Unidentified:</span> Amphetamines are just the natural way to go, you know?

<span class="transcript-speaker">Unidentified:</span> Yeah, it's some kind of woo woo bullshit.

<span class="transcript-speaker">Monster:</span> I think it's kind of fascinating. The universe is defined by a lot of math. You look at the music and tones...

<span class="transcript-speaker">Unidentified:</span> Fractals.

<span class="transcript-note">[Jitsi drops]:</span>

<span class="transcript-speaker">Monster, SC2:39:57:</span> Somebody really doesn't want us talking about stuff.

<span class="transcript-speaker">Kirtaner:</span> <span class="transcript-note">[Unintelligible]</span> demons!

<span class="transcript-speaker">Monster:</span> Demons. Angel of protection. Heavenly Father.

<span class="transcript-speaker">Unidentified:</span> Ha ha, PrayerMeeting chat room go brr.

<span class="transcript-speaker">Monster, SC2:40:10:</span> Yeah, PrayerMeeting chat room go brr... That's pretty funny.

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[laughter]</span>

<span class="transcript-speaker">Monster, SC2:40:16:</span> Yeah, you know, so... so <span class="transcript-note">[unintelligible]</span> scales. The order of music. David played the harp to cast the demons out of Saul, and so there's mathematical precision and frequency. Mathematical frequency and might. So I think that there's a tremendous amount of insight in the order of math. And also in the [golden ratio](https://en.wikipedia.org/wiki/Golden_ratio), right. You know, 1.41... whatever it is. The distance from here to here, here to here, here to here, here to here. You see order in the universe with the golden ratio. It's hard to imagine that...

<span class="transcript-speaker">Unidentified:</span> And Fibonacci.

<span class="transcript-speaker">Monster, SC2:41:07:</span> [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number). Fibonacci sequences, absolutely. I think God is a mathematician, and a lot of things are governed by math. Gematria is interesting because you look up, go look up like, "Gematria 444". English gematria. You'll find that it's many things. And then look up the gematria of 666 and what's all included there, and you'll probably be surprised by what you discover there. Gematria 444 versus gematria 666. Yeah, there you go. That's an interesting topic for sure.

<span class="transcript-speaker">High Fidelity:</span> That's cool. I actually prefer cocaine to be honest.

<span class="transcript-speaker">Monster, SC2:41:50:</span> Yeah. Cocaine. I never did it. Is it good?

<span class="transcript-speaker">High Fidelity:</span> Uh, sometimes. It really depends on who you get it from, how pure it is...

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> Religious man asks if cocaine is good, 2021 colorized.

<span class="transcript-speaker">Unidentified:</span> Peyote.

<span class="transcript-speaker">Monster:</span> Yep. <span class="transcript-note">[reading from chat]:</span> "Cocaine is overrated". Yeah, I never tried cocaine, not really part of my program.

<span class="transcript-speaker">Unidentified:</span> Go on a vision quest and take some peyote.

<span class="transcript-note">[crosstalk]:</span>

<span class="transcript-speaker">Kirtaner:</span> Ayahuasca.

<span class="transcript-speaker">High Fidelity:</span> I'd settle for some shrooms, honestly.

<span class="transcript-speaker">Unidentified:</span> Some pure DMT, that's like a dream.

<span class="transcript-speaker">Monster:</span> Yeah.

<span class="transcript-speaker">Rauhauser, SC2:42:35:</span> So the [420chan](https://en.wikipedia.org/wiki/420chan) people have just arrived.

<span class="transcript-speaker">Monster:</span> Yeah? They're arriving?

<span class="transcript-speaker">Unidentified:</span> Oh shit.

<span class="transcript-speaker">Kirtaner:</span> 420chan is my community. I run a harm reduction community that's fifteen years old called 420chan. It is a sister site to 4chan, and big brother to sites that you would know of, like 8chan.

<span class="transcript-speaker">Monster:</span> Yes.

<span class="transcript-speaker">Rauhauser, SC2:43:05:</span> More like a fun uncle than a big brother.

<span class="transcript-speaker">Unidentified:</span> But not like modern-day 8chan. Just when 8chan was called 8chan.

<span class="transcript-speaker">High Fidelity:</span> Did you say "[big brother](https://en.wikipedia.org/wiki/Big_Brother_(Nineteen_Eighty-Four)) entered the chat"? You said "big brother entered the chat", that's what you said, I heard it.

<span class="transcript-speaker">Unidentified:</span> No, I was talking about 8chan.

<span class="transcript-speaker">Josh:</span> I DMed Kirt on [Signal](https://en.wikipedia.org/wiki/Signal_(software)) like ten minutes ago and sent him like a little snippet of all the stored data on 420chan. It hit 69 gigs, I'm like "going places! Quality."

<span class="transcript-speaker">Monster:</span> That's funny. What's your name?

<span class="transcript-speaker">Josh:</span> I'm Josh, but I've been called so many screen names I might as well have [DID](https://en.wikipedia.org/wiki/Dissociative_identity_disorder).

<span class="transcript-speaker">Monster:</span> There you go.

<span class="transcript-speaker">Monster, SC2:43:43:</span> <span class="transcript-note">[reading chat]:</span> "Am I"... Hellbat asked me if I'm in the top [1%](https://en.wikipedia.org/wiki/We_are_the_99%25) of earners. I don't know. I don't know, don't really keep track. I think the more you have, the more opportunity you have to do good for more people.

<span class="transcript-speaker">High Fidelity:</span> Hey, hey, hey, what about that whole [camel through the eye of a needle](https://en.wikipedia.org/wiki/Eye_of_a_needle) thing? What is that all...

<span class="transcript-speaker">Monster:</span> No no no, I have the answer for that. Which is repudiating...

<span class="transcript-speaker">High Fidelity:</span> Get a really big needle.

<span class="transcript-speaker">Monster, SC2:44:10:</span> No, I think body, soul, spirit, all works, all possessions. You place it at the Lord's feet. If He allows you to be a steward of the things that you have, in order to be able to empower other people to realize their calling, I think that that's an acceptable thing. I don't think that God necessarily expects His people to be, to have poverty. But I will say, when Jesus told His disciples to carry neither scrip nor purse, He understood what it meant to walk with an abundant mindset, and I often say: God's grace is efficient and His logistics are perfect. And some people here might mock me about God's logistics being perfect, but I've found that to be true. The same God that fed the Israelites for forty years, six days a week, with a double portion on Fridays, is the same God who rules and reigns today.

<span class="transcript-speaker">Unidentified:</span> God is all.

<span class="transcript-speaker">Monster, SC2:45:20:</span> There is a crazy book, it's called _Jacob's Pillar_, it's by a guy named E. Raymond Capt, who died at the age of 93. It's a fascinating book. It talks about this thing, you might have heard of it, the [Stone of Scone](https://en.wikipedia.org/wiki/Stone_of_Scone). The Stone of Scone that sits underneath the coronation throne in England. And it just traces the history of the stone. So this is kind of a fascinating chart...

<span class="transcript-speaker">Unidentified:</span> I love scones. They taste so good.

<span class="transcript-speaker">Rauhauser:</span> Wait, Rob, Rob. Would you characterize what you just said there, about the nature of abundance and so forth, as being part of the [prosperity gospel](https://en.wikipedia.org/wiki/Prosperity_theology)? Or is that...

<span class="transcript-speaker">Monster, SC2:45:59:</span> I think the prosperity gospel is a little bit like, carnal. For weak Christians. I don't necessarily think it's wrong to have an abundant mindset. But if your idea is "pray to God to give you a Mercedes", I think that misses the plot. So I think that God... Here's the thing that I figured out. I think that God honors practicians(?) for character attributes. Like, I often pray for five things: wisdom, knowledge, faith, courage, and humility. At times I've also asked for patience and charity. But be careful what you wish for, because if you ask for patience, God will give you the opportunity to test your patience.

<span class="transcript-speaker">Rauhauser, SC2:46:51:</span> Yes, development opportunities. That's a two-part question, because I have been looking at the [QAnonCasualties](https://www.reddit.com/r/QAnonCasualties/), or I don't know if that's the right name for it, but there's a subreddit that's specifically who've lost family members or friends due to QAnon.

<span class="transcript-speaker">Unidentified:</span> Yeah, that is a great read. You should go read that, Rob.

<span class="transcript-speaker">Rauhauser, SC2:47:14:</span> And I have been curious, and I haven't seen this discussed anywhere, but is a failure in economy due to pandemic influencing the people who believe the prosperity gospel, and is that some of what's driving the rise of QAnon? And I've kind of been hoping that Bruce Wilson from [_Talk To Action_](http://www.talk2action.org/user/Bruce%20Wilson) would pick up on this and give us a solid read, but... does this ring a bell at all? Have you seen anything on this?

<span class="transcript-speaker">Monster, SC2:47:50:</span> Well, I mean, I think that times of scarcity have caused people to kind of get back to basics. So when you see like a terrible hurricane, like the one that just struck the Gulf Coast, or terrible flooding, you know. You have all these people who have their preps. Like, they think they've got it figured out. But then something really bad happens and all their [preps](https://en.wikipedia.org/wiki/Survivalism) are trashed. For a lot of people... take the example of [_InfoWars_](https://en.wikipedia.org/wiki/InfoWars). I consider _InfoWars_ to be like a gateway drug for truth. But the problem is, for a lot of people, they kind of idle at this carnal level. Like they go and get guns, they store food, they practice at the range, and all this kind of stuff. But they never actually get around to like spiritual things, because the reality is when you surrender your work to the Lord, He'll order your steps. My favorite proverb, by the way, I read proverbs every day. There are 31 proverbs, so one for every day. I read them out loud.

<span class="transcript-speaker">LH:</span> There's more than 31 proverbs.

<span class="transcript-speaker">Jackson:</span> Every day? You've never missed a day, like ever? 

<span class="transcript-speaker">Monster, SC2:49:02:</span> No, I mean I started that at some point. You develop certain spiritual practices that keep you rooted to the ground, and I believe reading psalms and proverbs out loud is a really good practice. But proverbs, they're short, they're full of wisdom, and [Proverb 16](https://www.bible.com/bible/116/PRO.16.NLT) I think is my favorite. If I had to, like, give my sons and daughters advice, I would say "go study Proverb 16 and you'll probably succeed at the rest of your life". If all you read was Proverb 16.

<span class="transcript-speaker">Unidentified, SC2:49:43:</span> Is this fucking idiot still rambling on about nothing? When is he going to apologize for getting everyone's data leaked with his shit [opsec](https://en.wikipedia.org/wiki/Operations_security)? 

<span class="transcript-speaker">Monster:</span> MLN... I want to hear from MLN. <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified 1:</span> His fucking stupid company. He can't even keep his own stream from getting hacked like five times in front of my face right here. What a fucking loser. 

<span class="transcript-speaker">Rauhauser:</span> Who is this person who needs to be muted?

<span class="transcript-speaker">Monster:</span> Yeah, yeah. Go easy on the f-bomb.

<span class="transcript-speaker">Unidentified 1, SC2:50:07:</span> Yo, I'll go easy on your asshole. Shut the fuck up old man. You should be bending over for everyone in this call right now, and begging forgiveness.

<span class="transcript-speaker">Monster:</span> Why is this?

<span class="transcript-speaker">Unidentified 2:</span> Cam up, fatty.

<span class="transcript-speaker">Unidentified 3:</span> Listen, if I could cam up as a dysfunctional autist, you could probably cam up too, my good sir.

<span class="transcript-speaker">Monster:</span> That's funny. That's funny. Well, I guess the guy who runs his mouth... maybe he's not attractive, I don't know.

<span class="transcript-speaker">Unidentified 2:</span> Nah, he's fat as fuck.

<span class="transcript-speaker">Monster:</span> Maybe he has a good singing voice, though. He has kind of like a baritone.

<span class="transcript-speaker">Jackson:</span> That's not very God-like. What happened to turning the other cheek? Just gotta let it slide, you know.

<span class="transcript-speaker">Monster:</span> Well I was going to say, I think there's inner divinity in everyone. So to the point that...

<span class="transcript-speaker">Jackson:</span> I've got a lot of inner divinity. Ton of it. I want to share it with the world.

<span class="transcript-speaker">Unidentified 1:</span> There's a lot less in you, I think. Otherwise you would've been able to prevent this. You would've fucking hired someone who knew how to code.

<span class="transcript-speaker">L, SC2:51:24:</span> Hasn't even [Experian](https://en.wikipedia.org/wiki/Experian) been hacked? Isn't that one of the big three major credit card companies? Don't they have the money? What kind of standards are you applying to this man and why are you choosing it on him instead of everyone else? What the hell is this stick up your ass? <span class="transcript-note">[pause]</span> Oh but no, you don't want to talk to me. You want to talk to people who aren't good at replying back.

<span class="transcript-speaker">High Fidelity, SC2:51:41:</span> You want me to talk to you bro? I'll talk to you. The fact of the matter is he is hosting websites, some of whom are run by federal agents that are mindfucking people into violence.

<span class="transcript-speaker">L:</span> What about your sins?

<span class="transcript-speaker">Monster, SC2:51:53:</span> Well, actually, I think...

<span class="transcript-speaker">High Fidelity:</span> That is the sad fact of the matter.

<span class="transcript-speaker">Unidentified:</span> So you are accusing him of colluding with Feds. That is a big claim, sir.

<span class="transcript-speaker">High Fidelity:</span> I'm not accusing him of that at all. I'm saying we'll probably find out that there are federal officials inside some of those records. I'm not saying Rob knew, <span class="transcript-note">[crosstalk]</span> that would be rude. I don't know Rob.

<span class="transcript-speaker">L, SC2:52:20:</span> Treat it like a courtroom. Treat it like a courtroom. Come in and present your evidence. Come in and present your evidence and then, you know, respectfully. Ask him questions, find out what happened.

<span class="transcript-speaker">High Fidelity:</span> There's a 180 gig torrent out there, bro. Go download... <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">Jackson:</span> There's a lot of evidence out there, man.

<span class="transcript-speaker">L, SC2:52:29:</span> But when your first decision is to come out with a warlike voice and just namecall, well, I mean, you're not going to win anything that way.

<span class="transcript-speaker">High Fidelity:</span> I talk like this all the time, bro.

<span class="transcript-speaker">L:</span> It's unintelligible. It's incomprehensible. The words you speak are noise.

<span class="transcript-speaker">High Fidelity:</span> The words I speak are noise? Excuse me?

<span class="transcript-speaker">L, SC2:52:52:</span> I mean, why do you think there's a big barrier between heaven and down here? Like, for real dude. I have my fucking free will to not have to hear this kind of crap when I'm in heaven.

<span class="transcript-speaker">High Fidelity:</span> Why are you blowing up... <span class="transcript-note">[crosstalk, unintelligible]</span> ...not listening to other people's point of view?

<span class="transcript-speaker">Rauhauser:</span> I agree, this... this...

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Rauhauser:</span> It's really sort of a beta male attitude, you know? No picture, and a big speech... when this is a more enlightened discussion than one might have expected initially in the <span class="transcript-note">[unintelligible]</span> I received to it. And yeah, I think it's just inappropriate. You can go see that crap on Twitter. And it'll boost, that'll get attention there, go ahead and do it man. And don't waste our time.

<span class="transcript-note">[Jitsi drops]</span>

<span class="transcript-speaker">Monster, SC2:54:28:</span> ...we run our own CDN and DDoS mitigation and we have most of our hosting capacity in physical infrastructure that we no longer... yeah, you know... [AWS](https://en.wikipedia.org/wiki/Amazon_Web_Services) doesn't host Epik.com. Maybe a [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) node that we still use there as a part of our [anycast](https://en.wikipedia.org/wiki/Anycast), but no, we are not using them as a primary host. We do run anycast DNS. Gosh guys. What else? Thursday night, man. What are you guys doing on Friday?

<span class="transcript-speaker">Jackson:</span> Hacking.

<span class="transcript-speaker">Monster:</span> Hacking. Yeah.

<span class="transcript-speaker">Unidentified:</span> Probably hacking.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Kirtaner:</span> Maybe do a [show](https://twitter.com/gregghoushshow) with [Gregg Housh](https://twitter.com/gregghoush) if he feels up to it. He was in here earlier tonight.

<span class="transcript-speaker">High Fidelity:</span> How is Housh, I haven't seen him...

<span class="transcript-speaker">Monster:</span> We set this up...<span class="transcript-note">[crosstalk]</span>

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Kirtaner:</span> Housh? He's been dealing with a lot.

<span class="transcript-speaker">Monster, SC2:55:40:</span>  <span class="transcript-note">[reading the chat]</span> Somebody asked about the site. PrayerMeeting. Yeah, we bought this name and we set up a free place that people could use to meet instead of going to a church, if they didn't want to go to a church or they couldn't get to a church.

<span class="transcript-speaker">Unidentified:</span> Yeah, I think I saw... there's something in that email dump of an employee inbox talking about this. I'm pretty sure.

<span class="transcript-speaker">Monster SC2:56:05:</span> Yeah, that's possible. I think that the guy's email, I think it was Austin Gilmore(?) that had his email dumped.

<span class="transcript-speaker">Unidentified:</span> Honestly I think <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> Do you think the hacker is in here watching? Do you think he's among us?

<span class="transcript-speaker">Monster:</span> I don't know.

<span class="transcript-speaker">Jackson:</span> I love [that game](https://en.wikipedia.org/wiki/Among_Us). Such a good game.

<span class="transcript-speaker">Unidentified:</span> Was that a reference to the game? I'm sitting here and I cringed for half a second and then I'm like, "wait, is he referencing the game or is he just being like, literary?"

<span class="transcript-speaker">High Fidelity:</span> Rob, would you go on Gregg Housh's show? With Kirt?

<span class="transcript-speaker">Monster:</span> I'm embarrassed to say I don't know who he is.

<span class="transcript-speaker">Kirtaner:</span> Okay, Gregg Housh is another former member of Anonymous that brought it to public prominence with [Project Chanology](https://en.wikipedia.org/wiki/Project_Chanology), the Church of Scientology protests, in 2008. He's a good friend of mine, and he has a Twitch show. A Twitch video podcast. Of which I'm a regular host on Friday nights with him. And I'm sure he would love to have you on. It would be, we would be nice. We would be nice to you. Fair warning.

<span class="transcript-speaker">Monster:</span> Alright, drop me a note and we'll figure it out.

<span class="transcript-speaker">Kirtaner:</span> Alright! Cool!

<span class="transcript-speaker">LH:</span> Tomorrow?

<span class="transcript-speaker">Kirtaner, SC2:57:20:</span> I don't know if it'd be tomorrow. I'd have to talk to Gregg, he's been dealing with a lot of stuff and not doing the show for the last two or so weeks. But I'll talk to him and I'll extend that invitation.

<span class="transcript-speaker">High Fidelity:</span> Send him my love, I hope he's doing okay.

<span class="transcript-speaker">Monster, SC2:57:34:</span> So. Well, fun times guys! I was still hoping [Chad](https://twitter.com/chadloder) would show up. Chad Loder. He was... he lit this flame. So I figured he would show up, but he doesn't seem to want to show up. Anyone know Chad?

<span class="transcript-speaker">High Fidelity:</span> I mean, I know of Chad. Chad's pretty well respected in the cybersecurity community.

<span class="transcript-speaker">Monster:</span> Yeah, he's got a big following.

<span class="transcript-speaker">Rauhauser:</span> He's a little aggressive on Twitter but he would absolutely fit in in the more intellectual, more mindful end of this particular conversation.

<span class="transcript-speaker">Monster:</span> Yeah.

<span class="transcript-speaker">Unidentified:</span> He's quite thoughtful.

<span class="transcript-speaker">Monster:</span> Yeah, no, he seems like a really smart guy with a lot of leadership skills.

<span class="transcript-speaker">Unidentified, S258:15:</span>Yeah, he is a smart guy. That's why he blames you for what happened, you fucking idiot.

<span class="transcript-speaker">Monster:</span> So anyway, the site that offends you is offline. So if you missed it, heads up.

<span class="transcript-speaker">LH:</span> There's a few hundred others...

<span class="transcript-speaker">Monster:</span> Yep.

<span class="transcript-speaker">Rauhauser, SC2:58:34:</span> So besides JoJo Camp... This is a little bit of crosstalk for Kirt here. Other than JoJo Camp, who else in the completely unacceptable website operators crew had stuff with Epik? Did we find any [James McGibney](https://en.wikipedia.org/wiki/James_McGibney)?

<span class="transcript-speaker">Kirtaner:</span> I don't... those are not questions for me, I haven't gone really spelunking through the data yet. I just have a high level overview of what is in it.

<span class="transcript-speaker">Monster, SC2:59:05:</span> Yep. Yeah, so we do have a good abuse department, and they are pretty close to 24/7, so if you see something that is overtly troublesome... take a screenshot. We don't really like to click your links. Take a screenshot, include the link. We actually are developing a software, we've gotten so practiced at dealing with abuse, that we're actually developing a software! We actually have almost finished it, and it will be launched as a multi-tenant software than anybody could then use as like software as a service. Kind of like [Zendesk](https://en.wikipedia.org/wiki/Zendesk) for abuse management. Written by lawyers and technologists so you can kind of follow protocol on abuse ticket management. So we think that might be useful.

<span class="transcript-speaker">High Fidelity:</span> The only thing worse than programmers are lawyers, Rob.

<span class="transcript-speaker">Monster, SC2:59:51:</span> Yeah, I know. We actually try to use lawyers in a productive way. I try to avoid lawyers, but...

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[laughing]</span> Everyone tries to avoid lawyers, chief.

<span class="transcript-speaker">Jackson, SC3:00:09:</span> The lawyers did the [SDLC lifecycle](https://en.wikipedia.org/wiki/Systems_development_life_cycle), right? They got it all secure? Is that what happened? Or did you actually hire cybersecurity professionals to audit the software? Or can we just expect an [underflow](https://en.wikipedia.org/wiki/Arithmetic_underflow) or an [overflow](https://en.wikipedia.org/wiki/Integer_overflow) or something, and you know, [RCE](https://en.wikipedia.org/wiki/Arbitrary_code_execution) on the servers.

<span class="transcript-speaker">Monster:</span> I didn't catch that. I don't understand the question.

<span class="transcript-speaker">Jackson, SC3:00:36:</span> SDLC. Do you know what SDLC is?

<span class="transcript-speaker">Monster:</span> No.

<span class="transcript-speaker">Unidentified:</span> It's the software development lifecycle.

<span class="transcript-speaker">Monster:</span> Oh, yeah yeah yeah, okay got it.

<span class="transcript-speaker">Jackson:</span> Probably... probably not great.

<span class="transcript-speaker">Monster:</span> So you missed it earlier...

<span class="transcript-speaker">Unidentified:</span> They're on the [waterfall](https://en.wikipedia.org/wiki/Waterfall_model), John.

<span class="transcript-speaker">Monster:</span> Earlier in the call we were talking about, you know, the legacy of the Russian dev team and...

<span class="transcript-speaker">Jackson:</span> <span class="transcript-note">[laughing]</span> the Russian dev team, damn.

<span class="transcript-speaker">Monster:</span> ...we've done a lot of acquisitions in the last few years, and we are substantially retooling. But that legacy code of the Epik registrar, all of that is being replaced.

<span class="transcript-speaker">Unidentified, SC3:01:09:</span> What's your backend, John? Er, what's your backend, Rob?

<span class="transcript-speaker">Monster:</span> Yeah.

<span class="transcript-speaker">Unidentified:</span> What's your backend?

<span class="transcript-speaker">Monster, SC3:01:16:</span> For those of you who want to do a deep dive on tech, I have really talented guys that I'll be happy to do a breakout session with. I think they'll be fascinating. So if you have an interest in doing...

<span class="transcript-speaker">Jackson:</span> [Open-source](https://en.wikipedia.org/wiki/Open_source) your stack, Rob.

<span class="transcript-speaker">Monster:</span> Some of it has been open-sourced... not all of it.

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[laughing]</span> Ooh baby!

<span class="transcript-speaker">Kirtaner:</span> Some of it was already open-sourced! Involuntarily...

<span class="transcript-speaker">Monster:</span> Yeah, yeah. Yeah, I think the most exciting stuff we have was not...

<span class="transcript-speaker">Jackson:</span> That'll increase your security posture. You'll have all these pros in here helping you edit it.

<span class="transcript-speaker">Monster:</span> No I appreciate that. I think there's an open invitation for folks who've had a chance to look at the code to help plug whatever remaining vulnerabilities might exist. You know, try not to exploit it...

<span class="transcript-speaker">High Fidelity, SC3:02:05:</span> Actually, you know what Rob? We should turn this into a paying engagement.

<span class="transcript-speaker">Monster:</span> I did!

<span class="transcript-speaker">High Fidelity:</span> You should put up a [bug bounty program](https://en.wikipedia.org/wiki/Bug_bounty_program).

<span class="transcript-speaker">Monster:</span> I'm there! We already have a bug bounty program. So if you find stuff that's weakly executed...

<span class="transcript-speaker">Jackson:</span> ...what?

<span class="transcript-speaker">High Fidelity:</span> You have a bug bounty program?

<span class="transcript-speaker">Monster:</span> We do!

<span class="transcript-speaker">Jackson:</span> Where?

<span class="transcript-speaker">Monster:</span> So right now it's just an email, but we also are... bugs@epik.com  But what we are also doing, we actually have a software team... We have a cybersecurity team, believe it or not.

<span class="transcript-speaker">Unidentified SC3:02:39:</span> You should fire them.

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Jackson:</span> Yes. Yes yes yes.

<span class="transcript-speaker">Monster:</span> I'm telling you! We've just hired and assembled a team. A crack team from South Africa. 

<span class="transcript-speaker">Jackson, SC3:02:53:</span> From South Africa?? You guys are gonna get popped again! [Their government just got fucking ransomwared](https://www.bleepingcomputer.com/news/security/ransomware-encrypts-south-africas-entire-dept-of-justice-network/)!

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">L:</span> Honestly, I'm working on website security before... [crosstalk] ...where I had a simple website with a simple password, and at one point it kept getting hacked, so I had to keep being smarter about how to make it secure and eventually I figured out a way to code it in such a way that the guy couldn't hack into it. So, technically speaking... 

<span class="transcript-speaker">Monster:</span> Yep.

<span class="transcript-speaker">L:</span> ...you can make anything completely secure. It just takes real-time dedication and effort. You'd have to have them look, they're going to have to look through, comb through everything.

<span class="transcript-speaker">High Fidelity?:</span> Hold on, what's 100% secure?

<span class="transcript-speaker">Unidentified:</span> There's no security. No.

<span class="transcript-speaker">L:</span> The more complicated it is, that is.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> ...technologically how it works.

<span class="transcript-speaker">L:</span> Technically, yeah.

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[sigh]</span>

<span class="transcript-speaker">Jackson:</span> You can't permanently secure anything, though, because new vulnerabilities come out all the time.

<span class="transcript-speaker">L:</span> Theoretically you can hack anything.

<span class="transcript-speaker">Unidentified:</span> Nothing can be completely secure.

<span class="transcript-speaker">Rauhauser:</span> Focus this on technology. The real issue here, the real issue here...

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> Do you never update your shit?

<span class="transcript-speaker">Unidentified:</span> I have a degree in computer science.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Rauhauser, 3:04:12:</span> The real issue was not the technical vulnerability of the system so much as it was some of the people who were using Epik that led to the problem. I mean, we've seen JoJo in here tonight finally getting ejected from this particular corner of the Internet. And the idea that there's an improved abuse service is interesting to me, but I suspect that as time goes on and people start looking through these domains that have been registered... you know, I saw something go by on Twitter, that someone's starting to explore who some of the registrants are. And there's literally a cluster of bad actors, of individuals who, it's not a matter of the natural right of free speech, it's...

<span class="transcript-speaker">Unidentified, 3:04:58:</span> Wring your hands more, you fucking limp-wristed f*****. You going to start curating who can and can't use this fucking service? You don't even own it, this other fucking idiot does, why don't you shut the fuck up.

<span class="transcript-speaker">L:</span> The worst thing is that even if you code something perfectly, there's an environmental risk to <span class="transcript-note">[unintelligible]</span>. The environmental risk is radioactivity. [A single particle from radiation from the outer space can flip a 0 to a 1](https://en.wikipedia.org/wiki/Soft_error). It's happened...

<span class="transcript-note">[Jitsi drops]</span>

<span class="transcript-speaker">Monster, SC3:06:14:</span> Yeah. Yeah.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">L:</span> You probably just need to put more RAM on whatever server it's on.

<span class="transcript-speaker">Unidentified:</span> That's one of the best traits I know about Kirt is whenever something remotely intense happens, this man bursts open like a bomb.

<span class="transcript-speaker">Kirtaner:</span> Goddamn!

<span class="transcript-speaker">Monster, SC3:06:51:</span> Well guys, been fun visiting. We'll have to do this more often. And I'll happily do another one of these if anybody wants to. But mostly, you gotta bring Chad, because he said...

<span class="transcript-speaker">LH:</span> I thought you said you were going all night. You said you were going to go all night.

<span class="transcript-speaker">Monster:</span> You want me to keep going? What else you got?

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> You brought a bunch of people together.

<span class="transcript-speaker">LH:</span> Say a prayer.

<span class="transcript-speaker">Jackson:</span> Let us pray.

<span class="transcript-speaker">Monster, SC3:07:28:</span> Heavenly Father, Abba Father, we are just so thankful for this time of fellowship. We know, Lord, that You are sovereign over all good and evil. We have an opportunity to come together as a community all around the world, Lord. People who are in various points of their walk of life...

<span class="transcript-speaker">Unidentified:</span> I like how as he is reading this there is that fucking crazy Simpsons 3D animation playing right below him on my screen. <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster:</span> ... we know that ultimately, Lord, You are directing their steps, and we just thank You, Lord, that You minister to them through Your Holy Spirit, that their trespasses and sins are forgiven, all curses are broken...

<span class="transcript-speaker">Unidentified:</span> I don't give a fuck. <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster:</span> ...and that they will glorify Your name through whatever path You direct them on next. And give you all the glory of Jesus' name. Amen.

<span class="transcript-note">[Various]</span>: Amen.

<span class="transcript-speaker">Catgod:</span> And also bless your cats. Amen.

<span class="transcript-speaker">Monster, SC3:08:16:</span> I don't have any cats. I have a dog, though. That's funny.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Rauhauser:</span> Kitty's asleep on the bed behind me, I was just checking on her.

<span class="transcript-speaker">Unidentified:</span> I see like three Neils!

<span class="transcript-speaker">Unidentified:</span> Yeah, that's something you just get used to. There's a lot of Neils on the scene, there's a lot of Johns in the scene, too.

<span class="transcript-speaker">LH:</span> There a David Johnson, too.

<span class="transcript-speaker">Rauhauser:</span> Davids. There's Davids too.

<span class="transcript-speaker">LH:</span> David Johnson.

<span class="transcript-speaker">Kirtaner:</span> They're all David!


<span class="transcript-speaker">Unidentified:</span> Kirt is low-key one of the few unique-named people here. Aubrey is a quirky name, that's not a very common one. That's a good one.

<span class="transcript-speaker">Kirtaner:</span> The only other famous Aubrey I know of is the rapper Drake. And a bit of trivia, I went to grade school with him.

<span class="transcript-speaker">Unidentified:</span> Oh yeah, you said that in [your Reddit AMA](https://www.reddit.com/r/IAmA/comments/jmafy5/i_am_aubrey_cottle_aka_kirtaner_i_am_the_founder) like fucking forever ago I think. Yeah he had said that before somewhere, I forget where.

<span class="transcript-speaker">Jackson:</span> Oh, yeah, Drake.

<span class="transcript-speaker">Unidentified:</span> He went to like, elementary school with him or something. Is Drake Canadian?

<span class="transcript-speaker">Kirtaner:</span> Yeah, Drake is Canadian, he lived in my neighborhood. 

<span class="transcript-speaker">Unidentified:</span> Oh, okay, yeah. I didn't know that, actually. Pretty interesting.

<span class="transcript-speaker">Kirtaner:</span> What? His whole thing is he's the favorite son of the 6, as in the 416, Toronto's area code. Don't you know shit?

<span class="transcript-speaker">Unidentified:</span> I'm from BC, we're uncultured.

<span class="transcript-speaker">Unidentified:</span> Raptors, yo.

<span class="transcript-speaker">Jackson:</span> Drake ate my ass in a parking lot once.

<span class="transcript-speaker">Unidentified:</span> Fucking Canadians.

<span class="transcript-speaker">High Fidelity, SC3:10:02:</span> Tell me more about this maple syrup whiskey. I need this in my life.

<span class="transcript-speaker">Kirtaner:</span> Oh dude! Maple Crown Royal is fucking bomb.

<span class="transcript-speaker">Unidentified:</span> I like the apple Crown Royal, that shit's good as fuck.

<span class="transcript-speaker">Unidentified:</span> I think the funniest thing is that...

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified:</span> I think the funny thing is that there's the running stereotype that Canadian people are supposed to be nice. And then you encounter Kirt, and you're like, that stereotype's out the window real fucking fast.

<span class="transcript-speaker">Kirtaner:</span> Oh, well I am actually very nice. It's my passive aggressiveness that will kill you.

<span class="transcript-note">[Various]</span>: <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">High Fidelity, SC3:10:55:</span> Rob, you've gone quiet, what's on your mind, bro?

<span class="transcript-speaker">Monster:</span> Oh, gosh, you know. It's been a crazy week, you know? I told some folks here at the beginning of the call that yesterday was the hardest day that I can remember. You know? And it's just not everyday that you get that much international attention.

<span class="transcript-speaker">Kirtaner, SC3:11:18:</span> That you get blown out that badly, yeah. It's kind of historic.

<span class="transcript-note">[Various]</span>: <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster:</span> Yeah, it's like on another level. And I kind of acknowledge that as a guy who's endured some stuff over the last few years, I certainly have an appreciation for the ability to confront adversity and to plow through it. Keep chipping away, as I often say.

<span class="transcript-speaker">Jackson:</span> I plow through it all the time, that's the way to go, my man. Just fucking plow it. Just fucking plow it, all day. All day.

<span class="transcript-speaker">Unidentified:</span> _You_ gotta fucking plow through, buddy.

<span class="transcript-speaker">Unidentified:</span> Just let it ride.

<span class="transcript-speaker">Monster:</span> Well, God doesn't give you more than you can handle.

<span class="transcript-speaker">Jackson:</span> Just like, full farmer, you know? Just pull out your plow and just plow the hoes. Just plow em.

<span class="transcript-speaker">High Fidelity, SC3:12:01:</span> Hey, hey who was talking about [Sedo](https://en.wikipedia.org/wiki/Sedo) as the registrar? S-e-d-o? As the registrar of <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Monster:</span> They're not. Sedo is a marketplace.

<span class="transcript-speaker">Jackson:</span> Plow. I can't stop saying plow.

<span class="transcript-speaker">Unidentified:</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Unidentified:</span> I mean, aren't you the one currently working on the Anal Phisher? Didn't Kirt give you that line of work?

<span class="transcript-speaker">Jackson:</span> No, that's not me.

<span class="transcript-speaker">Unidentified:</span> I thought he gave you it.

<span class="transcript-speaker">Jackson:</span> Yeah, but I lost it up my ass. I'm sorry, ok? I lost it up my ass.

<span class="transcript-speaker">Unidentified:</span> I forget who he gave it to. Ehh, what can I say. Shit happens.

<span class="transcript-speaker">Kirtaner:</span> It looks like you need some better buttsec my friend.

<span class="transcript-speaker">High Fidelity:</span> Yeah, that's bad buttsec.

<span class="transcript-speaker">Jackson, SC3:12:32:</span> Nah, I told him, "I'll test it". Like, I'll fucking... connect to the bluetooth thing, stick it up someone's bootyhole, and fucking see if I can get some wifi hashes.

<span class="transcript-speaker">Unidentified:</span> No lube. No lube, John, no lube.

<span class="transcript-speaker">Unidentified:</span> It just hit me as to the chaos of this chat right now.

<span class="transcript-speaker">Jackson:</span> Lube? Who uses... Man, I was in the Marine Corps, they didn't use fucking lube, they just assfucked you, okay? I don't know what to tell you.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Unidentified, SC3:12:55:</span> It just hit me, the chaos of this chat... we go from Rob giving lovely little fucking religious prayers and just teaching everybody shit, to straight, oh, we're shoving shit up our buttholes.

<span class="transcript-speaker">Monster:</span> You know...

<span class="transcript-speaker">Kirtaner, SC3:13:10:</span> You know, I'm actually making, unironically making a hacking tool. A penetration-testing, wifi-cracking buttplug.

<span class="transcript-speaker">Jackson:</span> Yeah, it's not a joke, he really is.

<span class="transcript-speaker">Kirtaner:</span> It vibrates when you catch some wifi <span class="transcript-note">[unintelligible]</span>. For the most intimate physical engagements.

<span class="transcript-speaker">Unidentified:</span> What language you writing it in?

<span class="transcript-speaker">High Fidelity:</span> What's it called?

<span class="transcript-speaker">Kirtaner:</span> It's called the Anal Phisher.

<span class="transcript-speaker">Jackson:</span> He's writing it in [assembly](https://en.wikipedia.org/wiki/Assembly_language).

<span class="transcript-speaker">Unidentified:</span> Well he clearly has to write it in [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)).

<span class="transcript-speaker">Jackson:</span> He's writing it in [COBOL](https://en.wikipedia.org/wiki/COBOL).

<span class="transcript-speaker">Unidentified:</span> Writing it in [brainfuck](https://en.wikipedia.org/wiki/Brainfuck).

<span class="transcript-speaker">Unidentified:</span> Whew, that's a challenge and a half. If you could actually write that shit in brainfuck you have <span class="transcript-note">[unintelligible]</span>.

<span class="transcript-speaker">Monster:</span> Yeah.

<span class="transcript-note">[Jitsi drops]</span>

<span class="transcript-speaker">Kirtaner:</span> <span class="transcript-note">[singing]</span>

<span class="transcript-speaker">Monster:</span> That's a funny one. Some DDoS...

<span class="transcript-speaker">Kirtaner:</span> No for real though, whoever's doing that, stop it. It's fucking annoying.

<span class="transcript-speaker">Unidentified:</span> It low-key is, yeah.

<span class="transcript-speaker">Monster, SC3:15:10:</span> That's the trouble when you have a bunch of hackers. Every now and then they have to flex their muscles and show you how they hack.

<span class="transcript-speaker">Kirtaner:</span> They don't call them hackers on steroids for no reason![^fn15]

<span class="transcript-speaker">Unidentified:</span> And then we have the same guy that claims that just asking people to stop using steroids, metaphorically speaking.

<span class="transcript-speaker">Monster:</span> Somehow High Fidelity manages to become the moderator every time. I don't know how he does that.

<span class="transcript-speaker">High Fidelity:</span> I am the power.

<span class="transcript-speaker">Unidentified:</span> Black magic fuckery.

<span class="transcript-speaker">Monster:</span> You must have some skills.

<span class="transcript-speaker">High Fidelity:</span> No, I'm just old.

<span class="transcript-speaker">Monster:</span> He's got some skills or something, I don't know.

<span class="transcript-speaker">High Fidelity, SC3:16:00:</span> Hey Rob, the server this is running on, is it a [virtual server](https://en.wikipedia.org/wiki/Virtual_machine) or a physical server?

<span class="transcript-speaker">Monster:</span> I think it's like a, it's a small project, I think we just put it on one of our VPSes. We do host a lot of [VPS](https://en.wikipedia.org/wiki/Virtual_private_server). You can check out [Sibyl.li](https://en.wikipedia.org/wiki/Epik_(company)#Sibyl_Systems) is one of our companies, and then Terrahost.com. Not everybody knows that, but we actually also run a datacenter called Terrahost and we sell a lot of dedicated servers there. But we self-host this. But we'll put it on a bigger dedicated...

<span class="transcript-speaker">High Fidelity:</span> Well, if you're running a virtual machine, you're running a virtual private server, you should be able to on-the-fly, automatically adjust.

<span class="transcript-speaker">Monster, SC3:16:56:</span> Yeah, right. Well it's not like [elastic cloud](https://en.wikipedia.org/wiki/Elastic_cloud_storage), but we could easily put it on a [Proxmox](https://en.wikipedia.org/wiki/Proxmox_Virtual_Environment) instance to just develop more on-demand scalability. It just has not been a priority. We played around with [OpenStack](https://en.wikipedia.org/wiki/OpenStack), I can't say that we've really <span class="transcript-note">[unintelligible]</span> with OpenStack. I'm sure there are people that are more adept at running OpenStack instances.

<span class="transcript-speaker">High Fidelity, SC3:17:23:</span> I was just texting with a friend of mine. You know what the world really needs is a better [hypervisor](https://en.wikipedia.org/wiki/Hypervisor). Because if you look at Proxmox, it's not really enterprise-ready. You can't really administer it centrally, you know? There's [ESXi](https://en.wikipedia.org/wiki/VMware_ESXi), which is okay, but it's really expensive. And then you've got [KVM](https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine), and that's kind of ehh, I don't know.

<span class="transcript-speaker">Jackson, SC3:17:46:</span> Yo, Lin Wood just said we have, fucking, a mouthbreather in here somewhere. So... shut the fuck up.

<span class="transcript-speaker">Unidentified:</span> Mute all, mute all.

<span class="transcript-speaker">Unidentified:</span> Microphone intensifies.

<span class="transcript-speaker">Unidentified:</span> It's not going to be a PrayerMeeting full of anons if there's not that one guy just breathing into the mic as if it's a fucking Tuesday afternoon and he's gotta make four grand off of [Patreon](https://en.wikipedia.org/wiki/Patreon).

<span class="transcript-speaker">LH:</span> I think it's Catgod.

<span class="transcript-speaker">Catgod:</span> No, it's not, it's fucking Lin's Horse.

<span class="transcript-speaker">LH:</span> Catgod.

<span class="transcript-speaker">High Fidelity:</span> I'm too high to be mod, somebody else take it.

<span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Monster, SC3:18:30:</span> I think you can change me back to the moderator. Then I'll mute...

<span class="transcript-note">[crosstalk, coughing]</span>

<span class="transcript-speaker">Unidentified:</span> When are you going to get your own datacenter, Rob?

<span class="transcript-speaker">Monster, SC3:18:39:</span> We have. We have. 

<span class="transcript-speaker">Unidentified:</span> Mute all, mute all, mute all.

<span class="transcript-speaker">Monster:</span> Yeah we do. You didn't pay attention. We did eleven acquisitions in the last three years. I can assure you.

<span class="transcript-speaker">Jackson:</span> Yeah, fucking pay attention, okay? God. We're all here trying to learn, okay?

<span class="transcript-speaker">Monster:</span> Yeah yeah yeah. I'm just saying, that we do actually run our own datacenters, and we're adding more datacenter capacity as we go forward.

<span class="transcript-speaker">High Fidelity, SC3:19:05:</span> Hey Rob, what do you think...

<span class="transcript-speaker">Unidentified, SC3:19:07:</span> How much of your infrastructure is homed in [Cologix](https://en.wikipedia.org/wiki/Cologix)? Is that like the majority of it, or what? There's an invoice that was in the email thing, I was just curious.

<span class="transcript-speaker">Monster, SC3:19:16:</span> Yeah. Almost none.

<span class="transcript-speaker">Unidentified:</span> Oh okay. Yeah because that was really cheap, I was like "wait a minute".

<span class="transcript-speaker">Monster, SC3:19:22:</span> Yeah, almost none. That was for, like, one client. Enterprise client. We have another really big U.S. datacenter coming online. Really big. We can't... the location will be undisclosed, but it's big.

<span class="transcript-speaker">High Fidelity, SC3:19:40:</span> Did Peter Thiel pay for it?

<span class="transcript-speaker">Monster:</span> What?

<span class="transcript-speaker">High Fidelity:</span> Did [Peter Thiel](https://en.wikipedia.org/wiki/Peter_Thiel) pay for it?

<span class="transcript-speaker">Monster:</span> No, no, no. Peter Thiel is not our investor.

<span class="transcript-speaker">High Fidelity:</span> Okay. I don't like him.

<span class="transcript-speaker">Monster:</span> Yeah. I don't know him, I've never met him.

<span class="transcript-speaker">Unidentified:</span> What's the investment?

<span class="transcript-speaker">Monster:</span> What was the investment?

<span class="transcript-speaker">Unidentified:</span> Yeah.

<span class="transcript-speaker">Monster, SC3:20:03:</span> I mentioned it earlier. We raised $32 million from a private investment group, and those funds are allowing us to step on the gas with infrastructure...

<span class="transcript-speaker">Catgod:</span> I've got $10k, what can you make me?

<span class="transcript-speaker">Unidentified:</span> What's your [burn rate](https://en.wikipedia.org/wiki/Burn_rate)?

<span class="transcript-speaker">High Fidelity:</span> Ooh, burn rates. We don't discuss <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">Monster, SC3:20:19:</span> Well, in the past we were very capital efficient. Now we're investing more aggressively, adding significant amounts of capacity. Buying <span class="transcript-note">[unintelligible]</span> equipment, putting it in our own facilities. The objective is just to become more supply chain end-to-end resilient across the entire value chain. There are a lot of layers in the tech stack, as you know, and sometimes when you integrate with third parties you're vulnerable to weak links in the chain.

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[reading chat]</span> Uh, [Rebekah Mercer](https://en.wikipedia.org/wiki/Rebekah_Mercer), no...

<span class="transcript-speaker">High Fidelity, SC3:21:04:</span> Was that a [SolarWinds](https://en.wikipedia.org/wiki/2020_United_States_federal_government_data_breach) reference? Did you just make a SolarWinds reference?

<span class="transcript-speaker">Catgod:</span> I've got $10k for you, how quickly can you double my money?

<span class="transcript-speaker">Monster:</span> Yeah, you know, we're privately held and we tend to invest at a higher level, but you can send me a note. We're not unwilling...

<span class="transcript-speaker">Monster:</span> <span class="transcript-note">[reading chat]</span> The question was asked, am I a [Freemason](https://en.wikipedia.org/wiki/Freemasonry) or [Illuminati](https://en.wikipedia.org/wiki/Illuminati). No, no, I am not a Freemason, I've never been in a [Lodge](https://en.wikipedia.org/wiki/Masonic_lodge) as a member, and I've never been in the Illuminati.

<span class="transcript-speaker">High Fidelity:</span> We are actually the illuminaughty.

<span class="transcript-speaker">Unidentified:</span> You want to know what the funny thing is, about all the conspiracies surrounding Freemason stuff? Is, in order to actually become a Freemason in a lot of Lodges, you have to become a Catholic first. Which makes about everything sound stupid, but...

<span class="transcript-speaker">Unidentified:</span> You just gotta believe in God.

<span class="transcript-speaker">Monster, SC3:22:01:</span> Yeah. You have to believe in some higher power. If you ever want to go in a deep rabbit hole on that one, pick up a copy of [_Morals and Dogma_](https://en.wikipedia.org/wiki/Morals_and_Dogma_of_the_Ancient_and_Accepted_Scottish_Rite_of_Freemasonry). That book was written by [Albert Pike](https://en.wikipedia.org/wiki/Albert_Pike), he was the inventor of the [Scottish Rite](https://en.wikipedia.org/wiki/Scottish_Rite) of Freemasonry.

<span class="transcript-speaker">Unidentified:</span> He was also in the [KKK](https://en.wikipedia.org/wiki/Ku_Klux_Klan).

<span class="transcript-speaker">Monster:</span> He was. And the sad part is, as I look at it, I think that he was instrumental in getting a bunch of Christians and...

<span class="transcript-speaker">Unidentified:</span> He was one of the first [Grand Wizards](https://en.wikipedia.org/wiki/Grand_Wizard) of the KKK.

<span class="transcript-speaker">Monster:</span> Yeah, no, exactly. So the Scottish Rite of Freemasonry, when you get to the [32nd degree](https://en.wikipedia.org/wiki/Scottish_Rite#Degree_structure) of the Scottish Rite, they tell you that their god is Satan.[^fn20] So if you read their handbook...

<span class="transcript-speaker">Unidentified:</span> The Luciferian doctrine.

<span class="transcript-speaker">Monster:</span> Yeah. If you read _Morals and Dogma_, which is kind of the guidebook of the Scottish Rite, you'll get that when you get to the 32nd degree. But by that point you've, like, compromised yourself so many times with secret oaths and cursed yourself, it's awfully hard to walk out of it.[^fn20] So, fascinating read. <span class="transcript-note">[reading chat]</span> Yeah, there's this whole notion of [Blue Lodges](https://en.wikipedia.org/wiki/Masonic_lodge#Types), like three degrees of Blue Lodges, and then where was the [York Rite](https://en.wikipedia.org/wiki/York_Rite) and the Scottish Rite, but...

<span class="transcript-speaker">Unidentified:</span> There's [Blue Aprons](https://en.wikipedia.org/wiki/Blue_Apron), White Aprons...

<span class="transcript-speaker">High Fidelity, SC3:23:28:</span> Hey, how is Blue Apron? I heard that's a good service.

<span class="transcript-speaker">Unidentified:</span> Those are the lower degree masons.

<span class="transcript-speaker">Monster, SC3:23:40:</span> <span class="transcript-note">[reading chat]</span> "What about UFOs?" I think aliens are actually demons, and I don't think there are extraterrestrial, you know... from other galaxies. I don't believe that.

<span class="transcript-speaker">LH:</span> Do you like cats <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Monster:</span> I don't know.

<span class="transcript-speaker">LH:</span> Pussycats

<span class="transcript-speaker">High Fidelity:</span> Kirt's holding a cat, right? So they're asking if you like...

<span class="transcript-speaker">Unidentified:</span> Oh I was like, "what the hell's the context of this?"

<span class="transcript-speaker">High Fidelity:</span> Or she could have meant vagina, I don't know.

<span class="transcript-speaker">Unidentified:</span> In regards to Freemason stuff, my mom came from the same town as Michelle Harding, which is dumb. And I can confirm that that place, it's a total crackhouse. So, just to give you some idea as to the context of where that woman came from before she wrote [_Michelle Remembers_](Michelle Remembers). Just, ew. Blegh.

<span class="transcript-speaker">Unidentified:</span> What's also interesting is the [Mormon religion](https://en.wikipedia.org/wiki/Mormonism) was pretty much based off Freemasonry. What's his name, [Brigham Young](https://en.wikipedia.org/wiki/Brigham_Young) and all them were all members of the Freemasons.

<span class="transcript-speaker">Monster:</span> Yeah.

<span class="transcript-speaker">Unidentified:</span> I feel like that's just common sense, though. A lot of religions are just based off of each other, with some <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">Monster:</span> Well...

<span class="transcript-speaker">Unidentified:</span> Oh yeah, definitely. All throughout history, conquered people co-opt people's religions and stuff and pass it on, so that way they can rule the people that they just conquered. It's a form of indoctrination.

<span class="transcript-speaker">Monster, SC3:25:07:</span> Yeah. No, I think in the 1800s you had a whole bunch of stuff go off-script. So you had the [Great Awakening](https://en.wikipedia.org/wiki/Great_Awakening) in the 1700s, like, late 1740s. Like the time of John <span class="transcript-note">[unintelligible]</span>. And then when you get to the 1800s, you started to have, like, evolution taught as fact and you had [Jehovah's Witnesses](https://en.wikipedia.org/wiki/Jehovah%27s_Witnesses), and [Christian Science](https://en.wikipedia.org/wiki/Christian_Science), you had the [Scofield Bible](https://en.wikipedia.org/wiki/Scofield_Reference_Bible), and Mormonism. And the result was basically amplification of all kinds of confusion. And the mainstreaming of things like Freemasonry as a way to lead people to particular outcomes. And I think to a certain extent...

<span class="transcript-speaker">Unidentified:</span> It was a social network. They used it as social support. That was one of the first social support nets, especially in like the 1800s when the government and all that didn't really give a fuck about you. The Freemasons had like, soup kitchens and bread lines and stuff.

<span class="transcript-speaker">Monster:</span> Yeah.

<span class="transcript-speaker">Unidentified:</span> You think they give a fuck about you now?

<span class="transcript-speaker">Unidentified:</span> Even less so then.

<span class="transcript-speaker">Monster, SC3:26:15:</span> I think back then it was really helpful, like it is now, to know what's up, like what's true. And to a certain group, that was probably as good a source of like, "what's the real deal" as any other. But now we have the Internet and people can go basically search for truth. And unfortunately there's an enormous amount of misinfo and disinfo out there, and it's very easy to kind of go down that rabbit hole and get confused for a very long period of time.

<span class="transcript-speaker">LH:</span> Yeah, but what about if that's your site? Your site hosts the misinfo and disinfo.

<span class="transcript-speaker">Monster:</span> Yeah, the problem is, the problem is...

<span class="transcript-speaker">LH:</span> So shut it down.

<span class="transcript-speaker">Monster, SC3:26:52:</span> Yeah. The problem is, you know... how much of it is, like, organized and how much of it is people who are just searching for truth being willfully ignorant, and who are we to judge? It's one thing when you have...

<span class="transcript-speaker">High Fidelity:</span> You're the guy who hosts their bullshit, Rob. That's who you are to judge. You run it. You should know better. You're an adult man. Listen, the [QAnon](https://en.wikipedia.org/wiki/QAnon) crap? The QAnon crap got [parents to murder their children](https://en.wikipedia.org/wiki/QAnon#US_QAnon_child_murders), Rob.

<span class="transcript-speaker">LH:</span> And kidnap.

<span class="transcript-speaker">Monster:</span> I think the QAnon stuff didn't get out early enough. I think that for many people who are awake, it was apparent that it was a [psyop](https://en.wikipedia.org/wiki/Psychological_warfare). But the thing is, this thing with Wikipedia, it's 98% truth and some percentage of it is arsenic. So, like, how do you know? Right? <span class="transcript-note">[audio cuts out]</span> Is some percent arsenic? You know, debatable. You have to basically be mindful of your thoughts. What stuff do you allow to basically come into your head? Here's an example, a classic acid test. How many of you know what's a witch's [grimoire](https://en.wikipedia.org/wiki/Grimoire)? A grimoire is like a textbook for a witch. And you could say, well, witches are bad and grimoires are bad, and they shouldn't exist. But if someone has the ability to make that information available and people go and study it to find out how witches think and what they do, does that basically allow you to become more mature as a person, to be able to navigate a world that is partly evil and partly good? I think about life as like a soul gym. You basically have an opportunity to walk through this plane, and... imagine the image of [yin and yang](https://en.wikipedia.org/wiki/Yin_and_yang). You've got the white and the dark, black and white, and there's a line going down the middle. I think your greatest workout in the soul gym is sort of borne along that edge. You basically are on the side of good, but you're not far from people who are dark. Being able to draw them out from dark into the light without becoming a part of the dark? How can you have a conversation with a witch if you don't know their playbook? How can you have a conversation... right? If you don't understand how they think? You know, there's this temptation to...

<span class="transcript-note">[Jitsi drops]</span>

<span class="transcript-speaker">Monster:</span> ...really, really, really needed to be able to get ahold of you, they would be able to send you a message. And that means the end of spam. So, we'll see. But, that's one of our high-priority projects and I'm excited to see it come together. I think what it does is it opens up the possibility of creating a level playing field, where you don't have to be a huge company to be able to get people to sign up for your little website. Because one of the big challenges for independent publishers is how do you give them a way to be able to get audience when most people don't want to sign up and save [PII](https://en.wikipedia.org/wiki/Personal_data) with a small website that they may use once and not again. So the framework for portable, [self-sovereign identity](https://en.wikipedia.org/wiki/Self-sovereign_identity) with [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on) and portable reputation, where you have the ability to basically... it pays to be you and it pays to be good... I think it's an idea that's time has come, and so yeah... <span class="transcript-note">[reading the chat, not visible]</span> Yeah, there's mature tech but it hasn't been implemented from a consumer-centric perspective, so we'll see.

<span class="transcript-speaker">C:</span> We talked about this at [DEF CON](https://en.wikipedia.org/wiki/DEF_CON), High Fidelity, and a lot of the problems we're having is data privacy. All these different states have all these different privacy laws with the states, and also as Americans we don't really have any control over our own data as well. So you have a lot of salesmen and stuff, like we talked about at DEF CON, where like, medical sales reps are targeting communities and finding out demographics of communities in order to sell them medicines. Like in one case, they actually classified a community and tried to patent and copyright some of their genes and stuff. It's actually a really big problem.

<span class="transcript-speaker">Unidentified:</span> So, I mean, that also... generally speaking, that's not just limited to America, either. Like in terms of lack of legislation to prevent your own... for data being sold to use, whatever. That's a majority of [G20](https://en.wikipedia.org/wiki/G20) countries, with the exception of ones in the European Union.

<span class="transcript-speaker">C:</span> It's just, you look at data privacy in America and it's so easy to find anything about anyone in America. And it's because of that. It's because of the lack of jurisdictions and stuff.

<span class="transcript-speaker">Monster:</span> Yeah. I mean, the raw deal is that, the degree to which there's been catalogs of not just granular details using [cookies](https://en.wikipedia.org/wiki/HTTP_cookie), but right down to, as you probably know, like, IP addresses correlated to physical address. So you actually have people who are comprehensively profiled, like right down to the physical address. You guys probably know more about, like, IPv6 A10(?). But the notion that there are ways to be able to actually pierce through what you think is a functioning [VPN](https://en.wikipedia.org/wiki/Virtual_private_network). I'll tell you guys, there's a project that we're working on. We acquired a company called Substratum, you might want to check it out. It's designed to penetrate the [Great Firewall](https://en.wikipedia.org/wiki/Great_Firewall) of China. VPN and [Tor](https://en.wikipedia.org/wiki/Tor_(network)) doesn't let you do that. We acquired that company a couple months ago, and we're scaling that technology. It was a token at one point, still is, SUB is the token.[^fn19] And we're looking forward to introducing what we call Substratum-ready networks. We have a project called [Toki](https://en.wikipedia.org/wiki/Rob_Monster#Other_companies), Toki.com, you can check it out. And that's basically a decentralized [ISP](https://en.wikipedia.org/wiki/Internet_service_provider) platform. So the idea that you can actually operate with an Internet that's untethered from the Internet, if the Internet becomes intermittent, like in an RV park or for people that are [boondocking](https://www.campendium.com/camping/what-is-boondocking/). But the idea that you can take these technologies, and then combine it with Substratum, so that Toki router can use technology that is capable of being able to bypass the Great Firewall of China. So these are things that are being assembled. For those of you who are wondering, why does Epik get the wrath of certain organizations that are trying to keep us in check, I think part of the reason is because we are building resilient technology. I know you might wonder if we're resilient, but we are building resilient technology. And we have some really capable people that are coming together to build something that essentially will maintain the flow of knowledge so that people can ask questions and seek answers.

<span class="transcript-speaker">Catgod:</span> Hey, Mr. Rob, you should come to Ohio and meet me in Youngstown. And we can start a cat company, and make like $90 million.

<span class="transcript-speaker">Monster:</span> That's funny. Yep.

<span class="transcript-speaker">Catgod:</span> What do you mean that's funny? I'm serious.

<span class="transcript-speaker">Monster:</span> I told you, I'm not a cat guy.

<span class="transcript-speaker">Catgod:</span> We can put $10k in and we can start cloning cats. And get rich.

<span class="transcript-speaker">LH:</span> You can get some horses too.

<span class="transcript-speaker">Monster:</span> Yeah, I told you, I'm not a cat guy. We have dogs.

<span class="transcript-speaker">Catgod:</span> You can just say you're not interested. You don't gotta laugh at my offer to make some money for you.

<span class="transcript-speaker">Unidentified:</span> I was just gonna say... Kirt off in the background having his eyes bug out because he's donated like 400 cats to adoption shelters.

<span class="transcript-speaker">Kirtaner:</span> I have fostered and raised 400 kittens, socialized them. They're feral packs that we took in, socialized, raised until they were around eight weeks old, spayed, neutered, and put out for adoption over the years.

<span class="transcript-speaker">Catgod:</span> What kind of company do you want to make, Rob?

<span class="transcript-speaker">Monster:</span> What kind of company do I want to make? I tell you, go to epik.com/labs, you'll see that we're constantly incubating lots of things. And I'll tell you, it's Substratum. Substratum.net. That's the company we acquired. If you go to epik.com/labs you'll see there's a whole stack of companies and technologies that we've either incubated or acquired, and the rate limiting factor for those companies to kind of blossom and thrive is typically just having enough confident technical leaders and project managers that know how to breathe life into an enterprise. So we're growing, and...

<span class="transcript-speaker">Catgod:</span> Listen, Rob. I'm a young business major. I'm a Mason. We hang out around the same people. Let's me and you partner up, let's do something, and we can make a lot of money. I ain't even asking you to put all the money in, I'm willing to put in $10,000 of my own money.

<span class="transcript-speaker">Monster:</span> You know, here's the funny thing. I'll tell you something that I've learned. That is this: everybody has a gift. Everybody has a talent. God gives everybody a gift or a talent. The biggest thing that I have learned as a manager is to try to help people to figure out what their gift or talent is, and then design a job around that individual.

<span class="transcript-speaker">LH:</span> Catgod needs a job.

<span class="transcript-speaker">Monster:</span> And the way we hire people, is we hire people for gifts and talents. And then we design jobs around them.

<span class="transcript-speaker">Catgod:</span> It also helps to have connections. That's where you come in.

<span class="transcript-speaker">Monster:</span> Yeah. Right. So if I can match persons to the right opportunity, I try and do that.

<span class="transcript-speaker">LH:</span> Why don't you hire Catgod then.

<span class="transcript-speaker">Catgod:</span> That's the step up you have on a lot of people here. You have the connections to go to wherever you said you went to, and have a computer and shit.

<span class="transcript-speaker">Monster:</span> Yep. And then the other thing that's kind of unusual about Epik as an employer...

<span class="transcript-speaker">Catgod:</span> So you gotta share the love now. Return the favor.

<span class="transcript-speaker">Monster:</span> I, I tend to. By creating opportunities and trying to deploy capital to projects that empower people. Yeah, so another thing that's kind of unusual is we don't have quotas...

<span class="transcript-speaker">Catgod:</span> Me and you, me and you could buy all of Youngstown. And turn the <span class="transcript-note">[unintelligible]</span> around.

<span class="transcript-speaker">Monster:</span> That's funny. It's a big world... Yeah, so, no budgets, no timelines, and no quotas. So we tend to kind of take the mindset that says "the world is changing, so we have to be nimble". So we just say okay, what do we think is our thesis around how the world is going to work, design projects and themes around that thesis, and then kind of try to catch a wave. Because the world is changing and oftentimes an idea that you thought might be useful in the future suddenly becomes useful because of changing circumstance. It's really like catching a wave. And so we think that there are some things that are coming on the horizon, where some of the emphasis on resiliency, decentralization could prove really useful. But, in the meantime, we don't go as fast as we would like sometimes, although we do get a lot done in a day, in part because we haven't necessarily secured all the talent that we need to be able to get it done. You guys are solid. We've gone, what, four hours? Five hours? What do we got? It's been like a while.

<span class="transcript-speaker">LH:</span> It's 8am here, so I'm going to go. Goodnight.

<span class="transcript-speaker">Kirtaner:</span> Yeah, we have indeed been going for close to five hours if I'm... I've had a long day. So Rob, Rob, if you want to go to bed, it's on you. I mean... I'm starting to fade myself, I'm sure you'd like to go get some rest. This has been a very long, arduous debacle for you.

<span class="transcript-speaker">Rob:</span> No, no, no, it's all good. But yeah guys, I appreciate you. To the extent that you guys can be looking out for us, so we can kind of get this thing back in the box... You know. And those of you who want to help out, to try to get it back in the box, and get acquainted with us... we'd be happy to get to know you. And we have really fantastic people who I'm happy to introduce and connect you with. Right now it's after midnight, I've got 1,095 unread emails... which is a little bit much. So if I don't get right back to you, don't feel like I don't care. I will do my best to catch up. Just be a little patient with me. But I will do my best to get back to you.

<span class="transcript-speaker">Kirtaner:</span> And thank you. Thank you again for taking down YourDaddyJoey. I appreciate that myself.

<span class="transcript-speaker">Monster:</span> Yeah, no worries. I think it was probably the right thing to do.

<span class="transcript-speaker">Unidentified:</span> Yeah, that guy's a piece of shit.

<span class="transcript-speaker">LH:</span> We'll see you on the [Gregg Show](https://twitter.com/gregghoushshow).

<span class="transcript-speaker">Kirtaner:</span> With love from Anonymous.

<span class="transcript-speaker">Monster:</span> With love from Epik. God bless you guys. Have a fantastic evening and sleep well!

<span class="transcript-speaker">LH:</span> Goodnight!

<span class="transcript-speaker">Monster:</span> Night!

## Footnotes

[^fn1]: Twitter permanently suspended @gatewaypundit, a Twitter account run by _The Gateway Pundit_'s founder Jim Hoft, on February 6, 2021, for repeatedly publishing misinformation about the 2020 U.S. presidential election. ([_The Gateway Pundit_](https://en.wikipedia.org/w/index.php?title=The_Gateway_Pundit&oldid=1044204138). Wikipedia, September 21, 2021)
[^fn2]: After Epik didn't acknowledge the hack, hackers vandalized an Epik support page ([archive of the vandalized page](https://web.archive.org/web/20210915001823/https://www.epik.com/support/knowledgebase/update-they-claim-we-got-hacked-q-says-theyre-lying/)). ([_The Washington Post_](https://www.washingtonpost.com/politics/2021/09/17/battle-election-security-funding-is-back/))
[^fn3]: Kirtaner is Aubrey Cottle, a member of [Anonymous](https://en.wikipedia.org/wiki/Anonymous_(hacker_group)) who has been credited by some publications as a founder of the group. ([_The Atlantic_](https://www.theatlantic.com/technology/archive/2020/08/hacker-group-anonymous-returns/615058/))
[^fn4]: YourDaddyJoey was a website run by Joey Camp, which published dox on people he believed to be antifa.
[^fn5]: According to data from the Epik leak, technologist Michael Trollan allegedly runs [Andy Ngo's](https://en.wikipedia.org/wiki/Andy_Ngo) website and websites including AntifaMugshots.com. AntifaMugshots was a website that attempted to dox people who were believed to be antifa. As of this writing (September 21, 2021), the domain redirects to Ngo's website.
[^fn6]: [Steven Monacelli](https://twitter.com/stevanzetti) and [Chad Loder](https://twitter.com/chadloder) were two of the first journalists to break the news of the Epik hack on September 13. Shortly after, Monster [replied](https://twitter.com/robmonster/status/1437532355476983813) ([archive](https://web.archive.org/web/20210914231223/https://twitter.com/robmonster/status/1437532355476983813)) to one of Loder's tweets about the hack with a link to the YourDaddyJoey page doxing and defaming Loder, suggesting that Loder had somehow orchestrated the hack to try to have the doxing page removed.
[^fn7]: In August 2017, BitMitigate, an American cybersecurity company began hosting American neo-Nazi, white supremacist, and Holocaust denial commentary and message board website _The Daily Stormer_. This was in response to GoDaddy and Cloudflare terminating services for the site after it published an article mocking Heather Heyer, the victim of the [vehicle ramming attack](https://en.wikipedia.org/wiki/Charlottesville_car_attack) that occurred at the [Unite the Right rally](https://en.wikipedia.org/wiki/Unite_the_Right_rally) in Charlottesville, Virginia that same month., When Epik acquired BitMitigate in 2019, it was still hosting the website. Monster has said that when Epik discovered it was providing services to the website, it stopped doing so. In a 2021 interview with NPR, Monster said that Epik's connection to The Daily Stormer was "regrettable", and that "The greatest cost of acquiring BitMitigate was not the amount of cash that we paid to buy the technology, but the entanglement." ([Epik (company)](https://en.wikipedia.org/w/index.php?title=Epik_(company)&oldid=1045467815). Wikipedia, September 21, 2021)
[^fn8]: demonhackers.com was another of Joey Camp's domains, a reference to when [Gab](https://en.wikipedia.org/wiki/Gab_(social_network)) CEO Andrew Torba blamed [a major hack](https://en.wikipedia.org/wiki/Gab_(social_network)#Hacks_and_data_leaks) of the Gab service on "demon hackers", a term which some hackers then jokingly adopted for themselves. The domain redirected to dox pages of hackers on YourDaddyJoey.
[^fn9]: [Michael Edison Hayden](https://twitter.com/MichaelEHayden) reported extensively on Epik and Rob Monster in a 2019 _Hatewatch_ article titled ["A Problem of Epik Proportions"](https://www.splcenter.org/hatewatch/2019/01/11/problem-epik-proportions). Epik has railed against the SPLC in a [blog post](https://www.epik.com/blog/splc), blaming them for PayPal's October 2020 decision to stop providing services to Epik.
[^fn10]: This appears to be a reference to the "[Great Reset](https://en.wikipedia.org/wiki/Great_Reset)", which has been the subject of [conspiracy theories](https://en.wikipedia.org/wiki/Great_Reset#Conspiracy_theory).
[^fn11]: [My Pillow](https://en.wikipedia.org/wiki/My_Pillow), owned by "My Pillow Guy" [Mike Lindell](https://en.wikipedia.org/wiki/Mike_Lindell), offered discounts with codes like "[QAnon](https://en.wikipedia.org/wiki/Qanon)" and "FightForTrump". ([Snopes](https://www.snopes.com/fact-check/mypillow-discount-codes-qanon/), [_The Hill_](https://thehill.com/policy/finance/534035-mypillow-continues-offering-fightfortrump-discount-code))
[^fn12]: This may be a reference to the fact that Epik has long advertised itself as the "Swiss bank of domains".
[^fn13]: This is apparently referring to Braden Pollock and Tal Moore. Moore left the board in December 2018, over the company's choice to host Gab. Pollock resigned in June 2020, and said that his departure was because he and Monster "don’t share the same ideology" and because he disagreed with the company's direction. ([Epik (company)](https://en.wikipedia.org/w/index.php?title=Epik_(company)&oldid=1045467815). Wikipedia, September 21, 2021) Pollock's departure is [rumored](https://www.namepros.com/threads/epik-had-a-major-breach.1252094/page-40#post-8401155) to have been because Monster refused to fire an employee who shouted "fuck" during a moment of silence for George Floyd. (The employee [claimed](https://youtu.be/2oTabcNCHNk?t=441), and Rob Monster later [claimed](https://www.namepros.com/threads/braden-pollock-steps-down-from-epik-bod.1194548/page-4#post-7811160), this was because he had dropped his smartphone at that precise moment.)
[^fn14]: This is likely a reference to [LegitScript's](https://en.wikipedia.org/wiki/LegitScript) 2017 [report](https://www.legitscript.com/blog/2017/03/us-registrar-epik-plays-dangerous-game/) about Epik's services to sites selling controlled substances without prescription.
[^fn15]: The first mainstream news report about Anonymous, published in 2007, described the group as an "Internet hate machine" and "hackers on steroids". ([Anonymous (hacker group)](https://en.wikipedia.org/w/index.php?title=Anonymous_(hacker_group)&oldid=1045694224). Wikipedia, September 21, 2021.)
[^fn16]: Kirtaner is referring to [a security incident in 2020](https://en.wikipedia.org/wiki/Parler#Security) when he was able to use his verified status on Parler to pretend to be another high profile individual. ([Parler](https://en.wikipedia.org/w/index.php?title=Parler&oldid=1045701754). Wikipedia, September 21, 2021.)
[^fn17]: See the [Wikimedia Foundation's benefactors](https://wikimediafoundation.org/support/benefactors), and information on the relationship between [Google and Wikipedia](https://en.wikipedia.org/wiki/Google_and_Wikipedia).
[^fn18]: "Technocratic control grid" refers to an aspect of the [Great Reset conspiracy theory](https://www.adl.org/blog/the-great-reset-conspiracy-flourishes-amid-continued-pandemic).
[^fn19]: "The company raked in $13.8 million in a token sale during the [ICO](https://en.wikipedia.org/wiki/Initial_coin_offering) gold rush. Now, Substratum is broke. And some investors are crying foul." ([_Decrypt_](https://www.yahoo.com/now/substratum-burns-13-million-ico-213042801.html))
[^fn20]: This is a common conspiracy theory about Freemasonry. See [Masonic conspiracy theories](https://en.wikipedia.org/wiki/Masonic_conspiracy_theories) and [Christian attitudes towards Freemasonry § Claims of Satan worship and response](https://en.wikipedia.org/wiki/Christian_attitudes_towards_Freemasonry#Claims_of_Satan_worship_and_response)