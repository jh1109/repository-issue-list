import { styled } from 'styled-components';

const ErrorPage = () => {
  return (
    <BackdropDivStyle>
      <ErrorSectionStyle>
        <h1>Error!</h1>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <h2>404 Not Found</h2>
      </ErrorSectionStyle>
    </BackdropDivStyle>
  );
};

const BackdropDivStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  padding: 4rem;
`;
const ErrorSectionStyle = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
  width: 30rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 800;
    margin-bottom: 0.8rem;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

export default ErrorPage;
