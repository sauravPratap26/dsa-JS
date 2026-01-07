class maxHeap {
  #heap;
  constructor(arr = []) {
    this.#heap = arr.slice();
    this.#buildHeap();
  }
  printHeap() {
    console.log(this.#heap);
  }
  #buildHeap() {
    const n = this.#heap.length;
    for (let i = Math.floor((n - 2) / 2); i >= 0; i--) {
      this.#down(i);
    }
  }
  extractMax() {
    if (this.#heap.length === 1) return this.#heap.pop();

    const max = this.#heap[0];
    const lastPoppedElement = this.#heap.pop();
    this.#heap[0] = lastPoppedElement;
    this.#down(0);
    return max;
  }

  insert() {}
  #down(i) {
    while (true) {
      let currentNodeIndex = i;
      const heapLength = this.#heap.length;
      const leftNodeIndex = 2 * i + 1;
      const rightNodeIndex = 2 * i + 2;

      if (
        leftNodeIndex < heapLength &&
        this.#heap[leftNodeIndex] > this.#heap[currentNodeIndex]
      )
        currentNodeIndex = leftNodeIndex;

      if (
        rightNodeIndex < heapLength &&
        this.#heap[rightNodeIndex] > this.#heap[currentNodeIndex]
      )
        currentNodeIndex = rightNodeIndex;

      if (currentNodeIndex === i) break;

      [this.#heap[currentNodeIndex], this.#heap[i]] = [
        this.#heap[i],
        this.#heap[currentNodeIndex],
      ];
      i = currentNodeIndex;
    }
  }
}

const arr = new maxHeap([1, 2, 3, 4, 5, 9, 8, 7, 6]);
arr.printHeap();
console.log(arr.extractMax());
console.log(arr.extractMax());
