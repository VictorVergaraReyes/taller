import React from "react";
export default function Scrollspy(){
    
    return(
        <>
            <div class="row">
              <div class="col-4">
                <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end p-4">
                  <nav class="nav nav-pills flex-column">
                    <a class="nav-link" href="#item-1">Software para talleres</a>
                    <nav class="nav nav-pills flex-column">
                      <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                      <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                    </nav>
                    <a class="nav-link" href="#item-2">Características</a>
                    <a class="nav-link" href="#item-3">Beneficios</a>
                    <nav class="nav nav-pills flex-column">
                      <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                      <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                    </nav>
                  </nav>
                </nav>
              </div>
                
              <div class="col-8 p-4">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                  <div id="item-1">
                    <h4>Software para talleres</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat sapiente magnam consequatur atque pariatur consectetur maiores nostrum delectus quasi ea, esse natus rerum ducimus impedit laboriosam illo! Quibusdam, quos.</p>
                  </div>
                  <div id="item-1-1">
                    <h5>Item 1-1</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi molestiae, unde eaque sequi obcaecati atque earum voluptates officiis eum! Iste, mollitia doloribus. Unde, sint blanditiis! Expedita similique pariatur sit sint.</p>
                  </div>
                  <div id="item-1-2">
                    <h5>Item 1-2</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque perspiciatis, sequi doloribus aut cumque sed ea assumenda accusamus eligendi maiores voluptatem enim tempora qui illum tenetur nisi totam ab!</p>
                  </div>
                  <div id="item-2">
                    <h4>Características</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quam facilis nisi. Qui quisquam earum iusto dolorem nam harum, praesentium ex? Magni officia, debitis quae blanditiis veritatis consequatur quam repudiandae!</p>
                  </div>
                  <div id="item-3">
                    <h4>Beneficios</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, temporibus aliquam. Reiciendis placeat nulla, ipsa voluptas quae quis veniam possimus rerum provident perferendis eos pariatur quidem, voluptatem quasi, repellat error.</p>
                  </div>
                  <div id="item-3-1">
                    <h5>Item 3-1</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in tempora quam, sunt impedit fugiat necessitatibus ab pariatur molestias rem voluptatum cumque vitae quidem corrupti dolore? Dicta iure placeat perferendis.</p>
                  </div>
                  <div id="item-3-2">
                    <h5>Item 3-2</h5>
                    <p>...</p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}