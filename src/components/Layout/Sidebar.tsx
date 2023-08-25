import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('../Sidebar'), { ssr: false })

export const LayoutSidebar = () => (
  <div className="pb-4 pl-4 pt-4">
    <Sidebar />
  </div>
)
