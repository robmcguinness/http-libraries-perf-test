# HTTP Libraries Benchmarks

> Forked from [vyng/http-libraries-perf-test](https://github.com/vyng/http-libraries-perf-test)

## Libraries

* [http.request](https://nodejs.org/api/http.html#http_http_request_options_callback)
* [axios](https://github.com/axios/axios)
* [gaxios](https://github.com/googleapis/gaxios)
* [node-fetch](https://github.com/node-fetch/node-fetch)
* [got](https://github.com/sindresorhus/got)
* [ky](https://github.com/sindresorhus/ky-universal)
* [phin](https://github.com/ethanent/phin)
* [simple-get](https://github.com/feross/simple-get)
* [superagent](https://github.com/visionmedia/superagent)

## Results

```bash
http.request POST request x 36,673 ops/sec ±1.45% (80 runs sampled)
http.request GET request x 35,349 ops/sec ±2.94% (78 runs sampled)

axios GET request x 9,894 ops/sec ±4.88% (73 runs sampled)
axios POST request x 9,825 ops/sec ±7.53% (81 runs sampled)

gaxios GET request x 8,881 ops/sec ±7.69% (74 runs sampled)
gaxios POST request x 9,511 ops/sec ±0.73% (83 runs sampled)

got GET request x 3,901 ops/sec ±10.85% (67 runs sampled)
got POST request x 4,532 ops/sec ±9.61% (74 runs sampled)

ky GET request x 552 ops/sec ±1.66% (73 runs sampled)
ky POST request x 575 ops/sec ±1.46% (72 runs sampled)

fetch GET request x 18,506 ops/sec ±1.03% (82 runs sampled)
fetch POST request x 16,463 ops/sec ±5.17% (77 runs sampled)

phin GET request x 22,711 ops/sec ±1.39% (83 runs sampled)
phin POST request x 23,485 ops/sec ±1.66% (81 runs sampled)

simple-get GET request x 23,360 ops/sec ±1.19% (81 runs sampled)
simple-get POST request x 20,382 ops/sec ±0.65% (81 runs sampled)

superagent GET request x 17,579 ops/sec ±1.95% (81 runs sampled)
superagent POST request x 17,861 ops/sec ±0.66% (80 runs sampled)

Fastest is http.request POST request
```

## System

* **NodeJS**: `v12.14.1`
* **Operating System**: MacOS Mojave 10.14.6
* **Model**: Apple Macbook Pro 15-inch 2017
* **Processor**: 2.9Ghz Intel Core i7
* **Memory**: 16GB 2133 Mhz LPDDR3
* **Disk**: APPLE SSD SM0512