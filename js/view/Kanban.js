import Column from "./Columns.js";

export default class Kanban {
    constructor(root) {
        this.root = root;


        Kanban.columns().forEach(column => {
            // todo: create an instance Column class
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.elements.root);
        })
    }

    static columns(){
        return [
            {
                id: 1,
                title: "Start",
            },
            {
                id: 2,
                title: "In Progress",
            },
            {
                id: 3,
                title: "Completed",
            },
        ]
    }
}
