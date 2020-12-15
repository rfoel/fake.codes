import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import copy from 'copy-to-clipboard'

type CopyToClipboard = {
  isCopied: boolean
  handleCopy(text: string): void
}

const useCopyToClipboard = (
  resetInterval: boolean = false,
): CopyToClipboard => {
  const [isCopied, setCopied] = useState(false)

  const handleCopy = useCallback(text => {
    try {
      copy(text.toString())
      setCopied(true)
      toast('copied!')
    } catch {
      setCopied(false)
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`,
      )
    }
  }, [])

  useEffect(() => {
    let timeout: number

    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isCopied, resetInterval])

  return { isCopied, handleCopy }
}

export default useCopyToClipboard
