import { useQuery } from '@tanstack/react-query'
import { getPets } from '../apis/petApi'

function Pets() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['pets'],
    queryFn: () => getPets(),
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    console.error(error.message)
    return <p>Error...</p>
  }

  console.log(data)

  return (
    <>
      <h1>Pets</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {data.map((pet: { id: number; name: string; image: string }) => (
          <div
            key={pet.id}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <img
              src={`/images/${pet.image}`}
              alt={pet.name}
              style={{ width: '100px', height: '100px' }}
            />
            <p>{pet.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Pets
