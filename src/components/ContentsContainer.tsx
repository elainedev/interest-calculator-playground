import React, { ReactNode } from 'react';
import './ContentsContainer.scss';

type ContentsContainerProps = {
  children: ReactNode;
};

const ContentsContainer: React.FC<ContentsContainerProps> = ({ children }) => (
  <div className='contents-container'>{children}</div>
);

export default ContentsContainer;
