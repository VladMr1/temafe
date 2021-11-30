











let closeButton = document.querySelector('#popupParent .headerClose');

closeButton.addEventListener('click', function() {

    let popup = document.getElementById('popup');
    popup.style.display = 'none';

    // moving the h1 content
    var x = document.getElementById("h1").innerHTML;
    document.getElementById("h11").innerHTML = x;
});

