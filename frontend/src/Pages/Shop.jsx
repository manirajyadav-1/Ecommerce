import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollections";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

export default function Shop(){
    return <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
    </div>
}