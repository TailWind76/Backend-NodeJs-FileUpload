# File Upload Server Template with Multer

This is a Node.js server template for handling file uploads using the Multer library. It provides three different examples for handling single file uploads, multiple file uploads, and uploads with different form fields.

## Features

- Handles single file uploads.
- Handles multiple file uploads at once.
- Handles uploads with different form fields.

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd file-upload-server
```

2. Install the required modules using npm:

```bash
npm install multer
```

## Usage

1. Start the server:

```bash
node index.js
```

2. Use the specified routes to upload files to the server.

## 1. Single File Upload

### Route

```
POST /upload
```

### Request

- The file should be sent as a binary payload with the key 'file'.

### Response

```json
{
  "message": "File uploaded successfully",
  "filename": "unique_filename.ext"
}
```

