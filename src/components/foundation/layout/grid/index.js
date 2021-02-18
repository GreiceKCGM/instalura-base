import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';


const Container = styled.div`
    width: 100%;
    padding-right: 28px;
    padding-left: 28px;
    margin-right:auto;
    margin-left:auto;
    max-width: initial;

    ${breakpointsMedia({
            
        sm: css`
            max-width: 576px;
        `,
        md: css`
            max-width: 768px;
            padding-right: 16px;
            padding-left: 16px;
        `,
        lg: css`
            max-width: 1160px;
        `,
        xl: css`
            max-width: 1222px;
        `,
    })}
    
`;

const Row = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -16px;
margin-left: -16px;

`;

const Col = styled.div`
    padding-right: 16px;
    padding-left: 16px;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

`;

export const Grid = {
    Container,
    Row,
    Col,

};