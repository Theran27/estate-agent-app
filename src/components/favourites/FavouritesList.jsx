const FavouritesList = ({ favourites, onRemove, onClear }) => {
    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Favourites</h2>

            {favourites.length === 0 && <p>No favourites added.</p>}

            {favourites.map((property) => (
                <div
                    key={property.id}
                    style={{
                        background: "#ffffff",
                        padding: "10px",
                        marginBottom: "10px",
                        borderRadius: "6px",
                        boxShadow: "0 1px 5px rgba(0,0,0,0.1)"
                    }}
                >
                    <strong>£{property.price.toLocaleString()}</strong>
                    <p>{property.shortDescription}</p>

                    <button onClick={() => onRemove(property.id)}>
                        ❌ Remove
                    </button>
                </div>
            ))}

            {favourites.length > 0 && (
                <button
                    style={{ marginTop: "10px" }}
                    onClick={onClear}
                >
                    Clear All Favourites
                </button>
            )}
        </div>
    );
};

export default FavouritesList;
