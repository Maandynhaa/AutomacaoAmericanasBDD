$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/compra_de_produto.feature");
formatter.feature({
  "name": "Comprar produto",
  "description": "  \tRealizar consulta de produtos na loja Americanas\n \t\tAdicionar Produto no carrinho",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.scenario({
  "name": "Consultar produto com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acesso a pagina principal",
  "keyword": "Dado "
});
formatter.match({
  "location": "CompraDeProdutoSteps.que_acesso_a_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pesquiso o produto \"Notebook Inspiron i15-3583-A30P\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraDeProdutoSteps.pesquiso_o_produto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "devo visualizar lista do produto",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraDeProdutoSteps.devo_visualizar_lista_do_produto()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar produto com dados inválidos",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acesso a pagina principal",
  "keyword": "Dado "
});
formatter.match({
  "location": "CompraDeProdutoSteps.que_acesso_a_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pesquiso o produto \"iopa\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraDeProdutoSteps.pesquiso_o_produto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "devo visualizar mensagem de produto não encontrado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraDeProdutoSteps.devo_visualizar_mensagem_de_produto_não_encontrado()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar produto no carrinho com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acesso a pagina principal",
  "keyword": "Dado "
});
formatter.match({
  "location": "CompraDeProdutoSteps.que_acesso_a_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pesquiso o produto \"Notebook Inspiron i15-3583-A30P\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraDeProdutoSteps.pesquiso_o_produto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adiciono o produto ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "CompraDeProdutoSteps.adiciono_o_produto_ao_carrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "devo visualizar produto adicionado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraDeProdutoSteps.devo_visualizar_produto_adicionado()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});