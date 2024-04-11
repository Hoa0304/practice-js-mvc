const QuoteItem = (content,author) => {
    return `
<<<<<<< HEAD
    <div class="quote">
=======
    <section class="quote hidden">
>>>>>>> ec906f5 (update (#33))
        <span class="quote--text">
            Today’s Quote
        </span>
        <p class="quote-status">
            ${content}  
        </p>
        <span class="quote--author">
            ${author}
        </span>
        <div class="quote--index">
            <div class="quote--index-circle"></div>
            <div class="quote--index-circle"></div>
            <div class="quote--index-circle"></div>
            <div class="quote--index-circle"></div>
        </div>
    </div>
    `;
};

export default QuoteItem;
