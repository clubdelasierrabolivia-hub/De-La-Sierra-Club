# Club de la Sierra — Sitio web (pitch de alianzas)

Sitio de una sola página, bilingüe (ES/EN), para presentar el club a
futuros clientes y aliados estratégicos (ej. CAINCO).

## Cómo editar el contenido
Todo el contenido editable está en **`data.js`**: textos, cifras, torneos,
alianzas, clientes, objetivos y los datos de la proyección de crecimiento.
No hace falta tocar el HTML ni el CSS.

- Cambiar cifras/proyección → sección `projection.history` en `data.js`.
- Agregar logos → pon las imágenes en `assets/` y referencia la ruta
  (ej. `logo: "assets/cainco.png"`).
- Los textos tienen versión `es` y `en`.

## Ver en local
Abre `index.html` en el navegador (doble clic), o usa un servidor local:
```
npx serve .
```

## Publicar en Vercel
1. Instalar CLI:  `npm i -g vercel`
2. En esta carpeta:  `vercel`  (primera vez: login + configurar proyecto)
3. Producción:  `vercel --prod`

## Publicar en GitHub
```
git init
git add .
git commit -m "Sitio Club de la Sierra"
gh repo create club-sierra --public --source=. --push
```
Luego en Vercel puedes conectar el repo para deploy automático.
