class EventBus {
  constructor() {
    this.task = {};
  }

  on = function (key, cb) {
    if (Array.isArray(this.task[key])) {
      this.task[key].push(cb);
    } else {
      this.task[key] = [cb];
    }
  };
  emit = function () {
    var key = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    var cbArr = this.task[key];
    if (Array.isArray(cbArr) && cbArr.length > 0) {
      cbArr.forEach((cb) => {
        cb(args);
      });
    }
  };

  removeOn = function (key, cb) {
    var cbArr = this.task[key];
    if (!Array.isArray(cbArr)) return;

    for (let i = 0; i < cbArr.length; i++) {
      if (cbArr[i] === cb) {
        cbArr.splice(i, 1);
        break;
      }
    }
  };
}

const message = new EventBus();

function fn1() {
  console.log('fn1', [...arguments]);
}

function fn2() {
  console.log('fn2', [...arguments]);
}

message.on('messageClick', fn1);

message.on('messageClick', fn2);

message.emit('messageClick', 1, 2, 3, 4);

message.removeOn('messageClick', fn1);

message.emit('messageClick', 1, 2, 3, 4);
