# HTTP libraries performance test (2/2019)

Forked from [nik-kor/http-libraries-perf-test](https://github.com/nik-kor/http-libraries-perf-test)

Includes:
* http.request - But who really wants to use that?
* axios
* node-fetch
* got
* phin
* request
* requestify
* simpleget
* superagent
* unirest

My results:
```bash
➜  http-libraries-perf-test git:(master) ✗ node index.js
http.request POST request x 20,435 ops/sec ±12.93% (70 runs sampled)
http.request GET request x 22,059 ops/sec ±4.04% (78 runs sampled)
axios GET request x 6,659 ops/sec ±5.83% (70 runs sampled)
axios POST request x 7,129 ops/sec ±1.76% (79 runs sampled)
got GET request x 2,753 ops/sec ±5.02% (69 runs sampled)
got POST request x 2,960 ops/sec ±2.44% (73 runs sampled)
fetch GET request x 9,861 ops/sec ±3.93% (76 runs sampled)
fetch POST request x 8,817 ops/sec ±3.51% (74 runs sampled)
phin GET request x 15,278 ops/sec ±1.73% (80 runs sampled)
phin POST request x 15,544 ops/sec ±1.92% (80 runs sampled)
request GET request x 8,118 ops/sec ±4.64% (70 runs sampled)
request POST request x 6,418 ops/sec ±2.76% (74 runs sampled)
requestify GET request x 8,323 ops/sec ±3.04% (71 runs sampled)
requestify POST request x 7,768 ops/sec ±1.92% (72 runs sampled)
simple-get GET request x 15,131 ops/sec ±1.48% (79 runs sampled)
simple-get POST request x 14,218 ops/sec ±2.17% (76 runs sampled)
superagent GET request x 13,389 ops/sec ±1.96% (78 runs sampled)
superagent POST request x 13,442 ops/sec ±2.28% (78 runs sampled)
unirest GET request x 4,668 ops/sec ±3.84% (73 runs sampled)
unirest POST request x 4,842 ops/sec ±2.16% (77 runs sampled)
Fastest is http.request GET request,http.request POST request
```

Test run on: Feb 5th, 2019 @ 7:50p PT with the following specs:
NodeJS: 10.15.0 LTS-Dubnium
Operating System: MacOS Mojave 10.14.3
Model: Apple Macbook Pro 15-inch 2017
Processor: 2.8Ghz Intel Core i7
Memory: 16GB 2133 Mhz LPDDR3
Disk: 500GB Flash (Samsung on-board SSD rated 3.5Gbps)

The clear winners are: `phin` and `simple-get` for performance alone.
Note: Not all libraries have the same feature set and might be missing something.
