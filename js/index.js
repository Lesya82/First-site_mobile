document.querySelector('.in-studio-on-site').addEventListener('click', studioSite);

function studioSite() {
    const site = {
        '#pricing > div.in-on-studio > div > p': 'On-Site Photography & Videography:',
        '#pricing > div.in-on-studio > div > ul > li:nth-child(1)': 'Kit Prep, Delivery, Setup............$200',
        '#pricing > div.in-on-studio > div > ul > li:nth-child(3)': 'Photography......................$150/hour',
        '#pricing > div.in-on-studio > div > ul > li:nth-child(5)': 'Videography......................$200/hour',
        '#pricing > div.in-on-studio > div > ul > li:nth-child(7)': 'Extra Services............from $150/hour'
    }
    const studio = {
        '#pricing > div.in-on-studio > div > p': 'In-Studio Photography & Videography:',
        '#pricing > div.in-on-studio > div > ul > li:nth-child(1)': 'Kids Photography..............$100/hour',
        '#pricing > div.in-on-studio > div > ul > li:nth-child(3)': 'Kids Videography ..............$150/hour',
        '#pricing > div.in-on-studio > div > ul > li:nth-child(5)': 'Studio Rental Fee ...............$0/hour',
        '#pricing > div.in-on-studio > div > ul > li:nth-child(7)': 'Retouching ....................$1/picture'
    }
    const langLink = document.querySelector('.in-studio-on-site');
    const dict = langLink.innerText === 'In-Studio' ? site : studio;
    for (const key in dict) {
        document.querySelector(key).innerText = dict[key];
    }
    langLink.innerText = langLink.innerText === 'In-Studio' ? 'On-Site' : 'In-Studio';

}

const interval = setInterval(updateClock, 1000);
function updateClock() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = (new Date()).toLocaleTimeString();
}

document.querySelector('.stopTime').addEventListener('click', stopClock);
function stopClock() {
    clearInterval(interval);
}


