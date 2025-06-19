# Gemini Flash API

API sederhana berbasis Express.js untuk menggunakan model AI generatif Google Gemini 1.5 Flash.

## Fitur

- Generate teks dari prompt.
- Generate teks dari gambar (jpg, png, webp).
- Generate teks dari dokumen (PDF, DOCX).
- (Opsional) Dukungan upload audio (WAV, MP3).
- Validasi tipe file upload.
- Endpoint root (`/`) untuk pengecekan status API.

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

### 1. Root

- **GET /**  
  Cek status API  
  **Response:**
  ```json
  { "message": "Gemini AI App is running" }
  ```

### 2. Generate Text

- **POST /generate-text**  
  **Body:**
  ```json
  { "prompt": "Tulis sesuatu..." }
  ```
  **Response:**
  ```json
  { "output": "..." }
  ```

### 3. Generate dari Gambar

- **POST /generate-image**  
  **Form Data:**
  - `image` (file, jpg/png/webp)
  - `prompt` (opsional)
    **Response:**
  ```json
  { "output": "..." }
  ```

### 4. Generate dari Dokumen

- **POST /generate-from-document**  
  **Form Data:**
  - `document` (file, pdf/docx)
  - `prompt` (opsional)
    **Response:**
  ```json
  { "output": "..." }
  ```

### 5. (Opsional) Generate dari Audio

- **POST /generate-from-audio**  
  **Form Data:**
  - `audio` (file, wav/mp3)
  - `prompt` (opsional)
    **Response:**
  ```json
  { "output": "..." }
  ```

## Catatan

- Pastikan field name pada form sesuai dengan endpoint (`image`, `document`, `audio`).
- File yang diupload akan dihapus otomatis setelah diproses.
- Hanya tipe file yang diizinkan yang akan diproses.

## Lisensi

[ISC](LICENSE)

---

> Dibuat dengan Express.js & Google Generative AI SDK
