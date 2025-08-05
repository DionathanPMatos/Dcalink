# Central de Links - Dashboard

Uma página HTML responsiva para organização de links por categorias com botões de acesso rápido e integração de APIs de terceiros.

## Características

### ✨ Design Moderno (Estilo DCA)
- Layout responsivo que funciona em desktop e mobile
- Esquema de cores baseado no site loja.dca.com.br
- Fundo neutro e limpo para melhor legibilidade
- Cards com bordas suaves e sombras discretas
- Tipografia Inter para melhor legibilidade

### 🎨 Paleta de Cores
- **Primária**: Azul (`#007bff`) - Links, ícones e destaques
- **Secundária**: Verde (`#28a745`) - Complementar nos gradientes
- **Fundo**: Cinza claro (`#f8f9fa`) - Fundo principal
- **Texto**: Cinza escuro (`#212529`, `#495057`) - Textos principais
- **Bordas**: Cinza suave (`#e9ecef`) - Bordas dos cards

### 🔗 Categorias de Links
- **Setor Comercial**: CRM, Vendas, Atendimento ao Cliente, Marketing
- **Financeiro**: Contabilidade, Faturamento, Relatórios Financeiros, Contas a Pagar/Receber
- **Logística**: Estoque, Expedição, Rastreamento, Fornecedores
- **Fabricantes**: Produção, Qualidade, Manutenção, Planejamento
- **Distribuidores**: Parceiros, Canais de Venda, Marketplace, Representantes
- **Recursos Humanos**: Folha de Pagamento, Recrutamento, Treinamentos, Avaliações

### ⚡ Links Rápidos
- 8 botões com ícones personalizados
- Quadrados com cantos arredondados
- Ícones transparentes e efeitos visuais
- Hover effects com animações

### 📱 Feeds de API
- **Redes Sociais**: Placeholder para Instagram, Facebook, Twitter
- **Atualizações de Conteúdo**: Placeholder para YouTube, Blog, Notícias
- Estrutura pronta para integração de APIs

### 🔍 Funcionalidades
- Busca em tempo real por categorias e links
- Navegação suave entre seções
- Tracking de cliques (placeholder para analytics)
- Carregamento simulado de feeds

## Estrutura de Arquivos

```
links-page/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── assets/
│   └── icons/          # Ícones das categorias
│       ├── comercial.jpg
│       ├── financeiro.png
│       ├── logistica.png
│       └── distribuidor.jpg
└── README.md           # Esta documentação
```

## Como Usar

1. **Abrir a página**: Abra o arquivo `index.html` em qualquer navegador moderno
2. **Personalizar links**: Edite os links no HTML para apontar para seus sistemas
3. **Integrar APIs**: Use as funções helper em `script.js` para conectar APIs
4. **Customizar design**: Modifique `styles.css` para ajustar cores e layout

## Integração de APIs

### Redes Sociais (Instagram)
```javascript
APIHelpers.loadInstagramFeed('SEU_ACCESS_TOKEN', 'SEU_USER_ID');
```

### YouTube
```javascript
APIHelpers.loadYouTubeFeed('SUA_API_KEY', 'SEU_CHANNEL_ID');
```

### Personalização de Feeds
As funções `displaySocialPosts()` e `displayContentPosts()` podem ser customizadas para exibir dados específicos de suas APIs.

## Responsividade

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Adaptação automática do grid
- **Mobile**: Layout em coluna única otimizado para toque

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com Flexbox e Grid
- JavaScript vanilla (ES6+)
- Font Awesome para ícones
- Google Fonts (Inter)

## Customização

### Cores
As cores principais podem ser alteradas nas variáveis CSS:
- Primária: `#007bff` (azul DCA)
- Secundária: `#28a745` (verde)
- Fundo: `#f8f9fa` (cinza claro)
- Texto: `#212529` (escuro)

### Ícones
- Substitua os arquivos em `assets/icons/` por seus próprios ícones
- Mantenha o formato PNG ou JPG
- Tamanho recomendado: 512x512px

### Links
Edite os links no arquivo `index.html` nas seções:
- `.category-link` para links das categorias
- `.quick-link-card` para links rápidos

## Suporte

Para dúvidas ou suporte, consulte a documentação ou entre em contato através dos canais disponíveis no rodapé da página.

