import { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'

import useCopyToClipboard from '../hooks/useCopyToClipboard'

const StyledCopyable = styled.div(
  ({ theme: { colors } }) => css`
    cursor: pointer;
    font-size: 32px;
    margin-bottom: 16px;
    padding: 4px;
    text-decoration: underline;
    text-decoration-color: ${colors.ultimateGray};
    text-decoration-style: dashed;

    &:hover {
      text-decoration-color: ${colors.illuminating};
    }
  `,
)

const Copyable: FunctionComponent<{ text: string }> = ({ text }) => {
  const { handleCopy } = useCopyToClipboard()

  return (
    <StyledCopyable onClick={() => handleCopy(text)}>{text}</StyledCopyable>
  )
}

export default Copyable
