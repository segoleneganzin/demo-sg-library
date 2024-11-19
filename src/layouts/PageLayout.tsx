import Header from './Header.js';
import { ReactNode } from 'react';
/**
 * Application layout.
 * Use into main.jsx
 * @param {object} props
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element}
 */
const PageLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
