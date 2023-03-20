
function LimitedArray(size) {
  this.storage = [];
  this.size = size;
}

LimitedArray.prototype.add(item) {
  if (this._storage.length < this.size) {
    this.storage.push(item);
    this.size++;
  }
}

LimitedArray.prototype.forEach(func) {
  this.storage.forEach((x) => {
    func(x);
  })
}

LimitedArray.prototype.remove(item) {

}

function HashTable(size) {
  this._storage = [];
  this.size = size;
  this.length = 0;
  for (let i = 0; i < size; i++) {
    this._storage.push(null);
  }
}

HashTable.prototype.hash(key) {
  return key.toString().length % this.size;
}

HashTable.prototype.insert(key, value) {
  const hash = this.hash(key);

  if (this._storage[hash] === null) {
    this._storage[hash] = [key, value];
  } else {
    this._storage[hash].push([key,value]);
  }
  this.length++;

}

HashTable.prototype.retrieve(key) {
  const hash = this.hash(key);
  const store = this._storage[hash];

  for (let i = 0; i < store.length; i++) {
    if (store[i][0] === key) {
      return store[i][1];
    }
  }

  return null;

}

HashTable.prototype.remove(key) {
  const hash = this.hash(key);
  const store = this._storage[hash];

  for (let i = 0; i < store.length; i++) {
    if (store[i][0] === key) {
      return store.splice(i, 1);
    }
  }

  return;
}

HashTable.prototype.forEach(func) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] !== null) {
      this._storage[i].forEach((x) => {
        func(x);
      })
    }
  }
}

HashTable.prototype.resize() {

  let resize;
  let need = false;

  if (this.length >= .75 * this.size) {
    resize = 2 * this.size;
    need = true;
  } else if (this.length <= .25 * this.size) {
    resize = Math.floor(.5 * this.size);
    need = true;
  }

  let newTable = new HashTable(resize);

  if (need) {
    this.forEach((x) => {
      newTable.insert(x[0], x[1]);
    })
  }

  this = newTable;

}
