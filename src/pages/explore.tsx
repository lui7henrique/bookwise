import { Binoculars } from '@phosphor-icons/react'

import { Layout } from 'src/components/Layout'
import { Categories } from 'src/components/Categories'
import { useCallback, useState } from 'react'
import { Books } from 'src/components/Books'
import Head from 'next/head'

export default function Explore() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleResetCategories = useCallback(() => setSelectedCategories([]), [])

  const handleSelectCategory = useCallback(
    (id: string) => {
      const isChecked = selectedCategories.includes(id)

      if (isChecked) {
        return setSelectedCategories((prevCategories) =>
          prevCategories.filter((categoryId) => categoryId !== id),
        )
      }

      setSelectedCategories((prevCategories) => [...prevCategories, id])
    },
    [selectedCategories],
  )

  return (
    <>
      <Head>
        <title>BookWise | Explorar</title>
      </Head>

      <Layout.Root>
        <Layout.Sidebar />

        <Layout.Container>
          <Layout.Header>
            <Layout.HeaderIcon icon={Binoculars} />
            <Layout.HeaderTitle>Explorar</Layout.HeaderTitle>
          </Layout.Header>

          <div className="flex flex-col gap-16">
            <Categories
              selectedCategories={selectedCategories}
              onReset={handleResetCategories}
              onSelect={handleSelectCategory}
            />

            <Books categories={selectedCategories} />
          </div>
        </Layout.Container>
      </Layout.Root>
    </>
  )
}
