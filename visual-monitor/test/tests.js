'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');
var config = require("../configuration.js");
var screensizes = [320, 757, 990];

describe('::Visual regression:: Browser: ' + config.selectedCaps, function() {

  this.timeout(3000000);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, config.caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

if(config.onePage == "undefined") {
  it('should show the Home page',function(done) {
    client
      .url(config.baseUrl)
      .webdrivercss(config.testName + '.home', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.phone != "true" ? screensizes: undefined,
      }, config.resultsCallback)
      .call(done);
  });
  
  it('should show the Guides listing page',function(done) {
    client
      .url(config.baseUrl + 'guides/')
      .webdrivercss(config.testName + '.guides', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.phone != "true" ? screensizes: undefined,
      }, config.resultsCallback)
      .call(done);
  });
  
    it('should show the R and D Projects page',function(done) {
    client
      .url(config.baseUrl + 'rd/projects/')
      .webdrivercss(config.testName + '.projects', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.phone != "true" ? screensizes: undefined,
      }, config.resultsCallback)
      .call(done);
  });
    
      it('should show the my Events page',function(done) {
    client
      .url(config.baseUrl + 'events/')
      .webdrivercss(config.testName + '.events', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.phone != "true" ? screensizes: undefined,
      }, config.resultsCallback)
      .call(done);
  });
    
      
          
      it('should show the Jobs page',function(done) {
    client
      .url(config.baseUrl + 'jobs/')
      .webdrivercss(config.testName + '.jobs', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.phone != "true" ? screensizes: undefined,
      }, config.resultsCallback)
      .call(done);
  });
      
            it('should show the News page',function(done) {
    client
      .url(config.baseUrl + 'news/')
      .webdrivercss(config.testName + '.news', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.phone != "true" ? screensizes: undefined,
      }, config.resultsCallback)
      .call(done);
  });
    
     it('should show a Staff profile page',function(done) {
    client
      .url(config.baseUrl + 'staff/paul-feldman')
      .webdrivercss(config.testName + '.staff', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.phone != "true" ? screensizes: undefined,
      }, config.resultsCallback)
      .call(done);
  });
  } else {
     it('should show the Home page',function(done) {
    client
      .url(config.onePage)
      .webdrivercss(config.testName + config.onePage, {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.phone != "true" ? screensizes: undefined,
      }, config.resultsCallback)
      .call(done);
  });
  }
});
