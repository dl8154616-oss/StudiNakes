# Fullstack Starterpack — React (Vite) + Laravel API

Starter project fullstack dengan **React (Vite)** sebagai frontend dan **Laravel** sebagai backend API. Proyek ini dirancang agar developer bisa langsung memulai pengembangan aplikasi web modern dengan struktur yang bersih, modular, dan siap di-deploy.

---

## 🚀 Fitur Utama

* **Frontend:** React (Vite) + Bootstrap + React Router DOM.
* **Backend:** Laravel REST API dengan Eloquent ORM.
* **Database:** MySQL / MariaDB (bisa disesuaikan).
* **Komunikasi:** Axios untuk integrasi API.
* **Struktur modular:** Mudah dikembangkan dan dipisahkan antara FE dan BE.

---

## 📁 Struktur Folder

```
fullstack-starterpack/
├─ backend/               # Laravel API backend
│  ├─ app/Models/Task.php
│  ├─ app/Http/Controllers/Api/TaskController.php
│  ├─ database/migrations/
│  ├─ routes/api.php
│  ├─ .env.example
│  ├─ composer.json
│  └─ .gitignore
│
├─ frontend/              # React + Vite frontend
│  ├─ src/
│  │  ├─ pages/
│  │  ├─ services/api.js
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ .env.example
│  ├─ package.json
│  └─ .gitignore
│
└─ README.md
```

---

## 🧠 Prasyarat

Sebelum menjalankan proyek, pastikan:

* **Node.js** v18 atau lebih baru terinstal.
* **PHP** v8.1 atau lebih baru terinstal.
* **Composer** terinstal.
* **MySQL** atau **MariaDB** aktif.

---

## 🧩 Instalasi dan Menjalankan Proyek

### 1️⃣ Backend — Laravel API

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Konfigurasikan database di .env
php artisan migrate
php artisan serve --port=8000
```

Laravel berjalan di `http://127.0.0.1:8000`

### 2️⃣ Frontend — React + Vite

```bash
cd frontend
npm install
cp .env.example .env
# Isi file .env dengan
# VITE_API_BASE=http://127.0.0.1:8000/api
npm run dev
```

Frontend berjalan di `http://localhost:5173`

---

## 🔗 Koneksi Frontend ⇄ Backend

Axios digunakan untuk komunikasi antara frontend dan backend.

`src/services/api.js`:

```js
import axios from 'axios';
const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000/api';
export default axios.create({ baseURL: API_BASE });
```

Frontend memanggil endpoint Laravel seperti:

```js
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
```

---

## ⚙️ Git Ignore — File yang Tidak Disertakan di Repository

### Backend (.gitignore)

```
/vendor
/node_modules
.env
/storage/*.key
/public/storage
.idea
.DS_Store
```

### Frontend (.gitignore)

```
node_modules
.env
.vite
dist
.DS_Store
```

> **Catatan:** Jangan commit `.env` karena berisi informasi sensitif seperti kredensial database.

---

## 🧑‍💻 Workflow Developer

1. Clone repository:

   ```bash
   git clone https://github.com/username/fullstack-starterpack.git
   ```
2. Masuk ke folder `backend` dan `frontend`.
3. Install dependensi.
4. Jalankan server backend dan frontend.
5. Uji koneksi API melalui browser atau Postman.

---

## 🔮 Fitur yang Dapat Dikembangkan

* Autentikasi dengan **Laravel Sanctum** (login/register SPA).
* Pagination dan pencarian data di API & UI.
* Validasi form yang lebih lengkap.
* Deploy ke server dengan Nginx atau Apache.
* Unit testing (PHPUnit di Laravel, Jest di React).

---

## 📜 Lisensi

-

---

## 👥 Kontributor

* **Ryu** — Project Author
* Developer lain dipersilakan untuk berkontribusi melalui *pull request*.

---

### 💡 Tips untuk Developer Baru

* Jangan lupa setup file `.env` sebelum menjalankan proyek.
* Pastikan `php artisan migrate` dijalankan pertama kali untuk membuat database.
* Jalankan Laravel di port `8000` dan React di `5173` agar CORS tetap sesuai.
* Dokumentasi tambahan tersedia di file `Fullstack-Starterpack-React-Vite-Laravel.md`.

