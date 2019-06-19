// Boolean flags for top-level pages
homepage_active = (document.title == 'Home' ? "active" : "");
blogpage_active = (document.title == 'Blog' ? "active" : "");
codepage_active = (document.title == 'Code' ? "active" : "");
photospage_active = (document.title == 'My Photos' ? "active" : "");
musicpage_active = (document.title == 'My Music' ? "active" : "");
// Boolean flags for blog pages
manifoldsi_active = (document.title == 'Manifolds: Part I' ? "active" : "");
manifoldsii_active = (document.title == 'Manifolds: Part II' ? "active" : "");
manifoldsiii_active = (document.title == 'Manifolds: Part III' ? "active" : "");
maxwellseq_active = (document.title == "Manifolds Application: Maxwell's Equations" ? "active" : "");
// Boolean flags for code pages
aes_active = (document.title == 'AES Rundown' ? "active" : "");
prince_active = (document.title == 'PRINCE Cipher Rundown' ? "active" : "");
// Boolean flags for directories
blog_active = (blogpage_active || manifoldsi_active || manifoldsii_active || manifoldsiii_active || maxwellseq_active ? "active" : "");
code_active = (codepage_active || aes_active || prince_active ? "active" : "");

// Dynamic navbar
navbar = `<!-- Navigation bar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="https://www.christopherdare.com/homepage.html">Chris Dare</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ` + homepage_active + `">
        <a class="nav-link" href="https://www.christopherdare.com/homepage.html">Home</a>
      </li>
      <!-- Blog Dropdown -->
      <li class="nav-item dropdown ` + blog_active + `">
        <a class="nav-link dropdown-toggle" href="https://www.christopherdare.com/blogpage.html" id="navbarDropdownBlogLink"  aria-haspopup="true" aria-expanded="false">Blog</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownBlogLink">
          <a class="dropdown-item ` + manifoldsi_active + `" href="https://www.christopherdare.com/blogposts/manifoldparti.html">Manifolds: Part I</a>
          <a class="dropdown-item ` + manifoldsii_active + `" href="https://www.christopherdare.com/blogposts/manifoldpartii.html">Manifolds: Part II</a>
          <a class="dropdown-item ` + manifoldsiii_active + `" href="https://www.christopherdare.com/blogposts/manifoldpartiii.html">Manifolds: Part III</a>
          <a class="dropdown-item ` + maxwellseq_active + `" href="https://www.christopherdare.com/blogposts/maxwellseq.html">Maxwell&#39;s Equations</a>
        </div>
      </li>
      <!-- Code Dropdown -->
      <li class="nav-item dropdown ` + code_active + `">
        <a class="nav-link dropdown-toggle" href="https://www.christopherdare.com/codepage.html" id="navbarDropdownCodeLink" aria-haspopup="true" aria-expanded="false" style="font-family: 'Courier New', Courier;">
          Code
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownCodeLink">
          <a class="dropdown-item ` + aes_active + `" href="https://www.christopherdare.com/code/aes.html" style="font-family: 'Courier New', Courier;">AES</a>
          <a class="dropdown-item ` + prince_active + `" href="https://www.christopherdare.com/code/prince.html" style="font-family: 'Courier New', Courier;">PRINCE</a>
        </div>
      </li>
      <li class="nav-item ` + musicpage_active +`">
        <a class="nav-link" href="https://www.christopherdare.com/mymusicpage.html">My Music</a>
      </li>
      <li class="nav-item ` + photospage_active +`">
        <a class="nav-link" href="https://www.christopherdare.com/photospage.html">Photos</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="https://www.christopherdare.com/Chris_Dare_Resume.pdf">Resume</a>
      </li>
    </ul>
  </div>
</nav>`;
document.write(navbar);