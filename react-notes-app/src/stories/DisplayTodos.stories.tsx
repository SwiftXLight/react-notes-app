import DisplayTodos from "../components/DisplayTodos";
import { Provider } from "react-redux";
import store from "../redux/store";

export default {
    title: "DisplayTodos",
    component: DisplayTodos,
    argTypes: {
        size: {
            type: "string",
            description: "Button size",
            defaultValue: "default",
            options: ["default", "default2"],
            control: {
                type: "radio"
            }
        }
    }
}

const Template = (arg: any) => <Provider store={store}><DisplayTodos {...arg}/></Provider>

export const Default = Template.bind({});
//@ts-ignore
Default.args = {
    size: "default"
}