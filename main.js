peter_pan_song="";
harry_potter_song="";

function setup()
{
    canvas = createCanvas(600,530);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(0,0,600,530);
}
function preload()
{
    peter_pan_song=loadSong("music.mp3");
    harry_potter_song=loadSong("music2.mp3");
}