import Vue from 'vue'

Vue.directive('numericOnly', {
  bind(el) {
      el.addEventListener('keydown', (e) => {
        var theEvent = e;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
        }
          // if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
          //     // Allow: Ctrl+A
          //     (e.keyCode === 65 && e.ctrlKey === true) ||
          //     // Allow: Ctrl+C
          //     (e.keyCode === 67 && e.ctrlKey === true) ||
          //     // Allow: Ctrl+X
          //     (e.keyCode === 88 && e.ctrlKey === true) ||
          //     // Allow: home, end, left, right
          //     (e.keyCode >= 35 && e.keyCode <= 39)) {
          //     return
          // }
          // if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          //     e.preventDefault()
          // }
      })
    }
  })