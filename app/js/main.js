const $ = require('jquery');

export default function bar() {
  $(function() {
      let $title = $('.title');
      let $number = $title.data('number');
      console.log('Hello Wepback!, number: ', $number);
  });
}
