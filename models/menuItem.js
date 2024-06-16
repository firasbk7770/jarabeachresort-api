const db = require('../config/db'); // Assuming db.js exports the pool

async function getAllCategories() {
  try {
    const query = "SELECT MC_Id, MC_Title, MC_Image, MC_Parent FROM `menu_category` WHERE MC_Status='Active'";
    const [rows] = await db.query(query);
    return rows;
  } catch (err) {
    console.error('Error fetching categories:', err);
    throw err; // Re-throw the error to handle it upstream
  }
}

async function getAllmenuItems() {
  try {
    const query = "SELECT MI_Id,MI_Title, MI_Desc,  MI_Img, MI_Qty, MI_CategoryId, MI_Cost, MI_Item_option FROM `menu_item` WHERE MI_Status='Active'";
    const [rows] = await db.query(query);
    return rows;
  } catch (err) {
    console.error('Error fetching categories:', err);
    throw err; // Re-throw the error to handle it upstream
  }
}

async function getmenuItemsById(id) {
  try {
    const query = "SELECT MI_Id,MI_Title, MI_Desc,  MI_Img, MI_Qty, MI_CategoryId, MI_Cost, MI_Item_option FROM `menu_item` WHERE MI_Status='Active' AND MI_ID="+id;
    const rows = await db.query(query);
    return rows;
  } catch (err) {
    console.error('Error fetching categories:', err);
    throw err; // Re-throw the error to handle it upstream
  }
}

module.exports = {
  getAllCategories,
  getAllmenuItems,
  getmenuItemsById
};
