import { ReactNode } from "react"

export type SubItem = {
  name: string
  path: string
}

export type NavItem = {
  name: string
  path: string
  icon: ReactNode
  subItems?: SubItem[]
}