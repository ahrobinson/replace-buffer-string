const replaceFirst = (buffer, str, replacer) => {
  const charIndex = buffer.indexOf(str);
  buffer.write(replacer, charIndex);
  return buffer;
};

const replaceLast = (buffer, str, replacer) => {
  const charIndex = buffer.lastIndexOf(str);
  buffer.write(replacer, charIndex);
  return buffer;
};

const replaceAll = (buffer, str, replacer) => {
  for(let i = 0; i < buffer.length; i++) {
    if(buffer[i] === str.charCodeAt(0)) {
      buffer[i] = replacer.charCodeAt(0);
    }
  }
  return buffer;
};

module.exports = {
  replaceFirst,
  replaceLast,
  replaceAll,
};