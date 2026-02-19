if (0) console.log('#1 zero is true') // 0 is falsy, so this will not log
if ("0") console.log('#2 zero is true') // "0" is a non-empty string, which is truthy, so this will log
if (null) console.log('null is true') // null is falsy, so this will not log
if (-1) console.log('negative is true') // -1 is a non-zero number, which is truthy, so this will log
if (1) console.log('positive is true') // 1 is a non-zero number, which is truthy, so this will log