const MenuItem = require('../models/menuItem');
const Category = require('../ResponseModel/categoryModel');
const MenuItemModel = require('../ResponseModel/menuItem');


exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.getAllmenuItems();
    const MenuItems = items.map(item => new MenuItemModel(
      item.MI_Id,
      item.MI_Title,
      item.MI_Desc,
      item.MI_Img,
      item.MI_Qty,
      item.MI_CategoryId,
      item.MI_Cost,
      item.MI_Item_option
    ));
    const response = {
      api_version: "1.0.0",
      data: {
        kind: "menu_item",
        total_items: MenuItems.length,
        items: MenuItems
      }
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllcategories = async (req, res) => {
  try {
    const items = await MenuItem.getAllCategories();

    // Transform the raw data into Category objects
    const categories = items.map(item => new Category(
      item.MC_Id || "",
      item.MC_Title || "",
      item.MC_Parent || "",
      item.MC_Image || ""
    ));

    // Construct the final response
    const response = {
      api_version: "1.0.0",
      data: {
        kind: "category",
        total_items: categories.length,
        items: categories
      }
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMenuItemById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  try {
    const rawData = await MenuItem.getAllmenuItems();
    const item = rawData[0];  // Assuming the first element is the array of menu items

    console.log(item);
    if (!item) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    const MenuItems = new MenuItemModel(
      item.MI_Id,
      item.MI_Title,
      item.MI_Desc,
      item.MI_Img,
      item.MI_Qty,
      item.MI_CategoryId,
      item.MI_Cost,
      item.MI_Item_option
    );
    const response = {
      api_version: "1.0.0",
      data: {
        kind: "menu_item",
        items: MenuItems
      }
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};
