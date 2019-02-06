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
* superagent
* unirest

My results:
```bash
➜  http-libraries-perf-test git:(master) ✗ node index.js
http.request POST request x 22,054 ops/sec ±10.39% (80 runs sampled)
http.request GET request x 23,214 ops/sec ±1.22% (78 runs sampled)
axios GET request x 7,194 ops/sec ±4.14% (69 runs sampled)
axios POST request x 6,740 ops/sec ±2.55% (77 runs sampled)
got GET request x 2,834 ops/sec ±4.74% (66 runs sampled)
got POST request x 3,212 ops/sec ±2.00% (79 runs sampled)
fetch GET request x 10,230 ops/sec ±3.62% (75 runs sampled)
fetch POST request x 9,325 ops/sec ±2.98% (78 runs sampled)
phin GET request x 15,872 ops/sec ±1.11% (78 runs sampled)
phin POST request x 16,289 ops/sec ±1.59% (81 runs sampled)
request GET request x 8,292 ops/sec ±5.19% (71 runs sampled)
request POST request x 7,062 ops/sec ±2.92% (72 runs sampled)
requestify GET request x 9,016 ops/sec ±2.90% (78 runs sampled)
requestify POST request x 8,039 ops/sec ±2.39% (75 runs sampled)
superagent GET request x 13,611 ops/sec ±2.27% (82 runs sampled)
superagent POST request x 13,816 ops/sec ±2.44% (80 runs sampled)
unirest GET request x 4,987 ops/sec ±4.30% (71 runs sampled)
unirest POST request x 5,201 ops/sec ±2.17% (78 runs sampled)
Fastest is http.request GET request
```

Test run on: Feb 5th, 2019 @ 5:59p PT with the following specs:
NodeJS: 10.15.0 LTS-Dubnium
Operating System: MacOS Mojave 10.14.3
Model: Apple Macbook Pro 15-inch 2017
Processor: 2.8Ghz Intel Core i7
Memory: 16GB 2133 Mhz LPDDR3
Disk: 500GB Flash (Samsung on-board SSD rated 3.5Gbps)

The clear winner is: `phin`
