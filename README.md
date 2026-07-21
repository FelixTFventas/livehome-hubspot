# LiveHome para HubSpot

Tema editable para presentar y comercializar proyectos de vivienda nueva en Colombia. El código se despliega automáticamente a HubSpot desde la rama `main`.

## Contenido inicial

- Villa Santa: $187.000.000 COP, separación de $6.000.000 COP y cuota inicial de $31.000.000 COP.
- Villa del Lago: 135 SMMLV vigentes a la fecha de escritura, separación de $3.000.000 COP y cuota inicial de $70.000.000 COP.
- En ambos proyectos, la separación está incluida en la cuota inicial.

## Estructura

- `src/LiveHome`: tema que se despliega en HubSpot.
- `preview`: vista estática para desarrollo local.
- `.github/workflows/deploy.yml`: despliegue automático.

## Conectar GitHub con HubSpot

Configura estos valores en `Settings > Secrets and variables > Actions` del repositorio:

- Variable `HUBSPOT_ACCOUNT_ID`: ID numérico de la cuenta de HubSpot.
- Secreto `HUBSPOT_PERSONAL_ACCESS_KEY`: clave personal de acceso al CMS.

El workflow se ejecuta con cada cambio en `src/LiveHome` enviado a `main`. Si la variable de cuenta aún no existe, el despliegue se omite de forma segura. También puede iniciarse manualmente desde la pestaña `Actions`.

## Antes de publicar

1. Configura la variable y el secreto de GitHub.
2. Ejecuta el workflow `Deploy LiveHome to HubSpot`.
3. Crea una página usando la plantilla `LiveHome - Proyectos de vivienda`.
4. Selecciona el módulo del formulario y conecta un formulario existente de HubSpot.
5. Reemplaza el teléfono provisional `573001234567`, el correo y los enlaces de redes sociales.
6. Sustituye las fotografías demostrativas por imágenes oficiales de cada proyecto.

## Edición de proyectos

En el editor de la página, abre el módulo `Galería de proyectos`. El campo repetible `Proyectos` permite agregar, eliminar, ordenar u ocultar propiedades y cambiar todos sus datos sin modificar código.

Los colores generales se pueden modificar desde la configuración del tema.

## Vista local

Desde la raíz del repositorio ejecuta:

```powershell
python -m http.server 4173
```

Abre `http://127.0.0.1:4173/preview/`.
