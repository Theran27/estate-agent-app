import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchForm from "../components/search/SearchForm";

describe("SearchForm", () => {
    it("renders all search dropdown labels", () => {
        render(<SearchForm onSearch={() => {}} />);

        expect(screen.getByText(/Property Type/i)).toBeInTheDocument();
        expect(screen.getByText(/Price Range/i)).toBeInTheDocument();
        expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
        expect(screen.getByText(/Date Added/i)).toBeInTheDocument();
        expect(screen.getByText(/Postal Area/i)).toBeInTheDocument();
    });

    it("calls onSearch when form is submitted", () => {
        const onSearchMock = vi.fn();
        render(<SearchForm onSearch={onSearchMock} />);

        fireEvent.click(screen.getByRole("button", { name: /search properties/i }));

        expect(onSearchMock).toHaveBeenCalledOnce();
    });
});
