$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/consulta_produto.feature");
formatter.feature({
  "name": "Consultar Produto",
  "description": "  Realizar consulta de produtos na loja Americanas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Consultar produto com sucesso",
  "description": "",
  "keyword": "Cenário"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acesso a pagina principal",
  "keyword": "Dado "
});
formatter.match({
  "location": "ConsultaProdutoSteps.que_acesso_a_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pesquiso o produto \"Notebook Inspiron i15-3583-A30P\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ConsultaProdutoSteps.pesquiso_o_produto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "devo visualizar lista do produto",
  "keyword": "Entao "
});
formatter.match({
  "location": "ConsultaProdutoSteps.devo_visualizar_lista_do_produto()"
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
  "keyword": "Cenário"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acesso a pagina principal",
  "keyword": "Dado "
});
formatter.match({
  "location": "ConsultaProdutoSteps.que_acesso_a_pagina_principal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pesquiso o produto \"Notebook Inspiron i15-3583-A30P\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ConsultaProdutoSteps.pesquiso_o_produto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adiciono o produto ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ConsultaProdutoSteps.adiciono_o_produto_ao_carrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "devo visualizar produto adicionado",
  "keyword": "Entao "
});
formatter.match({
  "location": "ConsultaProdutoSteps.devo_visualizar_produto_adicionado()"
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