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

    const [activeTab, setActiveTab] = useState("description");

    if (!property) {
        return <p style={{ padding: "40px" }}>Property not found.</p>;
    }

    return (
        <div className="property-page">
            {/* HEADER */}
            <div className="property-header">
                <h1>{property.shortDescription}</h1>
                <p className="price">£{property.price.toLocaleString()}</p>
                <p className="meta">
                    {property.bedrooms} bedrooms • {property.postcode}
                </p>
            </div>

            {/* IMAGE GALLERY */}
            <div className="gallery">
                <div className="thumbnails">
                    {property.images.slice(0, 5).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className={`thumb ${
                                img === activeImage ? "active" : ""
                            }`}
                            onClick={() => setActiveImage(img)}
                        />
                    ))}
                </div>

                <div className="main-image">
                    <img src={activeImage} alt="Property view" />
                </div>
            </div>

            {/* TABS */}
            <div className="tabs">
                <button
                    className={activeTab === "description" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>

                <button
                    className={activeTab === "floorplan" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("floorplan")}
                >
                    Floor Plan
                </button>

                <button
                    className={activeTab === "map" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("map")}
                >
                    Map
                </button>
            </div>

            {/* TAB CONTENT */}
            <div className="tab-content">
                {activeTab === "description" && (
                    <p>{property.longDescription}</p>
                )}

                {activeTab === "floorplan" && (
                    <img
                        src={property.floorPlan}
                        alt="Floor plan"
                        className="floorplan"
                    />
                )}

                {activeTab === "map" && (
                    <iframe
                        title="Google Map"
                        src={`https://www.google.com/maps?q=${property.location.lat},${property.location.lng}&z=15&output=embed`}
                        className="map"
                        loading="lazy"
                    ></iframe>
                )}
            </div>

            <Link to="/" className="back-link">
                ← Back to search results
            </Link>
        </div>
    );
};

export default PropertyPage;
