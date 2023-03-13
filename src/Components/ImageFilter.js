
import React from 'react'
import {IconeTema} from '../Components/UI'
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'


export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Utilidade: <IconeTema src={utilidades} alt="Utilidade" />,
    Saude: <IconeTema src={saude} alt="Saude" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    Default: <IconeTema src={outros} alt="Default" />,
  };

  return Images[type] || Images.Default;
}
