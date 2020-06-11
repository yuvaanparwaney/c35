class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400,0);
        var input = createInput("Name");
        var button = createButton('Play');
        var greeting = createElement('h3');
        input.position(400,160);
        button.position(450,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello"+name+"!");
            greeting.position(500,160);
        });

    }
}