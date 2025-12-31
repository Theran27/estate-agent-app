import { Link } from "react-router-dom";

const PropertyCard = ({ property, onAddFavourite, dragHandleProps }) => {
    return (
        <div className="property-card">
            {/* Drag handle area */}
            <div
                className="property-drag-handle"
                {...dragHandleProps}
                title="Drag to favourites"
            >
                ⠿
            </div>

            <img
                src={property.images[0]}
                alt={property.shortDescription}
                className="property-image"
            />

            <div className="property-info">
                <h3>£{property.price.toLocaleString()}</h3>
                <p>{property.shortDescription}</p>
                <p>{property.bedrooms} bedrooms</p>

                <button onClick={() => onAddFavourite(property)}>
                    ❤️ Add to Favourites
                </button>

                <br />

                {/* NORMAL LINK — now clickable */}
                <Link to={`/property/${property.id}`}>
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;
