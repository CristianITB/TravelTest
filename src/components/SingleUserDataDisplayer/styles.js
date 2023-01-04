import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  ${withTheme('margin', 'sizes.rem07')};
  ${withTheme('margin-left', 'sizes.rem15')};
  border: 2px solid black;
  width: 25%;
  padding: 0.5rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${withTheme('padding', 'sizes.rem0625')}
`

export const UserImage = styled.img`
  ${withTheme('width', 'sizes.rem6')}
  ${withTheme('height', 'sizes.rem6')}
`

export const UserName = styled.p`
  font-weight: bold;
  ${withTheme('margin', 'sizes.rem0625')}
`

export const UserEmail = styled.p`
  ${withTheme('margin', 'sizes.rem0')}
`
