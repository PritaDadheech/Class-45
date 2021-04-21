function load_Images(){
enemy_img = new Image();    
enemy_img.src = "Assets/enemy.png";

player_img = new Image();
player_img.src = "Assets/fighter.png";

gem_img2 = new Image();
gem_img2.src = "Assets/vac1.png";


gem_img = new Image();
gem_img.src = "Assets/vac.gif";

win = new Audio();
win.src = "Audio/won.wav";

lose = new Audio();
lose.src = 'Audio/dead.mp3'

}
function init(){
    cvs = document.getElementById('myCanvas');
    w=cvs.width = 1252;
    h=cvs.height = 516;
    pen = cvs.getContext('2D');
    game_over = false;

    e1 = {
        x:200,
        y:50,
        w:80,
        h:80,
        speed:20,
    };

    e2 = {
        x:450,
        y:150,
        w:80,
        h:80,
        speed:35,
    };

    e3 = {
        x:700,
        y:300,
        w:80,
        h:80,
        speed:40,
    };

    e4 = {
        x:900,
        y:100,
        w:80,
        h:80,
        speed:30,
    };

    enemy = [e1,e2,e3,e4]; 

       player = {
        x:20,
        y:h/2,
        w:110,
        h:110,
        speed:30,
        health:100,
        moving:"false"
    };

gem = {
    x:w-150,
    y:h/2,
    w:150,
    h:150,
};



}