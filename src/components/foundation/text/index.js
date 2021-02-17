import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';


export const TextStyleVariants = {
    paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontiSize};
        font-Weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontiWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};

    `,

    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontiSize};
        font-Weight: ${({ theme }) => theme.typographyVariants.smallestException.fontiWeight};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};

    `,
}




const TextBase = styled.span `
  
  ${(props) => TextStyleVariants[props.variants]}

   ${propToStyle('textAlign')}
   ${propToStyle('marginBottom')}
   ${propToStyle('margin')}


/* 
  ${function(props) { 
      return propToStyle('textAlign', props);
  }} */

  /* ${function(props){
      console.log(props)

  }} */

`;

export default function Text({ tag, variant, children, ...props }) {
    return (
        <TextBase 
            as={tag}
            variant={variant}
            {...props}
        >
            
            {children}
        </TextBase>

    );
}


Text.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
};

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}
