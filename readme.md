### Replace Buffer String

Gives you the ability to easily replace the first, last or all occurrence(s) of a string in a buffer.

### Usage

`npm install replace-buffer-string`

```
const replaceBufferString = require('replace-buffer-string');
const myBuffer = Buffer.from('ababababa');
replaceBufferString.replaceFirst(myBuffer, 'a', 'z') // zbabababa
replaceBufferString.replaceLast(myBuffer, 'a', 'z') // zbabababz
replaceBufferString.replaceAll(myBuffer, 'a', 'z') // zbzbzbzbz
```