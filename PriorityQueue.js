class PriorityQueue {
  collection = [];
  printCollection = () => {
    console.log(collection);
  };

  enqueue = (element) => {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  };

  dequeue = () => {
    let value = this.collection.shift();
    return value[0];
  };

  front = () => {
    return this.collection[0];
  };
  size = () => this.collection.length;

  isEmpty = () => {
    return this.collection.length === 0;
  };
}
