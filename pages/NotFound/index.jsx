import { Link } from 'react-router-dom';
import {
  NotFoundWrapper,
  ErrorCode,
  ErrorMessage,
  ErrorDescription,
  HomeButton,
} from './NotFound.styles';

function NotFound() {
  return (
    <NotFoundWrapper>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>페이지를 찾을 수 없습니다</ErrorMessage>
      <ErrorDescription>
        요청하신 페이지가 아직 준비 중이거나 존재하지 않습니다.
      </ErrorDescription>
      <HomeButton to="/">홈으로 돌아가기</HomeButton>
    </NotFoundWrapper>
  );
}

export default NotFound;