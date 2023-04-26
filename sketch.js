const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//facilitar a sua vida
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;

var angulo = 15;

//CRIAR A MATRIZ DE BALAS VAZIA
var balas = [];
var navios = [];

function preload(){
    //carrega a imagem do fundo
    cenario = loadImage("fundo.gif");

}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    parado = { isStatic: true };

    solo = Bodies.rectangle(width/2, height-2, width, 2, parado);
    World.add(world, solo);

    angleMode(DEGREES);
    //cria um objeto da classe Torre
    torre = new Torre(160, 350,150,310);
    canhao = new Canhao(180, 125, 130, 100,angulo);

    rectMode(CENTER);
    imageMode (CENTER)
}

function draw() {
    Engine.update(engine);
    background("cyan");
    //coloca uma imagem no meio do jogo
    image(cenario, width/2, height/2, width, height)

    fill("green")
    rect(solo.position.x, solo.position.y, width, 10);

    //mostra o canhao
    canhao.show();    
    //mostra a torre
    torre.show();
    mostrarNavios()
    for(var i = 0; i < balas.length; i++ ){
        if(balas[i] !== undefined){
            //mostrar a bala
            balas[i].show();
            
        }         
    }
  
}
//aciona os códigos quando qualquer tecla é apertada
function keyPressed(){
    //checa se a tecla apertada é espaço
    if(keyCode==32){
        //cria o objeto bala
        bala = new Bala(180,125,15);
        //chama o método shoot da classe
        bala.shoot();
        //adiciona a bala na matriz
        balas.push(bala);
    }
}

function mostrarNavios(){
    if(navios.length>0){
        if(navios[navios.length-1] == undefined || navios[navios.length-1].body.position.x < 900){
            navio = new Navio(width-50, height-50, 85);
            navios.push(navio)
        } 
        for(var i = 0; i < navios.length; i++ ){
            if(navios[i] !== undefined){
                //mostrar a bala
                navios[i].show();
                Body.setVelocity(navios[i].body, {x:-1, y:0})
            }         
        }
    }else{
        navio = new Navio(width-50, height-50, 85);
        navios.push(navio)
    }
}

