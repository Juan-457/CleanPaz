# CleanPaz - Sitio web estatico

Sitio institucional de CleanPaz para presentar servicios de limpieza profesional en Buenos Aires, captar consultas y derivar solicitudes de cotizacion a WhatsApp.

El proyecto es una pagina estatica: no usa framework, backend, build step ni gestor de paquetes. Todo el contenido principal, estilos e interacciones estan dentro de `index.html`.

## URL y dominio

- Dominio configurado: `cleanpaz.com.ar`
- Archivo de dominio personalizado: `CNAME`
- Canonical configurado en HTML: `https://www.cleanpaz.com.ar/`

Si se publica con GitHub Pages, el archivo `CNAME` debe mantenerse en la raiz del sitio para conservar el dominio personalizado.

## Estructura

```text
.
├── CNAME
├── README.md
├── index.html
├── favicon.ico
├── apple-touch-icon.png
├── logo.png
├── main.mp4
├── industrial.webp
├── oficina.webp
├── post obra.webp
├── verdes.webp
└── umanoai-logo.png
```

### Archivos principales

- `index.html`: pagina completa del sitio. Incluye HTML, CSS embebido, JavaScript embebido, SEO, Schema.org, Google Analytics, Google Tag Manager, formulario y enlaces.
- `CNAME`: dominio usado para publicacion con GitHub Pages.
- `logo.png`: logo usado en navegacion, hero y footer.
- `favicon.ico`: icono del navegador.
- `apple-touch-icon.png`: icono para dispositivos Apple.
- `main.mp4`: video de fondo del hero.
- `industrial.webp`, `oficina.webp`, `post obra.webp`, `verdes.webp`: imagenes del slider de fondo global.
- `umanoai-logo.png`: logo usado en el credito del footer.

## Contenido del sitio

La pagina esta organizada en estas secciones:

- `#hero`: portada con propuesta de valor, video de fondo y CTA principal a WhatsApp.
- `#services`: servicios ofrecidos.
- `#why`: diferenciales de CleanPaz.
- `#how`: pasos del proceso comercial.
- `#zones`: zonas de cobertura.
- `#testimonials`: reseñas y prueba social.
- `#contact`: datos de contacto y formulario.
- `#instagram`: carrusel externo de Instagram via RSS.app.
- `footer`: enlaces rapidos, contacto y credito de UmanoAI.

## Integraciones

### WhatsApp

Los CTAs y el formulario envian consultas a:

```text
+54 9 11 2870-5050
https://wa.me/5491128705050
```

El formulario no guarda datos ni envia emails. Valida nombre, telefono y servicio en el navegador, arma un mensaje y abre WhatsApp con el texto precargado.

### Telefonos y emails

Contactos visibles en la pagina:

- Telefonos: `11 2870-5050`, `11 2846-3882`
- Emails: `cleanpaz81@gmail.com`, `cleanpaz34@gmail.com`

### Redes sociales

- Instagram: `https://www.instagram.com/clean_paz`
- Facebook: `https://www.facebook.com/cleanpaz2020`
- LinkedIn: `https://www.linkedin.com/company/cleanpaz`

### Analytics y tracking

El sitio incluye:

- Google Analytics 4: `G-WVRE9V7TJK`
- Google Tag Manager: `GTM-TRW2TPQR`
- Eventos enviados a `dataLayer`:
  - `whatsapp_hero`
  - `whatsapp_how`
  - `whatsapp_float`
  - `form_submit`

## SEO

`index.html` incluye:

- `title`
- `meta description`
- `meta keywords`
- `canonical`
- Open Graph
- Twitter Card
- Schema.org tipo `CleaningService`
- `robots: index, follow`

Cuando se cambien telefonos, emails, redes, zonas de cobertura o textos comerciales, revisar tambien el bloque Schema.org para mantener los datos consistentes.

## Como correr localmente

Como es un sitio estatico, alcanza con abrir `index.html` en el navegador. Para probarlo con servidor local:

```bash
python3 -m http.server 8080
```

Luego abrir:

```text
http://localhost:8080
```

Usar servidor local ayuda a detectar referencias rotas a archivos, fuentes, scripts externos y assets multimedia.

## Como editar

1. Abrir `index.html`.
2. Buscar la seccion a modificar por su comentario HTML, por ejemplo `<!-- SERVICES -->` o `<!-- CONTACT -->`.
3. Cambiar el contenido visible en el HTML.
4. Si se cambia un contacto, actualizar todas sus apariciones:
   - CTAs de WhatsApp.
   - Seccion de contacto.
   - Footer.
   - Schema.org.
5. Probar en desktop y mobile.
6. Verificar que los enlaces externos abran correctamente.

## Assets y referencias

El sitio usa assets locales para logo, iconos, video y fondos. Mantener estos nombres si no se actualizan las referencias en `index.html`:

```text
logo.png
favicon.ico
apple-touch-icon.png
main.mp4
industrial.webp
oficina.webp
post obra.webp
verdes.webp
umanoai-logo.png
```

El HTML tambien referencia `og-image.jpg` para Open Graph y Twitter Card. Si se quiere mejorar la vista previa al compartir el sitio en redes sociales, agregar ese archivo en la raiz o actualizar las metas `og:image` y `twitter:image` con una URL valida.

## Publicacion

Para GitHub Pages:

1. Subir todos los archivos de la raiz del sitio al repositorio.
2. Configurar GitHub Pages para publicar desde la rama correspondiente.
3. Mantener `CNAME` con:

```text
cleanpaz.com.ar
```

4. En DNS, apuntar el dominio a GitHub Pages segun la configuracion vigente del proveedor DNS.
5. Verificar HTTPS desde la configuracion de Pages.

## Checklist antes de publicar

- `index.html` abre sin errores visuales.
- El menu mobile abre y cierra.
- Los botones de WhatsApp abren el numero correcto.
- El formulario valida campos requeridos y abre WhatsApp con el mensaje.
- Telefonos, emails y redes sociales estan actualizados.
- `CNAME` contiene el dominio correcto.
- Favicon y Apple touch icon cargan correctamente.
- No hay assets faltantes en la consola del navegador.
- Open Graph usa una imagen real y accesible.
- Google Analytics y Google Tag Manager corresponden a la cuenta correcta.

## Mantenimiento recomendado

- Mantener las imagenes optimizadas en formatos livianos como WebP o PNG comprimido.
- Evitar subir videos pesados sin compresion.
- Revisar periodicamente que el carrusel externo de RSS.app siga cargando.
- Actualizar reseñas, servicios y zonas de cobertura cuando cambie la operacion comercial.
- Si el sitio crece, separar CSS y JavaScript en archivos propios para facilitar mantenimiento.
