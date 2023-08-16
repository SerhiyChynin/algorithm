class BinaryTree{
    constructor() {
        this.root = null;
    }
    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            let node = this.root
        }
    }
}

class TreeNode{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}