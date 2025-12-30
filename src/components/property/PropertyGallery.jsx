import { useState } from "react";

const PropertyGallery = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div>
            <img
                src={mainImage}
                alt="Property"
                style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
            />

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Thumbnail"
                        style={{
                            width: "80px",
                            height: "60px",
                            cursor: "pointer",
                            objectFit: "cover",
                            border: img === mainImage ? "2px solid #0d6efd" : "1px solid #ccc"
                        }}
                        onClick={() => setMainImage(img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PropertyGallery;
