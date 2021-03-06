/**
 * each : each(list, fn)
 * Iterates through `list` (an array or an object). This is useful when dealing
 * with NodeLists like `document.querySelectorAll`.
 *
 *     var each = require('dom101/each');
 *     var qa = require('dom101/query-selector-all');
 *
 *     each(qa('.button'), function (el) {
 *       addClass('el', 'selected');
 *     });
 */

function each (list, fn) {
  var i, len = list.length;

  if (len === +len) {
    for (i = 0; i < len; i++) {
      fn(list[i], i);
    }
  } else {
    for (i in list) {
      if (list.hasOwnProperty(i))
        fn(list[i], i);
    }
  }

  return list;
}

module.exports = each;
