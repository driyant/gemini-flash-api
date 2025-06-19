# Gemini Flash API

API sederhana berbasis Express.js untuk menggunakan model AI generatif Google Gemini 1.5 Flash.

## Fitur

- Endpoint root (`/`) untuk pengecekan status API.
- Siap untuk dikembangkan lebih lanjut (misal: upload file, integrasi AI, dsb).

## Instalasi

1. **Clone repository**

   ```sh
   git clone https://github.com/driyant/gemini-flash-api.git
   cd gemini-flash-api
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Buat file `.env`**

   ```
   GOOGLE_API_KEY=your_google_api_key
   ```

4. **Jalankan aplikasi**
   ```sh
   npm start
   ```

## Struktur Folder

```
.
├── .env
├── .gitignore
├── index.js
├── package.json
├── README.md
├── uploads/
└── .vscode/
```

## Endpoint

- **GET /**  
  Cek status API  
  **Response:**
  ```json
  { "message": "Gemini AI App is running" }
  ```

## Lisensi

[ISC](LICENSE)

---

> Dibuat dengan Express.js & Google Generative AI SDK
