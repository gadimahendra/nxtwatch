import styled from 'styled-components'

export const TrendingContainer = styled.li`
  display: flex;
  flex-direction: ${props => props.direction};
  margin: 20px;
  align-self: ${props => props.selfAlign};
  margin: ${props => props.margin};
`

export const Image = styled.img`
  width: 40%;
`
export const Heading = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 500;
  font-family: roboto;
`
export const Company = styled.p`
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
  font-family: roboto;
  margin-left: ${props => props.marginL};
`
