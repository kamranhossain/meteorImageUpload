Items.attachSchema(new SimpleSchema({
    title: {
        type: String,
        defaultValue: "",
        label: "Title (max: 20) :",
        max: 20,
    },
    image: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'slingshotFileUpload',
                slingshotdirective: 'myImageUploads',
            }
        }
    },
}));
