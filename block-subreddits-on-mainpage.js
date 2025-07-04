// ==UserScript==
// @name         Reddit Block Subreddits (New Reddit, July 2025)
// @namespace    https://www.greasespot.net/
// @version      2.0
// @description  Hide posts from selected subreddits on new Reddit (shreddit-post version)
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of subreddits to block (lowercase, no "r/")
    const blockedSubs = [
        'toronto', 'popculturechat', 'waterloo', 'winnipegjets', 'londonontario',
        'torontorealestate', 'torontobluejays', 'torontoraptors', 'golf', 'mtg',
        'habs', 'markham', 'justbuyxeqt', 'hockey', 'halifax', 'raptors', 'leafs',
        'loveislandtv', 'novascotia', 'ottawa', 'montreal', 'quebec', 'marvelrivals',
        'calgaryflames', 'baseball', 'nba', 'premedcanada', 'northcarolina', 'squaredcircle',
        'andor', 'leagueoflegends', 'durham', 'bikinibottomtwitter', 'ufc', 'banff', 'thesimpsons',
        'nhlcirclejerk', 'nbacirclejerk', 'rupaulsdragrace', 'cats', 'rats', 'ottawasenators',
        'anime', 'seinfeld', 'magictcg', 'linustechtips', 'spreadsmile', 'regina', 'formula1',
        'eldenring', 'topcharacterdesigns', 'barrie', 'justgalsbeingchicks', 'rainbow6',
        'rarepuppers', 'rabbits', 'humanbeingsbeingbros', 'teenmomogandteenmom2', 'livestreamfail',
        'shittymoviedetails', 'cyberpunkgame', 'boxingcirclejerk', 'nighreign', 'poutine', 'glowups',
        'miami', 'fuckimold', 'naruto', 'twoxchromosomes', 'playstation', 'baldursgate3', 
        'topcharactertropes', 'formuladank', 'makeupaddiction', 'warhammer', 'witchesvspatriarchy',
        'askdocs', 'mma', 'adviceanimals', 'southpark', 'gaming', 'whatisthisbird', 'aww', 'awww',
        'dccosplayers', 'ontario', 'saskatoon', 'bravorealhousewives', 'kitchener', 'rimworld',
        'redsox', 'genshin_impact', 'destinythegame', 'americandad', 'masseffect', 'nyyankees',
        'okbuddycinephile', 'humanbeingbros', 'me_irl', 'deadbydaylight', 'lotr', 'liverpoolfc',
        'deltarune', 'hololive', 'teenagers', 'holdmycatnip', '2007scape', 'popheadcirclejerk',
        'neopets', 'rogue', 'drakethetype', 'SSBM', 'dnd', 'sports', 'legocirclejerk', 'lakers',
        'thomastheplankengine', 'houseplants', 'nursing', 'nhl', 'beamazed'
    ];

    function hideBlockedSubreddits() {
        document.querySelectorAll('shreddit-post[subreddit-name]').forEach(post => {
            const subName = post.getAttribute('subreddit-name');
            if (!subName) return;
            if (blockedSubs.includes(subName.trim().toLowerCase())) {
                post.style.display = 'none';
                // Uncomment for debugging:
                // console.log('Blocked:', subName);
            }
        });
    }

    // Initial run
    hideBlockedSubreddits();

    // Observe for dynamically loaded posts (infinite scroll)
    const observer = new MutationObserver(hideBlockedSubreddits);
    observer.observe(document.body, { childList: true, subtree: true });

})();
