import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/text';


const ButtonGhost = css`
    color: ${(props) => get (props.theme,`colors.${props.variant}.color`)
    };
    background: transparent;
`

const ButtonDefault = css`
    color: white;
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)
    };
    color: ${(props) => get (props.theme,`colors.${props.variant}.contrastText`)
    };
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    

    

    ${TextStyleVariantsMap.smallestException}

    ${(props) => {
        // console.log('<Button/>', props.variant, props.theme);
        if(props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault
    }}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    /* ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)} */
    &:hover,
    &:focus {
      opacity: .5;
    }

    ${breakpointsMedia({
        xs: css`
            /*All devices*/
        `,
        md: css`
            /* From md breakpoint*/
        `,
    })}

    ${function(props) {
        console.log('Button', props.theme.breakpoints);

        

        return `
            @media screen and (min-width: ${props.theme.breakpoints.xs}px) {

            }
            @media screen and (min-width: ${props.theme.breakpoints.xs}px) {

            }
            @media screen and (min-width: ${props.theme.breakpoints.md}px) {

            }
        
        `
    }}

`;
