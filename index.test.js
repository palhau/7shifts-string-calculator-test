const Add = require('./Questions/Add');

describe('Simple string calculator', () => {
  test('The sum of String 1,2,5 should be 8', () => {
    expect(Add('1,2,5')).toBe(8);
  });

  test('If input empty string the return should be 0', () => {
    expect(Add('')).toBe(0);
  });
});

describe('Should handle new lines in the input format', () => {
  test('The sum of String 1\\n,2,3 should be 6', () => {
    expect(Add('1\n,2,3')).toBe(6);
  });

  test('The sum of String 1,\\n2,4 should be 7', () => {
    expect(Add('1,\n2,4')).toBe(7);
  });
});

describe('Should support a custom delimiter', () => {
  test('The sum of String //;\\n1;3;4 should be 8', () => {
    expect(Add('//;\n1;3;4')).toBe(8);
  });

  test('The sum of String //$\\n1$2$3 should be 6', () => {
    expect(Add('//$\n1$2$3')).toBe(6);
  });

  test('The sum of String //@\\n2@3@8 should be 13', () => {
    expect(Add('//@\n2@3@8')).toBe(13);
  });
});

describe('Negative Number Should Throw a error', () => {
  test('Throw error for -4', () => {
    expect(() => Add('//;\n1;3;-4')).toThrow();
  });
});

describe('Should be ignored numbers larger than 1000.', () => {
  test('The sum of String 2,1001 should be 2', () => {
    expect(Add('2,1001')).toBe(2);
  });
});

describe('Should accept delimiters being arbitrary length', () => {
  test('The sum of String //***\\n1***2***3 should be 6', () => {
    expect(Add('//***\n1***2***3')).toBe(6);
  });
});

describe('Should accept multiple delimiters', () => {
  test('The sum of String //$,@\\n1$2@3 should be 6', () => {
    expect(Add('//$,@\n1$2@3')).toBe(6);
  });
});

describe('Should allow multiple delimiters of arbitrary length', () => {
  test('The sum of String //$,@,***\\n1$1***7@3 should be 12', () => {
    expect(Add('//$,@,***\n1$1***7@3')).toBe(12);
  });
});
