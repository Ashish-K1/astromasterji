// import Link from "next/link"
import { Link } from "@radix-ui/react-navigation-menu"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  href: string
  bgColor?: string
  iconBgColor?: string
}

export default function ServiceCard({
  icon,
  title,
  href,
  bgColor = "bg-white",
  iconBgColor = "bg-gray-100",
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div
        className={`${bgColor} rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform hover:scale-105`}
      >
        <div className={`${iconBgColor} p-4 rounded-full mb-4`}>{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
    </Link>
  )
}
