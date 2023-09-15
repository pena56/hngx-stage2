import { Banner, Navbar, MovieCard, Footer } from "@/components"
import { useTopRated } from "@/api"

function Index() {
  const { data } = useTopRated()

  return (
    <div className="w-full bg-white">
      <Navbar />
      <Banner />

      <main className="w-full px-3 md:px-6">
        <div className="w-full md:max-w-[1244px] mx-auto my-[35px] md:my-[70px] overflow-hidden">
          <div className="w-full flex items-center justify-between mb-[22px] md:mb-[44px]">
            <p className="font-bold text-3xl md:text-4xl text-black">
              Featured Movie
            </p>

            <button className="flex gap-2 items-center text-rose-700 text-base md:text-lg">
              See more
              <img src="/right-caret.svg" alt="" />
            </button>
          </div>

          <div className="w-full flex flex-wrap justify-between items-start">
            {data?.results?.slice(0, 10)?.map((item) => (
              <MovieCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Index

// grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4
