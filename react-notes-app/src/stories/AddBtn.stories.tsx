import AddBtn from "../layouts/AddBtn";

export default {
    title: "AddBtn",
    component: AddBtn,
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

const Template = (arg: any) => <AddBtn {...arg}/>

export const Default = Template.bind({});
//@ts-ignore
Default.args = {
    size: "default"
}