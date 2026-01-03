import { useState } from "react";

const SearchForm = ({ onSearch }) => {
    const [type, setType] = useState("Any");
    const [priceRange, setPriceRange] = useState("");
    const [bedroomRange, setBedroomRange] = useState("");

    const [dateOption, setDateOption] = useState("any");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    const [postcode, setPostcode] = useState("Any");

    const handleSubmit = (e) => {
        e.preventDefault();

        let minPrice = "";
        let maxPrice = "";
        if (priceRange) {
            [minPrice, maxPrice] = priceRange.split("-");
        }

        let minBedrooms = "";
        let maxBedrooms = "";
        if (bedroomRange) {
            [minBedrooms, maxBedrooms] = bedroomRange.split("-");
        }

        let dateAddedAfter = "";
        let dateAddedBefore = "";

        if (dateOption === "7") {
            dateAddedAfter = new Date(Date.now() - 7 * 86400000);
        } else if (dateOption === "30") {
            dateAddedAfter = new Date(Date.now() - 30 * 86400000);
        } else if (dateOption === "180") {
            dateAddedAfter = new Date(Date.now() - 180 * 86400000);
        } else if (dateOption === "custom") {
            dateAddedAfter = dateFrom;
            dateAddedBefore = dateTo;
        }

        onSearch({
            type,
            minPrice,
            maxPrice,
            minBedrooms,
            maxBedrooms,
            postcode: postcode === "Any" ? "" : postcode,
            dateAddedAfter,
            dateAddedBefore
        });
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <h2>Let’s find your dream property</h2>

            <div className="form-grid">
                {/* Property Type */}
                <div className="form-field">
                    <label>Property Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Any">Any</option>
                        <option value="house">House</option>
                        <option value="flat">Flat</option>
                    </select>
                </div>

                {/* Price Range */}
                <div className="form-field">
                    <label>Price Range</label>
                    <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                    >
                        <option value="">Any</option>
                        <option value="100000-200000">£100k – £200k</option>
                        <option value="200000-400000">£200k – £400k</option>
                        <option value="400000-600000">£400k – £600k</option>
                        <option value="600000-800000">£600k – £800k</option>
                        <option value="800000-1000000">£800k – £1,000,000</option>
                    </select>
                </div>

                {/* Bedrooms */}
                <div className="form-field">
                    <label>Bedrooms</label>
                    <select
                        value={bedroomRange}
                        onChange={(e) => setBedroomRange(e.target.value)}
                    >
                        <option value="">Any</option>
                        <option value="1-3">1 – 3</option>
                        <option value="3-5">3 – 5</option>
                        <option value="5-10">5 – 10</option>
                    </select>
                </div>

                {/* Date Added */}
                <div className="form-field">
                    <label>Date Added</label>
                    <select
                        value={dateOption}
                        onChange={(e) => setDateOption(e.target.value)}
                    >
                        <option value="any">Any time</option>
                        <option value="7">Last 7 days</option>
                        <option value="30">Last 30 days</option>
                        <option value="180">Last 6 months</option>
                        <option value="custom">Custom range</option>
                    </select>

                    {dateOption === "custom" && (
                        <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                            <input
                                type="date"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                            />
                            <input
                                type="date"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                            />
                        </div>
                    )}
                </div>

                {/* Postal Area */}
                <div className="form-field">
                    <label>Postal Area</label>
                    <select
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                    >
                        <option value="Any">Any</option>
                        <option value="NW1">NW1</option>
                        <option value="BR1">BR1</option>
                        <option value="E1">E1</option>
                        <option value="SW1">SW1</option>
                        <option value="W1">W1</option>
                    </select>
                </div>
            </div>

            <button type="submit">Search Properties</button>
        </form>
    );
};

export default SearchForm;
