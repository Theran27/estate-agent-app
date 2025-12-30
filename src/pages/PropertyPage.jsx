import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
import PropertyGallery from "../components/property/PropertyGallery";
import PropertyTabs from "../components/property/PropertyTabs";

const PropertyPage = () => {
    const { id } = useParams();

    const property = properties.find(
        (item) => item.id === Number(id)
    );

    if (!property) {
        return <p>Property not found.</p>;
    }

    return (
        <div style={{ padding: "20px" }}>
            {/* Title & summary */}
            <h2>{property.shortDescription}</h2>
            <h3>£{property.price.toLocaleString()}</h3>
            <p>
                {property.bedrooms} bedrooms • {property.postcode}
            </p>

            {/* Image gallery */}
            <PropertyGallery images={property.images} />

            {/* Tabs: Description / Floor Plan / Map */}
            <PropertyTabs property={property} />
        </div>
    );
};

export default PropertyPage;
