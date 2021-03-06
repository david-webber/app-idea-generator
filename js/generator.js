let app = [
    'Facebook',
    'Linkedin',
    'Tinder',
    'Snapchat',
    'Instagram',
    'Whatsapp',
    'WeChat',
    'Skype',
    'Google Meet',
    'Zoom',
    'Twitter',
    'Vine',
    'Spotify',
    'Periscope',
    'Uber',
    'Lyft',
    'Yik Yak',
    'Kik',
    'Pinterest',
    'Tumblr',
    'Timehop',
    'Postmates',
    'Doordash',
    'Shyp',
    'PasteBin',
    'Instacart',
    'FlipKart',
    'PCPartBuilder',
    'freeCodeCamp',
    'Washio',
    'Blue Apron',
    'Yelp',
    'Google Maps',
    'Trello',
    'Miro',
    'Dark Sky',
    '1Password',
    'Dropbox',
    'Asana',
    'Outlook',
    'Google Classroom',
    'Sunrise',
    'Wunderlist',
    'Zillow',
    'Scanner Pro',
    'Google Translate',
    'Pandora',
    'Duolingo',
    'PicsArt',
    'Soundcloud',
    'Calm',
    'iMovie',
    'Twitch',
    'YouTube',
    'Kahoot',
    'Quizlet',
    'GitHub',
    'Discord',
    'CashApp',
    'Gmail',
    'Netflix',
    'Reddit',
    'GrubHub',
    'Indeed',
    'Grammarly',
    'Wikipedia',
    'IMDB',
    'Fandom',
    'TripAdvisor',
    'Quora',
    'Rotten Tomatoes',
    'Britannica',
    'PayPal',
    'IGN'
]

let thing = [
    'vintage lovers',
    'finding good movies',
    'finding flight tickets',
    'finding good hotels',
    'finding good resturaunts',
    'finding concerts',
    'finding parties',
    'finding good seats at sporting events',
    'programmers',
    'teachers',
    'writers',
    'gamers',
    'artists',
    'composers',
    'architects',
    'doctors',
    'janitors',
    'taxi drivers',
    'chefs',
    'streamers',
    'cats',
    'dogs',
    'stray pets',
    'babies',
    'singles',
    'couples',
    'journalists',
    'vegetarians',
    'early birds',
    'night owls',
    'waiters',
    'buisnessmen',
    'learning new languages',
    'movie reccomendations',
    'talking',
    'dating',
    'video calls',
    'reminders',
    'meditating',
    'selling houses',
    'buying houses',
    'job hunters',
    'hunters',
    'foodies',
    'online shopping',
    'memes',
    'planning events',
    'scientists',
    'sharing content',
    'accountants',
    'mathamaticians',
    'courses',
    'managers',
    'enthusiasts',
    'game developers',
    'expats',
    'geeks',
    'nerds',
    'buying electronics',
    'buying groceries',
    'aspring vloggers',
    'bloggers',
    'vloggers',
    'traveling',
    'editing videos',
    'bartenders',
    'alcoholics',
    'making friends',
    'watching cat videos',
    'Football (soccer) players',
    'Soccer (football) players',
    'American football players',
    'Basketball players',
    'Athletes',
    'Golfers',
    'Swimmers'
]


const checkLS = () => {
    let idea = localStorage.getItem('idea');
    if (idea) {
        document.getElementById('idea').innerHTML = idea;
    }
}

 
window.onload = function(){
    let reloading = sessionStorage.getItem("initialLoad");
    if(reloading){
        checkLS();
    }
}


const GenerateAppIdea = () => {
    sessionStorage.setItem("initialLoad", "true");
    let appType = Math.floor(Math.random() * app.length)
    let thingType = Math.floor(Math.random() * thing.length)
    if (app[appType].startsWith('A') || app[appType].startsWith('E') || app[appType].startsWith('I') || app[appType].startsWith('O') || app[appType].startsWith('U')) {
        let appIdea = `An ${app[appType]} for ${thing[thingType]}.`
        localStorage.setItem("idea", appIdea);
        document.getElementById('idea').innerHTML = appIdea;
    }
    else {
        let appIdea = `A ${app[appType]} for ${thing[thingType]}.`
        localStorage.setItem("idea", appIdea);
        document.getElementById('idea').innerHTML = appIdea;
    }

}
