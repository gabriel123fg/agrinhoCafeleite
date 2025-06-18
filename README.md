# agrinhoCafeleite
Projeto venda de café com leite
Fazenda Café com Leite ☕🥛
Este é um pequeno jogo/simulação feito com p5.js onde você gerencia uma fazenda simples de café com leite. Você pode coletar leite das vacas, colher café da plantação, combinar os dois para fazer cafés com leite, e vender esses cafés na cidade.

Como jogar
Na fase campo:

Clique nas vacas para coletar leite.

Clique na plantação de café para colher café.

Quando tiver pelo menos 1 unidade de leite e 1 de café, clique no botão "Fazer 1 Café com Leite" para combinar e produzir café com leite.

Na fase cidade:

Clique no botão "Vender 1 ☕🥛" para vender cafés com leite produzidos.

O total vendido e o preço por unidade são exibidos no topo.

Use os botões "Ir para a Cidade" e "Voltar ao Campo" para alternar entre as fases.

Tecnologias
p5.js - Biblioteca JavaScript para gráficos e interação.

HTML5 e JavaScript.

Estrutura do código
setup(): inicializa o canvas, as vacas e os botões.

draw(): redesenha a tela a cada frame, mostrando o campo ou a cidade.

drawCampo(): desenha a área da fazenda com vacas e plantação.

drawCidade(): desenha a cidade e interface de venda.

mousePressed(): detecta cliques para coletar leite, café, fazer café com leite e vender.

Animações simples para feedback visual de ações.
