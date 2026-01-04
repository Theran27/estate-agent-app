import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import PropertyPage from "../pages/PropertyPage";

describe("PropertyPage", () => {
    it("shows fallback when property not found", () => {
        render(
            <BrowserRouter>
                <PropertyPage />
            </BrowserRouter>
        );

        expect(
            screen.getByText(/property not found/i)
        ).toBeInTheDocument();
    });
});
