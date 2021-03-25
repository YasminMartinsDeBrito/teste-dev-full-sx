## 💻 Instruções para entrega do projeto:  

  - Desenvolva e versione esse projeto usando git.  

  - Utilize o serviço de hospedagem de código de sua preferência: github, bitbucket, gitlab ou outro.  

  - Crie um README com instruções claras sobre como executar seu projeto. (precisa?)  

 

## ✨ Especificações de funcionalidades:  

  - Consumir a API https://testapi.io/api/redealumni/scholarships  

  - O projeto possui uma única página com a listagem dos itens e uma modal ou página para exibição dos detalhes do curso;  

  - A listagem deve retornar paginação de 10 em 10 em ordem alfabética (pode usar um componente Vue de tabela), com possibilidade de ordenação. Só deve retornar os itens         “Enabled    = True”:  

  - Exibir inputs para possibilitar uma Busca por:  

    - Cidade;  

    - Curso;  

    - Preço;  

    ### ➕ Adicione algumas regras de validação:  

       - Cidade = obrigatório  

       - Preço = opcional, Mascara de número;  

       - Curso = opcional, não deve aceitar número;  

       - Ao ocorrer um erro, trata-lo exibindo uma mensagem na própria interface após o botão de “Buscar” e, preferencialmente, tornar o input com erro com background vermelho.  

 

## 📋 A tabela deve exibir as colunas:  

  - Logo  

  - Nome do Curso  

  - Cidade  

  - Preço  

  - Botão / link de visualização dos Detalhes  

 

## 📄 Página de Exibição dos Detalhes do Curso (ou modal):  

  ### Na página / Modal criada, deve exibir em uma diagramação:  

  - Logo (alinhado à esquerda)  

  - Ao lado:  

    - Curso (Titulo) – Kind  

    - Level (subtítulo)  

  - Abaixo em uma nova linha, em 2 colunas:  

    - Nome Universidade / Score Universidade  

    - Campos Nome / Campus Cidade  

  - Após, em uma linha, com uma única coluna:  

    - Preço  

 

## ✅ Requisitos do projeto:  

  - Utilizar Bootstrap (ou framework de preferencial), Vue.JS ou React e Sass;  

  - Utilizar regra de validação do campo com JS;  

  - Gerenciadores de pacotes e task runners podem ser usados à vontade.  

  - O projeto precisa ser responsivo.  

 

## 🎨 Especificações de design:  

  ### Fonte  

   - Importe e utilize a fonte no css https://fonts.google.com/specimen/Roboto  

  ### Título  

   - Azul principal: #18ACC4 <h1>  

   - Azul secundário: #007A8D <h2>  

  ### Input  

   - Preto (inputs): #1F2D30   

   - Cinza (background): #ddd  

  ### Textos  

   - Cinza escuro: #555 <p>  

  ### Body  

   - Cinza claro: #eee;  

  ### Imagens  

   - Altura máxima 150px;  

   - Borda azul escura;  
