import SummaryTitles from "layouts/SummaryTitles";

export default {
    title: "SummaryTitles",
    component: SummaryTitles,
    argTypes: {
        size: {
            type: "string",
            description: "Summary titles",
            defaultValue: "default",
            options: ["default", "default2"],
            control: {
                type: "radio"
            }
        }
    }
}

const Template = (arg: any) => <SummaryTitles {...arg}/>

export const Default = Template.bind({});
//@ts-ignore
Default.args = {
    size: "default"
}