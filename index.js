const http = require('http');
const axios = require('axios');
const gaxios = require('gaxios');
const fetch = require('node-fetch');
const got = require('got');
const phin = require('phin').unpromisified;
const simpleGet = require('simple-get');
const superagent = require('superagent');
const ky = require('ky-universal');

const nock = require('nock');
const HOST = 'localhost';
const URL = `http://${HOST}/test`;

axios.defaults.baseURL = `http://${HOST}`;
gaxios.instance.defaults.baseURL = `http://${HOST}`;

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

nock('http://localhost').persist()
    // .log(console.log)
    .post('/test').reply(200, 'ok')
    .get('/test').reply(200, 'ok');

suite.add('http.request POST request', {
    defer: true,
    fn: (defer) => {
        const req = http.request({ host: HOST, path: '/test', method: 'POST' }, (res) => {
            res.resume().on('end', () => defer.resolve());
        });
        req.write();
        req.end();
    }
});

suite.add('http.request GET request', {
    defer: true,
    fn: (defer) => {
        http.request({ path: '/test', host: HOST }, (res) => {
            res.resume().on('end', () => defer.resolve());
        }).end();
    }
});

suite.add('axios GET request', {
    defer: true,
    fn: (defer) => {
        axios.get('/test').then(() => defer.resolve())
    }
});

suite.add('axios POST request', {
    defer: true,
    fn: (defer) => {
        axios.post('/test').then(() => defer.resolve());
    }
});

suite.add('gaxios GET request', {
    defer: true,
    fn: (defer) => {
        gaxios.request({
            url: '/test',
            method: 'GET'
        }).then(() => defer.resolve())
    }
});

suite.add('gaxios POST request', {
    defer: true,
    fn: (defer) => {
        gaxios.request({
            url: '/test',
            method: 'POST'
        }).then(() => defer.resolve());
    }
});

suite.add('got GET request', {
    defer: true,
    fn: (defer) => {
        got.get(URL).then(()=> defer.resolve());
    }
});

suite.add('got POST request', {
    defer: true,
    fn: (defer) => {
        got.post(URL).then(() => defer.resolve());
    }
});

suite.add('ky GET request', {
    defer: true,
    fn: (defer) => {
        ky.get(URL).then(()=> defer.resolve());
    }
});

suite.add('ky POST request', {
    defer: true,
    fn: (defer) => {
        ky.post(URL).then(() => defer.resolve());
    }
});

suite.add('fetch GET request', {
    defer: true,
    fn: (defer) => {
        fetch(URL).then(() => defer.resolve())
    }
});

suite.add('fetch POST request', {
    defer: true,
    fn: (defer) => {
        fetch(URL, {method: 'POST'}).then(() => defer.resolve());
    }
});

suite.add('phin GET request', {
    defer: true,
    fn: (defer) => {
        phin(URL, () => defer.resolve());
    }
});

suite.add('phin POST request', {
    defer: true,
    fn: (defer) => {
        phin({ url: URL, method: 'POST' }, () => defer.resolve());
    }
});

suite.add('simple-get GET request', {
    defer: true,
    fn: (defer) => {
        simpleGet.concat(URL, () => defer.resolve());
    }
});

suite.add('simple-get POST request', {
    defer: true,
    fn: (defer) => {
        simpleGet.concat({ url: URL, method: 'POST' }, () => defer.resolve());
    }
});

suite.add('superagent GET request', {
    defer: true,
    fn: (defer) => {
        superagent.get(URL).end(() => { defer.resolve(); });
    }
});

suite.add('superagent POST request', {
    defer: true,
    fn: (defer) => {
        superagent.post(URL).send().end(() => defer.resolve());
    }
});

suite.on('complete', function(defer) {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
});

suite.on('cycle', function(event) {
    console.log(String(event.target));
});

suite.run({ async: true });
