import ActiveModal from "stories/ActiveModal";

export default {
    title: "ActiveModal",
    component: ActiveModal,
    argTypes: {

    }
}

const Template = (arg: any) => <ActiveModal {...arg}/>

export const Default = Template.bind({});
//@ts-ignore
Default.args = {

}