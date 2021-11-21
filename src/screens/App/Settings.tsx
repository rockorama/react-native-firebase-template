import React, { Fragment } from 'react'
import { Button, Divider, List } from 'react-native-paper'

import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import { signOut } from '../../firebase/authentication'
import { AppScreenProps } from '../../navigation/stacks/App/types'

type Props = AppScreenProps<'Settings'>

const OPTIONS = [
  {
    title: 'Profile',
    description: 'Update your name and profile picture',
    icon: 'face',
    route: 'Profile' as 'Profile',
  },
  {
    title: 'Change Password',
    description: 'Update your password',
    icon: 'key',
    route: 'ChangePassword' as 'ChangePassword',
  },
]

export default function SettingsScreen(props: Props) {
  return (
    <>
      <ScrollView flex1>
        {OPTIONS.map((option, index) => (
          <Fragment key={option.title}>
            <List.Item
              onPress={() => props.navigation.navigate(option.route)}
              title={option.title}
              description={option.description}
              left={(props) => <List.Icon {...props} icon={option.icon} />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
            />
            <Divider />
          </Fragment>
        ))}
      </ScrollView>
      <Box paddingX={1} paddingY={2} safeArea="bottom">
        <Button onPress={signOut}>Sign out</Button>
      </Box>
    </>
  )
}
