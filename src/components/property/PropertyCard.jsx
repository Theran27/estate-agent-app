import { Link } from "react-router-dom";

const PropertyCard = ({ property, onAddFavourite }) => {
    return (
        <div className="property-card">
            <img
                src={property.images[0]}
                alt={property.shortDescription}
            />

            <h3>{property.shortDescription}</h3>
            <div className="price">£{property.price.toLocaleString()}</div>
            <p>{property.bedrooms} bedrooms</p>

            <div className="actions">
                <button
                    className="favourite-btn"
                    onClick={() => onAddFavourite(property)}
                    aria-label="Add to favourites"
                >
                    <span className="heart">❤️</span>
                    <span>Add to Favourites</span>
                </button>

                <Link
                    to={`/property/${property.id}`}
                    className="view-details"
                >
                    View Details →
                </Link>
            </div>

        </div>
    );
};

export default PropertyCard;
