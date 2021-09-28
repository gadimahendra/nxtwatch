import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  margin: 20px;
  align-self: ${props => props.selfAlign};
  margin: ${props => props.margin};
`

export const Image = styled.img`
  width: 200px; ;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 500;
  font-family: roboto;
  margin: 0;
`
export const Company = styled.p`
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
  font-family: roboto;
  margin-left: ${props => props.marginL};
`
