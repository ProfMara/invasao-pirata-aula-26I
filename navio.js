class Navio{
    constructor(x,y,raio){
        //adiciona a prop corpo no objeto
        this.body = Bodies.circle(x,y,raio);
        //adiciona esse corpo no mundo
        World.add(world, this.body);
        //adiciona a prop imagem
        this.imagem = loadImage("navio.png");
        this.r = raio;
    }

    show(){
        //facilita sua vida
        var pos = this.body.position;
        //atualizar as configurações
        push ();
        //posiciona as imagens pelo centro
        imageMode (CENTER);
        //coloca a imagem
        image (this.imagem, pos.x, pos.y, this.r*2, this.r*2)

        //voltar para as configurações antigas
        pop ()
    }
}