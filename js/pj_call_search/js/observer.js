const observer = {
    handlers: {},
    register: function (eventName, handler, context) {
      let handlerArray = this.handlers[eventName];
      if (undefined === handlerArray) {
          handlerArray = this.handlers[eventName] = [];
      }
      handlerArray.push({ handler: handler, context: context });
    },
    unregister: function (eventName, handler, context) {
      let handlerArray = this.handlers[eventName];
      if (undefined === handlerArray)
        return ;
      for (let hidx = 0; hidx < handlerArray.length; hidx++) {
        let currentHandler = handlerArray[hidx];
        if (handler === currentHandler['handler']
         && context === currentHandler['context']) {
          handlerArray.splice(hidx, 1);
          return ;
        }
      }
    },
    notify: function (eventName, data) {
      let handlerArray = this.handlers[eventName];
      if (undefined === handlerArray)    
        return;
  
      for (let hidx = 0; hidx < handlerArray.length; hidx++) {
        let currentHandler = handlerArray[hidx];
        currentHandler['handler'].call(currentHandler['context'], data);
      }
    }
};
