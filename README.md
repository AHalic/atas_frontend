## Visão Geral - Contexto do desafio

Você é responsável por implementar o nosso módulo de gestão de atas de reunião dentro da indústria! O módulo de atas permite criar atas online com base nos templates existentes, listá-las e organizá-las.

Esse template, chamado _Tipo de Reunião_ possui campos (inputs) relacionados a ele. Um Tipo de Reunião chamado "Reunião Diária" poderia ter um campo de texto chamado "O que você fez hoje?", por exemplo. E um Tipo chamado "Acompanhamento de Projetos" poderia ter um campo de data chamado "Fim do Projeto". Assim, o módulo de atas funciona criando um formulário com campos diferentes, para cada Tipo de Reunião selecionado.

Como desafio, é esperado que você desenvolva o front-end de uma aplicação Web para trazer o protótipo desse módulo à realidade. O seu projeto deve consumir nossa API REST e replicar as funcionalidades descritas pelos requisitos e regras de negócio, além de seguir o design das telas determinado pelo mockup.

Todas as configurações relacionadas ao back-end (API e endpoints), serão disponibilizadas por nós. Sua função é apenas desenvolver a interface Web da listagem e do formulário de Atas e interagir com a API.

## Desenvolvimento

### Código

Recomendamos **fortemente** a utilização da biblioteca React para o desenvolvimento do front-end. Além disso, fique à vontade para utilizar quaisquer outras técnicas, bibliotecas e dependências para compor a aplicação.

Os elementos do design que serão apresentados a seguir foram baseados no Material UI, mas a utilização dessa biblioteca não é obrigatória.

### Design

O design esperado para a aplicação está definido em um mockup do Figma.

- [Telas do mockup](https://www.figma.com/file/kfO4pi7kyCRjuZQV3WMtcy/iMeets)

  - Neste arquivo estão as telas separadas, onde é possível ver mais detalhes sobre o design, como fonte, cores, etc.

- [Protótipo do mockup](https://www.figma.com/proto/kfO4pi7kyCRjuZQV3WMtcy/iMeets?page-id=0%3A1&node-id=1%3A2&viewport=790%2C478%2C0.32&scaling=contain&starting-point-node-id=1%3A2)

  - Neste arquivo, é possível navegar pelo protótipo. Isso pode ser feito clicando nas regiões interativas que destacam-se em azul claro ou utilizando as setas da navegação do Figma na parte inferior da tela.
  - Experimente clicar em "Nova Ata" > Tipo de Reunião para ver o funcionamento dos campos dinâmicos.

É esperado que a aplicação final seja a implementação do design proposto. Isso inclui, cores, layout, modelo geral dos inputs, etc. Contudo, você tem liberdade de alterar/adicionar elementos, desde que as mudanças melhorem a usabilidade, sigam a identidade visual do design e não comprometam as funcionalidades necessárias. Pense nisso quando se deparar com situações não contempladas pelo mockup :wink:

:information_source: _Tire um momento para navegar pelas telas antes de seguir para as instruções_

## Instruções

### O que se espera da aplicação Web

- Ter a tela da listagem de atas (página 1 "Listagem de Atas" do mockup) respeitando design, requisitos funcionais e regras de negócio.

- Ter a tela do formulário de uma ata (página 2 "Formulário da Ata" do mockup) respeitando design, requisitos funcionais e regras de negócio.

### Requisitos Funcionais (RF) e Regras de Negócio (RN)

Abaixo está por escrito o funcionamento mais detalhado do módulo, corroborando o que foi apresentado no protótipo. As RNs iniciadas com [:star2: Bônus] são opcionais, mas implementá-las será um diferencial :sunglasses:

**Listagem de Atas**

- **RF1**: As atas de reunião devem ser carregadas e listadas (página 1 do mockup)

  - RN1.1: As atas devem ser agrupadas pelos seus tipos de reunião.
  - RN1.2: Se não houver nenhuma ata com um certo tipo, aquele tipo não precisa ser mostrado na listagem.
  - [:star2: Bônus] RN1.3: Os tipos de reunião devem ser ordenados por ordem alfabética e as atas nele contidas devem ser ordenadas da mais recente à mais antiga.
    Exemplo: uma ata de ontem e do tipo A aparecerá acima de uma ata de hoje, mas do tipo B, uma vez que primeiro ordenam-se os tipos e, dentro de cada tipo, suas atas.

- **RF2**: A ata deve ter seus dados individuais exibidos na listagem (página 1 do mockup)

  - RN2.1: As informações individuais exibidas são: "Título", "Local", "Data e Horário de Início".

- **RF3**: A ata deve poder ser excluída

**Formulário da Ata**

- **RF4**: A ata deve poder ser visualizada

  - RN4.1: O formulário para visualizar uma ata deve ser acessado a partir de um botão na listagem.
  - RN4.2: Os seus campos não devem ser editáveis.
  - RN4.3: Não deve haver botão de Salvar

- **RF5**: Ao selecionar uma das opções do Tipo de Reunião, os campos definidos pelo tipo devem ser mostrados na ata (páginas 3, 4, 5 e 6 do mockup)

  - RN5.1: Um campo é definido por: "nome" e "tipo", onde o "tipo" do campo pode ser: "textarea" (texto de múltiplas linhas), "text" (texto de uma linha) ou "datetime" (valor de data e hora).

  - RN5.2: Atenção! Os campos no formulário devem ser gerados a partir dos dados recebidos pela API, na requisição do Tipo de Reunião. **Ou seja, caso haja um Tipo de Reunião com um nome diferente ou com uma combinação de campos diferente dos mostrados no protótipo, o seu sistema deve ser capaz de contemplá-lo sem precisar mexer no código.**

  - [:star2: Bônus] RN5.3: O componente do tipo textarea é um campo de texto rico (campo com opções de negrito, itálico, etc). Exemplo: a [página 7 do mockup](https://www.figma.com/file/kfO4pi7kyCRjuZQV3WMtcy/iMeets?node-id=81%3A371) mostra uma versão do formulário com um texto rico.

- **RF6**: Uma ata deve poder ser criada (página 2 do mockup)

  - RN6.1: O formulário para criar uma ata deve ser acessado a partir de um botão na listagem.
  - RN6.2: A seção "Identificação" da ata possui os campos:

    - Título \* (text)
    - Local \* (dropdown/select)
    - Data e Horário de Início \* (datetime)
    - Data e Horário de Fim (datetime)
    - Tipo de Reunião \* (dropdown/select)

    Os campos marcados com \* são obrigatórios.

  - RN6.2: As opções de Local devem ser buscadas ao carregar a página do formulário.
  - RN6.3: As opções de Tipo de Reunião devem ser buscadas ao carregar a página do formulário.
  - RN6.4: Não deve ser possível criar uma ata sem que os campos obrigatórios estejam preenchidos.
  - RN6.5: Os campos dinâmicos da seção "Conteúdo da Reunião" são opcionais.
  - [:star2: Bônus] RN6.6: Os campos dinâmicos da seção "Conteúdo da Reunião" são obrigatórios. OBS: Caso você queira aplicar essa RN, ela substituirá o comportamento dos campos dinâmicos descritos na RN6.5.
  - RN6.7: Ao clicar em cancelar ou em salvar, o usuário deve ser redirecionado à página de listagem.

### API

Toda a documentação necessária para comunicação com a api está disponível no endereço:

- https://desafio-iall.azurewebsites.net/api/swagger/index.html

Para utilizar a API, é necessário fazer a autenticação através de Bearer Token. O token pode ser requisitado pelo link acima, na seção Account e endpoint de login (único endpoint acessível sem token).

1. Clique em "Try it out"
2. Altere os valores de `userName` e `password` para as credenciais recebidas no seu e-mail e clique em "Executar"
3. Copie o token da resposta para utilizar na sua aplicação

Caso deseje testar a API online, clique em "Authorize" no topo da tela, à direita e siga a instruções para inserir o token.
