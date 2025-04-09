import { FaArrowRight } from 'react-icons/fa'

export default function ReadingMore() {
  return (
    <div className="flex flex-row items-center">
      <a
        href="#"
        className="mr-1"
        style={{
          color: '#FBD784',
        }}
      >
        read more
      </a>
      <FaArrowRight className="text-[#FBD784]"></FaArrowRight>
    </div>
  )
}
