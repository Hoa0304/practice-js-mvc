const QuoteItem = (content,author) => {
    return `
    <div class="quote">
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
