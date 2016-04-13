'use strict'



var scholasticaHelpers = {}

scholasticaHelpers.categoryLink = function(categoryTitle){
  var s = require('underscore.string')

  return `<a href="${categoryTitle}">s.titleize(categoryTitle)</a>`
}


module.exports = scholasticaHelpers;
