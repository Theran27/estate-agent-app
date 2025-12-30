import { useState } from "react";
import SearchForm from "../components/search/SearchForm";
import SearchResults from "../components/search/SearchResults";
import properties from "../data/properties.json";
import "../styles/search.css";

const SearchPage = () => {
    const [results, setResults] = useState([]);

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

    return (
        <div>
            <h1>People’s Real Estate Brokers</h1>
            <p>Find your next home with confidence</p>

            <SearchForm onSearch={handleSearch} />

            <SearchResults results={results} />
        </div>
    );
};

export default SearchPage;
