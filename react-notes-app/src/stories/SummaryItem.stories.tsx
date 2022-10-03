import SummaryItems from "../components/UI/SummaryItems";

export default {
    title: "SummaryItems",
    component: SummaryItems,
    argTypes: {
        activeTask: {
            type: "number",
            description: "activeTask counter",
            defaultValue: 0
        },
        archiveTask: {
            type: "number",
            description: "archiveTask counter",
            defaultValue: 0
        },
        activeRandomThought: {
            type: "number",
            description: "activeRandomThought counter",
            defaultValue: 0
        },
        archiveRandomThoughtArc: {
            type: "number",
            description: "archiveRandomThoughtArc counter",
            defaultValue: 0
        },
        activeIdea: {
            type: "number",
            description: "activeIdea counter",
            defaultValue: 0
        },
        archiveIdea: {
            type: "number",
            description: "archiveIdea counter",
            defaultValue: 0
        }
    }
}

const Template = (arg: any) => <SummaryItems {...arg}/>
export const Default = Template.bind({});
//@ts-ignore
Default.args = {
    activeTask: 0,
    archiveTask: 0,
    activeRandomThought: 0,
    archiveRandomThoughtArc: 0,
    activeIdea: 0,
    archiveIdea: 0
}