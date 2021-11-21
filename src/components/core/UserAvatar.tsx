import React from 'react'
import { Avatar } from 'react-native-paper'

import { useAuth } from '../../utils/contexts/Auth'

type Props = { size?: number }

export default function UserAvatar({ size = 30 }: Props) {
  const { user } = useAuth()

  if (user?.photoURL) {
    return <Avatar.Image size={30} source={{ uri: user.photoURL }} />
  }

  return (
    <Avatar.Text
      size={size}
      label={(user?.displayName || '')
        .split(' ')
        .map((part) => part[0].toUpperCase())
        .join('')}
    />
  )
}
