<div align="center">

# 🧩 Node Modular Backend API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Modular](https://img.shields.io/badge/Architecture-Modular-blueviolet?style=for-the-badge)]()

> **A feature-modular Node.js backend — each domain (users, products, orders) is a self-contained module with its own routes, controllers and services.**

</div>

---

## ✨ Architecture Highlights

- 🧩 **Feature Modules** — Each feature is fully self-contained
- 🔁 **Middleware Pipeline** — Global error handling, request logging, auth guards
- 🏛️ **Layered Design** — Routes → Controllers → Services → Models
- ♻️ **Reusable Utilities** — Shared helpers across modules
- 📋 **Config Centralisation** — Single source of truth for all settings

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime |
| Express.js | HTTP framework |
| Mongoose | MongoDB ODM |
| JWT + bcrypt | Auth & security |

## 🚀 Getting Started

```bash
git clone https://github.com/HiteshChugh-2006/Node-Modular-Backend-API.git
cd Node-Modular-Backend-API
npm install
node index.js
```

## 📁 Project Structure

```
src/
├── config/         # DB, env, constants
├── middlewares/    # Auth, error, logger middleware
├── modules/
│   ├── users/      # User routes, controller, service
│   ├── products/   # Product routes, controller, service
│   └── orders/     # Order routes, controller, service
└── app.js          # Express app setup
```

## 💡 Why Modular?

> A modular architecture scales with your team — new developers can own a module independently without breaking others.

---

<div align="center">
Made with ❤️ by <a href="https://github.com/HiteshChugh-2006">Hitesh Chugh</a>
</div>