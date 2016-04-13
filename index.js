'use strict';

var s = require('underscore.string');

var scholasticaHelpers = {};

scholasticaHelpers.categoryLink = function(categoryTitle){
  return `<a href="${categoryTitle}">s.titleize(categoryTitle)</a>`;
};


module.exports = scholasticaHelpers;
