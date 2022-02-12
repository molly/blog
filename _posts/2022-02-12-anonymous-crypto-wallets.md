---
layout: narrative
title: "Anonymous cryptocurrency wallets are not so simple"
author: Molly White
publication-date: 2022-02-12
comments: false
custom_excerpt: "How straightforward is it really to transact anonymously with today's popular cryptocurrencies?" 
post_collection: "blockchain"
---

In ["Abuse and harassment on the blockchain"]({{ site.baseurl }}{% post_url 2022-01-22-abuse-and-harassment-on-the-blockchain %}), I wrote about some of the downsides of public ledgers that are particularly severe if a wallet is publicly tied to a person's real-life identity. One frequently proposed solution to this problem is for users to create multiple anonymous wallets to be used for transactions that require more privacy, and this is a topic I would like to delve into a bit more.[^fn1]

## Levels of anonymity

A crypto wallet is identified by a string of characters like <tt>0x3781d92e54<wbr>49b5b689fee308ded<wbr>44882085b6312</tt>. There is nothing that *inherently* ties one to a given individual, although those ties may exist to varying degrees: At the broadest level, it's sometimes known publicly that an individual controls a specific crypto wallet, either through self-disclosure or through the result of investigative work. There is also a level at which the owner of a wallet is not public knowledge, but it is known to a company: for example, to create a cryptocurrency wallet using the popular Coinbase service, individuals have to verify their identities with the company for anti-money laundering purposes (known as KYC, or "know your customer"[^fn7]). This information is kept private by Coinbase and not publicly tied to an account, though it can be demanded by law enforcement. Finally, someone can create a crypto wallet in various ways that do not require disclosing their identity to a company or service, and can take additional steps like using proxies to further obscure their identity.

It is fairly trivial at the moment for a person to operate at that second layer of anonymity, where their identity is known to various companies (and thus to law enforcement if need be), but not publicly. But that third level, what might be described as true anonymity, is what cryptocurrencies have been promising from the earliest days: no interference from governments and the legal system, no one to tell you whether or not you can send or receive currency based on who you are, no ability to tie a transaction back to an individual. And that level is becoming increasingly unachievable.

## Funding an anonymous wallet

As I wrote previously, the true challenge with anonymity comes not from *creating* a fresh new wallet. It comes from *funding* that wallet without tying it back to an identifiable source. 

### Mining

Back in the day,[^fn2] someone could simply mine some Bitcoins or Ether and they'd be good to go with fresh new coins, not tied to anything because they'd just sprung into existence. But the whole idea behind proof-of-work chains like Bitcoin and Ethereum is that tokens become increasingly more difficult to mine over time. Whereas ten years ago someone could reasonably set up their personal computer to mine away while they weren't using it, these days a person is competing with enormous mining farms with sophisticated purpose-built equipment. 

Although it is simply no longer very feasible for a person to try to mine Bitcoin or Ethereum individually using their personal computer, there are still technically (though not advisedly) ways to do so—normally by pooling computing resources with others. The average cost of residential electricity in the United States as of November 2021 was around 14 cents per KWh.[^fn3] I have a pretty decent, albeit several-year-old, desktop computer with a GTX 1070 Ti graphics card, which has a hashrate of 27–30 MH/s (depending who you ask) if you are mining Ethereum. Subtracting electricity costs, I could mine at a whopping profit of about $0.84 a day, though this is assuming the best as far as the card running at 100% for 24 hours without overheating. Assuming my GPU didn't melt, I might have $100 of ETH to play with after four solid months of mining 24 hours a day, making huge assumptions of course about the stability of price and mining difficulty. If a person didn't happen to have a fairly respectable dedicated GPU to play with like I do, they would be lucky to break even on electricity costs, and might actually _lose_ money trying to do it. Even if they were willing to take a loss in order to acquire coins with no transaction history, it would take them a very long time to do it this way.

### Converting USD to cryptocurrency

Now that the "just mine new coins" question is out of the way, let's talk about more common ways of trying to fund a new wallet. If someone has cash sitting next to them, how do they get that into their fresh new anonymous wallet without tying it back to themselves? There is no shortage of services where they could connect their bank account and buy cryptocurrencies of their choosing, but as soon as their bank account is involved they lose anonymity.

If they live in a fairly populous area, they might have the option to walk to the neighborhood Bitcoin ATM,[^fn8] but they face challenges here as well. Assuming they can stomach the huge transaction fees (often 10–20%), cryptocurrency ATMs are still regulated. If they're lucky they might find an ATM that doesn't require much identification (though often at the expense of even *higher* fees), but many of these ATMs require at least a phone number if not photo identification, and the larger the transaction the more identification tends to be required.

Another option is meeting up with someone and handing them cash in exchange for crypto. Needless to say this is a risky endeavor for many reasons, not least that they are now taking ownership of currency whose past history may be attributed to them, unless they manage to convince law enforcement that they really did hand some guy in a park a suitcase full of cash for some Bitcoins, and of course only _after_ he finished doing shady shit with it.

### Transferring existing crypto

Cryptocurrency transactions on these popular blockchains are public record, and so transferring money from an existing known wallet is out of the question when trying to maintain anonymity. A person could convince a friend to transfer funds, but then the wallet is just tied to their friend.

Perhaps the best way to transfer existing crypto without it being linked back is by using a cryptocurrency tumbler (also called a "mixer").[^fn9] These are services that try to break the link between a source wallet and destination wallet by pooling together large amounts of currency from many sources, then distributing it back out at random times to destination wallets. Although it's possible to see that one wallet made a transfer to a mixer, and that another wallet received a transfer from a mixer, it's extremely difficult to connect the two due to the amount of money traveling through these services and the randomization involved. However, this is increasingly becoming less true, as more sophisticated technology is being developed to make it easier to un-tumble tumbled funds.

## Using those funds

So, a person has managed to get the money they need into their anonymous wallet without linking it back to themselves. They're golden, right?

Well, not exactly. Let's even generously assume that this person is able to maintain the surgical care that was required to create and fund an anonymous wallet, in perpetuity: They never confuse it with their other wallets and perform an ill-advised transaction that can be linked back to them, they never make enough transactions that can be compared to their known actions and used to infer a link, they never use the address with any of the *many* services that require KYC self-identification these days,[^fn7] and they are careful to always use a privacy-focused VPN[^fn4] when accessing web-based crypto services so their real IP isn't logged.[^fn5]

Now what? Well, if they're holding cryptocurrency for its speculative value, they'll have no problem—it'll just sit in the wallet gaining or losing value based on how the given currencies perform. If they want to make transactions within the cryptocurrency sphere, like exchanging one cryptocurrency for another, or exchanging it for other crypto-based assets like NFTs, they'll probably have little issue.

But what we have begun to see with increasing frequency is users of wallets with anonymized funds encountering major difficulties when it comes to taking their cryptocurrencies and exchanging it back into traditional currency. It's not particularly easy to find people willing to hand you a stack of cash in exchange for your cryptocurrency, no questions asked. For those willing to delve into the dark web it may be a little easier, though that is hardly without risk.

While decentralized finance platforms have allowed all kinds of trading *between* cryptocurrencies, there are few that actually allow you to cash back out into traditional currency, and the ones that do are seeing less and less usage.[^fn6] This is understandable: although cryptocurrencies are a bit of an unregulated free-for-all at the moment, as soon as traditional money enters the picture, so too do the regulations—and many of them.

It is precisely this "off-ramp problem" that has stymied criminals and legitimate users of cryptocurrencies alike. The identity of Satoshi Nakamoto, the pseudonymous inventor of Bitcoin, has remained unknown for almost 15 years largely because they haven't tried to *do* anything with the enormous amount of Bitcoin they hold. Nakamoto effectively vanished in 2010, and the 750,000 to 1,100,000 BTC they hold has gone untouched, despite its value of tens of billions of dollars. The perpetrators of large cryptocurrency hacks have struggled to cash out cryptocurrency if it isn't immediately tumbled (and tumbling becomes challenging with larger amounts), and the ill-gotten profits of some such hacks have simply remained dormant or bounced within the cryptocurrency ecosystem for years afterwards.

-----

Read the follow-up to this post, "[Cryptocurrency off-ramps, and the pressure towards centralization]({{ site.baseurl }}{% post_url 2022-02-12-off-ramps %})".

## Notes

[^fn1]: It is worth acknowledging that there are "privacycoins" like Monero that enable private, anonymous transactions, though they have their own unique sets of issues as a result that are out of scope for this post. These are not the focus of this essay, which is instead focused on the most popular cryptocurrencies (Bitcoin, Ethereum, etc.) which feature public transaction records.
[^fn2]: In what one might reasonably call [the early days]({{ site.baseurl }}{% post_url 2022-01-14-its-not-still-the-early-days %})...
[^fn3]: "[Average Price of Electricity to Ultimate Customers by End-Use Sector](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a)", U.S. Energy Information Administration.
[^fn4]: This is not a given with VPNs, which oven themselves require self-identification or store extensive logs that could be used to identify a user.
[^fn5]: Exposing one's real IP allows websites and apps to trivially see approximate geolocation of a user, and with a subpoena to an ISP can sometimes reveal specific user identities.
[^fn6]: ["Cryptocurrency Crime and Anti-Money Laundering Report"](https://ciphertrace.com/2020-year-end-cryptocurrency-crime-and-anti-money-laundering-report/). Mastercard, February 2021.
[^fn7]: ["Know your customer"](https://en.wikipedia.org/wiki/Know_your_customer). Wikipedia. February 12, 2022.
[^fn8]: ["Bitcoin ATM"](https://en.wikipedia.org/wiki/Bitcoin_ATM). Wikipedia. February 12, 2022.
[^fn9]: ["Cryptocurrency tumbler"](https://en.wikipedia.org/wiki/Cryptocurrency_tumbler). Wikipedia. February 12, 2022.