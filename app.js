const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const githubBtn = document.getElementById('github');
const newQuoteBtn = document.getElementById('new-quote');





let apiQuotes  =[ ] ;

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

     if (!quote.author){
         authorText.textContent = 'Unknown';
     }

     else{
         authorText.textContent =quote.author;
     }

     //check the quote length
     if(quote.text.length >10){
         quoteText.classList.add('long-quote');

     }
     else{
         quote.classList.remove ('long-quote')
            }
quoteText.textContent = quote.text;
}

async function getQuotes() {
    
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      // Catch Error Here
    }
  }

getQuotes();

