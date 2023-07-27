// 链表的分类 ：单项链表 双向链表 单项循环链表 双向循环链表

// 定义一个节点类
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.header = null;
    this.size = 0;
  }
  //   增加节点
  append(element) {
    if (this.header === null) {
      this.header = new Node(element);
    } else {
      let curr = this.getNode(this.size - 1);
      curr.next = new Node(element);
    }
    this.size++;
  }
  // 增加指定位置节点
  appendAt(position, element) {
    if (position < 0 || position >= this.size) {
      throw new Error("out of range");
    }
    let newNode = new Node(element);
    let curr = this.getNode(position);
    let nextNode = this.getNode(position + 1);
    newNode.next = nextNode;
    curr.next = newNode;
    this.size++;
  }
  //   修改节点
  change(position, newElement) {
    if (position < 0 || position >= this.size) {
      throw new Error("out of range");
    }
    this.getNode(position).element = newElement;
  }
  //   删除节点
  remove(position) {
    if (position < 0 || position >= this.size) {
      return "cant find element of linkedList";
    }
    // 如果为0 则改变头指针位置
    if (position === 0) {
      this.header = this.getNode(1);
    } else {
      let lastNode = this.getNode(position - 1);
      let nextNode = this.getNode(position + 1);
      lastNode.next = nextNode;
    }
    this.size--;
  }
  //   查找节点
  getNode(index) {
    let currNode = this.header;
    // 前提条件
    if (index < 0 || index >= this.size) {
      return null;
    }
    // 遍历链表 获取指针位置
    for (var i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }
}

let l11 = new LinkedList();
l11.append("1");
l11.append("2");
l11.append("3");
l11.append("4");
l11.append("5");
l11.append("6");
l11.change("0", "3");
console.dir(l11, {
  depth: 120,
});
