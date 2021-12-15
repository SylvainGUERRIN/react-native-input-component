import React, {useState} from "react";
import {TextInput as TextField} from "react-native"
import {Feather as Icon } from "@expo/vector-icons"
import {createBox} from '@shopify/restyle';
import theme from "../../theme";

const Box = createBox<Theme>();

interface TextInputProps {
    placeholder: string
    icon: string
    validator: (input: string) => boolean
}

const Valid = true
const Invalid = false
const Pristine = null
type InputState = typeof Valid | typeof Invalid | typeof Pristine

const TextInput = ({icon, placeholder, validator}: TextInputProps) => {
    const [state, setState] = useState<InputState>(Pristine)
    const reColor: keyof typeof theme.colors =
        state === Pristine ? "grey" : state === Valid ? "green" : "red"
    const color = theme.colors[reColor]
    //const color = state === Pristine ? "grey" : (state === Valid) ? "green" : "red"

  return (
      <Box flexDirection="row" alignItems="center" height={48} borderRadius={10} borderColor={reColor} borderWidth={1}>
          <Box padding="m">
              <Icon name={icon} size={16} {...{color}} />
          </Box>
          <TextField underlineColorAndroid="transparent" placeholderTextColor="#000000" {...{placeholder}} />
          {
              (state === Valid || state === Invalid) && (
                  <Box borderRadius="m">
                      <Icon
                          name={state === Valid ? "check" : "x"}
                          color="white"
                          size={16}
                      />
                  </Box>
              )
          }
      </Box>
  )
}

export default TextInput
