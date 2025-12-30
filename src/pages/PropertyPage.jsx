import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
import PropertyGallery from "../components/property/PropertyGallery";

const PropertyPage = () => {
    const { id } = useParams();

    const property = properties.find(
        (p) => p.id === Number(id)
    );

    if (!property) {
        return <p>Property not found.</p>;
    }

    return (
        <div>
            <h2>{property.shortDescription}</h2>
            <h3>£{property.price.toLocaleString()}</h3>
            <p>
                {property.bedrooms} bedrooms • {property.postcode}
            </p>

            <PropertyGallery images={property.images} />
        </div>
    );
};

export default PropertyPage;
