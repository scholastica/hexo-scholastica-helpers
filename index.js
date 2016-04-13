'use strict'

s = require('underscore.string');

var scholasticaHelper = {}

scholasticaHelper.categoryLink = function(categoryTitle){
  return `<a href="${categoryTitle}">s.titleize(categoryTitle)</a>`
}


module.exports = scholasticaHelper;
