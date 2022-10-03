import NotesTitles from "layouts/NotesTitles";

export default {
    title: "NotesTitles",
    component: NotesTitles,
    argTypes: {
        size: {
            type: "string",
            description: "Notes titles",
            defaultValue: "default",
            options: ["default", "default2"],
            control: {
                type: "radio"
            }
        }
    }
}

const Template = (arg: any) => <NotesTitles {...arg}/>

export const Default = Template.bind({});
//@ts-ignore
Default.args = {
    size: "default"
}