/* Todos os personagens deverão ser colocados em um Array. */
const personagem=[
    {nome: "Bruce Wayne", codinome: "Batman", armPrincipal:"Dinheiro", velocidade: 60,forca:65,resistencia:70},
    {nome: "Clark Kent", codinome: "Superman", armPrincipal:"Laser nos Zói", velocidade: 89,forca:95,resistencia:89},
    {nome: "Diana", codinome: "Mulher Maravilha", armPrincipal:"Laço", velocidade: 70,forca:86,resistencia:90},
    {nome: "Barry Allen", codinome: "Flash", armPrincipal:"Pernas", velocidade: 99,forca:60,resistencia:84},
    {nome: "Arthur Curry", codinome: "Aquaman", armPrincipal:"Mar", velocidade: 80,forca:85,resistencia:86},
    {nome: "J'oon", codinome: "Caçador de Marte", armPrincipal:"Alien", velocidade: 72,forca:83,resistencia:69},
    {nome: "Darkseid", codinome: "Darkseid", armPrincipal:"Vilão e tals", velocidade: 78,forca:88,resistencia:87},
]

/* Utilize estruturas de repetição (ex: for) para percorrer cada elemento do Array e fazer a comparação. */
/* imprimir a descrição de cada personagem que esta sendo comparado e também apontar onde um personagem “vence” */
for (let i = 0; i < personagem.length; i++) {
    for (let m = i+1; m < personagem.length; m++){
        if (personagem[i].velocidade > personagem[m].velocidade) 
            console.log(personagem[i].nome+ " é mais veloz que " + personagem[m].nome);
        else if (personagem [m].velocidade > personagem [i].velocidade)
            console.log(personagem[m].nome + " é mais veloz que " + personagem[i].nome);
        
        if (personagem[i].forca > personagem[m].forca) /*feijaocfarinha*/
            console.log(personagem[i].nome +" é mais forte que " + personagem[m].nome);
        else if (personagem[m].forca > personagem[i].forca)
            console.log(personagem[m].nome +" é mais forte que " + personagem[i].nome);

        if (personagem[i].resistencia > personagem[m].resistencia)
            console.log(personagem[i].nome +" é mais resistente que " + personagem[m].nome);
        else if (personagem[m].resistencia > personagem[i].resistencia)
            console.log(personagem[m].nome +" é mais resistente que " + personagem[i].nome);
    }
}
