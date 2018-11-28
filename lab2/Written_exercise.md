1. we use setImmediate() instead of setTimeout({}, 0) when we want our callback to be executed at check phase after I/O events callbacks
2. process.nextTick() is not a part of the event loop and it runs before any additional IO event timers and the event loop
3. fs, http, https, module, net, path, os, root,util, vm, stream