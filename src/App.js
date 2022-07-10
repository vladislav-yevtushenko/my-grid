import 'handsontable/dist/handsontable.full.css';
import { HotTable } from '@handsontable/react';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.data = [
            ["", "Ford", "Volvo", "Toyota", "Honda"],
            ["2016", 10, 11, 12, 13],
            ["2017", 20, 11, 14, 13],
            ["2018", 30, 15, 12, 13]
        ];
    }

    render() {
        return ( <
            div id = "hot-app" >
            <
            HotTable data = { this.data }
            colHeaders = { true }
            rowHeaders = { true }
            width = "600"
            height = "300"
            stretchH = "all" / >
            <
            /div>
        );
    }
}

export default App;