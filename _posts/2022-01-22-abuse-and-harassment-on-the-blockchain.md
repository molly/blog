---
layout: narrative
title: "Abuse and harassment on the blockchain"
author: Molly White
publication-date: 2022-01-22
comments: false
custom_excerpt: "In the frenzy to attract venture capital funding and draw new users and investors into blockchain technologies, \"how will this technology be used to harass and abuse people?\" is going unasked. While blockchain proponents speak about a \"future of the web\" based around public ledgers, anonymity, and immutability, those of us who have been harassed online look on in horror as obvious vectors for harassment and abuse are overlooked, if not outright touted as features." 
post_collection: "blockchain"
---

In order to responsibly develop new technologies, it is critical to ask "how will this be used for evil?" Technology companies employ red teamers, risk assessors, and ethicists to do just that, or at least so they can say they are. Software engineers have formed initiatives like the Ethical Source movement,[^fn0] recognizing the importance of deeply considering this question.

"How will this technology be used to harass and abuse people?" is a form of that question that too often goes unasked, particularly given that the demographics of people who are most at risk for abuse and harassment tend to be underrepresented in the industry. Apple apparently didn't put much thought into how its AirTag location tracking discs could be misused by stalkers and domestic abusers.[^fn1][^fn2] Target didn't realize how its attempts to market to expectant mothers might out pregnant teenagers to their families.[^fn3] Slack didn't foresee how people might use its invitation feature to send people harassing messages they couldn't block.[^fn4] 

In the frenzy to attract venture capital funding and draw new users and investors into blockchain technologies, this question is once again going unasked. While blockchain proponents speak about a "future of the web" based around public ledgers, anonymity, and immutability, those of us who have been harassed online look on in horror as obvious vectors for harassment and abuse are overlooked, if not outright touted as features. 

# Public transactions

Some cryptocurrency enthusiasts envision a world where cryptocurrencies have replaced dollars and euros (which they refer to as "fiat"; I prefer the term "real money"), and transactions are done on the blockchain rather than with physical cash or transactions through centralized banks. Cryptocurrencies allow for anonymity, and unlike with traditional banking, connecting one's real-life identity to a wallet address is purely optional. This works just fine when you're just trading ape pictures online or planting pixel sunflowers in a play-to-earn game, but falls apart a bit in the theoretical future where you're standing in the checkout line using cryptocurrency to pay for your gallon of milk.

People who keep their cryptocurrency wallet addresses private often do so with good reason: there is very little privacy available once your crypto wallet address is known, because every transaction is publicly visible, and attempts to obscure them often easily unobscured with chain analysis tools. Imagine if, when you Venmo-ed your Tinder date for your half of the meal, they could now see every other transaction you'd ever made—and not just on Venmo, but the ones you made with your credit card, bank transfer, or other apps, and with no option to set the visibility of the transfer to "private". The split checks with all of your *previous* Tinder dates? That monthly transfer to your therapist? The debts you're paying off (or not), the charities to which you're donating (or not), the amount you're putting in a retirement account (or not)? The location of that corner store right by your apartment where you so frequently go to grab a pint of ice cream at 10pm? Not only would this all be visible to that one-off Tinder date, but also to your ex-partners, your estranged family members, your prospective employers. An abusive partner could trivially see you siphoning funds to an account they can't control as you prepare to leave them. As for the marketing machines and predictive algorithms that currently suck in every scrap of data they can to determine what ads to show you, or evaluate your suitability for a mortgage,[^fn5] or try to predict if you'll commit a crime?[^fn6] Well, they've just hit the jackpot.

"Just use a different anonymous wallet", people might say. This is much easier in theory than in practice, since funds in a wallet have to come from somewhere, and it's not difficult to infer what might be happening when your known wallet address suddenly transfers money off to a new, empty wallet. There are certainly ways to successfully and anonymously do it, typically using cryptocurrency tumblers, cryptocurrency ATMs, or even mining fresh coins, but they require technological acumen: knowing how to anonymize transfers, but even to know what can potentially be used to link two addresses to begin with. Even if one succeeds in setting up a separate and anonymous wallet, quite a lot of care must be taken to successfully maintain its anonymity. And as chain analysis technologies progress, tying various wallets and transactions together becomes more accessible to those who wish to do so. In the best case scenario, a person ends up with many different wallets with varying degrees of anonymity, and has to try to keep track of which is which and who's allowed to know about which wallet.

-----

# Immutability

We are seeing a much wider array of products built atop the blockchain these days: video games, social networks, dating applications, porn platforms. Although "blockchain" for many brings to mind cryptocurrency exchanges and NFT trading platforms, where most interaction between users is simple transactions, the space is increasingly including much more full-featured applications. And as applications add in features like commenting and messaging, they become vectors for harassment.

One commonly-touted feature of blockchains is their immutability: once data is written to the blockchain, it is there forever.[^fn8] While this can have useful applications, such as when storing straightforward transaction records, it is a nightmare when you think about its implications for user-created data, particularly when considered through the lens of abuse and harassment. If someone stores revenge porn or child sexual abuse material on a blockchain, it is there forever and cannot be removed. Individual platforms built on the blockchain can choose not to display it, but the data is still there and can be accessed by anyone, either directly or by just choosing to use a different platform built on the same chain. This means that if someone is a victim of revenge porn, the best they can do is reach out to individual platforms and petition them to hide the content—this could be many, many platforms, and even still, the content remains available on the chain to those who wish to look for it.

As a quick aside, the details of how images and other large data would be stored on a blockchain are somewhat in question. For the purposes of argument I am assuming that they would either be stored on-chain, or a pointer to an image stored on a distributed filesystem like the InterPlanetary File System (IPFS)[^fn9] would be stored on-chain. On blockchains like Ethereum, it is prohibitively expensive to store images on-chain—even at today's relatively low Ethereum prices, it costs about $175 to store a kilobyte of data, meaning your average 140KB Bored Ape JPEG would cost about $25,000 to store. However, there are blockchains where image storage is more feasible. It's also quite possible that these platforms would choose to store pointers to images hosted on centralized services like AWS, in which case taking down content becomes quite straightforward—however, though this is common practice in web3 projects today, it is antithetical to web3 ideals and tends to draw scorn from the community when discovered.

Even ignoring the doors this opens for malicious actors, immutable social network content is horrifying given what people post themselves. Imagine if the cringy posts by a twelve-year-old were guaranteed to be available in perpetuity as soon as they were saved. Or if the ill-conceived, drunken ramblings of a person who had few too many were there forever, not deleteable the following day. Imagine if a person uploading a photo of the cookies they just baked didn't realize until after they hit "post" that the envelope on the table in the background showed their home address.

## Airdrops

Furthermore, tokens can be "airdropped" to specific addresses, with no consent required by the recipient. Often used as a way to distribute free NFTs for giveaways and other promotional campaigns, there is nothing stopping someone from airdropping NFTs with abusive content—doxing, revenge porn, child sexual abuse imagery, threats, etc.—into someone's wallet. Some platforms automatically display airdropped NFTs until they are manually hidden by users, increasing the impact of such an attack. And even if someone hides or burns an NFT of this sort, the transaction and its contents remain immutably on the blockchain for anyone to see.

-----

# 1 address ≠ 1 individual

When I receive a harassing message on the social networks I use, it tends to be pretty straightforward to just block the user. Most social networks introduce barriers to creating armies of new harassment accounts to cycle through when one is blocked, typically requiring email or phone verification, and using this data along with device data to propagate any bans to new accounts created with the same details.

With blockchains, the ability to easily create new addresses is a feature and intended use of the technology. When projects have tried to use wallet addresses to identify an individual user, such in the case of Adidas trying to limit an NFT drop to two per person, they have been trivially circumvented.[^fn7] While it's possible that blockchain-based social networks could rely on additional data and identity verification to limit account creation in similar ways to what major social media networks do today, the libertarian ethos behind many of the services springing up in this space make that seem unlikely to catch on.

-----

There is surprisingly little discussion of the enormous potential for abuse built in to blockchain-based technologies, and I've barely even scraped the surface here. Indeed, I did a search for "blockchain harassment" and found little more than promotional materials for some startup apparently solving workplace harassment  ~\*~ with the blockchain ~\*~ (god help me). Both the web3 space and its group of outspoken critics have, to date, struck me as *overwhelmingly* male, which I suspect plays a role in this. Though often described as though it will somehow solve all of the inequalities that are built in to society, the leaders in the blockchain space don't appear to actually be thinking about a lot of them.

-----

# Notes
[^fn0]: [Ethical Source](https://ethicalsource.dev/principles/)
[^fn1]: Ingram, David (December 23, 2021). ["A tracking device made by Apple is showing up in suspected crimes"](https://www.nbcnews.com/news/apple-airtag-showing-up-crimes-rcna9416). _NBC News_.
[^fn2]: Wilson, Mark (April 29, 2021). ["Apple AirTags could enable domestic abuse in terrifying ways"](https://www.fastcompany.com/90630404/apple-airtags-could-enable-domestic-abuse-in-terrifying-ways). _Fast Company_.
[^fn3]: Duhigg, Charles (February 16, 2012). ["How Companies Learn Your Secrets"](https://www.nytimes.com/2012/02/19/magazine/shopping-habits.html). _The New York Times_.
[^fn4]: Statt, Nick (March 24, 2021). [https://www.theverge.com/2021/3/24/22348422/slack-connect-direct-message-abuse-harassment](https://www.theverge.com/2021/3/24/22348422/slack-connect-direct-message-abuse-harassment). _The Verge_.
[^fn5]: Heaven, Will Douglas (June 17, 2021). ["Bias isn't the only problem with credit scores—and no, AI can't help"](https://www.technologyreview.com/2021/06/17/1026519/racial-bias-noisy-data-credit-scores-mortgage-loans-fairness-machine-learning/). _MIT Technology Review_.
[^fn6]: ["Predictive policing"](https://en.wikipedia.org/wiki/Predictive_policing) (January 22, 2022). Wikipedia.
[^fn7]: ["Adidas learns the hard way that limiting the number of NFTs one person can buy is hard"](https://web3isgoinggreat.com/?id=2021-12-17-2). _Web3 Is Going Great_.
[^fn8]: Except when it's not, as I describe in [another blog post]({{ site.baseurl }}{% post_url 2022-01-09-blockchains-are-not-what-they-say %}).
[^fn9]: ["InterPlanetary File System"](https://en.wikipedia.org/wiki/InterPlanetary_File_System) (January 22, 2022). Wikipedia.