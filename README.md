# Matplotlib Brochure site

This is the source for the top-level index.html for matplotlib.org

Temporarily served at https://matplotlib.org/mpl-brochure-site/

## build

```bash
pip install -r requirements.txt
make -Cdocs html
```

## Maintain image rotator:

Right now the image rotator plots the sphinx-gallery in ``plot_types`` and 
rotates through those images.  See 
``docs/_static/images-rotate/_generate_images.py``. 
Note that the location of the matplotlib source install is assumed to be at the 
same level as the install of ``mpl-brochure-site``, so modify if that is not the 
case.  

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
