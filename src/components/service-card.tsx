import type React from "react"
import { Link } from "react-router-dom"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  href: string
  bgColor?: string
  iconBgColor?: string
  onClick?: (e: React.MouseEvent) => void
}

export default function ServiceCard({
  icon,
  title,
  href,
  bgColor = "bg-white",
  iconBgColor = "bg-gray-100",
  onClick,
}: ServiceCardProps) {
  const content = (
      <div
        className={`${bgColor} rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform hover:scale-105`}
      >
        <div className={`${iconBgColor} p-4 rounded-full mb-4`}>{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
    )

    if (onClick) {
      return (
        <div className="cursor-pointer" onClick={onClick}>
          {content}
        </div>
      )
    }
  
    return <Link to={href}>{content}</Link>
}
