import SideBar from "../layouts/sidebar";
import Header from "../layouts/header";
import QuoteItem from "../modules/quoteItem";
import LatestItem from "../modules/latestItem";


const Home= () => {
    return `
    <div class="home">
        <div class="home__sidebar">${SideBar()}</div>
        <div class="home__main">
            <div class="home__main__top">${Header()}</div>
            <div class="home__main__quote">
                ${QuoteItem("\“There is more treasure in books than in all the pirate’s loot on Treasure Island.\”","-Walt Disney")}
                ${QuoteItem("\“Live as if you were to die tomorrow. Learn as if you were to live forever.\”","-Mahatma Gandhi")}
                ${QuoteItem("\“Education is not preparation for life; education is life itself.\”","-John Dewey")}
                ${QuoteItem("\“Don’t let yesterday take up too much of today.\”","-Will Rogers")}
                ${LatestItem()}
            </div>
            <div class="home__main__recommen">
                <h2 class="home__main__recommen-primary">
                    Good Morning
                </h2>
                <div class="scroll">
                    <p class="home__main__recommen-text">
                        Recommended for You
                    </p>
                    <div class="home__main__recommen-card">
                    </div>
                    <p class="home__main__recommen-recent">
                        Recent Readings
                    </p>
                    <div class="home__main__recommen-card">
                    </div>
                </div>
            </div>
            <div class="home__main__recent"></div>
        </div>
    </div>
    `;
}

export default Home;