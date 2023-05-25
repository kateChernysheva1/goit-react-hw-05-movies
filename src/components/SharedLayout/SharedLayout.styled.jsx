import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  left: 0;
  padding: 16px 40px;
  gap: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  a {
    color: #000;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
  }

  .active {
    color: #ff004cef;
  }
`;
