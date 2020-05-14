![CI](https://github.com/halvardssm/deno-path/workflows/CI/badge.svg)
[![(Deno)](https://img.shields.io/badge/deno-1.0.0-green.svg)](https://deno.land)

# Deno Path

A path resolver for deno. Will allow you to pass an array of paths to return one string containing the final path.

## Usage

```ts
import { resolve } from 'https://raw.githubusercontent.com/halvardssm/deno-path/master/mod.ts';

const path = resolve('a', './b', '/c', '../d', 'e/../f')

console.log(path)
// d/f
```

## Contributing

Feel free to make pr's or create an issue!
