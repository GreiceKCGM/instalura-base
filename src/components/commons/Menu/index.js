import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/logo';
import MenuWrapper from './styles/MenuWrapper';
import Button from '../Button';
import Text from '../../foundation/text';

/* alterado */

const links = [
  {
    texto: 'Home',
    url: '/home',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];
export default function Menu({ onCadastrarClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            {/* <NextLink href={link.url}>
              <a>
                {link.texto}
              </a>
            </NextLink> */}
            <Text variant="paragraph1" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">Entrar</Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
