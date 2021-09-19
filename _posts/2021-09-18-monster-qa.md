---
layout: narrative
title: "Transcript of Rob Monster's live Q&A following the Epik breach"
author: Molly White
publication-date: 2021-09-18
comments: false
custom_excerpt: "Transcript of a live Q&A session held by Rob Monster on September 16, 2021."
---

<div class="note">
<p>This is a transcript of a portion of the live Q&A session held by Rob Monster on September 16, 2021. It is available on <a href="https://www.youtube.com/watch?v=aZ9MFts28XI">YouTube</a>, where it was published by Mikael Thalen. The transcript has only been edited for readability (e.g., to remove filler words which do not change meaning) and to remove some of weev's comments (all removalsmarked inline) which I have no interest in reprinting on my own website. Where relevant, comments from the live chat section have been transcribed for context. A plaintext copy of this can be downloaded <a href="https://gist.github.com/molly/88eae60e2f9db9031c1661720e827e36">here</a>.</p>

<p>All additional copyright to this transcript can be considered waived, and it can be freely reused with or without attribution to me. Video copyright details are available at the YouTube link.</p>

<b>I have not finished editing transcribing, and will be uploading additional portions today (9/18) as I complete them.</b>
</div>

<span class="transcript-speaker">Rob Monster, 0:00:00</span> ... working hypothesis is that it was a backup. And I'm not going to say where the backup was found but I believe it was a backup and it wasn't the live data. I don't think that there is a active vulnerability that would have allowed that scale of data haul. But we're going to find exactly where it was, we're going to find exactly how it was moved, and...

<span class="transcript-speaker">Monster, 0:00:28</span> <span class="transcript-note">[reading question from chat. Full question in chat was asked by "nf84": "Why are you putting breach in quotes? Do you not believe the breach happened...?"]</span> No, I think that there was a non-active host. Not our production system. It had a backup, as we were doing remote backup of our data, and I think that was intercepted. And we'll figure out exactly how it was done, and cyber forensics people will navigate that, and they will advise us on what we should do, and law enforcement's involved.

<span class="transcript-speaker">Monster, 0:01:05</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "JorgeOrwell": "He's in a state of denial. I've looked at just the file list from the torrent and it's data from multiple systems."]</span> No, not a state of denial, come on bro. Yeah, I mean yeah there was a hijack of data that should not have been hijacked. I don't think there's any way to deny that. I think that the data was intercepted and the method that was used to be able to intercept that data was a method that I think is subject to review. So we haven't made a formal statement along those lines, what we've done is we've announced to our customers, "hey, your personal data may be out there" and encouraged people to... 

<span class="transcript-speaker">Monster, 0:01:52</span> <span class="transcript-note">[reading the chat. Full question in chat was asked by "RobRocks": "Can anyone hear anything hes saying"]</span> "can anyone hear anything"... yeah, I think my microphone's working. Can you guys hear me? Yeah, well anyway I don't know that it is a breach of our production systems, I think that's the wrong word. I think that there was a backup that was hijacked and that it's making the rounds and there are a bunch of guys who I actually think are cursing themselves by trafficking in that data. I can unpack that if you want, but it's not a good move. 

<span class="transcript-speaker">Monster, 0:02:20</span> <span class="transcript-note">[reading the chat. Full comment in chat was from "nf84": "Breach of a back up server is still a breach."]</span> Yeah no, breaches of a backup server is still a breach, yeah. I guess, you know, you can get into like wordsmithing and whatever, you know. It is a data privacy problem, and it requires...

<span class="transcript-speaker">Monster, 0:02:37</span> <span class="transcript-note">[reading question from chat. Full question in chat was asked by Mikael Thalen: "Are reporters cursing themselves for reporting on the breach?"]</span> "are reporters cursing themselves reporting the breach?"

<span class="transcript-speaker">Monster, 0:02:40</span> what, I think there are reporters that are cursing themselves because they're engaging in propaganda. I think that journalism used to be kind of an honorable practice. It was about basically truth and empowering people to make informed decisions and I think somewhere in the last 30 years the economic model changed because there was no longer money to be made selling subscriptions. And as the world became more digital, there was more of an emphasis on online ads. And most of the newspaper industry failed to transition from the current method of monetizing through subscription and print ads, which were very lucrative, to a model that was viable for paying expensive salaries with online ads. Almost nobody wants to pay the paywall so what do you do? You basically become like <i>Huffington Post</i> and like <i>Gizmodo</i> and operations like that that basically are whores. They sell their influence to people that want to write big checks and... Easy money, because you don't have to basically collect money from that many people, but the problem is if you're a journalist and you work for one of these organizations, you have to kind of sell your soul. So I think that that's probably not great economics, right? So if you like make a buck and curse your soul I think it's not worth it.

<span class="transcript-speaker">Monster, 0:04:20</span> So... <span class="transcript-note">[reading chat. Full comment in chat was from "JorgeOrwell": "Yes well (sic) all know how fringe political sites, like gatewaypundit engage in advertising fraud."]</span> <i>Gateway Pundit</i>... they're not a client I don't think. You can check that. I think Jim Hoft, I know his work. They got booted from Twitter, and I think... here's the thing, right? I think that nations get the leaders they deserve. So when you have people who are not great at self-governing, they get dictators, right? When you look back in history, two nations that had great leaders that were, like, empowering and whatnot, a lot of them were very much focused on self-governance. Even like Gaddafi, who people say was this terrible despot tyrant, he was like pro-free education and a lot of other free benefits advancing the cause of its people. And somebody decided that it was time to just basically take his stuff, and so they rolled in and took his stuff. Now why is that relevant to <i>Gateway Pundit</i>? I think that Twitter has to make a call around who do they give the microphone? And we have to make that same call too. We routinely have to de-platform sites that we think are not engaging in self-governance. 8chan came to our platform without warning, they showed up on like a Sunday night, and by Tuesday morning they were gone. I think <i>Gateway Pundit</i> was booted by Twitter, but if you look at their journalism, not all of it is really showing great discernment. I think that's one of the great challenges that a lot of platforms like Twitter have, which is who do you give the microphone?

<span class="transcript-speaker">Monster, 0:06:15</span> <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "@JorgeOrwell IMO there aren't many lies, but journalists don't really understand what they're writing about. They don't understand the difference between a web host and a registrar. Or the distinction between a hack of a live system and theft of a backup (though you can use credentials from the backups to get access to the live systems, so long as you're quick, which is probably what happened do (sic) to the defacement of the knowledge desk."]</span> "in my opinion there aren't many lies but journalists don't really understand what they're writing about. They don't understand the difference between a web host and a registrar or the distinction between a hack of a live system and a theft of a backup where you can use credentials from the backups to get access to the live system..." Yes, that's a problem. "...so long as you're quick, which is probably what happened to the defacement of the knowledge..." Yes, that's exactly what happened. So there was a user, you can look it up, there was a user like "alp", alp@epik.com. His credentials were in one of the files and so people used that to post some stuff on the WordPress blog. And we cleaned it up, but that's where they got it. They also got a Coinbase API key and they tried to move a hundred grand out. We shut that down. So, sorry, no hundred grand for you, hopefully you don't get prosecuted too badly, but it's with the forensic people at Coinbase, so hopefully nobody goes to jail. Nice try though, because you almost got a hundred grand, but no luck, not happening. So if anybody's boasting about getting a hundred grand they got nothing. But you might get trouble. So, that's all I can tell you about that. If you guys think that there are still bad API keys or things that we missed with regards to credentials that are hanging out there, let us know. We pay bug bounties and we're pretty reasonable guys and you have my direct email address.

<span class="transcript-speaker">Monster, 0:08:00</span> <span class="transcript-note">[reading chat. Full comment in chat was from Mikael Thalen: "I saw unhashed credit card data stored in plain text"]</span> "...unhashed credit card data..." I am a bit mystified by that, because we actually store just the last four digits. We don't actually store a full card. So I don't know what that, was unless possibly there was some caching going on in which case, you know, bad form, shouldn't happen. And yeah, I mean, our team... we've done like eleven acquisitions in the last three years and we raised a significant amount of money not that long ago, from a billionaire, freedom-minded guy. No board seat, common stock, and so in other words he just wants to empower people to basically have the opportunity to search for truth and and to do the right thing. I'm the sole board director, founder, CEO. But in the process of doing those acquisitions and raising that capital, what we assembled was really capable people, and some of the different business units that we've acquired came with really really talented technologists, and we're we're working on basically retooling the development organization. In fact, because of this incident we formed a technical core team. I've been kind of the acting CTO if you look at the org chart, well, it's not public. But we have like 80 people and not all of them are staff, some of them are like overseas contractors and whatnot, but there's about 80 staff in various capacities across our various business units. And so the outcome of what we saw here, where really not many people... This will sound strange, so the Russian dev team historically was very guarded about the code base for the legacy core registrar, and up until like six months ago, right? I mean we did an acquisition of Amplify.io, so a licensed crypto exchange, and we acquired a company called Substratum and both of those acquisitions came with <span class="transcript-note">[noise from some other participant, Monster mutes himself but continues speaking]</span>

<span class="transcript-speaker">Monster, 0:11:05:</span> It's me. I tried to mute the new person but I muted myself, that's me. So when when we... this will sound funny. When this breach occurred, I think for many of our top engineers this was the first time they saw the code. And that sounds really stupid, but the history of Epik is that we acquired a company called IntrustDomains back in 2011. Let me give you the story. So 2009, Epik gets started. We're like a domain name asset management company, we set up these websites, we figure out ways to create content, put them on exact match domains, and then Google indexed them and they made a lot of money because Google used to weight the domain name very highly in their algorithm. And then like in 2010, like around October, there was Google Panda and they kind of took the punch bowl away, and our business model was just trash. Actually in the fourth quarter of 2010 and in the first quarter of 2011 we actually had negative revenue because we were reimbursing people who had bought sites from us that were not making money because Google deindexed all of them. And so I had to make a decision do I fold the tent and shut down Epik, or do I retool and come up with a new business model? So I didn't draw salary for a long time. We made a decision that a client, or a supplier, that we were working with at the time called IntrustDomains based in Colorado Springs, they were providing software for drop catching. So when the domain name expires you drop catch it. They were providing us with drop catching services. But their customer service was atrocious, and so I flew down to Colorado Springs, talked to Ken Palm who's the founder and owner, and I said, "Ken, you guys are really, really bad at customer service. Why don't you sell me your registrar and let me run that registrar?" And so he agreed, and he didn't charge me a ton, and so we bought that company, and it came with a Russian development team. So this was 2011, I think. June 2011.

<span class="transcript-speaker">Monster, 0:13:35</span> <span class="transcript-note">[reading that chat. Full comment from chat was from "anon2839451": "cant hear or see anything"]</span> and so yeah, anon, I don't know, I can see it here, yeah so we're good. Just maybe refresh or try another browser.

<span class="transcript-speaker">Monster, 0:13:49</span> So we ended up acquiring this company, and it came with a Russian dev team. At the time they were based in the Ukraine, or in the Crimea region. Then there were wars and then they moved to Krasnodar, and they're based there. They're pretty talented, but the legacy codebase of the early Epik... <span class="transcript-note">[reading the chat. Full comment from chat was from "JorgeOrwell": "So you bought some shitty russian code and never fixed it? MD5s. Rob common (sic) man"]</span> Yes, shitty Russian code. We bought some shitty Russian code and we actually didn't really have an opportunity to evaluate that code until we finished, until we really took control over everything. If you look, if you go to Epik Labs, epik.com/labs, we have a full catalog of a lot of other things that we've been developing.

<span class="transcript-speaker">Monster, 0:14:47</span> Yo, yo, video! Kirtaner! <span class="transcript-note">[unintelligible]</span> bro! <span class="transcript-note">[clapping]</span> God bless you bro! You are the man! I was getting tired of talking to myself. Oh man. What's up bro?

<span class="transcript-speaker">Kirtaner, 0:15:03</span> Hello!

<span class="transcript-speaker">Monster</span> Where you from?

<span class="transcript-speaker">Kirtaner</span> Canada.

<span class="transcript-speaker">Monster, 0:15:06</span> Canada, all right. I'm in Seattle, Washington. It's around seven o'clock, sun's gonna set, it's gonna get dark behind me but... good to see you. Alright, so yeah, so like truth... truth, people. We acquired a company, they were protective of the code, I used to be a developer, my first job out of college was I was a systems analyst for Procter & Gamble. I used to code in like Clipper. Back in the days, like database compilers and stuff, back in the day. I have a pretty good understanding of databases, data structures, but I'm not the lead coder, don't claim to be one. I have a pretty good concept of high level architecture, I'm very conscious of ecosystems. People would characterize me as having decent vision. We have done 11 acquisitions in the last three years and a lot of times that's basically a story of trading one dream for another, and so we've been really fortunate because we've self-funded pretty much all of that. And then in June of this year, we raised $32 million. And we ended up basically being able to just dramatically...

<span class="transcript-speaker">Monster, 0:16:45</span> <span class="transcript-note">[reading the chat. Full comment from "nf84": "This feels like a shareholders earnings call"]</span> Yeah "it feels like a share..." yeah, whatever I'm just keeping it real. I'll ask anything, I'm here all night. My wife and daughter flew down to Austin, Texas to go and... my daughter is a rower, she's like a serious rower, and she did Olympic development program in the summer time, so she's like legit good. So she got a bid from University of Texas in Austin to go row for them. So I skipped that to hang back to deal with this crisis. So that's why I'm not in Austin tonight.

<span class="transcript-speaker">Monster, 0:17:11</span> So, alright, so you guys want to talk about Joey Camp. You guys want to talk about Joey Camp? Let's talk about Joey Camp. So okay, Joey Camp.

<span class="transcript-speaker">Kirtaner, 0:17:25</span> Joey Camp social engineered my ISP in April and terminated my fucking service for a week.

<span class="transcript-speaker">Monster, 0:17:29</span> Alright well you know what? I'll tell you a story about Joey Camp. So Joey Camp is... <span class="transcript-note">[reading the chat. Full question is from "nf84": "Canyoiu explain who he is? I'm out of the loop"]</span> "can you explain who he is?" So Joey Camp is a client. He runs the site YourDaddyJoey.com, which is a thorn in Chad's side. Chad, if you're listening, love you bro. I believe in you, you're a very smart man, very articulate, and very handsome, and I'm not gay. And if anybody's gay, I don't judge you either, God loves you. But very articulate, very charismatic, drops a few too many f-bombs. But that site, YourDaddyJoey, is in the business of basically outing bullies and thugs. People who engage in stuff that he considers to be unlawful. And I believe his "why" is this: as I understand it, and again I've never met him, I don't know him that well, but he once told me that his sister was killed by some antifa member because she was in the wrong place at the wrong time and ever since then he's been like a like a Batman. He's like this, like, justice warrior dude who operates by his own moral code. And he gets himself, I think, into some trouble. Like he does private investigation kind of stuff, and at one point... and this is like, I'm keeping it real guys. So at one point I needed help tracking down a guy in Tampa. Hey!

<span class="transcript-speaker">Kirtaner, 0:19:20</span> <span class="transcript-note">[unintelligable]</span> from Tampa!

<span class="transcript-speaker">Monster</span> Alright.

<span class="transcript-speaker">Kirtaner</span> I'm from Florida!

<span class="transcript-speaker">Monster, 0:19:25</span> Alright, so Joey, so I asked him, I said, "can you track down this guy? His name is Donny and he lives in Tampa." And he runs a service that we rely on, and and he like never pays out. And I'm like "this is really weird". And I had heard a rumor that he'd become mixed up in drugs and was in and out of rehab. But I was like, "I just want to know he was alive!" So I said, "Joey can you help me track down this guy?" And he's like, he says, "I'm in Tampa, I'll get back to you in a few hours." And then like a few hours later he sends me this note, he's like, "yeah!" I think it was a note... I don't know what it was, yeah note, chat, I forget what it was. Telegram, yes, Telegram. And he says "yeah, I found Don..." his name is Donny. "I found Donny, and Donny was at home." And he had like jumped the fence of a gated community to go get to Donny, to knock the door. And it's like, I would never condone that, right? Because there are laws, and there are like reasonable boundaries of private property, and so... but he operates based on his moral code. And I think that every now and then it's possible that he's a bully. I believe that I have seen evidence that he may have the capacity to be a bully. And I'm not a fan of that. I think that there's a place for calling out bullies and thugs for being bullies and thugs. Chad, if you're listening, I think you're a bully, I think you're a thug, but I also believe in your highest self and I think that you're a very gifted man and people should give you the opportunity to use your gifts in really mighty ways, and I think that'd be super awesome. And so I prefer that method, right? Which is to kind of believe in the highest self of the individual. And I think that the carnal lower self version of the vigilante may be prone to like taking an approach of taking justice into their own hands. And I think that's Joey. At his lowest self he uses his intellect and his extreme, like, dot-connecting ability... I mean the dude is like a world-class private investigator.

<span class="transcript-speaker">Rocco Castoro, 0:22:09</span> He's a piece of shit.

<span class="transcript-speaker">Monster, 0:22:11</span> Okay, but I would say that his tactics... if it involves like anything that's not lawful, I have a problem with that. But we've never we've never engaged him...

<span class="transcript-speaker">Castoro, 0:22:24</span> Do you think Jesus would be okay with what JoJo Camp's doing, sir? 

<span class="transcript-speaker">Monster</span> You know what, I'll tell you what.

<span class="transcript-speaker">Castoro, 0:22:35</span> Do you see my eyes? Do you see how serious I am? Do you think JoJo Camp would be redeemed by Jesus?

<span class="transcript-speaker">Monster</span> You know what? I'm not sure. I've never talked to him about his faith. 

<span class="transcript-speaker">Castoro, 0:22:53</span> Then why are you talking to us about our faith? Why are you hosting somebody who sends people to my house based off a Subasco(?) token on LexisNexis? And why do you think you can profit off that? 

<span class="transcript-speaker">Monster: 0:23:09</span> Well we don't profit off of that.

<span class="transcript-speaker">Castoro</span> You do profit off of it. You run his servers, and you have, and you've known it, and you've admitted to Chad Loder, as well as other individuals, that you do that.

<span class="transcript-speaker">Monster, 0:23:23</span> So I think he pays like $7.95

<span class="transcript-speaker">Castoro</span> I don't care what he pays, you profit off him. You profit off the suffering of others. That is not Christlike.

<span class="transcript-speaker">Monster</span> Well listen, look. I think that people who are basically wrongly outed and that kind of thing, I think that needs to be...

<span class="transcript-speaker">Castoro</span> Outed? Like what, like a Christian?

<span class="transcript-speaker">Monster</span> No no no no no. Like Chad. You listen to those videos that are on that page, I mean Chad is talking about some heavy stuff, right? Would you agree? Is that a fair statement?

<span class="transcript-speaker">Castoro</span> I've seen heavy stuff, what's your definition of heavy stuff?

<span class="transcript-speaker">Monster, 0:24:02</span> I'm talking about like arranging to give people beat downs, and I mean you know. Watch the video, I mean the guy is talking about...

<span class="transcript-speaker">Castoro</span> Right, but you host Andy Ngo's site, and he posts stuff on like... what's the other site that his guy Trollin(?) runs? It's like AntifaMugshots.com. I mean you literally host sites that result in direct action of people like Tony Moon coming to my house. Now I can explain that to you offline or online, however like.

<span class="transcript-speaker">Monster: 0:24:33</span> No no, if you want to send me, send me stuff or <span class="transcript-note">[unintelligible]</span> Look, I mean the thing is, here's the deal. I run a company with like seven subsidiaries, 24 business units, you can look at Epik Labs, epik.com/labs, you'll see we have a lot going on. And we're growing really quickly, and so I wouldn't have the ability to keep track of like every page on every customer's website.

<span class="transcript-speaker">Castoro, 0:25:03</span> You have acknowledged...

<span class="transcript-speaker">Monster</span> Stop, stop stop

<span class="transcript-speaker">Castoro</span> You know about these pages by replying to Chad Loder's tweets. You brought it up, sir.

<span class="transcript-speaker">Monster</span> Yeah yeah, let me finish. So like, I was privy to the abuse letter that Chad Loder sent, and I looked him up, and I watched his video, and I said, "you know what? This guy does not seem like a nice person." 

<span class="transcript-speaker">Castoro</span> Alright, I can quote you on that?

<span class="transcript-speaker">Monster</span> Yeah, it's fine. To which I said, that page was not indicating a guy that was basically operating according to what I would consider to be his higher self. Clearly very smart, and I don't know what all he has going on, but I mean clearly a guy he was capable of...

<span class="transcript-speaker">Castoro</span> Let's forget about Chad Loder for a second. Do you know me, sir? Do you know me, sir?

<span class="transcript-speaker">Monster</span> I have no idea who you are, tell me who you are. 

<span class="transcript-speaker">Castoro</span> Well forget Chad Loder and forget... <span class="transcript-note">[crosstalk]</span> who cares? Who cares who I am? I'm the former editor-in-chief of Vice, that is your antichrist. That's who I am.

<span class="transcript-speaker">Monster, 0:26:20</span> <span class="transcript-note">[laughing]</span> No, you guys are cool. Vice is very cool.

<span class="transcript-speaker">Castoro</span> No, fuck Vice. You're right. Gavin McInnes and Shane Smith, they're both Proud Boys. Let me tell you that. I'm going to leak audio that shows that Gavin left the company over his knowledge of an assault of an office manager that Shane allegedly committed. And he used that knowledge, and I have audio of Gavin admitting this on Christmas Eve while his kids are opening presents. Sound Christlike to you?

<span class="transcript-speaker">Monster, 0:26:49</span> I don't know that he's a Christian. <span class="transcript-note">[crosstalk]</span> As far as I know we don't host any Proud Boys websites.

<span class="transcript-speaker">Castoro</span> You host at least six that have been found today and their names have been outed.

<span class="transcript-speaker">Nonster</span> No no no. Are they live websites that are actually run by a Proud Boys organization?

<span class="transcript-speaker">Castoro</span> ... historical data of 10 years, sir. I mean look at who you have on this call.

<span class="transcript-speaker">Monster, 0:27:12</span> Oh no no. Listen, I mean come on. Domain names are one thing, right? Another thing is to actually host a website that is engaging in lawlessness. We have an abuse team they will review every abuse case that comes...

<span class="transcript-speaker">Castoro</span> Give me the name of your abuse manager right now please.

<span class="transcript-speaker">Monster, 0:27:29</span> abuse@epik.com and the woman's name is...

<span class="transcript-speaker">Castoro</span> <span class="transcript-note">[unintelligible]</span> I've emailed them about 50 times so that's B.S. What's the name?

<span class="transcript-speaker">Monster</span> By the way <span class="transcript-note">[crosstalk]</span> Just tell me your first name so I know...

<span class="transcript-speaker">Castoro</span> Rocco. R-o-c-c-o C-a-s-t-o-r-o. You know what it means?

<span class="transcript-speaker">Monster</span> Oh that's you!

<span class="transcript-speaker">Castoro</span> That's me! You know what it means? It means beaver-fucking-nurse. Because Castoro is, it's the secretion gland of the beaver. And Saint Rocco, when he put his hands on you during the plague? He'd heal you. And that's me. I'm your beaver nurse, sir.

<span class="transcript-speaker">Monster</span> Nice.

<span class="transcript-speaker">Castoro</span> Yeah, it is nice isn't it.

<span class="transcript-speaker">Monster, 28:16</span> So like, is that like mind-altering kind of stuff?

<span class="transcript-speaker">Castoro</span> I don't know, you tell me. Did your mind get altered just now or what?

<span class="transcript-speaker">Monster</span> I don't know. Alright.

<span class="transcript-speaker">Castoro</span> I'm pissed off, maybe I'm a client, maybe I'm not, who knows, it's Epik.com.

<span class="transcript-speaker">Monster</span> <span class="transcript-note">[muted, but speaking]</span>

<span class="transcript-speaker">Castoro</span> We will talk soon, can I please have? Offline, can you please follow me? I'm sick of this nonsense, and we're going to get down to brass tacks, sir. Please follow me back on Twitter. Have a good night.

<span class="transcript-note">[Unidentified]</span>: You are muted, Rob.

<span class="transcript-speaker">Monster, 0:29:00</span> I hit the mute all because there was background noise from somebody who came in. So yeah, beavers will heal you, right? So George, lay it on me bro, what should I know about the beavers? I gotta, I gotta learn this one. Beavers will heal you. That's a new one. I did not know this. I learn something every day and so... a beaver nurse, <span class="transcript-note">[reading the chat. Full comment from "JorgeOrwell": "well where do we start"]</span> "where do we start?" All right. <span class="transcript-note">[reading the chat. Full comment from "nf84": "All hail the beavers"]</span> "all hail the beavers". All right so if anybody's got intel on why beavers are good for you, send the email to beavers@epik.com, alright? So beavers@epik.com that I will totally read whatever you send me. <span class="transcript-note">[reading the chat. Full comment from "JorgeOrwell": "maybe the clitoris?"]</span> "maybe the clitoris?" Happily married, so I only know one of those. 

<span class="transcript-speaker">Monster, 0:29:50</span> All right guys, what else we got. Is Chad on the call? I really want to talk to Chad. And Steven. I want to talk to Steven. Steven's got to be on this call, he cannot be missing this. Come on Steven, say hi.

<span class="transcript-speaker">Monster, 0:30:06</span> <span class="transcript-note">[reading chat. Full comment from "JorgeOrwell": "common (sic) guys"]</span> "come on guys" Gosh that's funny, aw man this is funny. <span class="transcript-note">[reading chat. Full comment from "nf84": "This is the greatest earnings call of all time"]</span> "This is the greatest earnings call of all time." Thank you. <span class="transcript-note">[reading chat, full comment from "JP": "I'm just a concerned customer listening in, I have some domains with Epik"]</span> That's cool, thank you JP, appreciate that. You have domains on Epik. So yeah, so like, let's talk about like the status of like the cybersecurity whatever that we're... We've brought in outside people, we have inside people. The big thing is, like, when we did these other acquisitions, we brought in some really really tip-top engineers, and those tip-top engineers are now in what I refer to as the tech core team. And they have taken full control over all the code, all the servers, all the keys, and they're cleaning house, and moving as quickly as possible. All the auth codes have been reset. The auth codes that were out there were not live auth codes, they were auth codes from back in February, and we do rotate the auth codes. No domains have gone missing, praise God, and I don't believe any assets of customers have been lost. I mentioned earlier in the call that somebody did try to exploit an old Coinbase API key. It kind of worked, but we shut it down in time, so that they're probably just going to get a bloody nose. Not from me, from Coinbase. But that was clever, because I had no idea that that very old API key was still out there. So yeah, if you guys see some more... 

<span class="transcript-speaker">Monster, 0:31:56</span> <span class="transcript-note">[reading from chat. Full comment from "JP": "Have all auth codes been reset/changed? Is there any risk to domains at this point, what security measures would you recommend customers take at this time?"]</span> Yeah, all the auth codes have been changed. "Is there any risk to domains at this point... what security measures would you recommend customers take at this time..." So I would suggest two-factor authentication, and I would say reset to a strong password. That would be my advice, yeah. I would say that will be just about everything. Anybody else got any advice? I'd be happy to listen to anybody else's advice for how to secure accounts. One good news is that the single sign-on, and you guys would have figured it out by now, we have a single sign-on product called Federated Identity. That product is going to be rebranded soon, it'll be called Velito.com...

<span class="transcript-speaker">Monster: 0:32:45</span> <span class="transcript-note">[reading from chat. Full comment from "nf84": "Change your passwords elsewhere if you reuse passwords across other sites (and stop doing that)"]</span>. I agree with you. "change your passwords elsewhere if you reuse the passwords". Yes, I think that's wise, because there are legacy passwords from before the Federated Identity, switch which is our single sign-on network that we use across the entire Epik federation, which is a modern code base, it's based on key cloak.

<span class="transcript-speaker">Monster: 0:33:10</span> <span class="transcript-note">[reading from chat. Full comment from "JP": "I recommend password manager, preferably one that can generate strong unique passwords"]</span>. Yeah, "recommend password manager, preferably one that can generate strong unique passwords". I think a lot of people like LastPassword (sic), I think 1Password, there's another one that people like. I'm not really a big fan of storing passwords in the cloud, but if you have a trusted cloud, then then go for it. Hey!

<span class="transcript-speaker">Unidentified, 0:33:31</span> That is not what your data showed.

<span class="transcript-speaker">Monster</span> Yeah no you missed it right? I don't know if you've been catching up on any of this stuff, but the story here is that legacy code from the Russians that we acquired...

<span class="transcript-speaker">Monster, 0:33:45</span> <span class="transcript-note">[reading chat. Full comment from "nf84": "1Password stores only encrypted passwords in the cloud, so no biggie"]</span>. Yeah, "stores only encrypted passwords in the cloud so no biggie". Yeah, I agree. You just you just have to remember your private key. <span class="transcript-note">[reading chat. Full comment from "JP": "1Password is what I recommend"]</span>. 1Password. Yeah, I think you're right, I think that's what we've deployed.

<span class="transcript-speaker">Monster, 0:33:55</span> So, yeah, so the Russian developers that came from the acquisition of IntrustDomains back in June 2011. I think they were like kind of PHP devs, I don't think they were using modern frameworks. And a lot of that legacy code was still hanging out there, and it is being pretty much retooled, migrated, in fact the entire platform will be rewritten. There's a lot to that stuff, to be a registrar and to cover like 1200 TLDs, registries, accreditations. That takes some serious engineering. Yo yo! Oh we have... she left. She just changed, she went video. That was cool, that was super cool. It looked like a Halloween costume. So yeah, so that's, that's the story. And if anybody wants to help with pentesting, drop us a note. We'll definitely work with pen testers. 

<span class="transcript-speaker">Unidentified</span> Do we have to tell you first? 

<span class="transcript-speaker">Monster, 0:34:59</span> No, you don't. I mean you you could pentest us. I think that's what people do.

<span class="transcript-speaker">Monster, 0:35:06</span> <span class="transcript-note">[reading chat. Full comment from "JorgeOrwell": "I would migrate my domains to a host that isn't run a (sic) 'christian libritarian(sic)". Free market principles are in play here"]</span> But so yeah, so there's some questions here about "I would migrate into a host that isn't run by Christian libertarian". Yeah so, tough one right? So I guess what I mean by that is that I think we're all on the journey, I think the truth sets you free, I think people should be allowed to be self-governing. Small government. And people who are not self-governing will ultimately be ruled over by dictators, and that's not a great outcome. So better to create an environment, or having the opportunity to be self-governing. That's kind of what I mean by being a libertarian who happens to be a Christian. I hope that helps.

<span class="transcript-speaker">Monster, 0:35:56</span> <span class="transcript-note">[reading chat. Full comment from "JP": "I'm upset at the security incident at Epik, but my anger isn't towards Rob specifically, he's just human."]</span> "upset at the security incident at Epik but my anger isn't towards Rob..." Yeah no, thank you, I appreciate that, JP. Yeah we... we did not nail that one. I think quite candidly that that was some serious weak code, like hard-coding API keys... just weak sauce. And in reality, like I said earlier in the call, our top engineers mostly hadn't seen that code because it was kind of blackboxed, behind a firewall, separate git repository, and not part of the Epik git. And that might sound surprising... <span class="transcript-note">[pauses to blow nose]</span> sorry, I have a cold... considering that we're like a registrar, but that's basically because of the history of how that company became part of Epik. It was an acquisition, it is a captive dev team, and I've operated with that group to a large extent on the basis of trust. They're good people, they're honorable people, ethical, responsible people, but their coding methods and frameworks are not up to standard, and they've pretty much handed over all the keys to two top guys, Justin Tab, David Roman. And they're they're doing a great job diving into the code. And there were some very unpleasant discussions, very heated conversations, because some of the team hadn't seen the code until until it was exposed. That might sound a little bit crazy but you have to keep in mind that we've grown really quickly around a core registrar, and if you want to know the history, I'll tell you a story. You guys mind a digression? I'll tell you a story. So up until July 2018... yo yo! Welcome! I'm Rob, nice to meet you. So July 2018, right, I've been running for the last three years as a consultant, kind of interim exec, a company called DigitalTown. You could look it up, it was on pink sheets. It's still existing but it's pretty much defunct. I did a TED talk, it's actually a banned TED talk, and it was about DigitalTown. I can share it, I have a copy. So July 2018, I'm kind of in this boardroom struggle with the group that was running the company at the time, and we go on vacation, cruising in the Mediterranean, like around August 17. Middle of the Mediterranean underneath a Persian meteor shower and I'm looking up at the sky. Beautiful, clear night, like endless stars, and I have absolute clarity that the Lord is going to need a registrar. It's the closest thing to a calling I've ever experienced.

<span class="transcript-speaker">Monster, 0:39:20</span> <span class="transcript-note">[reading the chat. Full comment from "JorgeOrwell": "This reads like an obituary."]</span> Yeah, hang in with me, not an obituary. And so I dropped everything and focused exclusively on Epik. And then in the next three years we've done all these acquisitions, but what was the triggering event? So from August 2011, no, August 2018 until October 2018 I'm like like "what's going on? Like, why am I doing?" You know, don't feel like I have exact clarity on what it means to be focused on running Epik. And then this Gab thing happens. Gab was like abruptly deplatformed by GoDaddy, and it's like a $300,000 domain, and I'm thinking to myself "this is crazy". It makes no sense to me that you would be removing like a $300,000 domain and then throwing it in the trash can and carrying it permanently so that nobody will buy it. And so I did a call with Andrew Torba. I'm like, "hey, Andrew, what's going on?" And we had a good call. I got a sense that this was not an angry man unless... he had angry moments, but I'm saying that he's not an angry man. And and I agreed... <span class="transcript-note">[reading chat. Full comment from ".": "interesting" with ASCII art of a cow]</span> "interesting". Yeah, cool, nice job. So I agreed to kind of take him on, and of course the moment I did that... this was right after like the Tree of Life thing that happened in Pittsburgh. We got lit up. It was like October 28, 2018. It was right before the election. And so we got lit up. The media just went to town. And all kinds of stuff unfolded. And then we just had a series of opportunities, stuff came to us. We acquired a company called BitMitigate run by a dude named Nick Lim. Some of you guys probably came across his work. Mercurial dude. He doesn't work for us, but he had clients like <i>Daily Stormer</i>, and we ultimately parted ways with <i>Daily Stormer</i>, and in part... I never spoke with the head of <i>Daily Stormer</i>...

<span class="transcript-speaker">Steven Monacelli, 0:41:30</span> Do you still provide directing services to the <i>Daily Stormer</i>? Like are you forwarding...

<span class="transcript-speaker">Monster</span> No, no.

<span class="transcript-speaker">Monacelli</span> You said that to me on the phone, though. That you are still providing...

<span class="transcript-speaker">Monster</span> Hi, Steve! 

<span class="transcript-speaker">Monacelli</span> Yeah hey! What's up Rob!

<span class="transcript-speaker">Monster</span> Hey, what's going bro? How are you? Sorry, sorry for your pain.

<span class="transcript-speaker">Monacelli, 0:41:49</span> Oh, well, if you were sorry you would comment on if you condone Joey Camp's actions in retaliation... 

<span class="transcript-speaker">Monster</span> Well, let's stay on topic.

<span class="transcript-speaker">Monacelli</span> No, no, you said you would answer anything. This is on topic.

<span class="transcript-speaker">Monster</span> Okay, I'm going to mute you first. So I get to finish my story and then I get to...

<span class="transcript-speaker">Unidentified</span> It's absolutely on topic.

<span class="transcript-speaker">Monster, 0:42:00</span> No no no, let me finish, let me finish the story, and then I'm going to come to Steve's question. Right, fair? Alright. So... I'm the moderator. But I promise I will listen to everybody. I will not leave until all your questions are answered. We can go all night. It's okay. My wife and daughter are in Austin so I have the house to myself. If the dog has to pee he's got a diaper on. So, October 2018, we get lit up because of this Gab thing. Because of that we basically had to become vertically integrated in everything. So we're like a registrar; a host; we acquired multiple data centers; content delivery network; denial of service mitigation; we're an intermediate root certificate authority, that's DNEncrypt; we run our own ASM, IP ranges, BGP instances; we normally run our own VPN, we took Anonymize.com down for maintenance because we wanted to make sure that the keys were all tidy so nobody was using corrupted keys. But we basically have assembled kind of end-to-end theoretical digital resiliency. When you basically figure out a way to hijack a backup of Epik at some other host that's not controlled by us, then of course it looks like we're like totally clowns and we don't know what we're doing. And there are aspects that would suggest that we don't know what we're doing, but there are aspects that show that we do know what we're doing, and we're closing the gap. So that's the background about how Gab became a client and then Epik...

<span class="transcript-speaker">Monster, 0:43:50</span> <span class="transcript-note">[reading chat. Full question from "nf84": "did epik host parler or only gab?"]</span> Yeah we helped Gab a little bit with this stuff. And Parler we don't host Parler. We're a registrar for... so that's why... 

<span class="transcript-speaker">Kirtaner, 0:44:22</span> <span class="transcript-note">[loud feedback sound]</span> Is my microphone fixed? There it is. Hi everybody! 

<span class="transcript-speaker">Monster</span> <span class="transcript-note">[mutes self, continues speaking]</span>

<span class="transcript-speaker">Monacelli</span> Is the sound busted? What the hell's going on here? 

<span class="transcript-speaker">Unidentified</span> Rob accidentally muted himself again.

<span class="transcript-speaker">Monster</span> Alright. I tried to mute other people so that we wouldn't have to listen to Kirtaner talking to himself. Steve, you go.

<span class="transcript-speaker">Steve Monacelli, 0:44:44</span> Yeah, so this is something that I asked you on the phone about and you didn't want to comment on. I've emailed your lawyer, per your request, two days ago. Hasn't gotten back to me. It's been more than 48 hours at this point. And I'm wondering if you're, one, aware of what Joey Camp is using your web services to do and, two, if you condone it. And I'm happy to explain to you exactly what he is doing if you are unaware.

<span class="transcript-speaker">Monster</span> Yeah actually later on... <span class="transcript-note">[crosstalk]</span> By the way, by the way, when I told you about your story being a nothingburger, I wasn't talking about anything related to this data thing.

<span class="transcript-speaker">Steve Monacelli</span> So you were talking about the Overoptic Systems connection, you were talking about <span class="transcript-note">[unintelligible]</span> Q host, all those things, right?

<span class="transcript-speaker">Monster</span> I was talking about... you were all about, like, us working with the Russians and I was like, "no..."

<span class="transcript-speaker">Monacelli</span> No, I didn't say anything about that. I said you have shell companies that are based in the UK, but let's get back to the point <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Monster</span> All right, but I just want to clarify, I just want to clarify. Let me finish, I will listen to you. I promise. I will listen to you. I will. Just take turns. So the Russian thing. The reason why I called it a nothing burger was, you called me, we talked for 15 minutes, off the record, and I was trying to explain that this whole thing about Russia was irrelevant because...

<span class="transcript-speaker">Monacelli, 0:46:10</span> So I actually never said anything about Russia. I was talking about the United Kingdom.

<span class="transcript-speaker">Monster</span> Yeah, yeah, I get it. But you were talking about like in the context of prolifewhistleblower...

<span class="transcript-speaker">Monacelli, 0:46:20</span> I'm talking about connections to shell companies with directors in Switzerland and Crimea.

<span class="transcript-speaker">Monster</span> <span class="transcript-note">[making "time out" hand signal]</span> Okay. Time out. Let's take turns. I will totally talk to you.

<span class="transcript-speaker">Monacelli</span> You're not even addressing my point, though, I want to talk about Joey Camp.

<span class="transcript-speaker">Monster, 0:46:32</span> How much cocaine did you do today? Come on, let's just chill.

<span class="transcript-speaker">Monacelli</span> No no no. Wow. Wow. Wow.

<span class="transcript-speaker">Monster</span> Just... just... just relax, right? We will take turns.

<span class="transcript-speaker">Monacelli, 0:46:43</span> Your customer has sent me my social security number.

<span class="transcript-speaker">Monster</span> That's not good.

<span class="transcript-speaker">Monacelli</span> Yeah!

<span class="transcript-speaker">Monster, 0:46:53</span> I agree. That's not good. So I will have a conversation. I don't know if it'll be tonight, but I'll have a conversation with Joey.

<span class="transcript-speaker">Kirtaner, 0:47:03</span> Will ya?

<span class="transcript-speaker">Monster</span> Yeah! My deal with Joey is...

<span class="transcript-speaker">Kirtaner</span> Ask him about me sometime!

<span class="transcript-speaker">Monster</span> Yeah yeah yeah. If you guys have profiles that are not accurately representing your truth...

<span class="transcript-speaker">Kirtaner, 0:47:17</span> demonhackers.com, I'm right there front and center.

<span class="transcript-speaker">Monster</span> I had no idea. Thanks for the background. Demon hackers, that's you?

<span class="transcript-speaker">Kirtaner</span> Hi!

<span class="transcript-speaker">Unidentified</span> That is him.

<span class="transcript-speaker">Monster</span> Wow, that is nuts. 

<span class="transcript-speaker">Monacelli, 0:47:33</span> So yeah, to be clear, Joey Camp is engaged in a harassment campaign against myself, a few other journalists... And what he does is he posts public information that he should not have access to, and then he sends people to message you. He has people who have sent me my social security number, my driver's license number, my address, he's posted my family's address, he's told me that he will... he keeps posting about how he's gonna basically "ruin me" and this, that, the other. And he's trying to threaten and extort people. He has a pattern of doing this, there are tons of people...

<span class="transcript-speaker">Monster</span> He has no money. He has no money.

<span class="transcript-speaker">Monacelli</span> It doesn't matter if he has money! It doesn't matter if he has money. It doesn't matter if he has money! It matters that you are providing web services to him that allow him to do this.

<span class="transcript-speaker">Monster</span> That's fair. Alright, so, like, let's be fair. So when it comes to prolifewhistleblower, we had them take it down.

<span class="transcript-speaker">Monacelli</span> Yes, you did, that's correct.

<span class="transcript-speaker">Monster, 0:48:32</span> Thank you. <span class="transcript-note">[reading from chat, full comment from "nf84": "Why do you guys yell when you speak? Calm down"]</span>. "why do you guys yell when you speak? Calm down." I agree. Am I too loud?

<span class="transcript-speaker">Monacelli</span> Because you're skipping around. You need to talk about what I'm asking about, otherwise

<span class="transcript-speaker">Kirtaner</span> He's full of energy!

<span class="transcript-speaker">Monster, 0:48:47</span> Okay, so we de-platformed prolifewhistleblower because they were engaging in doxing, and we thought that that was not a useful practice...

<span class="transcript-speaker">Monacelli</span> What do you think Joey Camp is doing?

<span class="transcript-speaker">Monster</span> Take turns... prolifewhistleblower as an idea was ill-conceived.

<span class="transcript-speaker">Monacelli</span> Is Joey Camp doxing? Is Joey Camp doxing? Is Joey Camp doxing?

<span class="transcript-speaker">Monster</span> Alright, I'll mute you, you're not behaving. Come on, otherwise we're gonna kick you out. Come on. Alright, so I called Jim Graham, executive director, son of the founder of a 46-year-old organization. And I said to Jim, I said, "Jim, what part..." he claims to be a Christian, I think he is. "What part of what you're doing for like outing people for participating in abortion procedures is Christlike? God doesn't like tattlers." And so I advised him to take the site down and redirect it to his Texas Right for Life site. And, true story, the reason why they couldn't do it that night was because Texas Right for Life was actually hosted in one of the staff's homes. It was not actually at a data center, and they would have been blown up with bandwidth. And so they engaged Rightforge to, who I don't, I didn't know until the next day when they called me, to move their hosts to Rightforge. And that's who they're with now. And we also told them to move their domain. So prolifewhistleblower came to us unannounced and we sent it away. It's doxing and it's not cool. Now, Steve, you have...

<span class="transcript-speaker">Monacelli, 0:50:38: Simple question</span> is Joey Camp doxing?

<span class="transcript-speaker">Monster</span> You know what? I think that the content that is on that site... I haven't studied it very closely...

<span class="transcript-speaker">Monacelli, 0:50:52</span> You shared a link to it a few days ago to Chad Loder.

<span class="transcript-speaker">Monster</span> Yeah, no, I got it.

<span class="transcript-speaker">Monacelli</span> And I'm asking, what is your definition of doxxing?

<span class="transcript-speaker">Monster</span> Yeah, I leave that to the attorneys. 

<span class="transcript-speaker">Monacelli</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster, 0:51:08</span> No, seriously! If I felt that you were an honorable guy, Steve, I think that the site would come down. I think free speech exists and...

<span class="transcript-speaker">Monacelli</span> Wait wait wait wait. I just wanna... do you think that, if I were deemed honorable by who, that the site would come down?

<span class="transcript-speaker">Monster</span> No, the page.

<span class="transcript-speaker">Monacelli</span> Yeah the page. By whom? Who would have to...

<span class="transcript-speaker">Kirtaner</span> <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster, 0:51:32</span> Alright, demon. Hang out. 

<span class="transcript-speaker">Unidentified:</span> You talk a lot about libertarian values, Rob, and you just said a word here that is definitely confusing, and I see Steve's point. The idea that if he was honorable, that leaves the question open of: who indeed is the arbiter of "is Steve honorable?"

<span class="transcript-speaker">Monster, 0:51:55</span> Well, come on. So Steve called me out of the blue and my cell phone is pretty easy to find...

<span class="transcript-speaker">Monacelli</span> I had emailed you and you responded to the abuse line that I emailed... <span class="transcript-note">[crosstalk]</span> 

<span class="transcript-speaker">Monster</span> That's fine. I don't hide myself, I'm pretty easy to find, right guys? I'm easy to find.

<span class="transcript-speaker">Monacelli:</span> I know, I know that. I'm wondering if you can just really help me understand: what do you mean when you say doxing?

<span class="transcript-speaker">Monster</span> Yeah no... you know Steve? I think that.. I think that... there are a bunch of pages that should come down. Because exposing home addresses, if that's happening...

<span class="transcript-speaker">Monacelli</span> It's what's happening to me and my family right now, on your client's website.

<span class="transcript-speaker">Monster</span> Right, and I told you I'm gonna talk to Joey. That's not tonight, it'll be tomorrow.

<span class="transcript-speaker">Monacelli</span> I mean I can give you his phone number, he's texting me nonstop. I'm sure he'll pick up. Tonight.

<span class="transcript-speaker">Monster</span> I'll get it.

<span class="transcript-speaker">Monacelli</span> Why don't you do it now, in front of all of us, it would be awesome.

<span class="transcript-speaker">Monster, 0:52:56</span> I understand. But I have a request. I have a request.

<span class="transcript-speaker">Monacelli</span> Is this an ultimatum or is this a...?

<span class="transcript-speaker">Monster</span> No no no, it's a request. It's not an ultimatum. I'm not into ultimatums. I have a request. <span class="transcript-note">[reading from the chat. Full comment from Mikael Thalen is "Every minute you leace (sic) it up Rob the more harm is caused"]</span> So yeah, "every minute you leave it up, more's done". Yeah, so I think it should come down. I think that the page should come down. But I have a request, and that is when you called me with your Russian stuff and whatever, there was an effort to vilify and condemn Epik and I don't think that that was an accurate, fair representation of of Epik.

<span class="transcript-speaker">Monacelli, 0:53:44</span> I asked you for clarification. If you can provide me with the exact understanding of why all of these things are pointing to Overoptic systems, Napco Webcorp, and Tin Hat, I don't understand these connections and that's why I called you. But since you were unwilling to provide me any clarity regarding those connections, I reported on what is publicly available information.

<span class="transcript-speaker">Monster, 0:54:08</span> Yeah, I mean the problem is that so much of the content that is out there, like <i>Huffington Post</i> and like, a whole list. Like you go look to the Wikipedia page... I mean, do you guys get how subverted Wikipedia is? You realize how much of a globalist tool that thing has become? You get that? Is that like lost on people?

<span class="transcript-speaker">Monacelli, 0:54:28</span> So I'm not talking about Wikipedia. I'm talking about the web domain registration that I was able to link, and I explained to you over the phone...

<span class="transcript-speaker">Monster</span> Steve. Steve. I'm gonna get that page taken down, alright? Alright?

<span class="transcript-speaker">Monacelli</span> Thank you. I appreciate that. And as soon as possible, within a reasonable amount of time, because I have emailed... <span class="transcript-note">[crosstalk, unintelligible]</span>

<span class="transcript-speaker">Monster: 0:54:54</span> I understand. I understand. I'm gonna get that page taken down for you. And all I ask in return, and it's an ask, it's not an expectation, it's not conditional, it's an ask. There are some aspects of the "left media" that has been very unfair to Epik and to me personally. I don't think anybody in good conscience or good faith could could conclude that what is being distilled on the likes of Wikipedia and by the likes of <i>Huffington Post</i> and many other... Vice Media...

<span class="transcript-speaker">Monacelli</span> Or the Southern Poverty Law Center?

<span class="transcript-speaker">Monster</span> Southern Poverty Law Center. Not quite the bane of my existence but it's like right up there. Michael Edison Hayden, <i>Hatewatch</i>, I mean... These dudes I think are not being truthful. I think that they are engaging in a willful form of deception, and I will happily... I've actually taken his phone call in good faith, I've listened, I've spoken with him. But after you're betrayed multiple times, where you talk to people in good faith and you answer their questions...

<span class="transcript-speaker">Monacelli, 0:56:16</span> Your conversation with me was not in good faith, Rob. You did not want to say anything on the record.

<span class="transcript-speaker">Monster, 0:56:22</span> No, well, because I have an understanding from my lawyers to not be talking to journalists, and really...

<span class="transcript-speaker">Monacelli</span> You're talking to journalists right now <span class="transcript-note">[laughing]</span>

<span class="transcript-speaker">Monster</span> I'm going off script, right? I'm slightly maverick, okay? But I just decided, here it is, Yom Kippur, Day of Atonement, sunset in Hawaiʻi is very soon, and I just think it's important to clear the air. I'm not a fan of seeing people cursed, bearing sins that they don't need to bear. And I just think...

<span class="transcript-speaker">Monster, 0:57:09</span> <span class="transcript-note">[reading the chat. Full comment from "wt": "happy new year mr monster"]</span> Thank you, W.T., love you man, appreciate that. I just want to clear the air and I want to make peace. I want to make peace. So if there are sites, or pages, that need to come down because they're engaging in gross malfeasance, then let's have unity and truth. Let's stop with the lies, let's stop with the propaganda, let's try to appeal to each other's highest self, and create an outcome that creates abundance.

<span class="transcript-speaker">Monacelli</span> I think it's a great idea...

<span class="transcript-speaker">Unidentified</span> You first! 

<span class="transcript-speaker">Monacelli</span> ... it's a great idea, Rob, and if you have any corrections or any... if you would like to better explain to folks the connections to the shell companies I identified and the UK servers, I am a journalist and I issue corrections when I'm wrong. But I have to be shown that I'm wrong, and that is why I called you, because I was hoping to get some clarity, which your conversation with me did not provide.

<span class="transcript-speaker">Monster, 0:58:12</span> Alright, so stand by. Stand by. Just as a gesture of good faith, let's disable the DNS of your... the A record of YourDaddyJoey, shall we?

<span class="transcript-speaker">Monacelli</span> I would love to do this live.

<span class="transcript-speaker">Monster, 0:58:25</span> Alright, let's do this live. Sorry Joey. We're going to do this. Bear with me here. 

<span class="transcript-speaker">Kirtaner</span> demonhackers.com would be a great thing to go away, just saying...

<span class="transcript-speaker">Monster</span> Yeah, one second here. I don't want to break email, right? So let's just see what we got here. Host records, yeah alright so we're gonna just take the site down. And he told me, he told me that if he goes too far that that I can take him down. So I'm going to take him down. A record is offline, you guys. Sorry, not yet. This domain is actually under max-lock. We actually have a service called max-lock that if his account was compromised you couldn't actually take him down, but I could take him down. So YourDaddyJoey, good faith gesture guys, here we go.

<span class="transcript-speaker">Kirtaner, 0:59:38</span> I actually really appreciate this

<span class="transcript-speaker">Monster</span> Oh no guys, I mean the thing 

<span class="transcript-speaker">Monacelli</span> I really appreciate this, Rob, I really do. And I will be sharing this immediately because this is something that, it means a lot to my family who have been getting harassing phone calls from Joey

<span class="transcript-speaker">Kirtaner</span> Likewise.

<span class="transcript-speaker">Monster, 0:59:56</span> Well, and I think it needs to be kind of a boundaries thing with with Joey. Joey needs to also step up and man up and being accountable.

<span class="transcript-speaker">Monacelli</span> He has demonstrated no interest in being held responsible for his actions and no regard for consequence whatsoever.

<span class="transcript-speaker">Monster, 1:00:26</span> Swastika? What the heck? That's quite a tat. Is that a breast? That's a male breast. Look at that, how about that.

<span class="transcript-speaker">Monacelli</span> Yeah, weev? Yeah, that guy.

<span class="transcript-speaker">Monster</span> Who is it?

<span class="transcript-speaker">Monacelli</span> Oh, he's a convicted cybercriminal that was the web host of the <i>Daily Stormer</i>.

<span class="transcript-speaker">Monster</span> Oh, so you guys know who he is? <span class="transcript-note">[loud noise]</span> Oh, okay, he's got an attitude.

<span class="transcript-speaker">Unidentified</span> Well I also wanted to just say how much I, just as someone who's been following the story and not necessarily someone who's involved in it, I very much am impressed by the the willingness to to go beyond your lawyer's advice and things, and come transparently and talk to people in an open way about everything, and to make such a gesture like that in front of everyone, to say like "look as a gesture of good faith this is what I'll do". Because I think that's so much of what we lack today in our society and especially in like the public eye, is an accountability and transparency of our actions, and our ability to just be reasonable people about things that have gone wrong and things that are going wrong.

<span class="transcript-speaker">Monster</span> Yeah.

<span class="transcript-speaker">Monacelli, 1:01:48</span> Also it's great to see it happen somewhat within a reasonable time frame, because Joey's stuff has been on there for years at this point and there's been a lot of people who've tried to get something to happen, and get that stuff removed. And I'm glad it's happened within a few days at this point. Because, yeah, it's helpful and we appreciate it. And I look forward to seeing it propagate on my browser.

<span class="transcript-speaker">Monster</span> Yeah, the TTL is 300 seconds so it should already be down.

<span class="transcript-speaker">Monacelli</span> I'm not seeing it.

<span class="transcript-speaker">Monster</span> The TTL is 300 so it should already be down, but anyway the rest of the world can't see it.

<span class="transcript-speaker">Monacelli</span> I'm refreshing it.

<span class="transcript-speaker">Monster</span> Yeah, just change your DNS provider. If you were using 8888 use 1111 or something.

<span class="transcript-speaker">Unidentified</span> It does look down.

<span class="transcript-speaker">Monster</span> It's down.

<span class="transcript-speaker">Monacelli</span> Oh, awesome.

<span class="transcript-speaker">Monster, 1:02:43</span> I do this for a living. So weev, weev. Let's talk for a second. So what's going on...

<span class="transcript-speaker">Kirtaner</span> It's been a while.

<span class="transcript-speaker">Monster</span> Why the angry man thing? What's that about?

<span class="transcript-speaker">weev</span> I don't know man, I can ask you that <span class="transcript-note">[connectivity issues]</span> why so angry, Rob? Are you gonna shoot up something? Are you a danger to other people? You seem mad a lot, I don't know, you're too extreme for me man, you're too hardcore.

<span class="transcript-speaker">Monster, 1:03:20</span> Oh, uh, well. Much love to you actually. You and I have not met before, I've heard of your name "weev" before. I had no idea that you had an enormous swastika tat on your chest, but evidently other people knew that so yeah. <span class="transcript-note">[unintelligible crosstalk]</span> What? Anyway, so weev, seriously like what's the deal? What's your "why"? What's going on?

<span class="transcript-speaker">weev</span> I don't know man. <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster</span> Come on, is that like rhetoric or is that like legit what motivates you?

<span class="transcript-speaker">Monacelli: It doesn't fucking matter, Rob. And I just want to real quick, I want to check</span> hey Rob, can you make sure to commit that if Joey brings up his site under any of the other domain names that he's registered with you that you'll do something the same thing about it?

<span class="transcript-speaker">Monster</span> I told you I'm going to have a substantial one-on-one conversation with him where we set boundaries and conditions about what what the conditions are for him bringing the site back online. Alright?

<span class="transcript-speaker">Monster, 1:04:22</span> So weev. Did he leave? Did weev leave?

<span class="transcript-speaker">Unidentified</span> No he's there, he's off to the side.

<span class="transcript-speaker">Monster</span> Oh okay good. So weev, seriously bro. What's your "why"? Like what gets you up in the middle of the night, for real?

<span class="transcript-speaker">Unidentified</span> <span class="transcript-note">[laughter]</span>

<span class="transcript-speaker">weev, 1:04:38</span> <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Unidentified</span> What's happening right now?

<span class="transcript-speaker">Monacelli, 1:05:24: So weev, weev, just confirming</span> how would you describe these beliefs? Is there an ideological term to describe the beliefs that you're espousing?

<span class="transcript-speaker">weev</span> Yes absolutely, it's traditionalism.

<span class="transcript-speaker">Monacelli</span> Oh no, you're not...

<span class="transcript-speaker">weev</span> It's what any of my great grandfathers would believe. And any of your great grandfathers, in fact, <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monacelli</span> Not my great grandfathers, you asshole.

<span class="transcript-speaker">Monster</span> Come on.

<span class="transcript-speaker">weev</span> It's what anyone's great grandfather believes <span class="transcript-note">[connectivity issues]</span>

<span class="transcript-speaker">Monster</span> I apologize Steve, I owe you an apology for that. Uh go ahead, so weev.

<span class="transcript-speaker">weev</span> <span class="transcript-note">[connectivity issues]</span> ...very temporary experience, let me tell you, that's about to end. The Western neoliberal order is about to collapse on itself 

<span class="transcript-speaker">Monster</span> I agree with that

<span class="transcript-speaker">weeva</span> <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster, 1:06:26</span> Here's the part that I agree with. I agree...

<span class="transcript-speaker">Monacelli</span> I'm getting the fuck out of here because this is now just a fucking Nazi conversation. Have fun y'all.

<span class="transcript-speaker">Monster</span> Alright, Steve.

<span class="transcript-speaker">weev</span> I don't support Nazism. I'm not a fan of of Nazi ideology. I think it's kind of wishy-washy, and I'm not a fascist in general actually. I don't like fascism as a system...

<span class="transcript-speaker">Unidentified</span> Is your tattoo ironic?

<span class="transcript-speaker">weev</span> <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Unidentified</span> You also have really bad Internet there in Tiraspol.

<span class="transcript-speaker">weev</span> Huh?

<span class="transcript-speaker">Monster</span> So is this tattoo thing like a big part of your identity? Or do you like regret ever...

<span class="transcript-speaker">weev</span> Oh, it's part of my religion. It's a religious tattoo, not an ideological tattoo.

<span class="transcript-speaker">Monster</span> What's your religion? What's it called? 

<span class="transcript-speaker">weev</span> I'm, uh, I'm like uh... <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster</span> Alright, well. Tell you what weev. Can you tell us your real name? Or do you just go by weev?

<span class="transcript-speaker">weev</span> Andrew Auernheimer.

<span class="transcript-speaker">Monster, 1:07:42</span> Okay got it. I've heard of you. I've heard of weev. And some people think you're a scary guy, but I would just say, just figure out a way to get along. There's just no real reason to kind of like engage in these identity politics. Are you like personally all about this or are you just feeding the polarity because somebody pays you? Like legit.

<span class="transcript-speaker">weev</span> Oh no, I'm pretty honest. <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster</span> Alright, alright.

<span class="transcript-speaker">weev, 1:08:37</span> That's not something in newfangled identity politics. It has nothing to do with identity politics. <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Monster</span> Right, but would you acknowledge that the founding fathers were actually Christians?

<span class="transcript-speaker">weev</span> Oh yeah certainly, absolutely <span class="transcript-note">[crosstalk]</span>

<span class="transcript-speaker">Monster</span> ...didn't identify <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Unidentified</span> Most slave owners were Christians.

<span class="transcript-speaker">Monster</span> Yeah, you know...

<span class="transcript-speaker">weev, 1:09:01</span> <span class="transcript-note">[redacted]</span>

<span class="transcript-speaker">Unidentified</span> You can be slaves, you want to be my slaves?

<span class="transcript-speaker">Monster</span> You could be, that's cute. I agree. I think you should probably try to walk in somebody else's shoes and be her slave for a while and see how it feels. But seriously though, I don't think that the founding fathers had a mindset with regards to being intolerant. I don't think that they were as intolerant...

<span class="transcript-speaker">weev</span> The norms that I have listed... <span class="transcript-note">[redacted]</span> What I'm talking about is not a fringe ideology.

<span class="transcript-speaker">Unidentified 1</span> There's many many different kinds of families <span class="transcript-note">[unintelligible]</span> no idea what you're talking.

<span class="transcript-speaker">Monster</span> Okay can you put your video on? They didn't see who was talking. I muted you weev, I'm sorry, you were you were rambling on and I figured it was two guys talking at the same time. So there's a woman trying to speak, I think she has something intelligent to say. Go ahead. She left?

<span class="transcript-speaker">Unidentified 1, 1:10:50</span> Yeah, you just have no original ideas and you really haven't made any successes at all and you're really delusional basically. That's about it.

<span class="transcript-speaker">Monster</span> I am? I am?

<span class="transcript-speaker">Unidentified 2</span> No, weev. I mean, you too, but no, weev.

<span class="transcript-speaker">Unidentified 1</span> No weev is super delusional. Are you kidding me?

<span class="transcript-speaker">Monster, 1:11:08</span> I agree. Weev? I gotta tell you bro. I don't think that you're very enlightened. We're all on a journey, we're all on a journey but I'm just not feeling like you're really enlightened dude. I will pray for you tonight. <span class="transcript-note">[background noise]</span> I can't tell if he's trying to speak to us or if he's talking to himself. I just muted him because he looks like he was talking to somebody else. Alright so the woman who was speaking she was calling out me for not having original ideas. Yeah I agree, I think that this is sketchy. weev, not a fan bro, but I believe in your highest self and I really hope that you will try to make peace with people and not... you said at the very beginning about wanting genocide or whatever. That's just not gonna work out for you. 

<span class="transcript-speaker">Unidentified</span> He's being an edgelord.

<span class="transcript-speaker">Monster</span> You're not being nice. Yeah, I think he's being edgelord. And oh by the way, I gotta tell you this, this is a true story. Chris Cantwell, the guy they call the Crying Nazi? I talked to him one-on-one and he was actually a nice guy in one-on-one. His whole thing of like "kill this, hate this" whatever? It's an act. It's a schtick. He is fully capable of being a nice guy. As for weev, I'm trying to figure out if he's like legit a hater or if it's just a way to make a buck. It's not clear to me.

<span class="transcript-speaker">Monacelli, 1:12:45</span> Hey Rob, so I know I said I was gonna leave because this was a Nazi conversation but I just wanted to inform you of another domain that you may want to take a look at. It's called antifawatch.com. It also belongs to Joey.

<span class="transcript-speaker">Monster</span> What's it called? Antifawatch?

<span class="transcript-speaker">Monacelli</span> Antifawatch.com, he also doxes people on that website.

<span class="transcript-speaker">Monster</span> Alright we'll take care of that one too, how about that.

<span class="transcript-speaker">Monacelli</span> Thanks man, I appreciate it.

<span class="transcript-speaker">Monster</span> I'll take care of this one. And then I'm gonna have a conversation. I'm making a leap of faith here that I can basically... I don't see it, antifawatch.com is not an Epik domain. I don't see it.

<span class="transcript-speaker">Monacelli</span> Okay, that's good to know. I guess it's somewhere else.

<span class="transcript-speaker">Monster</span> I don't think it's at Epik. Maybe somewhere else, but it's not that Epik. His email's still working though, so you can still probably email him or something. Joey and I will have a conversation, I promise you that. The thing is, children have many fathers. I'm not sure what his relationship is with his dad, and I feel like I could probably help him out to kind of like be a...

<span class="transcript-speaker">Monacelli</span> Actually, I'm looking at the ICANN, you may want to look up the ICANN registration because it says the privacy administrator is Anonymized, Inc.

<span class="transcript-speaker">Monster</span> Yeah, just look at the registrar, I don't think... 

<span class="transcript-speaker">Monacelli</span> Well yeah but you guys are providing web services to him

<span class="transcript-speaker">Monster</span> Possibly. We're not the...

<span class="transcript-speaker">Monacelli</span> Yeah, Anonymize is your subsidiary.

<span class="transcript-speaker">Monster</span> That's the WHOIS privacy proxy. I will check that. I will check to see if antifawatch.com has any hosting from Epik, but we're not the registrar, so I don't have an easy way to just turn it off.

<span class="transcript-speaker">Monacelli</span> Okay cool, but as long as you're... the privacy administration is also a problem.

<span class="transcript-speaker">Monster, 1:14:34</span> Well obviously there's not a lot of privacy if a snapshot from a <span class="transcript-note">[unintelligible]</span> backup is out on the web.

<span class="transcript-speaker">Monacelli</span> Right, and there's not a lot of privacy when we're talking about doxing sites either. 

<span class="transcript-speaker">Monster, 1:14:46</span> Alright, so look guys. Here's the thing. I believe that that dataset that's floating out there is cursed. It's stolen data. 

<span class="transcript-speaker">Unidentified</span> It's cursed?

<span class="transcript-speaker">Monster</span> I strongly advise... yeah it's cursed. I believe that it's cursed. I don't think it ends well. You know it's funny, because, why did I do this? Why did I say "okay let's have it out"? Every year on the Day of Atonement, Yom Kippur, you're supposed to clear your debts. I went made sure checked all my invoices, whatever, made sure that everybody was paid and I think I succeeded. And then also that you've settled your arguments with various people. So anyway I don't want to have any kind of differences with a bunch of folks. The Bible says when a man's ways please the lord, even his enemies are at peace with him. If somebody has a beef with me, then I'm happy to have it out, trying to figure out what the deal is.

<span class="transcript-speaker">Monster, 1:15:45: <span class="transcript-note">[reading chat. Full comment in chat was from "/usr/bin": "Bibles a Psyop"]</span> The Bible's not a psyop. That's bad info, sorry. BIBLE stands for "best instruction before leaving earth". I think that's pretty good. <span class="transcript-note">[reading chat. Full comment in chat was from "nf84"</span> "I can't get into the religious stuff. God probably isn't real to be honest."]</span> Alright, you can't get into this religious stuff you can ignore it. So yeah if anybody else has problem sites that are really engaging like bad, bad stuff that you could never defend in the light...

<span class="transcript-speaker">Unidentified</span> gab.com 

<span class="transcript-speaker">Monster, 1:16:11</span> Alright, let's talk about Gab. So Andrew Torba is much more of a free speech absolutist than I am. I am not a free speech absolutist. The free speech absolutist people sometimes get mad at me because I actually have a condition, which is that it needs to edify. And the question is does the content in the aggregate edify? And I think the answer is yes. And the reason why I say that is because the Gab people have been pretty much booted off of Twitter and whatnot, and to the extent that Gab basically governs itself and doesn't allow unlawful content and doesn't allow genocidal people... weev, for example, is almost surely not on Gab. I'm pretty sure that he would be removed, just like Chris Cantwell with this edgeboard stuff. It's just not fun, it really gets tiresome. So yeah if there is...

<span class="transcript-speaker">Monster, 1:17:16: <span class="transcript-note">[reading chat. Full comment in chat was from "/usr/bin": "Gabs a Psyop"]</span> Somebody says Gab's a psyop. I don't... no. Is it theoretically possible that that Torba is an operator? I don't know. I can't tell. People say that about Alex Jones, also a client. I don't know, I never met him, never talked to him. We hired one of his guys, Michael Zimmerman, Director of I.T., from <i>InfoWars</i>, but tough to say. I do believe this, I'll tell you what</span> I believe that there's a polarity, this whole right, left, fat, skinny, rich, poor, gay, straight... it is a giant polarity. For the last two, three decades it's been divide and rule, create a dynamic where you just get people to rub up against each other, and just kill the crap out of each other and exhaust each other. The right fears the left, the left fears the right, and it's super stupid. It's a game. If you fell for it, sorry. The right doesn't really need to fear the left, the left doesn't really need to fear the right. There have been antifa people, some of you are on this call, who who have come at me and stuff, and I offered to meet with meet with them for coffee in Seattle. They didn't want to meet. I wasn't gonna hurt anybody. Just like this, I'm just happy to have a conversation, get real, and and solve stuff. Because at the end of the day I think there has to be a a basis for being able to find truth. If you treat the whole universe as a giant puzzle and and somebody arbitrary decides to take away half the puzzle pieces, what good does that do you? 

<span class="transcript-speaker">Monster, 1:19:10: <span class="transcript-note">[reading chat. Full comment in chat was from "/usr/bin"</span> "So would you say Epik helps run psyops? Epiks a psyop"]</span> "so you would say Epik helps run psyops..." No, Epik's not a psyop. We're not a psyop.

<span class="transcript-speaker">Unidentified</span> But wait, if you're talking about taking away half of the puzzle pieces and you read the Bible then what do you think about the Council of Nicaea where they removed half of the Bible?

<span class="transcript-speaker">Monster</span> Oh man, I tell you what! No you're right, I think that was bullshit. I think that Book of Jasher, if you can find the one that is not put out by the Rosicrucians, good read. Book of Enoch, good read. Maccabees, all four books, good read. Lots of great scripture that's not canonical will help you connect the dots. I think there's tremendous wisdom. On my Twitter, oh no, not my Twitter, internally I posted Laozi quote this morning. The one that's about your thoughts, it goes down the character, right? What the thoughts lead to this lead to this. The head bone's connected to the cheekbone, whatever. Okay so your thoughts basically ultimately define your character. You don't have to believe in a deity to know that that's probably true. 

<span class="transcript-speaker">Monster, 1:20:20: <span class="transcript-note">[reading chat. Full comment in chat was from "/usr/bin"</span> "prayer meeting is a psyop"]</span> "PrayerMeeting is a psyop..." No, not a psyop. It's a free thing. So when this COVID thing was going on, non-denominational, we said okay can we create a tool and host it for free? We host this, there's no recording, there's no surveillance. If somebody's recording it, it's not me, let's just say it that way.

<span class="transcript-speaker">Monster, 1:20:20: <span class="transcript-note">[reading chat. Full question in chat was from "Pyramid King Reuben"</span> "Rob, what's your take on Spinozan pantheism"]</span> "What's my take on Spinozan pan..." I don't know, I am not schooled. Pyramid King Reubenn, lay it on us, what do we need to know about Spinozan pantheism? You have to talk, if you want to tell us. Alright, he had a chance.

<span class="transcript-speaker">Monster, 1:21:04</span> So what else we got? Demon spawn, the Canadian guy, Kirtaner? You there?

<span class="transcript-speaker">Kirtaner</span> Yeah I'm here. It's pronounced kir-tanner. But yes demonhackers.com is another one of Joey's properties, yes.

<span class="transcript-speaker">Monster</span> So there's somebody in the chat that said you did the hack, is that true?

<span class="transcript-speaker">Kirtaner</span> No. First of all, no I didn't do the hack. Second of all, I would never ever ever ever admit to a federal crime in a space this. I mean what kind of question is that? God.

<span class="transcript-speaker">Monster</span> Okay, I did not mean to offend.

<span class="transcript-speaker">Unidentifed</span> He's here for the same reason Steven was. There's a site that has all his dox that Joey's running, demonhackers.com.

<span class="transcript-speaker">Monster</span> But which is the site? We took that site down, the problem site.

<span class="transcript-speaker">Kirtaner</span> Yeah, demonhackers would be a redirect to another page for somebody from Distributed Denial of Secrets, and that a big overview page that's got me, a couple of my friends, that stuff.

<span class="transcript-speaker">Monster</span> Got it. So hypothetically, I'm not saying it was you. Hypothetically, how would someone have accomplished it? Because from my interpretation, there was a backup on a host that we will not name, and that's all it was. I'm not aware of a successful penetration of Epik. Would you to comment on that?

<span class="transcript-speaker">Kirtaner, 1:22:30</span> I do know that there were valid SSH keys in the dump, and as far as I'm aware...

<span class="transcript-speaker">Monster</span> Ah, but that's different. But the actual start of the penetration was accomplished by getting a copy of a backup. Is that is that a fair characterization?

<span class="transcript-speaker">Kirtaner</span> I don't know. I haven't examined the dump to that degree, so I couldn't comment on that.

<span class="transcript-speaker">Monster, 1:22:54</span> Alright, but you have intimate familiarity with the person who was involved with the alleged hack...

<span class="transcript-speaker">Kirtaner</span> No!

<span class="transcript-speaker">Monster</span> No, I'm not saying that you're it. I'm not asking you to to condemn yourself. And I'm not here to mess with your life. I'm not really a litigious person. We hired lawyers just because we have to deal with state AGs or whatever, in the event that we do, we have to basically govern ourselves in a way that is responsible. The first order of business was to basically cure whatever was out there, we reset all the auth code and did everything basically textbook basically be able to fix the problem, and hired outside experts to just pound the crap out of the site to see if there were any vulnerabilities. I think we cured them. If we didn't, please send me a note, rob@epik, I will happily appreciate any assistance, guidance. Some of you guys are super duper knowledgeable on a level that I will never attain. We all have our gifts, I'm not a hacker, I try not to get messed up... so yeah if you have more stuff or you've seen stuff in our code that's really really bad... yes, I know there's a lot of bad legacy code, I got it. But if there's an imminent vulnerability in the code that you think needs to be breached, or needs to be cured, please drop a note. I will return the favor I promise.

<span class="transcript-speaker">Unidentified</span> Do you have an active bug bounty program where pay what it's worth? 

<span class="transcript-speaker">Monster, 1:24:27</span> Yes. bugs@epik.com. Yes we do. In fact, funny you should ask. We have a very talented young developer in Belgium. His name is Guy. Like "Guy" but Belgians pronounce it "gee", French. And Guy is developing a bug submission platform. We also have started a company that you might have come across called Cybermarks, and it is a cybersecurity boutique. You might say "wow guys, you guys are such clowns, why would you start a cybersecurity company?" Well, yeah. So the idea is... what can we do? So we hired a bunch of South Africans, like an elite team of cybersecurity people. They only were at it for a couple of months in terms of setting up their operation. They were working for a high-level firm. And they're Kingdom guys, so they work for the Kingdom. They're Christians. And the company that was employing them wanted to do some stuff that they didn't feel comfortable with, and so they quit as a cohort, four of them, actually eight of them, but four elite cybersecurity guys, and we hired them. So that was about a month and a half ago. So Cybermarks.com is a division that's being incubated by Epik. But I think we're gonna hire quite a few heavy-duty cybersecurity guys, so if you're on the side of good, you want to basically turn from the dark side or whatever. If you're white hat and you want to be a force for good, Cybermarks would be a fantastic organization to be a part of I would say. We're pretty cool company, guys. I know that we look clowns to some of you when you look at the cover, but check out epik.com/labs.

<span class="transcript-speaker">Monster, 1:26:28</span> We're working on a single sign-on platform called Valido, valido.com. We have single sign-on. So the passwords that you saw in that data dump, they're not they're not actual, because the passwords are actually governed by the single sign-on. We pivoted to a Keycloak-based SSO platform early this year, back in January. So we have not been on that SSO that you saw, that is in the database which is legacy passwords. But there are... the MD5 wasn't salted, I mean, there was just a bunch of ineptitude in there. And thankfully we were not using that, it's not production, and I think for legacy reasons they never dropped those columns in the tables. They should have because they as somebody in the chat, in the Twitter comment section, talked about how it was not unsalted MD5, MD5 hash. So it was kind of below standard. So that's the reason why...

<span class="transcript-speaker">Monster, 1:27:36: <span class="transcript-note">[reading chat. Full comment in chat was from "JP"</span> I don't know how many people will sign up to a cyber security service from Epik, if we're being honest. maybe just don't brand it with 'Epik', spin that off somehow"]</span> "...I don't know how many people will sign up with..." So yeah, I got it. So I'm just saying, so, to the extent that you guys are aware, this notion of a cyber pandemic, Klaus Schwab, the World Economic Forum, check it out. He goes on, <span class="transcript-note">[German accent]</span> "there comes this cyberpandemic". This guy. To the extent that there's going to be a cyber pandemic, that's going to be an opportunity to create a lot of value. So just like the guys who made the viruses also sold the antiviruses. So let's figure out a way to make a buck and use it for good as opposed to bad stuff.

<span class="transcript-speaker">Monster: 1:28:20: <span class="transcript-note">[reading chat. Full comment in chat was from "JP"</span> "How much user data was unencrypted and stored in plain text? I'd like to hear more about that and the MD5"]</span> "how much user data... I'd like to hear more about that..." Yeah, I'm not the expert on MD5. Salted, unsalted, don't ask me about encryption, I'm not a genius in this stuff. I'm happy to introduce you, if anybody...

<span class="transcript-speaker">Kirtaner</span> From what I saw, it was bad.

<span class="transcript-speaker">Monster, 1:28:37</span> Yeah, I agree it was bad. Absolutely. And if you missed it, the the developers that we got from the Russian team, they're kind of captive. A dev team that's captive. They're not Epik employees, the legacy Russian dev team. They're part of our team, they're part of our culture, I trust them implicitly, they're like brothers. Many of them are Christians. And you know, we have Jews, we have Muslims, that's not a statement, I'm just saying that that we have some common code of conduct. And they've been great, they've always been been honorable, fair. They're smart, diligent, call them at three in the morning to get out of bed, do whatever. But I think now that we've seen the code, a bunch of stuff's gonna get rewritten. It was already in motion, and I mentioned earlier about a couple of really capable senior devs that we've since added. They are coming on board, they've already come on board because of these recent acquisitions and some new hires, and they are completely retooling the entire development workflow. We use... I think you would be impressed by the the coding methods and frameworks and protocols. You can look up David Roman and Justin Tab. Capable guys. And then Michael Zimmerman, the ex-director of I.T. at <i>InfoWars</i>. He's not a coder, but he has a lot of experience with migrating people out of AWS. We did acquire a data center, a company with two data centers, underground data centers. And we acquired two other hosting companies, one in Portugal and one in Bangladesh. We haven't announced those deals, but we do have a considerable amount of vertical integration now in hosting infrastructure.

<span class="transcript-speaker">Monster, 1:30:44</span> So we're going to get our ducks fully in a row, and my guess is within within six months we we will be fairly competent in the cybersecurity arena. And if there are people that are like hardcore hackers that want to be on the side of good, making...


<span class="transcript-speaker">Monster, 1:31:00: <span class="transcript-note">[reading chat. Full comment in chat was from "nf84"</span> "Hosting in Bangaldesh (sic). Interesting"]</span> "Hosting in Bangladesh, interesting..." ... then we have jobs, we have raised considerable amount of money and we're happy to employ honorable people. I don't think weev is gonna be able to submit his resume. I just don't think he's got a great vibe about him, so if you're an asshole then we don't really want to have you hanging around and spewing garbage. But if you want to turn the page and be a kinder version of yourself, love your neighbor as yourself, and maybe do a better job, then then absolutely. We try people out. There was a guy that we hired, first letter of his name is "A" but won't name his name. We hired him, he developed kind of a substance problem and we let him go and he was kind of rogue, not very intelligent... So there are people though, that you try to help that you can't always help, and so sometimes you just can't lift somebody out of their...

<span class="transcript-speaker">Monster, 1:32:04: <span class="transcript-note">[reading chat. Full comment in chat was from "nf84"</span> "Addiction is hard. Sad."]</span> Yeah, addiction is hard, it's true. People with hardcore addiction. It's a slippery slope, so... But I tell you, you can break every vice in Jesus' name. I think that we all have our vices and I have absolutely seen evidence that that even the most hardcore addiction can be broken in the name of the Lord Jesus Christ, so.

<span class="transcript-speaker">Monster, 1:32:27: <span class="transcript-note">[reading chat. Full comment in chat was from "Pyramid King Reuben"</span> "once you start on weed, it's a slippery slope"]</span> "weed is a slippery slope..." I smoked weed in college. Not much, but the freshman year of college. Yeah freshman, I mean, I was wild. I mean I was not a regenerate dude, I'll tell you that. I was with Cornell, rowed for Cornell varsity crew, but freshman year... man, freshman frat parties. Girls, drugs, weed, did it all.

<span class="transcript-speaker">Monster, 1:32:58: <span class="transcript-note">[reading chat. Full comment in chat was from "Pyramid King Reuben": "yikes, did you ever take LSD?"]</span> Did not take LSD. Didn't really do any other drugs, I have no other experience with drugs. I drink too much coffee. My go-to is whole beans from Trader Joe's. I grind it myself, push the button. I can do like three things</span> empty the dishwasher, take a piss, and make a coffee all while the coffee's brewing, it's fully automated. Cafe latte, I have a method of making cafe latte. I brew the coffee, like two shot espresso, I put the milk in and then I let the frother steam while I go do other stuff and it works really well.

<span class="transcript-speaker">Unidentified (Greg?), 1:33:42</span> Okay Rob, let me ask you a question here related to something you just said. Not about the college stuff but before that, about all the work that's going into Epik now. You've got a lot of work going into it, you've got new teams, you've got new people. Would you then say, and this is a leap, that in the end this hack is actually making Epik better because it has identified all of these problems, and without it, who knows who would have been abusing these problems. So this hack actually made your platform better is what it sounds you're saying?

<span class="transcript-speaker">Monster, 1:34:19: Yeah, no absolutely. So Romans 8:28 says that all things work together for the good of those who love God, that are called according to his purpose. I believe all lemons are for lemonade. And I gotta tell you guys, yesterday was the hardest day of my life. Some of you wouldn't know that, most of you wouldn't know that, but I was actually at the closest I ever got to being broke. And it was a very hard day because so many things came at me from all different sides. You haven't really lived, like I've walked through the fire right? For the last three years I've walked through the fire. And you can walk through the fire and it doesn't burn you, that's what i've learned. But there's like a different level of fire when you have freaking Anonymous light your ass up. It's on another level. And I have to tell you that yesterday totally took me to the threshold where I'm like "wow how much can I take?" So anyway, it all worked out though. It was a hundred thousand dollar critical hack, we plugged that gap, we didn't lose any domains, thank God and <span class="transcript-note">[unintelligible]</span> Yeah, we didn't lose any domains and we actually gained more domains than we lost yesterday, that was a freaking miracle, but praise God. And then today too, I think we've probably gained more domains than we lost. Some of the people in media, they were not kind to us, but I absolutely think you're right, Greg. It didn't kill us, it's gonna make us stronger. The code base that the Russians were totally safeguarding, they wouldn't give our new engineers access to the git, now we know why: the code sucked. And ironically now we have them all, we've got SSH keys to 70 servers and all kinds of legacy stuff. We're going through all of it, everything. We've hired really top cybersecurity outside experts, there are a bunch of people that have showed up out of the blue saying "hey we'd like to help", offering to do pentesting, stuff like that, and we're we're getting our ducks in a row. So yeah, I feel terrible. Yesterday was, I tell you. I weeped. We actually had, craziest thing. So I had a call at five in the morning, got up at 4</span>40 in the morning for this 5am call, the cybersecurity group. And this cybersecurity group gave us a briefing. And then after that, our guy in South Africa, his name is Carlos. He pronounced it "Carlo", he's Portuguese but he lives in South Africa. He's like "Rob, we need a meeting. We need this prayer meeting." I was like, "alright, then do it". And so he convenes a meeting, he explains to me how it's going to go. Five guys, you've got John, Carlos, Ivan, Dewalt, myself. So, three South Africans and two Americans. We have this hour and fifteen minute meeting, courts of heaven, throne room, total get-it-done, break every curse... I mean, I am not gifted on that level, I  know how to pray but this was on another level. And I'm telling you, there were there were curses put on these on these datasets, and not out of spite. I'm just saying that it was done. I'm just giving you a heads up. There are curses. Laptops will burn. Hard drives will burn. And we'll see if it's true, but there's...

<span class="transcript-speaker">Kirtaner, 1:38:32</span> You're going to need a sledgehammer.

<span class="transcript-speaker">Monster</span> No, just delete it. Just repudiate it. In Jesus' name is what I would recommend.

<span class="transcript-speaker">Unidentified</span> Thermite actually works really, really well for burning hard drives.

<span class="transcript-speaker">Monster</span> I'm not saying... I'm just saying, repudiate it. In other words... We all make mistakes, right? So don't forget. You've got Saul of Tarsus. Saul of Tarsus was like a hardcore murderer and he became Paul the Apostle. David, the great King David, he had the hots for Bathsheba. Checked out Bathsheba, Bathsheba's husband was out at war, he hooks up with Bathsheba, they have a baby, he's like, "oh crap what am I gonna do", he kills the husband of Bathsheba, they lose their baby, and then a year later... <span class="transcript-note">[crosstalk]</span> They have Solomon. So Solomon ends up basically... so anyway the point is, God will use all kinds of people. It doesn't matter what stupid mistakes you've ever made.

<span class="transcript-speaker">Monster, 1:39:37: <span class="transcript-note">[reading chat. Full comment in chat was from "JP"</span> "Same nf84, I think it's immoral to download the data sets of hacked customer information but I don't think 'curses' is the right language to reestablish trust"]</span> "I don't think curse is the language to reestablish..." Yeah I mean, to be clear, I'm just giving you a heads up. You know, before the sun sets in Honolulu where it's the end of the Day of Atonement. I'm just saying if I were you I would get rid of those datasets if you have it. I don't care, I mean the data's all out there. You can keep it if you want, I'm just giving you a heads up.

<span class="transcript-speaker">Monster, 1:40:00: <span class="transcript-note">[reading chat. Full comment in chat was from "nf84"</span> "Why is it immoral to download the data? I downloaded it to check the scope of the breach, not for any malicious purposes."]</span> Yeah, no problem. People who are using it for white hat stuff... if your intent is to use it for benevolent purposes to make sure there's no problem data, keep it. I mean, the code is out there. Some of the code doesn't suck. There's some bad coding aspects, clearly, like API keys hard coded in the code, config files not up to speed, but yeah, but I would just say if you have a negative intent to use that data, it's not going to work out for you. I'm just telling you. I am telling you. I love that neighbor as thyself, I would just give you my strong counsel to not do it. If the demon tells you to do it, the demon is not your friend.

<span class="transcript-speaker">Monster, 1:40:55: <span class="transcript-note">[reading chat. Full comment in chat was from "bob"</span> "@mikael hell yeah, I'm good if that's the case. what domain registrar should I move to?"]</span> "What domain... I'm good... that's the case... what domain regist..." I wouldn't use GoDaddy. Crap product, crap service. We outpolled GoDaddy in the registrar of the year award two to one in the 2000 registrar of the year award, and...

<span class="transcript-speaker">Monster, 1:41:18: <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "GoDaddy is NoDaddy"]</span> "GoDaddy is NoDaddy..." Yeah I would not use them. They're nice people, by the way. I have to say, they are very lovely people at the at the lower level of the organization. <span class="transcript-note">[reading chat. Full comment in chat was from "JP"</span> "Overpriced as fk"]</span> They're overpriced, I think that's right. If you go to epik.com/free it catalogs all the stuff that we give you for free, I would encourage you to check that out.

<span class="transcript-speaker">Unidentified</span> Do you have any discount codes like the MyPillow guy? 

<span class="transcript-speaker">Monster, 1:41:41</span> Yeah well, so for example, .com transfer now is $6.99 for unlimited .com transfer. I would encourage you to check that out. On September 1st, the registry raised the prices by like seven percent and we didn't, we held our price. So it's $6.99, all-inclusive, including the ICANN fee, regardless of payment method. You can pay with the crypto. With free privacy, free forwarding, lots of stuff. epik.com/free... Free WordPress hosting, basic... no custom templates, but you can use free basic WordPress hosting. And $6.99 .com transfer and then $8.49 all-inclusive renewal, which is below cost.

<span class="transcript-speaker">Monster: 1:42:30: <span class="transcript-note">[reading chat. Full comment in chat was from "JP"</span> "Does Epik take a loss on keeping renewal prices low? I know ICANN is raising fees on some extensions"]</span> "Does Epik take a loss on keep..." Yes we do. So why do we do that? We lose money on our .com names because when our clients sell domains to an end, we typically can sell them hosting, CDN, DDoS mitigation...

<span class="transcript-speaker">Unidentified</span> You know a really good way to make money is to use offshore accounts to launder money from <span class="transcript-note">[unintelligible]</span>. I've always found that's been, you know... Just throwing that out there.

<span class="transcript-speaker">Monster</span> So offshore accounts... break that down for me.

<span class="transcript-speaker">Unidentified</span> I don't know, I wasn't in the Panama Papers, you were.

<span class="transcript-speaker">Monster</span> Uh, I don't know. Oh no, I mean Panama Papers... I don't know I was... I don't know if I was in the Panama Papers, that's news to me. But I had a Coinbase account. That's actually very interesting that you mentioned that, because I have I have a Coinbase account, and I don't use it very much, I hadn't used it in years, and then yesterday talk about my bad day, I get this email that I'm overdrafted. I'm overdrafted by $60 grand, because this legacy Coinbase account that almost nobody uses, it's the first crypto. We were one of the first registrars to accept crypto. 

<span class="transcript-speaker">Unidentified</span> <span class="transcript-note">[unintelligible]</span> the MasterBucks thing, right?

<span class="transcript-speaker">Monster</span> I could talk about that. We could talk about this first.

<span class="transcript-speaker">Unidentified</span> Oh, so that's different from the crypto thing? From the swiss bank account thing?

<span class="transcript-speaker">Monster</span> We don't have a Swiss bank. There's no Swiss banks.

Unidentified. Oh, my bad. Anything in the islands?

<span class="transcript-speaker">Monster</span> Nothing, nope, no Caymans, no islands. We acquired a an Irish crypto exchange, you can check it out. It's called Amplify.io. I'm told it's pretty secure. You guys can try and hack it. Amplify.io. And it's domiciled in Ireland. It's licensed as a crypto exchange. We ended up acquiring that company in April of this year. We're working on an NFT platform called Fraktion, f-r-a-k-t-i-o-n. But all Reg. D, Reg. S compliant stuff. We hired a full-time in-house lawyer, that lawyer brings in other lawyers as needed. Before you got here, I mentioned that we raised $32 million in outside growth capital from a guy who didn't ask for a board sheet and it's all common stock. I'm overwhelmingly the majority shareholder and there are no other board directors at this time. We had two board directors, they were both Jewish they both resigned because of the Gab stuff I think was too hot. Then after that the 8chan thing, it was a client for two days and and we let them go. But it's not easy running Epik, right? You have to you have to understand. Trying to thread the needle on what's lawful free speech is not an easy task. The decision tonight to turn off Joey's site is not a light decision. It's like, you know what? Can I extend an olive branch to the netizens, to the community of Internet people, that says okay if that's doxing because there's like a screenshot of some nasty stuff about people and it includes people's home addresses, then that crosses a line. That's if that's what was going on, and it basically causes people harm, it needs to come down. But there are things that we deal with, like Gab, like some of these health sites. Like, let's be real. Mike the Health Ranger. Lovely, nice guy, but he spouts some garbage. And he's a client in a small way, but when he goes out there with this crazytown stuff, it's not very honorable. Because I get it, if you're Alex Jones and you gotta talk for three hours a day and maintain an audience, sometimes you have to maybe kind of be a little fringe. He gets some stuff right, but a lot of stuff maybe... he has to rely on other people, that is facts. And we have to kind of come back to the decision of "is this person trying to be a force for good as they kind of navigate the issue of truth?"

<span class="transcript-speaker">Monster, 1:47:26</span> I think it's extremely hard to be an on-demand person. Earlier today, some of you guys know I run a ministry thing called Fast Brothers. Phil actually, he's the guy... where's Phil? There's Phil. Phil works for Time Square Church, and Phil called the other day as a client, and after an hour and a half call as a client I offered him a job and he agreed to come work for us. But we had this thing this evening called Fast Brothers, and it's basically prayer, fasting, and communion, and this exists as a way to kind of bring people together across denominations and try to figure stuff out. And one guy that came on the on the call tonight, first time. I would say the guy is prophetically gifted, but there have been prophets in the past, modern-day prophets where they fill a colosseum. Like Kim Clement is one of those guys who would fill a colosseum and do a little, like, prophecy on demand. And I don't think that's very easy. I think that would be extremely hard. I wouldn't want that job. I think that's a hard way to make a buck. And I think he died young, because that's probably not an easy way to make a living. Anyway, sidebar.

<span class="transcript-speaker">Monster, 1:48:57: <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "It's in here https</span>//www.epik.com/terms. There's a headline 'Acceptable Use'"]</span>. "Acceptable use policy..." Yeah, if you guys think there's something wrong with our acceptable use policy, drop me a note, rob@epik.com, and we'll take a look at that.

<span class="transcript-speaker">Unidentified</span> Can we still host sites that sell drugs on Epik? Or is that a no-no now?

<span class="transcript-speaker">Monster, 1:49:11: That's an interesting question. We enforce court orders, and so the challenge that we have, and I don't know to what extent the question is being asked in good faith, but I'll give it to you as I see it. If you go and do a search, go on Google and search "Epik LegitScript", I did a blog post years ago about the time I told LegitScript to pound sand. And I annoyed them, because my policy is very simple</span> it's get a court order. If somebody is engaging in malfeasance, get a court order. And we honor those court orders. Also WIPO has the UDRP process. When there's a UDRP order, we enforce it. So for example, there was a guy who bought a bunch of Coinbase typo names and he still had them on Epik, and we're not a fan of that. If it's phishing we don't allow it, but he wasn't doing phishing, he was doing redirect for these typo names and he got a UDRP, he lost, and whatever value was accrued in owning those names, he lost it. Because if you're engaging in something that is dodgy, then you're probably not going to out yourself in responding to a UDRP claim, because to answer a UDRP you have to basically de-cloak. It's very hard to defend a UDRP without identifying yourself as a real person.

<span class="transcript-speaker">HF, 1:50:55</span> Is that like a cloak of invisibility... Harry Potter, or what?

<span class="transcript-speaker">Monster</span> No, it's WHOIS privacy proxy. So Anonymize is owned by Epik, and we allow people to go and basically do privacy proxy for free. wW believe privacy is a right, not a privilege, so we don't charge for it. We never charge for it. Somebody in one of the Twitter comments said that we charge all this money for privacy that didn't work. The answer is no, not quite, we never charge for it. It's always been free. GoDaddy charges money for it, a lot of people charge money for it, we never did. And we have a an ICANN-compliant WHOIS privacy proxy. It's Anonymize, Incorporated, it's owned by the same parent company. So there's that Epik Holdings, Inc. and there's Epik, Inc and then there's Anonymize, Inc. They're part of the same parent. But we don't actually charge for privacy. We took it down because the keys were compromised, and so we will put it back up maybe tomorrow. Because we also offer a free VPN, those of you who need free VPN. And normally it works, there's a free one and a paid one.

<span class="transcript-speaker">Monster, 1:52:14: <span class="transcript-note">[reading chat. Full comment in chat was from "JP": "I think users should automatically be prompted to change their password when logging into Epik if they haven't already"]</span> Let's see... "I think users should automatically be prompted to change their pass..." Yeah, I agree. I think that that hasn't been deployed yet. There will be a forced password change. And just to recap for those of you who didn't catch it before</span> we run a single sign-on product based on Keycloak called Federated Identity. It is separate from the dataset that was evidently compromised, and so we don't believe that Federal Identity has been compromised. I don't think there's imminent risk, if somebody thinks there's imminent risk, drop me a note, but Keycloak latest version seems pretty solid. And we do have a plan to rebrand that.

<span class="transcript-speaker">Monster, 1:52:55: <span class="transcript-note">[reading chat. Full comment in chat was from "Customer": "I heard that auth codes are also leaked. can anybody steal the domains?"]</span> The auth codes that were leaked were not current. They have all been changed twice</span> once immediately as the information was spreading, and I kept my mouth shut for a couple of days while we basically worked very hard through the night to tidy up, but we changed all the auth codes and then we changed them again. So they've been changed twice in the last 48 hours. We ran through all of them. So all the auth codes have been changed, the domains were locked, and to basically transfer a name, you would need both the auth code and you would need to unlock the name. If you had an unlocked name and you had the valid auth code you could steal a domain. I don't believe any domains have been stolen, and checked it throughout the day the last couple of days. I was slightly terrified, just in case that were to happen I think that would be an extremely bad day. The good news is we're on great speaking terms with the CEOs of all the major registrars. If you do steal a name you'd have to go to Njalla or somebody who basically is lawless and unaccountable.

<span class="transcript-speaker">Kirtaner</span> They are <span class="transcript-note">[unintelligible]</span> people.

<span class="transcript-speaker">Monster, 1:54:08</span> Yeah, I know, but I don't... they are willfully and brazenly lawless and unaccountable. They steal other people's intellectual property and but, anyway... I don't judge them. I'm just saying that that I've never had a relationship with them. So if you wanted to be a cybercriminal, then you would probably take the names to like... China.

<span class="transcript-speaker">HF</span> Cybercriminal? That's a terrible thing to say, Rob.

<span class="transcript-speaker">Kirtaner</span> I would never do cybercrime!

<span class="transcript-speaker">HF</span> Our only crime is curiosity.

<span class="transcript-speaker">Monster, 1:54:43</span> Yeah I get it. Demon spawns probably don't do any cybercrime at all. So I would just say that if you're going to steal a name, then Njalla is probably a receptacle of that, and then there are Chinese registrars who basically ignore all UDRPs. And I can't tell if it's because they're lawless or because they don't read English. But if you could hold the domain in China, you can get away with it for a while.

<span class="transcript-speaker">HF</span> You know the real problem, Rob, is that RDAP is being an RFC rewrite for WHOIS lookups and being further obfuscation of these sites. Don't you think that ICANN, something needs to be done there?

<span class="transcript-speaker">Monster</span> Yeah so "High Fidelity", I don't know what your real name is, but I'll just call you "High" and you can change your name.

<span class="transcript-speaker">HF</span> Excellent choice.

<span class="transcript-speaker">Monster: Okay, HF, so I would say</span> RDAP, I was not a big fan of RDAP and I'll tell you why. I went to many ICANN meetings, I lobbied against RDAP, you know why I lobbied against RDAP? Because, so ICANN meetings. They're free, anybody can go to them

<span class="transcript-speaker">HF</span> Did they ever hold anything on Epstein's island, do you know?

<span class="transcript-speaker">Monster</span> No, no. They're only hosted in big cities and big conference centers. They're four days, they're partying every night...

<span class="transcript-speaker">HF</span> Any Eastern European models?

<span class="transcript-speaker">Monster, 1:56:20: No, it's not like that. It's more bars scene, restaurant, free food. But there's no strippers, none of that. It's not like a salacious crowd, just to cure that illusion. They're not boring, they're not just nerds, some of these guys are fun and cool, but I'm just saying that it's not... if you're thinking like Puerto Rico crypto crowd it's not that. So RDAP</span> here's the dirty little secret about RDAP. RDAP, they basically wanted to deploy a model where law enforcement and approved individuals could pierce the private detail at will. 

<span class="transcript-speaker">HF</span> Ooh, law enforcement penetrating things? Never heard of it.

<span class="transcript-speaker">Monster: Yeah, no exactly. So here's the thing</span> normally, when Epik is highly functioning and not having backups of data hijacked by opportunists or people who were corrupted and brought off or whatever...

<span class="transcript-speaker">HF</span> <span class="transcript-note">[unintelligible]</span> backup, we're here to help. <span class="transcript-note">[unintelligible]</span>

<span class="transcript-speaker">Monster</span> And I appreciate that.

<span class="transcript-speaker">Kirtaner</span> Complementary backups! Always the best.

<span class="transcript-speaker">Monster, 1:57:28</span> Yeah so... thanks, demon. So what I was going to say though is that RDAP basically had this deal where approved individuals would have the ability to pierce the privacy veil at will. And I never agreed to that. So what we did is we allowed people to own names under Anonymize. So you could actually list Anonymize as the registrant, as the legal registrant of your name, for free so even if our RDAP was working and pierced the privacy veil, all you would see is the privacy proxy. Because... hold on, HF. The only requirement for ICANN from a compliance standpoint is that the domain name has to be owned by a legal person, a non-real... a non-fake person or a legal entity. And Anonymize, Inc. satisfies the condition of being a legal entity. And so when somebody does a UDRP action against a domain name that is owned by Anonymize, Anonymize is the initial respondent until we have an opportunity to go the registrant and say, "do you want to de-cloak? Because if you don't you will lose by default." Go ahead, HF.

<span class="transcript-speaker">HF, 1:58:43</span> So you mean that they used the email address that was just a standard set of numbers@anonymize, and then they use those numbers as an email address, but that email address also tied to the record in Epik's database of users, right? Isn't that how that's all being put together? It seems like it online.

<span class="transcript-speaker">Monster</span> No, so it's random. So there was a point in time, like a year ago, when you would be hf@anonymous.com. hf.com@anonymize.com. But so if you had the domain hf.com, probably would be worth like a million dollars. hf.com@anonymous.com. And of course then any spammer could just engineer that and just spam the crap out of domain plus domain@anonymized.com. And we said clearly that's not a great plan, so we moved to a random hash so if you look at how the anonymized email addresses work now, it's a random rotating hash so it gets rotated every whatever... every few days

<span class="transcript-speaker">HF, 1:59:55</span> Okay, but you also use those anonymized email addresses for the contact information somewhere in this user's sites? So that there wasn't actually... I mean now that all this data is coming out and we're looking at it, it doesn't look it's that anonymized. I don't know, I may be wrong...

<span class="transcript-speaker">Monster</span> Yeah, so I said, I think it was earlier this year. So the the thing that was snagged from the backup, as I believe it was, subject to further confirmation by forensic people. So that upgrade earlier this year I don't know if it was in March or February, I don't know when we made that change, but we moved to a model where... hold on guys, this is my wife. One second.