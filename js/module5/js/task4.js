class StringBuilder {
  constructor(str) {
    // eslint-disable-next-line
    this._value = str;
  }

  get value() {
    // eslint-disable-next-line
    return `'${this._value}'`;
  }

  append(str) {
    // eslint-disable-next-line
    this._value = `${this._value}${str}`;
  }

  prepend(str) {
    // eslint-disable-next-line
    this._value = `${str}${this._value}`;
  }

  pad(str) {
    // eslint-disable-next-line
    this._value = `${str}${this._value}${str}`;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);
