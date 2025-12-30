import SearchForm from "../components/search/SearchForm";

const SearchPage = () => {
    const handleSearch = (filters) => {
        console.log("Search filters:", filters);
    };

    return (
        <div>
            <h1>People’s Real Estate Brokers</h1>
            <p>Find your next home with confidence</p>

            <SearchForm onSearch={handleSearch} />
        </div>
    );
};

export default SearchPage;
