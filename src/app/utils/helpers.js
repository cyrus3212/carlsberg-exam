export const getItemFromList = (list = [], item) => {
  if (item) {
    const itemId = item.id;
    const selectedItem = list.find(selectedItem => selectedItem.id === itemId);

    return selectedItem;
  };

  return false;
}