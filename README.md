# HTTP Libraries Benchmarks

> Forked from [vyng/http-libraries-perf-test](https://github.com/vyng/http-libraries-perf-test)

## Libraries

* http.request
* axios
* node-fetch
* got
* phin
* simpleget
* superagent

## Results

```bash
http.request POST request x 38,437 ops/sec ±6.72% (80 runs sampled)
http.request GET request x 37,361 ops/sec ±2.32% (84 runs sampled)
axios GET request x 8,959 ops/sec ±2.98% (80 runs sampled)
axios POST request x 8,854 ops/sec ±3.65% (77 runs sampled)
got GET request x 3,318 ops/sec ±7.98% (69 runs sampled)
got POST request x 4,107 ops/sec ±3.10% (75 runs sampled)
fetch GET request x 16,110 ops/sec ±3.42% (81 runs sampled)
fetch POST request x 14,704 ops/sec ±3.65% (76 runs sampled)
phin GET request x 21,622 ops/sec ±2.74% (81 runs sampled)
phin POST request x 23,700 ops/sec ±0.62% (80 runs sampled)
simple-get GET request x 23,416 ops/sec ±1.08% (84 runs sampled)
simple-get POST request x 20,631 ops/sec ±0.63% (81 runs sampled)
superagent GET request x 17,685 ops/sec ±3.87% (75 runs sampled)
superagent POST request x 18,438 ops/sec ±1.02% (86 runs sampled)

Fastest is http.request GET requests
```

## System

* **NodeJS**: `v12.14.1`
* **Operating System**: MacOS Mojave 10.14.6
* **Model**: Apple Macbook Pro 15-inch 2017
* **Processor**: 2.9Ghz Intel Core i7
* **Memory**: 16GB 2133 Mhz LPDDR3
* **Disk**: APPLE SSD SM0512