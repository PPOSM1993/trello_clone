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

---

## MIT License

Copyright (c) 2025 Pedro Pablo Osorio San Martín

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Licencia MIT

Copyright (c) 2025 Pedro Pablo Osorio San Martín

Por la presente se concede permiso, sin cargo, a cualquier persona que obtenga una copia
de este software y de los archivos de documentación asociados (el "Software"), para usar
el Software sin restricciones, incluyendo, sin limitación, los derechos a usar, copiar,
modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software,
y a permitir a las personas a quienes se les proporcione el Software hacer lo mismo, 
sujeto a las siguientes condiciones:

La notificación de copyright anterior y esta nota de permiso deberán incluirse en todas
las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA,
INCLUYENDO PERO NO LIMITÁNDOSE A LAS GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN
PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL
COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO O RESPONSABILIDAD, YA SEA EN
UNA ACCIÓN CONTRACTUAL, AGRAVIO O DE OTRO TIPO, QUE SURJA DE, FUERA DE O EN
CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL SOFTWARE.
