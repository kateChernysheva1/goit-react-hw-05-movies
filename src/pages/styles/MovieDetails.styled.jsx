import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
`;

export const Back = styled(Link)`
  color: #0c0c36;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid blue;
  border-radius: 15px;
  padding: 8px 16px;
  display: inline-flex;
`;

export const ErrorMsg = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  font-weight: 600;
`;
