import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

describe("SearchPage", () => {
    it("renders hero text and search button", () => {
        render(
            <BrowserRouter>
                <SearchPage />
            </BrowserRouter>
        );

        expect(
            screen.getByRole("button", { name: /search properties/i })
        ).toBeInTheDocument();
    });
});
