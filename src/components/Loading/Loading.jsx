import styled from '@emotion/styled';

const LoadingP = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  font-weight: 600;
`;

function Loading() {
  return <LoadingP>LOADING...</LoadingP>;
}
export default Loading;
