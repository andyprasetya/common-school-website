var templates = {};

templates.topNavigation = function() {
  let dom = `<head>
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'>
  <link rel='stylesheet' href='bootstrap/dist/css/bootstrap.css.map'>
  <script src='js/jquery.min.js'></script>
  <script src='js/popper.js'></script>
  <script src='js/bootstrap.min.js'></script>
    
    <!-- Required meta tags -->
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    
  
    <!-- Bootstrap CSS -->
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
  
    <title>smkgiripuro</title>
    <!---Java For Video--->
  
    <script src='https://ajax.googleapis.com/ajax/jquery/3.4.1/jquery/.min.js'></script>
  
    
  
    <!---Size Video-->
  
    <style>
    .carousel-inner video {
      width: 100%;
      height: 70%;
    }
    html {
    scroll-behavior: smooth;
  }
    </style>
  
    <!---End Size-->
  
  </head>
  <body>
  
    <!---Starting Jumbotron Atas-->
  
    <header>
      <nav class='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <img src='images/sumpiuh.png'><a class='navbar-brand' href='#'></a>
        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarCollapse'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>Beranda<span class='sr-only'>(current)</span></a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#profil'>Profil</a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#program'>Jurusan</a>
            </li>
            <li class='nav-item'>
              <a class='nav-link'  href='#teaching'>Teaching Factory</a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#bkk'>BKK SMK Giripuro Sumpiuh</a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#info'>Informasi</a>
            </li>
          </ul>
          <form class='form-inline mt-2 mt-md-0'>
            <input class='form-control mr-sm-2' type='text' placeholder='Search' aria-label='Search'>
            <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
          </form>
        </div>
      </nav>
    </header>
      
    <!---Start Video Section-->
  
      <div id='demo' class='carousel slide' data-ride='carousel'>     
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <video class='master-video' autoplay='autoplay' muted='true' loop='loop'><source src='https://r3---sn-npoe7ne7.googlevideo.com/videoplayback?expire=1571874184&ei=KJGwXcqaHoSqhAfiha2QAg&ip=202.169.37.126&id=o-ABWt3jlWpSVpg5pGAZLEKt5l02J1sHOq-vhXr95qEgn6&itag=135&aitags=133%2C134%2C135%2C160%2C242%2C243%2C244%2C278&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=65109436&otfp=1&dur=483.399&lmt=1561035786017719&fvip=3&keepalive=yes&fexp=23842630&c=WEB&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&sig=ALgxI2wwRQIgCDeekcfgXqHrKGHrCls6iHdFF3fXrTrd6Vfih3iiWl8CIQD8zawx8YgS1lm0RtJ9j9NOvzXm6rEA-iLUD6grvRNNDQ%3D%3D&video_id=eZdJkg41wi4&title=Kegiatan+Halal+Bi+Halal+Siswa+%26+Guru+SMK+GIRIPURO+SUMPIUH&rm=sn-cp1oxu-jb3l7s,sn-npolr7s&req_id=5e06b4142cada3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mip=36.73.43.248&mm=29&mn=sn-npoe7ne7&ms=rdu&mt=1571852457&mv=m&mvi=2&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgQXJaTbSBdPTCblRSyTPI2x3AA3TgN5NNMGJwm26z3n4CIQDeYc9BKLobfdYilkE5olDXzCCoU6jcrdm3lnQlyoNeBg==' type='video/mp4'/></video>
                </div>
          </div>
        </div>
  
    <!---End Video Section-->    
  
    <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->
  
  <div class='container marketing'>
  
    <!-- Three columns of text below the carousel -->
    <hr class='container my-5' id='profil'>
    <div class='container text-center'>
      <h1>Profil Sekolah</h1>
    </div>
    <div class='row'>
      <div class='col-lg-4'>
        <img src='images/Prestasi.png'svg class='bd-placeholder-img rounded-circle'  width='140' height='140' preserveAspectRatio='xMidYMid slice' focusable='false' role='img' aria-label='Placeholder: 140x140'><title>Placeholder</title><rect width=100%' height='100%' fill='#777'/></svg>
        <h2>Prestasi</h2>
        
        <p><a class='btn btn-secondary' href='prestasi.html' role='button'>Selengkapnya &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class='col-lg-4'>
        <img src='images/fasilitas.png'svg class='bd-placeholder-img rounded-circle' width='140' height='140' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid slice' focusable='false' role='img' aria-label='Placeholder: 140x140'><title>Placeholder</title><rect width='100%' height='100%' fill='#777'/></svg>
        <h2>Fasilitas</h2>
        
        <p><a class='btn btn-secondary' href='fasilitas.html' role='button'>Selengkapnya &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class='col-lg-4'>
        <img src='images/prakata.png'svg class='bd-placeholder-img rounded-circle' width='140' height='140' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid slice' focusable='false' role='img' aria-label='Placeholder: 140x140'><title>Placeholder</title><rect width='100%' height='100%' fill='#777'/></svg>
        <h2>Prakata Kepala Sekolah</h2>
        
        <p><a class='btn btn-secondary' href='pks.html' role='button'>Selengkapnya &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->
  
    <!-- START THE FEATURETTES -->
  
    <hr class='featurette-divider my-5' id='profil'>
  
    <div class='row featurette' id='#profil'>
      <div class='col-md-7'>
        <a href='profil.html'><h2 id='profil' class='featurette-heading'>Profil Sekolah.</h2></a>
        <p class='lead'>Prakata Kepala Sekolah, Sejarah, Visi & Misi, Identitas Sekolah, Guru & Staff, Kesiswaan.</p>
      </div>
      <div class='col-md-5'>
        <img src='images/profil.png'>
      </div>
    </div>
  
    <hr class='featurette-divider my-5' id='program'>
  
    <div class='row featurette' id='#program'>
      <div class='col-md-7 order-md-2'>
        <a href='Jurusan.html'><h2 id='program' class='featurette-heading'>Program Keahlian.</h2></a>
        <p class='lead'>Teknik Instalasi Tenaga Listrik (TITL), Teknik Pemesinan (TP), Teknik Kendaraan ringan (TKR), Teknik Konstruksi Bangunan (TKB), Teknik Komputer & Jaringan (TKJ).</p>
      </div>
      <div class='col-md-5 order-md-1'>
        <img src='images/jurusan.png'>
      </div>
    </div>
  
    <hr class='featurette-divider my-5' id='teaching'>
  
    <div class='row featurette' id='#teaching'>
      <div class='col-md-7'>
        <h2 id='teaching' class='featurette-heading'>Teaching Factory.</h2>
        <p class='lead'>Tentang Teaching Factory, Team teaching Factory, Dokumentasi, Products Teaching Factory </p>
      </div>
      <div class='col-md-5'>
        <img src='images/teaching.png'>
      </div>
    </div>
  
    <hr class='featurette-divider my-5' id='bkk'>
  
  
    <div class='row featurette' id='#bkk'>
      <div class='col-md-7 order-md-2'>
        <h2 id='bkk' class='featurette-heading'>BKK SMK Giripuro Sumpiuh.</h2>
        <p class='lead'>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class='col-md-5 order-md-1'>
        <img src='images/bkk.png'>
      </div>
    </div>
  
    <hr class='featurette-divider my-5' id='info'>
  
    <div class='row featurette' id='info'>
      <div class='col-md-7'>
        <h2 id='info' class='featurette-heading'>Informasi.</h2>
        <p class='lead'>Kontak, Galeri Foto, PPDB, Fasilitas, Berita, Galeri Video.</p>
      </div>
      <div class='col-md-5'>
        <img src='images/info.png'>
      </div>
    </div>
  
    <hr class='featurette-divider my-5'>
  
    <!-- /END THE FEATURETTES -->
  
  </div><!-- /.container -->
  
        <!---Jumbotron Bawah-->
  
        <div class='jumbotron'>
          <footer class='container py-5'>
              <div class='row'>
                <div class='col-12 col-md'>
                  
                  <h5>Tentang Kami</h5><br>
                  <small><p>SMK Giripuro Sumpiuh merupakan SMK tertua di kawasan Kecamatan Sumpiuh berdiri sejak tahun 1968 sehingga menjadikan SMK Giripuro handal dan terpercaya.</p>
                  <p>SMK Giripuro Sumpiuh telah Terakreditasi A oleh Badan Akreditasi Nasional – Sekolah/Madrasah (BAN-S/M) dan bersertifikat ISO 9001:2008.</p>
                  <p>SMK Giripuro Sumpiuh berlokasi di Jl. Giritomo No. 15 Sumpiuh (Belakang SMPN 2 Sumpiuh), Kab. Banyumas, Jawa Tengah Kode Pos 53195, Telp. (0282) 497681</p></small>
          
                </div>
                <div class='col-6 col-md'>
                  <h5>Features</h5>
                  <ul class='list-unstyled text-small'>
                    <li><a class='text-muted' href='#'>Cool stuff</a></li>
                    <li><a class='text-muted' href='#'>Random feature</a></li>
                    <li><a class='text-muted' href='#'>Team feature</a></li>
                    <li><a class='text-muted' href='#'>Stuff for developers</a></li>
                    <li><a class='text-muted' href='#'>Another one</a></li>
                    <li><a class='text-muted' href='#'>Last time</a></li>
                  </ul>
                </div>
                <div class='col-6 col-md'>
                  <h5>Resources</h5>
                  <ul class='list-unstyled text-small'>
                    <li><a class='text-muted' href='#'>Resource</a></li>
                    <li><a class='text-muted' href='#'>Resource name</a></li>
                    <li><a class='text-muted' href='#'>Another resource</a></li>
                    <li><a class='text-muted' href='#'>Final resource</a></li>
                  </ul>
                </div>
                <div class='col-6 col-md'>
                  <h5>Resources</h5>
                  <ul class='list-unstyled text-small'>
                    <li><a class='text-muted' href='#'>Business</a></li>
                    <li><a class='text-muted' href='#'>Education</a></li>
                    <li><a class='text-muted' href='#'>Government</a></li>
                    <li><a class='text-muted' href='#'>Gaming</a></li>
                  </ul>
                </div>
                <div class='col-6 col-md'>
                  <h5>About</h5>
                  <ul class='list-unstyled text-small'>
                    <li><a class='text-muted' href='#'>Team</a></li>
                    <li><a class='text-muted' href='#'>Locations</a></li>
                    <li><a class='text-muted' href='#'>Privacy</a></li>
                    <li><a class='text-muted' href='#'>Terms</a></li>
                  </ul>
                </div>
              </div>
            </footer>
  
  
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   
    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script>
    <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>
  </body>`;
  return dom;
}

templates.modalBoxes = function() {
  let dom = `<div class='modal fade' id='modalbox' tabindex='-1' role='dialog' aria-labelledby='app_modal_label' aria-hidden='true'>
    <div id='app_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h5 class='modal-title' id='app_modal_label'></h5>
        </div>
        <div id='app_modal_body' class='modal-body'></div>
        <div id='app_modal_footer' class='modal-footer'>
          <button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class='modal fade' id='modalform' tabindex='-1' role='dialog' aria-labelledby='form_modal_label' aria-hidden='true'>
    <div id='form_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <form id='dynamicform' name='dynamicform'>
          <div class='modal-header'>
            <h5 class='modal-title' id='form_modal_label'></h5>
          </div>
          <div id='form_modal_body' class='modal-body'></div>
          <div id='form_modal_footer' class='modal-footer'></div>
        </form>
      </div>
    </div>
  </div>

  <div class='modal fade' id='featureModal' tabindex='-1' role='dialog'>
    <div id='feature_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h4 class='modal-title' id='feature-title'></h4>
        </div>
        <div id='feature-info' class='modal-body'></div>
        <div id='feature_modal_footer' class='modal-footer'>
          <button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Close</button>
        </div>
      </div>
    </div>
  </div>

  <div id='dataPropModal' class='dataPropertyModal'>
    <span class='dataPropertyClose'>&times;</span>
    <img class='dataPropertyModal-content' id='imgtoshow'/>
    <div id='dataPropertyCaption'></div>
  </div>`;
  return dom;
}

templates.loginBox = function() {
  let dom = `<div class='form-group'>
      <label for='username'>Username</label>
      <input type='text' class='form-control' id='username' name='username' value='' placeholder='Username'>
    </div>
    <div class='form-group'>
      <label for='password'>Password</label>
      <input type='password' class='form-control' id='password' name='password' value='' placeholder='Password'>
    </div>
    <span id='notice'><div class='alert alert-secondary pl-0 pr-0 text-center' role='alert'>Enter your username and password.</div></span>`;
  return dom;
}

templates.loginButtons = function() {
  let dom = `<button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Cancel</button>
    <button type='submit' class='btn btn-primary btn-sm'><i class='fa fa-lock'></i>&nbsp;Login</button>`;
  return dom;
}

export default templates;
