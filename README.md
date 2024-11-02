## Gamify Markdown

Um projeto feito para gamificar arquivos markdown e workflows que usam essa tecnologia.
O objetivo principal deste projeto é ser um sistema auxiliar que provem uma loja
onde os usuários podem criar items customizados e, com o dinheiro obtido com seus arquivos
markdown, comprar items / benefícios de lazer. Com isso tendo um ganho de produtividade
e equilibrando o trabalho com diversão de forma divertida e saudável.

Este projeto é apenas uma DEMO do que o projeto final será de fato. O foco dessa demo é mostrar o conceito
através da solução de um problema singular de um usuário apenas (eu mesmo). Ou seja, o projeto está sendo
construído em cima das minhas necessidades, minha forma de organizar os arquivos markdown e minhas regras de
julgamento de como os arquivos darão moedas e quanto darão.

Posteriormente, este mesmo projeto será re-escrito para que seja mais flexível e escalável para qualquer
usuário e seu estilo de organização dos arquivos.

## Funcionalidades principais

1. Leitura dos arquivos de uma pasta main contendo todos os arquivos markdown;
2. Atualização do dinheiro do usuário sempre que os arquivos forem criados ou concluídos;
3. Criação, deleção e compra de items/benefícios;
4. Ganho de moedas com base nos metadados dos arquivos markdown;
5. Listagem dos items do shop num formato de card;
6. Tabela contendo todos os items que foram criados (apenas visualização);
7. Armazenamento local com Sqlite;
8. Análise dos arquivos markdown sempre que houver mudanças;
9. Persistência das moedas mesmo que os arquivos sejam deletados;

## Como funciona o recebimento de moedas

Digamos que o usuário possua um arquivo markdown chamado "Meu projeto".
Este mesmo arquivo markdown possui a propriedade "Tamanho" e "Status".
Suponhamos que o usuário defina o tamanho desse projeto como "Grande" e o "Status" como "Em andamento".
O Gamify Markdown não irá prover nenhuma moeda ao usuário, até que o "Status" seja definido como "Concluído",
assim que o mesmo for concluído, o usuário receberá suas moedas a depender, por exemplo, do tamanho do projeto.

Outros arquivos markdown como notas, que podem não possui um metadado de "Status" darão moedas assim que criados
e a quantidade de moedas será baseado nos atributos desse arquivo. Tais quais: Tamanho do título, quantidade de
palavras, etc.
