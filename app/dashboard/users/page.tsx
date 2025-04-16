// app/dashboard/users/page.tsx

import React from 'react'
import Link from 'next/link'

const UsersPage = () => {
  return (
    <div>
      <h1>Hi hello</h1>
      <ul>
        <li><Link href="/dashboard/users/1">User_1</Link></li>
        <li><Link href="/dashboard/users/2">User_2</Link></li>
        <li><Link href="/dashboard/users/3">User_3</Link></li>
        <li><Link href="/dashboard/users/4">User_4</Link></li>
        <li><Link href="/dashboard/users/5">User_5</Link></li>
      </ul>
    </div>
  )
}

export default UsersPage
