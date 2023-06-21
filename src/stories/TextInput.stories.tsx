import "../styles/global.css";
import type { StoryObj } from "@storybook/react";
import { TextInput } from "../components/TextInput";

export default {
  component: TextInput
}

type Story = StoryObj<typeof TextInput>;
let inputNumber = 2;
function handlePixelValueChange(value: string){
  inputNumber = Number(value);
}

export const Input: Story = {
  render: () => <TextInput name="REM" value={inputNumber} handleChangedInput={handlePixelValueChange} valueHandler={() => {}}  />,
};