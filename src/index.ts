import { SetRequired } from 'type-fest';
import { merge } from 'merge-anything';

class My {
  foo!: string;
  bar?: string;
  baz: string | undefined;
  private _foo: string = '';
}

type MyPartial = SetRequired<Partial<My>, 'baz'>;
type MyDefaults = SetRequired<My, 'bar'> ;
type MyArgs = Required<My>;

const input: MyPartial = {
  baz: 'override',
};

const defaults: MyDefaults = {
  foo: 'a',
  bar: 'b',
  baz: 'c',
};


class Bar {
  constructor( my: MyArgs) {}
}
new Bar(merge(defaults, input));
