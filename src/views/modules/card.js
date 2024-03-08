function card(Book) {
    return `
        <figure class="card">
            <img src="${Book.img}">
            <figcaption class="card__text">
                <span class="card__text-primary">
                    ${Book.name}
                </span>
                <br>
                <span class="card__text-secondary">
                    ${Book.author},${Book.year}
                </span>
                <p class="card__text--evaluate">
                    ${Book.storRate}
                    <span class="card__text--evaluate-extra">
                        /5
                    </span>
                </p>
            </figcaption>
        </figure>
    `;
}

export default card;
