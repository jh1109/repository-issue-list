import { styled } from 'styled-components';
import { useIssue } from '../../store/issueContext';

const Header = () => {
  const { repository } = useIssue();
  return (
    <HeaderStyle>
      <h1>{repository.owner}</h1>
      <span>/</span>
      <h2>{repository.repo}</h2>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 4rem;
  background: skyblue;
  width: 40rem;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default Header;
