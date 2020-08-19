// Get Quote from API

async function getQuote() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await 
    } catch (error) {
        console.log('yikes, no quote, bro', error)
    }

}

//on Load
getQuote();