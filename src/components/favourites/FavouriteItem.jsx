import { Draggable } from "@hello-pangea/dnd";

const FavouriteItem = ({ property, index, onRemove }) => {
    return (
        <Draggable
            draggableId={property.id.toString()}
            index={index}
        >
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="favourite-item"
                    style={provided.draggableProps.style}
                >
                    <div>
                        <strong>£{property.price.toLocaleString()}</strong>
                        <p>{property.shortDescription}</p>
                    </div>

                    <button onClick={() => onRemove(property.id)}>
                        ❌ Remove
                    </button>
                </div>
            )}
        </Draggable>
    );
};

export default FavouriteItem;
