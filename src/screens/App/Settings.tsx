import React, { Fragment } from 'react'
import { Divider, List } from 'react-native-paper'

import Button from '../../components/core/Button'
import Box from '../../components/layout/Box'
import ScrollView from '../../components/layout/ScrollView'
import { signOut } from '../../firebase/authentication'
import localize from '../../localization/localize'
import { AppScreenProps } from '../../navigation/stacks/App/types'

type Props = AppScreenProps<'Settings'>

const OPTIONS = [
  {
    title: 'settingsOptionsProfileTitle',
    description: 'settingsOptionsProfileDescription',
    icon: 'face',
    route: 'Profile' as 'Profile',
  },
  {
    title: 'settingsOptionsChangePasswordTitle',
    description: 'settingsOptionsChangePasswordDescription',
    icon: 'key',
    route: 'ChangePassword' as 'ChangePassword',
  },
]

export default function SettingsScreen(props: Props) {
  return (
    <>
      <ScrollView flex1>
        {OPTIONS.map((option) => (
          <Fragment key={option.title}>
            <List.Item
              onPress={() => props.navigation.navigate(option.route)}
              title={localize(option.title)}
              description={localize(option.description)}
              left={(props) => <List.Icon {...props} icon={option.icon} />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
            />
            <Divider />
          </Fragment>
        ))}
      </ScrollView>
      <Box paddingX={1} paddingY={2} safeArea="bottom">
        <Button i18nKey="buttonSignOut" onPress={signOut} />
      </Box>
    </>
  )
}

export const ScreenOptions = { headerTitle: localize('settingsHeader') }
