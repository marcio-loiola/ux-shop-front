# 🔗 Guia de Conexão Full Stack | UX Shop

> **Para Recrutadores**: Como conectar Frontend + Backend em 5 minutos

## 📋 Visão Geral Rápida

**Frontend**: Next.js 15 + TypeScript + TailwindCSS (Porta: 3000)  
**Backend**: NestJS + PostgreSQL + Docker (Porta: 3333)  
**Arquitetura**: API RESTful com autenticação JWT

---

## 🚀 Método 1: Docker Compose (Recomendado)

### 📦 Setup Completo com um Comando

```bash
# 1. Clone o backend
git clone https://github.com/marcio-loiola/ux-shop-back.git
cd ux-shop-back

# 2. Clone o frontend
git clone https://github.com/marcio-loiola/ux-shop-front.git
cd ux-shop-front


# 2. Inicie o Backend (API + Banco)
docker-compose up -d
# ✅ Backend rodando em: http://localhost:3333

# 3. Configure e inicie o Frontend
cp .env.example .env.local
npm install
npm run dev
# ✅ Frontend rodando em: http://localhost:3000
```

### 🔧 Configuração da Conexão

Edite o arquivo `ux-shop-front/frontend/.env.local`:

```env
# Conecta o Frontend ao Backend
NEXT_PUBLIC_API_URL=http://localhost:3333/api/v1
NODE_ENV=development
PORT=3000
```

---

## 🚀 Método 2: Sem Docker (Node.js Local)

### 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL 13+
- npm 9+

### 🗄️ Setup do Backend

```bash
# 1. Configure o Banco
createdb nestjs_typeorm_db

# 2. Configure variáveis de ambiente
cd ux-shop-back
cp .env.example .env
# Edite .env com suas credenciais do PostgreSQL

# 3. Instale e execute
npm install
npm run migration:run
npm run start:dev
# ✅ API: http://localhost:3333
```

### 🎨 Setup do Frontend

```bash
cd ux-shop-front/frontend
cp .env.example .env.local
# Configure NEXT_PUBLIC_API_URL=http://localhost:3333/api/v1

npm install
npm run dev
# ✅ App: http://localhost:3000
```

---

## 🔍 Validação da Conexão

### ✅ Checklist de Funcionamento

1. **Backend Online**: http://localhost:3333 → `{"message": "Hello World!"}`
2. **Swagger Docs**: http://localhost:3333/api → Interface de documentação
3. **Frontend Online**: http://localhost:3000 → Interface do marketplace
4. **Conexão API**: Console do navegador sem erros de CORS/conexão

### 🧪 Teste de Integração

```bash
# 1. Teste o Backend diretamente
curl http://localhost:3333/products

# 2. No Frontend, abra o DevTools
# 3. Navegue para /products
# 4. Verifique chamadas para localhost:3333 na aba Network
```

---

## 📊 Endpoints Principais

| Método | Endpoint         | Descrição             | Auth |
| ------ | ---------------- | --------------------- | ---- |
| `GET`  | `/products`      | Lista produtos        | ❌   |
| `POST` | `/auth/login`    | Login usuário         | ❌   |
| `POST` | `/auth/register` | Cadastro              | ❌   |
| `GET`  | `/cart`          | Ver carrinho          | ✅   |
| `POST` | `/cart/add`      | Adicionar ao carrinho | ✅   |

---

## 🔧 Resolução de Problemas Comuns

### ❌ Erro CORS

```typescript
// Backend: src/main.ts - Adicione:
app.enableCors({
  origin: 'http://localhost:3000',
  credentials: true,
});
```

### ❌ Portas Conflitantes

- Backend padrão: 3333 (configurável via .env)
- Frontend padrão: 3000 (configurável via .env.local)

### ❌ Banco não conecta

```bash
# Verifique PostgreSQL rodando:
docker ps | grep postgres
# ou
pg_isready -h localhost -p 5432
```

---

### 🌐 URLs de Produção

```env
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=https://sua-api.herokuapp.com/api/v1

# Backend (.env)
NODE_ENV=production
DB_SSL=true
```

---

## 💡 Dicas para Avaliação

1. **Swagger**: http://localhost:3333/api para testar APIs
2. **pgAdmin**: http://localhost:8000 para visualizar dados
3. **DevTools**: F12 → Network para monitorar requisições
4. **Logs**: `docker-compose logs -f app` para debug

---

**🚀 Pronto para Produção!** Em 5 minutos você tem um marketplace full stack rodando localmente.

> **Para dúvidas**: Consulte os READMEs individuais de cada projeto ou entre em contato.
