---
layout: narrative
title: "Transcript of Rob Monster's live Q&A following the Epik breach"
author: Molly White
publication-date: 2021-09-18
comments: false
custom_excerpt: "Transcript of a live Q&A session held by Rob Monster on September 16, 2021."
---

<div class="note">
<p>This is a transcript of a portion of the live Q&A session held by Rob Monster on September 16, 2021. It is available on <a href="https://www.youtube.com/watch?v=aZ9MFts28XI">YouTube</a>, where it was published by Mikael Thalen. The transcript has only been edited for readability (e.g., to remove filler words which do not change meaning). Where relevant, comments from the live chat section have been transcribed for context. A plaintext copy of this can be downloaded <a href="https://gist.github.com/molly/88eae60e2f9db9031c1661720e827e36">here</a>.</p>

<p>All additional copyright to this transcript can be considered waived, and it can be freely reused with or without attribution to me. Video copyright details are available at the YouTube link.</p>

<b>I have not finished editing transcribing, and will be uploading additional portions today (9/18) as I complete them.</b>
</div>

<span class="transcript-speaker">Rob Monster, 0:00:00</span> ... working hypothesis is that it was a backup. And I'm not going to say where the backup was found but I believe it was a backup and it wasn't the live data. I don't think that there is a active vulnerability that would have allowed that scale of data haul. But we're going to find exactly where it was, we're going to find exactly how it was moved, and...

<span class="transcript-speaker">Monster, 0:00:28</span> No, I think that there was a non-active host. Not our production system. It had a backup, as we were doing remote backup of our data, and I think that was intercepted. And we'll figure out exactly how it was done, and cyber forensics people will navigate that, and they will advise us on what we should do, and law enforcement's involved.

<span class="transcript-speaker">Monster, 0:01:05</span> No, not a state of denial, come on bro. Yeah, I mean yeah there was a hijack of data that should not have been hijacked. I don't think there's any way to deny that. I think that the data was intercepted and the method that was used to be able to intercept that data was a method that I think is subject to review. So we haven't made a formal statement along those lines, what we've done is we've announced to our customers, "hey, your personal data may be out there" and encouraged people to... can can anyone hear anything yeah I think my microphone's working. Can you guys hear me? Yeah, well anyway I don't know that it is a breach of our production systems, I think that's the wrong word. I think that there was a backup that was hijacked and that it's making the rounds and there are a bunch of guys who I actually think are cursing themselves by trafficking in that data. I can unpack that if you want, but it's not a good move. 

<span class="transcript-speaker">Monster, 0:02:20</span> Yeah no, breaches of a backup server is still a breach, yeah. I guess, you know, you can get into like wordsmithing and whatever, you know. It is a data privacy problem, and it requires...

<span class="transcript-speaker">Monster, 0:02:37</span> <span class="transcript-note">[reading question from chat. Full question in chat was asked by Mikael Thalen: "Are reporters cursing themselves for reporting on the breach?"]</span> "are reporters cursing themselves reporting the breach?"

<span class="transcript-speaker">Monster, 0:02:40</span> what, I think there are reporters that are cursing themselves because they're engaging in propaganda. I think that journalism used to be kind of an honorable practice. It was about basically truth and empowering people to make informed decisions and I think somewhere in the last 30 years the economic model changed because there was no longer money to be made selling subscriptions. And as the world became more digital, there was more of an emphasis on online ads. And most of the newspaper industry failed to transition from the current method of monetizing through subscription and print ads, which were very lucrative, to a model that was viable for paying expensive salaries with online ads. Almost nobody wants to pay the paywall so what do you do? You basically become like <i>Huffington Post</i> and like <i>Gizmodo</i> and operations like that that basically are whores. They sell their influence to people that want to write big checks and... Easy money, because you don't have to basically collect money from that many people, but the problem is if you're a journalist and you work for one of these organizations, you have to kind of sell your soul. So I think that that's probably not great economics, right? So if you like make a buck and curse your soul I think it's not worth it.

<span class="transcript-speaker">Monster, 0:04:20</span> So... <span class="transcript-note">[reading chat. Full comment in chat was from "JorgeOrwell": "Yes well (sic) all know how fringe political sites, like gatewaypundit engage in advertising fraud."]</span> <i>Gateway Pundit</i>... they're not a client I don't think. You can check that. I think Jim Hoft, I know his work. They got booted from Twitter, and I think... here's the thing, right? I think that nations get the leaders they deserve. So when you have people who are not great at self-governing, they get dictators, right? When you look back in history, two nations that had great leaders that were, like, empowering and whatnot, a lot of them were very much focused on self-governance. Even like Gaddafi, who people say was this terrible despot tyrant, he was like pro-free education and a lot of other free benefits advancing the cause of its people. And somebody decided that it was time to just basically take his stuff, and so they rolled in and took his stuff. Now why is that relevant to <i>Gateway Pundit</i>? I think that Twitter has to make a call around who do they give the microphone? And we have to make that same call too. We routinely have to de-platform sites that we think are not engaging in self-governance. 8chan came to our platform without warning, they showed up on like a Sunday night, and by Tuesday morning they were gone. I think <i>Gateway Pundit</i> was booted by Twitter, but if you look at their journalism, not all of it is really showing great discernment. I think that's one of the great challenges that a lot of platforms like Twitter have, which is who do you give the microphone?

<span class="transcript-speaker">Monster, 0:06:15</span> <span class="transcript-note">[reading chat. Full comment in chat was from "nf84": "@JorgeOrwell IMO there aren't many lies, but journalists don't really understand what they're writing about. They don't understand the difference between a web host and a registrar. Or the distinction between a hack of a live system and theft of a backup (though you can use credentials from the backups to get access to the live systems, so long as you're quick, which is probably what happened do (sic) to the defacement of the knowledge desk."]</span> "in my opinion there aren't many lies but journalists don't really understand what they're writing about. They don't understand the difference between a web host and a registrar or the distinction between a hack of a live system and a theft of a backup where you can use credentials from the backups to get access to the live system..." Yes, that's a problem. "...so long as you're quick, which is probably what happened to the defacement of the knowledge..." Yes, that's exactly what happened. So there was a user, you can look it up, there was a user like "alp", alp@epik.com. His credentials were in one of the files and so people used that to post some stuff on the WordPress blog. And we cleaned it up, but that's where they got it. They also got a Coinbase API key and they tried to move a hundred grand out. We shut that down. So, sorry, no hundred grand for you, hopefully you don't get prosecuted too badly, but it's with the forensic people at Coinbase, so hopefully nobody goes to jail. Nice try though, because you almost got a hundred grand, but no luck, not happening. So if anybody's boasting about getting a hundred grand they got nothing. But you might get trouble. So, that's all I can tell you about that. If you guys think that there are still bad API keys or things that we missed with regards to credentials that are hanging out there, let us know. We pay bug bounties and we're pretty reasonable guys and you have my direct email address.

<span class="transcript-speaker">Monster, 0:08:00</span> <span class="transcript-note">[reading chat. Full comment in chat was from Mikael Thalen: "I saw unhashed credit card data stored in plain text"]</span> "...unhashed credit card data..." I am a bit mystified by that, because we actually store just the last four digits. We don't actually store a full card. So I don't know what that, was unless possibly there was some caching going on in which case, you know, bad form, shouldn't happen. And yeah, I mean, our team... we've done like eleven acquisitions in the last three years and we raised a significant amount of money not that long ago, from a billionaire, freedom-minded guy. No board seat, common stock, and so in other words he just wants to empower people to basically have the opportunity to search for truth and and to do the right thing. I'm the sole board director, founder, CEO. But in the process of doing those acquisitions and raising that capital, what we assembled was really capable people, and some of the different business units that we've acquired came with really really talented technologists, and we're we're working on basically retooling the development organization. In fact, because of this incident we formed a technical core team. I've been kind of the acting CTO if you look at the org chart, well, it's not public. But we have like 80 people and not all of them are staff, some of them are like overseas contractors and whatnot, but there's about 80 staff in various capacities across our various business units. And so the outcome of what we saw here, where really not many people... This will sound strange, so the Russian dev team historically was very guarded about the code base for the legacy core registrar, and up until like six months ago, right? I mean we did an acquisition of Amplify.io, so a licensed crypto exchange, and we acquired a company called Substratum and both of those acquisitions came with <span class="transcript-note">[noise from some other participant, Monster mutes himself but continues speaking]</span>

<span class="transcript-speaker">Monster, 0:11:05: It's me. I tried to mute the new person but I muted myself, that's me. So when when we... this will sound funny. When this breach occurred, I think for many of our top engineers this was the first time they saw the code. And that sounds really stupid, but the history of Epik is that we acquired a company called IntrustDomains back in 2011. Let me give you the story. So 2009, Epik gets started. We're like a domain name asset management company, we set up these websites, we figure out ways to create content, put them on exact match domains, and then Google indexed them and they made a lot of money because Google used to weight the domain name very highly in their algorithm. And then like in 2010, like around October, there was Google Panda and they kind of took the punch bowl away, and our business model was just trash. Actually in the fourth quarter of 2010 and in the first quarter of 2011 we actually had negative revenue because we were reimbursing people who had bought sites from us that were not making money because Google deindexed all of them. And so I had to make a decision</span> do I fold the tent and shut down Epik, or do I retool and come up with a new business model? So I didn't draw salary for a long time. We made a decision that a client, or a supplier, that we were working with at the time called IntrustDomains based in Colorado Springs, they were providing software for drop catching. So when the domain name expires you drop catch it. They were providing us with drop catching services. But their customer service was atrocious, and so I flew down to Colorado Springs, talked to Ken Palm who's the founder and owner, and I said, "Ken, you guys are really, really bad at customer service. Why don't you sell me your registrar and let me run that registrar?" And so he agreed, and he didn't charge me a ton, and so we bought that company, and it came with a Russian development team. So this was 2011, I think. June 2011.

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

<span class="transcript-speaker">Monacelli, 0:47:33: So yeah, to be clear</span> Joey Camp is engaged in a harassment campaign against myself, a few other journalists... And what he does is he posts public information that he should not have access to, and then he sends people to message you. He has people who have sent me my social security number, my driver's license number, my address, he's posted my family's address, he's told me that he will... he keeps posting about how he's gonna basically "ruin me" and this, that, the other. And he's trying to threaten and extort people. He has a pattern of doing this, there are tons of people...

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

<span class="transcript-speaker">Unidentified: You talk a lot about libertarian values, Rob, and you just said a word here that is definitely confusing, and I see Steve's point. The idea that if he was honorable, that leaves the question open of</span> who indeed is the arbiter of "is Steve honorable?"

<span class="transcript-speaker">Monster, 0:51:55</span> Well, come on. So Steve called me out of the blue and my cell phone is pretty easy to find...

<span class="transcript-speaker">Monacelli</span> I had emailed you and you responded to the abuse line that I emailed... <span class="transcript-note">[crosstalk]</span> 

<span class="transcript-speaker">Monster</span> That's fine. I don't hide myself, I'm pretty easy to find, right guys? I'm easy to find.

<span class="transcript-speaker">Monacelli: I know, I know that. I'm wondering if you can just really help me understand</span> what do you mean when you say doxing?

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