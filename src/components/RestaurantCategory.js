import ItemList from "./itemList";

const RestaurantCategory =({data, showItems, setShowIndex})=>{
    const handleClick = ()=>{
        setShowIndex();
    }
    return (<div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                {showItems && <span>🔽</span>}
                {!showItems && <span>🔼</span>}
            </div>
            { showItems && <ItemList item={data.itemCards}/>}
        </div>
        {/* Accordian Body */}
        
    </div>)
}

export default RestaurantCategory;