'use strict';

var s = require('underscore.string');

categoryLink = function(categoryTitle){
  return `<a href="${categoryTitle}">s.titleize(categoryTitle)</a>`;
};


module.exports = categoryLink;
