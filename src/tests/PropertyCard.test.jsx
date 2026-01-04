import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PropertyCard from "../components/property/PropertyCard";

const mockProperty = {
    id: 1,
    shortDescription: "Test property",
    price: 300000,
    bedrooms: 2,
    images: ["/test.jpg"]
};

describe("PropertyCard", () => {
    it("renders property details", () => {
        render(
            <BrowserRouter>
                <PropertyCard property={mockProperty} onAddFavourite={() => {}} />
            </BrowserRouter>
        );

        expect(screen.getByText(/Test property/i)).toBeInTheDocument();
        expect(screen.getByText(/£300,000/i)).toBeInTheDocument();
        expect(screen.getByText(/2 bedrooms/i)).toBeInTheDocument();
    });

    it("calls onAddFavourite when button clicked", () => {
        const mockAdd = vi.fn();

        render(
            <BrowserRouter>
                <PropertyCard property={mockProperty} onAddFavourite={mockAdd} />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText(/Add to Favourites/i));
        expect(mockAdd).toHaveBeenCalledOnce();
    });
});
