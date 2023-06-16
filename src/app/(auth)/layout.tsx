import { ReactNode } from 'react'
import style from './auth.module.css'

export const metadata = {
  title: 'Login',
  description: 'Page de auth',
}

interface AuthLayoutProps{
  children: ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
   <div className={style.bodyPage}>
      {children}
   </div>
  )
}
