import { DropdownList, NumberPicker, DatePicker } from "react-widgets";
import "react-widgets/styles.css";

const SearchForm = ({ onSearch }) => {
    const propertyTypes = ["Any", "House", "Flat"];

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            type: e.target.type.value,
            minPrice: e.target.minPrice.value,
            maxPrice: e.target.maxPrice.value,
            minBedrooms: e.target.minBedrooms.value,
            maxBedrooms: e.target.maxBedrooms.value,
            postcode: e.target.postcode.value,
            dateAdded: e.target.dateAdded.value
        };

        onSearch(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Search Properties</h2>

            <label>Property Type</label>
            <DropdownList
                name="type"
                data={propertyTypes}
                defaultValue="Any"
            />

            <label>Min Price</label>
            <NumberPicker name="minPrice" />

            <label>Max Price</label>
            <NumberPicker name="maxPrice" />

            <label>Min Bedrooms</label>
            <NumberPicker name="minBedrooms" />

            <label>Max Bedrooms</label>
            <NumberPicker name="maxBedrooms" />

            <label>Date Added After</label>
            <DatePicker name="dateAdded" />

            <label>Postcode Area</label>
            <input
                type="text"
                name="postcode"
                placeholder="e.g. NW1"
            />

            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
