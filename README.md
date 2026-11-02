# Donna Valentina Decor

Site institucional para apresentar o trabalho da **Donna Valentina Decor**, destacar inspirações de festas e facilitar o contato para pedidos de orçamento.

![Identidade visual Donna Valentina Decor](./src/assets/0001.webp)

## Sobre o projeto

Uma página pensada para transformar a visita em inspiração: o público conhece os serviços, explora uma galeria de decorações e entra em contato pelo WhatsApp ou telefone.

### Serviços em destaque

- Festas infantis e comemorações para adultos
- Chás de bebê e chás revelação
- Casamentos
- Decorações em temas variados

### Recursos do site

- Apresentação da marca e dos serviços
- Galeria de inspirações com imagens do projeto
- Atalhos para solicitar orçamento pelo WhatsApp
- Acesso rápido para contato telefônico
- Layout adaptável a diferentes tamanhos de tela

## Contato

- **Telefone:** [(15) 9 8114-8383](tel:+5515981148383)
- **WhatsApp:** [Solicitar um orçamento](https://wa.me/5515981148383?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20de%20decora%C3%A7%C3%A3o)

## Tecnologias

- React e TypeScript
- TanStack Start e TanStack Router
- Vite
- Tailwind CSS
- Lucide React

## Executar localmente

### Pré-requisitos

- Node.js 22.12 ou superior
- npm

### Instalação

```bash
git clone https://github.com/cargnieli2016/dona-valentinna-decor.git
cd dona-valentinna-decor
npm install
npm run dev
```

O servidor de desenvolvimento exibirá no terminal o endereço local para abrir no navegador.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção para Cloudflare via Nitro |
| `npm run preview` | Inicia a pré-visualização do Vite |
| `npm run build:github-pages` | Gera o site estático para GitHub Pages |
| `npm run preview:github-pages` | Pré-visualiza o build estático do GitHub Pages |
| `npm run lint` | Executa a análise estática |
| `npm test` | Executa os testes |

### GitHub Pages

O workflow em `.github/workflows/deploy-github-pages.yml` publica automaticamente o site estático sempre que há um push para `main`. Na primeira publicação, habilite **Settings → Pages → Build and deployment → Source → GitHub Actions** no repositório.

Como este é um repositório de projeto, o build usa o caminho `/dona-valentinna-decor/`. Após a conclusão do workflow, o site ficará disponível em:

<https://cargnieli2016.github.io/dona-valentinna-decor/>

Para gerar e testar esse build localmente:

```bash
npm run build:github-pages
npm run preview:github-pages
```

### Cloudflare

O comando `npm run build` permanece separado para a implantação com SSR no Cloudflare, usando o preset Cloudflare do Nitro. Assim, preparar o GitHub Pages não altera o build destinado ao Cloudflare.

## Estrutura principal

```text
src/
├── assets/       # Logo e imagens das decorações
├── routes/       # Páginas e rotas da aplicação
└── styles.css    # Estilos globais e tema visual
```
