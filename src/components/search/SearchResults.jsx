import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropertyCard from "../property/PropertyCard";

const SearchResults = ({ results, onAddFavourite }) => {
    if (results.length === 0) {
        return <p>No properties found.</p>;
    }

    return (
        <Droppable droppableId="results">
            {(provided) => (
                <div
                    className="results-grid"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {results.map((property, index) => (
                        <Draggable
                            key={property.id}
                            draggableId={property.id.toString()}
                            index={index}
                        >
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <PropertyCard
                                        property={property}
                                        onAddFavourite={onAddFavourite}
                                    />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default SearchResults;
