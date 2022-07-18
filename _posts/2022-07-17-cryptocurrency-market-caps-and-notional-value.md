---
layout: narrative
title: "Cryptocurrency &#34;market caps&#34; and notional value"
author: Molly White
publication-date: 2022-07-17
custom_excerpt: "A naive equation works well when estimating the value of small quantities of popular crypto tokens, but it's also being used to estimate values of illiquid tokens and the market capitalization of all of crypto. Journalists are publishing misinformation and uncritically repeating these figures, helping to prop up the belief that crypto is a far larger industry than in reality."
post_collection: "blockchain"
cc: true
---

With the recent collapse of cryptocurrency prices, news headlines have been full of references to a "$2 trillion market crash" and crypto-billionaires being downgraded to the lowly millionaire bracket. During the bull period, headlines exclaimed that ordinary people were having windfalls of tens or hundreds of thousands of dollars, or creating crypto tokens with massive, dollar-denominated market capitalization practically overnight.

But where do these numbers come from? Is each cryptocurrency project sitting on a bank account with actual dollar bills to match their supposed market cap? Of course not. Even the crypto tokens that *do* claim to be doing this aren't doing this.[^fn1]  It's clear there isn't a real dollar in the crypto ecosystem for each reported dollar of market cap, but beyond that, it doesn't even seem to be close.[^fn2]

## Contents
{:.no_toc}

* ToC
{:toc}

## Like it or not, crypto is valued in dollars[^fn3]

When someone tells you that a pile of crypto tokens are "worth" X dollars,[^fn3] what does that mean?

The urge to represent crypto prices in dollars makes sense, given that most average people probably couldn't tell you if a Bitcoin (BTC) was worth on the order of dollars or tens of thousands of dollars, and far fewer people would be familiar with the prices of minor altcoins (quick! what's a Baby Doge Coin trading at?) Even people who know that Ether (ETH) has been trading somewhere around $1,100 (plus or minus a few hundred depending on the day) will usually prefer to do the mental math when someone refers to a quantity of it, because even crypto people tend to think of the world around them in terms of the traditional currency they use for day-to-day transactions. 

There are crypto proponents out there who will say things like "1 BTC = 1 BTC", and that the dollar price doesn't matter, but that's marketing—note how that only becomes a common refrain when Bitcoin isn't doing so well against the dollar. There are crypto critics out there who will say we shouldn't use dollar values at all for the reasons I'm about to outline, but that's frankly unrealistic. I don't entirely disagree with the premise—after all, the whole reason I'm writing this article is because people are being misled by it—but the fact of the matter is that when a crypto project is hacked and I need to decide if it's a sufficiently significant event to include in [*Web3 is Going Just Great*](http://web3isgoinggreat.com/), I too look up the price of whichever token was stolen and get to multiplying.

## The crypto value equation

To get the dollar value of a pile of crypto tokens, we take the price of that cryptocurrency on an exchange and multiply it by the quantity of tokens in the pile. To get the market cap, we take the price of that cryptocurrency on an exchange and multiply it by the total number of tokens in circulation.[^fn4] To get the total market cap of all cryptocurrencies, we sum up all of their market caps. There are many cryptocurrency exchanges, trackers, defi platforms, and other projects out there that show the market cap of various tokens. Each of them calculates it in roughly this way, although there are variations: some use total supply or fully diluted supply to represent the number of tokens, and some employ various strategies to try to filter outlier data. CoinMarketCap is a popular tracker, and is widely cited in both crypto-specific and mainstream media when referring to specific cryptocurrencies' market caps and the market cap of crypto as a whole, so I refer to it throughout.

This naive equation works well for estimating the value of fairly small quantities of popular, liquid cryptocurrencies. If a trader holds a couple ETH, or even hundreds of ETH, chances are that they could sell them for dollars at the current price on an exchange, minus fees.[^fn5] Retail traders who hold Bitcoin, Ether, or any other reasonably popular cryptocurrency just don't tend to hold the quantities that would require them to second guess the dollar value that their crypto app shows them.

But when we're talking about market caps, large quantities of a token, or any quantities of any of the many minor tokens that exist, there are some additional factors that need to be considered.

## Many factors introduce error

### Price

The price of a cryptocurrency is, as with most things, whatever someone else is willing to pay for it. But how is price determined for brand new coins? If I decide to hop on the crypto bandwagon and create MollyCoin, and I write some code to create a million MOLLY tokens out of thin air, how much are they worth? In reality, approximately $0 — I've put no real money into the system, and they don't represent any good or service that might be considered valuable. But if I can convince someone to buy one MOLLY token from me for $1 on one of the many exchanges that will allow you to exchange any token under the sun, suddenly we have a price! And even though only one token has ever traded hands, because market cap is calculated by taking the price per token on an exchange and multiplying it by the number of tokens circulating,[^fn6] MollyCoin now has a market cap of $1 million.

Most cryptocurrency trades don't involve dollars, but rather other cryptocurrencies like Bitcoin or Ether. A much more likely scenario than the one above is that I convince someone to give me .00074 ETH (around $1 at the time of writing) for my one MOLLY token, and voila: $1 million market cap (because market caps are almost always displayed in dollars[^fn3]) despite MOLLY never having been traded against the dollar.

Now, imagine I created exactly the same number of MOLLY tokens as there are ETH tokens. If I can convince someone to give me 1 ETH for 1 MOLLY, now MollyCoin has the same market cap as Ethereum (around $165 billion at the time of writing). *Even if* we assume that there is actually $165 billion worth of real, fiat currency floating around in the system to form the reported Ethereum market cap, we now have two tokens each ostensibly worth $165 billion, with no additional fiat being introduced. Each dollar that is backing some amount of ETH is also "backing" MollyCoin — it's being counted twice. It should be clear in this contrived example that there is no way people could actually cash out all MOLLY and ETH tokens and somehow wind up with $330 billion in fiat. Now extrapolate that to the actual cryptocurrencies that exist today—how much actual value exists in the system, and how much is just double, triple, or _n_-times counting the same dollars?

Now, what happens if I convince someone to buy my highly illiquid crypto token with some other highly illiquid crypto token? MollyCoin's dollar-denominated market cap is now not only arbitrarily based on however many of those tokens I could convince someone to give me for one MOLLY, but it's *also* now based in the arbitrary dollar-denominated "value" of that token as well. And so on.

Of course, MOLLY's "total value" is all fake, and chances are probably quite low that I can find some sucker to buy the remaining 999,999 MOLLY from me for dollars (or ETH or anything else). But the press can still write that I'm an overnight millionaire, or that MollyCoin has a market cap of $1 million. Furthermore, if I can convince CoinMarketCap to include MollyCoin alongside the 20,249 (and counting) cryptocurrencies they track, the total market cap of crypto will have miraculously increased by $1 million just like that.

### Liquidity

Now imagine I did find a buyer for my 999,999 MOLLY and I make out like a bandit. They paid me $999,999 for my tokens, and I happily sold them. Their crypto trading app shows them they hold 999,999 MOLLY worth $999,999. But in a week when they check back in on their purchase and see that it hasn't generated any returns, they might find themselves in a tough spot: trying to sell all of these tokens that have no *liquidity*. No matter what the price is, in order for someone to be a seller there must be a buyer, and that is not always the case with crypto.

The recent token transfers pages on blockchain explorers like Etherscan or BSCScan show a neverending stream of trades of often bizarrely named and extremely illiquid new coins like "CatKingToken" ($2,200 liquidity),  "Doge World Cup" ($0 liquidity), and "SpaceDogezilla" ($8,060 liquidity). There are some traders who like to try to pick the next shitcoin they hope will "moon" like Shiba Inu or Dogecoin once did, hoping that one early, against-all-odds gamble will pay back massive returns. Most of the time they wind up with worthless tokens they can't sell at all, much less flip for a profit or even resell to break even.

The larger tokens tend to have reasonable liquidity for most retail-sized quantities, but as you begin to go further and further down the list, chances decrease that a person could offload even fairly small numbers of tokens without impacting its price.

Even the most popular and liquid cryptocurrencies can experience chaos around large enough sales, even if the overall token price is not significantly affected. In June, a crypto whale[^fn14] suddenly traded 93,000 ETH (around $112 million based on the price at the time) for various stablecoins, emptying much of the liquidity pool on the top decentralized exchange, Uniswap, and causing the ETH price on that exchange to plummet to $950 in a "flash crash".[^fn7] Ethereum is the token with the second-largest market cap on CoinMarketCap.

Also in June, the DAO behind the Solana lending platform Solend had to decide whether to take emergency action to avoid the sudden automatic sale of some of a borrower's Solana collateral. The impending liquidation of 20% of the whale's position, or 1.14 million SOL (~$21 million at liquidation price), was enough to concern Solend members that "it'd be difficult for the market to absorb such an impact", and that it could even threaten the  Solana network's stability. Amy Castor wrote, "Make no mistake: this was an exit, not a loan. The whale essentially *sold* a huge amount of SOL for two highly liquid assets — at a substantial discount, granted, but that amount of SOL would have crashed the market otherwise."[^fn15] Solana ranks #9 on CoinMarketCap's list.

### Wash trading

Wash trading is so common in crypto that the CEO of the world's largest crypto exchange apparently forgot it was illegal recently.[^fn8] It is particularly prevalent with NFTs, where some marketplaces outright encourage the behavior.[^fn9] When someone wash trades an NFT, they sell it between wallets they control, or wallets controlled by co-conspirators, for increasing amounts to try to mimic organic demand. At the end of it all, they have an NFT that's "worth" considerably more than when they started, despite no real person actually being willing to pay more for it. Sometimes the new pricetag alone is enough to artificially create demand and sometimes it's not, but it quite often appears to be more than sufficient to trick journalists for publications like the *New York Times* into reporting on "record-breaking" NFT sales[^fn10]—and *that* often accomplishes wash traders' goals of driving attention to the project.[^fn11] Media outlets also eagerly run headlines on celebrities and influencers "buying" NFTs, only for researchers to discover a web of transactions that suggest they're quietly being paid to promote NFT projects as though they are authentically interested—in violation of FTC rules, by the way.[^fn12]

## Why does any of this matter?

The "market cap" measurement has become ubiquitous within and outside of crypto, and it is almost always taken at face value. Thoughtful readers might see such headlines and ask questions like "how did a '$2 trillion market' tumble without impacting traditional finance?", but I suspect most accept  the number.

When crypto projects are hacked, there are headlines about hackers stealing "$166 million worth" of tokens that in reality amounted to 2% of that amount (around $3 million) after hackers' attempts to sell illiquid tokens caused the price to crash.[^fn13] I know because I've written some myself—it's an easy habit to slip into.

When NFTs are stolen, large numbers are thrown around without any clarity as to whether they are the original prices paid by the victims for the NFTs, the prices netted by the thiefs when flipping them, the floor prices, or some other value.

All of this serves to legitimize cryptocurrency as though it is a much bigger industry than it is, with far more money floating around than there is. It serves to perpetuate the narratives that NFTs are "worth" far more than they could likely fetch at auction, or tend to appreciate in value quickly, encouraging more people to buy in to projects that are likely to result in losses. Stories about "crypto-millionaires" and -billionaires encourage more people to put their real money into the system—something it desperately needs—not realizing that they may be exchanging it for "gains" on a screen that can never translate into reality.

## What needs to change?

Most importantly, there needs to be regulation and enforcement around inauthentic, predatory behavior in crypto—be it wash trading, undisclosed promotions, or intentional price manipulation.

Crypto exchanges and trackers should be clear about how market caps are being calculated—namely, which are being extrapolated only from trades against other cryptos, and essentially double-counted. They also need to be clearer about the enormous margins of error in their calculations: the entire market cap of crypto is represented on CoinMarketCap down to a tenth of a cent, despite that level of precision being nowhere near possible.

Finally, journalists need to understand the true meaning of "market cap" and dollar value when it comes to cryptocurrency, and convey that to their readers. Careful word choice can make a difference: I often write about "Crypto tokens notionally valued at $X", or "NFTs priced at $X", or "theft of crypto tokens priced at $X (based on the token value before the hack)". More than anything, journalists should question everything in an industry where there is *always* an incentive to promote, inflate, and exaggerate.

## Further reading
* Castor, Amy. "['How can $24B in tethers move a $650B Bitcoin market cap?' and other mathematically illiterate questions](https://amycastor.com/2021/01/20/how-can-24b-in-tethers-move-a-650b-bitcoin-market-cap-and-other-mathematically-illiterate-questions/)". January 20, 2021.
* Gerard, David. "[Your guide to the crypto crash — Terra UST, Bitcoin and El Salvador ](https://davidgerard.co.uk/blockchain/2022/05/21/your-guide-to-the-crypto-crash-terra-ust-bitcoin-and-el-salvador/)". May 21, 2022.

## Notes

[^fn1]: Tether (USDT) and Circle's USDC are the top two USD-pegged stablecoins, and both have at various times claimed to always have $1 in cash in a bank account for each token. By now it has been shown that this was not true for either token ([Tether](https://www.ft.com/content/529eb4e6-796a-4e81-8064-5967bbe3b4d9), [USDC](https://www.bloomberg.com/news/articles/2021-08-11/coinbase-drops-promise-of-token-s-cash-backing-that-wasn-t-true)). Tether, for its part, has mostly stopped trying to make this claim and now just claims to be backed by *something*; USDC claims that *now, for real this time,* it is backed by cash <small>and US treasuries</small>. Neither has been properly audited to confirm their claims.
[^fn2]: See analyses by [David Gerard](https://davidgerard.co.uk/blockchain/2021/09/21/news-bitcoin-miners-cant-sell-their-bitcoins-sushiswap-theft-coinbase-lend-crypto-seasteading/) and [Nicholas Weaver](https://twitter.com/ncweaver/status/1539993981013983234) on miners having difficulty selling their Bitcoins.
[^fn3]: Or euros, or yen, or any other fiat currency.
[^fn4]: "[FAQ](https://coinmarketcap.com/faq/)". CoinMarketCap.
[^fn5]: There are *other* difficulties people encounter with crypto → fiat "off-ramps", which I explain in "[Cryptocurrency off-ramps, and the pressure towards centralization]({{ site.baseurl }}{% post_url 2022-02-12-off-ramps %})", but for the purposes of this post we will assume that our hypothetical retail trader doesn't mind submitting [KYC](https://web3isgoinggreat.com/glossary#kyc) verification and that both they and the crypto tokens they hold are deemed to be above-board by their exchange of choice.
[^fn6]: Although CoinMarketCap and other trackers tend to distinguish between *total* tokens and *circulating* tokens, they define circulating supply as the approximate number of tokens that are hypothetically available to be traded rather than the number that are routinely trading hands. Although all of my hyptothetical one million MOLLY except for one have never gone anywhere, and so wouldn't generally be considered "circulating" in the normal sense of the word, CMC uses the term more to mean the number of tokens that *could potentially* be circulating. It primarily differs from the total number of tokens by attempting to exclude the number of tokens that are irretrievably lost—sent to burn addresses or otherwise permanently inaccessible addresses—or reserved or otherwise unavailable to the public market. Generally speaking, a token's circulating supply is provided by the team behind it.
[^fn7]: Castor, Amy. "[The tale of a whale who took Solend's money](https://amycastor.com/2022/06/20/the-tale-of-a-whale-who-took-solends-money/)". June 20, 2022.
[^fn8]: [Tweet](https://twitter.com/cz_binance/status/1545451961222324225) by Changpeng Zhao on July 8, 2022.
[^fn9]: "[87% of trades on LooksRare NFT platform reported to be wash trades](https://web3isgoinggreat.com/?id=looksrare-nft-platform-wash-trades)", _Web3 is Going Just Great_.
[^fn10]: Reyburn, Scott. "[JPG File Sells for $69 Million, as 'NFT Mania' Gathers Pace](https://www.nytimes.com/2021/03/11/arts/design/nft-auction-christies-beeple.html)", _The New York Times_. March 11, 2021.
[^fn11]: Castor, Amy. "[Metakovan, the mystery Beeple art buyer, and his NFT/DeFi scheme](https://amycastor.com/2021/03/14/metakovan-the-mystery-beeple-art-buyer-and-his-nft-defi-scheme/)". March 14, 2021.
[^fn12]: "[Justin Bieber "bought" an NFT for $1.3 million. But he didn't pay for it.](https://web.archive.org/web/20220602104111/https://dirtybubblemedia.substack.com/p/justin-bieber-bought-an-nft-for-13?s=r)". Dirty Bubble Media. February 3, 2022.
[^fn13]: "[An attacker steals $3 million from the PAID Network](https://web3isgoinggreat.com/?id=attacker-steals-3-million-from-paid-network)", _Web3 is Going Just Great_.
[^fn14]: A "whale" is a crypto trader who holds a very large amount of cryptocurrency.
[^fn15]: "[Solend DAO passes proposal to take over the account of a large holder with a position that poses systemic risk](https://web3isgoinggreat.com/?id=solend-dao-passes-proposal-to-take-over-the-account-of-a-large-holder-with-a-position-that-poses-systemic-risk)", _Web3 is Going Just Great_.