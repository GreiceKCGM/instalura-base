import React from 'react';
import { Logo } from '../../../theme/logo';
import { MenuWrapper } from './styles/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url: '/'
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq'
  },
  {
    texto: 'Sobre',
    url: '/sobre'
  }
];

export default function Menu(){
  
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map( (link) => (
          <li key={link.url}>
              <a href={link.url}>
                {link.texto}

              </a>
            </li>
          
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RigthSide>
        <button>
          Entrar
        </button>
        <button>
          Cadastrar
        </button>
      </MenuWrapper.RigthSide>

    </MenuWrapper>
  )
}