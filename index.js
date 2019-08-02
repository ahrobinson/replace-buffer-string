const replaceFirst = (buffer, str, replacer) => {
  const charIndex = buffer.indexOf(str);
  buffer.write(str, charIndex - 1, replacer);
  return buffer;
};

const replaceLast = (buffer, str, replacer) => {
  const charIndex = buffer.lastIndexOf(str);
  buffer.write(str, charIndex - 1, replacer);
  return buffer;
};

const replaceAll = (buffer, str, replacer) => {
  for(let i = 0; i < buffer.length; i++) {
    if(buffer[i] === str) {
      buffer[i] = replacer;
    }
  }
  return buffer;
};

module.exports = {
  replaceFirst,
  replaceLast,
  replaceAll,
};