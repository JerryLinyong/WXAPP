


//提供全局的多语言函数, TODO：暂时未实现
global._=function(value){
    return value
}

if (!__DEV__) {
    global.console = {
      info: () => {},
      log: () => {},
      warn: () => {},
      debug: () => {},
      error: () => {}
    };
  }