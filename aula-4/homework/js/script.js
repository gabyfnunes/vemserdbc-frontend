// Exercicio 1:
    function questao1(){    
        const sequencia = [1,5,0,6,4,3,7,9,8,2];
            console.log(`A sequencia de Números é: ${sequencia}`);
            sequencia.sort();
            console.log(`A sequencia de Números em Ordem Crescente é: ${sequencia}`);

        
}

 // Exercicio 2:
        function questao2(){
            const sequencia2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            console.log(`Sequencia de 1 a 30: ${sequencia2}`)

            console.log(`Sequencia de Números Pares:`)
            for(var i = 0; i < sequencia2.length+1; i++) {
                if (i % 2 == 0 && i != 0) {
                    console.log(i);
                    }
                 }
        }
    
  // Exercicio 3:  

        function questao3(){
            const sequencia3 = [1,5,0,6,4,3,7,9];
            console.log(`A sequencia atual é ${sequencia3}`);
            const sequencia3Alterada = [12,5,50,6,4,34,7,9];
            console.log(`A sequencia atual é ${sequencia3Alterada}`);
  
    }

 // Exercicio 4: 
        function questao4(){
            const itens = [" Ouro", " Prata", " Madeira", " Pedra"];
            const quantidadeIdadeTrevas = [45, 56, 236, 458];
            var totalSacasIdadeTrevas = 0;
            const quantidadeIdadeCastelos = [345, 568, 789, 897];
            var totalSacasIdadeCastelos = 0;

                console.log(`Objetos do Meu Inventários em Idade das Trevas:`);
                console.log(`${itens[0]} -> ${quantidadeIdadeTrevas[0]}`);
                console.log(`${itens[1]} => ${quantidadeIdadeTrevas[1]}`);
                console.log(`${itens[2]} => ${quantidadeIdadeTrevas[2]}`);
                console.log(`${itens[3]} => ${quantidadeIdadeTrevas[3]}`);

                for(var i = 0; i < quantidadeIdadeTrevas.length; i++) {
                    totalSacasIdadeTrevas += quantidadeIdadeTrevas[i];
                }
                console.log(`Total de sacas de itens em Idade das Trevas:${totalSacasIdadeTrevas}`);
                console.log(``)
                console.log(`Objetos do Meu Inventários em Idade dos Castelos:`);
                console.log(`${itens[0]} -> ${quantidadeIdadeCastelos[0]}`);
                console.log(`${itens[1]} => ${quantidadeIdadeCastelos[1]}`);
                console.log(`${itens[2]} => ${quantidadeIdadeCastelos[2]}`);
                console.log(`${itens[3]} => ${quantidadeIdadeCastelos[3]}`);

                for(var i = 0; i < quantidadeIdadeCastelos.length; i++) {
                    totalSacasIdadeCastelos += quantidadeIdadeCastelos[i];
                }
                console.log(`Total de sacas de itens em Idade dos Castelos:${totalSacasIdadeCastelos}`);
    }

    // Exercicio 5:
        function questao5(){
            const queijos = [" Mussarela"," Minas"," Parmesão"," Prato"," Gorgonzola"];
            console.log(`Lista Inicial: ${queijos}`);
            queijos.push(" Mascarpone"," Ricota"," Provolone");
            console.log(`Lista Atualizada: ${queijos}`);
            queijos.sort();
            console.log(`Lista em Ordem Alfabética: ${queijos}`);
            queijos.push(" Cottage");
            queijos.sort();
            console.log(`Lista em Ordem Alfabética Atualizada: ${queijos}`);
    }

    // Exercicio 6:
    function questao6(){

        const catalogo = [
            {
                id: "1",
                categoria: "Terror", 
                titulo: "IT"
            },
            {
                id: "2", 
                categoria: "Terror", 
                titulo: "O Exorcista"
            },
            {
                id: "3", 
                categoria: "Terror", 
                titulo: "Drácula"
            },
            {
                id: "4", 
                categoria: "Romance", 
                titulo: "Morro dos Ventos Uivantes"
            },
            {
                id: "5", 
                categoria: "Policial", 
                titulo: "O Silêncio dos Inocentes"
            },
            {
                id: "6", 
                categoria: "Suspense", 
                titulo: "Boneco de Neve"
            },
            {
                id: "7", 
                categoria: "Suspense", 
                titulo: "Bird Box"
            },
            {
                id: "8", 
                categoria: "Romance", 
                titulo: "Orgulho e Preconceito"
            }
        
        ]
        const catalogoLivros = catalogo;
        console.log(`Os livros em Catálogo são:`);
        console.log(catalogoLivros);

        const catalogoLivrosTerror = catalogo
            .filter(genero => genero.categoria === "Terror")
        console.log(`Os livros de Terror em Catálogo são:`);
        console.log(catalogoLivrosTerror);
    }
    
    // Exercicio 7:
    function questao7(){
        const premiacao = ["Ouro", "Prata", "Bronze", "Sem Medadlha", "Sem Medadlha"];

        premiacao.map((medalha, i) => {
            if(medalha === "Ouro" || medalha === "Prata" || medalha === "Bronze"){
                console.log(`A medalha da posição ${i+1} é ${medalha}`);
            } else{
                console.log(`A posição ${i+1} não ganha medalha`);
            }
        })
    }

    // Exercicio 8:
    function questao8(){
        const A = [2, 4, 6, 7, 8 , 22, 45, 34, 89, 75, 62, 54];
        const B = [22, 23, 57, 45, 77, 62, 56, 54, 97, 88, 33, 5];

        console.log(A);
        console.log(B);
        
        const uniaoAB = [A.concat(B)];
        console.log(`União dos conjuntos`)
        console.log(uniaoAB);

        const interseccaoAB =  A.filter(repetidos => B.includes(repetidos));
        interseccaoAB.sort(function(A, B){return A - B})

        console.log(`Intersecção dos conjuntos`);
        console.log(interseccaoAB);

        const diferencaAB =  B.filter(repetidos => !A.includes(repetidos));
        diferencaAB.sort(function(A, B){return A - B})

        console.log(`Intersecção dos conjuntos`);
        console.log(diferencaAB);
    }



    // Exercicio 9:

    function questao9(){
        
        const pedidos = [
            {
                id: 1,
                nome: 'José',
                pizza: 'Calabresa',
                bebida: 'Refrigerante'
            },
            {
                id: 2,
                nome: 'Maria',
                pizza: 'Portuguesa',
                bebida: 'Suco'
            },
            {
                id: 3,
                nome: 'Robesval',
                pizza: 'Nutella',
                bebida: 'Refrigerante'
            },
            {
                id: 4,
                nome: 'Sonia',
                pizza: 'Frago c/ catupiry',
                bebida: 'Suco'
            },
            {
                id: 5,
                nome: 'Jozildo',
                pizza: 'Calabresa',
                bebida: 'Cerveja'
            },
        ]

        const todosPedidos = pedidos
        console.log(`Os pedidos desta noite foram:`)
        console.log(todosPedidos);
        
        const pedidosRefrigerantes = pedidos
            .filter(bebidas => bebidas.bebida === "Refrigerante")
        console.log(`Os clientes que pediram Refrigerate foram:`)
        console.log(pedidosRefrigerantes);
       
        const pedidosSucos = pedidos
            .filter(bebidas => bebidas.bebida === "Suco")
        console.log(`Os clientes que pediram Suco foram:`)
        console.log(pedidosSucos);

        const pedidosCerveja = pedidos
            .filter(bebidas => bebidas.bebida === "Cerveja")
        console.log(`Os clientes que pediram Cerveja foram:`)
        console.log(pedidosCerveja);
        

        
    }


    // Exercicio 10:

    function questao10(){
        const comprasSamanta = [
            {
                produto: 'Perfume',
                valor: 1236.99
            },
            {
                produto: 'Perfume',
                valor: 134.28
            },
            {
                produto: 'Gravata',
                valor: 189.99
            },
            {
                produto: 'Sapato',
                valor: 899.99
            },
            {
                produto: 'Casaco',
                valor: 2568.78
            },
            {
                produto: 'Terno',
                valor: 3566.78
            },
            {
                produto: 'Vestido',
                valor: 4896.99
            },
        ]

        const todasCompras = comprasSamanta;
            console.log(`Essa foram todas as compras de Samanta`);
            console.log(todasCompras);

        let soma = 0;
        const valorTotal = comprasSamanta
            .map(valores => valores.valor)
            for(var i = 0; i < valorTotal.length; i++) {
                soma += valorTotal[i];
            }
            console.log(`O valor total das compras foi: ${soma}`);
    }