import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  height: 43.75rem;
  flex-wrap: wrap;
  width: 100%;
`

export const InsertUsers = styled.div`
  display: flex;
  flex-direction: row;
`

export const NumberOfUsers = styled.p`
  ${withTheme('margin', 'sizes.rem15')};
  ${withTheme('font-size', 'sizes.rem12')};

`

export const AddUsersButton = styled.button`
  ${withTheme('padding', 'sizes.rem04')};
  ${withTheme('height', 'sizes.rem2')};
  ${withTheme('margin-top', 'sizes.rem1')};
  ${withTheme('background-color', 'colors.coral')};
  border: 2px solid black;
`

export const TravelportLogo = styled.img`
  width: 26.5625rem;
  height: 3.125rem;
  ${withTheme('margin', 'sizes.rem1')};
  ${withTheme('padding-bottom', 'sizes.rem1')};
  border-bottom: 5px solid black;
`
