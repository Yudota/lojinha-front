import { ReactNode } from "react"

function PageWrapper({ 
  title, 
  children, 
  className = '', 
  showTitle = false 
}: { 
  title?: string, 
  children: ReactNode, 
  className?: string, 
  showTitle?: boolean 
}) {
  return (
    <div className={`page-wrapper ${className}`}>
      {showTitle && title && <h1>{title}</h1>}
      <div>{children}</div>
    </div>
  )
}
export default PageWrapper;