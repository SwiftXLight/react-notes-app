import SortBtn from "components/UI/SortBtn";

export default {
    title: "SortBtn",
    component: SortBtn,
    argTypes: {
        size: {
            type: "string",
            description: "Summary titles",
            defaultValue: "default",
            options: ["default", "default2"],
            control: {
                type: "radio"
            }
        },
        children: {
            type: "string",
            description: "Show items",
            defaultValue: "Active",
            options: ["Active", "Archived", "All"],
            control: {
                type: "radio"
            }
        }
    }
}

const Template = (arg: any) => <SortBtn {...arg}/>

export const Default = Template.bind({});
//@ts-ignore
Default.args = {
    size: "default",
    children: "Active"
}