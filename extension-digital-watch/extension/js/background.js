'use strict';

new Promise(function (resolve) {
  chrome.runtime.onInstalled.addListener(resolve);
}).then(function () {
  return new Promise(function (resolve) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, resolve);
  });
}).then(function () {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {
        hostEquals: 'twitter.com',
        schemes: ['https']
      }
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});