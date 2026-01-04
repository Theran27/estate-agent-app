import { useState } from "react";

const useFavourites = () => {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (property) => {
        const exists = favourites.find(
            (item) => item.id === property.id
        );

        if (!exists) {
            setFavourites([...favourites, property]);
        }
    };

    const removeFavourite = (id) => {
        setFavourites(favourites.filter((item) => item.id !== id));
    };

    const clearFavourites = () => {
        setFavourites([]);
    };

    return {
        favourites,
        addFavourite,
        removeFavourite,
        clearFavourites
    };
};

export default useFavourites;
