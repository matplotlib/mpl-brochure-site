# Matplotlib Brochure site

This is the source for the top-level index.html for matplotlib.org

Temporarily served at https://matplotlib.org/mpl-brochure-site/

## build

```bash
pip install -r requirements.txt
make -Cdocs html


```

## CSS cache-busting

If you change the css files it is important to also change the query
parameter on the css link to ensure that users will not see a mix of new
content and old css.  For example

```html
    <link rel="stylesheet" href="_static/mpl.css?v1" type="text/css" />
```

to


```html
    <link rel="stylesheet" href="_static/mpl.css?v2" type="text/css" />
```

The query parameter will be ignored when serving the file from the origin but
will be taken into consideration by both cloudflare and users browsers when
identifying cache hits.
