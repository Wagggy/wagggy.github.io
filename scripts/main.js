var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpeg') {
      myImage.setAttribute ('src','images/img2.jpeg');
    } else {
      myImage.setAttribute ('src','images/firefox.jpeg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  myButton.onclick = function() {
    setUserName();
  }