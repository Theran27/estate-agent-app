import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useFavourites from "../hooks/useFavourites";

const mockProperty = { id: 1, shortDescription: "Test property" };

describe("useFavourites hook", () => {
    it("adds a property to favourites", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.addFavourite(mockProperty);
        });

        expect(result.current.favourites.length).toBe(1);
    });

    it("does not add duplicate favourites", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.addFavourite(mockProperty);
            result.current.addFavourite(mockProperty);
        });

        expect(result.current.favourites.length).toBe(1);
    });
});
