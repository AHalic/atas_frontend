# Desafio front-end IndustriAll

Nesse desafio, foi desenvolvido o front-end de um sistema de gestão de Atas. O design baseou-se no [mockup fornecido](https://www.figma.com/file/kfO4pi7kyCRjuZQV3WMtcy/iMeets).


## Desenvolvimento

### Código

O sistema foi desenvolvido em _Javascript_ com auxilio das ferramentas e pacotes:
- React
  - React-icon, React-router-dom
- Tailwind
- Axios

Ps: O sistema foi testado nos navegadores Safari e Chrome (O campo de inserção de datas pode apresentar comportamentos diferentes entre os navegadores).

## Instruções

O arquivo [api.js](./src/services/api.js) faz a conexão com a API (descrita na [seção API](#API)), para utilizá-la, insira seu token no local indicado no arquivo.
Para utilizar o sistema basta rodar os comandos abaixo no terminal:
```
npm install
npm start
```

### Requisitos Funcionais (RF) e Regras de Negócio (RN)
Nesta seção estão listados os requisitos do projeto. Se determinada funcionalidade tiver sido implementada, e ainda o sistema seguir determinada regra de negócio, os respectivos checkbox estarão marcados.

**Listagem de Atas**

- [x] **RF1**: As atas de reunião devem ser carregadas e listadas (página 1 do mockup)

  - [x] RN1.1: As atas devem ser agrupadas pelos seus tipos de reunião.
  - [x] RN1.2: Se não houver nenhuma ata com um certo tipo, aquele tipo não precisa ser mostrado na listagem.
  - [x] RN1.3: Os tipos de reunião devem ser ordenados por ordem alfabética e as atas nele contidas devem ser ordenadas da mais recente à mais antiga.
    Exemplo: uma ata de ontem e do tipo A aparecerá acima de uma ata de hoje, mas do tipo B, uma vez que primeiro ordenam-se os tipos e, dentro de cada tipo, suas atas.

- [x] **RF2**: A ata deve ter seus dados individuais exibidos na listagem (página 1 do mockup)

  - [x] RN2.1: As informações individuais exibidas são: "Título", "Local", "Data e Horário de Início".

- [x] **RF3**: A ata deve poder ser excluída

**Formulário da Ata**

- [x] **RF4**: A ata deve poder ser visualizada

  - [x] RN4.1: O formulário para visualizar uma ata deve ser acessado a partir de um botão na listagem.
  - [x] RN4.2: Os seus campos não devem ser editáveis.
  - [x] RN4.3: Não deve haver botão de Salvar

- [x] **RF5**: Ao selecionar uma das opções do Tipo de Reunião, os campos definidos pelo tipo devem ser mostrados na ata (páginas 3, 4, 5 e 6 do mockup)

  - [x] RN5.1: Um campo é definido por: "nome" e "tipo", onde o "tipo" do campo pode ser: "textarea" (texto de múltiplas linhas), "text" (texto de uma linha) ou "datetime" (valor de data e hora).

  - [x] RN5.2: Atenção! Os campos no formulário devem ser gerados a partir dos dados recebidos pela API, na requisição do Tipo de Reunião. **Ou seja, caso haja um Tipo de Reunião com um nome diferente ou com uma combinação de campos diferente dos mostrados no protótipo, o seu sistema deve ser capaz de contemplá-lo sem precisar mexer no código.**

  - [ ] RN5.3: O componente do tipo textarea é um campo de texto rico (campo com opções de negrito, itálico, etc). Exemplo: a [página 7 do mockup](https://www.figma.com/file/kfO4pi7kyCRjuZQV3WMtcy/iMeets?node-id=81%3A371) mostra uma versão do formulário com um texto rico.

- [x] **RF6**: Uma ata deve poder ser criada (página 2 do mockup)

  - [x] RN6.1: O formulário para criar uma ata deve ser acessado a partir de um botão na listagem.
  - [x] RN6.2: A seção "Identificação" da ata possui os campos:

    - Título \* (text)
    - Local \* (dropdown/select)
    - Data e Horário de Início \* (datetime)
    - Data e Horário de Fim (datetime)
    - Tipo de Reunião \* (dropdown/select)

    Os campos marcados com \* são obrigatórios.

  - [x] RN6.2: As opções de Local devem ser buscadas ao carregar a página do formulário.
  - [x] RN6.3: As opções de Tipo de Reunião devem ser buscadas ao carregar a página do formulário.
  - [x] RN6.4: Não deve ser possível criar uma ata sem que os campos obrigatórios estejam preenchidos.
  - [ ] RN6.5: Os campos dinâmicos da seção "Conteúdo da Reunião" são opcionais.
  - [x] RN6.6: Os campos dinâmicos da seção "Conteúdo da Reunião" são obrigatórios. OBS: Caso você queira aplicar essa RN, ela substituirá o comportamento dos campos dinâmicos descritos na RN6.5.
  - [x] RN6.7: Ao clicar em cancelar ou em salvar, o usuário deve ser redirecionado à página de listagem.

### API

Toda a documentação necessária para comunicação com a api está disponível no endereço:

- https://desafio-iall.azurewebsites.net/api/swagger/index.html

Para utilizar a API, é necessário fazer a autenticação através de Bearer Token. O token pode ser requisitado pelo link acima, na seção Account e endpoint de login (único endpoint acessível sem token).

1. Clique em "Try it out"
2. Altere os valores de `userName` e `password` para as credenciais recebidas no seu e-mail e clique em "Executar"
3. Copie o token da resposta para utilizar na sua aplicação

Caso deseje testar a API online, clique em "Authorize" no topo da tela, à direita e siga a instruções para inserir o token.
