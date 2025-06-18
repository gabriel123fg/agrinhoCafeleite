let vacas = [];
let leite = 0;
let cafes = 0;
let cafesComLeite = 0;
let vendidos = 0;
let precoPorCafeComLeite = 4.0;
let totalVendas = 0;
let fase = "campo";
let botaoCidade, botaoVoltar;
let animacoes = [];

function setup() {
  createCanvas(700, 400);
  textAlign(CENTER);
  textSize(16);

  // Criar vacas
  for (let i = 0; i < 4; i++) {
    let x = 120 + i * 130;
    let y = 220;
    vacas.push({ x, y, offset: random(TWO_PI) });
  }

  // Botões
  botaoCidade = createButton("Ir para a Cidade 🏙️");
  botaoCidade.position(280, 360);
  botaoCidade.mousePressed(() => {
    fase = "cidade";
    botaoCidade.hide();
    botaoVoltar.show();
  });

  botaoVoltar = createButton("Voltar ao Campo 🌾");
  botaoVoltar.position(280, 360);
  botaoVoltar.mousePressed(() => {
    fase = "campo";
    botaoVoltar.hide();
    botaoCidade.show();
  });
  botaoVoltar.hide();
}

function draw() {
  background(240);
  if (fase === "campo") {
    drawCampo();
  } else {
    drawCidade();
  }

  desenharAnimacoes();
}

function drawCampo() {
  background(200, 255, 200); // verde

  for (let v of vacas) {
    let mov = sin(frameCount * 0.05 + v.offset) * 5;
    drawVaca(v.x + mov, v.y);
  }

  fill(0);
  text("Clique nas vacas para coletar leite 🥛", width / 2, 30);
  text("Clique na plantação para colher café ☕", width / 2, 50);
  text(`Leite: ${leite}   |   Café: ${cafes}   |   Café com Leite: ${cafesComLeite}`, width / 2, 80);

  // Plantação de café
  fill(139, 69, 19);
  rect(500, 250, 120, 100, 20);
  fill(255);
  text("🌱 🌱 🌱", 580, 300);
  text("🌱 🌱 🌱", 560, 310);
  text("🌱 🌱 🌱", 580, 320);
  text("🌱 🌱 🌱", 580, 330);
  text("🌱 🌱 🌱", 580, 340);

  // Botão para produzir café com leite
  if (leite >= 1 && cafes >= 1) {
    fill(255);
    rect(250, 300, 200, 50, 10);
    fill(0);
    text("Fazer 1 Café com Leite ☕🥛", 350, 330);
  }
}

function drawCidade() {
  background(200, 220, 255); // azul claro

  drawPredios();

  fill(0);
  text("Venda de Café com Leite ☕🥛", width / 2, 30);
  text("Disponíveis: " + (cafesComLeite - vendidos), width / 2, 70);
  text("Preço por unidade: R$ " + precoPorCafeComLeite.toFixed(2), width / 2, 100);
  text("Total vendido: R$ " + totalVendas.toFixed(2), width / 2, 130);

  // Botão de venda
  fill(255);
  rect(270, 250, 160, 50, 10);
  fill(0);
  text("Vender 1 ☕🥛", 350, 275);
}
// funcao para desenhar as vacas
function drawVaca(x, y) {
  fill(255);
  ellipse(x, y, 80, 50); // corpo
  ellipse(x - 50, y - 10, 30, 30); // cabeça
  stroke(0);
  line(x - 60, y - 20, x - 65, y - 35); // orelha esq
  line(x - 40, y - 20, x - 35, y - 35); // orelha dir
  noStroke();
  fill(0);
  ellipse(x, y, 10, 10); // mancha corpo
  ellipse(x + 15, y - 10, 10, 10); // mancha corpo
}
//funcao para desenhar os prédios
function drawPredios() {
  fill(255, 100, 100);
  rect(80, 180, 60, 180);
  fill(255);
  for (let i = 0; i < 5; i++) {
    rect(90, 190 + i * 30, 15, 15);
    rect(110, 190 + i * 30, 15, 15);
  }

  fill(100, 150, 255);
  rect(160, 160, 70, 200);
  fill(255);
  for (let i = 0; i < 6; i++) {
    rect(170, 170 + i * 30, 15, 15);
    rect(190, 170 + i * 30, 15, 15);
  }

  fill(120, 255, 120);
  rect(250, 200, 50, 160);
  fill(255);
  for (let i = 0; i < 4; i++) {
    rect(260, 210 + i * 30, 12, 12);
    rect(275, 210 + i * 30, 12, 12);
  }

  fill(200, 150, 255);
  rect(320, 170, 60, 190);
  fill(255);
  for (let i = 0; i < 5; i++) {
    rect(330, 180 + i * 30, 15, 15);
    rect(350, 180 + i * 30, 15, 15);
  }

  fill(255, 255, 120);
  rect(400, 190, 80, 170);
  fill(200);
  for (let i = 0; i < 5; i++) {
    rect(410, 200 + i * 30, 15, 15);
    rect(430, 200 + i * 30, 15, 15);
  }

  fill(180);
  rect(500, 210, 60, 150);
  fill(240);
  for (let i = 0; i < 4; i++) {
    rect(510, 220 + i * 30, 12, 12);
    rect(530, 220 + i * 30, 12, 12);
  }
}

function mousePressed() {
  if (fase === "campo") {
    for (let v of vacas) {
      if (dist(mouseX, mouseY, v.x, v.y) < 40) {
        leite++;
        animacoes.push({ x: mouseX, y: mouseY, texto: "+1 leite", tempo: 60 });
        break;
      }
    }

    if (mouseX > 500 && mouseX < 620 && mouseY > 250 && mouseY < 350) {
      cafes++;
      animacoes.push({ x: mouseX, y: mouseY, texto: "+1 café", tempo: 60 });
    }

    if (
      mouseX > 250 &&
      mouseX < 450 &&
      mouseY > 300 &&
      mouseY < 350 &&
      leite >= 1 &&
      cafes >= 1
    ) {
      leite--;
      cafes--;
      cafesComLeite++;
      animacoes.push({ x: 350, y: 280, texto: "Feito ☕🥛", tempo: 60 });
    }
  } else {
    if (
      mouseX > 270 &&
      mouseX < 430 &&
      mouseY > 250 &&
      mouseY < 300 &&
      cafesComLeite - vendidos > 0
    ) {
      vendidos++;
      totalVendas += precoPorCafeComLeite;
      animacoes.push({
        x: mouseX,
        y: mouseY,
        texto: "+R$" + precoPorCafeComLeite.toFixed(2),
        tempo: 60,
      });
    }
  }
}
//funcao para animacos
function desenharAnimacoes() {
  for (let i = animacoes.length - 1; i >= 0; i--) {
    let a = animacoes[i];
    fill(0);
    text(a.texto, a.x, a.y);
    a.y -= 1;
    a.tempo--;
    if (a.tempo <= 0) {
      animacoes.splice(i, 1);
    }
  }
}
