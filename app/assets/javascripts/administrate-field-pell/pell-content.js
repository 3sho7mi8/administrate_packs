const elements = document.getElementsByClassName('pell')
const textAreas = document.getElementsByClassName('pell-field')
const contents = document.getElementsByClassName('pell-content')
const buttons = document.getElementsByClassName('pell-button')
const switchs = document.getElementsByClassName('pell-switch')
const counts = document.getElementsByClassName('pell-count')

for ( let i = 0; i < elements.length; i++ ) {

  pell.init({
    element: elements[i],
    actions: [
      'bold',
      'heading2',
      {
        name: 'heading3',
        icon: '<b>H<sub>3</sub></b>',
        title: 'Heading 2',
        result: () => pell.exec('formatBlock', '<H3>')
      },
      'paragraph',
      'olist',
      'ulist',
      'underline',
      'strikethrough',
      'italic',
      'image',
      'link'
    ],
    root: 'pell',
  });

  textAreas[i].oninput = function ($this) {
    contents[i].innerHTML = this.value
    counts[i].innerHTML = this.value.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').length
  };

  contents[i].oninput = function ($this) {
    counts[i].innerHTML = this.textContent.length
    textAreas[i].value = this.innerHTML
  };

  switchs[i].onclick = function ($this, area = textAreas[i], content = contents[i]) {
    if ( this.innerHTML === 'VIEW HTML' ) {
      this.innerHTML = 'VIEW EDITOR'
      area.style.width = content.clientWidth + 'px'
      area.style.height = elements[i].clientHeight + 'px'
      area.style.display = 'block'
    } else {
      this.innerHTML = 'VIEW HTML'
      area.style.display = 'none'
    }
  };
}

function addTypeButton() {
  for ( let i = 0; i < buttons.length; i++ ) {
    buttons[i].setAttribute("type", "button")
  };
};

function valueCheck() {
  for ( let i = 0; i < elements.length; i++ ) {
    if ( textAreas[i].value !== '' ) {
      contents[i].innerHTML = textAreas[i].value;
      counts[i].innerHTML = textAreas[i].value.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').length;
    } else {
      contents[i].innerHTML = '<p></p>'
    }
  };
};

window.addEventListener( "DOMContentLoaded", addTypeButton, false );
window.addEventListener( "DOMContentLoaded", valueCheck, false );
