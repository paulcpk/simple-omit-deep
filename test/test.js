import { expect } from 'chai';
import { omitDeep } from '../lib/index';

describe('omitDeep()', () => {
  it('should remove all keys in a multi level object', () => {
    const fooBar = {
      foo: 9000,
      bar: 'Hello World!',
      baz: {
        bar: 'Catch me if you can!',
        foo: 12000,
        baz: {
          bar: 'Catch me if you can!',
          foo: 12000
        }
      }
    };
    
    const cleanFooBar = omitDeep(fooBar, 'bar');

    const expected = {
      foo: 9000,
      baz: {
        foo: 12000,
        baz: {
          foo: 12000
        }
      }
    }

    expect(cleanFooBar).to.deep.equal(expected);
  });
});