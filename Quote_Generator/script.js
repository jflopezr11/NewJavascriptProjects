// Get Quote from API

async function getQuote() {
    const proxyUrl = 'https://arcane-temple-17000.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);

        const data = await response.json();

        console.log(data)
    } catch (error) {
        getQuote(); 
        console.log('yikes, no quote, bro', error);
    }

}

//on Load
getQuote();