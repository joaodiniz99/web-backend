class Emitter {
  constructor() {
    this.events = {
      listeners: [],
    };
  }
}

Emitter.prototype.on = function (type, listener) {
  // console.log("Type: " + type + ", Listener: " + listener);
  if (!this.events[type]) {
    this.events[type] = [];
  }
  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach((listener) => {
      listener();
    });
  }
};

module.exports = Emitter;
