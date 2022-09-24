const ItemCard = () => {
  const handleInputChange = (e:any) => {
    console.log(e.target.value);
  }
  return (
    <div>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Add new item to the list"
      />
      <button>Add</button>
    </div>
  );
};

export default ItemCard;
