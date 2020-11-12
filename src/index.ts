import { SetOptional, SetRequired } from 'type-fest';

import { merge } from 'merge-anything';

class My {
  foo!: string;
  bar?: string;
  baz: string | undefined;
}

const input: SetRequired<Partial<My>, 'baz'> = {
  baz: '',
};

const defaults: SetOptional<My, 'baz'> = {
  foo: 'bar',
};

const result: My = merge(defaults, input);
