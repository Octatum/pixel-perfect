import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../components/Text';
import { device } from '../../../utils/device';

const Cell = styled.div`
  width: 100%;
  height: 100%;
  grid-column: span ${({ highlight }) => (highlight ? 2 : 1)};
  position: relative;
  transition: 0.3s ease all;
  overflow: hidden;
  
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('${({ image }) => image}');
    background-position: center;
    background-size: cover;
    transform: scale(1);
    transition: inherit;
  }

  :hover {
    > div {
      opacity: 1;
    }

    ::before {
      transform: scale(1.05);
    }
  }
`;

const Overlay = styled.div`
  transition: inherit;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  padding: 1rem 1.8rem;
  opacity: 0;

  ${device.mobile} {
    padding: 1rem; 
  }
`;

const TextDelimiter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  width: ${({ highlight }) => (highlight ? 60 : 100)}%;
`;

const CellHeader = styled(Text)`
  margin-bottom: 0.8rem;
`;

const FeaturedCell = (props) => {
  const { highlight, name, description, ...rest } = props;

  return (
    <Cell highlight={highlight} {...rest}>
      <Overlay>
        <TextDelimiter highlight={highlight}>
          <CellHeader mobileSize={highlight ? 5 : 2} size={highlight ? 7 : 3} align="right" bold>
            {name}
          </CellHeader>
          <Text size={1} align="right">
            {description}
          </Text>
        </TextDelimiter>
      </Overlay>
    </Cell>
  );
};

FeaturedCell.defaultProps = {
  highlight: false,
};

FeaturedCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};

export default FeaturedCell;
