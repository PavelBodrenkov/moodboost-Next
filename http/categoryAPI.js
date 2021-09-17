import { $hostPost, $hostPostAdmin } from "./index";

export default class CategoryService {
    static async fetchOneCategory (id) {
        return $hostPostAdmin.get('categories' + '/' + id)
    }

    static async fetchEditCategory (id, name, slug, parent_id, name_parent) {
        return $hostPostAdmin.patch('categories' + '/' + id, {name, slug, parent_id, name_parent})
    }

    static async fetchDeleteCategory (id) {
        return $hostPostAdmin.delete('categories' + '/' + id)
    }

    static async fetchPostCategory (name, slug, parent_id, name_parent) {
        return $hostPostAdmin.post('categories', {name, slug, parent_id, name_parent})
    }

    static async fetchCategory () {
        return $hostPost.get('categories')
    }
}

