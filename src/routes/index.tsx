import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'
import { Card, CardHeader, CardDescription, CardTitle } from '../components/ui/card'
import { sampleProducts } from '@/db/seed'
import { ProductCard } from '@/components/ProductCard'



export const Route = createFileRoute('/')({
  component: App,
  // This runs on server during SSR and on client during navigation
  loader: async () => {
    return { products: sampleProducts.slice(0, 3) }
  },
})

async function App() {
  const { products } = Route.useLoaderData();

  return (
    <div className="space-y-12 bg-linear-to-b from-slate-50 via-white to-slate-50 p-6">
      <section>
        <Card className="p-8 shadow-md bg-white/80">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Your favourite e-commerce store</p>
          <CardTitle className="text-2xl font-semibold leading-tight text-slate-900 dark:text-white max-w-2xl">
            <h1>StartShop - Your one-stop shop for all your needs</h1>
          </CardTitle>
          <CardDescription>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Browse Products
              <ArrowRightIcon size={16} />
            </Link>
          </CardDescription>
        </Card>
      </section>

      <section>
        <Card className="p-8 shadow-md bg-white/80">
          <div className="flex items-center justify-between">
            <div>
              <CardHeader className="px-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Recommended</p>
                <CardTitle>Starter picks from the catalog</CardTitle>
              </CardHeader>
              <CardDescription className="text-sm text-slate-600">
                Check out these products
              </CardDescription>
            </div>
            <div>
              <Link to="/products" className="hidden items-center gap-2 rounded-full border border-slate-200
          px-4 py-2 text-xs font-semibold text-slate-700 sm:inline-flex
          transition hover:-translate-y-0.5 hover:shadow-xl">
                View All Products <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </Card>
      </section>
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard product={product} key={`product-${index}`} />
          ))}
        </div>
      </section>
    </div>
  )
}
