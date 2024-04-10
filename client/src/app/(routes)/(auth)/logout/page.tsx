import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'
import React from 'react'

type Props = {}

export default function Logout(props: Props) {
  return (
    <Card className="w-1/4 border rounded p-4 space-y-1 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <CardHeader>
        <CardTitle>Sign Out</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl">Are you sure you want to sign out?</p>
        <Button className="my-3 w-full">Sign Out</Button>
      </CardContent>
    </Card>
  )
}
