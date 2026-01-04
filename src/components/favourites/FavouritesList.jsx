import { Droppable } from "@hello-pangea/dnd";
import FavouriteItem from "./FavouriteItem";

const FavouritesList = ({ favourites, onRemove, onClear }) => {
    return (
        <div className="favourites-container">
            <h2>Favourites</h2>

            <Droppable droppableId="favourites">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{ minHeight: "120px" }}
                    >
                        {favourites.length === 0 && (
                            <p className="favourites-hint">Drag properties here to save them</p>
                        )}

                        {favourites.map((property, index) => (
                            <FavouriteItem
                                key={property.id}
                                property={property}
                                index={index}
                                onRemove={onRemove}
                            />
                        ))}

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            {favourites.length > 0 && (
                <button className="clear-btn" onClick={onClear}>
                    Clear All Favourites
                </button>
            )}
        </div>
    );
};

export default FavouritesList;
