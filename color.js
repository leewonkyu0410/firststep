var Links = {
  setColor : function (color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}

var Body = {
  setColor: function (color) {
    // document. querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function (color) {
    // document. querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}


function nightDayHandler(self) {
  var target = document.querySelector('body')
  if (self.value === '야간모드') {
    Body.setBackgroundColor('black');
    Body.setColor('#f2f4f7');
    self.value = '주간모드'

    Links.setColor('#ffde00')
  } else {
    Body.setBackgroundColor('#f2f4f7');
    Body.setColor('black');
    self.value = '야간모드';

    Links.setColor('#03cf5d')
  }
}
