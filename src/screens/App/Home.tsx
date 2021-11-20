import React from 'react'
import { Button, Title } from 'react-native-paper'

import { signOut } from '../../firebase/authentication'

export default function HomeScreen() {
  return (
    <>
      <Title>Home</Title>
      <Button onPress={signOut}>Sign out</Button>
    </>
  )
}
