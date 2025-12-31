import { Droppable, Draggable } from "@hello-pangea/dnd";

const FavouritesList = ({ favourites, onRemove, onClear }) => {
    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Favourites</h2>

            <Droppable droppableId="favourites">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{
                            minHeight: "120px",
                            padding: "10px",
                            background: "#f1f1f1",
                            borderRadius: "6px"
                        }}
                    >
                        {favourites.length === 0 && (
                            <p>Drag properties here to save them</p>
                        )}

                        {favourites.map((property, index) => (
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
                                        style={{
                                            background: "#ffffff",
                                            padding: "10px",
                                            marginBottom: "10px",
                                            borderRadius: "6px",
                                            boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                                            ...provided.draggableProps.style
                                        }}
                                    >
                                        <strong>£{property.price.toLocaleString()}</strong>
                                        <p>{property.shortDescription}</p>

                                        <button onClick={() => onRemove(property.id)}>
                                            ❌ Remove
                                        </button>
                                    </div>
                                )}
                            </Draggable>
                        ))}

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            {favourites.length > 0 && (
                <button
                    style={{ marginTop: "10px" }}
                    onClick={onClear}
                >
                    Clear All Favourites
                </button>
            )}
        </div>
    );
};

export default FavouritesList;
