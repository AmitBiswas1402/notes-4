import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParamas, setsearchParamas] = useSearchParams()
  const pasteId = searchParamas.get('pasteId')

  return (
    <div className="flex flex-row gap-7">
      <input 
        className="p-2 rounded-2xl mt-2"
        type="text"
        placeholder="enter title text here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>
        {
          pasteId ? 'Update My Paste' : 'Create My Paste'
        }
      </button>
    </div>

  )
}
export default Home