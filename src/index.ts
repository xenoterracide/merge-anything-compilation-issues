import { env } from  'process';
import { merge } from 'merge-anything';
import { parse } from 'dotenv';
import { pick } from 'filter-anything';
import { readFileSync } from 'fs';

const parsed = parse(readFileSync('.env'));

export const FooKey = 'FOO';
env[FooKey] = 'foo';

export const EnvLast = merge(parsed, env);
export const EnvFirst = merge({...env}, parsed)

export const JustFoo = pick({...env}, [FooKey]);
