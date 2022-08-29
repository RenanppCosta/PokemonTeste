function Pokemon(nome, pontosAtaque, pontosDefesa){
    this.nome = nome;
    this.pontosAtaque = pontosAtaque;
    this.pontosDefesa = pontosDefesa;
    this.atacar = (oponente) =>{
        const vencedor = (this.pontosAtaque > oponente.pontosDefesa) ? this : oponente;
        console.log(`O vencedor da luta é ${vencedor.nome}`)
        //if(this.pontosAtaque > oponente.pontosDefesa){
           // console.log(`${this.nome} venceu o pokemon ${oponente.nome}!`)
        //}else{
            //console.log(`${this.nome} foi derrotado pelo ${oponente.nome}!`)
        //}
    }
}

let pineco = new Pokemon("Pineco", 1200, 500);
let pikachu = new Pokemon("Pikachu", 2500, 1000);

let jsonPokemons = '{"count":1154,"next":"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}'
let listaPokemons = JSON.parse(jsonPokemons);

//let pinecoJson = JSON.stringify(pineco);

pineco.atacar(pikachu);


console.log(pikachu);
console.log(pineco);
console.log(listaPokemons);

//para cada item de RESULTS criar um novo pokemon e add em uma lista de pokemons

let instanciaPokemons = [];

for(let i = 0; i < listaPokemons.results.length; i++){
    let instancia = new Pokemon(
        listaPokemons.results[i].name,
        (i + 1) * Math.random() * 1000,
        (i + 1) * Math.random() * 500
        );
    instanciaPokemons.push(instancia);
};

console.log(instanciaPokemons);
