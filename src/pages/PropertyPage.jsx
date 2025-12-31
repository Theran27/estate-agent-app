import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import SearchForm from "../components/search/SearchForm";
import SearchResults from "../components/search/SearchResults";
import FavouritesList from "../components/favourites/FavouritesList";

import properties from "../data/properties.json";
import useFavourites from "../hooks/useFavourites";

import "../styles/layout.css";
import "../styles/search.css";
import "../styles/favourites.css";

const SearchPage = () => {
    const [results, setResults] = useState([]);

    const {
        favourites,
        addFavourite,
        removeFavourite,
        clearFavourites
    } = useFavourites();

    const handleSearch = (filters) => {
        const filtered = properties.filter((property) => {
            const matchesType =
                filters.type === "Any" ||
                filters.type.toLowerCase() === property.type;

            const matchesMinPrice =
                !filters.minPrice || property.price >= Number(filters.minPrice);

            const matchesMaxPrice =
                !filters.maxPrice || property.price <= Number(filters.maxPrice);

            const matchesMinBedrooms =
                !filters.minBedrooms ||
                property.bedrooms >= Number(filters.minBedrooms);

            const matchesMaxBedrooms =
                !filters.maxBedrooms ||
                property.bedrooms <= Number(filters.maxBedrooms);

            const matchesPostcode =
                !filters.postcode ||
                property.postcode
                    .toLowerCase()
                    .startsWith(filters.postcode.toLowerCase());

            const matchesDate =
                !filters.dateAdded ||
                new Date(property.dateAdded) >= new Date(filters.dateAdded);

            return (
                matchesType &&
                matchesMinPrice &&
                matchesMaxPrice &&
                matchesMinBedrooms &&
                matchesMaxBedrooms &&
                matchesPostcode &&
                matchesDate
            );
        });

        setResults(filtered);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const draggedId = Number(result.draggableId);
        const property = results.find((p) => p.id === draggedId);

        if (property) {
            addFavourite(property);
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="page-container">
                <div className="header">
                    <h1>People’s Real Estate Brokers</h1>
                    <p>Find your next home with confidence</p>
                </div>

                <SearchForm onSearch={handleSearch} />

                <div className="main-layout">
                    <SearchResults
                        results={results}
                        onAddFavourite={addFavourite}
                    />

                    <FavouritesList
                        favourites={favourites}
                        onRemove={removeFavourite}
                        onClear={clearFavourites}
                    />
                </div>
            </div>
        </DragDropContext>
    );
};

export default SearchPage;
