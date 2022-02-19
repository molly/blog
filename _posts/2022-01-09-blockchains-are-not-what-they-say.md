---
layout: narrative
title: "Blockchain-based systems are not what they say they are"
author: Molly White
publication-date: 2022-01-09
comments: false
custom_excerpt: "If you go out seeking to learn why blockchains and the systems built atop them are apparently the future of our web, you’ll begin to see some common themes. These fall apart under further scrutiny."
post_collection: "blockchain"
---

If you go out seeking to learn from their proponents why blockchains and the systems built atop them are apparently the future of our web, you’ll begin to see some common themes. Two of the ones I see most frequently are:

- Decentralization: data in blockchains are distributed across innumerable servers run by innumerable people and organizations, rather than stored on servers controlled by one organization
- Immutability: what is written to a blockchain cannot be changed or deleted, unlike more traditional databases

These fall apart under further scrutiny. 

## First, a note on the theoretical vs. the actual

One extremely common phenomenon when discussing issues surrounding blockchain-based technologies is that proponents will often switch between discussing the theoretical implementations of these ecosystems and discussing the ecosystems we have today as it suits their argument.

For example, if you bring up the question of whether the major centralized exchanges could each decide based on instructions from an oppressive government to freeze exchange of tokens belonging to a dissident, you’ll be told that that’s no problem in their theoretical world where a Bitcoin is a Bitcoin and if an exchange won’t accept yours, you can easily find an exchange that will. 

But then if you bring up the question of how these ecosystems will handle someone who decides they want to make an NFT out of child sexual abuse material, they will usually point to solutions[^fn0] predicated on the enormously centralized nature of NFT marketplaces that we’ve ended up with in practice: delist the NFT from OpenSea or a handful of other exchanges so that the vast majority of people trading NFTs never see it, and maybe send a takedown request if there is a centralized service like AWS that is hosting the actual file.

For the purposes of this essay, I will be discussing how these technologies work in practice today, rather than how they could possibly work, maybe, in some future world.

## Decentralization

Proponents of blockchain technologies often tout their decentralized nature—both of the blockchains themselves, but also supposedly of the technologies built atop them. They tend to argue that, unlike popular services that people use every day—Facebook, Google, iCloud—data is not all stored on servers that belong to (or are rented by) a single company. And they are correct that most services people use in their day-to-day life are very centralized. 

But they grossly overstate the amount of decentralization in web3. The data itself is quite decentralized, at least on the popular blockchains, but that’s about where the decentralization ends. If someone wants to build a dApp on a given blockchain, they usually use one of a handful of APIs built by companies like Alchemy to read and write to their blockchain of choice. If someone wants to pull information about a user’s crypto holdings for a finance platform, they use one of a handful of other APIs, and one only needs to look at the ripple effect of a recent CoinMarketCap glitch to see how widely these data sources are used.[^fn6] An enormous amount of trust is being placed in the relatively few platforms through which blockchain data is being funneled, nullifying many of the supposed benefits of the decentralization of blockchains in the first place.

For users, there are a few dominant, centralized products. If they want to exchange currencies, they probably use Binance or Coinbase. If they want to buy or sell NFTs, they probably use OpenSea, which as of late 2021 captured more than 95% of the NFT market share.[^fn1] If they want to join a DAO? Well, they’ll probably need to abandon the blockchain entirely in order to interact with other members, and instead head over to Discord—the centralized, (as yet) blockchain-less chat platform that runs on servers rented from Google. Even the “decentralized” portions of web3 are surprisingly centralized—in December 2021, the self-described “world's leading decentralized exchange”, dYdX, went down during a widespread Amazon Web Services (AWS) outage.[^fn2] And with NFTs, where it is typically not the image data itself that is stored on the blockchain (which would be prohibitively expensive on blockchains like Ethereum) but rather a URL pointing to an image stored elsewhere, many assets are stored in centralized services like AWS, Google Cloud, or Dropbox.

## Immutability

Once something is written to the blockchain, it can’t be changed or deleted. A transaction is final, and can only be reversed by the person on the other end doing the transaction in reverse. Your ape JPEG is your ape JPEG, and when you transfer it to someone else, it is theirs.

Except, of course, that this is not really true. An early and notable example is the case of The&nbsp;Dao, a project that is often described as the first ever DAO.[^fn7] In June 2016, attackers exploited a vulnerability to steal 3.6&nbsp;million&nbsp;ETH (then about $50&nbsp;million) of the project's 11.5&nbsp;million&nbsp;ETH (about $160&nbsp;million). And so the Ethereum blockchain was simply “hard forked”, resetting the funds into a recovery address where they could be returned to the community. This was not a one-off mulligan in the early, Wild West days of blockchains and DAOs: Polygon hard forked after the discovery of a huge vulnerability just this December.[^fn3] Projects have also turned to other techniques to “undo” hacks if they are able to do so before a hacker converts stolen tokens to some other currency—token migrations (also called “token swaps” or “token forks”) restore snapshots of decentralized finance projects, restoring users’ original holdings and dropping the value of the old, stolen tokens to $0. We’ve seen this approach used recently following hacks of Visor Finance and Vulcan Forged, both also in December.[^fn4][^fn5]

We’ve also seen prominent examples of how the myth of immutability can intersect with the myth of decentralization. One is in the NFT space. With NFTs, your ape JPEG is your ape JPEG, unless one of the centralized exchanges decides it isn’t legitimately yours and freezes it. In a truly immutable, decentralized world, where “code is law” and no centralized authority can intervene, a transfer of an asset would be final regardless of whether it was achieved through the proper means. But as we’ve seen with thefts of prominent (and pricey) NFTs such as Bored Apes, if a centralized exchange like OpenSea is sufficiently convinced that an NFT transfer wasn’t legitimate, they can freeze the asset so it can no longer be traded, enormously limiting the amount of value a thief can extract as they are relegated to much less-used exchanges. We see this phenomenon with cryptocurrencies themselves, as well—when centralized exchanges are sufficiently convinced that tokens were improperly transferred (such as via a hack), the addresses holding those tokens are flagged and will no longer be able to trade on major exchanges, making the stolen tokens extremely difficult to sell.

## The worst of both worlds

Blockchain technologies have somehow managed to land in the worst of both worlds—decentralized but not really, immutable but not really. 

If someone steals your ape JPEG, if you’re lucky, OpenSea might delist it and make it much harder for them to turn a profit on it. But you still won’t get your JPEG back, or have the opportunity to cash out on it yourself. You probably can’t take the thief to court, because it is trivially easy for them to anonymize themselves. Even if you could figure out their identity, you’d still be faced with the likely difficulties of a _different_ centralized system (the justice system of the applicable country) trying to hash out as-yet largely unanswered questions about jurisdiction, the actual value of a pointer to a JPEG, and (depending on how the theft was perpetrated) possibly even whether it’s actually illegal to make a smart contract do exactly what it’s coded to do when that is in conflict with what its developer intended.

Instead of being at the mercy of the “big tech” companies like Amazon and Google that monopolize the traditional way of doing things on the web, you are now at the mercy of a few other tech companies that are rapidly monopolizing the blockchain way of doing things.

The immutability of this new world means that if you send someone your tokens, no centralized authority can come in and decide the transaction was invalid and wipe it from the ledger (unless, of course, there is a hard fork). But it also means that there’s no way to undo fraudulent transactions and return funds to their rightful owners. It means that data written to the blockchain is there forever, no matter how heinous it may be, and it is only up to centralized platforms to choose not to expose it (leaving it available to others who may wish to go find it via other services). And even though your stash of Ether may always be your stash of Ether so long as you don’t transfer it, there’s nothing inherently stopping a blockchain from hard-forking, leaving people who decided to stay with the original, unforked version (as it was prior to the rewriting of history after the issue with The Dao, and which is now known as Ethereum Classic) with tokens worth 100x less than the forked version now known as Ethereum, and leaving the new people with no credible claim that their blockchain is really so immutable after all.

## Notes
[^fn0]: I use the term “solution” extremely loosely here, as I don’t think a system where CSA material still remains available, but most people don’t see it, can reasonably be considered an acceptable solution.
[^fn1]: ["What Coinbase’s entry into the NFT market means for OpenSea"](https://qz.com/2073503/coinbase-poses-a-threat-to-openseas-nft-dominance/), _Quartz_. October 14, 2021.
[^fn2]: ["Amazon outage causes seven hour disruption at crypto exchanges, raises questions on 'decentralisation'"](https://www.businessinsider.in/investment/news/aws-outage-shows-that-dexs-arent-are-decentralised-as-expected/articleshow/88186644.cms), _Business Insider_. December 9, 2021.
[^fn3]: ["Polygon loses $2 million to a vulnerability"](https://web3isgoinggreat.com/?id=2021-12-04-2), _Web3 Is Going Great_.
[^fn4]: ["Visor Finance is hacked for about $8.2 million"](https://web3isgoinggreat.com/?id=2021-12-21-2), _Web3 Is Going Great_.
[^fn5]: ["Vulcan Forged users lose a collective $135 million in hack"](https://web3isgoinggreat.com/?id=2021-12-13-2), _Web3 Is Going Great_.
[^fn6]: ["CoinMarketCap Glitch 'Sent' BTC, ETH to Billions; Affected Coinbase, Crypto.com"](https://cryptonews.com/news/coinmarketcap-glitch-sent-btc-eth-billions-affected-coinbase-cryptocom-yahoo-finance.htm), _CryptoNews_. December 15, 2021.
[^fn7]: [The Dao](https://en.wikipedia.org/wiki/The_DAO_(organization)). Wikipedia.
