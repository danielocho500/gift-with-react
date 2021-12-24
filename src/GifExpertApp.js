import React,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cats meme'])

    return (
        <>
            <h2>Search for Gifs</h2>
                <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map(category => (
                        <GiftGrid
                            key={category}
                            category={category}
                        />

                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;