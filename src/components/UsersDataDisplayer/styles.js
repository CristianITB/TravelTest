import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`

export const InsertUsers = styled.div`
  display: flex;
  flex-direction: row;
`

export const NumberOfUsers = styled.p`
  ${withTheme('margin', 'sizes.rem15')};
`

export const AddUsersButton = styled.button`
  ${withTheme('padding', 'sizes.rem04')};
  ${withTheme('height', 'sizes.rem2')};
  ${withTheme('margin-top', 'sizes.rem1')};
`
