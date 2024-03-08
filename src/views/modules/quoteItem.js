const QuoteItem = (content,author) => {
    return `
    <section class="quote">
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
    </section>
    `;
};

export default QuoteItem;
