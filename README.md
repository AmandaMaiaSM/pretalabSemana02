# API de Postagens do LinkedIn

Durante a semana 2 do PretaLab, os alunos praticaram os conteúdos de HTTP. Sendo assim,
foi proposto elaborar uma API que permite criar, listar, editar e excluir postagens como 
se fossem publicadas no LinkedIn, para treinar o conteúdo de HTTP.

### Métodos Disponíveis

- **POST /linkedin**: Cria uma nova postagem.
- **GET /linkedin**: Lista todas as postagens.
- **GET /linkedin/:id**: Retorna uma postagem específica.
- **PATCH /linkedin/:id**: Atualiza uma postagem específica.
- **DELETE /linkedin/:id**: Exclui uma postagem específica.

# Testes

Os testes foram realizados usando o Insomnia. Abaixo estão os prints de sucesso dos testes.

## Mostrando que o servido esta rodando 
![rodandoAPI](https://github.com/user-attachments/assets/d8a48a43-f197-4fd8-a82b-55cc77c762b0)

## Criando a  uma Postagem
![CRIANDOumPOST_01](https://github.com/user-attachments/assets/00e587f5-8630-40ad-bc53-0ee15f6c1e37)

## Mostrando a  listagem de Todas as Postagens criandas 
![todosPOstages_02](https://github.com/user-attachments/assets/971114f2-4079-47c3-acf9-95e47cf24415)

## Exibindo uma unoca postagem 
![exebindoUniccaPOstagem_03](https://github.com/user-attachments/assets/4af5ceb4-1166-44c2-a1c4-9aa36b88b1d7)

## MOdificando/editando a postagem ja criada 
![modificarPostagem_4_1](https://github.com/user-attachments/assets/94823ec9-cc8f-4207-88be-587f8f22188a)
 
### Abaixo, mostramos como a modificação da postagem foi alterada.
![exebindoAltereçao_4_2](https://github.com/user-attachments/assets/b0364024-b2b1-45a1-a43c-58b023051ab9)

## Excluindo uma psotagem, ao excluir para a mensagem de sucesso 
![deletececesso_5_1](https://github.com/user-attachments/assets/c23f73d8-2142-4452-9e93-f8433482c208)

### mostrabdi que ao tentar acessar o id, da postagem excluida, tem-se uma menssagem de erro 
![deleteerro_5_2](https://github.com/user-attachments/assets/81ddb9fa-6923-44cf-a7c4-d80cdb4dd498)

