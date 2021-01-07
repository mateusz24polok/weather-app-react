import styled, { css } from "styled-components";

type DetailTextProps = {
  right?: boolean;
};

type ContainerProps = {
  $loading?: boolean;
};

export const Container = styled.div<ContainerProps>`
  border: 2px solid ${({ theme }) => theme.colors.contours};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 10px;
  min-height: 280px;

  ${({$loading}) => $loading && css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const City = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0;
`;

export const IconAndTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Temperature = styled(City)`
  margin: 0 0 10px 0;
`;

export const DetailsContainer = styled(IconAndTemperatureContainer)`
  justify-content: space-between;
`;

export const DetailsBox = styled.div`
  padding: 10px 40px;
`;

export const DetailsText = styled.p<DetailTextProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.detailsText};
  text-align: ${({ right }) => (right ? "right" : "left")};
`;
