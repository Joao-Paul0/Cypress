## Primeiros passos

- Inicializar o `git init` , logo em seguida inicializar o `npm init`
- Instalar o cypress `npm install cypress@13.6.4 --save-dev`
- Abrir a interface gráfica do cypress com o comando `npx cypress open`


## Rodando testes sem interface gráfica
- Acessar o cypress em headless/terminal  `npx cypress run`
- Especificar qual arquivo deseja rodar `npx cypress run --spec ./cypress/e2e/nome-do-arquivo.cy.js` . Esse em específico, vai criar uma pasta “videos” e nessa pasta vai ter às gravações dos testes rodados
- Comando pra exibir relatórios: `npx cypress run --reporter mochawesome`  . Antes de executar este comando, é necessário instalar o framework mochawesome no seu projeto. Comando para instalar: `npm install --save-dev mochawesome`

## Os passos do e2e

1. **Planejar os testes**, fazer o mapeamento de quais testes são realmente necessários dentro do nosso projeto. Isso porque os testes *end-to-end* têm um custo maior, pois são mais demorados e, geralmente, são os últimos a serem feitos.
2. **Criar o design dos testes**, ou seja, a partir do cenário de testes, pensar em como esses testes serão escritos.
3. **Configurar o ambiente de testes.**
4. **Executar os testes.**
5. **Analisar os resultados** que conseguimos obter com os testes *end-to-end*, levando as respostas para a equipe de desenvolvimento

## **Componentes da Pirâmide de Testes**

A pirâmide de testes é composta por três camadas principais, vamos entender melhor cada uma delas:

1. **Testes Unitários:** verificam o comportamento de
unidades individuais de código, como funções ou métodos. Eles são
rápidos de escrever e executar, e ajudam a garantir a correção e a
robustez do código em um nível granular. São considerados **testes de baixo nível**.
2. **Testes de Integração:** verificam a interação entre diferentes componentes do sistema. Eles
garantem que os módulos funcionem corretamente juntos e que a integração entre eles seja suave e sem problemas. Também são considerados **testes de baixo nível**.
3. **Testes de Aceitação do Usuário e E2E:** validam o comportamento do sistema do ponto de vista do usuário final. Esse tipo está no topo da pirâmide e são considerados **testes de alto nível**. Eles simulam interações do usuário com a interface do usuário e
verificam se o sistema se comporta conforme o esperado. Embora esses
testes sejam mais lentos e complexos de implementar, são essenciais para validar o comportamento do sistema como um todo e garantir que atenda
aos requisitos do usuário.

Para aplicar efetivamente a pirâmide de testes, é importante entender que ela sugere uma **cobertura abrangente de testes em todos os níveis**,
 garantindo que todos os aspectos críticos do software sejam testados de
 forma adequada. Sendo assim, existem algumas boas práticas para seguir 
nesse processo:

1. **Comece com testes Unitários:** escreva testes
unitários para cada unidade de código logo após sua implementação. Isso
ajuda a identificar e corrigir problemas rapidamente, antes que eles se
propaguem para outras partes do sistema.
2. **Implemente testes de Integração:** à medida que os componentes do sistema são desenvolvidos, escreva
testes de integração para garantir que funcionem corretamente juntos.
Isso ajuda a identificar falhas na comunicação entre os módulos e
garante a estabilidade do sistema como um todo.
3. **Automatize os Testes E2E:** embora os testes de ponta-a-ponta sejam importantes, eles podem ser
mais lentos e normalmente possuem um custo maior do que os testes de
baixo nível. Automatize-os com moderação e priorize os testes de menor
nível sempre que possível.
4. **Mantenha um equilíbrio entre os testes:** a pirâmide de testes não deve ser interpretada de forma rígida. É
importante encontrar um equilíbrio entre os diferentes tipos de testes,
levando em consideração as necessidades e os requisitos específicos do
projeto.

Ao seguir os princípios e práticas recomendadas da pirâmide de 
testes, podemos construir software que atenda às expectativas das 
pessoas usuárias. Além disso, entender a importância dos testes no 
desenvolvimento de software e como eles devem ser estruturados com certeza é um diferencial na hora de automatizá-los.

 ## Boas práticas com dublês de teste
 Trabalhar com dublês (ou stubs) em testes com Cypress pode ser uma prática muito útil para simular comportamentos específicos de APIs ou de interações com o backend. Aqui estão algumas boas práticas essenciais para trabalhar com dublês no Cypress:

1. **Isolamento dos testes:** é importante garantir que os testes sejam independentes uns dos outros e que não compartilhem estado. Isso significa que cada teste deve configurar suas próprias simulações de dublês e não depender de configurações ou resultados de outros testes.
2. **Utilização de aliases:** o Cypress permite criar aliases (ou apelidos) para interceptações de chamadas de rede, o que facilita a referência a esses interceptadores em diferentes partes do teste. Utilize aliases significativos e descritivos para facilitar a compreensão do teste.
3. **Centralização das configurações:** se possível, centralize a configuração de dublês em um único local, como um arquivo commands.js ou um módulo separado. Isso torna mais fácil reutilizar as configurações de dublês em vários testes e mantê-las atualizadas.
4. **Abstração de chamadas de rede:** para evitar a repetição de código e manter os testes mais legíveis, considere criar funções ou métodos auxiliares para configurar dublês específicos. Isso ajuda a abstrair a complexidade das chamadas de rede e facilita a manutenção dos testes.
5. **Cobertura de diferentes cenários:** certifique-se de configurar dublês para cobrir uma variedade de cenários, incluindo casos de sucesso, falhas e respostas inesperadas. Isso ajuda a garantir que os testes sejam robustos e capazes de lidar com diferentes situações durante a execução.
6. **Validação de respostas:** sempre valide as respostas recebidas pelos dublês para garantir que elas correspondam ao comportamento esperado do sistema. Isso ajuda a garantir a integridade dos testes e a identificar problemas de integração ou configuração.
Limpeza de interceptações: ao final de cada teste, limpe as interceptações de chamadas de rede para garantir que elas não interfiram nos testes subsequentes. Use o método cy.intercept() com o parâmetro { times: 0 } para garantir que uma interceptação seja chamada zero vezes e seja removida.
