import convertArrayToObject from '../convertArrayToObject';

describe('convertArrayToObject', () => {
  it('is convertArrayToObject', () => {
    expect(convertArrayToObject()).toEqual({});
  });

  it('is a converted object by default indexName and valueName', () => {
    expect(
      convertArrayToObject([
        { name: 'a', value: 'aa' },
        { name: 'b', value: 'bb' },
        { name: 'c', value: 'cc' },
      ]),
    ).toEqual({ a: 'aa', b: 'bb', c: 'cc' });
  });

  it('is a converted object by indexName and valueName', () => {
    expect(
      convertArrayToObject(
        [
          { a: 'a', b: 'aa' },
          { a: 'b', b: 'bb' },
          { a: 'c', b: 'cc' },
        ],
        'a',
        'b',
      ),
    ).toEqual({ a: 'aa', b: 'bb', c: 'cc' });
  });
});
