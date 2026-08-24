# TRADEFY - Conhça o projeto que amplia o acesso de esportes e conecta pessoas.

Ambiente didático para conceitos de **Segurança da Informação** e **redes**: dashboard com mini-aplicações interativas (criptografia, hashes, DDoS, modelo TCP/IP e mais).

---

## Stack

| Tecnologia | Uso |
|------------|-----|
| **HTML** | Front-end |
| **CSS** | Estilização |
| **JavaScript** | Back-end e Scripts |

---

## Quick start

```bash
# Instalar dependências
npm install

# Desenvolvimento (http://localhost:3000)
npm run dev

# Build de produção
npm run build

# Rodar em produção
npm run start
```

A raiz `/` redireciona para `/hashes`. Navegue pelo menu lateral para acessar cada módulo.

---

## Módulos

| Rota | Módulo | Descrição |
|------|--------|-----------|
| `/hashes` | Laboratório de Hashes | MD5, SHA-1 e SHA-256 em tempo real; demonstração do efeito avalanche |
| `/criptografia-simetrica` | Criptografia Simétrica | AES-256-GCM: cifrar/decifrar com chave secreta; erro ao trocar a chave na descriptografia |
| `/criptografia-assimetrica` | Criptografia Assimétrica | RSA 2048: gerar par de chaves, cifrar com chave pública e decifrar com chave privada |
| `/ddos` | Simulação de DDoS | Flood de requisições; toggle de rate limiting (WAF); medidor de saúde e contadores 200/429 |
| `/redes` | Básico de Redes | Modelo TCP/IP (camadas clicáveis), analisador de MAC, IPv4 vs IPv6, TCP vs UDP, IP Spoofing |

---

## Estrutura do projeto

```
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
```

---

## Licença

Uso didático. Código aberto para estudo.
