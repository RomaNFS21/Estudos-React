Repositório destinado ao estudo de **react** 

# Aula 07 - 21/11/2024

### 1. Instalação do reactstrap e Bootstrap
Foi utilizado os comandos:
- npm install reactstrap react react-dom
- npm install --save bootstrap
- npm install react-popper @popperjs/core

### 2. Configuração do Bootstrap
No arquivo index.js foi adicionado o import do bootstrap
- import 'bootstrap/dist/css/bootstrap.min.css';


### 3. Adicionado barra de navegação ao projeto
- A barra de navegação é utilizada para fazer a navegação do site entre as paginas do projeto, redirecionamento para outros locais ou seja formas de facilitam a navegação pela pagina para o usuario acessar as informações desejadas de forma simples, pratica e responsiva.


### 4. Atualização do README
- Informativo das modificações realizadas no projeto

![Barra de navegação](chrome_B2BbaJGFoM.png)

# Aula 09 - 25/11/2024

### 1. Criação da pasta **assets** na pasta public e adicionado imagens a pasta

### 2. Criação da pasta **components** na pasta src 

### 3. Criação e configuração do arquivo MenuComponent.js na pasta components
- Criação do componente para o site exibir os produtos
- Produtos em formato de lista
- Informações contidas nas listas: id, nome, imagem, categoria, label, preço, descrição
- A organização de como sera exibida essas informações da lista, tamanho da fonte, formatação do texto.

### 4. Alteração no arquivo App.js
- Adicionado as seguintes instrução de: import Menu from './components/MenuComponent para utilizar das instruções do MenuComponent
- Adicionado < Menu /> para as configurações feitas no MenuComponent.js para serem exibidas no site.


# Aula 10 - 26/11/2024
- Mudança da exibição dos produtos de lista para cartão e quando selecionado um prato exibe a descrição do prato

### 1. MenuComponent
- É o arquivo responsavel por ter a(s) forma(s) de como vai ser exibido os componentes no site e quando um componete é selecionado exibe as informações adicionais.

- 1.1 Os imports utilizados são do REACT que é utilizado para criação de interfaces e tambem foi importado 
- 1.2 O onDishSelect a partir das opções disponiveis a que o usuario escolhe ele exibe informações detalhadas da opção escolhida
- 1.3 O renderDish apresenta todas as informações listadas do prato selecionado
- 1.4 O props.dishes.map é responsavel por gerar uma representação visual de todos os itens


### 2. dishes.js
- Ele contem as informações do produtos
- 2.1 Armazena a identificação, nome, imagem, categoria, preso, descrição...
- 2.2 Ele registra o ano, mes, dia, horas, minutos , segundos e milesimos segundo a ISO 8601

### 3. App.js
-  Esse arquivo é responsavel por manter a organização da exibição dos componentesdo site

- 3.1 É a variavel que vai assumir os valores que serão importados da pasta dishes
- 3.2 aonde ele estiver colocado no codigo é onde vai ser exibido/invocado as instruções dos cartões DISHES


