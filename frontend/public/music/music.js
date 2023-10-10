//music
init()
function init()
{
  document.addEventListener('click', function(evt) { if (evt.target.tagName.toLowerCase() == 'li') { play(evt.target); } }, false);
}

function skip()
{
}

function play(elem)
{
    var audio = document.getElementById('audio');
    audio.src = '/music/' + elem.textContent + '.mp3';
    audio.play();
    elem.className = 'playing';
    skip = function()
    {
            elem.className = '';
            if (elem.nextElementSibling)
            {
                play(elem.nextElementSibling);
            }
    }
}