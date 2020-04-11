let $modal = document.getElementById("myModal");

var $span = document.getElementsByClassName("close")[0];
let $penaltiButton = document.getElementById('penalti-btn');
$penaltiButton.onclick = function(){
    console.dir($penaltiButton)

var myCustomCanvas = document.createElement('canvas');

// Configurações Phaser
let config = {
    width: 300,
    height: 300,
    canvas: myCustomCanvas,
    type: Phaser.WEBGL,
    scene: {
        preload: preload,
        create: create
    }
};

$modal.style.display = "block"

// Animação Penalti

let game = new Phaser.Game(config);
console.dir(game)

function preload ()
{
    this.load.image('penalti-campo', 'Assets/penalti-campo.png');
    this.load.image('botao-esquerda', 'Assets/botao-esquerda.png')
    this.load.image('botao-meio', 'Assets/botao-meio.png')
    this.load.image('botao-direita', 'Assets/botao-direita.png')
    this.load.image('player', 'Assets/player.png')
    this.load.image('bola', 'Assets/bola.png')
    this.load.image('adversario', 'Assets/adversario.png')
}

function create ()
{
    let campo = this.add.sprite(150, 150, 'penalti-campo').setInteractive();
    let botaoEsquerda = this.add.image(50, 30, 'botao-esquerda').setInteractive();
    let botaoMeio = this.add.image(150, 30, 'botao-meio').setInteractive();
    let botaoDireita = this.add.image(250, 30, 'botao-direita').setInteractive();
    let player = this.add.image(130, 120, 'player').setInteractive();
    let bola = this.add.image(150, 160, 'bola').setInteractive();
    let adversario = this.add.image(150, 280, 'adversario').setInteractive();

    let goal = true;

    botaoEsquerda.on('pointerover', function (event) {
        this.setTint(0x4BB28D);
    });

    botaoEsquerda.on('pointerout', function (event) {
        this.clearTint();
    });

    botaoEsquerda.on('pointerdown', function (event) {
        botaoEsquerda.visible = false;
        botaoMeio.visible = false;
        botaoDireita.visible = false;
        if (goal){
            let playerAnimationGoal = this.scene.tweens.add({
                targets: player,
                x: 150,
                y: 150,
                ease: 'Power1',
                duration: 1000
            });
            let bolaAnimationGoal = this.scene.tweens.add({
                targets: bola,
                x: 120,
                y: 285,
                ease: 'Power2',
                duration: 1000,
                delay: 900
            })
            let adversarioAnimationGoal = this.scene.tweens.add({
                targets: adversario,
                x: 180,
                y: 280,
                ease: 'Power2',
                duration: 1000,
                delay: 1000
            })
        } else {
            let playerAnimationPerdeu = this.scene.tweens.add({
                targets: player,
                x: 150,
                y: 150,
                ease: 'Power1',
                duration: 1000
            });
            let bolaAnimationPerdeu = this.scene.tweens.add({
                targets: bola,
                x: 120,
                y: 270,
                ease: 'Power2',
                duration: 1000,
                delay: 900
            })
            let adversarioAnimationPerdeu = this.scene.tweens.add({
                targets: adversario,
                x: 120,
                y: 280,
                ease: 'Power2',
                duration: 1000,
                delay: 1000
            })
        }
        setInterval(function(){ game.canvas.remove(); }, 5000);
    });

    botaoMeio.on('pointerover', function (event) {
        this.setTint(0x4BB28D);
    });

    botaoMeio.on('pointerout', function (event) {
        this.clearTint();
    });

    botaoMeio.on('pointerdown', function (event) {
        botaoEsquerda.visible = false;
        botaoMeio.visible = false;
        botaoDireita.visible = false;
        if (goal){
            console.log(botaoMeio)
            let playerAnimationGoal = this.scene.tweens.add({
                targets: player,
                x: 150,
                y: 150,
                ease: 'Power1',
                duration: 1000
            });
            let bolaAnimationGoal = this.scene.tweens.add({
                targets: bola,
                x: 150,
                y: 285,
                ease: 'Power2',
                duration: 1000,
                delay: 900
            })
            let adversarioAnimationGoal = this.scene.tweens.add({
                targets: adversario,
                x: 180,
                y: 280,
                ease: 'Power2',
                duration: 1000,
                delay: 1000
            })
        } else {
            let playerAnimationPerdeu = this.scene.tweens.add({
                targets: player,
                x: 150,
                y: 150,
                ease: 'Power1',
                duration: 1000
            });
            let bolaAnimationPerdeu = this.scene.tweens.add({
                targets: bola,
                x: 150,
                y: 270,
                ease: 'Power2',
                duration: 1000,
                delay: 900
            })
            let adversarioAnimationPerdeu = this.scene.tweens.add({
                targets: adversario,
                x: 150,
                y: 280,
                ease: 'Power2',
                duration: 1000,
                delay: 1000
            })
        }
        setInterval(function(){ game.canvas.remove(); }, 5000);
    });

    botaoDireita.on('pointerover', function (event) {
        this.setTint(0x4BB28D);
    });

    botaoDireita.on('pointerout', function (event) {
        this.clearTint();
    });

    botaoDireita.on('pointerdown', function (event) {
        botaoEsquerda.visible = false;
        botaoMeio.visible = false;
        botaoDireita.visible = false;
        if (goal){
            console.log(botaoDireita)
            let playerAnimationGoal = this.scene.tweens.add({
                targets: player,
                x: 150,
                y: 150,
                ease: 'Power1',
                duration: 1000
            });
            let bolaAnimationGoal = this.scene.tweens.add({
                targets: bola,
                x: 180,
                y: 285,
                ease: 'Power2',
                duration: 1000,
                delay: 900
            })
            let adversarioAnimationGoal = this.scene.tweens.add({
                targets: adversario,
                x: 130,
                y: 280,
                ease: 'Power2',
                duration: 1000,
                delay: 1000
            })
        } else {
            let playerAnimationPerdeu = this.scene.tweens.add({
                targets: player,
                x: 150,
                y: 150,
                ease: 'Power1',
                duration: 1000
            });
            let bolaAnimationPerdeu = this.scene.tweens.add({
                targets: bola,
                x: 180,
                y: 270,
                ease: 'Power2',
                duration: 1000,
                delay: 900
            })
            let adversarioAnimationPerdeu = this.scene.tweens.add({
                targets: adversario,
                x: 180,
                y: 280,
                ease: 'Power2',
                duration: 1000,
                delay: 1000
            })
        }
        setInterval(function(){ game.canvas.remove(); }, 5000);
    });   
  }
}

// When the user clicks on <span> (x), close the modal
$span.onclick = function() {
  $modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == $modal) {
    $modal.style.display = "none";
  }
}