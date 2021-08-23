# Desafio DB1 - Correios

Este projeto utiliza Cypress como framework de testes automatizados e2e.<br/>
Considerando principalmente as boas práticas de utilização do framework Cypress.<br/>

## Instalando dependências

```shell
npm install
``` 

## Execução dos testes local 

Os seguintes comandos devem ser executados para execução na sua máquina apontando para diferentes ambientes:


```
npm run cypress:open
```

## Estrutura do Projeto

    01 ├─ cypress
    02 |    ├─ fixtures
    03 |    ├─ integration
    04 |       └─ correios
    05 |    ├─ plugins     
    06 |       └─ index.js    
    07 |    ├─ support   
    08 |       ├─ commands.js
    09 |       ├─ constants.js
    10 |       ├─ index.js
    11 |       └─ locators.js

### Cypress
### Fixtures
Pasta onde estão localizados os arquivos .json que auxiliam inserção de massa de dados aos testes.

### Integration
Pasta onde estão localizados todos os testes desenvolvidos.

### Plugins
Pasta onde está localizado o arquivo (index.js) que contém todos os plugins adicionais que serão utilizados nos testes.

### Support
Pasta onde estão localizados todos os arquivos .js de comandos que são úteis nos testes.

