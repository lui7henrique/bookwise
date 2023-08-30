import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('../Sidebar'), { ssr: false })

export const LayoutSidebar = () => (
  <div className="hidden pb-4 pl-4 pt-4 xl:flex">
    <Sidebar />
  </div>
)
