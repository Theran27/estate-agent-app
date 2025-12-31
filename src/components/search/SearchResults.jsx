import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropertyCard from "../property/PropertyCard";

const SearchResults = ({ results, onAddFavourite }) => {
    return (
        <Droppable droppableId="results" isDropDisabled>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="results-grid"
                >
                    {results.map((property, index) => (
                        <Draggable
                            key={property.id}
                            draggableId={property.id.toString()}
                            index={index}
                        >
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps}>
                                    <PropertyCard
                                        property={property}
                                        onAddFavourite={onAddFavourite}
                                        dragHandleProps={provided.dragHandleProps}
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
