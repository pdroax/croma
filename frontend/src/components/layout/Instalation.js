import { useState } from "react";
import styles from '../../components/layout/Instalation.module.css';
import img1 from '../../img/foto1.jpeg';
import img2 from '../../img/foto2.jpeg';
import img3 from '../../img/foto3.jpeg';
import img4 from '../../img/foto4.jpg';
import img5 from '../../img/foto5.jpg';
import img6 from '../../img/foto6.jpg';
import img7 from '../../img/foto7.jpg';

function Instalation() {
    // Lista das imagens
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const [currentIndex, setCurrentIndex] = useState(0); // Índice da imagem atual

    const nextImage = () => {
        if (currentIndex < images.length - 3) {
            setCurrentIndex(currentIndex + 1); // Avança uma posição
        } else {
            setCurrentIndex(0); // Volta para o início
        }
    };

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // Volta uma posição
        } else {
            setCurrentIndex(images.length - 3); // Vai para o final
        }
    };

    return (
        <div className={styles.slide}>
            <div className={styles.carousel}>
                <button className={styles.carouselButtonLeft} onClick={prevImage}>
                    &#8249; {/* Símbolo de seta para a esquerda */}
                </button>

                <div className={styles.carouselImagesWrapper} style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                    {images.map((img, index) => (
                        <img 
                            key={index}
                            src={img}
                            alt={`Imagem ${index + 1}`}
                            className={styles.carouselImage}
                        />
                    ))}
                </div>

                <button className={styles.carouselButtonRight} onClick={nextImage}>
                    &#8250; {/* Símbolo de seta para a direita */}
                </button>
            </div>
        </div>
    );
}

export default Instalation;