// app/dashboard/users/[id]/page.tsx

interface Props {
  params: {
    id: string
  }
}

const UserDetail = ({ params }: Props) => {
  return (
    <div>
      <h1>User ID: {params.id}</h1>
      <p>This is the detail page for user {params.id}.</p>
    </div>
  )
}

export default UserDetail
