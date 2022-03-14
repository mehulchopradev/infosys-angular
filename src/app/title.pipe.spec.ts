import { TitlePipe } from './title.pipe';

describe('TitlePipe', () => {

  let pipe: TitlePipe;
  beforeEach(() => {
    pipe = new TitlePipe();
  });

  it('works with a single character input', () => {
    const actualOutput = pipe.transform('r');
    expect(actualOutput).toBe('R');
  });

  it('works with more than 1 character single word string', () => {
    const actualOutput = pipe.transform('mEhUl');
    expect(actualOutput).toBe('Mehul');
  });

  it('works with multi word multi character string', () => {
    const actualOutput = pipe.transform('mehul chopra');
    expect(actualOutput).toBe('Mehul chopra');
  });

  it('works with empty string passed in', () => {
    const actualOutput = pipe.transform('');
    expect(actualOutput).toBe('');
  });
});
