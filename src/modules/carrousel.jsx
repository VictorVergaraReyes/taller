import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
    <Carousel className='vw-60 h-auto d-block'>
      <Carousel.Item class="carousel-item">
        <img
          class="imagen-carrusel"
          src="src\assets\moto.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Motocicletas</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="carousel-item">
        <img
          class="imagen-carrusel"
          src="src\assets\auto.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Autos</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="carousel-item">
        <img
          class="imagen-carrusel"
          src="src\assets\taller_autos.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Mecánica</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="carousel-item">
        <img
          className="imagen-carrusel"
          src="https://cnnespanol.cnn.com/wp-content/uploads/2018/11/181128101403-bmw-factory-full-169.jpg?quality=100&strip=info"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mecánica Industrial</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrusel;