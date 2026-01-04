import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import properties from "../data/properties.json";
import "../styles/property.css";

const PropertyPage = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === Number(id));

    const [activeImage, setActiveImage] = useState(
        property?.images[0]
    );

    if (!property) {
        return <p style={{ padding: "40px" }}>Property not found.</p>;
    }

    return (
        <div className="property-page">
            <div className="property-header">
                <h1>{property.shortDescription}</h1>
                <p className="price">£{property.price.toLocaleString()}</p>
                <p className="meta">
                    {property.bedrooms} bedrooms • {property.postcode}
                </p>
            </div>

            {/* IMAGE GALLERY */}
            <div className="gallery">
                {/* Thumbnails */}
                <div className="thumbnails">
                    {property.images.slice(0, 5).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className={
                                img === activeImage
                                    ? "thumb active"
                                    : "thumb"
                            }
                            onClick={() => setActiveImage(img)}
                        />
                    ))}
                </div>

                {/* Main image */}
                <div className="main-image">
                    <img src={activeImage} alt="Selected property view" />
                </div>
            </div>

            {/* DESCRIPTION */}
            <div className="property-description">
                <h2>Description</h2>
                <p>{property.longDescription}</p>
            </div>

            <Link to="/" className="back-link">
                ← Back to search results
            </Link>
        </div>
    );
};

export default PropertyPage;
