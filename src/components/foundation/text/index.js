import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';


export const TextStyleVariantsMap = {
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
   /* ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)}; */
  ${(props) => TextStyleVariantsMap[props.variants]}

`;

export default function Text({ tag, variant, children }) {
    return (
        <TextBase 
            as={tag}
            variant={variant}
        >
            
            {children}
        </TextBase>

    );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}
