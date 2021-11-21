import * as ImagePicker from 'expo-image-picker'
import { useField } from 'formact'
import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { Avatar, Dialog, Divider, List, Portal } from 'react-native-paper'

import Box from '../layout/Box'

function PickerDialog(props: {
  visible: boolean
  onClose: () => any
  onSelect: (mode: 'library' | 'camera') => any
}) {
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.onClose}>
        <Dialog.Content>
          <List.Item
            onPress={() => props.onSelect('library')}
            title="From media library"
            left={(props) => <List.Icon icon="image" {...props} />}
          />
          <Divider />
          <List.Item
            onPress={() => props.onSelect('camera')}
            title="From camera"
            left={(props) => <List.Icon icon="camera" {...props} />}
          />
        </Dialog.Content>
      </Dialog>
    </Portal>
  )
}

export default function PhotoField(props: { name: string }) {
  const field = useField<string>(props)

  const [dialog, setDialog] = React.useState(false)

  const getPhoto = async (mode: 'library' | 'camera') => {
    setDialog(false)

    const modes = {
      camera: {
        permission:
          'requestCameraPermissionsAsync' as 'requestCameraPermissionsAsync',
        launch: 'launchCameraAsync' as 'launchCameraAsync',
      },
      library: {
        permission:
          'requestMediaLibraryPermissionsAsync' as 'requestMediaLibraryPermissionsAsync',
        launch: 'launchImageLibraryAsync' as 'launchImageLibraryAsync',
      },
    }

    const selectedMode = modes[mode]

    const { status } = await ImagePicker[selectedMode.permission]()
    if (status === 'granted') {
      const result = await ImagePicker[selectedMode.launch]({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0,
        aspect: [1, 1],
      })
      if (!result.cancelled) {
        field.update(result.uri)
      }
    }
  }

  const openDialog = () => {
    if (Platform.OS === 'web') {
      getPhoto('camera')
      return
    }

    setDialog(true)
  }

  return (
    <Box center paddingY={1}>
      <TouchableOpacity onPress={openDialog}>
        {field.fieldValue ? (
          <Avatar.Image size={120} source={{ uri: field.fieldValue }} />
        ) : (
          <Avatar.Icon size={120} icon="camera" />
        )}
      </TouchableOpacity>
      <PickerDialog
        visible={dialog}
        onClose={() => setDialog(false)}
        onSelect={getPhoto}
      />
    </Box>
  )
}
