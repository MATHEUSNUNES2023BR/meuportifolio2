import styled from 'styled-components';
interface ContainerProps {
  fluid?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => props.fluid ? '100%' : '1200px'};
  margin: 0 auto;
  padding: 0 1rem;
`;

export default Container;