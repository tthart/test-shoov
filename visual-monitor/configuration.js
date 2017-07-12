'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=iphone5 mocha
var local_on = process.env.LOCAL ? process.env.LOCAL : false;

var capsConfig = {
  'chrome': {
    'browser' : 'Chrome',
    'browserstack.local': local_on,
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080'
  },
  'safari': {
    'browser' : 'Safari',
    'browserstack.local': local_on,
    'os' : 'OSx',
    'os_version' : 'El Capitan',
    'resolution' : '1920x1080'
  },
  'firefox': {
    'browser' : 'Firefox',
    'browserstack.local': local_on,
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1080'
  },
  'edge': {
    'browser' : 'Edge',
    'browserstack.local': local_on,
    'os' : 'Windows',
    'os_version' : '10',
    'resolution' : '1920x1080'
  },
   'ie11': {
    'browser' : 'Internet Explorer',
    'browser_version' : '11',
    'browserstack.local': local_on,
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1920x1080'
  }

};

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var onePage = process.env.PAGE || undefined;  
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;
var phone = process.env.PHONE || undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '-' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'default';

var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'https://www.jisc.ac.uk/';

var resultsCallback = process.env.DEBUG ? console.log : shoovWebdrivercss.processResults;



module.exports = {
  caps: caps,
  selectedCaps: selectedCaps,
  testName: testName,
  baseUrl: baseUrl,
  phone: phone,
  resultsCallback: resultsCallback
};
