declare global {
  interface Window {
    testWindowInterface: string
  }
}

// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/lib/react-app.d.ts
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >

  const src: string
  export default src
}
