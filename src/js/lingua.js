$(document).ready(function() {
    $('#lingua').on('click', function() {
    var img1 = 'src/img/estados-unidos.png';
    var img2 = 'src/img/brasil.png';
    var element = $('#lingua');

    var english = `
    
    <!----- HOME ----->
    <section class="home" id="home">
      <div class="home-conteudo">
  
        <div class="home-img">
          <img src="src/img/eu1.png" alt="Riquelmi" />
        </div>
  
        <div class="home-textos">
          <h1>Hey, I'm <span>Riquelmi</span> !</h1>
          <h4>Junior Front End Developer <i class="bx bx-code-block"></i></h4>
          <p>Web programmer focused on learning to become a Full Stack.</p>
        </div>
  
        <div class="social-media">
          <a href="https://www.linkedin.com/in/riquelmi-santos-41a514262/"><i class="bx bxl-linkedin"></i></a>
          <a href="https://discord.gg/fYHDAzKu"><i class='bx bxl-discord-alt'></i></a>
          <a href="https://twitter.com/fenixkw1"><i class="bx bxl-twitter"></i></a>
          <a href="https://github.com/RiquelmiDev"><i class='bx bxl-github'></i></a>
        </div>
  
      </div>
      
    </section>

    <section class="sobre" id="sobre">
      <div class="sobre-conteudo">
        <div class="sobre-img">
          <img src="src/img/eu2.jpg" alt="Riquelmi" />
        </div>

        <h1>Hey, <span>Welcome</span>!</h1>
    
        <p style="--i: 4">
          <i class="bx bx-ghost bx-spin" style="color: #ff6000"></i>
          Hello! My name is Riquelmi, and it's a pleasure to have you here.
          I'm a Junior Developer passionate about creating innovative
          solutions. With a strong curiosity and a constant desire to learn,
          I'm on the path to becoming a Full Stack developer.
          <i class="bx bx-ghost bx-spin" style="color: #ff6000"></i>
        </p>
        <br />
        <p style="--i: 5">
          <i class="bx bx-ghost bx-spin" style="color: #ff6000"></i>
          Throughout my journey as a developer, I've explored various
          programming languages, such as Java and PHP (currently studying them
          to expand my skills). My experiences include academic and personal
          projects where I faced challenges, learned from them, and grew as a
          professional.
          <i class="bx bx-ghost bx-spin" style="color: #ff6000"></i>
        </p>
        <br />
        <p style="--i: 6">
          <i class="bx bx-ghost bx-spin" style="color: #ff6000"></i>
          I enjoy listening to music, watching movies, series, anime, and,
          most importantly, gaming—something I've loved since childhood and
          one of the reasons I ventured into the programming field.
          <i class="bx bx-ghost bx-spin" style="color: #ff6000"></i>
        </p>
    
      </div>
    </section>

    <section class="skills" id="skilss">
      <div class="skills-conteudo">
    
        <h1>My <span>Knowledge</span></h1>
    
        <div class="linguagens">

          <div class="iconlinguagens">
            <img src="src/img/html_icon.png" alt="HTML 5" /> HTML 5
            <img src="src/img/css_icon.png" alt="CSS" /> CSS
            <img src="src/img/js_icon.png" alt="JavaScript" /> JavaScript
            <img src="src/img/bootstrap_icon.png" alt="Bootstrap" />
            Bootstrap
            <img src="src/img/jquery_icon.png" alt="jquery" /> Jquery
            <img src="src/img/php-svgrepo-com.png" alt="PHP" /> PHP
            <img src="src/img/python-svgrepo-com.png" alt="Python" /> Python
            <img src="src/img/mysql_icon.png" alt="Mysql" /> Mysql
            <img src="src/img/adobe-photoshop_icon.png" alt="photoshop" />
            Photoshop
            <img src="src/img/adobe-after-effects_icon.png" alt="aftereffects" />
            AE
          </div>

        </div>

      </div>
    </section>

    <section class="projetos" id="projetos">
      <section class="portfolio">
    
        <div class="portfolio-conteudo">
          <h1>Latest <span>Projects</span></h1>
        </div>
    
      </section>
    
      <div class="container">
        <!-- card-1-->
        <div class="cardanimate" style="--i: 4">
          <div class="card card-1">
            <div class="card-header">
              <img src="src/img/fashion.png" class="card-img" />
            </div>
    
            <div class="card-body">
    
              <h2 class="card-titulo">Online Store</h2>
              <p class="card-texto">
                Project developed as a team during the Web Programming course, using clothing shopping sites such as
                Zara
                as a reference. We use PHP as the main language for the back-end, in addition to mysql as the
                database.
              </p>
    
            </div>
    
            <div class="card-footer">
              <a href="https://github.com/RiquelmiDev/FashionAtacado">View more</a>
            </div>
    
          </div>
        </div>
        <!-- card-2 -->
    
        <div class="cardanimate" style="--i: 5">
          <div class="card card-2">
            <div class="card-header">
              <img src="src/img/pokedex.png" class="card-img" />
            </div>
    
            <div class="card-body">
    
              <h2 class="card-titulo">Pokédex</h2>
              <p class="card-texto">
                The Pokédex project was created using HTML, CSS, and JavaScript. Utilizing an API called PokeAPI, the
                user
                enters a number, and based on the entered number, a specific Pokémon is displayed on their screen.
              </p>
    
            </div>
    
            <div class="card-footer">
    
              <a href="https://github.com/RiquelmiDev/Pokedex_em_html">View more</a>
    
            </div>
    
          </div>
        </div>
    
        <div class="cardanimate" style="--i: 6">
          <!-- card-3 -->
    
          <div class="card card-3">
            <div class="card-header">
              <img src="src/img/onepieceprojeto2.png" class="card-img" />
            </div>
    
            <div class="card-body">
    
              <h2 class="card-titulo">One Piece</h2>
              <p class="card-texto">
                A simple project using HTML, CSS, and JavaScript, showcasing the members of the Straw Hat Pirates,
                their
                stories, and their roles within the crew.
              </p>
    
            </div>
    
            <div class="card-footer">
    
              <a href="#">View more</a>
    
            </div>
    
          </div>
        </div>
      </div>
    </section>

    <section id="contato" class="contato">
      <div class="contato-conteudo">

        <h2>Contact <span>Me</span> !</h2>
    
        <form action="#">
          <div class="input-box">
    
            <div class="input-field field">
              <input type="text" placeholder="Nome Completo/Full Name" id="nome" class="item" autocomplete="off">
    
              <div class="error-txt">The full name can't be left blank!</div>
    
            </div>
    
            <div class="input-field field">
              <input type="text" placeholder="E-mail" id="email" class="item" autocomplete="off">
    
              <div class="error-txt email">The E-mail address can't be left blank!</div>
    
            </div>
    
            <div class="input-field field">
              <input type="text" placeholder="Telefone/Phone" id="numero" class="item" autocomplete="off">
  
              <div class="error-txt">The Phone Number can't be left blank!</div>
    
            </div>
    
            <div class="input-field field">
              <input type="text" placeholder="Assunto/Subject" id="assunto" class="item" autocomplete="off">
    
              <div class="error-txt">The Subject can't be left blank!</div>
    
            </div>
    
          </div>
          <div class="textarea-field field">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Digite sua Mensagem / Enter your message"
              class="item" autocomplete="off"></textarea>
    
            <div class="error-txt">The Message can't be left blank!</div>
    
    
          </div>
    
          <button type="submit">
            <div id="">Send Message</div>
          </button>
        </form>
      </div>
    
    </section>
   
`;

    if(element.attr('src') === img2){
        element.attr('src',img1);
        $('#conteudo-en').hide();
        $('#conteudo-pt-br').show();// Exibir todos os registros novamente

    }else if(element.attr('src') === img1){
        element.attr('src',img2);
        $('#conteudo-pt-br').hide(); // Esconde o div com todos os registros
        $('#conteudo-en').show(); // Mostra o div com os resultados da busca
        $('#conteudo-en').html(english); // Insere os resultados no div
    }

    

    });
});



