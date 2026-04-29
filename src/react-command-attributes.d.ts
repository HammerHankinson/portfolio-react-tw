/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react'

declare module 'react' {
  interface ButtonHTMLAttributes<T> {
    command?: 'show-modal' | 'close' | 'request-close'
    commandfor?: string
  }
}
