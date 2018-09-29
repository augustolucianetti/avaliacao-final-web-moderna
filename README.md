# avaliacao-final-web-moderna
Avaliação final da disciplina Web Moderna

# Objetivo do projeto:
Este projeto tem por objeto realizar o cadastro e listagem de contatos.

Ele é muito útil pois é feito com tecnologias que permitem que você tenha uma alta escalabilidade por um custo muito baixo, por utilizar  a maioria dos recursos da linguagem Javascript, assim não precisa de um servidor muito robusto para que tenha um bom desempenho e também por utilizar como banco de dados arquivos de texto, que não ocupam muito espaço comparado com um banco de dados relacional.

Por seu banco de dados ser arquivo de texto, pode ser realizado versionamento do mesmo, o que garante possibilidade de rollback no caso de ter que voltar a versão da aplicação para uma versão anterior, não perdendo assim os dados já registrados e o modelo do banco também.

Ideal para quem quer algo estável, rápido, de baixo custo e fácil de manter.

# Instalação:
Na pasta rm330160 executar os comandos via prompt:
-> npm install
-> npm install -g json-server
-> npm run build
-> npm run serve

Na pasta src (dentro de rm330160) executar o comando via prompt:
-> json-server --watch banco.json --port 3200

Testar aplicação.
