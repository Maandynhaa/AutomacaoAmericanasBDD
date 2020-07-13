#language: pt

@funcionais
Funcionalidade: Comprar produto
  Realizar consulta de produtos na loja Americanas
 	Adicionar Produto no carrinho

Cenario: Consultar produto com sucesso
  Dado que acesso a pagina principal
	Quando pesquiso o produto "Notebook Inspiron i15-3583-A30P"
	Entao devo visualizar lista do produto
	
Cenario: Consultar produto com dados inválidos
  Dado que acesso a pagina principal
	Quando pesquiso o produto "iopa"
	Entao devo visualizar mensagem de produto não encontrado

Cenario: Adicionar produto no carrinho com sucesso
  Dado que acesso a pagina principal
	Quando pesquiso o produto "Notebook Inspiron i15-3583-A30P"
	E adiciono o produto ao carrinho
	Entao devo visualizar produto adicionado