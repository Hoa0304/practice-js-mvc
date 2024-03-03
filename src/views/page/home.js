import SideBar from "../layouts/sidebar";
import Card from "../components/card";
import Header from "./header";
import QuoteItem from "../modules/quoteItem";
const Home= () => {
    return `
    <div class="home">
        <div class="home__sidebar">${SideBar()}</div>
        <div class="home__main">
            <div class="home__main__top">${Header()}</div>
            <div class="home__main__quote">${QuoteItem()}</div>
            <div class="home__main__recommen">
                <h2 class="home__main__recommen--primary">
                    Good Morning
                </h2>
                <p class="home__main__recommen--text">
                    Recommended for You
                </p>
                <div class="home__main__recommen--card">
                    ${Card}
                </div>
            </div>
            <div class="home__main__recent"></div>
        </div>
    </div>
    `;
}

export default Home;