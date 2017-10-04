var elements = document.getElementsByClassName('pell');
var textAreas = document.getElementsByClassName('pell-field');
var contents = document.getElementsByClassName('pell-content');
var buttons = document.getElementsByClassName('pell-button');
var switchs = document.getElementsByClassName('pell-switch');
var counts = document.getElementsByClassName('pell-count');

var _loop = function _loop(i) {

  pell.init({
    element: elements[i],
    actions: ['bold', 'heading2', {
      name: 'heading3',
      icon: '<b>H<sub>3</sub></b>',
      title: 'Heading 2',
      result: function result() {
        return pell.exec('formatBlock', '<H3>');
      }
    }, 'paragraph', 'olist', 'ulist', 'underline', 'strikethrough', 'italic', 'image', 'link'],
    root: 'pell'
  });

  textAreas[i].oninput = function ($this) {
    contents[i].innerHTML = this.value;
    counts[i].innerHTML = this.value.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').length;
  };

  contents[i].oninput = function ($this) {
    counts[i].innerHTML = this.textContent.length;
    textAreas[i].value = this.innerHTML;
  };

  switchs[i].onclick = function ($this) {
    var area = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : textAreas[i];
    var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : contents[i];

    if (this.innerHTML === 'VIEW HTML') {
      this.innerHTML = 'VIEW EDITOR';
      area.style.width = content.clientWidth + 'px';
      area.style.height = elements[i].clientHeight + 'px';
      area.style.display = 'block';
    } else {
      this.innerHTML = 'VIEW HTML';
      area.style.display = 'none';
    }
  };
};

for (var i = 0; i < elements.length; i++) {
  _loop(i);
}

function addTypeButton() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("type", "button");
  };
};

function valueCheck() {
  for (var i = 0; i < elements.length; i++) {
    if (textAreas[i].value !== '') {
      contents[i].innerHTML = textAreas[i].value;
      counts[i].innerHTML = textAreas[i].value.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').length;
    } else {
      contents[i].innerHTML = '<p></p>';
    }
  };
};

window.addEventListener("DOMContentLoaded", addTypeButton, false);
window.addEventListener("DOMContentLoaded", valueCheck, false);
