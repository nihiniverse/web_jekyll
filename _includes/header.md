<header data-role="Header" class="navigation-header">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7342271923368602"
     crossorigin="anonymous"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-R20J35V57C"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-R20J35V57C');
    </script>
    <div class="navigation-max-width">
        <img alt="logo" src="{{ site.baseurl }}/assets/images/layouts/logo_top.png" width="231" height="54" />
        <div class="navigation-nav1">
        <navigation-links-wrapper
            class="navigation-links-wrapper"
            rootclassname="navigation-linksundefined"
        >
            <!--NavigationLinks component-->
            <nav
            class="navigation-links-nav navigation-linksroot-class-name1"
            >
            <span class="Navigation-Link navigation-links-text1">
                <span><a href="{{ site.baseurl }}/index.html" data-load id="about">About</a></span>
            </span>
            <span class="Navigation-Link navigation-links-text1 ">
                <span><a href="{{ site.baseurl }}/pages/bookmarks.html" data-load id="bookmarks">Bookmarks</a></span>
            </span>
            <span class="Navigation-Link navigation-links-text1 ">
                <span><a href="{{ site.baseurl }}/pages/tools.html" data-load id="tools">Tools</a></span>
            </span>
            <span class="Navigation-Link navigation-links-text1 ">
                <span><a href="{{ site.baseurl }}/pages/articles.html" data-load id="articles">Articles</a></span>
            </span>
            <span class="Navigation-Link navigation-links-text1 ">
                <span><a href="{{ site.baseurl }}/pages/gallery.html" data-load id="Gallery">Gallery</a></span>
            </span>
            </nav>
        </navigation-links-wrapper>
        </div>
            <div data-role="BurgerMenu" class="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" class="navigation-icon1">
            <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
            </svg>
        </div>
        <div data-role="MobileMenu" class="mobile-menu">
        <div class="navigation-nav2">
            <div class="navigation-container">
            <img alt="logo" src="{{ site.baseurl }}/assets/images/layouts/logo_top.png" width="231" height="54">
            <div
                data-role="CloseMobileMenu"
                class="navigation-close-mobile-menu"
            >
                <svg viewBox="0 0 1024 1024" class="navigation-icon3">
                <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
                </svg>
            </div>
            </div>
            <navigation-links-wrapper-ulep
            class="navigation-links-wrapper-ulep"
            rootclassname="navigation-linksundefined"
            >
            <nav
                class="navigation-links-nav1 navigation-linksroot-class-name1"
            >
                <span class="Navigation-Link navigation-links-text2 ">
                    <span><a href="{{ site.baseurl }}/index.html" data-load id="about">About</a></span>
                </span>
                <span class="Navigation-Link navigation-links-text2 ">
                    <span><a href="{{ site.baseurl }}/pages/bookmarks.html" data-load>Bookmarks</a></span>
                </span>
                <span class="Navigation-Link navigation-links-text2 ">
                    <span><a href="{{ site.baseurl }}/pages/tools.html" data-load>Tools</a></span>
                </span>
                <span class="Navigation-Link navigation-links-text2 ">
                    <span><a href="{{ site.baseurl }}/pages/articles.html" data-load>Articles</a></span>
                </span>
                <span class="Navigation-Link navigation-links-text2 ">
                    <span><a href="{{ site.baseurl }}/pages/gallery.html" data-load>Gallery</a></span>
                </span>
            </nav>
            </navigation-links-wrapper-ulep>
        </div>
        </div>
    </div>
</header>

<script>
  document.addEventListener('DOMContentLoaded', function() {
      const links = document.querySelectorAll('.navigation-links-nav a');
      // Check local storage for an active link
      const activeLink = localStorage.getItem('activeLink');
      const aboutLink = document.getElementById('about');
      const burgerMenu = document.querySelector('[data-role="BurgerMenu"]');
      const mobileMenu = document.querySelector('[data-role="MobileMenu"]');
      const closeMenuButton = document.querySelector('[data-role="CloseMobileMenu"]');
      if (activeLink) {
          // Apply the bold class to the active link
          links.forEach(link => {
              if (link.href === activeLink) {
                  link.classList.add('clicked-link');
              }
          });
      }
      links.forEach(link => {
          link.addEventListener('click', function() {
              // Remove bold class from all links
              links.forEach(l => l.classList.remove('clicked-link'));
              
              // Add bold class to the clicked link
              this.classList.add('clicked-link');

              // Store the active link in local storage
              localStorage.setItem('activeLink', this.href);
          });
      });
        // Toggle mobile menu visibility
        burgerMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active'); // Toggle the 'active' class for showing/hiding the menu
        });

        // Close mobile menu when close button is clicked
        closeMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('active'); // Remove the 'active' class to hide the menu
        });
    });

</script>
<script
      defer=""
      src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
></script>