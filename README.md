# HTTP Libraries Benchmarks

> Forked from [vyng/http-libraries-perf-test](https://github.com/vyng/http-libraries-perf-test)

## Libraries

* [http.request](https://nodejs.org/api/http.html#http_http_request_options_callback)
* [axios](https://github.com/axios/axios)
* [node-fetch](https://github.com/node-fetch/node-fetch)
* [got](https://github.com/sindresorhus/got)
* [ky](https://github.com/sindresorhus/ky-universal)
* [phin](https://github.com/ethanent/phin)
* [simple-get](https://github.com/feross/simple-get)
* [superagent](https://github.com/visionmedia/superagent)

## Results

```bash
http.request POST request x 36,563 ops/sec ±14.04% (82 runs sampled)
http.request GET request x 39,431 ops/sec ±0.96% (82 runs sampled)

axios GET request x 9,393 ops/sec ±4.53% (76 runs sampled)
axios POST request x 9,604 ops/sec ±2.50% (82 runs sampled)

got GET request x 3,747 ops/sec ±6.42% (66 runs sampled)
got POST request x 4,237 ops/sec ±4.36% (76 runs sampled)

ky GET request x 526 ops/sec ±1.59% (66 runs sampled)
ky POST request x 548 ops/sec ±1.54% (76 runs sampled)

fetch GET request x 16,982 ops/sec ±2.99% (81 runs sampled)
fetch POST request x 15,999 ops/sec ±3.23% (83 runs sampled)

phin GET request x 23,935 ops/sec ±0.85% (82 runs sampled)
phin POST request x 24,529 ops/sec ±0.91% (83 runs sampled)

simple-get GET request x 23,688 ops/sec ±1.27% (80 runs sampled)
simple-get POST request x 20,507 ops/sec ±1.37% (82 runs sampled)

superagent GET request x 18,073 ops/sec ±3.19% (82 runs sampled)
superagent POST request x 19,233 ops/sec ±0.92% (75 runs sampled)

Fastest is http.request GET request
```

## System

* **NodeJS**: `v12.14.1`
* **Operating System**: MacOS Mojave 10.14.6
* **Model**: Apple Macbook Pro 15-inch 2017
* **Processor**: 2.9Ghz Intel Core i7
* **Memory**: 16GB 2133 Mhz LPDDR3
* **Disk**: APPLE SSD SM0512