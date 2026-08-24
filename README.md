Lab do Iuri
Ambiente didático para conceitos de Segurança da Informação e redes: dashboard com mini-aplicações interativas (criptografia, hashes, DDoS, modelo TCP/IP e mais).
Stack
Tecnologia	Uso
Next.js 16 (App Router)	Framework React com API Routes
Tailwind CSS 4	Estilização (tema dark, estética terminal/cybersecurity)
Lucide React	Ícones
TypeScript	Tipagem
Quick start
# Instalar dependênciasnpm install
# Desenvolvimento (http://localhost:3000)npm run dev
# Build de produçãonpm run build
# Rodar em produçãonpm run start
 
A raiz / redireciona para /hashes. Navegue pelo menu lateral para acessar cada módulo.
Módulos
Rota	Módulo	Descrição
/hashes	Laboratório de Hashes	MD5, SHA-1 e SHA-256 em tempo real; demonstração do efeito avalanche
/criptografia-simetrica	Criptografia Simétrica	AES-256-GCM: cifrar/decifrar com chave secreta; erro ao trocar a chave na descriptografia
/criptografia-assimetrica	Criptografia Assimétrica	RSA 2048: gerar par de chaves, cifrar com chave pública e decifrar com chave privada
/ddos	Simulação de DDoS	Flood de requisições; toggle de rate limiting (WAF); medidor de saúde e contadores 200/429
/redes	Básico de Redes	Modelo TCP/IP (camadas clicáveis), analisador de MAC, IPv4 vs IPv6, TCP vs UDP, IP Spoofing
Estrutura do projeto
sandboxsec/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # Redireciona para /hashes
│   ├── globals.css
│   ├── api/
│   │   ├── hash/                # POST → MD5, SHA-1, SHA-256
│   │   ├── crypto/symmetric/    # encrypt, decrypt (AES)
│   │   ├── crypto/asymmetric/   # keys, encrypt, decrypt (RSA)
│   │   └── ddos/target/         # GET (alvo do flood + rate limit)
│   ├── hashes/
│   ├── criptografia-simetrica/
│   ├── criptografia-assimetrica/
│   ├── ddos/
│   └── redes/
├── components/
│   ├── ui/                      # Button, Card, Input, Textarea
│   ├── layout/                  # Sidebar, DashboardLayout
│   └── tools/                   # TheoryCard, HashLab, SymmetricCrypto, etc.
├── lib/
│   └── utils.ts
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
 
Deploy (Railway)
Crie um projeto no Railway e conecte este repositório (GitHub/GitLab).
O Railway detecta Next.js e usa por padrão:
Build: npm run build (ou npx next build)
Start: npm run start (ou npx next start)
Não é necessário railway.json nem configuração extra; os scripts já estão no package.json.
Defina a variável de ambiente NODE_ENV=production se quiser (geralmente já é definida).
Após o deploy, a URL gerada serve a aplicação (incluindo as API routes).
Dica: Se usar um domínio próprio, configure no painel do Railway em Settings → Domains.
Desenvolvimento
Lint: npm run lint
Criptografia e hashes usam a API nativa crypto do Node.js nas rotas em app/api/.
Código comentado para fins didáticos.
Licença
Uso didático. Código aberto para estudo.
Railway | The all-in-one intelligent cloud provider
Railway is a full-stack cloud for deploying web apps, servers, databases, and more with automatic scaling, monitoring, and security.
 
