class CategoryModel {
    constructor(id, name, parentId, images = []) {
        this.category_id = id;
        this.category_name = name;
        this.category_parent_id = parentId;
        this.category_images = images;
    }
}

module.exports = CategoryModel;
