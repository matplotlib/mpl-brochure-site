.. title:: Matplotlib

.. grid::
   :class-row: sd-align-minor-center
   :reverse:
   :gutter: 1

   .. grid-item-card:: Matplotlib: Visualization with Python
      :class-card: sd-border-0
      :class-title: intro-title
      :shadow: none

      Matplotlib is a comprehensive library for creating static, animated, and
      interactive visualizations in Python. Matplotlib makes easy things easy and hard
      things possible.

      - Create `publication quality plots
        <https://ieeexplore.ieee.org/document/4160265/citations?tabFilter=papers>`__.
      - Make `interactive figures
        <https://mybinder.org/v2/gh/matplotlib/mpl-brochure-binder/main?labpath=MatplotlibExample.ipynb>`__
        that can zoom, pan, update.
      - Customize `visual style
        <https://matplotlib.org/stable/gallery/style_sheets/style_sheets_reference.html>`__
        and `layout <https://matplotlib.org/stable/tutorials/provisional/mosaic.html>`__.
      - Export to `many file formats
        <https://matplotlib.org/stable/api/figure_api.html#matplotlib.figure.Figure.savefig>`__.
      - Embed in `JupyterLab and Graphical User Interfaces
        <https://matplotlib.org/stable/gallery/#embedding-matplotlib-in-graphical-user-interfaces>`__.
      - Use a rich array of `third-party packages
        <https://matplotlib.org/mpl-third-party/>`__ built on Matplotlib.

      .. button-link:: https://mybinder.org/v2/gh/matplotlib/mpl-brochure-binder/main?labpath=MatplotlibExample.ipynb
         :class: button button-purple

         Try Matplotlib (on Binder)

   .. grid-item::

      .. div::
         :name: image-rotator

         .. empty:

.. grid::

   .. quicklink::
      :img-top: _static/images/getting-started.svg
      :img-alt: computer desktop icon
      :link: https://matplotlib.org/stable/users/getting_started/

      Getting Started

   .. quicklink::
      :img-top: _static/images/sample-plots.svg
      :img-alt: folder icon
      :link: https://matplotlib.org/stable/plot_types/index.html

      Examples

   .. quicklink::
      :img-top: _static/images/userguide.svg
      :img-alt: documentation book icon
      :link: https://matplotlib.org/stable/index.html

      Reference

   .. quicklink::
      :img-top: _static/images/cheatsheets.svg
      :img-alt: cheatsheet icon
      :link: https://matplotlib.org/cheatsheets/

      Cheat Sheets

   .. quicklink::
      :img-top: _static/images/documentation.svg
      :img-alt: matplotlib logo icon
      :link: https://matplotlib.org/stable/index.html

      Documentation

.. div:: rule rule-viridis

   .. empty:

.. grid::
   :gutter: 1

   .. grid-item-card:: News
      :class-card: sd-border-0
      :class-title: mpl-card-title
      :class-footer: link-offsite
      :shadow: none

      .. div:: news-item-highlight

         .. div:: date

            May 30, 2024

         .. button-link:: https://discourse.matplotlib.org/t/gsoc-2024-announcement/24469
            :class: link-offsite

            GSOC 2024: Bivariate Colormaps

         A warm welcome to Trygve Magnus Ræder, who is working on `bivariate colormapping
         <https://trygvrad.github.io/google-soc-bivariate-colormaps/>`__.

      .. div:: news-item

         .. div:: date

            May 16, 2023

         .. button-link:: https://discourse.matplotlib.org/t/matplotlib-announce-ann-matplotlib-3-9-0/24444
            :class: link-offsite

            Matplotlib 3.9.0 Released

         We thank the 175 authors for the 450 pull requests that comprise the 3.9.0 release.

      +++
      `Older Announcements <https://discourse.matplotlib.org/c/announce/14>`__

   .. grid-item-card:: Resources
      :class-card: sd-border-0 mpl-card-resources
      :class-title: mpl-card-title
      :shadow: none

      - :far:`question-circle;callout-icon`

        Be sure to check the `Users guide
        <https://matplotlib.org/stable/users/index.html>`__ and the `API docs
        <https://matplotlib.org/stable/api/index.html>`__. The full text `search
        <https://matplotlib.org/stable/search.html>`__ is a good way to discover the docs
        including the many examples.

      - :fab:`discourse;callout-icon`

        Join our community at `discourse.matplotlib.org
        <https://discourse.matplotlib.org>`__ to get help, share your work, and discuss
        contributing & development.

      - :fab:`stack-overflow;callout-icon`

        Check out the Matplotlib tag on `StackOverflow
        <https://stackoverflow.com/questions/tagged/matplotlib>`__.

      - :fas:`calendar-alt;callout-icon`

        Meet us at our monthly call for new contributors to the Matplotlib project.
        Subscribe to our `community calendar
        <https://scientific-python.org/calendars/>`__ at Scientific Python to get access
        to all our community meetings.

      - :fab:`gitter;callout-icon`

        Short questions related to contributing to Matplotlib may be posted on the
        `gitter <https://gitter.im/matplotlib/matplotlib>`__ channel.

.. div:: rule rule-viridis

   .. empty:

.. grid::
   :gutter: 1

   .. grid-item-card:: Domain Specific Tools
      :class-card: sd-border-0 sd-mt-5
      :class-title: mpl-card-title
      :class-footer: link-offsite
      :shadow: none

      A large number of third party packages extend and build on Matplotlib
      functionality, including several higher-level plotting interfaces (seaborn,
      HoloViews, ggplot, ...), and a projection and mapping toolkit (Cartopy).

      +++
      `More Domain-Specific Tools <https://matplotlib.org/mpl-third-party/>`__

   .. grid-item::

      .. tab-set::
         :class: tabs tools

         .. tab-item:: seaborn
            :class-label: tabs-tab
            :selected:

            .. card::
               :class-card: sd-border-0
               :class-header: mpl-card-title
               :class-footer: link-offsite
               :shadow: none

               seaborn is a high level interface for drawing statistical graphics with
               Matplotlib. It aims to make visualization a central part of exploring and
               understanding complex datasets.
               +++
               `statistical data visualization <https://seaborn.pydata.org/>`__

         .. tab-item:: Cartopy
            :class-label: tabs-tab

            .. card::
               :class-card: sd-border-0
               :class-header: mpl-card-title
               :class-footer: link-offsite
               :shadow: none

               Cartopy is a Python package designed for geospatial data processing in
               order to produce maps and other geospatial data analyses.
               +++
               `Cartopy <https://scitools.org.uk/cartopy/docs/latest/>`__

         .. tab-item:: DNA Features Viewer
            :class-label: tabs-tab

            .. card::
               :class-card: sd-border-0
               :class-header: mpl-card-title
               :class-footer: link-offsite
               :shadow: none

               DNA Features Viewer is a Python library to visualize DNA features, e.g.
               from GenBank or Gff files, or Biopython SeqRecords.
               +++
               `DNA Features Viewer
               <https://github.com/Edinburgh-Genome-Foundry/DnaFeaturesViewer>`__

         .. tab-item:: plotnine
            :class-label: tabs-tab

            .. card::
               :class-card: sd-border-0
               :class-header: mpl-card-title
               :class-footer: link-offsite
               :shadow: none

               plotnine is an implementation of a grammar of graphics in Python. The
               grammar allows users to compose plots by explicitly mapping data to the
               visual objects that make up the plot.
               +++
               `plotnine <https://plotnine.readthedocs.io/en/stable/>`__

         .. tab-item:: WCS Axes
            :class-label: tabs-tab

            .. card::
               :class-card: sd-border-0
               :class-header: mpl-card-title
               :class-footer: link-offsite
               :shadow: none

               WCSAxes is a framework for making plots of Astronomical data in
               Matplotlib.
               +++
               `WCSAxes <https://docs.astropy.org/en/stable/visualization/wcsaxes/>`__

.. div:: rule rule-viridis

   .. empty

.. raw:: html
   :file: body.html
