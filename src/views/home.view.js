class HomeView {
    constructor() {}
    changeQuote() {
        const quote = document.querySelectorAll('.quote')
        let currentQuoteIndex = 0
        setInterval(() => {
            quote.forEach((quotes) => {
                quotes.classList.add('hidden')
                quotes.style.display = 'none'
            })
            quote[currentQuoteIndex].classList.remove('hidden')
            quote[currentQuoteIndex].style.display = 'flex'
        currentQuoteIndex = (currentQuoteIndex + 1) % quote.length
        }, 2000);
    }
}

export default HomeView
