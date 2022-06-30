import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  outline: 1px solid blue;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;

  :hover {
    background-color: grey;
  }
`;

export const Avatar = styled.div`
  /* width: 32px;
  height: 32px;
  background-color: #bada55; */
  display: inline-flex;
  border-radius: 50%;
  border: 4px solid ${p => (p.isOnline ? 'green' : 'red')};
  color: #2a2a2a;
`;

export const UserName = styled.p``;

export const PointsPopover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  transform: translateX(100%);
  height: 100%;
  background-color: #bada55;
`;

export const PointsLabel = styled.p`
  font-size: 12px;
  line-height: 1.5;
`;

export const Points = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  color: ${p => (p.variant === 'total' ? 'orange' : 'red')};
`;
