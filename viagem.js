let horas, consumoMedio, consumoTotal, velocidadeMedia, distancia, precoGasolina, precoEtanol, tipoCombustivel;

horas = 13;
velocidadeMedia = 110;
consumoMedio = 14;
precoEtanol = 3.899;
precoGasolina = 5.899;
tipoCombustivel = 0; //se for 0 é etanol se for 1 é gasolina


distancia = horas * velocidadeMedia;
    console.log(`a distancia total da viagem sera de ${distancia}km `);

consumoTotal = distancia / consumoMedio;
    console.log(`o consumo total em litros sera de ${consumoTotal.toLocaleString('pt-BR')} em litros`);

    // console.log(`o custo para abastecer com gasolina sera de ${(consumoTotal * precoGasolina).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    // console.log(`o custo para abastecer com etanol sera de ${(consumoTotal * precoEtanol).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

    if(tipoCombustivel ==0){
        console.log(`o custo para abastecer com etanol sera de ${(consumoTotal * precoEtanol).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }else{
        console.log(`o custo para abastecer com gasolina sera de ${(consumoTotal * precoGasolina).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }
//tolocalestring(formataçao de moeda) transformar na moeda do local(r$, usd, won )
//tofixed determinar quantos numeros vai ter depois do ponto
// snnipts generator, cola o cod q vc quer ter um snipets, cola no primeiro espaço, coloca descriçao e a tecla que voce quer esse atalho do cod, no vs da ctrl p , snipets, snipets config, escolhe js, cola o cod dentro da chave
// ${} serve para apenas inserir a variavel de uma forma segura e limpa