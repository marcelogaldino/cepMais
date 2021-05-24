import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { HeaderInfo } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderInfo>
      CEP MAIS <FiSearch />
    </HeaderInfo>
  );
};

export default Header;
