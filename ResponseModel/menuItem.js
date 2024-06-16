class MenuItem {
    constructor(id, title, desc, img, qty, categoryId, cost, itemOption) {
      this.menu_item_id = id;
      this.menu_item_title = title;
      this.menu_item_desc = desc;
      this.menu_item_img = img ? [img] : [];
      this.menu_item_qty = qty;
      this.menu_item_category_id = categoryId;
      this.menu_item_cost = cost;
      this.menu_item_option = itemOption;
    }
  }
  
  module.exports = MenuItem;
  