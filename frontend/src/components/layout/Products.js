import React, { useState } from 'react';
import styles from './Products.module.css';
import Default from '../../img/default.jpg'

// fume

import fumeGraf5 from '../../img/fume-grafite5.jpg'
import fumeGraf20 from '../../img/fume-grafite20.jpg'
import fumeGraf50 from '../../img/fume-grafite50.jpg'
import fumeGreen5 from '../../img/fume-verde5.jpg'
import fumeGreen20 from '../../img/fume-verde20.jpg'
import fumeGreen50 from '../../img/fume-verde50.jpg'

// silver black
import silverBlack from '../../img/silver-black2.jpg'

// espelhadas

import silver from '../../img/prata-espelhada.jpg'
import blue from '../../img/azul-espelhado.jpg'
import green from '../../img/verde-espelhado.jpg'
import red from '../../img/vermelho-espelhado.jpg'
import gold from '../../img/dourado-espelhado.jpg'
import bronze from '../../img/bronze-espelhado.jpg'

// metalizada

import metal5 from '../../img/metalizada5.jpg'
import metal20 from '../../img/metalizada20.jpg'
import metal35 from '../../img/metalizada35.jpg'

// secutiry

import security5 from '../../img/security5.jpg'
import security20 from '../../img/security20.jpg'
import security35 from '../../img/security35.jpg'
import security70 from '../../img/security70.jpg'

// pelicula jateada

import pJateada from '../../img/pelicula-jateada.jpg'

// vinil jateado

import vJateado from '../../img/vinil-jateado.jpg'

// museu

import museu from '../../img/museu.jpg'

// lg 80

import lg80 from '../../img/lg-80.jpg'

// blackout e white out

import white from '../../img/whiteOut.jpg'
import black from '../../img/blackout.jpg'

// decorativa

import miniB from '../../img/mini-blind.jpg'
import venetian from '../../img/blind.jpg'
import boldB from '../../img/block.jpg'

//  nanoceramica

import nano5 from '../../img/nano5.jpg'
import nano20 from '../../img/nano20.jpg'
import nano35 from '../../img/nano35.jpg'
import nano70 from '../../img/nano70.jpg'

function Products() {

    const [openCard, setOpenCard] = useState(null);
    const [selectedGraduation, setSelectedGraduation] = useState({}); // Armazenar a graduação selecionada para cada produto
    
    const products = [
        // fume
        { 
            id: 'fume',
            name: 'Professional Fumê - Grafite', 
            // description: '', 
            gradations: [
                { name:'Sem película', image: Default  },
                { 
                    name: '5%', 
                    image: fumeGraf5,
                    visibility: '5%',
                    solarEnergy: '87%',
                    uvTransmission: '<2%'
                },
                { 
                    name: '20%', 
                    image: fumeGraf20, 
                    visibility: '19%',
                    solarEnergy: '88%',
                    uvTransmission: '<2%'
                },
                { 
                    name: '50%', 
                    image: fumeGraf50,
                    visibility: '50%',
                    solarEnergy: '75%',
                    uvTransmission: '<5%'
                },
            ]
        },
        { 
            name: 'Professional Fumê - Verde', 
            description: '', 
            gradations: [
                { name:'Sem película', image: Default },
                { 
                    name: '5%', 
                    image: fumeGreen5,
                    visibility: '5%',
                    solarEnergy: '85%',
                    uvTransmission: '2%'
                },
                { 
                    name: '20%', 
                    image: fumeGreen20,
                    visibility: '20%',
                    solarEnergy: '86%',
                    uvTransmission: '2%'
                },
                { 
                    name: '50%', 
                    image: fumeGreen50,
                    visibility: '50%',
                    solarEnergy: '75%',
                    uvTransmission: '5%'
                },
            ]
        },
        // ----
        // metalizada
        { 
            name: 'Metalizada', 
            description: 'Película semi-brilho profissional. Muito eficiente contra o calor proveniente dos raios solares, sem ser totalmente espelhada', 
            gradations: [
                { name:'Sem película', image: Default },
                { 
                    name: '5%', 
                    image: metal5,
                    visibility: '8%',
                    solarEnergy: '46%',
                    uvTransmission: '<2%'
                },
                { 
                    name: '20%', 
                    image: metal20,
                    visibility: '18%',
                    solarEnergy: '59%',
                    uvTransmission: '<5%'
                },
                { 
                    name: '35%', 
                    image: metal35,
                    visibility: '38%',
                    solarEnergy: '48%',
                    uvTransmission: '<5%'
                },
            ]
        },
        // segurança
        { 
            name: 'Segurança', 
            description: 'Películas mais espessas e resistentes, dão mais resistência ao vidro e impedem que ele se despedace na eventualidade da quebra', 
            gradations: [
                { name:'Sem película', image: Default },
                { 
                    name:'5% 4M', 
                    image: security5,
                    visibility: '5%',
                    solarEnergy: '81%',
                    uvTransmission: '2%'
                },
                { 
                    name: '20% 4M', 
                    image: security20,
                    visibility: '20%',
                    solarEnergy: '87%',
                    uvTransmission: '2%'
                },
                { 
                    name: '35% 4M', 
                    image: security35,
                    visibility: '5%',
                    solarEnergy: '87%',
                    uvTransmission: '2%'
                },
                { 
                    name: 'Transparente(Sem bloqueio de UV e IR) 4M', 
                    image: security70,
                    visibility: '87%',
                    solarEnergy: '80%',
                    uvTransmission: '<5%'
                }, 
                { 
                    name: 'Transparente(Sem bloqueio de UV e IR) 2M', 
                    image: security70,
                    visibility: '85%',
                    solarEnergy: '80%',
                    uvTransmission: '<5%'
                } 
            ] 
        },
        // jateada
        { 
             name: 'Película Jateada', 
             description: 'Película branca translúcida, impede a visão sem tirar a luminosidade do ambiente', 
             gradations: [
                { name:'Sem película', image: Default },
                { 
                    name:'Visualização', 
                    image: pJateada,
                    visibility: '0%',
                    solarEnergy: '10%',
                    uvTransmission: '5%'

                }
             ] 
        },
        { 
             name: 'Vinil Jateado', 
             description: 'Um pouco mais transparente que a Película Jateada, o Vinil Jateado é indicado quando se necessita privacidade sem fechar muito o ambiente', 
             gradations: [
                { name:'Sem película', image: Default },
                { 
                    name:'Visualização', 
                    image: vJateado,
                    visibility: '15%',
                    solarEnergy: '30%',
                    uvTransmission: '5%'
                }
             ] 
        },
        // prata espelhada
        { 
             name: 'Prata Espelhada', 
             description: 'Película prata em ambos os lados, tem a maior eficiência no bloqueio do calor do sol entre as películas, pois ao mesmo tempo filtra e reflete os raios UV e IR. Disponível na graduação 5%', 
             gradations: [ 
                { name:'Sem película', image: Default },
                { 
                    name:'Visualização', 
                    image: silver,
                    visibility: '6%',
                    solarEnergy: '11%',
                    uvTransmission: '1%' 
                }
            ] 
        },
        // silver black
        { 
             name: 'Silver Black', 
             description: 'Película extra-escura (graduação 2%), prata no lado externo e fumê no lado interno. Grande capacidade de bloqueio de calor do sol', 
             gradations: [
                { name:'Sem película', image: Default },
                { 
                    name: '2%', 
                    image: silverBlack,
                    visibility: '2%',
                    solarEnergy: '15%',
                    uvTransmission: '2%'
                }
             ] 
        },
        // colorida
        { 
             name: 'Espelhada (Colorida)',
             description: 'Películas espelhadas em cores diversas, com função decorativa. (OBS: Visualização externa)', 
             gradations: [
                { name:'Sem película', image: Default },
                { 
                    name: 'Vermelho Espelhado', 
                    image: red,
                    visibility: '1,4%',
                    solarEnergy: '20%',
                    uvTransmission: '<2%'
                }, 
                { 
                    name: 'Verde Espelhado', 
                    image: green,
                    visibility: '18,68%',
                    solarEnergy: '18%',
                    uvTransmission: '<2%'
                }, 
                { 
                    name: 'Azul Espelhado', 
                    image: blue,
                    visibility: '5,49%',
                    solarEnergy: '18%',
                    uvTransmission: '<2%'
                },
                {   
                    name: 'Dourada', 
                    image: gold,
                    visibility: '18,6%',
                    solarEnergy: '33%',
                    uvTransmission: '2%'
                }, 
                { 
                    name: 'Bronze', 
                    image: bronze,
                    visibility: '7,9%',
                    solarEnergy: '15%',
                    uvTransmission: '<2%'
                }
        ]},
        { 
             name: 'Museu 56D', 
             description: 'Pelicula metalizada clara (56%)', 
             gradations: [
                { name:'Sem película', image: Default },
                { 
                    name: 'Visualização', 
                    image: museu,
                    visibility: '60%',
                    solarEnergy: '57%',
                    uvTransmission: '<5%'
                },
             ] 
        },
        { 
             name: 'LG-80', 
             description: 'Película clara (80%) com grande índice de bloqueio de UV (99%). Indicada para vitrines, para evitar o desbotamento causado pela incidência de raios solares. Pouco bloqueio de IR (calor).', 
             gradations: [
                { name:'Sem película', image: Default },
                { 
                    name: 'Visualização', 
                    image: lg80,
                    visibility: '71%',
                    solarEnergy: '65%',
                    uvTransmission: '<5%'
                },
             ] 
        },
        { 
             name: 'Opacas', 
             description: 'Películas opacas, utilizadas quando se deseja impedir totalmente a visibilidade através do vidro. Opção de preta (Blackout) ou branca (White-Out)', 
             gradations: [
                { name:'Sem película', image: Default },
                { 
                    name: 'White-Out', 
                    image: white,
                    uvTransmission: '<5%'
                },
                { 
                    name: 'Blackout', 
                    image: black
                }
             ] 
        },
        { 
            id: 'nano',
            name: 'Nanocerâmica', 
            description: 'Película premium, com alta eficiência no bloqueio de calor e UV. A versão mais clara (70%) é ideal para vitrines ou onde se deseja diminuir a incidência de calor do sol, mantendo totalmente a visibilidade.', 
            gradations: [
               { name:'Sem película', image: Default },
               { 
                    name: '5%', 
                    image: nano5,
                    visibility: '5%',
                    solarEnergy: '10%',
                    uvTransmission: '1%'
                },
                { 
                    name: '20%', 
                    image: nano20,
                    visibility: '20%',
                    solarEnergy: '60%',
                    uvTransmission: '1%'
                },
                { 
                    name: '35%', 
                    image: nano35,
                    visibility: '35%',
                    solarEnergy: '50%',
                    uvTransmission: '1%'
                },
                { 
                    name: '70%', 
                    image: nano70,
                    visibility: '70%',
                    solarEnergy: '30%',
                    uvTransmission: '1%'
                }
        ]},
        { 
            name: 'Venetian', 
            description: 'Películas listradas, utilizadas quando se deseja separar ambientes sem impedir totalmente a visibilidade.', 
            gradations: [
               { name:'Sem película', image: Default },
               { 
                   name: 'Mini-blind', 
                   image: miniB
               },
               { 
                   name: 'Venetian', 
                   image: venetian
               },
               { 
                   name: 'Bold Block', 
                   image: boldB
               }
       ]},
    ];

    const toggleCard = (index) => {
        setOpenCard(openCard === index ? null : index);

                // Quando um card for aberto, resetamos as graduações dos outros para 'Sem película'
        if (openCard !== index) {
            setSelectedGraduation((prevState) => {
                const newState = {};
                // Mantém a graduação do card aberto, os outros ficam com 'Sem película'
                newState[index] = prevState[index] || 'Sem película';
                return newState;
            });
        }
    };

    // Função para obter a imagem com base na graduação do produto
    const getGraduationImage = (productIndex, graduation) => {
        const product = products[productIndex];
        const gradImage = product.gradations.find((grad) => grad.name === graduation)?.image;
        return gradImage || Default; // Caso não tenha imagem, retorna uma imagem padrão
    };

    // Definir os produtos com graduações e suas imagens associadas

    const handleGraduationClick = (productIndex, graduation) => {
        setSelectedGraduation((prevState) => ({
            ...prevState,
            [productIndex]: graduation
        }));
    };

    return (
        <section className={styles.products_container}>
            <div>
                <ul className={styles.products}>
                    {products.map((product, productIndex) => (
                        <li key={productIndex} className={`${styles.product} ${openCard === productIndex ? styles.open : ''}`}>
                            <div className={styles.imageContainer}>
                                {/* A imagem aqui depende da graduação selecionada */}
                                <img className={styles.image}
                                    src={selectedGraduation[productIndex] 
                                        ? getGraduationImage(productIndex, selectedGraduation[productIndex]) 
                                        : Default} 
                                    alt={product.name} 
                                />
                                {/* {selectedGraduation[productIndex] && (
                                    <p className={styles.graduationDescription}>
                                        {product.gradations.find(grad => grad.name === selectedGraduation[productIndex])?.description}
                                    </p>
                                )} */}
                                <h3>{product.name} {selectedGraduation[productIndex] && selectedGraduation[productIndex] !== 'Sem película' ? `- ${selectedGraduation[productIndex]}` : ''}</h3>
                                <p>{product.description}</p>
                                {selectedGraduation[productIndex] && selectedGraduation[productIndex] !== 'Sem película' && (
                                    <div className={styles.graduationDescription}>
                                        {product.gradations.find(grad => grad.name === selectedGraduation[productIndex])?.visibility && (
                                            <p><strong>Transmissão de Visibilidade:</strong> {product.gradations.find(grad => grad.name === selectedGraduation[productIndex])?.visibility}</p>
                                        )}
                                        {product.gradations.find(grad => grad.name === selectedGraduation[productIndex])?.solarEnergy && (
                                            <p><strong>Transmissão de Energia Solar:</strong> {product.gradations.find(grad => grad.name === selectedGraduation[productIndex])?.solarEnergy}</p>
                                        )}
                                        {product.gradations.find(grad => grad.name === selectedGraduation[productIndex])?.uvTransmission && (
                                            <p><strong>Transmissão de UV:</strong> {product.gradations.find(grad => grad.name === selectedGraduation[productIndex])?.uvTransmission}</p>
                                        )}
                                    </div>
                                )}
                                
                                {product.gradations.length > 0 && (
                                    <>
                                        <h4 onClick={() => toggleCard(productIndex)}>Aplicações:</h4>
                                        <ul>
                                            {product.gradations.map((gradation, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleGraduationClick(productIndex, gradation.name)} // Atualiza a imagem com base na graduação
                                                    style={{ cursor: 'pointer', color: '#007BFF' }}
                                                >
                                                    {gradation.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                <button className={styles.expand_button} onClick={() => toggleCard(productIndex)}>
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            

        </section>
    );
}



export default Products