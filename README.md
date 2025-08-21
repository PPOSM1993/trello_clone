# Trello Clone - Drag & Drop Board

Un clon de **Trello** con funcionalidades de **Drag & Drop**, construido con **React**, **Next.js**, **TypeScript**, **TailwindCSS** y **Supabase**. Este proyecto permite crear tableros, listas y tareas de manera interactiva, similar a Trello, con persistencia en base de datos y autenticación de usuarios.

---

## 🚀 Características

- **Drag & Drop** de listas y tareas para reorganizar el tablero.
- **Autenticación de usuarios** mediante Supabase.
- **Gestión de tableros y listas** con persistencia en Supabase.
- **Interfaz moderna y responsiva** con TailwindCSS.
- **TypeScript** para mayor seguridad y escalabilidad del código.
- **Next.js** para SSR y rutas dinámicas de tableros.

---

## 🛠 Tecnologías

- **React**: Biblioteca para construir interfaces de usuario.
- **Next.js**: Framework para React con SSR y rutas.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **TailwindCSS**: Framework de CSS para diseño responsivo y moderno.
- **Supabase**: Backend-as-a-Service con base de datos PostgreSQL y autenticación.
- **React DnD**: Librería para implementar Drag & Drop de tareas y listas.

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/trello-clone.git
cd trello-clone
```

2. Instalacion de Dependencias
   
```bas
npm install
```

3. Configuracion variables de entorno en un archivo .env.local

```bas
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. Iniciar o ejecutar proyecto
```bas
npm run dev
```
---

## 🗂 Estructura del Proyecto

```bas
/src
  /components       # Componentes reutilizables (listas, tareas, botones)
  /pages            # Páginas de Next.js
  /styles           # Archivos CSS y Tailwind
  /utils            # Funciones auxiliares y configuración de Supabase
  /types            # Tipos de TypeScript
```

---

## 📌 Uso

- Regístrate o inicia sesión con tu cuenta.
- Crea un tablero.
- Añade listas dentro del tablero.
- Añade tareas dentro de cada lista.
- Arrastra y suelta listas y tareas para reorganizarlas.
- Todos los cambios se guardan automáticamente en Supabase.

---

## 🤝 Contribuciones

- Contribuciones son bienvenidas:
- Haz un fork del proyecto.
- Crea tu feature branch (git checkout -b feature/nueva-funcionalidad).
- Haz commit de tus cambios (git commit -m 'Agrega nueva funcionalidad').
- Push a la rama (git push origin feature/nueva-funcionalidad).
- Abre un Pull Request.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

Ver el archivo LICENSE para más detalles.
