var MinStack = function() {
  this.memo = {};
  this.stack = [];
  this.min = + Infinity;
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  if (val < this.min) {
      this.min = val;
  }
  this.stack.push(val);
  this.memo[this.stack.length] = this.min;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  delete this.memo[this.stack.length];
  this.stack.pop();
  this.min = this.stack.length === 0 ? +Infinity : this.memo[this.stack.length];

};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/