---
layout: narrative
title: "Why I'm not laughing at C Plus Equality"
author: Molly White
publication-date: 2013-12-14
custom_excerpt: "Someone wrote a satirical readme for a &quot;feminist programming language&quot; and it wasn't very funny."
---

<strong>Trigger warning:</strong> Mentions of sexual assault, rape, and transphobia.

On Wednesday, I turned in a final paper titled "Addressing the gender gap in free and open source software." This was the culmination of a semester of research into what discourages women from contributing to software, both free and proprietary, and how the software communities exacerbate the issue. In my research, I learned that only 28% of people in technical roles for proprietary software firms are women. I learned that 1.5% of contributors to free and open source software are women.<sup><a href="#ref1">1</a></sup> I read about women who join software communities and instantly receive sexist and sexual messages from other contributors, and about the subtle and often subconscious ways that the tech industry and projects can discourage women from contributing. I researched the <a href="http://geekfeminism.wikia.com/wiki/PyCon_2013_forking_and_dongles_incident">PyCon "dongles" incident</a> and <a href="http://blogjustine.wordpress.com/2013/10/18/the-reaction/">Justine Arreche's sexual assault</a>. I saw these women trying to stand up against sexism and sexual assault, but get inundated with hateful responses. Some of these responses were death and rape threats; more prevalent were peope telling them they needed to "lighten up", to "take a joke". They were informed that they were just "overreacting". Women, myself included, who speak up about issues like sexism, harassment, and even assault in technical spaces receive this reaction constantly.

<h2 id="cplusequality">C Plus Equality</h2>

When I saw the Github-then-Bitbucket<sup><a href="#ref2">2</a></sup> repository <a href="https://bitbucket.org/FeministSoftwareFoundation/c-plus-equality">C Plus Equality</a>, published by a user named <a href="https://bitbucket.org/FeministSoftwareFoundation/">Feminist Software Foundation</a>, my shields went up. The repository's README explains:
>
> C+= (pronounced either C-plus-Equality, or See Equality) is a feminist programming language, created to smash the toxic Patriarchy that is inherent in and that permeates all current computer programming languages.

The repository consists of some code, but the main event is the 2,000+ word README that outlines the programming language. It's full of quips about "objectification-oriented programming" and "in<em>her</em>preters".

<h2 id="_notabene_"><em>Nota bene</em></h2>

Since its publication, the repository has attracted attention online, some of it negative. This apparently did not go unnoticed by the creators of the repository, as they briefly<sup><a href="#ref3">3</a></sup> added a "<a href="https://bitbucket.org/FeministSoftwareFoundation/c-plus-equality/commits/55cf92001a3188967e7adb7bd7b2ce2a9a6f225e/raw/"><em>nota bene</em></a>":
>
> Nota bene: In light of recent events, we'd like to express our concern as to the blatant hostility some people in the social media have against the original, old-school spirit of playfulness that same call the 'hacker spirit'.  The purpose of this software project is two-fold: one, to explore the implications of 'feminist-inspired logic' on computer programming languages; and two, to explore how much 'hacker playfulness' we could get out of this process.  However, too many people, it seems, are none the wiser and perceived our project as something that is unabashedly anti-women, some even accusing us of 'harassing' women.  How could a page so self-evidently playful be sincerely misogynistic is beyond all our comprehension, save for the lament that too many people nowadays lack the ability to understand other people before giving in to knee-jerk reactions of hatred and selfishness.  Indeed, we dare say, it is these so-called self-brandished 'feminists' who take offence at almost everything that is making females a hard time in the computing industry by perpetuating the stereotype of the eternal victimhood of a female programmer.  To this the Feminist Software Foundation is deeply disappointed, and would like to send a pull request to you all to remove that little chip on your shoulder, and enjoy the world a little bit more.

Let's see. First they explain that their repository is no more than them displaying the "original, old-school spirit of playfulness that same call the 'hacker spirit'." They express horror that this playfulness could be interpreted as "sincere misogyny". They then insult "so-called self-brandished 'feminists' who take offence at almost everything" for the issues faced by women in tech.

<h2 id="sohowbadactuallyisit">So, how bad actually is it?</h2>

I poked through the README to see what all the fuss was about. It would appear that the criticism they were receiving was entirely just; the repository is full of negative stereotypes against feminists, mockery of various groups of people, and transphobia. Some examples:

<h3 id="negativestereotypesoffeminists">Negative stereotypes of feminists</h3>

The misandrist:<sup><a href="#ref4">4</a></sup>

> ...Instead, C+= is interpreted, which fosters communication, itself a strong female trait....
>
> ...Women are better than men with natural language....

The cis- and/or heterophobic:

> ...These are all real values greater than 0, the only exception is the value of <code>WHITE_HETEROSEXUAL_CISGENDER_MALE_PRIVILEGE</code> which is set to infinity, and also the value of <code>PATRIARCHY</code>, which is set to <code>sqrt(-1)</code>....
>
> ...Since everyone is equal (with the exception of cishet men, who are already excluded as per the license), this always evaluates to true....

The social justice warrior:<sup><a href="#ref5">5</a></sup>

> ...Instead of "running" a program, which implies thin privilege and pressure to "work out", programs are "given birth"....
>
> ...Not calling the preferred data type leads to a <code>PrivilegeNotCheckedException</code>, or <code>PrivilegeNotCheckedTriggerWarning</code>...

The whiny and overemotional:

>...The determination of this depends on how the underlying logic feels at the moment....
  
> <code>printf(); == yell();</code>

<h3 id="mockeryof">Mockery of...</h3>

... discussion of rape culture

> ..."Forking" will henceforth be called "consenting", and it is entirely up to the program to decide if the consent stands valid, regardless of the progress of the system clock....
>
> ...There is to be no encapsulation: don't tell me to protect my members, tell other functions not to access them!...
  
> ...Every variable has a random percentage of consent associated to it. variable can be affected with a number if and only if it is consenting. Failure to do so will result in C+= throwing a <code>ForcedInsertionTriggerWarning</code>....
>
> ...No means no, and yes could mean no as well. Stop raping women....

... people who are triggered by various issues

> ...Should there be any exceptions from running the program, C+= will throw a <code>Trigger Warning</code>....

<h3 id="transphobia">Transphobia</h3>

> ...Instead, the variable is free to choose its own type when it is utilised/-ized. This preserves the variable's right to self-identify as any datatype it feels that it is....
>
> ...A number can be an integer or a a double or a long if xir so identifies xirself. All numerical values will thus be represented as xe, and it is up to the value xirself to choose to identify as whatever xir chooses to identify as....
  
> ...Who's to say a number can't be a string if it believes it is?...
>
> ...Data structures and variables of all kinds have a random chance of deciding that they don't "feel right", and are actually a different type, and must henceforth be referred to ONLY as its preferred data type....

The code files, sufficed with <code>.cpp</code> or <code>.Xe</code>, are small, and contain similar transphobic and social justice warrior jokes. One even goes so far as to end with a rape-joke-turned-exception: <code>void set(trans value) {post_on_tumblr trigger("FORCING AN IDENTITY DOWN MY THROAT, RAPE, RAPE, RAPE, RAPE, RAPE\n");}</code>

<h2 id="response">Response</h2>

To the <em>nota bene</em>, and to the creators of C Plus Equality: this is not a playful joke, and you failed to reach your mythical intersection at which playfulness overshadows misogyny. Your demands that people "lighten up" about the repository are just another entry in the list of instances where people speak up about sexism in tech and are told to take the joke. Your document is a collection of sexist, transphobic jokes and negative stereotypes, and I'm not laughing.

<h2 id="notes">Notes</h2>

<a id="ref1">1.</a> Nafus, Dawn. "'Patches Don't Have Gender': What Is Not Open in Open Source Software." <em>New Media &amp; Society</em> 14.4 (2012): 670. Web.

<a id="ref2">2.</a> The original, <a href="https://github.com/FeministSoftwareFoundation/C-plus-Equality">Github-hosted repository</a> has been disabled, with the message: "Access to this repository has been disabled by GitHub staff. Contact support to restore access to this repository."

<a id="ref3">3.</a> And by briefly, I mean <em>really</em> briefly. It was added 14 Dec 2013 00:35:41 and removed twenty minutes later with the commit message, "Some people are just sensitive, you know."

<a id="ref4">4.</a> Sam Killerman's "<a href="http://everydayfeminism.com/2012/12/6-reasons-why-so-many-people-believe-feminism-hates-men/">5 Reasons Why So Many People Believe Feminism Hates Men and Why They’re Not True</a>" provides a good overview of the misandric feminist stereotype.

<a id="ref5">5.</a> From <a href="http://www.urbandictionary.com/define.php?term=social%20justice%20warrior&amp;defid=5763529">Urban Dictionary</a>: "A pejorative term for an individual who repeatedly and vehemently engages in arguments on social justice on the Internet, often in a shallow or not well-thought-out way, for the purpose of raising their own personal reputation. A social justice warrior, or SJW, does not necessarily strongly believe all that they say, or even care about the groups they are fighting on behalf of."
