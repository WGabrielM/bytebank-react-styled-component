import React from 'react';
import { Box, Botao } from '../../Components/UI';
import {extratoLista} from '../../info';

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({ id, type, from, value, date}) => {
                return(
                <div key={id}>
                    <div>{type}</div>
                    <div>{FormData}</div>
                </div>
                );
            })}
            <Botao>Ver Mais</Botao>
        </Box>
    )
}

export default Extrato;