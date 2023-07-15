import useQuiosco from '../hooks/useQuiosco'
import Image from 'next/image'
import Categoria from './Categoria'
export default function Sidebar() {
  const { categorias } = useQuiosco()

  return (
    <>
      <Image
        width={300}
        height={100}
        src={'/assets/img/logo.svg'}
        alt="imagen logo"
        className='p-5 m-auto'
      />

      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  )
}
