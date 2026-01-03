import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import HeroBanner from "../components/layout/HeroBanner";
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
            // 1️⃣ Property type
            const matchesType =
                filters.type === "Any" || property.type === filters.type;

            // 2️⃣ Price range
            const matchesMinPrice =
                !filters.minPrice ||
                property.price >= Number(filters.minPrice);

            const matchesMaxPrice =
                !filters.maxPrice ||
                property.price <= Number(filters.maxPrice);

            // 3️⃣ Bedroom range
            const matchesMinBedrooms =
                !filters.minBedrooms ||
                property.bedrooms >= Number(filters.minBedrooms);

            const matchesMaxBedrooms =
                !filters.maxBedrooms ||
                property.bedrooms <= Number(filters.maxBedrooms);

            // 4️⃣ Date added
            const matchesDateAfter =
                !filters.dateAddedAfter ||
                new Date(property.dateAdded) >=
                new Date(filters.dateAddedAfter);

            const matchesDateBefore =
                !filters.dateAddedBefore ||
                new Date(property.dateAdded) <=
                new Date(filters.dateAddedBefore);

            // 5️⃣ Postcode prefix
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

    // ❤️ Drag & drop into favourites
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

                    {/* Results + favourites layout */}
                    <div className="main-layout">
                        {hasSearched && (
                            <SearchResults
                                results={results}
                                onAddFavourite={addFavourite}
                            />
                        )}

                        <FavouritesList
                            favourites={favourites}
                            onRemove={removeFavourite}
                            onClear={clearFavourites}
                        />
                    </div>
                </div>
            </>
        </DragDropContext>
    );
};

export default SearchPage;
