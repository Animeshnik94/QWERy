import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
    <div className="flex flex-row items-center">
      <div>
        <MagnifyingGlassIcon className="h-4 w-4 text-white" />
      </div>
      <input
        className="pl-4 w-3xs md:w-22 text-white bg-transparent border-none hover:border-none focus:border-none focus:outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}
