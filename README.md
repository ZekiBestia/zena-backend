# 🎯 ZENA Backend

Este es el backend oficial del **Centro de Competencias ZENA** (Zona de Excelencia y Nuevas Oportunidades para el Alcance de Metas). Este backend permite el registro de leads desde una landing page en WordPress, los almacena en Supabase y envía correos de confirmación automáticos a través de Resend.

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Supabase](https://supabase.com/)
- [Resend](https://resend.com/) – para envío de correos
- [React Email](https://react.email/) – para generar el contenido HTML del correo

---

## 📦 Instalación local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ZekiBestia/zena-backend.git
   cd zena-backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto:

   ```bash
   cp .env.example .env
   ```

4. Llena el archivo `.env` con tus propias claves:

   ```env
   SUPABASE_URL=https://tu-instancia.supabase.co
   SUPABASE_KEY=tu_clave_secreta
   RESEND_API_KEY=tu_clave_de_resend
   PORT=3000
   ```

---

## 🛠 Uso

Una vez configurado tu archivo `.env`, levanta el servidor local con:

```bash
node index.js
```

El servidor quedará escuchando en:

```
http://localhost:3000/register
```

Puedes probar enviando un `POST` con los datos `name`, `email` y `phone`.

---

## 📩 ¿Qué hace este backend?

✅ Verifica si el correo ya está registrado en Supabase  
✅ Guarda el lead si es nuevo  
✅ Genera una plantilla de correo personalizada usando React  
✅ Envía un correo de confirmación usando Resend  

---

## 🧪 Ejemplo de cuerpo para POST

```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "555-123-4567"
}
```

---

---

## 🧾 Licencia

Este proyecto es de uso exclusivo del Centro ZENA. Todos los derechos reservados.
