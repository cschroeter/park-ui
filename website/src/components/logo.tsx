import { styled } from 'styled-system/jsx'

export const Logo = () => {
  return (
    <styled.svg height="7" viewBox="0 0 122 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Park UI Logo</title>
      <styled.rect width="121.424" height="9" rx="4" fill="accent.default" />
      <styled.path
        d="M71.5 10H68.5V26H71.5V21H76.25L79 26H82.4238L78.0238 18L82.4238 10H79L74.6 18H71.5V10Z"
        fill="accent.fg"
      />
      <styled.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.5 10H48V26H51V21H54.9381L57.6881 26H61.1119L58.025 20.3874C59.7922 19.4726 61 17.6273 61 15.5C61 12.4624 58.5376 10 55.5 10ZM55.5 18H51V13H55.5C56.8807 13 58 14.1193 58 15.5C58 16.8807 56.8807 18 55.5 18Z"
        fill="accent.fg"
      />
      <styled.path
        d="M31.788 12.0454L30.663 10H34.0869L35.1869 12H35.2369L35.2119 12.0454L42.8869 26H36V30L32.1383 23H37.813L33.5 15.158L27.5368 26H24.113L31.788 12.0454Z"
        fill="accent.fg"
      />
      <styled.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10H17.5C20.5376 10 23 12.4624 23 15.5C23 18.5376 20.5376 21 17.5 21H13V26H10V10ZM13 18H17.5C18.8807 18 20 16.8807 20 15.5C20 14.1193 18.8807 13 17.5 13H13V18Z"
        fill="accent.fg"
      />
      <rect x="93" y="10" width="20" height="16" rx="2" fill="var(--colors-accent-fg)" />
      <styled.path
        d="M98.4238 14V18.5C98.4238 19.8807 99.5431 21 100.924 21V21C102.305 21 103.424 19.8807 103.424 18.5V14"
        stroke="accent.default"
        strokeWidth="2"
      />
      <styled.path d="M107.424 14V22" stroke="accent.default" strokeWidth="2" />
    </styled.svg>
  )
}
