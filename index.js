var s = require('underscore.string');

hexo.extend.helper.register('categoryLink', function(categoryTitle){
  return `<a href="/categories/${s.slugify(categoryTitle)}">${s.titleize(categoryTitle)}</a>`
});

