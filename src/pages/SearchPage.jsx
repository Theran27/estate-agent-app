import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import HeroBanner from "../components/layout/Herobanner.jsx";
import SearchForm from "../components/search/SearchForm";
import SearchResults from "../components/search/SearchResults";
import FavouritesList from "../components/favourites/FavouritesList";

import properties from "../data/properties.json";
import useFavourites from "../hooks/useFavourites";

import "../styles/layout.css";
import "../styles/search.css";
import "../styles/favourites.css";
import "../styles/property-card.css";

const SearchPage = () => {
    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const {
        favourites,
        addFavourite,
        removeFavourite,
        clearFavourites
    } = useFavourites();

    // 🔍 Search filtering logic
    const handleSearch = (filters) => {
        const filteredResults = properties.filter((property) => {
            const matchesType =
                filters.type === "Any" || property.type === filters.type;

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

            const matchesDateAfter =
                !filters.dateAddedAfter ||
                new Date(property.dateAdded) >=
                new Date(filters.dateAddedAfter);

            const matchesDateBefore =
                !filters.dateAddedBefore ||
                new Date(property.dateAdded) <=
                new Date(filters.dateAddedBefore);

            const matchesPostcode =
                !filters.postcode ||
                property.postcode
                    .toUpperCase()
                    .startsWith(filters.postcode.toUpperCase());

            return (
                matchesType &&
                matchesMinPrice &&
                matchesMaxPrice &&
                matchesMinBedrooms &&
                matchesMaxBedrooms &&
                matchesDateAfter &&
                matchesDateBefore &&
                matchesPostcode
            );
        });

        setResults(filteredResults);
        setHasSearched(true);
    };

    //  Drag & drop into favourites
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
            <>
                {/* Hero banner */}
                <HeroBanner />

                {/* Page content */}
                <div className="page-container">
                    {/* Search filters */}
                    <SearchForm onSearch={handleSearch} />

                    {/* Show results + favourites ONLY after search */}
                    {hasSearched && (
                        <div className="results-layout">
                            {/* LEFT: Search results */}
                            <SearchResults
                                results={results}
                                onAddFavourite={addFavourite}
                            />

                            {/* RIGHT: Favourites sidebar */}
                            <FavouritesList
                                favourites={favourites}
                                onRemove={removeFavourite}
                                onClear={clearFavourites}
                            />
                        </div>
                    )}
                </div>
            </>
        </DragDropContext>
    );
};

export default SearchPage;
