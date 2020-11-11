# Desafio Bemol Digital - Engenheiro de Software

Este sistema foi desenvolvido como um teste para a vaga de engenheiro de software na Bemol Digital.

## Contexto do sistema

O sistema foi desenvolvido no padrão **Single Page Application (SPA)**, usando o framework **Ionic** com **Angular**. As telas desenvolvidas foram:

-   Cadastro: tela em que se insere os dados para cadastro no sistema
-   Home: tela de bem-vindo ao sistema

![Tela de cadastro](https://github.com/linnikmaciel/desafio-bemol/blob/master/prints/cadastro.png)

![Tela home](https://github.com/linnikmaciel/desafio-bemol/blob/master/prints/home.png)

## Instalação

Requisitos: Node JS instalado (para maiores informações de instalação do Node, [consulte o site oficial](https://nodejs.org/en/download/)).
Para instalar as dependências do sistema, abra um terminal ou prompt de comando, navegue até o diretório `bemol-web/` e rode o comando `npm install`.

## Execução

Para rodar o sistema, abra um terminal ou prompt de comando, navegue até o diretório `bemol-web/` e rode o comando `ionic serve`. Será aberto uma janela/aba do seu navegador padrão no endereço **http://localhost:8100/cadstro**.

Durante a execução do sistema, você pode preencher os dados pedidos. Os campos de CPF e E-mail devem ser preenchidos com dados válidos, ou seja, preencha o CPF somente com os 11 números, e preencha o e-mail no formato adequado /nome_de_usuario/@/provedor/./complemento.../. O preenchimento do endereço é feito de forma automática através da consulta pelo CEP. Para isso, preencha o campo do CEP (somente os números) e pressione no botão da lupa para que seja feita a consulta.

![CPF inválido](https://github.com/linnikmaciel/desafio-bemol/blob/master/prints/cpf_invalido.png)

![E-mail inválido](https://github.com/linnikmaciel/desafio-bemol/blob/master/prints/email_invalido.png)

![CEP inválido](https://github.com/linnikmaciel/desafio-bemol/blob/master/prints/cep_invalido.png)

![Consulta do CEP](https://github.com/linnikmaciel/desafio-bemol/blob/master/prints/consulta_cep.png)

![Consulta do CEP 2](https://github.com/linnikmaciel/desafio-bemol/blob/master/prints/consulta_cep2.png)

## Teste

Para rodar os testes de unidade do sistema, abra um terminal ou prompt de comando, navegue até o diretório `bemol-web/` e rode o comando `npm test`. Serão testadas as telas do sistema, bem como as interfaces de serviço do Angular que foram implementadas no sistema.

## Outros conteúdos

Os diagramas C4 solicitados estão no diretório `diagramas-c4/` e as respostas das questões propostas estão no diretório `perguntas-respostas/`.
