
## 📌 Paso 1: Instalar **nvm para Windows**

En Linux usaste `curl` o `wget`, pero en Windows hay una versión especial de **nvm**:

1. Ve a 👉 [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases).
2. Descarga el archivo **nvm-setup.exe**.
3. Instálalo (esto ya incluye el equivalente al `curl | bash` que hiciste en Linux).

---

## 📌 Paso 2: Instalar Node.js con nvm

```powershell
nvm install lts
nvm use lts
```

---

## 📌 Paso 3: Instalar TypeScript global

```powershell
npm install -g typescript
```

Verificar version:

```powershell
tsc -v
```

---

## 📌 Paso 4: Configurar tu proyecto

En tu carpeta del proyecto:

```powershell
tsc --init
npm install --save-dev @types/node
npm install --save-dev ts-node ts-node-dev typescript
```

---

## 📌 Paso 6: Configurar `package.json`

Agrega el script para desarrollo:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only index.ts"
}
```
**Ejecutar el programa**
```powershell
npm run dev
```

